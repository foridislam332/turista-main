import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import ShowPackageDetails from '../ShowPackageDetails/ShowPackageDetails';

const SinglePackageDetails = () => {
    const { id } = useParams();
    const [packages, setPackages] = useState([]);
    const [singlePackageDetails, setSinglePackageDetails] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/all-package')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])

    useEffect(() => {
        if (packages.length) {
            const addedPackage = [];
            const singlePackageDetails = packages.find(singlePackage => singlePackage._id == id);
            addedPackage.push(singlePackageDetails);
            setSinglePackageDetails(addedPackage)
        }
    }, [packages])


    return (
        <div>
            {
                singlePackageDetails.map(catchPackage => <ShowPackageDetails
                    key={catchPackage._id}
                    catchPackage={catchPackage}
                ></ShowPackageDetails>)
            }
        </div>
    );
};

export default SinglePackageDetails;