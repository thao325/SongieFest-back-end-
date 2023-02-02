import React from "react";
import "./App.css";
import Login from "./components/LogIn";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <main className="App">
      <Header />
      <Login />
      <Footer />
    </main>
  );
}

export default App;
