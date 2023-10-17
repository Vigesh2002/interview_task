import React from "react"; 
import './App.css'
import img100 from './source-images/payments.png'

export default function Final_footer(){
    return(
        <div id="footer_two">
            <div id="footer_two_items">
                <p id="footer_two_pagraph">Powered by<span id="footer_span_para"> React </span>/<span id="footer_span_para"> Next.js</span> - Designed by<span id="footer_span_para"> UITOUX Solutions</span></p>
            </div>
            <div id="footer_items_items_two">
                <img id="footer_last_image" src={img100} alt=""></img>
            </div>
        </div>
    )
}