import React, { useState } from 'react'
import { Formik } from 'formik';
import { ToastContainer } from 'react-bootstrap';
import Loadar from '../../../../../../../common/loader/Loader';
import CustomInputField from '../../../../../../../common/CustomInputField';
function BulkUpload() {
    const [initialValues, setInitialValues] = useState({
        attachDocs: "",
    });
    const [loading, setLoading] = useState(false);
    const validate = (values) => {
        let errors = {};


        if (!values?.attachDocs) {
            errors.attachDocs = "⚠️ ";
        }




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
                        <div className="row">
                            {loading && <Loadar />}
                            <div className="col-xl-12">
                                <div className="card">
                                    <div className="card-body p-0">
                                        <div className="table-responsive active-projects style-1">

                                            <form className="tbl-captionn" onSubmit={handleSubmit}>
                                                <div className="row">
                                                    <div className="col-xl-12">
                                                        <CustomInputField
                                                            type="file"
                                                            value={values.attachDocs}
                                                            hasError={errors.attachDocs && touched.attachDocs}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.attachDocs}
                                                            id="attachDocs"
                                                        />
                                                    </div>
                                                    <p><small>Download Sample CSV File:
                                                    </small> <span><i class="fas fa-cloud-download-alt"></i></span></p>
                                                </div>
                                                
                                            </form>
                                            <h6>Note</h6>
                                            <ol>
                                                <li>👉 Only csv format files are allowed to import.</li>
                                            </ol>
                                            <div className='d-flex justify-content-center'>
                                                    <button className="btn btn-primary me-1" type="submit" disabled={!isValid || !dirty}>
                                                        <small>Upload
                                                        </small> <span><i class="fas fa-cloud-download-alt"></i></span>
                                                    </button>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ToastContainer className="text-center" />
                        </div>
                    );
                }}
            </Formik>
        </>
    )
}

export default BulkUpload
