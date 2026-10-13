import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Profile from "./Components/Profile";
import Updateuser from "./Components/Updateuser";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "reactstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Container>
        <Router>
          <Row>
            <Header />
          </Row>

          <Row className="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/register" element={<Register />} />

              <Route
                path="/update/:user_email/:user_name/:user_password"
                element={<Updateuser />} />
              
            </Routes>
          </Row>

          <Row>
            <Footer />
          </Row>
        </Router>
      </Container>
    </>
  );
};

export default App;