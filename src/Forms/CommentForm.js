import React, { useState } from "react";

// make a comment


function CommentForm(props) {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

return (
  <div className="form">
    <input onChange={handleChange} type="text" value={inputText} />
    <button
    onClick={() => {
      props.onAdd(inputText);
      // set back to empty once comment has been made 
      setInputText("");
    }}
    >
      <span>Add Comment</span>
    </button>

  </div>
)


}


export default CommentForm;