import React from "react";

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
            <div className="col-md-3 col-lg-4 col-xl-4 mx-auto mt-4">
                <a
                className="btn btn-primary btn-floating m-4"
                style={styles.email}
                href="mailto:yelzawaung@gmail.com"
                role="button"
                >
                    <i className="fab fa-google"></i>
                </a>
    
                <a
                className="btn btn-primary btn-floating m-4"
                style={styles.linkedin}
                href="https://www.linkedin.com/in/yel-zaw-aung-69a0b975/"
                role="button"
                >
                    <i className="fab fa-linkedin-in"></i>
                </a>
            
                <a
                className="btn btn-primary btn-floating m-4"
                style={styles.github}
                href="https://github.com/Yelzaw"
                role="button"
                ><i className="fab fa-github"></i>
                </a>
            </div>
    );
}