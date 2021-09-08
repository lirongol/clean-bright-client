import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getClients } from '../redux/actions/client';

import Client from '../components/Client';

function ClientsPage() {
   document.title = 'Clean & Bright | לקוחות';
   const clients = useSelector(state => state.clientsReducer);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getClients());
   }, [dispatch])

   return (
      <div className="page clients-page">
         <h1>לקוחות</h1>
         {clients.map(client => (
            <Client key={client._id} client={client} />
         ))}
      </div>
   )
}

export default ClientsPage;
