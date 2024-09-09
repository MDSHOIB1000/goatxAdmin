import { useState } from 'react';
import { Table, Button, Form } from 'react-bootstrap';
import { DatePicker, Select } from 'antd';
import { Link } from 'react-router-dom';
import AddApi from './AddApi';

function DiscountList({ onChangeVal }) {
  const [vendor, setVendor] = useState('');
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);

  const { Option } = Select;

  // Sample data with the new fields
  const vendorData = [
    { id: 1, agentClass: 'Class A', value: 10, maxLimit: 1000, themeName: 'Summer Special', destinationName: 'Paris', extraDiscount: 5, discountType: 'Percentage', status: 'Active', created: '2024-09-01', modified: '2024-09-02' },
    { id: 2, agentClass: 'Class B', value: 20, maxLimit: 2000, themeName: 'Winter Getaway', destinationName: 'New York', extraDiscount: 10, discountType: 'Flat', status: 'Inactive', created: '2024-09-02', modified: '2024-09-03' },
    { id: 1, agentClass: 'Class A', value: 10, maxLimit: 1000, themeName: 'Summer Special', destinationName: 'Paris', extraDiscount: 5, discountType: 'Percentage', status: 'Active', created: '2024-09-01', modified: '2024-09-02' },
    { id: 2, agentClass: 'Class B', value: 20, maxLimit: 2000, themeName: 'Winter Getaway', destinationName: 'New York', extraDiscount: 10, discountType: 'Flat', status: 'Inactive', created: '2024-09-02', modified: '2024-09-03' },
  ];

  const handleSearch = () => {
    console.log('Search clicked with', { vendor, fromDate, toDate });
  };

  const [modalShow, setModalShow] = useState(false);

  return (
    <section className="vendor-balance card">
      <div className='card'>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h3>Holiday Discount</h3>
          <div className='d-flex'>
            <button type="button" className=" m-1 btn btn-primary" onClick={() => setModalShow(true)}>Add Holiday Discount</button>
            <Link to={'#'} className=" m-1 btn btn-secondary">ON/OFF API</Link>
            <button type="button" className=" m-1 btn btn-success">Change Status</button>
            <button type="button" className=" m-1 btn btn-danger">Delete</button>
          </div>
        </div>
      </div>

      <AddApi show={modalShow} onHide={() => setModalShow(false)} />

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
                <Option key={vendor.id} value={vendor.agentClass}>
                  {vendor.agentClass}
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
              <th>Agent Class</th>
              <th>Value</th>
              <th>Max Limit</th>
              <th>Theme Name</th>
              <th>Destination Name</th>
              <th>Extra Discount</th>
              <th>Discount Type</th>
              <th>Status</th>
              <th>Created</th>
              <th>Modified</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Render table data dynamically */}
            {vendorData.map((vendor) => (
              <tr key={vendor.id}>
                <td>{vendor.agentClass}</td>
                <td>{vendor.value}</td>
                <td>{vendor.maxLimit}</td>
                <td>{vendor.themeName}</td>
                <td>{vendor.destinationName}</td>
                <td>{vendor.extraDiscount}</td>
                <td>{vendor.discountType}</td>
                <td>{vendor.status}</td>
                <td>{vendor.created}</td>
                <td>{vendor.modified}</td>
                <td>
                  <Button variant="warning" size="sm">Edit</Button>{' '}
                  <Button variant="danger" size="sm">Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </section>
  );
}

export default DiscountList;
