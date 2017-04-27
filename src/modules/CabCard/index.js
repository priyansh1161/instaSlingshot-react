import React from 'react';

import './styles.scss';

const CabCard = ({title, imageURL, description, capacity, price_details}) => (
  <div className="card-basic">
    <img src={imageURL} alt={title} style={{minHeight : '100px', maxHeight : '100px'}}/>
    <div className="card-basic-info">
      <h6 className="text-center">{title}</h6>
      <p  className="text-muted text-center">{description}</p>
      <div style={{ display: 'flex', alignContent: 'center', justifyContent: 'center'}}>
        <h6 className="text-muted text-center">{ price_details && `${price_details.currency_code} ${price_details.cost_per_distance} / ${price_details.distance_unit}`}</h6>
        <div style={{flexGrow: 1}}/>
        <p>Capacity: {capacity} </p>
      </div>
    </div>
  </div>
);

export default CabCard;
