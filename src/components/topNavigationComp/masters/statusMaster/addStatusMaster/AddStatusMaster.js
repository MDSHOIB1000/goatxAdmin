import { Formik } from "formik";
import { Link, useNavigate, useParams } from "react-router-dom"
import CustomInputField from "../../../../../common/CustomInputField";
import Breadcrumbs from "../../../../../common/breadcrumb/Breadcrumbs";
import { ToastContainer, toast } from "react-toastify";
import { getStatusMaster, getStatusMasterId, statusMasterAdd, statusMasterUpdate } from "../../../../../api/login/Login";
import { useEffect, useState } from "react";
const breadCrumbsTitle = {
    id: "1",
    title_1: "Master",
    title_2: "status Master",
    path_2: "/status-master",
    title_3: "Add status Master",
    path_3: "/add-status-master",
}
function AddStatusMaster() {
    const [initialValues, setInitialValues] = useState({
        name: '',
        is_active: true
    });
    const params = useParams();
    const navigate = useNavigate()

    const validate = (values) => {
        let errors = {};
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const regexMobileNumber = /^(\+\d{1,3}\s?\d{1,14}|\d{5,15})$/;
        const regexPanNumber = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
        const regexGstNumber =
            /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}[Z]{1}[0-9A-Z]{1}$/;

        if (!values.name) {
            errors.name = "Status Name is required";
        }
        if (!values.is_active) {
            errors.is_active = "Status Name is required";
        }

        // if (!values.name) {
        //     errors.name = "Email is required";
        // } else if (!regexEmail.test(values.name)) {
        //     errors.name = "Invalid Email";
        // }

        return errors;
    };
    const toastSuccessMessage = () => {
        toast.success(`${params?.id ? "Update" : "Add"} Status Master Successfully.`, {
            position: "top-center",
        });
    };

    const submitForm = async (values) => {
        try {
            if (!params?.id) {
                try {
                    const res = await statusMasterAdd(values);
                    if (res?.statusCode == "200") {
                        toastSuccessMessage();
                        setTimeout(() => {
                            navigate('/status-master')
                        }, [4000])
                    }
                } catch (error) {

                }

            } else {
                try {
                    const res = await statusMasterUpdate(params.id, values);
                    if (res?.statusCode == "200") {
                        toastSuccessMessage();
                        setTimeout(() => {
                            navigate('/status-master')
                        }, [4000])
                    }
                } catch (error) {

                }

            }

        } catch (error) {
            console.error("Error:", error);
        }
    };

    useEffect(() => {
        const fetchCurrency = async () => {
            try {
                if (params?.id) {
                    const response = await getStatusMasterId(params.id);
                    const currencyData = response.data;
                    setInitialValues(currencyData);
                } else {
                    setInitialValues({
                        name: '',
                        isActive: ''
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
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0">
                                        {params?.id ? "UPDATE" : "ADD"}  STATUS MASTER
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
                                                            name="name"
                                                            placeholder="Status Title "
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <select class="form-select" aria-label="Default select example" id="isActive" defaultValue={values.is_active} name="is_active" onChange={handleChange}>
                                                            <option selected>Select Status</option>
                                                            <option value={"true"}>Active</option>
                                                            <option value={"false"}>DeActive</option>

                                                        </select>
                                                    </div>
                                                    <div className="col-xl-6 mb-4 mt-2">
                                                        <div>
                                                            <Link to='/status-master' className="btn btn-danger light ms-1">Cancel</Link>
                                                            <button
                                                                className="btn btn-primary me-1"
                                                                type="submit"
                                                                disabled={!isValid || !dirty}
                                                            >
                                                                {params?.id ? "Update" : "Add"}
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
                <ToastContainer />
            </div>
        </>
    )
}
export default AddStatusMaster