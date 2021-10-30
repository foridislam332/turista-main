import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import './PopularPlace.css';



const PopularPlace = () => {
    const location = <FontAwesomeIcon icon={faMapMarkerAlt} />
    const star = <FontAwesomeIcon icon={faStar} />
    return (
        <div className="popular_area container">
            <div className="popular_place_head">
                <h5>Popular Destinations</h5>
                <h1>Travel Most Popular Place <br /> In The World</h1>
            </div>
            <div className="row g-4">
                <div className="col-lg-4">
                    <Card className="popular_card">
                        <Card.Img variant="top" src="https://i.ibb.co/VBvnJZP/1.jpg" />
                        <Button className="btn_regular">Read More</Button>
                        <Card.Body>
                            <Card.Title>{location} Türkistan, Kazakistan</Card.Title>
                            <Card.Text>
                                {star}
                                {star}
                                {star}
                                {star}
                                {star}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-lg-4">
                    <Card className="popular_card">
                        <Card.Img variant="top" src="https://i.ibb.co/Xkb2gXd/2.jpg" />
                        <Button className="btn_regular">Read More</Button>
                        <Card.Body>
                            <Card.Title>{location} Tokyo , Japan</Card.Title>
                            <Card.Text>
                                {star}
                                {star}
                                {star}
                                {star}
                                {star}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-lg-4">
                    <Card className="popular_card">
                        <Card.Img variant="top" src="https://i.ibb.co/8rC2nPr/3.jpg" />
                        <Button className="btn_regular">Read More</Button>
                        <Card.Body>
                            <Card.Title>{location} Semporna , Malaysia</Card.Title>
                            <Card.Text>
                                {star}
                                {star}
                                {star}
                                {star}
                                {star}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <div className="row g-4 mt-1">
                <div className="col-lg-4">
                    <Card className="popular_card">
                        <Card.Img variant="top" src="https://i.ibb.co/8DbtvRK/4.jpg" />
                        <Button className="btn_regular">Read More</Button>
                        <Card.Body>
                            <Card.Title>{location} Victoria, Columbia</Card.Title>
                            <Card.Text>
                                {star}
                                {star}
                                {star}
                                {star}
                                {star}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-lg-4">
                    <Card className="popular_card">
                        <Card.Img variant="top" src="https://i.ibb.co/BTwC8PG/5.jpg" />
                        <Button className="btn_regular">Read More</Button>
                        <Card.Body>
                            <Card.Title>{location} Bangkok , Thailan</Card.Title>
                            <Card.Text>
                                {star}
                                {star}
                                {star}
                                {star}
                                {star}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-lg-4">
                    <Card className="popular_card">
                        <Card.Img variant="top" src="https://i.ibb.co/d5dS609/6.jpg" />
                        <Button className="btn_regular">Read More</Button>
                        <Card.Body>
                            <Card.Title>{location} Jakarta, Indonesia</Card.Title>
                            <Card.Text>
                                {star}
                                {star}
                                {star}
                                {star}
                                {star}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default PopularPlace;