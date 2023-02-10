// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import CommentForm from "./CommentForm";
// import CommentList from "./CommentList"


// function MusicPostPage({ musicPosts, musicPostId }) {
//    // state to hold specific music post
//   const [musicPost, setMusicPost] = useState({});
//    // hold comments for specific music post
//   const [comments, setComments] = useState([]);
//  // get id of post user clicked on
//   // const { id } = useParams() {

//   useEffect(() => {
//     const fileredMusicPost = musicPosts.filter(
//       (username) => username.id === musicPostId
//     )[0];
//   })




//   }






//   useEffect(() => {
//     // get music post and comments data here
//   }, []);

//   const handleSubmit = (musicPostId, comment) => {
//     // make API call to submit comment here
//   };



//   return (
//     <div className="music-post-page-container">
//       {musicPost && (
//         <div className="music-post-details">
//           {/* display music post details here */}
//         </div>
//       )}
//       <h3 className="comments-header">Comments</h3>
//       <div className="comments-container">
//         {comments.map((comment) => {
//           return (
//             <div key={comment.id} className="comment">
//               {/* display comment here */}
//             </div>
//           );
//         })}
//       </div>
//       <CommentForm id={id} handleSubmit={handleSubmit} />
//     </div>
//   );
// }

// export default MusicPostPage;

// // return (
// //   <div>
// //     <h1>Music Post {id}</h1>
// //     {/* ... */}
// //   </div>
// // );
// // }