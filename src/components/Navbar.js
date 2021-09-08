import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logout } from '../redux/actions/login';
import { Link } from 'react-router-dom';

import { FiMenu } from 'react-icons/fi';
import { GrClose } from 'react-icons/gr';
import { BsFillPersonPlusFill } from 'react-icons/bs';

function Navbar({ setNewClientForm }) {
   const dispatch = useDispatch();
   const history = useHistory();

   const [menu, setMenu] = useState(false);

   const handleLogout = () => {
      dispatch(logout(history))
   }

   return (
      <div className="navbar">
         <div className="ham-menu" onClick={() => setMenu(true)}>
            <FiMenu />
         </div>

         <div className="add-client d-flex-center" onClick={() => setNewClientForm(true)}>
            <BsFillPersonPlusFill />
         </div>

         {menu && <div className="menu">
            <div className="menu-header">
               <div className="close-menu" onClick={() => setMenu(false)}>
                  <GrClose />
               </div>
            </div>
            <div className="menu-links">

               <Link to='/' onClick={() => setMenu(false)}>
                  <div className="link">
                     <h2>לקוחות</h2>
                  </div>
               </Link>

               <div className="link" onClick={handleLogout}>
                  <h2>התנתק</h2>
               </div>

            </div>
         </div>}

      </div>
   )
}

export default Navbar;
