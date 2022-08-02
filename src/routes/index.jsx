import React from 'react';
import {BrowserRouter as Router,
    Switch,
    Route
    } from 'react-router-dom';
import Details from '../pages/Details';
import Login from '../pages/Login';
import Main from '../pages/Main';
import Register from '../pages/Register';

export default function Routes() {
  return (
    <Router>
        <Switch>
            <Route path='/login'>
                <Login />
            </Route>
            <Route path='/register'>
                <Register />
            </Route>
            <Route path='/'>
                <Main />
            </Route>
            <Route path='/details'>
                <Details />
            </Route>
        </Switch>
    </Router>
  )
}
