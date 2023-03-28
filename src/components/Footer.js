import React from "react";
import './styles/Footer.css';

const styles = {
    email: {
        background: "#dd4b39",
    },
    linkedin: {
        background: "#0082ca"
    },
    github: {
        background: "#333333"
    }
}

export default function Footer() {
    return (
            <div className="contactfooter">
                <a
                className="btn btn-primary btn-floating m-2 highlighter"
                style={styles.email}
                href="mailto:yelzawaung@gmail.com"
                role="button"
                >
                    <i className="fab fa-google"></i>
                </a>
    
                <a
                className="btn btn-primary btn-floating m-2 highlighter"
                style={styles.linkedin}
                href="https://www.linkedin.com/in/yel-zaw-aung-69a0b975/"
                role="button"
                >
                    <i className="fab fa-linkedin-in"></i>
                </a>
            
                <a
                className="btn btn-primary btn-floating m-2 highlighter"
                style={styles.github}
                href="https://github.com/Yelzaw"
                role="button"
                ><i className="fab fa-github"></i>
                </a>
            </div>
    );
}