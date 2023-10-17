import React from "react";
import './App.css'

export default function Main_content(){
    return(
        <div id="container">
        <div id="slide-container">
        <div id="sc-content">
            <h1 id="off-h1">30% OFF</h1>
            <h1 id='con1-h1' >When Buying Parts</h1>
            <h1 id='con2-h1' >With Installation</h1>
            <p id='con1-p'>Installation of parts in the service of</p>
            <p id='con2-p'>our partners</p>
            <button id='con-btn'>Shop Now</button>
        </div>
        <div id="sc-radiobuttons">
            <div  id='sc-firstbutton'></div>
            <div  id='sc-nexttbutton'></div>
            <div  id='sc-nexttbutton'></div>
        </div>
    </div>
    </div>
    )
}