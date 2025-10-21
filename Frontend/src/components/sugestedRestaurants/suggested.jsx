import React, { useState } from "react";
import food1 from "../../assets/food.jpeg";
import "./suggested.css"
import { useEffect } from "react";
export function Suggested() {
   const [restaurants,setRestaurants]= useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:4000/api/restaurants");
        const data = await res.json();
        if (res.ok) {
          setRestaurants(data);
          console.log("API successful");
        } else {
          console.error("API unsuccessful");
        }
      } catch (error) {
        console.error("Error fetching restaurants:", error);
      }
    };

    fetchData(); // ✅ actually call the function
  }, []);
  
  console.log(restaurants)
  const [startindex, setStartIndex] = useState(0);
  const visible = 5;
  const handleNext=()=>{
    if(startindex+visible <restaurants.length){
      setStartIndex(startindex+1)
    }
  }
  const handlePrev=()=>{
    if(startindex> 0){
      setStartIndex(startindex-1)
    }
  }
   return (
    <div className="imagesContainer">
      <div className="headlines">
        <p>Suggestions</p>
      </div>

      <div className="pictures">
        <button
          type="button"
          onClick={handlePrev}
          className="prev"
          disabled={startindex === 0}
        >
          &#10094;
        </button>

        <div className="list">
          {restaurants.slice(startindex, startindex + visible).map((rest) => (
            <div key={rest.id} className="images">
            <img
  src={
  
       rest.image
    
  }
  alt={rest.name}
/>
              <div className="infoArea">
                <p className="restuName">{rest.name}</p>
   <p className="restuCity">
  {`${rest.city},${rest.address}` || "No address available"}
</p>


                <p className="restuRating">
                  ⭐ {rest.openingHoures}, (
                  {rest.googleRating} Rating ) 
                </p>
              </div>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={handleNext}
          className="next"
          disabled={startindex + visible >= restaurants.length}
        >
          &#10095;
        </button>
      </div>
    </div>
  );
}