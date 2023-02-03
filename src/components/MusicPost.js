import React from "react";
import { Card } from "react-bootstrap";
// import Comment from './Comment'
import { Link } from "react-router-dom";

function MusicPost({ musicPost }) {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/musicpost/${musicPost.id}`}>
        {/* Card.Img src={musicPost.image} /> */}
      </Link>

      <Card.Body>
        <Link to={`/musicpost/${musicPost.id}`}>
          <Card.Title as="div">
            <strong>{musicPost.username}</strong>
          </Card.Title>
        </Link>
        {/* <Card.Text as="div">
          <div className="my-3">
            {musicPost.likesCount}
          </div>
        </Card.Text> */}
        <Card.Text as="h3">{musicPost.datePublished}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default MusicPost;
