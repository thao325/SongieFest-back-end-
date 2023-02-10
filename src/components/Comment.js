import React from "react";

// render individual comments
// destructuring to access properties passed down as props from MusicPostPage
function Comment({ username, text, date }) {
  return (
    <div className="comment">
      {/* <h4 className="comment-username">{username}</h4> */}
      <p className="comment-text">{text}</p>
      <p className="comment-author">By {username} on {date}</p>
      {/* <p className="comment-date">{date}</p> */}
    </div>
  );
}

export default Comment;



