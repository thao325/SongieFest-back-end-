import React, { useState } from "react";
import { Form, Row, Button } from "react-bootstrap";
import FormContainer from "../Components/FormContainer";


// make a comment, send POST request to backend on submit 
function CommentForm({ musicPostId, addComment }) {
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("")


  // const handleChange = (event) => {
  //   setComment(event.target.value);
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    addComment(musicPostId, { author, text });
    setText("");
    setAuthor("");
  };

//   return (
    
//     <form className="comment-form">
//       <input
//       type="text"
//       placeholder="your name"
//       value={author}
//       onChange={event => setAuthor(event.target.value)}
//       />
//       <textarea
//         className="comment-input"
//         value={comment}
//         onChange={event => setComment(event.target.value)}
//         placeholder="Write a comment..."
//       ></textarea>
//       <button className="submit-comment-button" onClick={handleSubmit}>
//         Submit
//       </button>
//     </form>
//   );
// }

// export default CommentForm;





return (
  <FormContainer>
    <Row>
    <h1>Leave a Comment.. </h1>

    <Form>
      <Form.Group controlId="username">
        <Form.Label>Username</Form.Label>
        <Form.Control

          type="text"
          placeholder="Enter Username"
          value={author}
          onChange={event => setAuthor(event.target.value)}
        ></Form.Control>
      </Form.Group>

      <Form.Group controlId="password">
        <Form.Label>Comment</Form.Label>
        <Form.Control
          type="text"
          placeholder="Leave a comment.. "
          autoComplete="off"
          value={text}
          onChange={event => setText(event.target.value)}
        ></Form.Control>
      </Form.Group>

    </Form>

    </Row>
    <Button type="submit" variant="primary" onClick={handleSubmit}>Comment</Button>
  </FormContainer>
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
