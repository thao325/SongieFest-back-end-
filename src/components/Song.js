import React from "react";


function Song ({title, artist, play_count}){




  return (<div className="music-post-song">
    {title} by {artist} 
    <b> played {play_count} times </b>
  </div>);
}

export default Song;