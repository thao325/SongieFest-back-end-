import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ExplorePage from "./Forms/ExplorePage";
import LoginPage from "./Forms/LoginForm";
import MusicPostPage from "./Forms/MusicPostPage";
import HomePage from "./Pages/HomePage";
import {Register} from "./Forms/Register.jsx";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <h1>SongieFest</h1>
          <Routes>
            <Route path="/" element={<HomePage />} exact />
            <Route path="/explore" element={<ExplorePage />} exact />
            <Route path="/login" element={<LoginPage />} exact />
            <Route path="/musicpost/:id" element={<MusicPostPage />} />
            <Route path='/register' element={<Register/>} exact />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
