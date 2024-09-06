import React, { useState } from 'react';
import CustomInputField from '../../../../common/CustomInputField';
import { Button } from 'react-bootstrap';

function AddPassenger({ handleChange }) {
    const [rows, setRows] = useState([{ id: 1, serviceProvider: "", firstName: "", lastName: "", age: "", seat: "" }]);

    const addRow = () => {
        setRows([...rows, { id: rows.length + 1, serviceProvider: "", firstName: "", lastName: "", age: "", seat: "" }]);
    };

    const deleteRow = (id) => {
        setRows(rows.filter(row => row.id !== id));
    };

    return (
        <>
            <div className="table-responsive active-projects style-1 mb-3">
                <div className="tbl-caption">
                    <h4 className="heading mb-0"><b>ADD PASSENGER</b></h4>
                </div>
            </div>

            {rows.map((row, index) => (
                <div className='card mb-3 p-3 shadow-sm' key={row.id}>
                    <div className='row align-items-center'>
                        <div className="col-md-1 mb-2 text-center">
                            <h5 className="m-0">({index + 1})</h5>
                        </div>
                        <div className="col-md-2 mb-2">
                            <select
                                className="form-select"
                                aria-label="Select Title"
                                name={`serviceProvider-${row.id}`}
                                value={row.serviceProvider}
                                onChange={(e) => handleChange(e, row.id)}
                            >
                                <option>Select Title</option>
                                <option value="1">Mr</option>
                                <option value="2">Ms</option>
                                <option value="3">Mrs</option>
                                <option value="4">Mstr</option>
                            </select>
                        </div>
                        <div className="col-md-2 mb-2">
                            <CustomInputField
                                type="text"
                                placeholder="First Name"
                                name={`firstName-${row.id}`}
                                value={row.firstName}
                                onChange={(e) => handleChange(e, row.id)}
                                id={`firstName-${row.id}`}
                            />
                        </div>
                        <div className="col-md-2 mb-2">
                            <CustomInputField
                                type="text"
                                placeholder="Last Name"
                                name={`lastName-${row.id}`}
                                value={row.lastName}
                                onChange={(e) => handleChange(e, row.id)}
                                id={`lastName-${row.id}`}
                            />
                        </div>
                        <div className="col-md-1 mb-2">
                            <CustomInputField
                                type="number"
                                placeholder="Age"
                                name={`age-${row.id}`}
                                value={row.age}
                                onChange={(e) => handleChange(e, row.id)}
                                id={`age-${row.id}`}
                            />
                        </div>
                        <div className="col-md-2 mb-2">
                            <CustomInputField
                                type="text"
                                placeholder="Seat Name"
                                name={`seat-${row.id}`}
                                value={row.seat}
                                onChange={(e) => handleChange(e, row.id)}
                                id={`seat-${row.id}`}
                            />
                        </div>
                        <div className="col-md-2 text-center mb-2">
                            <Button variant="danger" onClick={() => deleteRow(row.id)}>
                                <i className="fas fa-trash"></i>
                            </Button>
                        </div>
                    </div>
                </div>
            ))}

            <div className="row mt-3">
                <div className="col text-center">
                    <Button className='btn btn-primary' onClick={addRow}>
                        <i className="fas fa-plus-circle"></i>&nbsp; Add Passenger
                    </Button>
                </div>
            </div>
        </>
    );
}

export default AddPassenger;
