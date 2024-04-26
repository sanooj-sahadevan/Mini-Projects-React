// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";


function MyComponemts() {
  const [foods, setFoods] = useState(["Apple", "Orange", "Banna"]);

  function handleAddFood() {
    const newFood = document.getElementById("foodinput").value;
    document.getElementById("foodinput").value = "";
    setFoods((f) => [...f, newFood]);
  }

  function handleRemoveFood(index) {

    setFoods(foods.filter((    _,i)=>i!==index))
  }

  return (
    <div className="cointainer">
      <h2>Type Food Name</h2>

      <input type="text" id="foodinput" placeholder="Enter Food Name" />
      <button onClick={handleAddFood}>Add Food</button>

      <h2>List of Foods</h2>
      <ul>
        {foods.map((food, index) => (
          <li key={index}  onClick={()=> handleRemoveFood(index)}  >{food}</li>
        ))}
      </ul>
    </div>
  );
}

export default MyComponemts;
