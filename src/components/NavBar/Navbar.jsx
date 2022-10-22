import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const NavBar =()=>{
    return(
        <nav className="navbar-container">
            <ul className="navbar-items-list">
                <li className="list-item">
                    Skills
                </li>
                <li className="list-item">
                    Projects
                </li>                
            </ul>
            <div className="navbar-contacts-container">
                <div className="contact-item"><FaFacebookF/></div>
                <div className="contact-item"><FaWhatsapp/></div>
                <div className="contact-item"><FaLinkedinIn/></div>
                <div className="contact-item"><FaGithub/></div>


            </div>

        </nav>
    );
}

export default NavBar;