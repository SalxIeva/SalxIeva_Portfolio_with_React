import React from "react";
import { Link, NavLink } from 'react-router-dom';
import './style.css';

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg header" id="mainNav">
            <div className="container-fluid container">
                <div className="navbar-content">
                    <Link className="navbar-brand" to="/">Ieva Saldukaite</Link>
                </div>
                <div className="navbar-content">
                    <div className="navbar-nav">
                        <NavLink className="nav-link" to="/skills">Skills</NavLink>
                        <NavLink className="nav-link" to="/about">About Me</NavLink>
                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
