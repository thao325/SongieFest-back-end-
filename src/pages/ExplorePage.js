// import React, { useEffect, useState, Component } from "react";
// import axios from "axios";

// function ExplorePage() {
//   const [state, setState] = useState([]);

//   const baseUrl = "https://songiefest-be.herokuapp.com/";

//   useEffect(() => {
//     axios
//       .get(`${baseUrl}explore/`)
//       .then((response) => {
//         console.log("music posts data", response.data);
//         setState(response.data);
//         console.log("State", state);
//       })
//       .catch((error) => {
//         console.log("status code", error.response.status);
//         console.log("error data", error.response.data);
//       });
//   }, []);

//   return(
//   <div>
//     {state.map((musicPost) => {

//   return(

// <div>
//       <h1>Latest Music Posts</h1>
//       {/* while posts are loading, render loading message */}
//       {loading ? (
//         <Loader />
//       ) : // if error, render error message.
//       // passing error as a child into this component
//       error ? (
//         <Message variant="danger">{error}</Message>
//       ) : (
//         // if not loading & we don't have an error, render this row back
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

// export default ExplorePage;
