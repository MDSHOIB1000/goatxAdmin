import React, { useState } from 'react';
import CustomInputField from '../../../../common/CustomInputField';
import { Button } from 'react-bootstrap';

function BusCancelPolicy({ handleChange }) {
    const [rows, setRows] = useState([{ id: 1, serviceProvider: "", chargeValue: "", policyText: "" }]);

    const addRow = () => {
        setRows([...rows, { id: rows.length + 1, serviceProvider: "", chargeValue: "", policyText: "" }]);
    };

    const deleteRow = (id) => {
        setRows(rows.filter(row => row.id !== id));
    };

    return (
        <>
            <div className="table-responsive active-projects style-1 mb-3">
                <div className="tbl-caption">
                    <h4 className="heading mb-0"><b>Cancellation Policy</b></h4>
                </div>
            </div>

            {rows.map((row, index) => (
                <div className='card' key={row.id}>
                    <div className='row align-items-center'>
                        <div className="col-xl-1 mb-3">
                            <h3>({index + 1})</h3>
                        </div>
                        <div className="col-xl-3 mb-3">
                            <select
                                className="form-select"
                                aria-label="Default select example"
                                name={`serviceProvider-${row.id}`}
                                value={row.serviceProvider}
                                onChange={(e) => handleChange(e, row.id)}
                            >
                                <option>Select Title</option>
                                <option value="1">Percentage</option>
                                <option value="3">Fixed</option>
                            </select>
                        </div>

                        <div className="col-xl-3 mb-3">
                            <CustomInputField
                                type="text"
                                placeholder="Charge Value"
                                name={`chargeValue-${row.id}`}
                                value={row.chargeValue}
                                onChange={(e) => handleChange(e, row.id)}
                                id={`chargeValue-${row.id}`}
                            />
                        </div>
                        <div className="col-xl-3 mb-3">
                            <CustomInputField
                                type="text"
                                placeholder="Policy Text"
                                name={`policyText-${row.id}`}
                                value={row.policyText}
                                onChange={(e) => handleChange(e, row.id)}
                                id={`policyText-${row.id}`}
                            />
                        </div>
                        <div className="col-xl-2 mb-3">
                            <Button className='btn btn-danger' onClick={() => deleteRow(row.id)}>
                                <span><i class="fas fa-trash"></i></span>
                               
                            </Button>
                        </div>
                    </div>
                </div>
            ))}

            <div className="row my-3">
                <div className="col text-center">
                    <Button className='btn btn-primary' onClick={addRow}>
                    <i className="fas fa-plus-circle"></i>&nbsp; Add 
                    </Button>
                </div>
            </div>
        </>
    );
}

export default BusCancelPolicy;
