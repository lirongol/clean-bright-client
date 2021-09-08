import * as api from '../../api';
import { GET_CLIENT_INFO, UPDATE_CLIENT, insertClientToArray, ADD_JOB, EDIT_JOB, DELETE_JOB } from '../types';

export const getClientInfo = id => async (dispatch) => {
   try {
      const { data } = await api.getClientInfo(id);
      dispatch({ type: GET_CLIENT_INFO, payload: data });
   } catch (err) {
      console.log(err);
   }
}

export const updateClient = (id, clientData) => async (dispatch) => {
   try {
      const { data } = await api.updateClient(id, clientData);
      dispatch({ type: UPDATE_CLIENT, payload: data });
      dispatch({ type: insertClientToArray, payload: data });
   } catch (err) {
      console.log(err);
   }
}

export const addJob = (id, jobData) => async (dispatch) => {
   try {
      const { data } = await api.addJob(id, jobData);
      dispatch({ type: ADD_JOB, payload: data });
   } catch (err) {
      console.log(err);
   }
}

export const editJob = (clientId, jobId, jobData) => async (dispatch) => {
   try {
      const { data } = await api.editJob(clientId, jobId, jobData);
      dispatch({ type: EDIT_JOB, payload: data });
   } catch (err) {
      console.log(err);
   }
}

export const deleteJob = (clientId, jobId) => async (dispatch) => {
   try {
      const { data } = await api.deleteJob(clientId, jobId);
      dispatch({ type: DELETE_JOB, payload: data });
   } catch (err) {
      console.log(err);
   }
}