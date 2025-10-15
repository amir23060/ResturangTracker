import React from "react";
import "./home.css"
import video from "../assets/video.mp4"
import { Visited } from "../components/visited/visited";
export function Home(){

    return (
      <>
        <div className="headlineImage">
        </div>
        <div className="visited">
            <Visited/>
        </div>
      </>
    );
}