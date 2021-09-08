import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createClient } from '../redux/actions/client';
import { updateClient } from '../redux/actions/clientInfo';

function NewClientForm({ setNewClientForm, setClientId, clientId }) {
   const dispatch = useDispatch();

   const [clientData, setClientData] = useState({
      firstName: '',
      lastName: '',
      phone: '',
      ignitionCode: '',
      vehicleNumber: ''
   });

   const client = useSelector(state => state.clientInfoReducer);
   
   useEffect(() => {
      if (clientId) {
         setClientData({
            firstName: client.firstName || '',
            lastName: client.lastName || '',
            phone: client.phone || '',
            ignitionCode: client.ignitionCode || '',
            vehicleNumber: client.vehicleNumber || ''
         })
      }
   }, [clientId, client])

   const handleSubmit = e => {
      e.preventDefault();
      if (clientId) {
         dispatch(updateClient(clientId, clientData));
         setNewClientForm(false);
      } else {
         dispatch(createClient(clientData));
         setNewClientForm(false);
      }
      setClientId(null);
   }

   const closeForm = () => {
      setNewClientForm(false);
      setClientId(null);
   }

   return (
      <div className="new-client-form">
         <form onSubmit={handleSubmit}>

            <div className="close-form" onClick={closeForm}>
               <h1>x</h1>
            </div>

            <div className="form-input">
               <input
                  type="text"
                  placeholder="שם פרטי"
                  value={clientData.firstName}
                  onChange={e => setClientData({ ...clientData, firstName: e.target.value })}
               />
            </div>

            <div className="form-input">
               <input
                  type="text"
                  placeholder="שם משפחה"
                  value={clientData.lastName}
                  onChange={e => setClientData({ ...clientData, lastName: e.target.value })}
               />
            </div>

            <div className="form-input">
               <input
                  type="text"
                  placeholder="טלפון"
                  value={clientData.phone}
                  onChange={e => setClientData({ ...clientData, phone: e.target.value })}
               />
            </div>

            <div className="form-input">
               <input
                  type="text"
                  placeholder="קוד הנעה"
                  value={clientData.ignitionCode}
                  onChange={e => setClientData({ ...clientData, ignitionCode: e.target.value })}
               />
            </div>

            <div className="form-input">
               <input
                  type="text"
                  placeholder="מספר רכב"
                  value={clientData.vehicleNumber}
                  onChange={e => setClientData({ ...clientData, vehicleNumber: e.target.value })}
               />
            </div>

            <button className="btn btn-create-client" type="submit">{clientId ? 'שמור' : 'צור לקוח חדש'}</button>

         </form>
      </div>
   )
}

export default NewClientForm;
