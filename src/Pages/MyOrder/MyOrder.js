import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import './MyOrder.css';

const MyOrder = (props) => {
    const { packageName, packagePrice, packageImg } = props.user;

    return (
        <div>
            <div className="my_order w-100">
                <div className="order_img">
                    <img src={packageImg} alt="" />
                </div>
                <div className="order_content">
                    <h4>{packageName}</h4>
                    <h5>Price: ${packagePrice}</h5>
                </div>
            </div>
        </div>
    );
};

export default MyOrder;