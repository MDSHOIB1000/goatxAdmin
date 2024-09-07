import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import CustomInputField from '../../../../../common/CustomInputField'
import Select from 'react-select';

function VisaAddDocumentType({ show, setShow, handleSubmit }) {
    const handleChange = () => {

    }
    const countries = [
        { value: 'US', label: 'United States' },
        { value: 'IN', label: 'India' },
        { value: 'UK', label: 'United Kingdom' },
        { value: 'CN', label: 'China' },
        { value: 'AU', label: 'Australia' },
        { value: 'All', label: 'All Country List' },
        // Add more countries as needed
    ];

    const [selectedCountry, setSelectedCountry] = useState(null);

    const handleCountryChange = (selectedOption) => {
        setSelectedCountry(selectedOption);
        console.log(`Selected country:`, selectedOption);
    };
    return (
        <>
            <Modal show={show} onHide={() => setShow(!show)} size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className="modle-dilogee">
                <Modal.Header closeButton className=' bg-secondary'>
                    <Modal.Title className='text-light text-uppercase'>Add  Visa Document 
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row m-4">
                        <div className="col-xl-12">
                            <div className="cards">
                                <div className="card-body p-0">
                                    <form className="tbl-captionn" onSubmit={handleSubmit}>
                                        <div className="row">

                                            <div className="col-xl-4 mb-3">
                                                <select className="form-select" aria-label="Default select example" name="ServiceProvider"
                                                    value={""}
                                                    onChange={handleChange}
                                                   >
                                                    <option >Plese Select </option>
                                                    <option value={1}>Country</option>
                                                    <option value={1}>Code</option>
                                                    <option value={3}>Date Range</option>
                                                </select>

                                            </div>

                                            <div className="col-xl-4 mb-3">
                                                <CustomInputField
                                                    type="text"
                                                    placeholder="Enter Document Name"
                                                    name="value"
                                                    value={""}
                                                    onChange={handleChange}
                                                   
                                                    id="value"
                                                />
                                            </div>
                                            <div className="col-xl-4 mb-3">
                                                <CustomInputField
                                                    type="file"
                                                    name="startDate"
                                                    value={""}
                                                    onChange={handleChange}
                                                    id="startDate"
                                                />
                                            </div>

                                            <div className="col-lg-12 col-md-4">
                                                <div className='d-flex justify-content-center'>
                                                    <button className="btn btn-warning" type="submit">
                                                        Save
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default VisaAddDocumentType