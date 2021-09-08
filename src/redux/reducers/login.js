import { LOGIN, LOGOUT } from '../types';

const loginReducer = (profile = null, action) => {
   switch (action.type) {
      case LOGIN:
         localStorage.setItem('profile', JSON.stringify(action?.payload));
         return action?.payload;
      case LOGOUT:
         localStorage.clear();
         return null;
      default:
         return profile;
   }
}

export default loginReducer;