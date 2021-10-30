import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ShowPackageDetails.css';

const ShowPackageDetails = ({ catchPackage }) => {
    console.log(catchPackage);
    const { name, img, price, description } = catchPackage;
    return (
        <div className="show_package_area">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="show_package_img">
                            <img className="w-100" src={img} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-5 d-flex align-items-center">
                        <div className="show_package_content">
                            <h1>{name}</h1>
                            <h5>{description}</h5>
                            <h3>Price : <span>${price}</span></h3>
                            <Link to="/order"><Button className="btn_regular">Prace An Order</Button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowPackageDetails;