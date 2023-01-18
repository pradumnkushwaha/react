import React from "react";

function Square({props}){

function clickHandler(){
    console.log("xn")
}
 
    return (
        <button onClick={clickHandler}>{props}</button>

)    }

export default Square;