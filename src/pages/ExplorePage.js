
import MusicPostList from "../Components/MusicPostList"
import React, { useState, useEffect } from "react";
import axios from "axios";

const baseUrl = "https://songiefest-be.herokuapp.com";
const ExplorePage = () => {
  const [musicPosts, setMusicPosts] = useState({});
  const [firstName, setFirstName] = useState('');


  // get all music posts/Explore Page
  useEffect(() => {
    const getMusicPosts = async () => {
      const cookieValue = document.cookie
        .split("; ")
        .find((row) => row.startsWith("token="))
        ?.split("=")[1];
      const token = "Token " + cookieValue;
  
      try {
        const response = await axios.get(`${baseUrl}/explore/`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
        });
        // console.log(response.data);
        for (const [key, value] of Object.entries(response.data)){
          if(key === 'user'){
            setFirstName(value);
            delete response.data['user']

          }
        }
        // for (const song of songs) {
        //   songList.push(
        //     <Song
        //       key={song.id}
        //       title={song.title}
        //       artist={song.artist}
        //       play_count={song.play_count}
        //     ></Song>
        //   );
        // }
        
        setMusicPosts(response.data);
        // console.log(response.data)
      } catch (error) {
        console.error(error);
      }
    };
    getMusicPosts();
  }, []);

// console.log(musicPosts);
console.log()

  return (
    <div>
      <h5> Welcome Back {firstName} :)</h5>
      <MusicPostList musicPosts={musicPosts}></MusicPostList>

    </div>

    
  );
};

export default ExplorePage;