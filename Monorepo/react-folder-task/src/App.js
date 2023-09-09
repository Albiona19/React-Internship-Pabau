import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Components/Header.js';
import Body from './Components/Body.js';
import SelectionPage from './Components/SelectionPage.js';
import Footer from './Components/Footer.js';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Body} />
        <Route path="/selection/:option" component={SelectionPage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
