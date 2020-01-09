import React from 'react';
// import './operator.css';
// import MOCKCUSTOMERS from './mockData';

class Admin extends React.Component {
  constructor(props)  {
    super(props);
    this.state ={
      value: ''
    };
  }

  render() {
    return (
      <div className="">
        <h2>Admin</h2>
        Some stuff from Admin.js.
      </div>
    );
  }
}
export default Admin;