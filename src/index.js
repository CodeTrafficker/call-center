import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';

import Operator from './Operator';
import Managers from './Managers';
import Home from './Home';
import Admin from './Admin';

ReactDOM.render(<App />, document.getElementById('root'));

export default function Routing() {
  return (
    <Router>
        <nav>
          <NavLink to="/" exact>Home</NavLink>
          <NavLink to="/operator">Operator</NavLink>
          <NavLink to="/managers">Manager</NavLink>
          <NavLink to="/admin">Admin</NavLink>
        </nav>

         <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/operator" component={Operator} />
          <Route path="/managers" component={Managers} />
          <Route path="/admin" component={Admin} />
        </Switch>
    </Router>
  );
}



