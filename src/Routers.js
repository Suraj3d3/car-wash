import React from 'react';
import  Home  from './Home';
import  About from './About';
import { Route, Switch, Redirect } from 'react-router-dom';

export const Routes123 = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route exact path="/About" component={About} />
      </Switch>
    </div>
  );
};