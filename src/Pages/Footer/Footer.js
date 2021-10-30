import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer_area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="footer_single">
                            <h1>Turista</h1>
                            <p>Tourism is travel for pleasure or business; also the theory and practice of touring, the business of attracting, accommodating, and entertaining tourists, and the business of operating tours.</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="footer_single">
                            <h1>About Us</h1>
                            <ul>
                                <li><a href="#">Our Story</a></li>
                                <li><a href="#">Travel Blog & Tips</a></li>
                                <li><a href="#">Tour Guid</a></li>
                                <li><a href="#">Be Our Partner</a></li>
                                <li><a href="#">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="footer_single">
                            <h1>Support</h1>
                            <ul>
                                <li><a href="#">Customer Support</a></li>
                                <li><a href="#">Privacy & Policy</a></li>
                                <li><a href="#">Terms & Condition</a></li>
                                <li><a href="#">Forum</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="copyright_area">
                    <p>Copyright @ 2020 Turista all right reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;