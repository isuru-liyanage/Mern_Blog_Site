import React, { useState } from 'react';
import NavBarLI from './Components/navBar_loggedin';
import './CreateTicket.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CreateTicket() {
  const [formData, setFormData] = useState({
    title: '',
    phoneNumber: '',
    text: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:4000/support/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Ticket successfully created
        toast.success('Ticket created successfully');
      } else {
        // Handle the case where the request was not successful
        toast.error('Failed to create ticket');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('An error occurred');
    }
  };

  return (
    <div>
      <NavBarLI />
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="userInfo-box">
            <input
              type="text"
              placeholder="Title"
              className="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Phone Number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <div className="text-box">
            <textarea
              placeholder="Enter your text here"
              name="text"
              value={formData.text}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="button-container">
            <button className="cancel-button">Cancel</button>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default CreateTicket;
