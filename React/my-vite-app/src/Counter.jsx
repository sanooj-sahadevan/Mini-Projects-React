import { useState } from "react";

const Counter = () => {
  const [state, setState] = useState(0);
  const handlePlus = () => {
    if (state < 100)  setState((e) => e + 1);
  };

  const handleMinus = () => {
    if (state > 0) setState((e) => e - 1);
  };
  return (
    <>
      <button onMouseMove={handlePlus}>+</button>
      <h1>{state}</h1>
      <button onMouseMove={handleMinus}>-</button>
    </>
  );
};

export default Counter;
