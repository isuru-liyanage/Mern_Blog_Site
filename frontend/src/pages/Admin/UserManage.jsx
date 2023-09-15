import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './BlogManage.css'; // Import your CSS file

const AllBlogs = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/user/all', {
      withCredentials: true
    })
      .then((response) => {
        setUsers(response.data.users);
      })
      .catch((error) => {
        console.error('Failed to fetch users:', error);
      });
  }, []);

  const handleDelete = (userId) => {
    axios.delete(`http://localhost:4000/user/deleteUser/${userId}`, {
      withCredentials: true
    })
      .then((response) => {
        console.log('User deleted successfully:', response.data);
        // Remove the deleted user from the state
        setUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId));
      })
      .catch((error) => {
        console.error('Failed to delete user:', error);
      });
  };

  return (
    <div>
      <h2>All Users</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Created At</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{new Date(user.createdAt).toLocaleString()}</td>
              <td>{user.role}</td>
              <td>
                <button onClick={() => handleDelete(user._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllBlogs;
