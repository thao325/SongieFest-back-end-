import React from "react";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import "../style-sheets/MusicPost.css";
import Song from "./Song";

function MusicPost({ id, username, date, likes_count, songs }) {
  // handle click music post to navigate to specific post
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/musicpost/${id}`);
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
    // <Link to={`/musicpost/${id}`}>

    <div className="music-post-container" onClick={handleClick}>
      <div className="music-post">
        <h2 className="music-post-username"> {username}</h2>
        <p>{date}</p>
        {songList}
        <p className="music-post-likes-count">♡ {likes_count} likes </p>
      </div>
    </div>
  );
}

export default MusicPost;
