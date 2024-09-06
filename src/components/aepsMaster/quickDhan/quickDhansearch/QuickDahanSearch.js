import React from 'react'
import CustomInputField from '../../../../common/CustomInputField';
import { Formik } from 'formik';
function QuickDhanSearch({ initialValues,submitForm,userData }) {
    return (
        <>
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0"><b>Quick Dhan Search  </b></h4>
                                </div>
                                <Formik
                                    initialValues={initialValues}
                                    // validate={validate}
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
                                            <form className="tbl-captionn" onSubmit={handleSubmit}>
                                                <div className="row">
                                                    <div className="col-xl-6 mb-3">
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
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">
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
                                                        />

                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="Mobile No"
                                                            value={values.customer_mobile}
                                                            hasError={errors.customer_mobile && touched.customer_mobile}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.customer_mobile}
                                                            autoFocus={true}
                                                            id="customer_mobile"
                                                        />

                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="Transaction Id"
                                                            value={values.txn_id}
                                                            hasError={errors.txn_id && touched.txn_id}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.txn_id}
                                                            autoFocus={true}
                                                            id="txn_id"
                                                        />

                                                    </div>
                                                    {/* <div className="col-xl-6 mb-6">
                                                        <select className="form-select" aria-label="Default select example" id="userid" name="user" value={values.userid} onChange={handleChange}
                                                            hasError={
                                                                errors.user && touched.userid
                                                            }

                                                            onBlur={handleBlur}
                                                            errorMsg={
                                                                touched.userid && errors.userid
                                                            }
                                                            autoFocus={true}
                                                        >
                                                            <option selected> Select User</option>
                                                            {userData &&
                                                                userData?.map((item) => {
                                                                    return (
                                                                        <>
                                                                            
                                                                            <option value={item?._id}> {item?.name}</option>
                                                                        </>
                                                                    );
                                                                })}
                                                        </select>
                                                    </div> */}
                                                    <div className="col-lg-6 col-md-12 ">
                                                        <div className='d-flex justify-content-start'>
                                                            <button className="btn btn-primary pd-x-20  " type="submit"><i className="fas fa-search" ></i> Search</button>
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
    )
}

export default QuickDhanSearch