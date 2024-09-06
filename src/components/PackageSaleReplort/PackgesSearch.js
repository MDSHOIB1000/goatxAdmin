import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
import CustomInputField from '../../common/CustomInputField';
import { getDataPacage } from '../../api/login/Login';

function PackgesSearch({ aepsData, submitForm }) {
    // Get the current date in the format YYYY-MM-DD
    const [defaultInitialValues, setdefaultInitialValues] = useState({
        package_id: '',
        member_code: '',
        name: '',
        startDate: '',
        endDate: ''
    })
    const token = window.localStorage.getItem('userToken')
    const [packageData, setPackageData] = useState([])

    const getPackageData = async () => {
        const res = await getDataPacage({ page: 1, count: 20, user_id: token, start_date: "", end_date: "", name: "" });
        setPackageData(res?.data)
    }

    const getCurrentDate = () => {
        const date = new Date();
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const day = String(date.getDate()).padStart(2, '0');
        setdefaultInitialValues({
            package_id: '',
            member_code: '',
            name: '',
            startDate: `${year}-${month}-${day}`,
            endDate: `${year}-${month}-${day}`
        })
        return `${year}-${month}-${day}`;
    };
    useState(() => {
        getCurrentDate()
        getPackageData()
    }, [])

    const resetForm = () => {
        setdefaultInitialValues({
            package_id: '',
            member_code: '',
            name: '',
            startDate: '',
            endDate: ''
        })
        submitForm(defaultInitialValues)
    }



    return (
        <>
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0"><b>Package Sales Search</b></h4>
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
                                            // resetForm,
                                            errors,
                                            touched,
                                            handleBlur,
                                            isValid,
                                            dirty,
                                        } = formik;
                                        return (
                                            <form className="tbl-captionn" onSubmit={handleSubmit}>
                                                <div className="row">
                                                    {/* <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="date"
                                                            placeholder="Start Date"
                                                            name="startDate"
                                                            value={values.startDate}
                                                            hasError={errors.startDate && touched.startDate}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.startDate}
                                                            id="startDate"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="date"
                                                            placeholder="End Date"
                                                            name="endDate"
                                                            value={values.endDate}
                                                            hasError={errors.endDate && touched.endDate}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.endDate}
                                                            id="endDate"
                                                        />
                                                    </div> */}
                                                    <div className="col-xl-4 mb-3">

                                                        <select className="form-select" aria-label="Default select example" name="package_id"
                                                            value={values.package_id}
                                                            hasError={errors.package_id && touched.package_id}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}>
                                                            <option>Open this select Package</option>
                                                            {packageData && packageData?.map((item, index) => (
                                                                <option key={index} value={item._id}>{item.package_name}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                    {/* <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="Member Code"
                                                            name="member_code"
                                                            value={values.member_code}
                                                            hasError={errors.member_code && touched.member_code}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.member_code}
                                                            id="member_code"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="Member Name"
                                                            name="name"
                                                            value={values.name}
                                                            hasError={errors.name && touched.name}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.name}
                                                            id="name"
                                                        />
                                                    </div>
                                                   */}

                                                    <div className="col-lg-12 col-md-12">
                                                        <div className='d-flex justify-content-start'>
                                                            <button className="btn btn-primary pd-x-20 color2" type="submit">
                                                                <i className="fas fa-search"></i> Search
                                                            </button>
                                                            <button className="btn btn-primary pd-x-20 color2" type="button" onClick={resetForm}>
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

export default PackgesSearch;
