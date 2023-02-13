import axios from "axios";
import React, { useEffect, useState } from "react";
// import MusicPost from "./MusicPost";

// view ALL comments on 1 music post + the single music post
// ask thao about onChecked
const baseUrl = "https://songiefest-be.herokuapp.com";
//bianca: idk what this is gonna be for yet
function CommentList({commentList, musicPostId}) {
  const [musicPostData, setMusicPostData] = useState({});
  // const [musicPostDetails, setMusicPostDetails] = useState(null);

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

  // for (const [key, value] of Object.entries(musicPostData)) {
  //   console.log(`${key}: ${value}`);
  // }



  // useEffect(() => {
  //   const commentSection = document.getElementById('comment-section');
  //   if (musicPostData) {
  //     commentSection.scrollIntoView({ behavior: 'smooth' })
  //   }}, [])

  return (
    <div>
      {/* <MusicPost></MusicPost> */}

      {/* <MusicPost id={musicPostData.id} username={musicPostData.username} date={musicPostData.date} likes_count={musicPostData.likes_count} songs={musicPostData.songs}></MusicPost> */}
    
      {commentList}
      
      {/* <textarea type="text" className="input" placeholder="Write a comment" ></textarea>
      <button  type="submit">Add Comment</button> */}
    </div>
  );
}

export default CommentList;
