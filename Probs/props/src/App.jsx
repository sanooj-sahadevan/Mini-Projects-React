/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import Props from "./props.jsx";

function App() {
  const [name, setName] = useState(null);

  const handleFun = (data) => {
    setName(data);
  };

  return (
    <>
      <Props sendData={handleFun} />
      <p>{name}</p>
    </>
  );
}

export default App;
