import React, { useEffect, useState } from "react";
import './viewBlog.css';
import AddComment from "./CommentSection";
import {useParams} from "react-router-dom";
import EditBlog from './EditBlog'

const BlogElements = () => {
  const [blogData, setBlogData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const apiUrl = `http://localhost:4000/blogs?blogId=${id}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setBlogData(data.blog);
        } else {
          console.error("Failed to fetch blog data");
        }
      })
      .catch((error) => {
        console.error("Error fetching blog data:", error);
      });
  }, []);

  if (!blogData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="blogContainer" style={{ margin: 'auto' }}>
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
      <AddComment />
      <EditBlog />
    </div>
  );
};

export default BlogElements;


