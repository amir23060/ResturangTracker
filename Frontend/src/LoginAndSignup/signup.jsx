import React, { useState } from "react";
import { BrowserRouter, Route, Routes,Link } from "react-router-dom";
import "./signup.css";
export function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
 const handleSubmit = async (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !password) {
      alert("Please fill in all fields");
      return;
    }

    const user = { firstName, lastName, email, password };

    try {
      const res = await fetch("http://localhost:4000/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("userID", data._id);
        alert("Sign up successful");

      } else {
        alert(data.message || "Signup unsuccessful");
      }
    } catch (error) {
      alert("Signup failed. Please try again.");
      console.error(error);
    }
  };
  return (
    <>
      <div className="container">
        <div className="inputs">
          <div className="header">
            <p className="create">Create an account</p>
            <p className="navigatetologin">
              Already have an account? <Link to={"/login"}>Log In</Link>
            </p>
          </div>
          <div className="form">
            <form onSubmit={handleSubmit}>
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
