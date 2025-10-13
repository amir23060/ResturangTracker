import React from "react";
import { SignUp } from "./LoginAndSignup/signup";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
export default function App (){

  return(<>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<SignUp/>}/>
  </Routes>
  </BrowserRouter>
  </>)
}