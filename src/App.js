import React from 'react';
import logo from './logo.svg';
import './global.css';
import './App.css';
import CustomerInfo from './Operator';


const viewName = 'Call Center';
const H1Title = <h1>{viewName}</h1>;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {H1Title}
      </header>

      <CustomerInfo />

    </div>
  );
}

export default App;
