import React, { useEffect, useState } from 'react';
import CustomInputField from '../../../../common/CustomInputField';
import { Formik } from 'formik';

function ServiceSearch({ initialValues, submitForm, userData }) {
    const [defaultInitialValues, setDefaultInitialValues] = useState({});

    const getCurrentDate = () => {
        const date = new Date();
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    useEffect(() => {
        setDefaultInitialValues({
            ...initialValues,
            start_date: null,
            end_date: null,
        });
    }, [initialValues]);

    return (
        <>
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0"><b>Course  Search</b></h4>
                                </div>
                                <Formik
                                    enableReinitialize
                                    initialValues={defaultInitialValues}
                                    onSubmit={submitForm}
                                    className="tbl-captionn"
                                >
                                    {(formik) => {
                                        const {
                                            values,
                                            handleChange,
                                            handleSubmit,
                                            resetForm,
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
                                                            type="date"
                                                            placeholder="Start Date"
                                                            value={values.start_date}
                                                            hasError={errors.start_date && touched.start_date}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.start_date}
                                                            autoFocus={true}
                                                            id="start_date"
                                                            name="start_date"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="date"
                                                            placeholder="End Date"
                                                            value={values.end_date}
                                                            hasError={errors.end_date && touched.end_date}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.end_date}
                                                            autoFocus={true}
                                                            id="end_date"
                                                            name="end_date"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="Course Name"
                                                            value={values.service_name}
                                                            hasError={errors.service_name && touched.service_name}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.service_name}
                                                            autoFocus={true}
                                                            id="service_name"
                                                            name="service_name"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="Course Category"
                                                            value={values.service_type}
                                                            hasError={errors.service_type && touched.service_type}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.service_type}
                                                            autoFocus={true}
                                                            id="service_type"
                                                            name="service_type"
                                                        />
                                                    </div>
                                                    <div className="col-lg-12 col-md-12 ">
                                                        <div className='d-flex justify-content-start'>
                                                            <button className="btn btn-primary pd-x-20 color2 " type="submit">
                                                                <i className="fas fa-search" ></i> Search
                                                            </button>
                                                            <button
                                                                className="btn btn-primary pd-x-20 color2"
                                                                type="button"
                                                                onClick={() => resetForm({ values: defaultInitialValues })}
                                                            >
                                                                <i className="fas fa-refresh"></i> Reset
                                                            </button>
                                                        </div>
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
        </>
    );
}

export default ServiceSearch;
