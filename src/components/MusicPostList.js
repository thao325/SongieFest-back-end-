import MusicPost from './MusicPost'


function MusicPostList({ musicPosts, grabMusicPost }) {
  const posts = Object.entries(musicPosts).map((username, post) => (

      <MusicPost
      id={username[1][0].id}
      key={username}
      username={username[0]}
      date={username[1][0].date}
      likes_count={username[1][0].likes_count}
      songs={username[1][0].songs}
      grabMusicPost={grabMusicPost}/>
      
  ))


  const postsWithSpace = [];
  for (const post of posts){
    postsWithSpace.push(post)
    postsWithSpace.push(<br></br>)
    postsWithSpace.push(<br></br>)

  }

  return (
    <div className="music-posts-container">
      {postsWithSpace}

    </div>
  );
} 


export default MusicPostList;



