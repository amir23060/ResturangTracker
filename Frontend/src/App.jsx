import React from "react";
import { SignUp } from "./LoginAndSignup/signup";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { LogIn } from "./LoginAndSignup/login";
import { Home } from "./home/home";
import { Visited } from "./components/visited/visited";
export default function App (){

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/home" element={<Home />} />
          <Route path="/visited" element={<Visited/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}