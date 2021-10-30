import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './Banner.css';
import { Link } from 'react-router-dom';


const Banner = () => {
    const rightArrow = <FontAwesomeIcon icon={faArrowRight} />
    return (
        <div className="banner_area">
            <div className="container">
                <div className="banner_content">
                    <h1>Explore <br /><span>Your Travel</span></h1>
                    <p>Discover your next great adventure, become an explorer to get started!z</p>
                    <Link to="/all-package"><Button className="btn_regular">Booking Now {rightArrow}</Button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;