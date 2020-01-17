import React from 'react';

class Managers extends React.Component {
  constructor(props)  {
    super(props);
    this.state ={
      value: ''
    };
  }

  render() {
    return (
      <div>
        <h2>Managers</h2>
        Some stuff from Managers.js.
      </div>
    );
  }
}
export default Managers;