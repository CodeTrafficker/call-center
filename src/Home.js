import React from 'react';
// import './operator.css';
// import MOCKCUSTOMERS from './mockData';

class Home extends React.Component {
  constructor(props)  {
    super(props);
    this.state ={
      value: ''
    };
  }

  render() {
    return (
      <div className="">
        <h2>Home</h2>
        Some stuff from Home.js.
      </div>
    );
  }
}
export default Home;