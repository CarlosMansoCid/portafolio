import React from "react";
import NavBar from "../../components/NavBar/Navbar";
import Skills from "../../components/Skills/Skills";
import './home.css';

const Home = () =>{
    return(
        <>
        <NavBar/>
        <header>
        <section className="text-container">
            <div className="text">
                <h1 className="greats">Hi!</h1>  
                <br/>
                <h2 className="name">I'm Carlos Alberto Manso Cid</h2>
                <h3 className="position">frontend developer</h3>
            </div>
        </section>
        </header>
        <Skills/>
        </>


    )
}

export default Home;