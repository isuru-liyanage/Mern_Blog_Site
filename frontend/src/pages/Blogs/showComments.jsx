import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';

const CommentsList = () => {
  const [comments, setComments] = useState([]);
  const userId = "64ee129b00d057877f86039d"; // Replace this with the actual userId of the authenticated user

  useEffect(() => {
    // Fetch comments from your API endpoint
    axios.get("http://localhost:4000/comment/64f25424e592c53f9051e6c8").then((response) => {
      setComments(response.data.comments);
    });
  }, []);

  return (
    <div>
      <h2>Comments</h2>
      <ul className="comment-list">
        {comments.map((comment) => (
          <li key={comment._id} className="comment-item">
            <p className="user-name">{comment.userName}</p>
            <p className="comment-content">{comment.content}</p>
            {comment.userId === userId && (
              <div className="comment-actions">
                <button className="custom-button"><FontAwesomeIcon icon={faTrash} /></button>
                <button className="custom-button"><FontAwesomeIcon icon={faPenToSquare} /></button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentsList;
