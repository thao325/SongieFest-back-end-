import React from 'react';


const CommentBox = (props) => {
  return (
    <div>
      {props.comments.map((comment, index) => (
        <div key={index}>
          <p>{comment.content}</p>
        </div>
      ))}
    </div>
  );
};

export default CommentBox;