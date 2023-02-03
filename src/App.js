import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes } from "react-router-dom";
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
          <Routes path="/" component={ExplorePage} exact />
          <Routes path="/login" component={LoginPage} exact />
          <Routes path="/musicpost/:id" component={MusicPostPage} />
          {/* <Routes path='/register' component={RegisterScreen} exact /> */}
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
