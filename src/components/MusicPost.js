// import React from "react";
import "../style-sheets/MusicPost.css";
import Song from "./Song";

function MusicPost({ username, date, likes_count, songs }) {
  // for (const musicPost of musicPosts) {
  //   console.log(musicPost); }
  const songList = [];
  for (const song of songs) {
    songList.push(
  
      <Song key={song.id} title={song.title} artist={song.artist} play_count={song.play_count}></Song>
    );
  }

  return (
    <div className="music-post">
      <h2 className="music-post-username"> {username}</h2>
      <p>{date}</p>
      {songList}
      <p className="music-post-likes-count">♡ {likes_count} likes </p>
    </div>
  );
}

export default MusicPost;