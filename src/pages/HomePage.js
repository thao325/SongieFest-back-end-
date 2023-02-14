import React from "react";
import "../style-sheets/HomePage.css";

function HomePage() {
  return (
    <div className="home-page">
      <h1 className="home-heading">Welcome to SongieFest</h1>
      <p className="description">
        A place to share and discover new music with the world!
      </p>
      <p className="sub-description">
        Join our community today and start sharing your musical journey.
      </p>
      <p className="home-heart">
      ♡
      </p>
    </div>
  );
}

export default HomePage;
