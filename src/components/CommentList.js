import React from "react";

// view ALL comments on 1 music post

//bianca: idk what this is gonna be for yet
function CommentList(props) {
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.text}</li>
    </div>
  );
}

export default CommentList;
