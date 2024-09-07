import React, { useState } from 'react';
import CustomInputField from '../../../../../common/CustomInputField';
import WithoutAtricCustomInputField from '../../../../../common/withoutAtrricCustomInp/WithoutAtricCustomInputField';
import { Button } from 'react-bootstrap';

function VisaPriceInfo() {
    // Initial state for rows
    const [rows, setRows] = useState([
        {
            id: 1,
            visaType: '',
            visaFee: '',
            adultCourierCharges: '',
            adultHandlingCharges: '',
            adultTotalAmount: '',
            childVisaFee: '',
            childCourierCharges: '',
            childHandlingCharges: '',
            childTotalAmount: '',
            infantVisaFee: '',
            infantCourierCharges: '',
            infantHandlingCharges: '',
            infantTotalAmount: '',
            adultPremiumLounge: '',
            childPremiumLounge: '',
            infantPremiumLounge: ''
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
            visaType: '',
            visaFee: '',
            adultCourierCharges: '',
            adultHandlingCharges: '',
            adultTotalAmount: '',
            childVisaFee: '',
            childCourierCharges: '',
            childHandlingCharges: '',
            childTotalAmount: '',
            infantVisaFee: '',
            infantCourierCharges: '',
            infantHandlingCharges: '',
            infantTotalAmount: '',
            adultPremiumLounge: '',
            childPremiumLounge: '',
            infantPremiumLounge: ''
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
                    <h4 className="heading mb-0"><b>Visa Price Information</b></h4>
                </div>
            </div>

            <div className='card'>
                {rows.map(row => (
                    <div className='row' key={row.id}>
                        <div className="col-xl-3 mb-3">
                            <select
                                className="form-select"
                                value={row.visaType}
                                onChange={(e) => handleChange(e, row.id, 'visaType')}
                            >
                                <option value="">Select Visa Type</option>
                                <option value="single">Single</option>
                                <option value="multiple">Multiple</option>
                            </select>
                        </div>

                        <div className="col-xl-3 mb-3">
                            <CustomInputField
                                type="text"
                                placeholder="Visa Fee (INR)"
                                value={row.visaFee}
                                onChange={(e) => handleChange(e, row.id, 'visaFee')}
                            />
                        </div>

                        <div className="col-xl-3 mb-3">
                            <CustomInputField
                                type="text"
                                placeholder="Adult VFS & Courier Charges (INR)"
                                value={row.adultCourierCharges}
                                onChange={(e) => handleChange(e, row.id, 'adultCourierCharges')}
                            />
                        </div>

                        <div className="col-xl-3 mb-3">
                            <CustomInputField
                                type="text"
                                placeholder="Adult Handling Charges (INR)"
                                value={row.adultHandlingCharges}
                                onChange={(e) => handleChange(e, row.id, 'adultHandlingCharges')}
                            />
                        </div>

                        <div className="col-xl-3 mb-3">
                            <WithoutAtricCustomInputField
                                type="text"
                                placeholder="Adult Total Amount (INR)"
                                value={row.adultTotalAmount}
                                onChange={(e) => handleChange(e, row.id, 'adultTotalAmount')}
                            />
                        </div>

                        <div className="col-xl-3 mb-3">
                            <CustomInputField
                                type="text"
                                placeholder="Note: Premium Lounge (Adult)"
                                value={row.adultPremiumLounge}
                                onChange={(e) => handleChange(e, row.id, 'adultPremiumLounge')}
                            />
                        </div>

                        {/* Child Fields */}
                        <div className="col-xl-3 mb-3">
                            <CustomInputField
                                type="text"
                                placeholder="Child Visa Fee (INR)"
                                value={row.childVisaFee}
                                onChange={(e) => handleChange(e, row.id, 'childVisaFee')}
                            />
                        </div>

                        <div className="col-xl-3 mb-3">
                            <CustomInputField
                                type="text"
                                placeholder="Child VFS & Courier Charges (INR)"
                                value={row.childCourierCharges}
                                onChange={(e) => handleChange(e, row.id, 'childCourierCharges')}
                            />
                        </div>

                        <div className="col-xl-3 mb-3">
                            <CustomInputField
                                type="text"
                                placeholder="Child Handling Charges (INR)"
                                value={row.childHandlingCharges}
                                onChange={(e) => handleChange(e, row.id, 'childHandlingCharges')}
                            />
                        </div>

                        <div className="col-xl-3 mb-3">
                            <WithoutAtricCustomInputField
                                type="text"
                                placeholder="Child Total Amount (INR)"
                                value={row.childTotalAmount}
                                onChange={(e) => handleChange(e, row.id, 'childTotalAmount')}
                            />
                        </div>

                        <div className="col-xl-3 mb-3">
                            <CustomInputField
                                type="text"
                                placeholder="Note: Premium Lounge (Child)"
                                value={row.childPremiumLounge}
                                onChange={(e) => handleChange(e, row.id, 'childPremiumLounge')}
                            />
                        </div>

                        {/* Infant Fields */}
                        <div className="col-xl-3 mb-3">
                            <CustomInputField
                                type="text"
                                placeholder="Infant Visa Fee (INR)"
                                value={row.infantVisaFee}
                                onChange={(e) => handleChange(e, row.id, 'infantVisaFee')}
                            />
                        </div>

                        <div className="col-xl-3 mb-3">
                            <CustomInputField
                                type="text"
                                placeholder="Infant VFS & Courier Charges (INR)"
                                value={row.infantCourierCharges}
                                onChange={(e) => handleChange(e, row.id, 'infantCourierCharges')}
                            />
                        </div>

                        <div className="col-xl-3 mb-3">
                            <CustomInputField
                                type="text"
                                placeholder="Infant Handling Charges (INR)"
                                value={row.infantHandlingCharges}
                                onChange={(e) => handleChange(e, row.id, 'infantHandlingCharges')}
                            />
                        </div>

                        <div className="col-xl-3 mb-3">
                            <WithoutAtricCustomInputField
                                type="text"
                                placeholder="Infant Total Amount (INR)"
                                value={row.infantTotalAmount}
                                onChange={(e) => handleChange(e, row.id, 'infantTotalAmount')}
                            />
                        </div>

                        <div className="col-xl-3 mb-3">
                            <CustomInputField
                                type="text"
                                placeholder="Note: Premium Lounge (Infant)"
                                value={row.infantPremiumLounge}
                                onChange={(e) => handleChange(e, row.id, 'infantPremiumLounge')}
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

export default VisaPriceInfo;
