import React from "react";
import "./home.css"

import { Visited } from "../components/visited/visited";
export function Home(){

    return (
      <>
        <div className="headlineImage">
          <p>Restaurant Tracker </p>
        </div>
        <div className="visited">
            <Visited/>
        </div>
      </>
    );
}