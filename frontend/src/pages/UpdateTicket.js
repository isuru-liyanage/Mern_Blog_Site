import React, { useState, useEffect } from 'react';
import NavBarLI from './Components/navBar_loggedin';
import './CreateTicket.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';

function UpdateTicket() {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    title: '',
    phoneNumber: '',
    text: '',
  });

  useEffect(() => {
    const Apicall = async() =>{
      // console.log("api call")
      const res = await fetch(`http://localhost:4000/support/${id}`, {
        method: "GET",
        credentials: "include",
      });
      const data = await res.json()
      const {support,status}=data;
      // setsupportlist(support);
      console.log(support);
      if(data){
      setFormData({
                title: data.support.title,
                phoneNumber: '', // You can set this field as well if it's available in your API response
                text: data.support.content,
              });}

    }
    Apicall();

  }, []);




  // Make an HTTP GET request to your API endpoint
    // fetch(`http://127.0.0.1:4000/support/${id}`, {
    //   method: 'GET',
    //   credentials: "include",
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // })
    //     .then((response) => response.json())
    //     .then((data) => {
    //       // Use the fetched data to set the initial form data
    //       setFormData({
    //         title: data.support.title,
    //         phoneNumber: '', // You can set this field as well if it's available in your API response
    //         text: data.support.content,
    //       });
    //     })
    //     .catch((error) => {
    //       console.error('Error fetching data:', error);
    //     });
  // }, [id]);

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
      const response = await fetch(`http://localhost:4000/support/update/${id}`, {
        method: 'PUT', // Use PUT method for updating data
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: formData.title,
          phoneNumber: formData.phoneNumber,
          content: formData.text,
        }),
      });

      if (response.status === 200) {
        // Data successfully updated
        const data = await response.json();
        // Handle the response data as needed
        console.log(data.updatedSupport);
        toast.success('Data updated successfully');
      } else if (response.status === 401) {
        // Unauthorized
        toast.error('Unauthorized');
      } else if (response.status === 404) {
        // Invalid Support ID
        toast.error('Invalid Support ID');
      } else {
        // Handle other error cases
        toast.error('Failed to update data');
      }
    } catch (error) {
      console.error('Error updating data:', error);
      toast.error('Failed to update data');
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

export default UpdateTicket;
