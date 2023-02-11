import React from "react";
import Comment from "./Comment";
// import "./CommentList.css";

// view ALL comments on 1 music post
/// THAO TESTING CODE

// gets array of comments as prop, renders a Comment component
// for each comment
function CommentList({ comments }) {
  const commentItems = comments.map((comment) => (
    // Comment component recieves these props & displays them
    <Comment
      key={comment.id}
      text={comment.text}
      // user who left comment
      username={comment.username}
      date={comment.date}
    />
  ));

  return (
    <div className="comment-list-container">
      <ul className="comment-list">
        <h3>Comments:</h3>
        {commentItems}
      </ul>
    </div>
  );
}

export default CommentList;

//////////////

//bianca: idk what this is gonna be for yet
// function CommentList(props) {
//   return (
//     <div
//       onClick={() => {
//         props.onChecked(props.id);
//       }}
//     >
//       <li>{props.text}</li>
//     </div>
//   );
// }

// export default CommentList;
