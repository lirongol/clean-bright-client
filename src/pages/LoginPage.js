import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { login } from '../redux/actions/login';

function LoginPage() {
   document.title = 'Clean & Bright | כניסה';
   const dispatch = useDispatch();
   const history = useHistory();

   const [loginData, setLoginData] = useState({ username: '', password: '' });

   const handleLogin = e => {
      e.preventDefault();
      dispatch(login(loginData, history));
   }

   return (
      <div className='login-page d-flex-center'>
         <form onSubmit={handleLogin}>

            <div className="form-input">
               <input
                  type="text"
                  placeholder="שם משתמש"
                  value={loginData.username}
                  onChange={e => setLoginData({ ...loginData, username: e.target.value })}
               />
            </div>

            <div className="form-input">
               <input
                  type="password"
                  placeholder="סיסמא"
                  value={loginData.password}
                  onChange={e => setLoginData({ ...loginData, password: e.target.value })}
               />
            </div>

            <button className="btn btn-login" type="submit">התחבר</button>
            
         </form>
      </div>
   )
}

export default LoginPage;
