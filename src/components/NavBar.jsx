import React from "react";
import { useState } from "react";
import "./NavBar.css";

const NavBar = () =>{

    const [activeLink, setActiveLink] = useState("home");

    function updateActiveLink(value){
        setActiveLink(value);
    }
    return( 
        <div clasname="navbar-container" >
            <div className="links">
                <img src="" alt="LOGO" className="logo"/>
                <a href="#home" className={activeLink === "home" ? "active-link" : "link"} onClick={()=>updateActiveLink("home")}>Home</a>
                <a href="#skills" className={activeLink === "skills" ? "active-link" : "link"} onClick={()=>updateActiveLink("skills")}>Skills</a>
                <a href="#projects" className={activeLink === "projects" ? "active-link" : "link"} onClick={()=>updateActiveLink("projects")}>Projects</a>
                <a href="#" className="social-icon"><img src="" alt=""/></a>
                <a href="#" className="social-icon"><img src="" alt=""/></a>
                <a href="#" className="social-icon"><img src="" alt=""/></a>
                <a href="#" className="social-icon"><img src="" alt=""/></a>
                <button className="contact-button">Let's contact!!</button>
            </div>
        </div>

    )
}

export default NavBar;