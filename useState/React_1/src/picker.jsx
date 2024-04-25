// eslint-disable-next-line no-unused-vars
import React, { useState } from "react"; 

const ColourPicker = () => {

    const [color, setColor] = useState("#FFFFFF"); // Corrected useState spelling


function handleColorChange(event){
    setColor(event.target.value)
}


  return(

<div className="color-picker-container" >

<h1>Color Picker</h1>
<div className="color-display" style={{backgroundColor:color}} >

<p>select color: {color}</p>

</div>

<label > select a colour </label>
<input type="color" value={color} onChange={handleColorChange} />
</div>


  )
};

export default ColourPicker;
