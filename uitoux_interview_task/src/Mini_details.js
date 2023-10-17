import React from "react";
import './App.css';
import img61 from './svg/free-delivery.svg';
import img62 from './svg/24-hours.svg';
import img63 from './svg/payment-security.svg';
import img64 from './svg/tag.svg';


export default function Mini_details(){
    return(
        <div id="details_container">
            <div id="details_items">
                <div id="image_details">
                    <img id="truck" src={img61} alt=""></img>
                </div>
                <div id="details_content">
                    <h3 id="details_heading">Free Shipping</h3>
                    <p id="details_paragraph">For orders from $50</p>
                </div>
            </div>

            <div id="details_items">
                <div id="image_details">
                    <img id="call" src={img62} alt=""></img>
                </div>
                <div id="details_content">
                    <h3 id="details_heading">Support 24/7</h3>
                    <p id="details_paragraph">Call us anytime</p>
                </div>
            </div>

            <div id="details_items">
                <div id="image_details">
                    <img id="payment_security" src={img63} alt=""></img>
                </div>
                <div id="details_content">
                    <h3 id="details_heading">100% Safety</h3>
                    <p id="details_paragraph">Only secure payments</p>
                </div>
            </div>

            <div id="details_items">
                <div id="image_details">
                    <img id="discount_tag" src={img64} alt=""></img>
                </div>
                <div id="details_content">
                    <h3 id="details_heading">Hot Offers</h3>
                    <p id="details_paragraph">Discounts up to 90%</p>
                </div>
            </div>
        </div>
    )
}