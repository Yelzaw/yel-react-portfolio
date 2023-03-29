import React, { useState } from 'react' ;
import NavTabs from './NavTabs';
import Aboutme from './pages/Aboutme';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Footer from './Footer';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');
//Render the page as follow the tab page
    const renderPage = () => {
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
        }
        return <Aboutme />;
       
    };

    const   handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer />
        </div>
    );
}