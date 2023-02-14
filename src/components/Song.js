import React from "react";

function Song({ title, artist, play_count }) {
  return (
    <div className="music-post-song">
      <div id="title" className="music-post-song">
        {title}
      </div>
      <div className="music-post-song"> by {artist} played</div>

      <b> {play_count}</b>
      <div className="music-post-song"> times</div>
    </div>
  );
}

export default Song;
