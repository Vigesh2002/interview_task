import React from "react";
import './App.css';
import img41 from './source-images/product-6.jpeg'
import img42 from './source-images/product-9.jpeg'
import img43 from './source-images/product-4.jpeg'
import img44 from './source-images/product-7.jpeg'
import img45 from './source-images/product-10.jpeg'
import img46 from './source-images/product-13.jpeg'
import img47 from './source-images/product-8.jpeg'
import img48 from './source-images/product-11.jpeg'
import img49 from './source-images/product-9.jpeg'
import img50 from './svg/quickview.svg'

export default function Top_rated_products(){
    return(
        <div id="product_container">
            <span><h2 id="top">Top Rated Products</h2>
            <hr></hr></span>
            <span><h2 id="special">Special Offers</h2>
            <hr></hr></span>
            <span><h2 id="best">Bestsellers</h2>
            <hr></hr></span>
            <div id="product-items">
                <div id="card_two">
                    <img id="product_image" src={img41} alt=""></img>
                </div>
                <div id="card_two_content">
                    <span id="fiftyone"><img id="sec_image_product" src={img50} alt=""></img></span>
                    <h4 id="product_heading">Fantastic 12-Stroke Engine With A <br></br> Power of 1991 hp</h4>
                    <p id="product_review">17 reviews</p>
                    <h3 id="product_price_one">$2579.00</h3>
                </div>
            </div>

            <div id="product-items">
                
                <div id="card_two">
                    <img id="product_image" src={img42} alt=""></img>
                </div>
                <div id="card_two_content">
                    <span id="fiftyone"><img id="sec_image_product" src={img50} alt=""></img></span>
                    <h4 id="product_heading">Brandix Manual Five Speed Gearbox</h4>
                    <p id="product_review">6 reviews</p>
                    <h3 id="product_price">$ 879.00</h3>
                </div>
            </div>

            <div id="product-items">
                
                <div id="card_two">
                    <img id="product_image" src={img43} alt=""></img>
                </div>
                <div id="card_two_content">
                    <span id="fiftyone"><img id="sec_image_product" src={img50} alt=""></img></span>
                    <h4 id="product_heading">Brandix Engine Block Z4</h4>
                    <p id="product_review">No reviews</p>
                    <h3 id="product_price">$452.00</h3>
                </div>
            </div>

            <div id="product-items">
                <div id="card_two">
                    <img id="product_image" src={img44} alt=""></img>
                </div>
                <div id="card_two_content">
                    <span id="fiftyone"><img id="sec_image_product" src={img50} alt=""></img></span>
                    <h4 id="product_heading">Set of Four 19 Inch Spiked Tires</h4>
                    <p id="product_review">9 Reviews</p>
                    <h3 id="product_price">$327.00</h3>
                </div>
            </div>

            <div id="product-items">
                <div id="card_two">
                    <img id="product_image" src={img45} alt=""></img>
                </div>
                <div id="card_two_content">
                    <span id="fiftyone"><img id="sec_image_product" src={img50} alt=""></img></span>
                    <h4 id="product_heading">Set of Car Floor Mats Brandix Z4</h4>
                    <p id="product_review">16 reviews</p>
                    <h3 id="product_price">$78.00</h3>
                </div>
            </div>

            <div id="product-items">
                <div id="card_two">
                    <img id="product_image" src={img46} alt=""></img>
                </div>
                <div id="card_two_content">
                    <span id="fiftyone"><img id="sec_image_product" src={img50} alt=""></img></span>
                    <h4 id="product_heading">Brandix Clutch Discs Z175</h4>
                    <p id="product_review">7 reviews</p>
                    <h3 id="product_price">$345.00</h3>
                </div>
            </div>

            <div id="product-items">
                <div id="card_two">
                    <img id="product_image" src={img47} alt=""></img>
                </div>
                <div id="card_two_content">
                    <span id="fiftyone"><img id="sec_image_product" src={img50} alt=""></img></span>
                    <h4 id="product_heading">40 Megawatt Low Beam Lamp</h4>
                    <p id="product_review">31 reviews</p>
                    <h3 id="product_price">$4.00</h3>
                </div>
            </div>

            <div id="product-items">
                <div id="card_two">
                    <img id="product_image" src={img48} alt=""></img>
                </div>
                <div id="card_two_content">
                    <span id="fiftyone"><img id="sec_image_product" src={img50} alt=""></img></span>
                    <h4 id="product_heading">Tailights Brandix Z54</h4>
                    <p id="product_review">8 reviews</p>
                    <h3 id="product_price">$60.00</h3>
                </div>
            </div>

            <div id="product-items">
                <div id="card_two">
                    <img id="product_image" src={img49} alt=""></img>
                </div>
                <div id="card_two_content">
                    <span id="fiftyone"><img id="sec_image_product" src={img50} alt=""></img></span>
                    <h4 id="product_heading">Brandix Manual Five Speed Gearbox</h4>
                    <p id="product_review">6 reviews</p>
                    <h3 id="product_price">$879.00</h3>
                </div>
            </div>
        </div>
    )
}