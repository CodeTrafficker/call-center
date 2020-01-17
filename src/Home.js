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
        Navigate to "OPERATOR" and try codes 9001, 9002, or 9003 to reveal form.
      </div>
    );
  }
}
export default Home;