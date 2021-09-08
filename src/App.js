import React, { useState, useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import ClientsPage from './pages/ClientsPage';
import ClientPage from './pages/ClientPage';

import Navbar from './components/Navbar';
import NewClientForm from './components/NewClientForm';

function App() {
  const location = useLocation();
  const [profile, setProfile] = useState(JSON.parse(localStorage.getItem('profile')));
  const [newClientForm, setNewClientForm] = useState(false);
  const [clientId, setClientId] = useState(null);

  useEffect(() => {
    setProfile(JSON.parse(localStorage.getItem('profile')));
  }, [location])

  return (
    <div className="app">

      {profile && <Navbar setNewClientForm={setNewClientForm} />}

      {newClientForm &&  <NewClientForm setNewClientForm={setNewClientForm} setClientId={setClientId} clientId={clientId} />}

      <Switch>

        {!profile && <Route path='/'>
          <LoginPage />
        </Route>}

        <Route exact path='/'>
          <ClientsPage />
        </Route>

        <Route exact path='/clients/:id'>
          <ClientPage setNewClientForm={setNewClientForm} setClientId={setClientId} />
        </Route>

        <Route path='/'>
          <h1 className="page d-flex-center">הדף לא קיים</h1>
        </Route>

      </Switch>
    </div>
  );
}

export default App;
