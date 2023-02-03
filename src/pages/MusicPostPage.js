import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Row, Col, ListGroup } from "react-bootstrap";
import Loader from "../components/Loader";
import Message from "../components/Message";
import axios from "axios";

function MusicPostPage() {
  const { id } = useParams();
  const [musicPost, setMusicPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchMusicPost() {
      try {
        const { data } = await axios.get(`/musicpost/${id}`);
        setMusicPost(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }

    fetchMusicPost();
  }, [id]);

  return (
    <div>
      <Link to="/" className="btn btn-light my-3">
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          <Col md={6}>
            {/* <Image src={musicPost.image} alt={musicPost.name} fluid /> */}
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{musicPost.username}</h3>
              </ListGroup.Item>
              {/* 
              <ListGroup.Item>
                <Comment value={musicPost.likesCount} />
              </ListGroup.Item> */}

              <ListGroup.Item>
                Date Published: {musicPost.datePublished}
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      )}
    </div>
  );
}

export default MusicPostPage;





///// BROKEN CODE BELOWWW

// import React, { useState, useEffect } from "react";
// // import { useDispatch, useSelector } from "react-redux";
// import { Link, useParams } from "react-router-dom";
// import {
//   // Button,
//   Row,
//   Col,
//   // Card,
//   // Image,
//   ListGroup,
//   // ListGroupItem,
// } from "react-bootstrap";
// // import Comment from "../components/Comment";
// import Loader from "../components/Loader";
// import Message from "../components/Message";
// import { listMusicPostDetails } from "../actions/musicPostActions";
// import axios from "axios";

// // ======   PAGE FOR A SINGLE MUSIC POST    ==== //
// // 'musicpost/<id>/'

// function MusicPostPage({ match }) {
//   const musicPostId = useParams();



//   const [musicPost, setmusicPost] = useState([]);

//   useEffect(() => {
//     async function fetchMusicPost() {
//       const { data } = await axios.get(`/musicpost/${musicPostId.id}`);
//       setMusicPost(data);
//     }

//     fetchMusicPost();
//   }, []);

// // function MusicPostPage({ match }) {
// //   const dispatch = useDispatch;
// //   const musicPostDetails = useSelector((state) => state.musicPostDetails);
// //   const { loading, error, musicPost } = musicPostDetails;

// //   useEffect(() => {
// //     dispatch(listMusicPostDetails(match.params.id));
// //   }, [dispatch, match]);

//   return (
//     <div>
//       <Link to="/" className="btn btn-light my-3">
//         Go Back
//       </Link>
//       {loading ? (
//         <Loader />
//       ) : error ? (
//         <Message variant="danger">{error}</Message>
//       ) : (
//         <Row>
//           <Col md={6}>
//             {/* <Image src={musicPost.image} alt={musicPost.name} fluid /> */}
//           </Col>
//           <Col md={3}>
//             <ListGroup variant="flush">
//               <ListGroup.Item>
//                 <h3>{musicPost.username}</h3>
//               </ListGroup.Item>
//               {/* 
//               <ListGroup.Item>
//                 <Comment value={musicPost.likesCount} />
//               </ListGroup.Item> */}

//               <ListGroup.Item>
//                 Date Published: {musicPost.datePublished}
//               </ListGroup.Item>
//             </ListGroup>
//           </Col>
//         </Row>
//       )}

//       <Row>
//         <Col md={6}>
//           {/* <Image src={musicPost.image} alt={musicPost.name} fluid /> */}
//         </Col>
//         <Col md={3}>
//           <ListGroup variant="flush">
//             <ListGroup.Item>
//               <h3>{musicPost.username}</h3>
//             </ListGroup.Item>

//             {/* <ListGroup.Item>
//               <Comment value={musicPost.likesCount} />
//             </ListGroup.Item> */}

//             <ListGroup.Item>
//               Date Published: {musicPost.datePublished}
//             </ListGroup.Item>
//           </ListGroup>
//         </Col>
//       </Row>
//     </div>
//   );
// }

// export default MusicPostPage;
