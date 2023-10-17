import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import img31 from './source-images/product-1.jpeg';
import img32 from './svg/cart-20.svg'
import img33 from './source-images/product-2.jpeg'
import img34 from './source-images/product-3.jpeg'
import img35 from './source-images/product-4.jpeg'
import img36 from './source-images/product-5.jpeg'
import img37 from './svg/quickview.svg'

export default function Card_component() {
    return (
        <div id="grid">
            <div id="grid-items">
                {/* <span id='hot'><li>Hot</li></span> */}
                <div id="card">
                    <span id='quick_view'><img id='img_view' src={img37} alt=''></img></span>
                    <img id="card-img"  src={img31} alt=""/>
                </div>
                <div id="card-content">
                    <p id="card-text">SKU: A43-44328-B</p>
                    <h1 id="card-header">Glossy Gray 19' Aluminium wheel AR-19</h1>
                    <h5 id='rating'>26 reviews</h5>
                    <h5 id='product_price'>$589.0 <span id='card_img_span'><img id='cart_img_product' src={img32} alt=''></img></span></h5>
                </div>
            </div>


            <div id="grid-items">
                <div id="card">
                    <span id='quick_view'><img id='img_view' src={img37} alt=''></img></span>
                    <img id="card-img"  src={img33} alt=""/>
                </div>
                <div id="card-content">
                    <p id="card-text">SKU: 729-51203-B</p>
                    <h1 id="card-header">Twin Exhaust Pipe From Brandix Z54</h1>
                    <h5 id='rating'>9 reviews</h5>
                    <h5 id='product_price'>$749.00 <span id='card_img_span_1'><img id='cart_img_product' src={img32} alt=''></img></span></h5>
                </div>
            </div>


            <div id="grid-items">
                <div id="card">
                <span id='quick_view'><img id='img_view' src={img37} alt=''></img></span>
                    <img id="card-img"  src={img34} alt=""/>
                </div>
                <div id="card-content">
                    <p id="card-text">SUK: 573-49386-C</p>
                    <h1 id="card-header">Motor Oil Level 5</h1>
                    <h5 id='rating'>2 reviews</h5>
                    <h5 id='product_price_3'>$23.00 <span id='card_img_span_2'><img id='cart_img_product' src={img32} alt=''></img></span></h5>
                </div>
            </div>


            <div id="grid-items">
                <div id="card">
                <span id='quick_view'><img id='img_view' src={img37} alt=''></img></span>
                    <img id="card-img"  src={img35} alt=""/>
                </div>
                <div id="card-content">
                    <p id="card-text">SKU: 753-38573-B</p>
                    <h1 id="card-header">Brandix Engine Block Z4</h1>
                    <h5 id='rating'>No reviews</h5>
                    <h5 id='product_price_3'>$452.00 <span id='card_img_span_3'><img id='cart_img_product' src={img32} alt=''></img></span></h5>
                </div>
            </div>

            <div id="grid-items">
                <div id="card">
                <span id='quick_view'><img id='img_view' src={img37} alt=''></img></span>
                    <img id="card-img"  src={img36} alt=""/>
                </div>
                <div id="card-content">
                    <p id="card-text">SKU 472-67382-Z</p>
                    <h1 id="card-header">Brandix Clutch Discs Z175</h1>
                    <h5 id='rating'>7 reviews</h5>
                    <h5 id='product_price_3'>$345.00 <span id='card_img_span_4'><img id='cart_img_product' src={img32} alt=''></img></span></h5>
                </div>
            </div>
        </div>
    );
}