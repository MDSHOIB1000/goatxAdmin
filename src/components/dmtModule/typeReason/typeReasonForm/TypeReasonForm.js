import { Link, useNavigate, useParams } from "react-router-dom"
import { Formik } from "formik";
import { ToastContainer, toast } from 'react-toastify';
import { useEffect, useState } from "react";
import { adddmtPriority, getPriorityId, updatePriority } from "../../../../api/login/Login";
import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs";
import CustomInputField from "../../../../common/CustomInputField";


function TypeReasonForm() {
    const params = useParams()
    const [initialValues, setInitialValues] = useState({
        priority: "",
        status: false,

    });
    
    const navigate = useNavigate()
    const breadCrumbsTitle = {
        id: "1",
        title_1: "DMT",
        title_2: `${params?.id?"Update":"Add"} Reason Type`,
    }
    const validate = (values) => {
        let errors = {};

        if (!values.priority) {
            errors.priority = "priority is required";
        }
        return errors;
    };

    const toastSuccessMessage = () => {
        toast.success(`${params?.id ? "Update" : "Add"} Priority
        Successfully.`, {
            position: "top-center",
        });
    };
    const submitForm = async (values) => {
        try {
            if (!params?.id) {
                try {
                    await adddmtPriority(values);
                    toastSuccessMessage();
                    setTimeout(() => {
                        navigate('/priority-master/welcome')
                    }, 5000);
                } catch (error) {
                    alert.error("NOT SUCCESS :", error);
                }

            } else {
                try {
                    await updatePriority(params.id, values);
                    toastSuccessMessage();
                    setTimeout(() => {
                        navigate('/priority-master/welcome')
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
                    const response = await getPriorityId(params.id);
                    const roleData = response.data;
                    console.log(roleData);
                    setInitialValues(roleData);
                } else {
                    setInitialValues({
                        priority: "",
                        status: false
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
                            <div className="table-responsive status-projects style-1">
                                <div className="tbl-caption tbl-caption-2 px-3 py-2">
                                    <h4 className="heading mb-0"> {params?.id ? "UPDATE" : "ADD"}  REASON TYPE</h4>
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
                                                            value={values?.priority}
                                                            hasError={errors.priority && touched.priority}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.priority}
                                                            autoFocus={true}
                                                            id="priority"
                                                            message="priority"
                                                            placeholder="Type"
                                                        />
                                                    </div>
                                                    <div className='col-xl-4 mb-3'>
                                                        <select class="form-select" aria-label="Default select example" id="status" name="status"
                                                            value={values?.status} onChange={handleChange}><option disabled> Select Status</option><option value={true}>ACTIVE</option><option value={false}>IN ACTIVE</option></select>
                                                    </div>
                                                    <div className="col-xl-4 mb-4 mt-2">
                                                        <div>
                                                            <Link to='/type-reason-data' className="btn btn-danger light ms-1">Cancel</Link>
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
export default TypeReasonForm