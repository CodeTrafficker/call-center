import React from 'react';
import './operator.css';
import MOCKCUSTOMERS from './mockData';

class CustomerInfo extends React.Component {
  render() {
    const mockCustomers = MOCKCUSTOMERS;
    const custPurchases = mockCustomers;

    const recentPurchases = custPurchases.map((purchase)=>
      <div>
        {purchase.purchases.store1}<br />
        {purchase.purchases.store2}<br />
        {purchase.purchases.store3}<br />
      </div>
    );

    const customerList = mockCustomers.map((customer)=>
      <tr>
        <td>{customer.name}</td>
        <td>{customer.cc}</td>
        <td>
          {customer.purchases.store1} - ${customer.purchases.amt1}<br />
          {customer.purchases.store2} - ${customer.purchases.amt2}<br />
          {customer.purchases.store3} - ${customer.purchases.amt3}<br />
        </td>
        <td>
          <textarea value="{customer.summary}" />
        </td>
      </tr>
    );


    return (
      <table>
        <tr>
          <th>Name</th>
          <th>Credit Card #</th>
          <th>Recent Purchases</th>
          <th>Summary</th>
        </tr>
        {customerList}
      </table>
    );
  }
}

export default CustomerInfo;