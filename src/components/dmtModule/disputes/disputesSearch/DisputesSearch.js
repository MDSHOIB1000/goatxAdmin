import React, { useEffect, useState } from 'react';
import CustomInputField from '../../../../common/CustomInputField';
import { Formik } from 'formik';
import { dmtstatus, getListDepartment, getPriority, getReason } from '../../../../api/login/Login';

function DisputeSearch({ initialValues, submitForm, userData }) {
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
            start_date: getCurrentDate(),
            end_date: getCurrentDate()
        });
    }, [initialValues]);

    const [statusData, setStatusData] = useState([]);
    const [department, setDepartmentData] = useState([]);
    const [priority, setPriorityData] = useState([]);
    console.log('priority', priority);
    const [getReasons, setReasonData] = useState([]);

    const getAllData = async () => {
        const res = await dmtstatus()
        // console.log('Mustfa', res);
        setStatusData(res?.data)

        // const res1 = await getListDepartment()
        // setDepartmentData(res1.data);

        const res2 = await getPriority()
        // console.log('jdhfjkdk', res2?.data);
        setPriorityData(res2?.data)
        const res3 = await getReason()
        // console.log('Mustafa', res3);
        setReasonData(res2?.data)

        // try {
        //     const [
        //         statusResponse,
        //         departmentResponse,
        //         priorityResponse,
        //         reasonResponse,
        //     ] = await Promise.all([
        //         dmtstatus(),
        //         getListDepartment(),
        //         getPriority(),
        //         getReason(),
        //     ]);
        //     setStatusData(statusResponse.data);
        //     
        //     setPriorityData(priorityResponse.data);
        //     setReasonData(reasonResponse.data);
        // } catch (error) {
        //     console.log(error, "test");
        //     // alert(error.message,);
        // }
    };

    useEffect(() => {
        getAllData();
    }, []);

    const handleSubmit = (values) => {
        const payload = {
            start_date: values.start_date,
            end_date: values.end_date,
            member_code: values.member_code,
            customer_mobile: values.customer_mobile,
            member_shop_name: values.member_shop_name,
            txn_id: values.txn_id,
            subject: values.subject,
            department: values.department,
            priority: values.priority,
            reason: values.reason,
            status: values.status
        };

        submitForm(payload);
    };

    const resetButton = (formik) => {
        console.log('formik', formik);
        formik.resetForm();
        setDefaultInitialValues({
            start_date: '',
            end_date: '',
            member_code: '',
            customer_mobile: '',
            member_shop_name: '',
            txn_id: '',
            subject: '',
            department: '',
            priority: '',
            reason: '',
            status: ''
        })
        setStatusData([]); // Reset status data
        setPriorityData([]); // Reset priority data
        setReasonData([]); // Reset reason data
    }

    return (
        <>
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0"><b>Ticket Search</b></h4>
                                </div>
                                <Formik
                                    enableReinitialize
                                    initialValues={defaultInitialValues}
                                    onSubmit={handleSubmit}
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
                                                            placeholder="Member Code"
                                                            value={values.member_code}
                                                            hasError={errors.member_code && touched.member_code}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.member_code}
                                                            autoFocus={true}
                                                            id="member_code"
                                                            name="member_code"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
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
                                                            name="customer_mobile"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="Member / Shop Name"
                                                            value={values.member_shop_name}
                                                            hasError={errors.member_shop_name && touched.member_shop_name}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.member_shop_name}
                                                            id="member_shop_name"
                                                            name="member_shop_name"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="Ticket No"
                                                            value={values.txn_id}
                                                            hasError={errors.txn_id && touched.txn_id}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.txn_id}
                                                            id="txn_id"
                                                            name="txn_id"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="Subject"
                                                            value={values.subject}
                                                            hasError={errors.subject && touched.subject}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.subject}
                                                            id="subject"
                                                            name="subject"
                                                        />
                                                    </div>
                                                    {/* <div className="col-xl-4 mb-3">
                                                        <select
                                                            className="form-select"
                                                            aria-label="Default select example"
                                                            value={values.department}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            id="department"
                                                            name="department"
                                                        >
                                                            <option value="">Select Department</option>
                                                            {department && department.map((item) => (
                                                                <option key={item._id} value={item._id}>{item.department}</option>
                                                            ))}
                                                        </select>
                                                        {errors.department && touched.department && (
                                                            <div className="error">{errors.department}</div>
                                                        )}
                                                    </div> */}
                                                    <div className="col-xl-4 mb-3">
                                                        <select
                                                            className="form-select"
                                                            aria-label="Default select example"
                                                            value={values.priority}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            id="priority"
                                                            name="priority"
                                                        >
                                                            <option value="">Select Priority</option>
                                                            {priority && priority.map((item) => (
                                                                <option key={item._id} value={item._id}>{item.priority}</option>
                                                            ))}
                                                        </select>
                                                        {errors.priority && touched.priority && (
                                                            <div className="error">{errors.priority}</div>
                                                        )}
                                                    </div>
                                                    {/* <div className="col-xl-4 mb-3">
                                                        <select
                                                            className="form-select"
                                                            aria-label="Default select example"
                                                            value={values.reason}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            id="reason"
                                                            name="reason"
                                                        >
                                                            <option value="">Select Reason</option>
                                                            {getReasons && getReasons.map((item) => (
                                                                <option key={item._id} value={item._id}>{item.reason}</option>
                                                            ))}
                                                        </select>
                                                        {errors.reason && touched.reason && (
                                                            <div className="error">{errors.reason}</div>
                                                        )}
                                                    </div> */}
                                                    <div className="col-xl-4 mb-3">
                                                        <select
                                                            className="form-select"
                                                            aria-label="Default select example"
                                                            value={values.status}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            id="status"
                                                            name="status"
                                                        >
                                                            <option value="">Select Status</option>
                                                            {statusData && statusData.map((item) => (
                                                                <option key={item._id} value={item._id}>{item.name}</option>
                                                            ))}
                                                        </select>
                                                        {errors.status && touched.status && (
                                                            <div className="error">{errors.status}</div>
                                                        )}
                                                    </div>
                                                    <div className="col-lg-12 col-md-12 ">
                                                        <div className='d-flex justify-content-start'>
                                                            <button className="btn btn-primary pd-x-20 color2 " type="submit">
                                                                <i className="fas fa-search"></i> Search
                                                            </button>
                                                            <button
                                                                className="btn btn-primary pd-x-20 color2"
                                                                type="submit"
                                                                onClick={() => resetButton(formik)}
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

export default DisputeSearch;
