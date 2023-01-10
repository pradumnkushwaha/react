import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import details from "./Details";



function App(){
    return (
        <div>
            <Header/>
            
            {details.map(d =>{
               return(
              <Note
              key ={d.id}
            heading = {d.heading}
            para = {d.para}
               />
                    )
})}
            <Footer/>
        </div>
    )
};

export default App;