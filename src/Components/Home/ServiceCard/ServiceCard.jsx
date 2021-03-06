import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceCard.css'

const ServiceCard = ({ service }) => {
  return (
    <div className="col-md-4 col-sm-12 serviceCard">
      <Link className="text-dark service-container" to={"/order/" + service._id}>
        <div style={{ border: 'none' }} className="card my-3 shadow">
          <div className="card-body text-center">
            {
              service && <img className="img-fluid" style={{ width: '80px' }} src={`data:image/png;base64,${service.image.img}`} alt="" />
            }
            <h5 className="card-title text-brand font-weight-bold my-3">{service.title}</h5>
            <p className="card-text text-secondary">{service.description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ServiceCard;
