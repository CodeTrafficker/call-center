import React from 'react';
import './customerinfo.css';
import MOCKCUSTOMERS from './mockData';

class CustomerInfo extends React.Component {
  constructor(props)  {
    super(props);
    this.state ={
      // TODO: any form attr/vals here, like fraud: false
      value: ''
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

    const customerList = mockCustomers.map((customer)=>

      // {this.state.value = customer.summary};
      // {customer.summary}

      <div className="customerData" key={customer.id}>
        <div>{customer.name}</div>
        <div>{customer.cc}</div>
        <div>
          {customer.purchases.store1} - ${customer.purchases.amt1}<br />
          {customer.purchases.store2} - ${customer.purchases.amt2}<br />
          {customer.purchases.store3} - ${customer.purchases.amt3}<br />
        </div>
        <form onSubmit={this.handleSubmit}>
          <textarea value="" onChange={this.handleChange}></textarea>
          <button type="submit">Update summary</button>
        </form>
      </div>
    );


    return (
      <div className="opGrid">
        <div className="opHeader">
          <div>Name</div>
          <div>Credit Card</div>
          <div>Recent Purchases</div>
        </div>
        {customerList}
      </div>
    );
  }
}

export default CustomerInfo;

