import { Link, useNavigate, useParams } from "react-router-dom"
import CustomInputField from "../../../../../common/CustomInputField"
import { Formik } from "formik";
import Breadcrumbs from "../../../../../common/breadcrumb/Breadcrumbs";
import { ToastContainer, toast } from 'react-toastify';
import { useEffect, useState } from "react";
import { addRole, getRoleEdit, updateRole } from "../../../../../api/login/Login";


function AddRoleMaster() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Master",
        title_2: "Role Master",
        path_2: "/role-master",
        title_3: "Add Role Master",
        path_3: "/add-role-master"
    }
    const [initialValues, setInitialValues] = useState({
        name: "",
    });
    const params = useParams()
    const navigate = useNavigate()

    const validate = (values) => {
        let errors = {};

        if (!values.name) {
            errors.name = "Role Title is required";
        }
        return errors;
    };

    const toastSuccessMessage = () => {
        toast.success(`${params?.id ? "Update" : "Add"} Role Master
        Successfully.`, {
            position: "top-center",
        });
    };
    const toastErrorMessage = () => {
        const action = params?.id ? "Update" : "Add";
        toast.error(` ${action} Role Master Failed.`, {
            position: "top-center",
        });
    };
    const submitForm = async (values) => {
        try {
            if (!params?.id) {
                try {
                  const response =  await addRole(values);
                    if (response?.statusCode === "200") {
                        toastSuccessMessage();
                        setTimeout(() => {
                            navigate('/role-master')
                        }, 5000);
                    }else{
                        toastErrorMessage()
                    }
                } catch (error) {
                    alert.error("NOT SUCCESS :", error);
                }

            } else {
                try {
                    await updateRole(params.id, values);
                    toastSuccessMessage();
                    setTimeout(() => {
                        navigate('/role-master')
                    }, 5000);
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
                    const response = await getRoleEdit(params.id);
                    const roleData = response.data;
                    console.log(roleData);
                    setInitialValues(roleData);
                } else {
                    setInitialValues({
                        name: ""
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
                                    <h4 className="heading mb-0"> {params?.id ? "UPDATE" : "ADD"}  ROLE MASTER</h4>
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
                                                            value={values?.name}
                                                            hasError={errors.name && touched.name}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.name}
                                                            autoFocus={true}
                                                            id="name"
                                                            name="name"
                                                            placeholder="Role Title"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-4 mt-2">
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
            <ToastContainer className={"text-center"} />
        </>
    )
}
export default AddRoleMaster