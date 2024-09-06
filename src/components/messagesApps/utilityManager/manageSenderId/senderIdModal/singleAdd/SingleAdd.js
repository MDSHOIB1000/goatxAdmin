import React, { useState } from 'react'
import { Formik } from 'formik';
import { ToastContainer } from 'react-bootstrap';
import Loadar from '../../../../../../common/loader/Loader';
import CustomInputField from '../../../../../../common/CustomInputField';
import CustomTextArea from '../../../../../../common/CustomTextArea';

function SingleAdd() {
    const [initialValues, setInitialValues] = useState({
        senderIdName: "",
        dlpId:"",
        description:"",
        attachSuportDocs:"",
    });
    const [loading, setLoading] = useState(false);
    const validate = (values) => {
        let errors = {};

        if (!values?.senderIdName) {
            errors.senderIdName = "⚠️ Must be either 3 chars/numeric or";
        }
        if (!values?.dlpId) {
            errors.dlpId = "⚠️ Invalid Pe Id, must only be numbers (19 digits)";
        }
        if (!values?.dlpId) {
            errors.dlpId = "⚠️ Invalid Pe Id, must only be numbers (19 digits)";
        }
        if (!values?.attachSuportDocs) {
            errors.attachSuportDocs = "⚠️ ";
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
                                                    <div className="col-xl-12 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="Sender Id Name"
                                                            value={values.senderIdName}
                                                            hasError={errors.senderIdName && touched.senderIdName}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.senderIdName}
                                                            id="senderIdName"
                                                        />
                                                    </div>
                                                    <div className="col-xl-12 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="DLT PE ID"
                                                            value={values.dlpId}
                                                            hasError={errors.dlpId && touched.dlpId}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.dlpId}
                                                            id="dlpId"
                                                        />
                                                    </div>
                                                    <div className="col-xl-12 mb-3">
                                                        <CustomTextArea
                                                            type="text"
                                                            placeholder="Enter Description"
                                                            value={values.description}
                                                            hasError={errors.description && touched.description}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.description}
                                                            id="description"
                                                        />
                                                    </div>
                                                    <div className="col-xl-12 mb-3">
                                                        <CustomInputField
                                                            type="file"
                                                            placeholder="Attach Supporting Docs"
                                                            value={values.attachSuportDocs}
                                                            hasError={errors.attachSuportDocs && touched.attachSuportDocs}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.attachSuportDocs}
                                                            id="attachSuportDocs"
                                                        />
                                                    </div>

                                                </div>
                                                <div className='d-flex justify-content-center'>
                                                    <button className="btn btn-primary me-1" type="submit" disabled={!isValid || !dirty}>
                                                        Request For Approval
                                                    </button>
                                                </div>
                                            </form>
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

export default SingleAdd
