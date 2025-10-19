import React from "react";
import { SignUp } from "./LoginAndSignup/signup";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { LogIn } from "./LoginAndSignup/login";
import { Home } from "./home/home";
import { Visited } from "./components/visited/visited";
import { Navbar } from "./components/navbar/navbar";
import { Suggested } from "./components/sugestedRestaurants/suggested";
export default function App (){

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/home/id" element={<Home />} />
          <Route path="/visited" element={<Visited/>} />
          <Route path="/navbar" element={<Navbar/>}/>
          <Route path="/suggested" element={<Suggested/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}