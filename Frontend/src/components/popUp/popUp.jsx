import React from "react";
import "./popup.css"
import { useEffect } from "react";
import { useState } from "react";
export function PopUp({message}){
    const [show ,setShow]=useState(true)
useEffect(()=>{
    if (!message) return;

    setShow(true); 
const timer = setTimeout(()=>{
setShow(false)
},3000)
return () => clearTimeout(timer); 
},[message])
if (!show || !message) return null;
    return(<>
  {show &&   <div className="popup">

        <p>{message}</p>
    </div>}
    
    </>)
}