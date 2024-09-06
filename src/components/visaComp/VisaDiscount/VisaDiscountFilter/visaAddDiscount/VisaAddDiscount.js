import React from 'react'
import { Modal } from 'react-bootstrap'
import CustomInputField from '../../../../../common/CustomInputField'

function VisaAddDiscount({ show, setShow, handleSubmit }) {
    const handleChange = () => {

    }
    return (
        <>
            <Modal show={show} onHide={() => setShow(!show)} size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className="modle-dilogee">
                <Modal.Header closeButton className=' bg-secondary'>
                    <Modal.Title className='text-light text-uppercase'>Add Visa  Discount
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
                                                    <option >Plese Select </option>
                                                    <option value={1}>B2B</option>
                                                    <option value={3}>B2C</option>
                                                </select>

                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <CustomInputField
                                                    type="text"
                                                    placeholder="Value"
                                                    name="value"
                                                    value={""}
                                                    onChange={handleChange}
                                                    id="value"
                                                />
                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <CustomInputField
                                                    type="text"
                                                    placeholder="max-limit"
                                                    name="max-limit"
                                                    value={""}
                                                    onChange={handleChange}
                                                    id="max-limit"
                                                />
                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <CustomInputField
                                                    type="text"
                                                    placeholder="Extra Discount"
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
                                                    <option >Select Status</option>
                                                    <option value={1}>Discount For</option>
                                                    <option value={3}>Date Range</option>
                                                </select>

                                            </div>
                                            <div className="col-lg-4 col-md-4">
                                                <div className='d-flex justify-content-start'>
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

export default VisaAddDiscount