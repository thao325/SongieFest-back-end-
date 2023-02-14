import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommentList from "../Components/CommentList";
import axios from "axios";
import Comment from "../Components/Comment";
import CommentForm from "../Forms/CommentForm";

const baseUrl = "https://songiefest-be.herokuapp.com";

// GET all comments for a specific music post
const MusicPostPage = () => {
  const [comments, setComments] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getComments = async () => {
      const cookieValue = document.cookie
        .split("; ")
        .find((row) => row.startsWith("token="))
        ?.split("=")[1];

      const token = "Token " + cookieValue;

      try {
        const response = await axios.get(
          `${baseUrl}/music_post/${id}/comments`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `${token}`,
            },
          }
        );
        setComments(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getComments();
  }, [id]);

  // ======= DELETE a comment ============= //
  const deleteComment = async (commentId) => {
    try {
      const cookieValue = document.cookie
        .split("; ")
        .find((row) => row.startsWith("token="))
        ?.split("=")[1];
      const token = "Token " + cookieValue;

      await axios.delete(`${baseUrl}/music_post/${id}/comments/${commentId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      });

      setComments((prevComments) => {
        return prevComments.filter((comment) => comment.id !== commentId);
      });
    } catch (error) {
      console.error(error);
    }
  };

  const commentList = [];
  for (const comment of comments) {
    commentList.push(
      <Comment
        key={comment.id}
        id={comment.id}
        text={comment.text}
        date_published={comment.date_published}
        onDelete={deleteComment}
      ></Comment>
    );
  }

  return (
    <div className="comments-header">
      <h1>Comments</h1>

      <div className="comment-page">
        <div className="comment">
          <div>
            <CommentList
              musicPostId={id}
              commentList={commentList}
            ></CommentList>
          </div>
          <CommentForm />
        </div>
      </div>
    </div>
  );
};

export default MusicPostPage;
