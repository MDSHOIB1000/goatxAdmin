import { useState } from 'react';
import { Table, Button, Form } from 'react-bootstrap';
import { DatePicker, Select } from 'antd';
import { HiCursorClick } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import AddApi from './AddApi';

function ApiAccountList({ onChangeVal }) {
  const [vendor, setVendor] = useState('');
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);

  const { Option } = Select;

  // Sample data for vendors with additional fields
  const vendorData = [
    { id: 1, name: 'TBO', refNo: 'Ref-1001', debit: 100, credit: 50, balance: 50, service: 'Flight Booking', paymentType: 'Credit', staffName: 'John Doe', createdDate: '2024-09-01', summary: 'Payment for flight' },
    { id: 2, name: 'TRIPJACK', refNo: 'Ref-1002', debit: 200, credit: 100, balance: 100, service: 'Hotel Booking', paymentType: 'Debit', staffName: 'Jane Smith', createdDate: '2024-09-02', summary: 'Payment for hotel' },

  ];

  const handleSearch = () => {
    console.log('Search clicked with', { vendor, fromDate, toDate });
  };
  const [modalShow, setModalShow] = useState(false);
  return (
    <section className="vendor-balance card">
      <div className='card'>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h3>API Management List</h3>
          <div className='d-flex'>
            <button type="button" className=" m-1 btn btn-primary" onClick={() => setModalShow(true)}> Manage API Results</button>
            <Link to={'/api-manage'} className=" m-1 btn btn-secondary">ON/OFF API</Link>
            <button type="button" className=" m-1 btn btn-success"> Change Status</button>
            <button type="button" className=" m-1 btn btn-danger">Delete</button>
          </div>
        </div>
      </div>

      <AddApi show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <div className='card'>

        {/* Vendor Search Section */}
        <Form className="mb-4" style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          {/* Vendor Dropdown */}
          <Form.Group controlId="vendorSelect">
            <Form.Label>Select key to search by *</Form.Label>
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

              <th>API Supplier</th>
              <th>Air Type</th>
              <th>Search Type</th>
              <th>Allowed Airline</th>
              <th>Excluded Airline</th>
              <th>Status</th>
              <th>Created</th>
              <th>Action</th>

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
                <td>--</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </section>
  );
}

export default ApiAccountList;
