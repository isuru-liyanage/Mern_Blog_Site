import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './UserManage.css'

const AllBlogs = () => {
    const [blogs, setBlogs] = useState([]);
  
    useEffect(() => {
      axios.get('http://localhost:4000/blogs/all', {
        withCredentials: true
      })
        .then((response) => {
          setBlogs(response.data.blogs);
        })
        .catch((error) => {
          console.error('Failed to fetch blogs:', error);
        });
    }, []);
  
    const handleDelete = (blogId) => {
      axios.delete(`http://localhost:4000/blogs/delete/${blogId}`, {
        withCredentials: true
      })
        .then((response) => {
          console.log('Blog deleted successfully:', response.data);
          setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog._id !== blogId));
        })
        .catch((error) => {
          console.error('Failed to delete blog:', error);
        });
    };

    return (
        <div>
          <h2>All Blogs</h2>
          <table className="blog-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Publisher</th>
                <th>Interested Fields</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog) => (
                <tr key={blog._id}>
                  <td>{blog.title}</td>
                  <td>{blog.publisherName}</td>
                  <td>{blog.interestedFields.join(', ')}</td>
                  <td>
                    <Link to={`/view_blog/${blog._id}`}>View</Link>
                    <button onClick={() => handleDelete(blog._id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    };

export default AllBlogs;
