
import { useEffect, useState } from "react";
import { Formik } from "formik";
import { Link, useParams } from "react-router-dom"
import CustomInputField from "../../../../../common/CustomInputField";
import { areaAdd, getCountryAdd, getarea } from "../../../../../api/login/Login";
import { ToastContainer, toast } from "react-toastify";

function TabAddAreaForm({ i, language, languageId, submitForm, handleChangeCus, item }) {

    const validate = (values) => {
        let errors = {};
        if (!values.name) {
            errors.name = "Name is required";
        }

        if (!values.level) {
            errors.level = "Level is required";
        }
        if (!values.meta_title) {
            errors.meta_title = "Meta Title is required";
        }
        if (!values.meta_description) {
            errors.meta_description = "Meta Description is required";
        }
        if (!values.meta_keyword) {
            errors.meta_keyword = "Meta Keyword is required";
        }
        return errors;
    };


    return (
        <>
            <Formik
                initialValues={item}
                validate={validate}
                onSubmit={submitForm}
                enableReinitialize
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
                        <form className="tbl-captionn" onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-xl-4 mb-3">
                                    <CustomInputField
                                        type="text"
                                        placeholder="Name *"
                                        value={values.name}
                                        hasError={errors.name && touched.name}
                                        onChange={(e) => { handleChangeCus(e, item.language_id) }}
                                        onBlur={handleBlur}
                                        errorMsg={errors.name}
                                        autoFocus={true}
                                        id="name"
                                        name='name'
                                    />
                                </div>
                                <div className="col-xl-4 mb-3">
                                    <CustomInputField
                                        type="number"
                                        placeholder="Level *"
                                        value={values.level}
                                        hasError={errors.level && touched.level}
                                        onChange={(e) => { handleChangeCus(e, item.language_id) }}
                                        onBlur={handleBlur}
                                        errorMsg={errors.level}
                                        autoFocus={true}
                                        id="level"
                                        name='level'
                                    />
                                </div>
                                <div className="col-xl-4 mb-3">
                                    <select className="form-select" aria-label="Default select example" name="is_active" onChange={(e) => { handleChangeCus(e, item.language_id) }}>
                                        <option selected> select Status</option>
                                        <option value={true}>Enabled</option>
                                        <option value={false}>diasabled</option>
                                    </select>
                                </div>


                            </div>
                            <div>
                                <Link to='/area' className="btn btn-danger light ms-1">Cancel</Link>
                                {i == language?.length - 1 && <button type="button" onClick={submitForm} className="btn btn-primary me-1">
                                    Submit
                                </button>}



                            </div>
                        </form>
                    );
                }}
            </Formik >
        </>
    )
}
export default TabAddAreaForm