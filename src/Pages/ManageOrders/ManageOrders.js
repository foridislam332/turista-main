import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ManageOrders.css';

const ManageOrders = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    const handleDeleteUser = id => {
        const proceed = window.confirm('Are you sure, You want to Remove this package?')
        if (proceed) {
            const url = `http://localhost:5000/users/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Package Remove Successfully')
                        const remainingUser = users.filter(user => user._id !== id)
                        setUsers(remainingUser)
                    }
                })
        }

    }
    return (
        <div>
            <div className="container mb-5">
                <h1 className="text-center my-5">Manage Your all Order</h1>
                <div className="row">
                    <div className="col-lg-8">
                        {
                            users.map(user => (
                                <div
                                    key={user._id}
                                >
                                    <div className="my_order manage_my_order w-100">
                                        <div className="order_img">
                                            <img src={user.packageImg} alt="" />
                                        </div>
                                        <div className="order_content">
                                            <h4>{user.packageName}</h4>
                                            <h5>Price: ${user.packagePrice}</h5>
                                        </div>
                                        <div className="handle_btn">
                                            <Button className="btn_regular">Update</Button>
                                            <Button onClick={() => handleDeleteUser(user._id)} className="btn_regular">Remove</Button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="col-lg-4">
                        <div className="my_order_area">
                            <h1>Total Orders :{users.length}</h1>
                            <Link to="/myorder"><Button className="btn_regular mt-3">My Orders</Button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageOrders;