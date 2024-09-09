import React from 'react'
import { Modal } from 'react-bootstrap'
import CustomInputField from '../../../../common/CustomInputField'
import Select from 'react-select';
import WithoutAtricCustomInputField from '../../../../common/withoutAtrricCustomInp/WithoutAtricCustomInputField';

function FlightDiscountForm({ show, setShow, handleSubmit }) {
    const handleChange = () => {

    }

    const options = [
        { value: 'discountFor', label: 'Discount For' },
        { value: 'dateRange', label: 'Date Range' }
    ]
    const handleMultiChange = (selectedOptions) => {
        // setSelectedOptions(selectedOptions);
        // You can also update the `handleChange` if needed with the selected values
        // handleChange({ target: { name: 'ServiceProvider', value: selectedOptions } });
    };
    return (
        <>
            <Modal show={show} onHide={() => setShow(!show)} size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className="modle-dilogee">
                <Modal.Header closeButton className=' bg-secondary'>
                    <Modal.Title className='text-light text-uppercase'>
                        ADD FLIGHT DISCOUNT
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row m-4">
                        <div className="col-xl-12">
                            <div className="card">
                                <div className="card-body p-0">
                                    <form className="tbl-captionn" onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="col-xl-6 mb-3">
                                                <select className="form-select" aria-label="Default select example" name="ServiceProvider"
                                                    value={""}
                                                    onChange={handleChange}
                                                >
                                                    <option disabled> Select Discount For </option>
                                                    <option value={1}>B2B</option>
                                                    <option value={3}>B2C</option>
                                                </select>

                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <CustomInputField
                                                    type="text"
                                                    placeholder="Airline Code"
                                                    name="value"
                                                    value={""}
                                                    onChange={handleChange}
                                                    id="value"
                                                />
                                            </div>

                                            <div className="col-xl-6 mb-3">
                                                <CustomInputField
                                                    type="text"
                                                    placeholder="From Airport *"
                                                    name="extra"
                                                    value={""}
                                                    onChange={handleChange}
                                                    id="extra"
                                                />
                                            </div>
                                            <div className="col-xl-6 mb-3 d-flex align-items-center">
                                                <input
                                                    type="checkbox"
                                                    name="isExtra"
                                                    id="isExtra"
                                                    onChange={handleChange}
                                                />
                                                <label htmlFor="isExtra" className="ms-2">From Any Airport</label>
                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <CustomInputField
                                                    type="text"
                                                    placeholder="To Airport"
                                                    name="extra"
                                                    value={""}
                                                    onChange={handleChange}
                                                    id="extra"
                                                />
                                            </div>
                                            <div className="col-xl-6 mb-3 d-flex align-items-center">
                                                <input
                                                    type="checkbox"
                                                    name="isExtra"
                                                    id="isExtra"
                                                    onChange={handleChange}
                                                />
                                                <label htmlFor="isExtra" className="ms-2">To Any Airport</label>
                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <CustomInputField
                                                    type="text"
                                                    placeholder="Booking Class"
                                                    name="extra"
                                                    value={""}
                                                    onChange={handleChange}
                                                    id="extra"
                                                />
                                            </div>
                                            <div className="col-xl-6 mb-3 d-flex align-items-center">
                                                <input
                                                    type="checkbox"
                                                    name="isExtra"
                                                    id="isExtra"
                                                    onChange={handleChange}
                                                />
                                                <label htmlFor="isExtra" className="ms-2">Any Booking Class</label>
                                            </div>

                                            <div className="col-xl-6 mb-3">
                                                <CustomInputField
                                                    type="date"
                                                    placeholder="From Date"
                                                    name="extra"
                                                    value={""}
                                                    onChange={handleChange}
                                                    id="extra"
                                                />
                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <CustomInputField
                                                    type="date"
                                                    placeholder="To Date "
                                                    name="max-limit"
                                                    value={""}
                                                    onChange={handleChange}
                                                    id="max-limit"
                                                />
                                            </div>
                                            
                                            <div className="col-xl-6 mb-3">
                                                <CustomInputField
                                                    type="text"
                                                    placeholder="Cabin Class"
                                                    name="extra"
                                                    value={""}
                                                    onChange={handleChange}
                                                    id="extra"
                                                />
                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <Select
                                                    isMulti
                                                    name="ServiceProvider"
                                                    value={"selectedOptions"}
                                                    options={options}
                                                    onChange={"handleMultiChange"}
                                                    placeholder="Flight Type"
                                                    classNamePrefix="react-select"
                                                />
                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <Select
                                                    isMulti
                                                    name="ServiceProvider"
                                                    value={"selectedOptions"}
                                                    options={options}
                                                    onChange={"handleMultiChange"}
                                                    placeholder="Journey Type * "
                                                    classNamePrefix="react-select"
                                                />
                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <select className="form-select" aria-label="Default select example" name="ServiceProvider"
                                                    value={""}
                                                    onChange={handleChange}
                                                >
                                                    <option > Select Discount Type </option>
                                                    <option value={1}>B2B</option>
                                                    <option value={3}>B2C</option>
                                                </select>

                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <select className="form-select" aria-label="Default select example" name="ServiceProvider"
                                                    value={""}
                                                    onChange={handleChange}
                                                >
                                                    <option > Display Discount</option>
                                                    <option value={1}>B2B</option>
                                                    <option value={3}>B2C</option>
                                                </select>

                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <CustomInputField
                                                    type="text"
                                                    placeholder="Value"
                                                    name="extra"
                                                    value={""}
                                                    onChange={handleChange}
                                                    id="extra"
                                                />
                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <WithoutAtricCustomInputField
                                                    type="text"
                                                    placeholder="Max Limit"
                                                    name="extra"
                                                    value={""}
                                                    onChange={handleChange}
                                                    id="extra"
                                                />
                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <select className="form-select" aria-label="Default select example" name="ServiceProvider"
                                                    value={""}
                                                    onChange={handleChange}
                                                >
                                                    <option > Select  Status</option>
                                                    <option value={1}>Active</option>
                                                    <option value={3}>In Active</option>
                                                </select>

                                            </div>
                                            <div className="col-lg-12 col-md-4">
                                                <div className='d-flex justify-content-end'>
                                                    <button className="btn btn-warning" type="button" >
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

export default FlightDiscountForm
