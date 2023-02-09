import React from 'react';
import MusicPostList from "../Components/MusicPostList"

const ExplorePage = ({ musicPosts }) => {
  return (
    <div className="music-posts-container">
      {Object.entries(musicPosts).map(([username, post]) => (
        <MusicPostList
          key={username}
          username={username}
          date={post[0].date}
          likes_count={post[0].likes_count}
          songs={post[0].songs} 
        />
      ))}
    </div>
  );
};

export default ExplorePage;

//   return(

// <div>
//       <h1>Latest Music Posts</h1>
//
//         <Row>
//           {musicPosts.map((musicPost) => (
//             <Col key={musicPost.id} sm={12} md={6} lg={4} xL={3}>
//               <MusicPost musicPost={musicPost} />
//             </Col>
//           ))}
//         </Row>
//       )}
//     </div>
//   );
// })}
// </div>
//   );
// }


