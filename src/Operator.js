import React from 'react';
import './operator.css';
import MOCKCUSTOMERS from './mockData';

class CustomerInfo extends React.Component {
  constructor(props)  {
    super(props);
    this.state ={
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }


  render() {
    const mockCustomers = MOCKCUSTOMERS;

    const customerList = mockCustomers.map((customer)=>

      // {this.state.value = customer.summary};
      // {customer.summary}

      <div className="customerData">
        <div>{customer.name}</div>
        <div>{customer.cc}</div>
        <div>
          {customer.purchases.store1} - ${customer.purchases.amt1}<br />
          {customer.purchases.store2} - ${customer.purchases.amt2}<br />
          {customer.purchases.store3} - ${customer.purchases.amt3}<br />
        </div>
        <form>
          <textarea value="" onChange={this.handleChange}></textarea>
          <button type="submit" onclick={this.handleSubmit}>Update summary</button>
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