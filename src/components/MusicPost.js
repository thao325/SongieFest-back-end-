import React from "react";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import "../style-sheets/MusicPost.css";
import Song from "./Song";
import CommentViewButton from "./CommentViewButton";

function MusicPost({ id, username, date, likes_count, songs, grabMusicPost }) {
  // handle click music post to navigate to specific post
  // const navigate = useNavigate();
  // const handleClick = () => {
  //   navigate(`/musicpost/${id}`);
  // };

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
          <h5 >♡ {likes_count} likes </h5>
          <CommentViewButton musicPostId={id} grabMusicPost={grabMusicPost}></CommentViewButton>
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
