import React, { useState } from "react";
import "./login.css"
import { Link, useNavigate } from "react-router-dom";
import { PopUp } from "../components/popUp/popUp";
export function LogIn (){
const [email,setEmail]= useState("")
const [password, setPassword]=useState("")
const navigate = useNavigate()
const [message,setMessage]=useState("")
const handleSubmit=async(e)=>{
    
e.preventDefault()
const user ={email,password}
try{
const res = await fetch("http://localhost:4000/api/login", {
     method: "POST",
        headers: { "Content-Type": "application/json" },
        body:JSON.stringify(user)

})
const data = await res.json()
if(res.ok){
    localStorage.setItem("userID", data.user._id)
    localStorage.setItem("token",data.token)
    setMessage(data.message)
    setTimeout(() => navigate(`/home/${data.user._id}`), 1000);
} else {
  setMessage(data.message || "Invalid email or password");
}


}catch(error){
    console.log(error)
    setMessage("somthing went wrong")
}

}
    return(<>
{message && <PopUp message={message}  />}
    <div className="container2 ">
        <div className="inputs2">
            <div className="header2">
                <p className="create2">Log in</p>
                <p className="navigatetosignup">Dont have a account?<Link to={"/"}>Sign up</Link></p>
            </div>
            <div className="form2">
                <form onSubmit={handleSubmit}>
                    <div className="email2">
                    <label htmlFor="">Email</label>
                    <input type="email" value={email} onChange={e=> setEmail(e.target.value)} required/>
                </div>
                <div className="password2"> 
                    <label htmlFor="">Password</label>
                    <input type="password"  value={password} onChange={e=>setPassword(e.target.value)} required/>
                </div>
                <button type="submit">Log in</button>
                </form>
            </div>
        </div>
        <div className="image2"></div>
          </div>
    </>)

}