import { CREATE_CLIENT, GET_CLIENTS, insertClientToArray, DELETE_CLIENT } from "../types";

const clientsReducer = (clients = [], action) => {
   switch (action.type) {
      case GET_CLIENTS:
         return clients = action.payload;
      case CREATE_CLIENT:
         return clients = [...clients, action.payload];
      case insertClientToArray:
         return clients.map(client => client._id === action.payload._id ? action.payload : client);
      case DELETE_CLIENT:
         return clients.filter(client => client._id !== action.payload._id);
      default:
         return clients;
   }
}

export default clientsReducer;