/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";

const button = () => {
  const [state, setState] = useState(0);

  const handleClick = (event) => {
    if (state % 2 == 1) {
      event.target.style.backgroundColor = "green";
    }else {
      event.target.style.backgroundColor = "black";
    }
    setState(state + 1);
  };
  return (
    <div>
      <button onClick={handleClick}>CLICK ME</button>
      <h1>{state}</h1>
    </div>
  );
};

export default button;
