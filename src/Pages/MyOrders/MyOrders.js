import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MyOrder from '../MyOrder/MyOrder';
import './MyOrders.css';

const MyOrders = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    console.log(users)
    return (
        <div>
            <div className="container mb-5">
                <h1 className="text-center my-5">My Orders</h1>
                <div className="row">
                    <div className="col-lg-8">
                        {
                            users.map(user => <MyOrder
                                key={user._id}
                                user={user}
                            ></MyOrder>)
                        }
                    </div>
                    <div className="col-lg-4">
                        <div className="my_order_area">
                            <h1>My order :{users.length}</h1>
                            <Link to="/manage-order"><Button className="btn_regular mt-3">Manage All Orders</Button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyOrders;