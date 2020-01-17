import React from 'react';

class Home extends React.Component {
  constructor(props)  {
    super(props);
    this.state ={
      value: ''
    };
  }

  render() {
    return (
      <div>
        <h2>Home</h2>
        Some stuff from Home.js.
      </div>
    );
  }
}
export default Home;