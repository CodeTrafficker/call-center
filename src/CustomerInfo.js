import React from 'react';
import './customerinfo.css';
import MOCKCUSTOMERS from './mockData';

class CustomerInfo extends React.Component {
  constructor(props)  {
    super(props);
    this.state ={
      // TODO: any form attr/vals here, like fraud: false
      value: '',
      passedCCID: this.props.value
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // send data from the actual state
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }


  render() {
    const mockCustomers = MOCKCUSTOMERS;

    // Works:
    // passedCCID: {this.state.passedCCID}
    // How to clear on submit or when new ccid entered from Operator...
    const selected = mockCustomers.find(customer => customer.ccid === this.state.passedCCID );

    const selectedCustomer = <div className="customerData" key={selected.id}>
    <div>{selected.name}   <br /> passedCCID: {this.state.passedCCID}  </div>
    <div>{selected.cc}</div>
    <div>
      {selected.purchases.store1} - ${selected.purchases.amt1}<br />
      {selected.purchases.store2} - ${selected.purchases.amt2}<br />
      {selected.purchases.store3} - ${selected.purchases.amt3}<br />
    </div>
    <form onSubmit={this.handleSubmit}>
      <textarea value="" onChange={this.handleChange}></textarea>
      <button type="submit">Update summary</button>
    </form>
  </div>
      


    return (
      <div className="opGrid">
        <div className="opHeader">
          <div>Name</div>
          <div>Credit Card</div>
          <div>Recent Purchases</div>
        </div>
        {selectedCustomer}
      </div>
    );
  }
}

export default CustomerInfo;

