import React, { useState } from "react";
import './profileView.css';

function Profile() {
  const [user, setUser] = useState({
    name: "Dilki Sewwandi",
    email: "dilki@gmail.com",
    image: "https://images.unsplash.com/photo-1520466809213-7b9a56adcd45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
  });


  const [isNameEditable, setNameEditable] = useState(false);
  const [isEmailEditable, setEmailEditable] = useState(false);
  const [newName, setNewName] = useState(user.name);
  const [newEmail, setNewEmail] = useState(user.email);


  const handleChangePassword = () => {
    alert("Password change functionality not implemented yet");
  };

  return (
    <div className="profile-container">
      <div className="profile-box">
      
        <img src={user.image} className="profile-image" alt={user.name} />
    
        <div className="profile-details">
          <div className="profile-header">
            <h5>{user.name}</h5>
            <button >Edit</button>
          </div>
          
          <div className="profile-header">
          <h5> {user.email}</h5>
          <button >Edit</button>
          </div>
          
            
       
          <button onClick={handleChangePassword}>Change Password</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;


















// //import React, { Component } from 'react'
// //import './profileView.css'
// //
// //
// //import UserProfile from 'react-user-profile'
// //
// //class App extends Component {
// //  render() {
// //    const photo = 'https://api-cdn.spott.tv/rest/v004/image/images/e91f9cad-a70c-4f75-9db4-6508c37cd3c0?width=587&height=599'
// //    const userName = 'Harvey Specter'
// //    const location = 'New York, USA'
// //
// //    const comments = [
// //      {
// //        id: '1',
// //        photo: 'https://api-cdn.spott.tv/rest/v004/image/images/e91f9cad-a70c-4f75-9db4-6508c37cd3c0?width=587&height=599',
// //        userName: 'Mike Ross',
// //        content: 'Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. ',
// //        createdAt: 1543858000000
// //      }
// //    ]
// //
// //    return (
// //      <div style={{ margin: '0 auto', width: '100%' }}>
// //        <UserProfile photo={photo} userName={userName} location={location} initialLikesCount={121} initialFollowingCount={723} initialFollowersCount={4433} initialComments={comments} />
// //      </div>
// //    )
// //  }
// //}
// //
// //export default App


// import React from "react";
// import './profileView.css';

// function profile() {
//     return (

//         <div className="profile">
//             <h1> Name </h1>
//               {/* <div className="profile-image">
//                 <img src={user.image} alt={user.name} />
//               </div>
//               <div className="profile-details">
//                 <h2>{user.name}</h2>
//                <p>Email: {user.email}</p>
//               </div> */}

// <div class="side">
//             <img src="logo.png" alt="Logo" class="logo">
//         </div> 
//         </div>
//     );
// }

// export default profile;


// import React, { useState } from "react";
// import './profileView.css';

// function Profile() {
//   // Mock user data for demonstration
//   const [user, setUser] = useState({
//     name: "Dilki Sewwandi",
//     email: "dilki@gmail.com",
//     image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fprofile&psig=AOvVaw05VBThCqJr0y0zBEmxHm2D&ust=1694745970005000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCKClnvCKqYEDFQAAAAAdAAAAABAR",
//   });

//   // State variables for editable fields
//   const [isNameEditable, setNameEditable] = useState(false);
//   const [isEmailEditable, setEmailEditable] = useState(false);
//   const [newName, setNewName] = useState(user.name);
//   const [newEmail, setNewEmail] = useState(user.email);

//   // Function to handle name and email updates
//   const handleNameUpdate = () => {
//     setUser({ ...user, name: newName });
//     setNameEditable(false);
//   };

//   const handleEmailUpdate = () => {
//     setUser({ ...user, email: newEmail });
//     setEmailEditable(false);
//   };

//   // Function to handle password change (you can implement your logic here)
//   const handleChangePassword = () => {
//     // Add your password change logic here
//     alert("Password change functionality not implemented yet");
//   };

//   return (
//     <div className="profile">
//       <div className="profile-image">
//         <img src={user.image} alt={user.name} />
//       </div>
//       <div className="profile-details">
//         <div className="profile-header">
//           <h4>{user.name}</h4>
//           <button onClick={() => setNameEditable(!isNameEditable)}>Edit</button>
//         </div>
//         {isNameEditable ? (
//           <div className="profile-input">
//             <input
//               type="text"
//               value={newName}
//               onChange={(e) => setNewName(e.target.value)}
//             />
//             <button onClick={handleNameUpdate}>Save</button>
//           </div>
//         ) : null}
//         <p>Email: {user.email}</p>
//         {isEmailEditable ? (
//           <div className="profile-input">
//             <input
//               type="email"
//               value={newEmail}
//               onChange={(e) => setNewEmail(e.target.value)}
//             />
//             <button onClick={handleEmailUpdate}>Save</button>
            
//           </div>
//         ) : null}
        
//         <button onClick={() => setEmailEditable(!isEmailEditable)}>Edit</button>
//         <button onClick={handleChangePassword}>Change Password</button>
//       </div>
//     </div>
//   );
// }

// export default Profile;
