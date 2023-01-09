import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Card from "./Card";
import contacts from "../contacts";
function App(){
    return (
        <div>
            <Header/>
            <Note/>
            <Card name = {contacts[0].name} img = {contacts[0].img}
            email = {contacts[0].email} mob={contacts[0].mob}></Card>
            <Card name = {contacts[1].name} img = {contacts[1].img}
            email = {contacts[1].email} mob={contacts[1].mob}></Card>
            <Card name = {contacts[2].name} img = {contacts[2].img}
            email = {contacts[2].email} mob={contacts[2].mob}></Card>
            <Footer/>
        </div>
    )
};

export default App;