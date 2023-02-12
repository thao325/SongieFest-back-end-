import { useState } from "react";
import { useParams } from "react-router-dom";
// import { Form, Row, Button } from "react-bootstrap";
// import FormContainer from "../Components/FormContainer";
import axios from "axios";
// import CommentList from "../Components/CommentList";

//////     STILL IN WORKKK      \\\\\\\\\\\\\
// make a comment, send POST request to backend on submit
// musicpost/<music_post id>/comments/
const baseUrl = "https://songiefest-be.herokuapp.com";

function CommentForm() {
  const [makeComment, setMakeComment] = useState("");
  const [showComments, setShowComments] = useState([]);
  const { id } = useParams();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const cookieValue = document.cookie
      .split("; ")
      .find((row) => row.startsWith("token="))
      ?.split("=")[1];
    const token = "Token " + cookieValue;

    try {
      const response = await axios.post(
        `${baseUrl}/music_post/${id}/comments/`,
        {
          text: makeComment,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
        }
      );

      console.log(response);
      // update show comments state
      // use spread operator, create new array that is a copy of the
      // `showComments` state + new comment returned from backend (response.data) to it
      setShowComments([...showComments, response.data]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <textarea
          type="text"
          value={makeComment}
          onChange={(event) => setMakeComment(event.target.value)}
          className="input"
          placeholder="Write a comment"
        />
        <button className="submit" type="submit">
          Submit
        </button>
      </form>
      <ul>
        {/* iterate over showComments array of objects, makes a new <li> for
        each comment in showComments, need key= unique identifier */}
        {showComments.map((showComment) => (
          <div className="comment-box" key={showComment.id}>
            {/* access the text property of current comment object in iteration */}
            <li>{showComment.text}</li>
          </div>
        ))}
      </ul>
    </>
  );
}

export default CommentForm;

//   return (
//     <FormContainer>
//       <Row>
//         <h1>Leave a Comment.. </h1>

//         <Form>
//           <Form.Group controlId="username">
//             <Form.Label>Username</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Enter Username"
//               value={author}
//               onChange={(event) => setAuthor(event.target.value)}
//             ></Form.Control>
//           </Form.Group>

//           <Form.Group controlId="password">
//             <Form.Label>Comment</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Leave a comment.. "
//               autoComplete="off"
//               value={text}
//               onChange={(event) => setText(event.target.value)}
//             ></Form.Control>
//           </Form.Group>
//         </Form>
//       </Row>
//       <Button type="submit" variant="primary" onClick={handleSubmit}>
//         Comment
//       </Button>
//     </FormContainer>
//   );
// }

// export default CommentForm;

//////////////////

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
