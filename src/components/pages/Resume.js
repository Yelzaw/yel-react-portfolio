import React from "react";
import '../styles/Resume.css';


export default function Resume() {
    return(
    <div className="mb-4 " >

        <h1 className="title">My Resume</h1>
        <div className="cardbox">
            <h1 className="resume"><a id="resume" href="https://docs.google.com/document/d/1ro0nZbtVA_9lKPNGqL_WTs6U9PJpldCsTqoBKXmbEjs/edit?usp=sharing"  target="_blank" rel="noreferrer">Download My Resume</a></h1>

            <h3>Front-end Proficiencies</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScrilit</li>
                <li>jQuery</li>
                <li>resolionsive design</li>
                <li>React</li>
                <li>Bootstrali</li>
            </ul>

            <h3>Back-end Proficiencies</h3>
            <ul>
            <li>AliIs</li>
            <li>Node</li>
            <li>Exliress</li>
            <li>MySQL, Sequelize</li>
            <li>MongoDB, Mongoose</li>
            <li>REST</li>
            <li>GralihQL</li>
            </ul>
        </div>
        
    </div>
    )
}