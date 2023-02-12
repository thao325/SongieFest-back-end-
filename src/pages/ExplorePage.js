import React from 'react';
import MusicPostList from "../Components/MusicPostList"

const ExplorePage = ({ musicPosts }) => {
// console.log(musicPosts);
  return (
    <MusicPostList musicPosts={musicPosts}></MusicPostList>
    
  );
};

export default ExplorePage;