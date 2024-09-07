import { useState } from 'react';
import { Empty, Pagination, Radio, Input, Select, Button } from 'antd';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HiCursorClick } from 'react-icons/hi';

function BalanceList({ onChangeVal }) {
  const [modalShow, setModalShow] = useState(false);
  const [transactionType, setTransactionType] = useState('debit');
  const [vendor, setVendor] = useState('');
  const [amount, setAmount] = useState('');
  const [remark, setRemark] = useState('');

  // Sample data for vendors
  const vendorData = [
    { id: 1, name: 'TBO', agencyBalance: 0, liveBalance: 'NA', alert: 'Refill Account' },
    { id: 2, name: 'TRIPJACK', agencyBalance: 0, liveBalance: 'NA', alert: 'Refill Account' },
    { id: 3, name: 'AIRIQ', agencyBalance: 0, liveBalance: 'NA', alert: 'Refill Account' },
    { id: 4, name: 'GFSNEXUS', agencyBalance: 0, liveBalance: 'NA', alert: 'Refill Account' },
    { id: 5, name: 'FLY24', agencyBalance: 0, liveBalance: 'NA', alert: 'Refill Account' },
  ];

  const handleUpdateAmount = () => {
    // Function to handle updating the amount
    console.log({ transactionType, vendor, amount, remark });
  };

  return (
    <section className="vendor-balance card">
      {/* Vendor Balance Table */}
      <div style={{display:"flex" ,justifyContent:"space-between"}}>
        <h3>Vendor Account Management</h3>
        <Link style={{padding:"10px" ,border:"1px solid gray" , borderRadius:"7px" ,color:"black"}} to={`/Vendor-Account-Logs`}> <HiCursorClick/>        Vendor Account Logs</Link>
      </div>
      <div className="vendor-balance-table">
        <table className="table">
          <thead>
            <tr>
              <th>Active Vendor</th>
              <th>Agency Balance</th>
              <th>Live Balance</th>
              <th>Alert</th>
            </tr>
          </thead>
          <tbody>
            {vendorData.map((vendor) => (
              <tr key={vendor.id}>
                <td><b>{vendor.name}</b></td>
                <td>{vendor.agencyBalance}</td>
                <td>{vendor.liveBalance}</td>
                <td>{vendor.alert}</td>
              </tr>
            ))}
            <tr>
              <td><b>Total Balance</b></td>
              <td>0</td>
              <td>0</td>
              <td>--</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Transaction Form */}

      <Form >
        {/* Transaction Type */}
        <Form.Group className="mb-3">
          <Form.Label>Transaction Type</Form.Label>
          <div>
            <Form.Check
              inline
              label="Debit"
              name="transactionType"
              type="radio"
              id="debit"
              checked={transactionType === 'Debit'}
              onChange={() => setTransactionType('Debit')}
            />
            <Form.Check
              inline
              label="Credit"
              name="transactionType"
              type="radio"
              id="credit"
              checked={transactionType === 'Credit'}
              onChange={() => setTransactionType('Credit')}
            />
          </div>
        </Form.Group>

        {/* Vendor Name */}
        <Form.Group className="mb-3">
          <Form.Label>Vendor Name *</Form.Label>
          <Form.Select aria-label="Vendor Name">
            <option>Please select</option>
            <option value="1">Vendor 1</option>
            <option value="2">Vendor 2</option>
          </Form.Select>
        </Form.Group>

        {/* Amount */}
        <Form.Group className="mb-3">
          <Form.Label>Amount *</Form.Label>
          <Form.Control type="number" placeholder="Amount" />
        </Form.Group>

        {/* Remark */}
        <Form.Group className="mb-3">
          <Form.Label>Remark *</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Remark" />
        </Form.Group>

        <button type="button" class="btn btn-success">Submit</button>
      </Form>
    </section>
  );
}

export default BalanceList;
