import React from "react";
import "../style-sheets/ProfilePage.css";
import axios from "axios";
import { useState, useEffect } from "react";
import MusicPost from "../Components/MusicPost";

const padme = require("../padme.jpeg");
const coverPhoto = require("../coverPhoto.jpg");
const baseUrl = "https://songiefest-be.herokuapp.com";

function ProfilePage() {
  const [musicPosts, setMusicPosts] = useState([]);

  useEffect(() => {
    const getMusicPosts = async () => {
      const cookieValue = document.cookie
        .split("; ")
        .find((row) => row.startsWith("token="))
        ?.split("=")[1];
      const token = "Token " + cookieValue;

      try {
        const response = await axios.get(`${baseUrl}/padme/`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
        });
        const posts = [];
        for (const post of response.data) {
          posts.push(
            <MusicPost
              id={post.id}
              key={post.id}
              username={post.username}
              date={post.date}
              likes_count={post.likes_count}
              songs={post.songs}
            />
          );
          posts.push(<br></br>);
          posts.push(<br></br>);
        }

        setMusicPosts(posts);
        console.log(posts);
      } catch (error) {
        console.error(error);
      }
    };
    getMusicPosts();
  }, []);

  return (
    <div>
      <div className="profile">
        <div className="profileCover">
          <img className="profileCoverImg" src={coverPhoto} alt="" />
          <img className="profileUserImg" src={padme} alt="" />
          <div className="profileInfo">
            <h4 className="profileInfoName"> Padme</h4>
            <span className="profileInfoDesc">
              {" "}
              You're probably going to think I'm crazy after you check out my
              listening history
            </span>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      {musicPosts}
    </div>
  );
}

export default ProfilePage;
