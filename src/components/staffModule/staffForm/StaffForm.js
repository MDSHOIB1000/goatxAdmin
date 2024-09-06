import { Link, useParams } from "react-router-dom";
import Breadcrumbs from "../../../common/breadcrumb/Breadcrumbs";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";
import { Formik } from "formik";
import CustomInputField from "../../../common/CustomInputField";
import { countryAdd, countryUpdate, getCountryAdd, getcountry, getlanguage, getstaff, languageList, staffAdd, staffType, staffUpdate } from "../../../api/login/Login";

function StaffForm() {

    const [conbo, setCombo] = useState(null)
    const [StffTypeconbo, setStffTypeconbo] = useState(null)
    console.log(conbo);
    const [initialValues, setInitialValues] = useState({
        name: "",
        email: "",
        mobile: '',
        dob: '',
        latitude: '',
        longitude: "",
        password: '',
        staff_type_id: '',
        language_id: ''
    });
    const params = useParams();
    const validate = (values) => {
        let errors = {};
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const regexMobileNumber = /^(\+\d{1,3}\s?\d{1,14}|\d{5,15})$/;
        if (!values.name) {
            errors.name = " Name is required";
        }
        if (!values.email) {
            errors.email = "Email is required";
        } else if (!regexEmail.test(values.email)) {
            errors.email = "Invalid Email";
        }
        if (!values.mobile) {
            errors.mobile = "Mobile Number is required";
        } else if (!regexMobileNumber.test(values.mobile)) {
            errors.mobile = "Invalid Mobile Number";
        }
        if (!values.dob) {
            errors.dob = "Date Of Birth is required";
        }
        if (!values.latitude) {
            errors.latitude = "Latitude is required";
        }
        if (!values.longitude) {
            errors.longitude = "Longitude is required";
        }
        if (!values.password) {
            errors.password = "Password is required";
        }
        // if (!values.staff_type_id) {
        //     errors.staff_type_id = "Staff Type Id is required";
        // }
        return errors;
    };

    const toastSuccessMessage = () => {
        toast.success(`${params?.id ? "Update" : "Add"} Country Successfully.`, {
            position: "top-center",
        });
    };

    const curencyidget = async () => {
        try {
            const data = await languageList()
            const dataDtafType = await staffType()

            setCombo(data?.data)
            setStffTypeconbo(dataDtafType?.data)

        } catch (error) {
            alert(error.message)
        }
    }

    const submitForm = async (values) => {
        try {
            if (!params?.id) {
                try {
                    const res = await staffAdd(values);
                    if (res?.statusCode == "200") {
                        toastSuccessMessage();
                    }
                } catch (error) {

                }

            } else {
                try {
                    await staffUpdate(params.id, values);
                } catch (error) {

                }

            }

        } catch (error) {
            console.error("Error:", error);
        }
    };

    useEffect(() => {
        curencyidget()
    }, [])

    useEffect(() => {
        const fetchCurrency = async () => {
            try {
                if (params?.id) {
                    const response = await getstaff(params.id);
                    const currencyData = response.data;
                    setInitialValues(currencyData);
                } else {
                    setInitialValues({
                        name: "",
                        code: "",
                        curruncy_id: "",
                    });
                }
            } catch (error) {
                console.error("Error fetching currency:", error);
            }
        };

        fetchCurrency();
    }, [params?.id]);
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={''} />
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0">
                                        {params?.id ? "UPDATE" : "ADD"}  STAFF
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
                                                    <div className="col-xl-6 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            value={values.name}
                                                            hasError={errors.name && touched.name}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.name}
                                                            autoFocus={true}
                                                            id="name"
                                                            placeholder="Name"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">

                                                        <CustomInputField
                                                            type="email"
                                                            value={values.email}
                                                            hasError={errors.email && touched.email}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.email}
                                                            autoFocus={true}
                                                            id="email"
                                                            placeholder="Email"
                                                        />

                                                    </div>
                                                    <div className="col-xl-6 mb-3">

                                                        <CustomInputField
                                                            type="password"
                                                            value={values.password}
                                                            hasError={errors.password && touched.password}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.password}
                                                            autoFocus={true}
                                                            id="password"
                                                            placeholder="Password"
                                                        />

                                                    </div>
                                                    <div className="col-xl-6 mb-3">

                                                        <CustomInputField
                                                            type="mobile"
                                                            value={values.mobile}
                                                            hasError={errors.mobile && touched.mobile}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.mobile}
                                                            autoFocus={true}
                                                            id="mobile"
                                                            name="mobile"
                                                            placeholder="Mobile Number"
                                                        />

                                                    </div>
                                                    <div className="col-xl-6 mb-3">

                                                        <CustomInputField
                                                            type="date"
                                                            value={values.dob}
                                                            hasError={errors.dob && touched.dob}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.dob}
                                                            autoFocus={true}
                                                            id="dob"
                                                            name="dob"

                                                        />

                                                    </div>
                                                    <div className="col-xl-6 mb-3">

                                                        <CustomInputField
                                                            type="number"
                                                            value={values.latitude}
                                                            hasError={errors.latitude && touched.latitude}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.latitude}
                                                            autoFocus={true}
                                                            id="latitude"
                                                            name="latitude"
                                                            placeholder="Latitude"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <CustomInputField
                                                            type="number"
                                                            value={values.longitude}
                                                            hasError={errors.longitude && touched.longitude}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.longitude}
                                                            autoFocus={true}
                                                            id="longitude"
                                                            name="longitude"
                                                            placeholder="Longitude"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <select className="form-select" aria-label="Default select example" id="curruncy_id" name="staff_type_id" value={values.staff_type_id} onChange={handleChange}
                                                            hasError={
                                                                errors.staff_type_id && touched.staff_type_id
                                                            }

                                                            onBlur={handleBlur}
                                                            errorMsg={
                                                                touched.staff_type_id && errors.staff_type_id
                                                            }
                                                            autoFocus={true}
                                                        >
                                                            <option selected> select Country</option>
                                                            {StffTypeconbo &&
                                                                StffTypeconbo?.map((item) => {
                                                                    return (
                                                                        <option value={item?._id}>
                                                                            {item?.staff_type}
                                                                        </option>
                                                                    );
                                                                })}
                                                        </select>

                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <select className="form-select" aria-label="Default select example" id="curruncy_id" name="language_id" value={values.language_id} onChange={handleChange}
                                                            hasError={
                                                                errors.language_id && touched.language_id
                                                            }

                                                            onBlur={handleBlur}
                                                            errorMsg={
                                                                touched.language_id && errors.language_id
                                                            }
                                                            autoFocus={true}
                                                        >
                                                            <option selected> select Country</option>
                                                            {conbo &&
                                                                conbo?.map((item) => {
                                                                    return (
                                                                        <option value={item?._id}>
                                                                            {item?.name}
                                                                        </option>
                                                                    );
                                                                })}
                                                        </select>

                                                    </div>

                                                </div>
                                                <div>
                                                    <Link to='/satff' className="btn btn-danger light ms-1">Cancel</Link>
                                                    <button
                                                        className="btn btn-primary me-1"
                                                        type="submit"

                                                        disabled={!isValid || !dirty}
                                                    >
                                                        {params?.id ? "Update" : "Add"}
                                                    </button>
                                                </div>
                                            </form>
                                        );
                                    }}
                                </Formik>



                            </div>
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </>
    )
}
export default StaffForm