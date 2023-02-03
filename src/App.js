import React from "react";
import "./App.css";
// import Login from "./components/LogIn";
import Footer from "./components/Footer";
import Header from "./components/Header";
// import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <main className="App">
  
      <Header />
      <Login />
      {/* <Register /> */}
      <Footer />

    </main>
  );
}

export default App;
