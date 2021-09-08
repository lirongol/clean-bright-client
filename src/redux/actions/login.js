import * as api from '../../api';
import { LOGIN, LOGOUT } from '../types';

export const login = (formData, history) => async (dispatch) => {
   try {
      const { data } = await api.login(formData);
      dispatch({ type: LOGIN, payload: data });
      history.push('/');
   } catch (err) {
      console.log(err);
   }
}

export const logout = (history) => (dispatch) => {
   dispatch({ type: LOGOUT });
   history.push('/');
}