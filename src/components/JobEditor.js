import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addJob, editJob } from '../redux/actions/clientInfo';

function JobEditor({ setJobEditor, setJobId, jobId }) {
   const { id } = useParams();
   const dispatch = useDispatch();
   const [jobData, setJobData] = useState({ title: '', comments: '', cost: '', status: false });

   const client = useSelector(state => state.clientInfoReducer);

   useEffect(() => {
      if (jobId) {
         let currentJob = client.jobHistory.find(job => job._id === jobId);
         setJobData({
            title: currentJob.title || '',
            comments: currentJob.comments || '',
            cost: currentJob.cost || '',
            status: currentJob.status || false
         })
      }
   }, [jobId, client])
   
   const handleSubmit = e => {
      e.preventDefault();
      if (jobId) {
         dispatch(editJob(client._id, jobId, jobData));
      } else {
         dispatch(addJob(id, jobData));
      }
      setJobId(null);
      setJobEditor(false);
   }

   const handleCloseEditor = () => {
      setJobEditor(false);
      setJobId(null);
   }

   return (
      <div className="new-client-form">
         <form onSubmit={handleSubmit}>

            <div className="close-form" onClick={handleCloseEditor}>
               <h1>x</h1>
            </div>

            <div className="form-input">
               <input
                  type="text"
                  placeholder="שם העבודה"
                  value={jobData.title}
                  onChange={e => setJobData({ ...jobData, title: e.target.value })}
               />
            </div>

            <div className="form-input">
               <input
                  type="text"
                  placeholder="הערות"
                  value={jobData.comments}
                  onChange={e => setJobData({ ...jobData, comments: e.target.value })}
               />
            </div>

            <div className="form-input">
               <input
                  type="number"
                  placeholder="מחיר"
                  value={jobData.cost}
                  onChange={e => setJobData({ ...jobData, cost: e.target.value })}
               />
            </div>

            {jobId && <div className="form-input">
               <select style={{width: '100%'}} value={jobData.status} onChange={e => setJobData({ ...jobData, status: e.target.value })}>
                  <option value={true}>עבודה הסתיימה</option>
                  <option value={false}>עבודה בתהליך</option>
               </select>
            </div>}

            <button className="btn btn-create-client" type="submit">{jobId ? 'שמור' : 'הוסף עבודה'}</button>

         </form>
      </div>
   )
}

export default JobEditor;
