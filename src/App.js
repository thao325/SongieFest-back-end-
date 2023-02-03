import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <div>
      <Header />
      <main className="py-3">
        <Container>
          <h1>SongieFest</h1>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

// function App() {
//   return (
//     <Router>
//       <Header />
//       SongieFest
//       <main className="py3">
//         <Container>
//           <Route path="/" component={HomeScreen} exact />
//           <Route path="/login" component={LoginScreen} exact />
//           {/* <Route path='/register' component={RegisterScreen} exact /> */}
//         </Container>
//       </main>
//       <Footer />
//     </Router>
//   );
// }

export default App;
