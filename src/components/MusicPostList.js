import React from "react";
import "../style-sheets/MusicPost.css";

// takes 4 props as args
// returns template for rendering 1 single music post
// values passed as props to MusicPost (username, date, likes_count, songs)
// are the values of the properties w/ the same names in the objects in the post array

// destructure props into individual variables 
function MusicPostList({ username, date, likes_count, songs }) {
  return (
    // outer container?
    <div className="music-post">
      <div className="music-post-header">
        <h2 className="music-post-username">{username}</h2>
        <p className="music-post-date">{date}</p>
        <p className="music-post-likes-count">{likes_count} likes</p>
      </div>
      <div className="music-post-songs">
        {/* map over song array (takes a single song) & 
        returns component for each song in array */}
        {songs.map(song => (
          // container for each song in a post
          // key = unique identifier 
          <div className="music-post-song" key={song.title}>
            <p className="music-post-song-artist">{song.artist}</p>
            <p className="music-post-song-title">{song.title}</p>
            <p className="music-post-song-play-count">
              {song.play_count} plays
            </p>
          </div>
        ))}
      </div>
    </div>
  );
} 


export default MusicPostList;





// render music posts in component
// function MusicPost({ username, date, likes_count, songs }) {
//   return (
//     <div className="music-post">
//       <h3>{username}</h3>
//       <p>{date}</p>
//       <p>Likes: {likes_count}</p>
//       <hr />
//       {songs.map((song) => (
//         <div key={song.title}>
//           <p>Title: {song.artist}</p>
//           <p>Play Count: {song.play_count}</p>
//         </div>
//       ))}
//     </div>
//   );
// 


// export default MusicPost;

// // now MusicPost component can be reusable
// // props assigned to MusicPost object that contains all properties below
// function MusicPost(props) {
//   return (
//     <div className="post">
//       <div className="top">
//         <h2 className="month">{props.month}</h2>
//         {/* white circle border for profile pic */}
//         {/* <img className="circle-img" src={props.img} alt="profile_pic" /> */}
//         <div className="bottom">
//           <ol>
//             <li className="song1">{props.song1}</li>
//             <li className="song2">{props.song2}</li>
//             <li className="song3">{props.song3}</li>
//             <li className="song4">{props.song4}</li>
//             <li className="song5">{props.song5}</li>
//           </ol>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MusicPost;

// {/*
// //   return (
// //     <Card className="my-3 p-3 rounded">
// //       <Link to={`/musicpost/${musicPost.id}`}>
// //         {/* Card.Img src={musicPost.image} /> */}
// {/* </Link> */}

// {/* //       <Card.Body>
// //         <Link to={`/musicpost/${musicPost.id}`}>
// //           <Card.Title as="div">
// //             <strong>{musicPost.username}</strong>
// //           </Card.Title>
// //         </Link> */}
// //         {/* <Card.Text as="div">
// //           <div className="my-3">
// //             {musicPost.likesCount}
// //           </div>
// //         </Card.Text> */}
// {/* //         <Card.Text as="h3">{musicPost.datePublished}</Card.Text>
// //       </Card.Body> */}
// {/* //     </Card>
// //   );
// // }

// // export default MusicPost; */}
