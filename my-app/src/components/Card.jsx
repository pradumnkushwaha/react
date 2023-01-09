import React from "react";

function Card(props){
   return (
   <div className ="card">
   <div className ="top">
      <h2 className="name">{props.name}</h2>
      <img src={props.img} className="circle-img "></img>

   </div>
   <div className="bottom">
   
    <p className="info">{props.email}</p>
    <p className="info">{props.mob}</p>
   

   </div>
    
   </div>
   )
    
}

export default Card;