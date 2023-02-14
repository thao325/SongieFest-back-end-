import React from 'react';
import "../style-sheets/ProfilePage.css";

import axios from "axios";
import { useState, useEffect } from "react";
import MusicPost from '../Components/MusicPost';
import ProfilePageList from '../Components/ProfilePageList';

const padme = require('../padme.jpeg');
const coverPhoto = require('../coverPhoto.jpg');
const baseUrl = "https://songiefest-be.herokuapp.com";

function ProfilePage() {
  const [musicPosts, setMusicPosts] = useState({});


  // get all music posts/Explore Page
  useEffect(() => {
    const getMusicPosts = async () => {
      const cookieValue = document.cookie
        .split("; ")
        .find((row) => row.startsWith("token="))
        ?.split("=")[1];
      const token = "Token " + cookieValue;
  
      try {
        const response = await axios.get(`${baseUrl}/padme/`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
        });
        const posts = []
        for (const post of response.data){
          posts.push(<MusicPost
            id={post.id}
            key={post.id}
            username={post.username}
            date={post.date}
            likes_count={post.likes_count}
            songs={post.songs}
            />)
            
      

        }
        // console.log(response.data[0])
        setMusicPosts(posts);
        console.log(posts)
      } catch (error) {
        console.error(error);
      }
    };
    getMusicPosts();
  }, []);


  return (
    <div>
      <div className='profile'>
        <div className='profileCover'>

          <img className='profileCoverImg' src={coverPhoto} alt=''/>
          <img className="profileUserImg" src={padme} alt=""/>
        <div className="profileInfo">
                <h4 className="profileInfoName"> Padme</h4>
                <span className="profileInfoDesc"> You're probably going to think I'm crazy after you check out my listening history</span>
        </div>
      </div>

    </div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
      {musicPosts}
    {/* <ProfilePageList musicPosts={musicPosts}></ProfilePageList> */}
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
