import React, { useState } from "react";
import "./login.css"
import { Link } from "react-router-dom";
export function LogIn (){
const [email,setEmail]= useState("")
const [password, setPassword]=useState("")
    return(<>
    
    <div className="container2 ">
        <div className="inputs2">
            <div className="header2">
                <p className="create2">Log in</p>
                <p className="navigatetosignup">Dont have a account?<Link to={"/"}>Sign up</Link></p>
            </div>
            <div className="form2">
                <div className="email2">
                    <label htmlFor="">Email</label>
                    <input type="email" value={email} onChange={e=> setEmail(e.target.value)} />
                </div>
                <div className="password2"> 
                    <label htmlFor="">Password</label>
                    <input type="password"  value={password} onChange={e=>setPassword(e.target.value)} />
                </div>
                <button type="submit">Log in</button>
            </div>
        </div>
        <div className="image2"></div>
          </div>
    </>)

}