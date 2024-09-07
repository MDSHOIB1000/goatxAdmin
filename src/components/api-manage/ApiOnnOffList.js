import { useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import AddApi from './AddApi';

function ApiOnnOffList({ onChangeVal }) {
  const [modalShow, setModalShow] = useState(false);

  // Sample data for API suppliers
  const apiData = [
    {
      id: 1,
      apiSupplier: 'TBO',
      status: 'Active',
      flight: 'Enabled',
      hotel: 'Disabled',
      bus: 'Enabled',
    },
    {
      id: 2,
      apiSupplier: 'TRIPJACK',
      status: 'Inactive',
      flight: 'Disabled',
      hotel: 'Enabled',
      bus: 'Disabled',
    },
    {
      id: 3,
      apiSupplier: 'AIRIQ',
      status: 'Active',
      flight: 'Enabled',
      hotel: 'Enabled',
      bus: 'Enabled',
    },
    {
      id: 4,
      apiSupplier: 'GFSNEXUS',
      status: 'Inactive',
      flight: 'Disabled',
      hotel: 'Disabled',
      bus: 'Enabled',
    },
    {
      id: 5,
      apiSupplier: 'FLY24',
      status: 'Active',
      flight: 'Enabled',
      hotel: 'Enabled',
      bus: 'Disabled',
    },
  ];

  return (
    <section className="vendor-balance card">
      <div className='card'>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h3>API Management List</h3>
          <Button onClick={() => setModalShow(true)} variant="primary">
            Add New API
          </Button>
        </div>
      </div>

      {/* Modal for adding API */}
      <AddApi show={modalShow} onHide={() => setModalShow(false)} />

      <div className='card'>

        {/* API Supplier Table */}
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>API Supplier</th>
              <th>Status</th>
              <th>Flight</th>
              <th>Hotel</th>
              <th>Bus</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Render table data dynamically */}
            {apiData.map((api, index) => (
              <tr key={api.id}>
                <td>{index + 1}</td>
                <td>{api.apiSupplier}</td>
                <td>{api.status}</td>
                <td>{api.flight}</td>
                <td>{api.hotel}</td>
                <td>{api.bus}</td>
                <td>
                  <Button onClick={() => setModalShow(true)} variant="warning" size="sm">
                    Edit
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </section>
  );
}

export default ApiOnnOffList;
