import React from 'react';
import "../style-sheets/ProfilePage.css";

const padme = require('../padme.jpeg');

function ProfilePage() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="ProfileImg" src={padme} alt=""/>
          <input placeholder="What song are you listening to now?" 
          className="shareInput"
          />
        </div>
        <div className="shareBottom"></div>
      </div>
    </div>
  )
}

export default ProfilePage

















// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams } from 'react-router-dom';

// const baseUrl = "https://songiefest-be.herokuapp.com";

// get all music posts for specific username
// username needs to be obtained from authentication system
// cookie??
// const Profile = () => {
//   const { username } = useParams();
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     const fetchUserPosts = async () => {
//       try {
//         const cookieValue = document.cookie
//           .split("; ")
//           .find((row) => row.startsWith("token="))
//           ?.split("=")[1];
//         const token = "Token " + cookieValue;

//         const response = await axios.get(`${baseUrl}/${username}/`, {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `${token}`,
//           },
//         });

//         setPosts(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchUserPosts();
//   }, [username]);


//   ///// RETURN STILL NEEDS WORK  \\\\\\
//   return (
//     <div>
//       <h2>{username}'s Music Posts</h2>
//       {/* Render music posts */}

//       {/* {posts.map((musicPost) => (
//         <div key={musicPost.id}>
//           <p>{musicPost.title}</p>
//         </div> */}
//       {/* ))} */}
//     </div>
//   );
// };

// export default Profile;
