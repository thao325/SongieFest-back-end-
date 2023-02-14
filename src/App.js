import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import ExplorePage from "./Pages/ExplorePage";
import ProfilePage from "./Pages/ProfilePage";
import LikesPage from "./Pages/LikesPage";
import LogoutPage from "./Pages/LogoutPage";
import LoginForm from "./Forms/LoginForm";
import NavBar from "./Components/NavBar.js";
import MusicPostPage from "./Pages/MusicPostPage.js";
import HomePage from "./Pages/HomePage";
import { Register } from "./Forms/Register.jsx";
import axios from "axios";
import React, { useState, useEffect } from "react";

const baseUrl = "https://songiefest-be.herokuapp.com";

function App() {
  const [musicPosts, setMusicPosts] = useState({});

  // get all music posts/Explore Page
  useEffect(() => {
    const getMusicPosts = async () => {
      const cookieValue = document.cookie
        .split("; ")
        .find((row) => row.startsWith("token="))
        ?.split("=")[1];
      const token = "Token " + cookieValue;

      try {
        const response = await axios.get(`${baseUrl}/explore/`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
        });
        setMusicPosts(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getMusicPosts();
  }, []);

  return (
    <div>
      <Router>
        <NavBar />
        <main className="py-3">
          <Container>
            <Routes>
              <Route path="/" element={<HomePage />} exact />
              <Route
                path="/explore"
                element={<ExplorePage musicPosts={musicPosts} />}
                exact
              />
              <Route path="/login" element={<LoginForm />} exact />
              <Route path="/register" element={<Register />} exact />
              <Route
                path="/musicpost/:id/comments"
                element={<MusicPostPage />}
                exact
              />
              <Route
                path="/musicpost/:id/likes"
                element={<LikesPage />}
                exact
              />
              <Route path="/padme" element={<ProfilePage />} />
              <Route path="/logout" element={<LogoutPage />} />
            </Routes>
          </Container>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
