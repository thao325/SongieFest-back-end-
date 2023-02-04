import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Row, Col, ListGroup } from "react-bootstrap";
import Message from "../components/Message";
import Loader from "../components/Loader";
// import Comment from "../components/Comment";
import { listMusicPostDetails } from "../actions/musicPostActions";

// ======   PAGE FOR A SINGLE MUSIC POST    ==== //
// 'musicpost/<id>/'

function MusicPostPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const musicPostDetails = useSelector((state) => state.musicPostDetails);
  const { loading, error, musicPost } = musicPostDetails;

  useEffect(() => {
    dispatch(listMusicPostDetails(id));
  }, [dispatch, id]);

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

      <Row>
        <Col md={6}>
          {/* <Image src={musicPost.image} alt={musicPost.name} fluid /> */}
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{musicPost.username}</h3>
            </ListGroup.Item>

            {/* <ListGroup.Item>
              <Comment value={musicPost.likesCount} />
            </ListGroup.Item> */}

            <ListGroup.Item>
              Date Published: {musicPost.datePublished}
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
}

export default MusicPostPage;

///// BROKEN CODE BELOWWW

///// UDEMY COMMENT FIX:  \\\\\\\\\\\\\\\\\\\\\\\\\\

// import axios from "axios";

// function ProductScreen({ match }) {
//   const productId = useParams();

//   const [product, setProduct] = useState([]);

//   useEffect(() => {
//     async function fetchProduct() {
//       const { data } = await axios.get(`/api/products/${productId.id}`);
//       setProduct(data);
//     }

//     fetchProduct();
//   }, []);

///////  /// CAN ALSO DO THIS:     \\\\\\\\\\\\\

// function ProductScreen() {

//   let { id } = useParams();

//   const product = products.find((p) => p._id === id)

/////////    ORIGINAL BROKEN CODE FOLLOWING TUTORIAL: \\\\\\\\\\\\\\\\\\\\\\

// function MusicPostPage({ match }) {
//   const dispatch = useDispatch;
//   const musicPostDetails = useSelector((state) => state.musicPostDetails);
//   const { loading, error, musicPost } = musicPostDetails;

//   useEffect(() => {
//     dispatch(listMusicPostDetails(match.params.id));
//   }, [dispatch, match]);
