import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
import CustomInputField from '../../common/CustomInputField';
import { useParams } from 'react-router-dom';

function AepsBalanceFilter({ submitForm, title, getDmtTxnData, page }) {
    const [defaultInitialValues, setDefaultInitialValues] = useState({
        customer_mobile: "",
        adhaar_no: "",
        txn_id: "",
        start_date: '',
        end_date: '',
        type: "CD"
    });

    const handleReset = (resetForm) => {
        setDefaultInitialValues({
            customer_mobile: "",
            adhaar_no: "",
            txn_id: "",
            start_date: '',
            end_date: '',
            type: "CD"
        })
        resetForm()
        submitForm(defaultInitialValues)
    };

    return (
        <>
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0"><b>{title} Search</b></h4>
                                </div>
                                <Formik
                                    initialValues={defaultInitialValues}
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
resetForm
                                        } = formik;

                                        return (
                                            <form className="tbl-captionn" onSubmit={handleSubmit}>
                                                <div className="row">
                                                    <div className="col-xl-3 mb-3">
                                                        <CustomInputField
                                                            type="date"
                                                            placeholder="Start Date"
                                                            name="start_date"
                                                            value={values.start_date}
                                                            hasError={errors.start_date && touched.start_date}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.start_date}
                                                            id="start_date"
                                                        />
                                                    </div>
                                                    <div className="col-xl-3 mb-3">
                                                        <CustomInputField
                                                            type="date"
                                                            placeholder="End Date"
                                                            name="end_date"
                                                            value={values.end_date}
                                                            hasError={errors.end_date && touched.end_date}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.end_date}
                                                            id="end_date"
                                                        />
                                                    </div>
                                                    <div className="col-xl-3 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="Mobile No"
                                                            name="customer_mobile"
                                                            value={values.customer_mobile}
                                                            hasError={errors.customer_mobile && touched.customer_mobile}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.customer_mobile}
                                                            id="customer_mobile"
                                                        />
                                                    </div>
                                                    <div className="col-xl-3 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="TXN ID"
                                                            name="txn_id"
                                                            value={values.txn_id}
                                                            hasError={errors.txn_id && touched.txn_id}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.txn_id}
                                                            id="txn_id"
                                                        />
                                                    </div>
                                                    <div className="col-xl-3 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="Adhaar No"
                                                            name="adhaar_no"
                                                            value={values.adhaar_no}
                                                            hasError={errors.adhaar_no && touched.adhaar_no}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.adhaar_no}
                                                            id="adhaar_no"
                                                        />
                                                    </div>
                                                    <div className="col-lg-4 col-md-4">
                                                        <div className='d-flex justify-content-start'>
                                                            <button className="btn btn-primary pd-x-20 color2" type="submit">
                                                                <i className="fas fa-search"></i> Search
                                                            </button>
                                                            <button className="btn btn-primary pd-x-20 color2" type="button" onClick={() => handleReset(resetForm)}>
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

export default AepsBalanceFilter;
