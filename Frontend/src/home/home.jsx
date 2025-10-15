import React from "react";
import "./home.css"

import { Visited } from "../components/visited/visited";
import { Navbar } from "../components/navbar/navbar";
export function Home(){

    return (
      <>
      <Navbar/>
        <div className="headlineImage">
          <p>Restaurant Tracker </p>
        </div>
        <div className="visited">
            <Visited/>
        </div>
      </>
    );
}