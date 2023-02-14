import React, { useEffect, useState } from "react";
import axios from "axios";
import "../style-sheets/Comment.css";

//// GET USERNAME ASSOCIATED W A SPECIFIC COMMENT ID
const baseUrl = "https://songiefest-be.herokuapp.com";

function Comment({ id, text, onDelete }) {
  const [commentUsername, setCommentUsername] = useState("");

  useEffect(() => {
    const getCommentUsername = async () => {
      const cookieValue = document.cookie
        .split("; ")
        .find((row) => row.startsWith("token="))
        ?.split("=")[1];
      const token = "Token " + cookieValue;

      try {
        const response = await axios.get(
          `${baseUrl}/music_post/get-username/${id}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `${token}`,
            },
          }
        );
        setCommentUsername(response.data.username);
      } catch (error) {
        console.error(error);
      }
    };
    getCommentUsername();
  }, [id]);

  return (
    <div className="comment-page">
      <div className="comment-box">
        <b className="comment-username">{commentUsername}: </b>
        {text}
        <b className="delete-comment-button" onClick={() => onDelete(id)}>
          {" "}
          X
        </b>
      </div>
    </div>
  );
}

export default Comment;
