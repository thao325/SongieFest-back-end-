// import React from "react";

import MusicPost from './MusicPost'
// import CommentViewButton from './CommentViewButton'


function MusicPostList({ musicPosts, grabMusicPost }) {
  // for (const musicPost of musicPosts) { 
  //   console.log(musicPost); }
  /// DELETE POST LATER
  const posts = Object.entries(musicPosts).map((username, post) => (
    // console.log(username[1][0].songs)

      <MusicPost
      id={username[1][0].id}
      key={username}
      username={username[0]}
      date={username[1][0].date}
      likes_count={username[1][0].likes_count}
      songs={username[1][0].songs}
      grabMusicPost={grabMusicPost}/>
      
  ))


  // const postsWithComments = [];
  // for (const post of posts){
  //   postsWithComments.push(post)
  //   postsWithComments.push(<CommentViewButton key={post.props.id} musicPostId={post.id}></CommentViewButton>)

  // }

  return (
    <div className="music-posts-container">
      {posts}

    </div>
  );
} 


export default MusicPostList;



