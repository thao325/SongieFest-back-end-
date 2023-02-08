import React from "react";

// now MusicPost component can be reusable 
// props assigned to MusicPost object that contains all properties below
function MusicPost(props) {
  return (
    <div className="post">
      <div className="top">
        <h2 className="month">{props.month}</h2>
        {/* white circle border for profile pic */}
        {/* <img className="circle-img" src={props.img} alt="profile_pic" /> */}
        <div className="bottom">
          <ol>
            <li className="song1">{props.song1}</li>
            <li className="song2">{props.song2}</li>
            <li className="song3">{props.song3}</li>
            <li className="song4">{props.song4}</li>
            <li className="song5">{props.song5}</li>
          </ol>
        </div>
      </div>
    </div>
  );
}


export default MusicPost;

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
