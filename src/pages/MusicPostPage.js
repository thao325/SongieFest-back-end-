// import {useEffect} from 'react';
// import MusicPostList from "../Components/MusicPostList"
// import axios from "axios";

// const baseUrl = "https://songiefest-be.herokuapp.com";
import { useParams } from "react-router-dom";

const MusicPostPage = ({ comments, grabMusicPost }) => {

//   useEffect(() => {
//     // get all comments for a music post
//     // pass in selectedMusicPost?
//   const getComments = async (musicPostId) => {
//     const cookieValue = document.cookie.split("; ").find((row) => row.startsWith("token="))?.split("=")[1];
//     console.log(cookieValue);
//     const token = "Token " + cookieValue;
//     try {
//       const response = await axios.get(
//         `${baseUrl}/music_post/${musicPostId}/comments/`,
//         {
//           headers: {
//             "Content-Type": "application/json",
//             "Authorization": `${token}`,
//           },
//         }
//       );

//       console.log(response.data)
//     } catch (error) {
//       console.error(error);
//     }
//   };
const { id } = useParams()
grabMusicPost(id);

// }, []);
// console.log(musicPosts);

  return (
    // {comments}
    console.log('hi')
    
  );
};

export default MusicPostPage;