import React, { useState } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import "../style-sheets/MusicPost.css";
import Song from "./Song";
import CommentViewButton from "./CommentViewButton";


const baseUrl = "https://songiefest-be.herokuapp.com";

// handle click music post to navigate to specific post
function MusicPost({ id, username, date, likes_count, songs, grabMusicPost, handleLikeClick }) {
  // handle liking music post 
  // start w 0 or likes_count??
  const [likesCount, setLikesCount] = useState(0);

  // when clicked, makes PATCH request,
  // sets `likesCount` state to updated value 
  const handleLike = async () => {
    const updateLikesCount = likesCount + 1;

    const cookieValue = document.cookie
      .split("; ")
      .find((row) => row.startsWith("token="))
      ?.split("=")[1];
    const token = "Token " + cookieValue;

    try {
    // PATCH for updated fields to be sent in request body
    // PUT for entire object
      await axios.patch(
        // ===  NO PATCH ENDPOINT FOR /music_post/<id>  === 
        `${baseUrl}/musicpost/${id}/like/`,
        {
          likes_count: updateLikesCount,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
        }
      );
      
      // set updated likes count in state
      setLikesCount(updateLikesCount);
      handleLikeClick(id, updateLikesCount);
    } catch (error) {
      console.error(error);
    }
  };
  


  // for (const musicPost of musicPosts) {
  //   console.log(musicPost); }
  const songList = [];
  for (const song of songs) {
    songList.push(
      <Song
        key={song.id}
        title={song.title}
        artist={song.artist}
        play_count={song.play_count}
      ></Song>
    );
  }

  return (

    <div className="music-post-container">
      <div className="music-post">
        <h2 className="music-post-username"> {username}</h2>
        <p>{date}</p>
        {songList}

        <div className='bottom-of-post'>
          {/* when heart clicked, trigger handleLike function */}
          <h3 className="heart-button" onClick={handleLike}>♡</h3>
          <h3 className="likes-count"> {likes_count} likes </h3>
          {/* <h5 >♡ {likes_count} likes </h5> */}
          <CommentViewButton className="view-comments" musicPostId={id} grabMusicPost={grabMusicPost ? grabMusicPost: undefined}></CommentViewButton>
          {/* <h3 className='heart-button'>♡</h3>
          <p className="music-post-likes-count"> {likes_count} likes </p>
          <CommentViewButton className='comment-bar'></CommentViewButton> */}
          {/* <div classname='comment-bar'>
            <CommentViewButton></CommentViewButton>
          </div> */}
      
        </div>
    
      </div>
    </div>
  );
}

export default MusicPost;
