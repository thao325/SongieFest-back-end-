import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../style-sheets/CommentForm.css";

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
      setShowComments([...showComments, response.data]);
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <>
      <ul>
        {showComments.map((showComment) => (
          <div className="comment-box" key={showComment.id}>
            <li>{showComment.text}</li>
          </div>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <textarea
          type="text"
          value={makeComment}
          onChange={(event) => setMakeComment(event.target.value)}
          className="input"
          placeholder="Write a comment"
        />
        <br></br>
        <button className="submit" type="submit">Submit</button>
      </form>
    </>
  );
}

export default CommentForm;
