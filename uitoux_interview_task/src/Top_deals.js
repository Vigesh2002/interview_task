import React from "react";
import './App.css'

export default function Top_deals(){
    return(
        <div id="deals_container">
            <div id="deals_motor">
                <div id="gradient"></div>
                <h3 id="heading_oils">Motor Oils</h3>
                <p id="paragraph_synthetic">Synthetic motor oil with free shipping<br></br>Friction free life guranteed</p>
                <button id="btn-1"><a id="shop_link_1" href="#">Shop Now</a></button>
            </div>
            <div id="deals_save">
            <div id="gradient"></div>
            <h3 id="heading_savesupto">Save Up To $40</h3>
                <p id="paragraph_luxurious">Luxurious interior part for real aesthetes<br></br>Leather, fabric, ivory and more.</p>
                <button id="btn-2"><a id="shop_link_2" href="#">Shop Now</a></button>
            </div>
        </div>
    )
}