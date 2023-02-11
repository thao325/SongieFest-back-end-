import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import MusicPostList from "../Components/MusicPostList"
import axios from "axios";

const baseUrl = "https://songiefest-be.herokuapp.com";

const MusicPostPage = () => {
  const [comments, setComments] = useState([]);
  const { id } = useParams();

  // get data for specific music post based on `id` in URL
  // runs everytime `id` in URL changes
  useEffect(() => {
    // get all comments for a music post
    const getComments = async () => {
      const cookieValue = document.cookie
        .split("; ")
        .find((row) => row.startsWith("token="))
        ?.split("=")[1];
      console.log(cookieValue);
      const token = "Token " + cookieValue;

      try {
        const response = await axios.get(
          `${baseUrl}/music_post/${id}/comments/`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `${token}`,
            },
          }
        );
        setComments(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getComments();
  }, [id]);
  // const { id } = useParams()
  // grabMusicPost(id);

  // }, []);
  // console.log(musicPosts);

  return (
    // {comments}
    // console.log('hi')

/////////     NOT RENDERING COMMENTS YET   \\\\\\\\\\
    <div>
      {comments.map((comment, index) => (
        <div key={index}>
          <p>{comment.content}</p>
        </div>
      ))}
    </div>
  );
};

export default MusicPostPage;
