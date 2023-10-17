import React from "react";
import './App.css'

export default function Featured_product(){
    return(
        <div id="feature_products">
            <div id="product_navbar">
                <h4 id="heading_four">Featured Product</h4>
                <div>
                <ul id="unorderlist_eleven">
                    <li id="list_item_all"><a href="#">All</a></li>
                </ul>
                </div>
                <div>
                    <ul id="unorderlist_twelve">
                        <li id="list_item_power">Power Tools</li>
                        <li id="list_item_hand">Hand Tools</li>
                        <li id="list_item_pluming">Plumbing</li>
                    </ul>
                </div>
                <div>
                <ul id="unorderlist_thirten">
                    <li id="list_item_arrow">&#10094;</li>
                    <li id="">&#10095;</li>
                </ul>
                </div>
            </div>
            <hr id="featured_hr_line"></hr>
        </div>
    )
}