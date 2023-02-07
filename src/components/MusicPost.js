import React from "react";

function MusicPost() {
  return (
    
    <div className="post">
      <div className="top">
        <h2 className="name">January 2023</h2>
        {/* white circle border for profile pic */}
        {/* <img className="circle-img" src="actual pic link" alt="profile_pic" /> */}
        <div className="bottom">
          <ol>
            <li className="info">
              Akuma no Ko (Attack on Titan) ❤️ played 1,5000 times
            </li>
            <li className="info">Someday ❤️ played 1,000 times</li>
            <li className="info">Pizza ❤️ played 1,000 times</li>
            <li className="info">golden hour ❤️ played 500 times </li>
            <li className="info">Birds ❤️ played 30 times</li>
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
