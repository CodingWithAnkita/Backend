import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { Link } from 'react-router-dom';

function NavBar() {

    return (
        <div className="">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Home</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/product">Product</a>
                            </li>
                            <li className="nav-item  ">
                            <a className="nav-link active" aria-current="page" href="/services">Services</a>
                        
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contact">Contact Us</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Cart
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/Ammeter"></a></li>
                                    <li><a className="dropdown-item" href="/Voltmeter"></a></li>
                                    <li><a className="dropdown-item" href="/Volt Amp Meter"></a></li>
                                    <li><a className="dropdown-item" href="/Indicator"></a></li>
                                    <li><a className="dropdown-item" href="/APFC Meter"></a></li>
                                    <li><a className="dropdown-item" href="/MFM Meter"></a></li>
                                    <li><a className="dropdown-item" href="/Relay Module"></a></li>

                                </ul>
                            </li>

                        </ul>
                    </div>

                </div>
            </nav>
        </div>
    )
}




export default NavBar