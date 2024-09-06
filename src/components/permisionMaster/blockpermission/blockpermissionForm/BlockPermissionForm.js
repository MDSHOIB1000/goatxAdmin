import React from 'react'
import { Formik } from 'formik';
import  { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import CustomInputField from '../../../../common/CustomInputField';

function BlockPermissionForm({ initialValues, submitForm, params,validate,cancelBtn }) {
    
    return (
        <>
            
            <div style={{ margin: "14px" }}>
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                            <h4 className="heading mb-0">
                                    {params?.id ? "UPDATE" : "ADD"}
                                    &nbsp;
                                    Block Master
                                </h4>
                            </div>
                            <Formik
                                initialValues={initialValues}
                                validate={validate}
                                onSubmit={submitForm}
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
                                        <form className="tbl-captionn" onSubmit={handleSubmit}>
                                            <div className="row">
                                                <div className="col-xl-5 mb-3">
                                                    <CustomInputField
                                                        type="text"
                                                        value={values?.name}
                                                        // hasError={errors.name && touched.name}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        // errorMsg={errors.name}
                                                        autoFocus={true}
                                                        id="name"
                                                        name="name"
                                                        placeholder="Block Name"
                                                    />
                                                </div>
                                                <div className="col-xl-5 mb-3">
                                                    <select className="form-select" aria-label="Default select example" onChange={handleChange} value={values?.isActive} name="isActive">
                                                        <option>Select status</option>
                                                        <option value={true}>Active</option>
                                                        <option value={false}>In Active</option>
                                                    </select>
                                                </div>
                                                <div className="col-xl-2 mb-3">
                                                    <Link to='/block-master' className="btn btn-danger light ms-1">Cancel</Link>
                                                    <button
                                                        className="btn btn-primary me-1"
                                                        type="submit"
                                                        disabled={!isValid || !dirty}
                                                    >
                                                        {params?.id ? "Update" : "Add"}
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    );
                                }}
                            </Formik>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlockPermissionForm
