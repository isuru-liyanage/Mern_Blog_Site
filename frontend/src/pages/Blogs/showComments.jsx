import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { withCookies } from "react-cookie";

const CommentsList = () => {
  const [comments, setComments] = useState([]);
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [editedCommentContent, setEditedCommentContent] = useState("");
  const [showEditPopup, setShowEditPopup] = useState(false);
  const userId = "64eb7d175e697179dc08800f"; 

  useEffect(() => {
    axios.get("http://localhost:4000/comment/64f25424e592c53f9051e6c8").then((response) => {
      setComments(response.data.comments);
    });
  }, []);

  const handleEditClick = (commentId, content) => {
    setEditingCommentId(commentId);
    setEditedCommentContent(content);
    setShowEditPopup(true);
  };

  const handleSaveClick = (commentId) => {
    const axiosInstance = axios.create({
      withCredentials: true,
    });
  
    axiosInstance
      .put(`http://localhost:4000/comment/update/${commentId}`, { content: editedCommentContent })
      .then((response) => {
        const updatedComments = comments.map((comment) => {
          if (comment._id === commentId) {
            return { ...comment, content: editedCommentContent };
          }
          return comment;
        });
        setComments(updatedComments);
        setShowEditPopup(false);
        setEditingCommentId(null);
      })
      .catch((error) => {
        console.error("Error updating comment:", error);
      });
  };
  
  const handleDeleteClick = (commentId) => {
    const axiosInstance = axios.create({
      withCredentials: true,
    });
    axiosInstance
      .delete(`http://localhost:4000/comment/delete/${commentId}`)
      .then(() => {
        const updatedComments = comments.filter((comment) => comment._id !== commentId);
        setComments(updatedComments);
      })
      .catch((error) => {
        console.error("Error deleting comment:", error);
      });
  };  

  const handleCancelClick = () => {
    setShowEditPopup(false);
    setEditingCommentId(null);
  };

  return (
    <div>
      <h2>Comments</h2>
      <ul className="comment-list">
        {comments.map((comment) => (
          <li key={comment._id} className="comment-item">
            <p className="user-name">{comment.userName}</p>
            {editingCommentId === comment._id ? (
              <div className="edit-comment-popup">
                <textarea
                  className="edit-comment-textarea"
                  value={editedCommentContent}
                  onChange={(e) => setEditedCommentContent(e.target.value)}
                />
                <button className="custom-button" onClick={() => handleSaveClick(comment._id)}>
                  Save
                </button>
                <button className="custom-button" onClick={handleCancelClick}>
                  Cancel
                </button>
              </div>
            ) : (
              <>
                <p className="comment-content">{comment.content}</p>
                {comment.userId === userId && (
                  <div className="comment-actions">
                    <button
                      className="custom-button"
                      onClick={() => handleEditClick(comment._id, comment.content)}
                    >
                      <FontAwesomeIcon icon={faPenToSquare} />
                    </button>
                    <button
                      className="custom-button"
                      onClick={() => handleDeleteClick(comment._id)}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                )}
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentsList;
