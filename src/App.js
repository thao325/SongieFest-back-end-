import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import ExplorePage from "./Pages/ExplorePage";
import ProfilePage from "./Pages/ProfilePage";
import LogoutPage from "./Pages/LogoutPage";
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
                element={<ExplorePage />}
                exact
              />
        
              <Route path="/login" element={<LoginForm />} exact />
              <Route path="/register" element={<Register />} exact />
              {/* <Route path="/musicpost/:id/comments" element={<MusicPostPage/>} exact /> */}

              {/* :id = pass in id of selected music post as param thats 
              being accessed in MusicPostPage via `useParams`   */}
              <Route path="/logout" element={<LogoutPage />} />
              <Route path="/:username" element={<ProfilePage />} />
              <Route path="/musicpost/:id/comments" element={<MusicPostPage/>} exact />
               {/* <Route path="/musicpost/:id" element={<MusicPostPage musicPosts={musicPosts} />} /> */}
      
            </Routes>
          </Container>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;



/////////// comments stuff           ///////////////////

// const [comments, setComments] = useState([]);

// function addComment(inputText) {
//   setComments((prevComments) => {
//     return [...prevComments, inputText];
//   });
// }

// function deleteComment(id) {
//   setComments((prevComments) => {
//     return prevComments.filter((comment, index) => {
//       return index !== id;
//     });
//   });
// }

// return (
// <div>

//   <CommentForm onAdd={addComment} />
//   <div>
//     <ul>
//       {comments.map((commentList, index) => ( */}
//         <CommentList */}
//           key={index}
//           id={index}
//           text={commentList}
//           onChecked={deleteComment} */}
//         /> */}
//     ))} */}
//   </ul> */}
// </div> */}
