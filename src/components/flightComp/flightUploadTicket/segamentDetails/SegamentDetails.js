import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import CustomInputField from '../../../../common/CustomInputField';
import WithoutAtricCustomInputField from '../../../../common/withoutAtrricCustomInp/WithoutAtricCustomInputField';
import JoditEditor from 'jodit-react';

function SegamentDetails() {
    const [content, setContent] = useState('');
    // Initial state for rows
    const [rows, setRows] = useState([
        {
            id: 1,
            airlinePNR: '',
            origin: '',
            destination: '',
            departureDate: '',
            departureTime: '',
            arrivalDate: '',
            arrivalTime: '',
            airlineCode: '',
            flightNumber: '',
            fromTerminal: '',
            toTerminal: '',
            craft: '',
            fareClass: '',
            fareBasis: '',
            checkInBag: '',
            cabinBag: ''
        }
    ]);

    // Handle field change
    const handleChange = (e, id, field) => {
        const updatedRows = rows.map(row => {
            if (row.id === id) {
                return { ...row, [field]: e.target.value };
            }
            return row;
        });
        setRows(updatedRows);
    };

    // Add a new row
    const addRow = () => {
        const newRow = {
            id: rows.length + 1,
            airlinePNR: '',
            origin: '',
            destination: '',
            departureDate: '',
            departureTime: '',
            arrivalDate: '',
            arrivalTime: '',
            airlineCode: '',
            flightNumber: '',
            fromTerminal: '',
            toTerminal: '',
            craft: '',
            fareClass: '',
            fareBasis: '',
            checkInBag: '',
            cabinBag: '',
            fareRule: ""

        };
        setRows([...rows, newRow]);
    };

    // Delete a row
    const deleteRow = (id) => {
        const updatedRows = rows.filter(row => row.id !== id);
        setRows(updatedRows);
    };

    return (
        <>
            <div className="table-responsive active-projects style-1 mb-3">
                <div className="tbl-caption">
                    <h4 className="heading mb-0"><b>Segment Details</b></h4>
                </div>
            </div>

            <div className='card'>
                <div className="tbl-caption">
                    <span className="bg-info mb-2 p-2 d-inline-block my-3 text-white rounded"><b>Segment Info</b></span>
                </div>
                {rows.map(row => (
                    <div className='row' key={row.id}>
                        <div className="col-xl-3 mb-3">
                            <CustomInputField
                                type="text"
                                placeholder="Airline PNR"
                                value={row.airlinePNR}
                                onChange={(e) => handleChange(e, row.id, 'airlinePNR')}
                            />
                        </div>

                        <div className="col-xl-3 mb-3">
                            <CustomInputField
                                type="text"
                                placeholder="Origin *"
                                value={row.origin}
                                onChange={(e) => handleChange(e, row.id, 'origin')}
                            />
                        </div>

                        <div className="col-xl-3 mb-3">
                            <CustomInputField
                                type="text"
                                placeholder="Destination *"
                                value={row.destination}
                                onChange={(e) => handleChange(e, row.id, 'destination')}
                            />
                        </div>

                        <div className="col-xl-3 mb-3">
                            <WithoutAtricCustomInputField
                                type="date"
                                placeholder="Departure Date *"
                                value={row.departureDate}
                                onChange={(e) => handleChange(e, row.id, 'departureDate')}
                            />
                        </div>

                        <div className="col-xl-3 mb-3">
                            <WithoutAtricCustomInputField
                                type="time"
                                placeholder="Departure Time *"
                                value={row.departureTime}
                                onChange={(e) => handleChange(e, row.id, 'departureTime')}
                            />
                        </div>

                        <div className="col-xl-3 mb-3">
                            <WithoutAtricCustomInputField
                                type="date"
                                placeholder="Arrival Date *"
                                value={row.arrivalDate}
                                onChange={(e) => handleChange(e, row.id, 'arrivalDate')}
                            />
                        </div>

                        <div className="col-xl-3 mb-3">
                            <WithoutAtricCustomInputField
                                type="time"
                                placeholder="Arrival Time *"
                                value={row.arrivalTime}
                                onChange={(e) => handleChange(e, row.id, 'arrivalTime')}
                            />
                        </div>

                        <div className="col-xl-3 mb-3">
                            <CustomInputField
                                type="text"
                                placeholder="Airline Code *"
                                value={row.airlineCode}
                                onChange={(e) => handleChange(e, row.id, 'airlineCode')}
                            />
                        </div>

                        <div className="col-xl-3 mb-3">
                            <CustomInputField
                                type="text"
                                placeholder="Flight Number *"
                                value={row.flightNumber}
                                onChange={(e) => handleChange(e, row.id, 'flightNumber')}
                            />
                        </div>

                        <div className="col-xl-3 mb-3">
                            <CustomInputField
                                type="text"
                                placeholder="From Terminal"
                                value={row.fromTerminal}
                                onChange={(e) => handleChange(e, row.id, 'fromTerminal')}
                            />
                        </div>

                        <div className="col-xl-3 mb-3">
                            <CustomInputField
                                type="text"
                                placeholder="To Terminal"
                                value={row.toTerminal}
                                onChange={(e) => handleChange(e, row.id, 'toTerminal')}
                            />
                        </div>

                        <div className="col-xl-3 mb-3">
                            <CustomInputField
                                type="text"
                                placeholder="Craft"
                                value={row.craft}
                                onChange={(e) => handleChange(e, row.id, 'craft')}
                            />
                        </div>

                        <div className="col-xl-3 mb-3">
                            <CustomInputField
                                type="text"
                                placeholder="Fare Class"
                                value={row.fareClass}
                                onChange={(e) => handleChange(e, row.id, 'fareClass')}
                            />
                        </div>

                        <div className="col-xl-3 mb-3">
                            <CustomInputField
                                type="text"
                                placeholder="Fare Basis"
                                value={row.fareBasis}
                                onChange={(e) => handleChange(e, row.id, 'fareBasis')}
                            />
                        </div>

                        <div className="col-xl-3 mb-3">
                            <CustomInputField
                                type="text"
                                placeholder="CheckIn Bag"
                                value={row.checkInBag}
                                onChange={(e) => handleChange(e, row.id, 'checkInBag')}
                            />
                        </div>

                        <div className="col-xl-3 mb-3">
                            <CustomInputField
                                type="text"
                                placeholder="Cabin Bag"
                                value={row.cabinBag}
                                onChange={(e) => handleChange(e, row.id, 'cabinBag')}
                            />
                        </div>
                        <div className="col-xl-12 mb-3">
                            <label className=''>
                                <small>Fare Rule</small>
                            </label>
                            <JoditEditor
                                value={content}
                                onChange={handleChange}
                                tabIndex={1}
                                config={{
                                    readonly: false,
                                    toolbarSticky: false,
                                    toolbarAdaptive: false,
                                }}
                            />
                        </div>

                        <div className="col-xl-2 mb-3">
                            <Button className='btn btn-danger' onClick={() => deleteRow(row.id)}>
                                <span><i className="fas fa-trash"></i></span>
                            </Button>
                        </div>
                    </div>
                ))}
            </div>

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

export default SegamentDetails;
