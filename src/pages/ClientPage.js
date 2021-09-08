import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getClientInfo, deleteJob } from '../redux/actions/clientInfo';
import { deleteClient } from '../redux/actions/client';
import JobEditor from '../components/JobEditor';

import { GrInProgress } from 'react-icons/gr';
import { MdDone } from 'react-icons/md';

function ClientPage({ setNewClientForm, setClientId }) {
   const dispatch = useDispatch();
   const history = useHistory();
   const { id } = useParams();

   const [jobEditor, setJobEditor] = useState(false);
   const [jobId, setJobId] = useState(null);

   const client = useSelector(state => state.clientInfoReducer);

   const getDate = d => `${d.slice(8, 10)}/${d.slice(5, 7)}/${d.slice(0, 4)}`;

   useEffect(() => {
      dispatch(getClientInfo(id));
   }, [dispatch, id]);

   const handleEdit = () => {
      setClientId(client._id);
      setNewClientForm(true);
   }

   const handleClientDelete = () => {
      dispatch(deleteClient(client._id, history))
   }
   
   return (
      <div className="page client-page">
         <h1 className="align-center">לקוח</h1>

         {client !== null && <div className="client-info client-container">
            <h3>לקוח: <span>{`${client.firstName} ${client.lastName}`}</span></h3>
            {client.phone && <h3>טלפון: <span>{client.phone}</span></h3>}
            {client.vehicleNumber && <h3>מספר רכב: <span>{client.vehicleNumber}</span></h3>}
            {client.ignitionCode && <h3>קוד הנעה: <span>{client.ignitionCode}</span></h3>}
            <h3>נוצר: <span>{getDate(client?.createdAt)}</span></h3>
            <h3>עודכן לאחרונה: <span>{getDate(client?.updatedAt)}</span></h3>
            <div className="options">
               <button className="btn btn-more-details" onClick={handleEdit}>ערוך</button>
               <button className="btn btn-more-details" style={{backgroundColor: 'red'}} onClick={handleClientDelete}>מחק לקוח</button>
            </div>
         </div>}

         <h1 className="align-center">פרטי רכב</h1>

         <div className="vehicle-info client-container">
            {client?.vehicleInfo?.tozeret_nm && <h3>יצרן: <span>{client.vehicleInfo.tozeret_nm}</span></h3>}
            {client?.vehicleInfo?.kinuy_mishari && <h3>דגם: <span>{client.vehicleInfo.kinuy_mishari}</span></h3>}
            {client?.vehicleInfo?.ramat_gimur && <h3>רמת גימור: <span>{client.vehicleInfo.ramat_gimur}</span></h3>}
            {client?.vehicleInfo?.shnat_yitzur && <h3>שנת ייצור: <span>{client.vehicleInfo.shnat_yitzur}</span></h3>}
            {client?.vehicleInfo?.tzeva_rechev && <h3>צבע רכב: <span>{client.vehicleInfo.tzeva_rechev}</span></h3>}
            {client?.vehicleInfo?.degem_manoa && <h3>דגם מנוע: <span>{client.vehicleInfo.degem_manoa}</span></h3>}
            {client?.vehicleInfo?.baalut && <h3>בעלות: <span>{client.vehicleInfo.baalut}</span></h3>}
            {client?.vehicleInfo?.zmig_kidmi && <h3>צמיג קדמי: <span>{client.vehicleInfo.zmig_kidmi}</span></h3>}
            {client?.vehicleInfo?.zmig_ahori && <h3>צמיג אחורי: <span>{client.vehicleInfo.zmig_ahori}</span></h3>}
            {client?.vehicleInfo?.mivchan_acharon_dt && <h3>טסט אחרון: <span>{getDate(client.vehicleInfo.mivchan_acharon_dt)}</span></h3>}
            {client?.vehicleInfo?.tokef_dt && <h3>תוקף טסט: <span>{getDate(client.vehicleInfo.tokef_dt)}</span></h3>}
            {client?.vehicleInfo?.misgeret && <h3>שילדה: <span>{client.vehicleInfo.misgeret}</span></h3>}
         </div>

         <h1 className="align-center">עבודות</h1>

         <div className="job-history align-center">
            <button className="btn btn-more-details" style={{ width: '95%' }} onClick={() => setJobEditor(true)}>הוסף עבודה</button>
            {jobEditor && <JobEditor setJobEditor={setJobEditor} setJobId={setJobId} jobId={jobId} />}
            {client?.jobHistory?.length === 0 ?
               (
                  <div>
                     <h3>לא נמצאו עבודות ללקוח זה</h3>
                  </div>
               ) : (
                  <div>
                     {client?.jobHistory?.map(job => {
                        return (
                           <div key={job._id} className="job-container client-container">
                              <h3>שם העבודה: <span>{job?.title}</span></h3>
                              <h3>הערות: <span>{job?.comments}</span></h3>
                              <h3>מחיר: <span>{job?.cost} ₪</span></h3>
                              <h3>תאריך: <span>{getDate(job?.date)}</span></h3>
                              <h3>סטטוס: <span className="symbol">{job?.status ? <MdDone style={{ color: 'green' }} /> : <GrInProgress />}</span></h3>
                              <button type="submit" className="btn btn-more-details" onClick={() => {
                                 setJobId(job._id);
                                 setJobEditor(true);
                              }}>ערוך</button>
                              <button className="btn btn-more-details" style={{ backgroundColor: 'red' }} onClick={() => {
                                 dispatch(deleteJob(client._id, job._id))
                              }}>מחק</button>
                           </div>
                        )
                     })}
                  </div>
               )
            }
         </div>

      </div>
   )
}

export default ClientPage;
