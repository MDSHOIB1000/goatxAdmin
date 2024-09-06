import { Link, useNavigate, useParams } from "react-router-dom";
import CustomInputField from "../../../../../common/CustomInputField";
import { Formik } from "formik";
import Breadcrumbs from "../../../../../common/breadcrumb/Breadcrumbs";
import { ToastContainer, toast } from 'react-toastify';
import { useEffect, useState } from "react";
import { addDepartment, getDepartmentEdit, getRoleEdit, updateDepartment } from "../../../../../api/login/Login";

const breadCrumbsTitle = {
    id: "1",
    title_1: "Master",
    title_2: "Department Master",
    path_2: "/department-master",
    title_3: "Add Department Master",
    path_3: "/add-department-master"
};

function AddDepartmentMaster() {
    const [initialValues, setInitialValues] = useState({
        department: "",
        isActive: "",
    });
    const params = useParams();
    const navigate = useNavigate();

    const validate = (values) => {
        let errors = {};
        if (!values.department) {
            errors.department = "Department is required";
        }
        if (values.isActive === "") {
            errors.isActive = "Status is required";
        }
        return errors;
    };

    const toastSuccessMessage = () => {
        toast.success(`${params?.id ? "Update" : "Add"} Department Master Successfully.`, {
            position: "top-center",
        });
    };

    const submitForm = async (values) => {
        try {
            if (!params?.id) {
                await addDepartment(values);
            } else {
                await updateDepartment(params.id, values);
            }
            toastSuccessMessage();
            setTimeout(() => {
                navigate('/department-master');
            }, 5000);
        } catch (error) {
            toast.error(`Error: ${error.message}`, {
                position: "top-center",
            });
        }
    };

    useEffect(() => {
        const fetchUserType = async () => {
            try {
                if (params?.id) {
                    const response = await getDepartmentEdit(params.id);
                    const roleData = response.data;
                    setInitialValues(roleData);
                }
            } catch (error) {
                console.error("Error fetching User type:", error);
            }
        };
        if (params?.id) {
            fetchUserType();
        }
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
                                    <h4 className="heading mb-0">{params?.id ? "UPDATE" : "ADD"} DEPARTMENT MASTER</h4>
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
                                                            value={values.department}
                                                            hasError={errors.department && touched.department}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.department}
                                                            autoFocus={true}
                                                            id="department"
                                                            name="department"
                                                            placeholder="Department"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <select
                                                            className="form-select"
                                                            name="isActive"
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            value={values.isActive}
                                                        >
                                                            <option value="">Select Status</option>
                                                            <option value={true}>Active</option>
                                                            <option value={false}>Inactive</option>
                                                        </select>
                                                        {errors.isActive && touched.isActive && (
                                                            <div className="text-danger">{errors.isActive}</div>
                                                        )}
                                                    </div>
                                                    <div className="col-xl-6 mb-4 mt-2">
                                                        <div>
                                                            <button
                                                                className="btn btn-primary me-1"
                                                                type="submit"
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
    );
}

export default AddDepartmentMaster;
