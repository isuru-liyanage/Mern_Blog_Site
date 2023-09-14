import React from 'react';
import NavBarLI from "./Components/navBar_loggedin";
import "./CreateTicket.css"

function CreateTicket() {
  return (
    <div>
      <NavBarLI /> 
      <div className="container">
      <div className="userInfo-box">      
            <input type="text" placeholder="Title" className="title" />
            <input type="text" placeholder="Phone Number" />
        </div>
        <div className="text-box">
          <textarea placeholder="Enter your text here"></textarea>
        </div>
        <div className="button-container">
          <button className="cancel-button">Cancel</button>
          <button className="submit-button">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;