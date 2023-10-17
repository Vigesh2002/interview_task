import React from "react";
import './App.css'
import img1 from './source-images/logo.png'
import img2 from './svg/heart.svg'
import img3 from './svg/person.svg'
import img4 from './svg/cart.svg'
import img5 from './svg/car.svg'
import img6 from './svg/search.svg'

export default function Nav_bar3(){
    return(
        <div id="nav_nav_nav_nav_bar">
            <div id='design'>
            <img id='logo' src={img1} alt=''/>

            <span id="input_1">
                <img id="car_logo" src={img5} alt=""></img>
            <input id="vehicle" type="number" placeholder="Select Vehicle" ></input>
            </span>

            <span id="input_2">
            <input id="number" type="text" placeholder="Enter Keyword or Part Number"></input>
            <img id="search" src={img6} alt=""></img>
            </span>

            <img id='heart' src={img2} alt=''/>

            <span id="logo_2">
            <img id='person' src={img3} alt=''/>
            <span>
            <p id="hello">Hello, Log In</p>
            <h4 id="acc_ou">My Account</h4>
            </span>
            </span>

            <span id="logo_3">
            <img id='cart' src={img4} alt=''/>
            <span>
            <p id="shopping">Shopping Cart</p>
            <h4 id="price">1468.60</h4>
            </span>
            </span>

        </div>
        <hr></hr>
        </div>
    )
}