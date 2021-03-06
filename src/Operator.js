import React from 'react';
import MOCKCUSTOMERS from './mockData';
import CustomerInfo from './CustomerInfo';
import './forms.css';

const mockCustomers = MOCKCUSTOMERS;
let showCustInfo='';
let ccidArr = [];

class Operator extends React.Component {
  constructor(props)  {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Get all available ccids:
  currentCustomers = () => {
    mockCustomers.map((customer)=>  {
      ccidArr.push(customer.ccid);
      return ccidArr;
    }
  )}

  handleChange = (e) => {
    this.setState({ value: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();     
    this.currentCustomers();
    // TODO: Why?:
    this.setState({})

    // rm any err msgs on every submit:
    if( document.querySelector('.noReportErr') !== null ) {
      document.querySelector('.noReportErr').remove();
    }

    // Insert CustomerInfo component if ccid is valid:
    if(ccidArr.includes(this.state.value) )  {
      showCustInfo = <CustomerInfo value={this.state.value} />;

    // Else blank out CustomerInfo and insert err msg
    } else  {
      document.querySelector('.ccInfoForm input')
      .insertAdjacentHTML('afterend',"<span class='noReportErr'>There are no reports under passcode <b>"+ 
        this.state.value + "</b>. Please try a different number.</span>");
      
      showCustInfo = '';
    }
  }

  render() {
    return (
      <div className="operatorPanel">
        <h2>Operator</h2>

        <form onSubmit={this.handleSubmit} className='ccInfoForm'>
          <p>
            Enter the last four digits of the customer's credit card 
            to access their fraud alerts.
            <input type="number" name="ccid" value={this.state.value} onChange={this.handleChange}></input>
          </p>

          <button type="submit">Show customer record</button>
        </form>

        {showCustInfo}
      </div>
    );
  }
}
export default Operator;