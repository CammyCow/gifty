
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import {BrowserRouter as Router, Route, Routes,} from "react-router-dom";
import React from "react";

function App() {
  return (
      <Router>
        <Routes>
          <Route exact path = "/" element = {<Home />} />
          <Route exact path = "/login" element = {<Login />} />
          <Route exact path = "/register" element = {<Register />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/feed" element={<Home />} />
        </Routes>
      </Router>
  )
}

export default App;