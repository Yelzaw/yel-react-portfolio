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
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>resoponsive design</li>
                <li>React</li>
                <li>Bootstrap</li>
            </ul>

            <h3>Back-end Proficiencies</h3>
            <ul>
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL, Sequelize</li>
            <li>MongoDB, Mongoose</li>
            <li>REST</li>
            <li>GraphQL</li>
            </ul>
        </div>
        
    </div>
    )
}