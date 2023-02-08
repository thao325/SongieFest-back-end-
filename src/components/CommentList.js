import React from "react";

// view ALL comments on 1 music post


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
