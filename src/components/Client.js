import React from 'react';
import { Link } from 'react-router-dom';

function Client({ client }) {
   return (
      <div className="client-container">
         <div className="client-info">
            <h3>לקוח: <span>{`${client.firstName} ${client.lastName}`}</span></h3>
            {client.phone && <h3>טלפון: <span>{client.phone}</span></h3>}
            {client.vehicleNumber && <h3>מספר רכב: <span>{client.vehicleNumber}</span></h3>}
            {client.vehicleInfo?.tozeret_nm && <h3>יצרן: <span>{client.vehicleInfo.tozeret_nm}</span></h3>}
            {client.ignitionCode && <h3>קוד הנעה: <span>{client.ignitionCode}</span></h3>}
         </div>
         <div className="options">
            <Link to={`/clients/${client._id}`}>
               <button className="btn btn-more-details">הצג עוד</button>
            </Link>
         </div>
      </div>
   )
}

export default Client;
