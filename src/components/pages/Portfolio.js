import React from "react";
import '../styles/Portfolio.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import eventtime from '../images/event-time.jpg';
import traveltime from '../images/team-project.png';
import weather from '../images/screenshot.png';
import workday from '../images/work-day-scheduler.jpg';
import password from '../images/password-generator.jpg';
import coding from '../images/horiseon.png';
import eastcoastcamping from '../images/eastcoastcamp.gif';

export default function Portfolio() {
    return (
        <Container className="media">
            <h1 style={{color:'black'}}>Portfolio</h1>
        <Row>
            <Col>          
                <div className="box">
                    <img src={eastcoastcamping} alt="east coast camping" className="image"/>
                    <div className="overlay">
                        <a className="text" href="https://camp-eastcoast.herokuapp.com/" target="_blank">East Coast Camping              
                            <a
                                className="btn btn-primary btn-floating m-2 repository"
                                href="https://github.com/Yelzaw/camp-eastcoast"
                                target="_blank"
                                role="button"
                                >
                                    <i className="fab fa-github"></i>
                            </a>
                        </a>
                    </div>
                </div>
            </Col>
            <Col>
                <div className="box">
                    <img src={eventtime} alt="event-time" className="image"/>
                    <div className="overlay">
                        <a className="text" href="https://desolate-basin-87130.herokuapp.com/" target="_blank">Event Time              
                            <a
                                className="btn btn-primary btn-floating m-2 repository"
                                href="https://github.com/Yelzaw/event-time"
                                target="_blank"
                                role="button"
                                >
                                    <i className="fab fa-github"></i>
                            </a>
                        </a>
                    </div>
                </div>
            </Col>
            <Col>          
                <div className="box">
                    <img src={traveltime} alt="where-you-want-to-learn" className="image"/>
                    <div className="overlay">
                        <a className="text" href="https://yelzaw.github.io/where-you-want-to-learn/" target="_blank">Where You Want To Go              
                            <a
                                className="btn btn-primary btn-floating m-2 repository"
                                href="https://github.com/Yelzaw/where-you-want-to-learn"
                                target="_blank"
                                role="button"
                                >
                                    <i className="fab fa-github"></i>
                            </a>
                        </a>
                    </div>
                </div>
            </Col>
        </Row>
        <Row>
        <Col>
                <div className="box">
                    <img src={password} alt="password-generator" className="image"/>
                    <div className="overlay">
                        <a className="text" href="https://yelzaw.github.io/password-generator-with-javascript/" target="_blank">Password Generator              
                            <a
                                className="btn btn-primary btn-floating m-2 repository"
                                href="https://github.com/Yelzaw/password-generator-with-javascript"
                                target="_blank"
                                role="button"
                                >
                                    <i className="fab fa-github"></i>
                            </a>
                        </a>
                    </div>
                </div>
            </Col>
            <Col>          
                <div className="box">
                    <img src={workday} alt="work-day-scheduler" className="image"/>
                    <div className="overlay">
                        <a className="text" href="https://yelzaw.github.io/work-day-scheduler/" target="_blank">Work Day Scheduler              
                            <a
                                className="btn btn-primary btn-floating m-2 repository"
                                href="https://github.com/Yelzaw/work-day-scheduler"
                                target="_blank"
                                role="button"
                                >
                                    <i className="fab fa-github"></i>
                            </a>
                        </a>
                    </div>
                </div>
            </Col>
            <Col>          
                <div className="box">
                    <img src={coding} alt="where-you-want-to-learn" className="image"/>
                    <div className="overlay">
                        <a className="text" href="https://yelzaw.github.io/01-html-css-git-homework/" target="_blank">Code Refactor Challenge              
                            <a
                                className="btn btn-primary btn-floating m-2 repository"
                                href="https://github.com/Yelzaw/01-html-css-git-homework"
                                target="_blank"
                                role="button"
                                >
                                    <i className="fab fa-github"></i>
                            </a>
                        </a>
                    </div>
                </div>
            </Col>
        </Row>
        <Row>
            <Col md='4'>          
                <div className="box">
                    <img src={weather} alt="weather-dashboard" className="image"/>
                    <div className="overlay">
                        <a className="text" href="https://yelzaw.github.io/weather-dashboard-for-travelers/" target="_blank">Weather Dashboard for Travelers              
                            <a
                                className="btn btn-primary btn-floating m-2 repository"
                                href="https://github.com/Yelzaw/weather-dashboard-for-travelers"
                                target="_blank"
                                role="button"
                                >
                                    <i className="fab fa-github"></i>
                            </a>
                        </a>
                    </div>
                </div>
            </Col>
        </Row>
      </Container>
  
      );
}