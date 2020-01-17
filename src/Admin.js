import React from 'react';

class Admin extends React.Component {
  constructor(props)  {
    super(props);
    this.state ={
      value: ''
    };
  }

  render() {
    return (
      <div>
        <h2>Admin</h2>
        Some stuff from Admin.js.
      </div>
    );
  }
}
export default Admin;