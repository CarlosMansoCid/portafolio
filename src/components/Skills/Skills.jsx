import React from "react";
import "./skills.css"
import { FaCss3, FaHtml5, FaNpm, FaReact, FaSass, FaLinux, FaGithub, FaJs, FaWindows, FaJira } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";


const Skills =()=>{
    return(
        <section className="skills-container">
            <div className="skills-tittle-tag-container">
                <h3 className="skills-tittle-tag"> Im work with ...</h3>
            </div>
            <div className="skills-cards-container">
                <div className="skill-card-container">
                    <div className="skill-card react"><FaReact/></div>
                </div>
                <div className="skill-card-container">
                    <div className="skill-card js"><FaJs/></div>
                </div>
                <div className="skill-card-container">
                    <div className="skill-card html"><FaHtml5/></div>
                </div>
                <div className="skill-card-container">
                    <div className="skill-card css"><FaCss3/></div>
                </div>
                <div className="skill-card-container">
                    <div className="skill-card sass"><FaSass/></div>
                </div>
                <div className="skill-card-container">
                    <div className="skill-card npm"><FaNpm/></div>
                </div>
                <div className="skill-card-container">
                    <div className="skill-card firebase"><SiFirebase/></div>
                </div>
                <div className="skill-card-container">
                    <div className="skill-card linux"><FaLinux/></div>
                </div>
                <div className="skill-card-container">
                    <div className="skill-card windows"><FaWindows/></div>
                </div>
                <div className="skill-card-container">
                    <div className="skill-card github"><FaGithub/></div>
                </div>
                <div className="skill-card-container">
                    <div className="skill-card jira"><FaJira/></div>
                </div>

                

                
                
                
                
            </div>
        </section>
    );
}

export default Skills;