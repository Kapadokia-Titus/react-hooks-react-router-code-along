import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Login from "./login";
import NavBar from "./navbar";
import SignUp from "./signup";
import Messages from "./messages";

function App() {
    return (
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/messages" element={<Messages />} />
        </Routes>
        <h2>Welcome To my page, i could have done a better job here</h2>
      </div>
    );
  }
  
  export default App;