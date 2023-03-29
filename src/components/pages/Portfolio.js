import React from "react";
import '../styles/Portfolio.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import eventtime from '../images/event-time.jpg';
import traveltime from '../images/team-project.png';

export default function Portfolio() {
    return (
        <Container>
            <h1 style={{color:'black'}}>Portfolio</h1>
        <Row>
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
        {/* <Row>
          <Col>1 of 3</Col>
          <Col>2 of 3</Col>
          <Col>3 of 3</Col>
        </Row> */}
      </Container>
  
      );
}