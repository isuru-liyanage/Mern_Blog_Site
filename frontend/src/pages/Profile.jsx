import React, { useState } from "react";
import './profileView.css';

function Profile() {
  const [user, setUser] = useState({
    name: "Dilki Sewwandi",
    email: "dilki@gmail.com",
    image: "https://images.unsplash.com/photo-1520466809213-7b9a56adcd45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
  });

  // State variables for editable fields
  const [isNameEditable, setNameEditable] = useState(false);
  const [isEmailEditable, setEmailEditable] = useState(false);
  const [newName, setNewName] = useState(user.name);
  const [newEmail, setNewEmail] = useState(user.email);

  // Function to handle name and email updates
  const handleNameUpdate = () => {
    setUser({ ...user, name: newName });
    setNameEditable(false);
  };

  const handleEmailUpdate = () => {
    setUser({ ...user, email: newEmail });
    setEmailEditable(false);
  };

  // Function to handle password change (you can implement your logic here)
  const handleChangePassword = () => {
    // Add your password change logic here
    alert("Password change functionality not implemented yet");
  };

  return (
    <div className="profile-container">
      <div className="profile-box">
        {/* <div className="profile-image"> */}
        <img src={user.image} className="profile-image" alt={user.name} />
        {/* </div> */}
        <div className="profile-details">
          <div className="profile-header">
            <h5>{user.name}</h5>
            <button onClick={() => setNameEditable(!isNameEditable)}>Edit</button>
          </div>
          {isNameEditable ? (
            <div className="profile-input">
              <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
              />
              <button onClick={handleNameUpdate}>Save</button>
            </div>
          ) : null}
          <div className="profile-header">
          <h5> {user.email}</h5>
          <button onClick={() => setEmailEditable(!isEmailEditable)}>Edit</button>
          </div>
          {isEmailEditable ? (
            <div className="profile-input">
              <input
                type="email"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
              />
              <button onClick={handleEmailUpdate}>Save</button>
            </div>
          ) : null}
            
       
          <button onClick={handleChangePassword}>Change Password</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;


















