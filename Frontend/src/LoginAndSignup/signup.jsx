import React, { useState } from "react";
import { BrowserRouter, Route, Routes,Link, useNavigate } from "react-router-dom";
import "./signup.css";
import { PopUp } from "../components/popUp/popUp";
export function SignUp() {
  const [message,setMessage]=useState("")
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const navigate = useNavigate()
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
        localStorage.setItem("userID", data.user._id);
        localStorage.setItem("token", data.token)
        setMessage(data.message);
          setTimeout(() => navigate(`/home/${data.user._id}`), 1000);
        

      } else {
        setMessage(data.message || "Signup unsuccessful");
      }
    } catch (error) {
      setMessage("Signup failed. Please try again.");
      console.error(error);
    }
  };
  return (
    <>
    <PopUp message={message}/>
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
                    required
                  />
                </div>
                <div className="lastname">
                  <label>Last name</label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="email">
                <label htmlFor="">Email</label>
                <input type="email" value={email} onChange={e=>setEmail(e.target.value)} required />
              </div>
              <div className="password"> 
                <label htmlFor="">Password</label>
                <input type="password" value={password} onChange={e=> setPassword(e.target.value)} required />
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
