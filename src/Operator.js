import React from 'react';

// Static mock of json str from API somewhere.
const MOCKCUSTOMERS = [
    {
      name: 'Adrian Fernandez',
      cc: '123456789001'
    },
    {
      name: 'Veronica Castro',
      cc: '223456789002'
    },
    {
      name: 'Rhonda Willis',
      cc: '323456789003'
    }
];


class CustomerInfo extends React.Component {
  render() {
    const mockCustomers = MOCKCUSTOMERS;
    const customerList = mockCustomers.map((customer)=>
      <tr>
        <td>{customer.name}</td>
        <td>{customer.cc}</td> 
      </tr>
    );

    return (
      <table>
        <tr>
          <th>Name</th>
          <th>Credit Card</th>
        </tr>
        {customerList}
      </table>
    );
  }
}

export default CustomerInfo;