import React, { useState } from 'react'
import { Formik } from 'formik';
import { ToastContainer } from 'react-bootstrap';
import Select from 'react-select';
import Loadar from '../../../../../../common/loader/Loader';
import CustomInputField from '../../../../../../common/CustomInputField';
import CustomTextArea from '../../../../../../common/CustomTextArea';

function SingleAdd() {
    const [initialValues, setInitialValues] = useState({
        templeteName: "",
        templeteId: "",
        templeteData: "",
        attachSuportDocs: "",
    });
    const [loading, setLoading] = useState(false);
    const validate = (values) => {
        let errors = {};


        if (!values?.templeteId) {
            errors.templeteId = "⚠️ Only 19 digits allowed and only nunbers";
        }
        if (!values?.templeteId) {
            errors.templeteId = "⚠️ Invalid Pe Id, must only be numbers (19 digits)";
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
                                                            placeholder="Templete Name"
                                                            value={values.templeteName}
                                                            hasError={errors.templeteName && touched.templeteName}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.templeteName}
                                                            id="templeteName"
                                                        />
                                                    </div>
                                                    <div className="col-xl-12 mb-3">

                                                    </div>
                                                    <div className="col-xl-12 mb-3">
                                                        <CustomTextArea
                                                            type="text"
                                                            placeholder="Templete Data"
                                                            value={values.templeteData}
                                                            hasError={errors.templeteData && touched.templeteData}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.templeteData}
                                                            id="templeteData"
                                                        />
                                                    </div>
                                                    <div className="col-xl-12 mb-3">
                                                        <Select
                                                            id="selectModule"
                                                            closeMenuOnSelect={false}
                                                            className="multi-select-set"
                                                            isMulti
                                                            options={"dataModule"}
                                                            value={"selectedModules"}
                                                            onChange={"handleModuleChange"}
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
