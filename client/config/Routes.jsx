import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from '../components/App.jsx';
import ContactForm from '../components/ContactForm.jsx';
import Admin from '../components/Admin.jsx';

const Routes = () => (
  <Router history={hashHistory} >
    <Route path="/" component={App} >
      <IndexRoute component={ContactForm} />
      <Route path="/admin" component={Admin} />
    </Route>
  </Router>
);

export default Routes;
