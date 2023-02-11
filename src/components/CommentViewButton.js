// view a comment 
import React from "react";
import '../style-sheets/CommentViewButton.css'
import { useNavigate } from "react-router-dom";

function CommentViewButton ({musicPostId, grabMusicPost}) {


  const navigate = useNavigate();

  const handleCommentView = () => {
    navigate(`/musicpost/${musicPostId}/comments`);




  };

    



  return(
    <div className='button'>
      <p className="text" onClick={handleCommentView}> View 8 Comments</p>
      {musicPostId}
    </div>
    
  )
}

export default CommentViewButton;