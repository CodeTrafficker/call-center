import React from 'react';
import './global.css';
import './App.css';
import Routing from './index';

const H1Title = <h1>Call Center</h1>;

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        {H1Title}
      </header>

      <Routing />

    </div>
  );
}

export default App;
