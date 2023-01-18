import React from "react";
import Square from "./Square";
function Board(){
  return (
  <div className="board">
  <div className="row1">
  <Square props="ed"/>
  <Square  props="ed"/>
  <Square  props="ed"/>
  
   </div>
   <div className="row2">
   <Square  props="ed"/>
  <Square  props="ed"/>
  <Square  props="ed"/>
   
   </div>
   <div className="row3">
   <Square  props="ed"/>
  <Square  props="ed"/>
  <Square  props="ed"/>
   
   </div>
 </div>)
    
  
}

export default Board;



