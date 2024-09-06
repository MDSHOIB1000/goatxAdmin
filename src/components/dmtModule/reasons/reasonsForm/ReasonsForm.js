import { Link, useNavigate, useParams } from "react-router-dom"
import { Formik } from "formik";
import { ToastContainer, toast } from 'react-toastify';
import { useEffect, useState } from "react";
import { addReasons, getReasonId, updateReasons } from "../../../../api/login/Login";
import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs";
import CustomInputField from "../../../../common/CustomInputField";
const breadCrumbsTitle = {
    id: "1",
    title_1: "DMT",
    title_2: "Reasons",
}

function ReasonForms() {
    const [initialValues, setInitialValues] = useState({
        message: "",
        active:false, 
    });
    const params = useParams()
    const navigate = useNavigate()

    const validate = (values) => {
        let errors = {};

        if (!values.message) {
            errors.message = "Message is required";
        }
        return errors;
    };

    const toastSuccessMessage = () => {
        toast.success(`${params?.id ? "Update" : "Add"} Reasons
        Successfully.`, {
            position: "top-center",
        });
    };
    const submitForm = async (values) => {
        try {
            if (!params?.id) {
                try {
                    await addReasons(values);
                    toastSuccessMessage();
                    setTimeout(() => {
                        navigate('/reasons-data')
                    }, 5000);
                } catch (error) {
                    alert.error("NOT SUCCESS :", error);
                }

            } else {
                try {
                    await updateReasons(params.id, values);
                    toastSuccessMessage();
                    setTimeout(() => {
                        navigate('/reasons-data')
                    }, 4000);
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
                    const response = await getReasonId(params.id);
                    const roleData = response.data;
                    console.log(roleData);
                    setInitialValues(roleData);
                } else {
                    setInitialValues({
                        message: "",
                        active:false
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
                                    <h4 className="heading mb-0"> {params?.id ? "UPDATE" : "ADD"}  Reasons</h4>
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
                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            value={values?.message}
                                                            hasError={errors.message && touched.message}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.message}
                                                            autoFocus={true}
                                                            id="message"
                                                            message="message"
                                                            placeholder="Messages"
                                                        />
                                                    </div>
                                                    <div className='col-xl-4 mb-3'>
                                                        <select class="form-select" aria-label="Default select example" id="active" name="active"
                                                            value={values?.active} onChange={handleChange}><option disabled> select Status</option><option value={true}>Active</option><option value={false}>Inactive</option></select>
                                                    </div>
                                                    <div className="col-xl-4 mb-4 mt-2">
                                                        <div>
                                                            <Link to='/role-master' className="btn btn-danger light ms-1">Cancel</Link>
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
export default ReasonForms