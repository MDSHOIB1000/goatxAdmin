import React, { useState } from 'react'
import { Formik } from 'formik';
import { ToastContainer } from 'react-bootstrap';
import Loadar from '../../../../../../common/loader/Loader';
import { Button, Offcanvas } from 'react-bootstrap'
import "./AddPersonaliseUrlModal.css"
import CustomInputField from '../../../../../../common/CustomInputField';

function AddPersonaliseUrlModal({ name, setShow, show, ...props }) {
    const [initialValues, setInitialValues] = useState({
        attachDocs: "",
    });
    const [loading, setLoading] = useState(false);
    const validate = (values) => {
        let errors = {};
        return errors;
    };
    const submitForm = async (values) => {
        try {
            // setLoading(true);
            // const res = await changePin(values);
            // setErrorMessage(res?.data.message);
            // if (res.statusCode === "200") {
            //     toastSuccessMessage(res?.message);
            //     setInitialValues({
            //         user_id: token,
            //         oldPin: '',
            //         newPin: '',
            //         confirmPin: ''
            //     })
            // } else if (res.statusCode === "403") {
            //     toastErrorMessage(res?.message);
            // }
            // setLoading(false);
        } catch (error) {
            // setErrorMessage(error.message);
            // setLoading(false);
        }
    };
    return (
        <>
            <Button variant="primary" onClick={() => setShow(!show)} className="me-2">
                {name}
            </Button>
            <Offcanvas
                show={show}
                onHide={() => setShow(!show)}
                {...props}
                transition={false}
                className="no-overlay offCanvasWidth"
                
            >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title >
                        Add Domain
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <>
                        <Formik
                            initialValues={initialValues}
                            validate={validate}
                            onSubmit={submitForm}
                            className="tbl-captionn"
                            enableReinitialize
                        >
                            {(formik) => {
                                const {
                                    values,
                                    handleChange,
                                    handleSubmit,
                                    errors,
                                    touched,
                                    handleBlur,
                                    isValid,
                                    dirty,
                                } = formik;
                                return (
                                    <div className="row h-100">
                                        {loading && <Loadar />}
                                        <div className="col-xl-12 h-100">
                                            <div className="card h-100 d-flex flex-column">
                                                <div className="card-body p-0 d-flex flex-column flex-grow-1">
                                                    <div className="table-responsive active-projects style-1 flex-grow-1">
                                                        <form onSubmit={handleSubmit} className="d-flex flex-column justify-content-between h-100">
                                                            <div className="row flex-grow-1">
                                                                <div className="col-xl-12 mb-3">
                                                                    <CustomInputField
                                                                        type="text"
                                                                        value={values.attachDocs}
                                                                        hasError={errors.attachDocs && touched.attachDocs}
                                                                        onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                        errorMsg={errors.attachDocs}
                                                                        id="attachDocs"
                                                                        placeholder="Enter Your URL Name"
                                                                    />
                                                                </div>
                                                                <div className="col-xl-12 mb-3">
                                                                    <CustomInputField
                                                                        type="text"
                                                                        value={values.attachDocs}
                                                                        hasError={errors.attachDocs && touched.attachDocs}
                                                                        onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                        errorMsg={errors.attachDocs}
                                                                        id="attachDocs"
                                                                        placeholder="URL"
                                                                    />
                                                                    <small>* Add domain without http/https</small>
                                                                </div>
                                                                <div className="col-xl-12 mb-3">
                                                                    <CustomInputField
                                                                        type="text"
                                                                        value={values.attachDocs}
                                                                        hasError={errors.attachDocs && touched.attachDocs}
                                                                        onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                        errorMsg={errors.attachDocs}
                                                                        id="attachDocs"
                                                                        placeholder="Enter Duration"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className='d-flex justify-content-center'>
                                                                <button className="btn btn-primary me-1" type="submit" disabled={!isValid || !dirty}>
                                                                    <small>Add Domain</small> <span><i className="fas fa-cloud-download-alt"></i></span>
                                                                </button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                                <div className='card mt-3'>
                                                    <div className='card-body'>
                                                        <p className='text-warning'>★ Info</p>
                                                        <h5>Card Title</h5>
                                                        <p>
                                                            <small>Some quick example text to build on the card title and make up the bulk of the card's content.</small>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <ToastContainer className="position-fixed bottom-0 end-0 p-3" />
                                    </div>

                                );
                            }}
                        </Formik>
                    </>
                </Offcanvas.Body>
            </Offcanvas>

        </>
    )
}

export default AddPersonaliseUrlModal
