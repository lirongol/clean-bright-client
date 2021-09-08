import { GET_CLIENT_INFO, UPDATE_CLIENT, ADD_JOB, EDIT_JOB, DELETE_JOB } from '../types';

const clientInfoReducer = (client = null, action) => {
   switch (action.type) {
      case GET_CLIENT_INFO:
         return action.payload;
      case UPDATE_CLIENT:
         return action.payload;
      case ADD_JOB:
         return action.payload;
      case EDIT_JOB:
         return action.payload;
      case DELETE_JOB:
         return action.payload;
      default:
         return client;
   }
}

export default clientInfoReducer;