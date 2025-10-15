import React, { useState } from "react";
import food from "../assets/food.jpeg"
import { BrowserRouter, Route, Routes,Link } from "react-router-dom";
import "./signup.css";
export function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = "";
  return (
    <>
      <div className="container">
        <div className="inputs">
          <div className="header">
            <p className="create">Create an account</p>
            <p className="navigatetologin">
              Already have an account? <Link>Log In</Link>
            </p>
          </div>
          <div className="form">
            <form action="">
              <div className="name">
                <div className="firstname">
                  {" "}
                  <label>First name</label>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="lastname">
                  <label>Last name</label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
              <div className="email">
                <label htmlFor="">Email</label>
                <input type="email" value={email} onChange={e=>setEmail(e.target.value)} />
              </div>
              <div className="password"> 
                <label htmlFor="">Password</label>
                <input type="password" value={password} onChange={e=> setPassword(e.target.value)} />
              </div>
              <button type="submit">Create an account</button>
            </form>
          </div>
        </div>
        <div className="image">
           
        </div>
      </div>
    </>
  );
}
