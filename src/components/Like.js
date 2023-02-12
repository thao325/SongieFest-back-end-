import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

// LIKE BUTTON COMPONENT when clicked makes PATCH request update likes_count 
// ===  NO PATCH ENDPOINT FOR /music_post/<id>  === 
const baseUrl = "https://songiefest-be.herokuapp.com";

// get likes_count as prop from MusicPost? 
// pass function to update likes_count when heart is clicked
function LikeButton({ likes_count, onLike }) {
  return (
    <div className='bottom-of-post'> {likes_count}
    <h5 >♡ {likes_count} likes </h5>
    <button onClick={onLike}>
    </button>
    </div>
    
  );
}

///////////////////////////////////////////
// === PUT THIS IN MUSIC POST? === //
function MusicPost({ musicPost }) {
  const [likesCount, setLikesCount] = useState(musicPost.likes_count);
  const { id } = useParams();

  // when clicked, makes PATCH request,
  // sets `likesCount` state to updated value 
  const handleLike = async () => {
    const updatedLikesCount = likesCount + 1;

  const cookieValue = document.cookie
      .split("; ")
      .find((row) => row.startsWith("token="))
      ?.split("=")[1];

  const token = "Token " + cookieValue;

  try {
    // PATCH for updated fields to be sent in request body
    // PUT for entire object
      await axios.patch(
        // like route??
        `${baseUrl}/musicpost/${id}/like/`,
        {
          likes_count: updatedLikesCount,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
        }
      );

      setLikesCount(updatedLikesCount);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="music-post">
      <LikeButton likesCount={likesCount} onLike={handleLike} />
    </div>
  );
}

export default MusicPost;
