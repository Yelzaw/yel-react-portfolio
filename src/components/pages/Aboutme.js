import React from "react";
import '../styles/Aboutme.css';
import Card from 'react-bootstrap/Card';
import profile from '../images/profile_1.jpg';

export default function Aboutme() {
    return (
        <div className="display">
            <Card style={{
                width:'100%',
                margin: '1%',
                borderStyle: 'none',
                }}>
                    <Card.Img variant="top" src={profile} />
                {/* <img src={profile}/> */}
                </Card>
            <div>
            <h1 className="aboutme"
            >About me</h1>

            <p>Motivated well trained junior full stack Web Developer graduate from UNB bootcamp is looking for a development position to expand knowledge and skills towards working in a collaborative environment.</p>
            <p>Adapt at solving various technical problems with practical solutions using various types of computer software. </p>
            <p>Ability and willingness to innovate and learn new technologies, quick learner passionate about development. </p>
            </div>
        </div>
    )
}