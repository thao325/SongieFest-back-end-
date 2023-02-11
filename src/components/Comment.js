import React, { useEffect, useState } from "react";
import axios from "axios";

//// GET USERNAME ASSOCIATED W A SPECIFIC COMMENT ID

const baseUrl = "https://songiefest-be.herokuapp.com";
// 'music_post/get-username/<int:commentid>

// takes id, text as props
function Comment({ id, text }) {
  const [commentUsername, setCommentUsername] = useState("");

  useEffect(() => {
    const getCommentUsername = async () => {
      const cookieValue = document.cookie
        .split("; ")
        .find((row) => row.startsWith("token="))
        ?.split("=")[1];
      const token = "Token " + cookieValue;

      try {
        const response = await axios.get(`${baseUrl}/music_post/get-username/${id}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
        });
        
        // if API call success, use setter function to set `commentUsername`
        // state w/ response data's `username` propery
        setCommentUsername(response.data.username);
        // setCommentUsername(response.data);
        console.log(response.data.username)
      } catch (error) {
        console.error(error);
      }
    };
    getCommentUsername();
  }, [id]);

  return (
    <div>
      <b>{commentUsername} </b>
      {text}
    </div>
  );
}


export default Comment;







////// /// BIANCA'S CODE BELOW  \\\\\\\\\\\\\\\

// date published willl be added soon once we team up and decide on how we want the time stamp to look like
//DONT FORGET
// This is an axios call i tried to impliment to try to get the username associated with a specific comment id 
// the route is baseurl/music_post/<commentid> 
//please pull changes to back end i tested it and it returns username  in postman
// however t im stuck on getting the axios call to retrieve it

// const baseUrl = "https://songiefest-be.herokuapp.com";

// function Comment({id, text}) {
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
//   return (
//     <div>
      
//       <b>{id} </b>
//       {text}
//       {/* {date_published} */}
      
//     </div>
//   );
// }

// export default Comment;
