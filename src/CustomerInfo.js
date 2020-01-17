import React from 'react';
import './customerinfo.css';
import MOCKCUSTOMERS from './mockData';

class CustomerInfo extends React.Component {
  constructor(props)  {
    super(props);
    this.state = {
      // value: 'Is this text going into textarea?',
      purchase1: false,
      purchase2: false,
      purchase3: false,
      stolen:    false,
      summary:   '', 
      passedCCID: this.props.value
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // For customer info form changes in CustomerInfo:
  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    // Nowhere for data to go yet, 
    // so... faking submit appearance by going back to /operator.
    window.location = '/operator';
    // send data from the actual state
  }

  render() {
    const mockCustomers = MOCKCUSTOMERS;

    const selected = mockCustomers.find(customer => customer.ccid === this.state.passedCCID );

    const selectedCustomer = 

    <form onSubmit={this.handleSubmit}>
    
      <div  className="customerData">
        <div>{selected.name}</div>
        <div>{selected.cc}</div>

        <div className="recentPurchases column">
          <div className="row">
            <div>{selected.purchases.store1} - ${selected.purchases.amt1}</div>
            <div>
               <input
                name="purchase1"
                type="checkbox"
                checked={this.state.purchase1}
                onChange={this.handleInputChange} />
            </div>
          </div>

          <div className="row">
            <div>{selected.purchases.store2} - ${selected.purchases.amt2}</div>
            <div>
               <input
                name="purchase2"
                type="checkbox"
                checked={this.state.purchase2}
                onChange={this.handleInputChange} />
              </div>
          </div>

          <div className="row">
            <div>{selected.purchases.store3} - ${selected.purchases.amt3}</div>
            <div>
               <input
                name="purchase3"
                type="checkbox"
                checked={this.state.purchase3}
                onChange={this.handleInputChange} />
            </div>
          </div>
        </div>
      </div>

      <div className="summaryRow">
        <p>Was this card stolen? 
          <label>YES
            <input
              type="radio"
              name="stolen"
              value={true}
              checked={this.state.stolen.true}
              onChange={this.handleInputChange} />
          </label>

          <label>NO
            <input
              type="radio"
              name="stolen"
              value={false}
              checked={this.state.stolen.false}
              onChange={this.handleInputChange} />
          </label>
        </p>

        <label>
          <h3>Summary</h3>
          <textarea 
          name="summary" 
          value={this.state.value} 
          onChange={this.handleInputChange} />
        </label>

        <button type="submit">Update summary</button>
      </div>
    </form>
      


    return (
      <div className="customerInfoPanel">
        <div className="opHeader">
          <div>Name</div>
          <div>Credit Card</div>
          <div>Recent Purchases - check box if fraudulent</div>
        </div>
        {selectedCustomer}
      </div>
    );
  }
}

export default CustomerInfo;

