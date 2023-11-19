import React from 'react';

function Card(props) {
    return (
      <div className="card">
        {/* Card Content */}
        <div className="card-content">
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </div>
      </div>
    );
   }
   
   
   export default Card;