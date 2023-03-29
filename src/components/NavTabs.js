import React from 'react';
import './styles/Header.css';
function NavTabs({ currentPage, handlePageChange }) {
    return (
        <header>
            <div className="profile">
                <h1>Yel Zaw Aung</h1>
            </div>
            <nav>   
                    <ul className="nav nav-tabs">
                    <li >
                    <a
                        href="#aboutme"
                        onClick={() => handlePageChange('Aboutme')}
                        className={currentPage === 'Aboutme' ? 'nav-link active' : 'nav-link'}
                    >
                        About me
                    </a>
                    </li>
                    <li >
                    <a
                        href="#contact"
                        onClick={() => handlePageChange('Contact')}            
                        className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                    >
                        Contact
                    </a>
                    </li>
                    <li className="nav-item">
                    <a
                        href="#portfolio"
                        onClick={() => handlePageChange('Portfolio')}          
                        className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                    >
                        Portfolio
                    </a>
                    </li>
                    <li className="nav-item">
                    <a
                        href="#resume"
                        onClick={() => handlePageChange('Resume')}            
                        className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                    >
                        Resume
                    </a>
                    </li>
                </ul>
            </nav> 
        </header>
    );
}

export default NavTabs;