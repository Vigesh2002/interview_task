import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Nav_bar4(){
    return(
        <div id="nav-3">
            <div>
            <NavDropdown title="Shop By Category" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">One</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                        two
                    </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">three</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
                Four
            </NavDropdown.Item>
            </NavDropdown>
            </div>

            <div id="dp-list">
            <NavDropdown title="Home" id="basic-nav-dropdown-1">
                <NavDropdown.Item href="#action/3.1">One</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                        Two
                    </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Three</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
                Four
            </NavDropdown.Item>
            </NavDropdown>

{/* ----------------------------------------------------------------------------------- */}

            <NavDropdown title="Megamenu" id="basic-nav-dropdown-2">
                <NavDropdown.Item href="#action/3.1">One</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                        Two
                    </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Three</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
                Four
            </NavDropdown.Item>
            </NavDropdown>

{/* ----------------------------------------------------------------------------------- */}

            <NavDropdown title="Shop" id="basic-nav-dropdown-3">
                <NavDropdown.Item href="#action/3.1">One</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                        Two
                    </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Three</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
                Four
            </NavDropdown.Item>
            </NavDropdown>

{/* ----------------------------------------------------------------------------------- */}

            <NavDropdown title="Blog" id="basic-nav-dropdown-4">
                <NavDropdown.Item href="#action/3.1">One</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                        Two
                    </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Three</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
                Four
            </NavDropdown.Item>
            </NavDropdown>

{/* ----------------------------------------------------------------------------------- */}

            <NavDropdown title="Account" id="basic-nav-dropdown-5">
                <NavDropdown.Item href="#action/3.1">One</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                        Two
                    </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Three</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
                Four
            </NavDropdown.Item>
            </NavDropdown>

{/* ----------------------------------------------------------------------------------- */}

            <NavDropdown title="Pages" id="basic-nav-dropdown-6">
                <NavDropdown.Item href="#action/3.1">One</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                        Two
                    </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Three</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
                Four
            </NavDropdown.Item>
            </NavDropdown>

            <div><a id="nav_buy_them" href="#">Buy Them</a></div>

            </div>
            <div id="nav_call_97807">
                <p id="nav_nav_call">Call Us: <span id="span_08925297807">089252 97807</span></p>
            </div>
        </div>
    )
}