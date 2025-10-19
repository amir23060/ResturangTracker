import React from "react";
import "./home.css"

import { Visited } from "../components/visited/visited";
import { Navbar } from "../components/navbar/navbar";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { PopUp } from "../components/popUp/popUp";
export function Home(){
   const [message,setMessage]=useState("")
  const {id} = useParams()
  const [user,setUser]=useState(null)
  const token = localStorage.getItem("token")
  console.log("Token:", token);
  useEffect(()=>{
const fetchUser=async()=>{

  const res = await fetch(`http://localhost:4000/api/${id}`,
    {  headers: { Authorization: `bearer ${token}` }}

  )
  const data = await res.json()
  if(res.ok){
    setUser(data)
    setMessage(`Welcome ${data.firstName}`)
  }
  else{
    setMessage(data.message)
  }
}
fetchUser()

  },[])

    return (
      <>
          

<PopUp message={message}/>
      <Navbar/>
        <div className="headlineImage">
          RESTAURANT TRACKER
        </div>
        <div className="visited">
            <Visited/>
        </div>
      </>
    );
}