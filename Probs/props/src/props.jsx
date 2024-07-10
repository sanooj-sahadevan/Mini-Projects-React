/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
function prop({ sendData }) {
  return (
    <div>
      <button onClick={() => sendData("message from child")}>btn</button>
    </div>
  );
}

export default prop;
