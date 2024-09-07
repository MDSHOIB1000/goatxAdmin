import { useState } from 'react';
import { Table, Button, Form } from 'react-bootstrap';
import { DatePicker, Select } from 'antd';
import { HiCursorClick } from 'react-icons/hi';
import { Link } from 'react-router-dom';

function VendorAccountList({ onChangeVal }) {
  const [vendor, setVendor] = useState('');
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);

  const { Option } = Select;

  // Sample data for vendors with additional fields
  const vendorData = [
    { id: 1, name: 'TBO', refNo: 'Ref-1001', debit: 100, credit: 50, balance: 50, service: 'Flight Booking', paymentType: 'Credit', staffName: 'John Doe', createdDate: '2024-09-01', summary: 'Payment for flight' },
    { id: 2, name: 'TRIPJACK', refNo: 'Ref-1002', debit: 200, credit: 100, balance: 100, service: 'Hotel Booking', paymentType: 'Debit', staffName: 'Jane Smith', createdDate: '2024-09-02', summary: 'Payment for hotel' },
    { id: 3, name: 'AIRIQ', refNo: 'Ref-1003', debit: 300, credit: 150, balance: 150, service: 'Car Rental', paymentType: 'Credit', staffName: 'David Lee', createdDate: '2024-09-03', summary: 'Payment for car rental' },
    { id: 4, name: 'GFSNEXUS', refNo: 'Ref-1004', debit: 400, credit: 200, balance: 200, service: 'Tour Package', paymentType: 'Debit', staffName: 'Emily Green', createdDate: '2024-09-04', summary: 'Payment for tour' },
    { id: 5, name: 'FLY24', refNo: 'Ref-1005', debit: 500, credit: 250, balance: 250, service: 'Flight Booking', paymentType: 'Credit', staffName: 'Michael Brown', createdDate: '2024-09-05', summary: 'Payment for flight' },
  ];

  const handleSearch = () => {
    console.log('Search clicked with', { vendor, fromDate, toDate });
  };

  return (
    <section className="vendor-balance card">
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h3>Vendor Account Logs</h3>
        <Link style={{ padding: '10px', border: '1px solid gray', borderRadius: '7px', color: 'black' }} to={`/balance-ledger`}>
          <HiCursorClick /> Vendor List
        </Link>
      </div>

      {/* Vendor Search Section */}
      <Form className="mb-4" style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        {/* Vendor Dropdown */}
        <Form.Group controlId="vendorSelect">
          <Form.Label>Select Vendor *</Form.Label>
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Please select"
            onChange={(value) => setVendor(value)}
          >
            {vendorData.map((vendor) => (
              <Option key={vendor.id} value={vendor.name}>
                {vendor.name}
              </Option>
            ))}
          </Select>
        </Form.Group>

        {/* From Date */}
        <Form.Group controlId="fromDate">
          <Form.Label>From Date</Form.Label>
          <DatePicker onChange={(date, dateString) => setFromDate(dateString)} />
        </Form.Group>

        {/* To Date */}
        <Form.Group controlId="toDate">
          <Form.Label>To Date</Form.Label>
          <DatePicker onChange={(date, dateString) => setToDate(dateString)} />
        </Form.Group>

        {/* Search Button */}
        <Button variant="primary" onClick={handleSearch}>
          Search
        </Button>
      </Form>

      {/* Vendor Balance Table */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Ref. No.</th>
            <th>Debit</th>
            <th>Credit</th>
            <th>Balance</th>
            <th>Service</th>
            <th>Payment Type</th>
            <th>Staff Name</th>
            <th>Created</th>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>
          {/* Render table data dynamically */}
          {vendorData.map((vendor, index) => (
            <tr key={vendor.id}>
              <td>{index + 1}</td>
              <td>{vendor.refNo}</td>
              <td>{vendor.debit}</td>
              <td>{vendor.credit}</td>
              <td>{vendor.balance}</td>
              <td>{vendor.service}</td>
              <td>{vendor.paymentType}</td>
              <td>{vendor.staffName}</td>
              <td>{vendor.createdDate}</td>
              <td>{vendor.summary}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </section>
  );
}

export default VendorAccountList;
