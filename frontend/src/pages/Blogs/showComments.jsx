import React, { useEffect, useState } from "react";
import axios from "axios";

const CommentsList = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Fetch comments from your API endpoint
    axios.get("http://localhost:4000/comment/64f25424e592c53f9051e6c8").then((response) => {
      setComments(response.data.comments);
    });
  }, []);

  return (
    <div>
      <h2>Comments</h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment._id}>
            <p>{comment.userName}</p>
            <p>{comment.content}</p>
            {/* <p>Created at: {comment.createdAt}</p> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentsList;
