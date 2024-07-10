import React,{useState,useEffect} from "react";


function component(){

const [num,setNum]= useState(0)


const handleNum = ()=>{
    setNum(num+1)
}




return(

    <>
    
    
    <p>number: {num}</p>
    <button onClick={handleNum}   >click me</button>
    
    
    </>

)

}


export default component