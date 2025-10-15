import React, { useState } from "react";
import food1 from "../../assets/food.jpeg";

import "./visited.css"
export function Visited() {
  const images = [
    { src: food1, name: "restaurants name1", city: "city" },
    { src: food1, name: "restaurants name2", city: "city" },
    { src: food1, name: "restaurants name3", city: "city" },
    { src: food1, name: "restaurants name4", city: "city" },
    { src: food1, name: "restaurants name5", city: "city" },
    { src: food1, name: "restaurants name6", city: "city" },
  ];
  const [startindex, setStartIndex] = useState(0);
  const visible = 5;
  const handleNext=()=>{
    if(startindex+visible <images.length){
      setStartIndex(startindex+1)
    }
  }
  const handlePrev=()=>{
    if(startindex> 0){
      setStartIndex(startindex-1)
    }
  }
  return (
    <>
      <div className="imagesContainer">
        <div className="headlines">
          {" "}
          <p>Recently visited</p>
        </div>
        <div className="pictures">
          <button type="button" onClick={handlePrev} className="prev">
            &#10094;
          </button>

          <div className="list">
            {images
              .slice(startindex, startindex + visible)
              .map((img, index) => (
                <div key={index} className="images">
                  <img src={img.src} alt="" />
                  <div className="infoArea">
                    <p className="restuName">{img.name}</p>
                    <p className="rettuCity">{img.city}</p>
                  </div>
                </div>
              ))}
          </div>

          <button type="button" onClick={handleNext} className="next">
            &#10095;
          </button>
        </div>
      </div>
    </>
  );
}
