import React from "react";
import '../Styles/navBar.css';
import { Link } from "react-router-dom";

function Navbar(){
    return (
        <header className="navbar">
            <h1>Portfolio</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
                <Link to="/contact">Get in Touch</Link>
            </nav>
        </header>
    );
}
export default Navbar;
