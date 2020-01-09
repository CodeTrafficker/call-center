import React from 'react';
// import './operator.css';
// import MOCKCUSTOMERS from './mockData';

class Managers extends React.Component {
  constructor(props)  {
    super(props);
    this.state ={
      value: ''
    };
  }

  render() {
    return (
      <div className="">
        <h2>Managers</h2>
        Some stuff from Managers.js.
      </div>
    );
  }
}
export default Managers;