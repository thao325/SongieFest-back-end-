import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import ExplorePage from "./Pages/ExplorePage";
import ProfilePage from "./Pages/ProfilePage";
import LikesPage from './Pages/LikesPage';
import LoginForm from "./Forms/LoginForm";
import NavBar from "./Components/NavBar.js";
// import CommentForm from "./Forms/CommentForm";
// import CommentList from "./Components/CommentList";
import MusicPostPage from "./Pages/MusicPostPage.js";
// import Song from "./Components/Song.js";
import HomePage from "./Pages/HomePage";
import { Register } from "./Forms/Register.jsx";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

const baseUrl = "https://songiefest-be.herokuapp.com";

function App() {
  // store data of music posts API call in state
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

  // == NO PUT/PATCH ROUTE FOR MUSIC_POST/ID == MADE A LIKE COMPONENT 
  // Like a Music Post

  // const updateLikesApi = (musicPostId) => {
  //   return axios
  //     .put(`${kBaseUrl}/music_post/${id}/like`) ???
  //     .then((response) => {
  //       getMusicPosts(selectedMusicPost);
  //     })
  //     .catch((error) => {
  //       console.log(error.message);
  //     });
  // };







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
              {/* <Route path="/musicpost/:id/comments" element={<MusicPostPage/>} exact /> */}

              {/* :id = pass in id of selected music post as param thats 
              being accessed in MusicPostPage via `useParams`   */}
              <Route path="/musicpost/:id/comments" element={<MusicPostPage/>} exact />
              <Route path="/musicpost/:id/likes" element={<LikesPage/>} exact />
               {/* <Route path="/musicpost/:id" element={<MusicPostPage musicPosts={musicPosts} />} /> */}
              <Route path="/:username" element={<ProfilePage />} />
            </Routes>
          </Container>
        </main>
        <Footer />
      </Router>q
    </div>
  );
}

export default App;






