import * as api from '../../api';
import { CREATE_CLIENT, GET_CLIENTS, DELETE_CLIENT } from '../types';

export const createClient = (clientData) => async (dispatch) => {
   try {
      const { data } = await api.createClient(clientData);
      dispatch({ type: CREATE_CLIENT, payload: data });
   } catch (err) {
      console.log(err)
   }
}

export const getClients = () => async (dispatch) => {
   try {
      const { data } = await api.getClients();
      dispatch({ type: GET_CLIENTS, payload: data });
   } catch (err) {
      console.log(err);
   }
}

export const deleteClient = (id, history) => async (dispatch) => {
   try {
      const { data } = await api.deleteClient(id)
      dispatch({ type: DELETE_CLIENT, payload: data})
      history.push('/');
   } catch (err) {
      
   }
}