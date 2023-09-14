import React, { useEffect, useState } from "react";
import './viewBlog.css';
import AddComment from "./CommentSection";
import {useParams} from "react-router-dom";
import EditBlog from './EditBlog'
import CommentsList from "./showComments";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useCookies } from "react-cookie";


const BlogElements = () => {
  const [blogData, setBlogData] = useState(null);
  const { id } = useParams();
  const [cookies] = useCookies(["userRole", "userId"]);
  const userId = cookies.userId || "0";
  const userRole = cookies.userRole || "user";
  const [publisherId, setPublisherId] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const apiUrl = `http://localhost:4000/blogs?blogId=${id}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setBlogData(data.blog);

          setPublisherId(data.blog.publisherId);
        } else {
          console.error("Failed to fetch blog data");
        }
      })
      .catch((error) => {
        console.error("Error fetching blog data:", error);
      });
  }, [id]);

  const handleDeleteClick = () => {
    const axiosInstance = axios.create({
      withCredentials: true,
    });

    axiosInstance
      .delete(`http://localhost:4000/blogs/delete/${id}`)
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        console.error("Error deleting comment:", error);
      });
  };

  const handleEditClick = () => {
    navigate(`/editor/${id}`);
  };

  if (!blogData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="blogContainer" style={{ margin: 'auto' }}>

      {((userId === publisherId) || (userRole === "admin")) && (
        <div className="comment-actions">
          <button className="custom-button" onClick={handleEditClick}>
            <FontAwesomeIcon icon={faPenToSquare} /> Edit
          </button>
          <button className="custom-button" onClick={handleDeleteClick}>
            <FontAwesomeIcon icon={faTrash} /> Delete
          </button>
        </div>
      )}

      <div className="centered-content">
        <center>
          <h2 className="blogTitle">{blogData.title}</h2>
        </center>
      </div>

      <div className="right-align">
        <p className="userName">Written by: {blogData.publisherName}</p>
      </div>

      <div className="centered-content">
        <img className="postImage" src={blogData.photoUrl} alt={blogData.title} />
      </div>

      <div className="blogContent">
        {blogData.content.map((paragraph, paragraphIndex) => (
          <p key={paragraphIndex} className="blogText">{paragraph}</p>
        ))}
      </div>
      <AddComment BlogId={id} />
      <CommentsList BlogId={id} />
    </div>
  );
};

export default BlogElements;
