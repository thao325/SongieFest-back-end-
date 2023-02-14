import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../style-sheets/LikesPage.css";

const baseUrl = "https://songiefest-be.herokuapp.com";

function LikesPage() {
  const [likesList, setLikesList] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    // get all comments for a music post
    const getLikesList = async () => {
      const cookieValue = document.cookie
        .split("; ")
        .find((row) => row.startsWith("token="))
        ?.split("=")[1];

      const token = "Token " + cookieValue;

      try {
        const response = await axios.get(
          `${baseUrl}/explore/${id}/likes/`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `${token}`,
            },
          }
        );
        const usernames =Object.values(response.data)[0].map((username, index) =>
        <li key={index} className='username'> {username} </li>)
        
        setLikesList(usernames);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getLikesList();

  }, [id]);
  return (
    <div className='username-container'>
      {likesList}
      <h1 className="heading">{}</h1>
    </div>
  );
}

export default LikesPage;
