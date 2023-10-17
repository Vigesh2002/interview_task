import React from "react";
import './App.css'
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaWifi } from "react-icons/fa";
export default function Sub_footer(){
    return(
        <div id="footer_one_cotainer">
            <div id="footer_side_design_1"></div>
            <div id="footer_side_design_2"></div>
            <div id="footer_items">
                <div id="footer_items_two">
                    <h4 id="footer_contact_us_heading">Contact Us</h4>
                    <p id="footer_paragraph_cooperation">Hi, we are always open for cooperation and suggestions, <br></br> contact us in one of the ways below:</p>
                    <div id="address_details">
                        <div id="footer_items_three">
                            <p id="footer_phone_number">PHONE NUMBER</p>
                            <h6 id="footer_number">089252 97807</h6>
                        </div>
                        <div id="footer_items_four">
                            <p id="footer_mail_address">EMAIL ADDRESS</p>
                            <h6 id="footer_email">careers@uitouxsolutions.com</h6>
                        </div>
                        <div id="footer_items_five">
                            <p id="footer_location">OUR LOCATION</p>
                            <h6 id="footer_address_location">102, Athipalayam Rd, <br></br> Ramakrishnapuram, <br></br> Chinnavedampatti, <br></br> Coimbatore, Tamil Nadu <br></br> 641049</h6>
                        </div>
                        <div id="footer_items_six">
                            <p id="footer_working_hours">WORKING HOURS</p>
                            <h6 id="footer_timing">Mon-Fri 10:00pm - 6:00pm</h6>
                        </div>
                    </div>
                </div>
                <div id="footer_items_seven">
                    <h4 id="footer_information_heading">Information</h4>
                    <ul id="footer_un_orderlist">
                        <li>About Us</li>
                        <li>Delivery Information</li>
                        <li>Privacy Policy</li>
                        <li>Brands</li>
                        <li>Contact Us</li>
                        <li>Returns</li>
                        <li>Site Map</li>
                    </ul>
                </div>
                <div id="footer_items_eight">
                    <h4 id="footer_account_heading">My Account</h4>
                    <ul id="footer_un_orderlist_two">
                        <li>Store Location</li>
                        <li>Order History</li>
                        <li>Wish List</li>
                        <li>Newsletter</li>
                        <li>Special Offers</li>
                        <li>Gift Certificates</li>
                        <li>Affiliate</li>
                    </ul>
                </div>
                <div id="footer_items_nine">
                    <h4 id="footer_newsletter_heading">Newsletter</h4>
                    <p id="footer_paragraph_enter">Enter your email below to subscribe to our newsletter <br></br> and keep up to date with discounts and special offers.</p>
                    <div id="footer_items_ten">
                        <input id="footer_input_box" type="text" placeholder="user@example.com"></input>
                        <button id="footer_btn"><a id="footer_submit_btn2" href="#">Subscribe</a></button>
                    </div>
                    <p id="footer_paragraph_followus">Follow us on social networks</p>
                    <ul id="footer_un_orderlist_icons">
                        <li id="ul_li_fb"><FaFacebook/></li>
                        <li id="ul_li_tw"><FaTwitter/></li>
                        <li id="ul_li_yt"><FaYoutube/></li>
                        <li id="ul_li_in"><FaInstagram/></li>
                        <li id="ul_li_wi"><FaWifi/></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}