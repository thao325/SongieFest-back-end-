import React from 'react';
import MusicPostList from "../Components/MusicPostList"

const ExplorePage = ({ musicPosts }) => {
  return (
    <MusicPostList musicPosts={musicPosts}></MusicPostList>
    
  );
};

export default ExplorePage;