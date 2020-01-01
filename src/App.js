import React from 'react';
import './global.css';
import './App.css';
import CustomerInfo from './Operator';


// Flip between Operator, Manager, and Admin
const viewName = 'Operator View';
const H1Title = <h1>Call Center - {viewName}</h1>;

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
