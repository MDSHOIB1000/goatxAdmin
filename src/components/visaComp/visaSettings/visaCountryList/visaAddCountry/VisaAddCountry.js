import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import CustomInputField from '../../../../../common/CustomInputField'
import Select  from 'react-select';

function VisaAddCountry({ show, setShow, handleSubmit }) {
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
                    <Modal.Title className='text-light text-uppercase'>Add Country Visa
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row m-4">
                        <div className="col-xl-12">
                            <div className="cards">
                                <div className="card-body p-0">
                                    <form className="tbl-captionn" onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="col-xl-12 mb-3">
                                                <Select
                                                    value={selectedCountry}
                                                    onChange={handleCountryChange}
                                                    options={countries}
                                                    placeholder="Select Visa By Country *"
                                                    isSearchable
                                                    classNamePrefix="react-select"
                                                />
                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <CustomInputField
                                                    type="file"
                                                    name="countryImg"
                                                    value={""}
                                                    onChange={handleChange}
                                                    id="countryImg"
                                                />
                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <CustomInputField
                                                    type="text"
                                                    placeholder="Processing Time"
                                                    name="processing Time"
                                                    value={""}
                                                    onChange={handleChange}
                                                    id="processing Time"
                                                />
                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <CustomInputField
                                                    type="text"
                                                    placeholder="Starting Time (per persion)"
                                                    name="startingTime"
                                                    value={""}
                                                    onChange={handleChange}
                                                    id="startingTime"
                                                />
                                            </div>

                                            <div className="col-xl-6 mb-3">
                                                <select className="form-select" aria-label="Default select example" name="ServiceProvider"
                                                    value={""}
                                                    onChange={handleChange}
                                                >
                                                    <option >Select Status</option>
                                                    <option value={1}>Active</option>
                                                    <option value={3}>In Active</option>
                                                </select>

                                            </div>
                                            <div className="col-lg-12 col-md-4">
                                                <div className='d-flex justify-content-center'>
                                                    <button className="btn btn-warning" type="button" >
                                                        <i className="fas fa-refresh"></i> Save
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

export default VisaAddCountry