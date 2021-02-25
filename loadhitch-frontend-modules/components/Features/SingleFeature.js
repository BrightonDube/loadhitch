import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SingleFeature = ({ icon, bgColor }) => {
    return (
        <div className="col-lg-6 col-md-6 col-sm-6">
            <div className={`single-features-item bg-${bgColor}`}>
                <div className="icon">
                    <FontAwesomeIcon icon={icon} />
                </div>
                <h3>Feature Name</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
            </div>
        </div>
    )
}

export default SingleFeature
