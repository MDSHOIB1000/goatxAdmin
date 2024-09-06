import { Link, useNavigate, useParams } from "react-router-dom"
import { Formik } from "formik";
import { ToastContainer, toast } from 'react-toastify';
import { useEffect, useState } from "react";
import { addStatus, getStatusId, updateStatus } from "../../../../api/login/Login";
import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs";
import CustomInputField from "../../../../common/CustomInputField";

const breadCrumbsTitle = {
    id: "1",
    title_1: "DMT",
    title_2: "Status",
}

function DmtStatusForm() {

    const [initialValues, setInitialValues] = useState({
        name: "",
    });
    const params = useParams()
    const navigate = useNavigate()

    const validate = (values) => {
        let errors = {};

        if (!values.name) {
            errors.name = "Status is required";
        }
        return errors;
    };

    const toastSuccessMessage = () => {
        toast.success(`${params?.id ? "Update" : "Add"} Status
        Successfully.`, {
            position: "top-center",
        });
    };
    const submitForm = async (values) => {
        try {
            if (!params?.id) {
                try {
                    const res = await addStatus(values);
                    if (!res.error) {
                        toastSuccessMessage();
                        setTimeout(() => {
                            navigate('/dmt-status/welcome')
                        }, 4000);
                    } else {

                    }
                } catch (error) {
                    alert.error("NOT SUCCESS :", error);
                }

            } else {
                try {
                    const res = await updateStatus(params.id, values);
                    if (!res.error) {
                        toastSuccessMessage();
                        setTimeout(() => {
                            navigate('/dmt-status/welcome')
                        }, 4000);
                    } else {

                    }
                } catch (error) {

                }

            }

        } catch (error) {
            alert.error("Error:", error);
        }

    }
    useEffect(() => {
        const fetchUserType = async () => {
            try {
                if (params?.id) {
                    const response = await getStatusId(params.id);
                    const roleData = response.data;
                    console.log(roleData);
                    setInitialValues(roleData);
                } else {
                    setInitialValues({
                        name: "",
                    });
                }
            } catch (error) {
                console.error("Error fetching User type:", error);
            }
        };
        fetchUserType();
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
                                    <h4 className="heading mb-0"> {params?.id ? "UPDATE" : "ADD"}  STATUS</h4>
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
                                                        <select
                                                            className="form-select"
                                                            name="name"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values?.name}
                                                        >
                                                            <option value="" disabled>Select Status</option>
                                                            <option value={true}>Active</option>
                                                            <option value={false}>Inactive</option>
                                                        </select>
                                                        {errors.name && touched.name && (
                                                            <div className="text-danger">{errors.name}</div>
                                                        )}
                                                    </div>

                                                    <div className="col-xl-4 mb-4 mt-2">
                                                        <div>
                                                            <Link to='/dmt-status/welcome' className="btn btn-danger light ms-1">Cancel</Link>
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
            </div>
            <ToastContainer />
        </>
    )
}
export default DmtStatusForm