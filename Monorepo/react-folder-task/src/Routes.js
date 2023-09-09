import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Body from './Body';
import SelectionPage from './SelectionPage';

const Routes = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Body} />
        <Route path="/selection/:option" component={SelectionPage} />
      </Switch>
    </Router>
  );
};

export default Routes;
