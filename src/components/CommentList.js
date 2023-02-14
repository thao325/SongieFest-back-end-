import axios from "axios";
import React, { useEffect, useState } from "react";


const baseUrl = "https://songiefest-be.herokuapp.com";

function CommentList({commentList, musicPostId}) {
  const [musicPostData, setMusicPostData] = useState({});


  useEffect(() => {
    const getMusicPostData = async () => {
      const cookieValue = document.cookie
        .split("; ")
        .find((row) => row.startsWith("token="))
        ?.split("=")[1];
      const token = "Token " + cookieValue;

      try {
        const response = await axios.get(
          `${baseUrl}/music_post/${musicPostId}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `${token}`,
            },
          }
        );
        console.log(response.data.songs);
        setMusicPostData(response.data);
        
        

      } catch (error) {
        console.error(error);
      }
    };
    getMusicPostData()
  }, [musicPostId]);


  return (
    <div>
      {commentList}
    </div>
  );
}

export default CommentList;
