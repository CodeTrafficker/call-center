import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Operator from './Operator';
import Managers from './Managers';
import Home from './Home';
import Admin from './Admin';
// const Home  = import('./Home')
// const Admin = import('./Admin')

ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Routing />, document.getElementById('root'));


export default function Routing() {
  return (
    <Router>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/operator">Operator View</Link>
          </li>
          <li>
            <Link to="/managers">Managers</Link>
          </li>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
        </ul>


        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}

         <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/operator">
            <Operator />
          </Route>
          <Route path="/managers">
            <Managers />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
        </Switch>
    </Router>
  );
}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


