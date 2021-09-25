import { INCORRECT_USER_PASSWORD, RESET_ERRORS } from '../types';

const errorReducer = (errors = {}, action) => {
   switch (action.type) {
      case INCORRECT_USER_PASSWORD:
         return errors = { ...errors, incorrectLoginMsg: action.payload };
      case RESET_ERRORS:
         return errors = {};
      default:
         return errors;
   }
}

export default errorReducer;