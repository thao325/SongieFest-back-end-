import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ExplorePage from "./pages/ExplorePage";
import LoginPage from "./pages/LoginPage";
import MusicPostPage from "./pages/MusicPostPage";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <h1>SongieFest</h1>
          <Routes>
            <Route path="/" element={ExplorePage} exact />
            <Route path="/login" element={LoginPage} exact />
            <Route path="/musicpost/:id" element={MusicPostPage} />
            {/* <Routes path='/register' element={RegisterScreen} exact /> */}
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
