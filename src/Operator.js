import React from 'react';
// import './operator.css';
// import MOCKCUSTOMERS from './mockData';


class Operator extends React.Component {
  constructor(props)  {
    super(props);
    this.state ={
      value: ''
    };
  }

  render() {


    return (
      <div className="opGrid">
        <h2>Operator</h2>
        Some stuff from Operator.js.
      </div>
    );
  }
}
export default Operator;