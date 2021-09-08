import axios from 'axios';

const API = axios.create({ baseURL: 'https://clean-and-bright-api.herokuapp.com' });

API.interceptors.request.use(req => {
   if (localStorage.getItem('profile')) {
      const profile = JSON.parse(localStorage.getItem('profile'));
      req.headers.token = profile.token;
   }
   return req;
})

// admin
export const login = formData => API.post('/user/login', formData);
// client
export const getClients = () => API.get('/client/getall');
export const getClientInfo = id => API.get(`/client/getone/${id}`);
export const createClient = clientData => API.post('/client/create', clientData);
export const updateClient = (id, clientData) => API.patch(`/client/update/${id}`, clientData);
export const deleteClient = id => API.delete(`/client/delete/${id}`);
export const addJob = (id, jobData) => API.patch(`/client/newjob/${id}`, jobData);
export const editJob = (clientId, jobId, jobData) => API.patch(`/client/${clientId}/editjob/${jobId}`, jobData);
export const deleteJob = (clientId, jobId) => API.patch(`/client/deletejob/${clientId}/${jobId}`);