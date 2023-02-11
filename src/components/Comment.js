import React from "react";
// import { useEffect, useState } from "react";
// import axios from "axios";


// const baseUrl = "https://songiefest-be.herokuapp.com";



// date published willl be added soon once we team up and decide on how we want the time stamp to look like
//DONT FORGET
// This is an axios call i tried to impliment to try to get the username associated with a specific comment id 
// the route is baseurl/music_post/<commentid> 
//please pull changes to back end i tested it and it returns username  in postman
// however t im stuck on getting the axios call to retrieve it
function Comment({id, text}) {
  // const [commentUsername, setCommentUsername] = useState('');
  // useEffect(() => {
  //   const getMusicPosts = async () => {
  //     const cookieValue = document.cookie
  //       .split("; ")
  //       .find((row) => row.startsWith("token="))
  //       ?.split("=")[1];
  //     const token = "Token " + cookieValue;
  
  //     try {
  //       const response = await axios.get(`${baseUrl}/music_post/${id}`, {
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `${token}`,
  //         },
  //       });
  //       setCommentUsername(response.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   getMusicPosts();
  // }, [id]);
  return (
    <div>
      
      <b>{id} </b>
      {text}
      {/* {date_published} */}
      
    </div>
  );
}

export default Comment;
