import React, { useState } from 'react'
import { Formik } from 'formik';
import { ToastContainer } from 'react-bootstrap';
import CustomInputField from '../../../../../../../common/CustomInputField';
import CustomTextArea from '../../../../../../../common/CustomTextArea';
import Loadar from '../../../../../../../common/loader/Loader';


function BlockMultipleContactNumber() {
    const [initialValues, setInitialValues] = useState({
        senderIdName: "",
        dlpId:"",
        description:"",
        attachSuportDocs:"",
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
                                                        <CustomTextArea
                                                            type="text"
                                                            placeholder="Insert Number Here*"
                                                            value={values.description}
                                                            hasError={errors.description && touched.description}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.description}
                                                            id="description"
                                                        />
                                                    </div>
                                                    

                                                </div>
                                                <div className='d-flex justify-content-center'>
                                                    <button className="btn btn-primary me-1" type="submit" disabled={!isValid || !dirty}>
                                                        Submit Numbers
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

export default BlockMultipleContactNumber
