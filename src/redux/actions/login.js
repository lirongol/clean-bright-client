import * as api from '../../api';
import { LOGIN, LOGOUT, INCORRECT_USER_PASSWORD, RESET_ERRORS } from '../types';

export const login = (formData, history) => async (dispatch) => {
   try {
      const { data } = await api.login(formData);
      dispatch({ type: LOGIN, payload: data });
      history.push('/');
   } catch (err) {
      console.log(err);
      const res = err.response;
      if (res.status === 404) {
         dispatch({ type: INCORRECT_USER_PASSWORD, payload: res.data.msg });
      }
   }
}

export const logout = (history) => (dispatch) => {
   dispatch({ type: LOGOUT });
   dispatch({ type: RESET_ERRORS });
   history.push('/');
}