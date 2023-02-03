import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import MusicPostPage from "./pages/MusicPostPage";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <h1>SongieFest</h1>
          <Route path="/" component={HomePage} exact />
          <Route path="/login" component={LoginPage} exact />
          <Route path="/musicpost/:id" component={MusicPostPage} />
          {/* <Route path='/register' component={RegisterScreen} exact /> */}
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
