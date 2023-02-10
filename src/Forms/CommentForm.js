import React, { useState } from "react";

// make a comment
function CommentForm({ id, handleSubmit }) {
  const [comment, setComment] = useState("");

  const handleChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmitClick = (event) => {
    event.preventDefault();
    handleSubmit(id, comment);
    setComment("");
  };

  return (
    <form className="comment-form">
      <textarea
        className="comment-input"
        value={comment}
        onChange={handleChange}
        placeholder="Write a comment..."
      ></textarea>
      <button className="submit-comment-button" onClick={handleSubmitClick}>
        Submit
      </button>
    </form>
  );
}

export default CommentForm;

// function CommentForm(props) {
//   const [inputText, setInputText] = useState("");

//   function handleChange(event) {
//     const newValue = event.target.value;
//     setInputText(newValue);
//   }

// return (
//   <div className="form">
//     <input onChange={handleChange} type="text" value={inputText} />
//     <button
//     onClick={() => {
//       props.onAdd(inputText);
//       // set back to empty once comment has been made
//       setInputText("");
//     }}
//     >
//       <span>Add Comment</span>
//     </button>

//   </div>
// )

// }

// export default CommentForm;
