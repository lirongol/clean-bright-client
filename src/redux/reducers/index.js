import { combineReducers } from 'redux';
import loginReducer from './login';
import clientsReducer from './client';
import clientInfoReducer from './clientInfo';
import errorReducer from './error';

const reducers = combineReducers({
   loginReducer,
   clientsReducer,
   clientInfoReducer,
   errorReducer
});

export default reducers;