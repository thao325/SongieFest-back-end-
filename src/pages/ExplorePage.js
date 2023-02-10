import React from 'react';
import MusicPostList from "../Components/MusicPostList"

const ExplorePage = ({ musicPosts, comments }) => {
// console.log(musicPosts);
  return (
    <MusicPostList musicPosts={musicPosts} comments={comments}></MusicPostList>
    
  );
};

export default ExplorePage;