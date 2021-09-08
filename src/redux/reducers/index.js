import { combineReducers } from 'redux';
import loginReducer from './login';
import clientsReducer from './client';
import clientInfoReducer from './clientInfo';

const reducers = combineReducers({
   loginReducer,
   clientsReducer,
   clientInfoReducer
});

export default reducers;