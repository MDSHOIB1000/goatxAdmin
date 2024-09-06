import { Formik } from 'formik';
import React from 'react'
import CustomInputField from '../../common/CustomInputField';
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { HiOutlineRefresh } from 'react-icons/hi';
import { CiSaveDown1 } from "react-icons/ci";

const initialValues = { from: "", to: "" }
function StatementTop2() {
    const validate = (values) => {
        let errors = {};

        if (!values.from) {
            errors.from = "First Name is required";
        }

        if (!values.lastName) {
            errors.lastName = "Last Name is required";
        }
        return errors;
    };
    const submitForm = (values) => {
        console.log(values);
    };

    const changeHandle = (selectedData) => {
        // TODO
    };
    return <div className="topstatement">
        <div className="row">
            <div className="col-xl-12">
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0"><b>Search</b></h4>
                                <div>
                                    <Link className="btn btn-primary btn-sm" to="#" role="button" aria-controls="offcanvasExample"><FaSearch style={{ marginRight: "6px" }} />
                                        SEARCH </Link>
                                    <Link className="btn btn-warning  btn-sm" to="#" role="button" aria-controls="offcanvasExample"><HiOutlineRefresh style={{ marginRight: "6px" }} />
                                        REFRESH </Link>
                                    <Link className="btn btn-warning  btn-sm" to="#" role="button" aria-controls="offcanvasExample"><CiSaveDown1  style={{ marginRight: "6px" }} />
                                        EXPORT </Link>

                                </div>
                            </div>
                            <Formik
                                initialValues={initialValues}
                                validate={validate}
                                onSubmit={submitForm}
                                className="tbl-captionn"
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
                                        <form className="tbl-captionn" onSubmit={submitForm}>
                                            <div className="row">
                                                <div className="col-xl-3 mb-3">
                                                    <CustomInputField
                                                        type="date"
                                                        placeholder="From *"
                                                        value={values.from}
                                                        hasError={errors.from && touched.from}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.from}
                                                        autoFocus={true}
                                                        id="from"
                                                    />
                                                </div>
                                                <div className="col-xl-3 mb-3">
                                                    <CustomInputField
                                                        type="date"
                                                        placeholder="To *"
                                                        value={values.to}
                                                        hasError={errors.to && touched.to}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.to}
                                                        autoFocus={true}
                                                        id="to"
                                                    />

                                                </div>
                                                <div className="col-xl-3 mb-3">
                                                    <CustomInputField
                                                        type="text"
                                                        placeholder="Search Value"
                                                        value={values.searchVal}
                                                        hasError={errors.searchVal && touched.searchVal}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.searchVal}
                                                        autoFocus={true}
                                                        id="searchVal"
                                                    />

                                                </div>
                                                <div className="col-xl-3 mb-3">
                                                    <CustomInputField
                                                        type="text"
                                                        placeholder="Agent Id / Parent Id"
                                                        value={values.agentId}
                                                        hasError={errors.agentId && touched.agentId}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.agentId}
                                                        autoFocus={true}
                                                        id="agentId"
                                                    />

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
        </div>
    </div>
}
export default StatementTop2