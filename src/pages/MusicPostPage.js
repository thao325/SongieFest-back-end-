import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommentList from "../Components/CommentList"
import axios from "axios";
import Comment from '../Components/Comment'
import CommentForm from "../Forms/CommentForm";

const baseUrl = "https://songiefest-be.herokuapp.com";

// GET all comments for a specific music post
// DELETE a comment from a music post 
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
        // console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getComments();
  }, [id]);

  // delete comment on a music post 

  const deleteComment = async (commentId) => {
    const cookieValue = document.cookie
      .split("; ")
      .find((row) => row.startsWith("token="))
      ?.split("=")[1];

    const token = "Token " + cookieValue;

    try {
      await axios.delete(`${baseUrl}/comments/${commentId}/`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      });
      // refresh comments after deletion
      const refreshComments = comments.filter(
        (comment) => comment.id !== comment.Id
      );
      setComments(refreshComments);
    } catch (error) {
      console.error(error);
    }
  };
// ////////
// const deleteComment = (id) => {
//   return axios
//     .delete(`${baseUrl}/comments/${id}`)
//     .catch((error) => {
//       console.log(error);
//     });
// };






  /////////

  // const { id } = useParams()
  // grabMusicPost(id);

  // }, []);
  // console.log(musicPosts);
   // const postsWithComments = [];
  // for (const post of posts){
  //   postsWithComments.push(post)
  //   postsWithComments.push(<CommentViewButton key={post.props.id} musicPostId={post.id}></CommentViewButton>)

  // }

  
  const commentList = []
  for (const comment of comments){
    commentList.push(<Comment key={comment.id} id={comment.id} text={comment.text} date_published={comment.date_published}>
      {/* <button onClick={() => deleteComment(comment.id)}>Delete Comment</button> */}
    </Comment>)

  }

  return (
    // {comments}
    // console.log('hi')
    <div className="comment-page">
      <h1>Comments</h1>

    <div>
      <CommentList musicPostId={id} commentList={commentList}></CommentList>
    </div>
    <CommentForm/>
    
    </div>
  );
};

export default MusicPostPage;
