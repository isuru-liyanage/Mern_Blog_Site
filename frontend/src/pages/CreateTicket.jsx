import React, { useState } from 'react';
import NavBarLI from './Components/navBar_loggedin';
import './CreateTicket.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useParams} from "react-router-dom";

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
      const response = await fetch('http://localhost:4000/support/create', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: formData.title,
          phoneno: formData.phoneNumber,
          content: formData.text,
        }),
      });

      if (response.status === 201) {
        // Data successfully created
        const data = await response.json();
        // Handle the response data as needed
        console.log(data.support);
        toast.success('Support ticket created successfully');
        // Optionally, you can clear the form fields after submission
        setFormData({
          title: '',
          phoneNumber: '',
          text: '',
        });
      } else {
        // Handle errors
        toast.error('Failed to create support ticket');
      }
    } catch (error) {
      console.error('Error creating support ticket:', error);
      toast.error('Failed to create support ticket');
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
