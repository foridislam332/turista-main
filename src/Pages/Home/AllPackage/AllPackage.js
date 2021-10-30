import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SinglePackage from '../SinglePackage/SinglePackage';
import './AllPackage.css';

const AllPackage = () => {
    const [packages, setPackages] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/all-package')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, []);


    return (
        <div id="all_package" className="all_package_area">
            <div className="container">
                <div className="all_package_head">
                    <h5>Popular Tour Package</h5>
                    <h1>The Best Of Our All <br /> Tour Packages</h1>
                </div>

                <div className="row g-4">
                    {
                        packages.map(singlPpackage => <SinglePackage
                            key={singlPpackage._id}
                            package={singlPpackage}
                        ></SinglePackage>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllPackage;