import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './SupportManage.css'
import AdminNavigationBar from './Admin';

const AllSupport = () => {
  const [supports, setSupports] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/support/adminSupport', {
      withCredentials: true,
    })
    .then((response) => {
      setSupports(response.data.supports);
    })
    .catch((error) => {
      console.error('Failed to fetch support requests:', error);
    });
  }, []);

  const handleDelete = (supportId) => {
    axios.delete(`http://localhost:4000/support/delete/${supportId}`, {
      withCredentials: true,
    })
    .then((response) => {
      console.log('Support request deleted successfully:', response.data);
      setSupports((prevSupports) => prevSupports.filter((support) => support._id !== supportId));
    })
    .catch((error) => {
      console.error('Failed to delete support request:', error);
    });
  };

  return (
    <div>
    <AdminNavigationBar/>
      <h2>All Support Requests</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Content</th>
            <th>Phone Number</th>
            <th>Created At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {supports.map((support) => (
            <tr key={support._id}>
              <td>{support.title}</td>
              <td>{support.content}</td>
              <td>{support.phoneno}</td>
              <td>{support.createdAt}</td>
              <td>
                <button onClick={() => handleDelete(support._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllSupport;
