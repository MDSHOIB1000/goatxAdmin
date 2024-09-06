import { Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import CustomInputField from '../../../../common/CustomInputField';
import Breadcrumbs from '../../../../common/breadcrumb/Breadcrumbs';
import { UserTypeUpdate, addUserType, getUserType } from '../../../../api/login/Login';
import { ToastContainer, toast } from 'react-toastify';
import { useParams } from 'react-router';
import { Link, useNavigate } from 'react-router-dom';

const AddUsertType = () => {
    const params = useParams()
    const navigate = useNavigate()
    const [initialValues, setInitialValues] = useState({
        user_type: "",
        lockedAmount: "",
        is_active: false,
        
    });
    const validate = (values) => {
        let errors = {};
        if (!values.user_type) {
            errors.user_type = "User Type  is required";
        }
        return errors;
    };
   
    const toastSuccessMessage = () => {
        toast.success(`${params?.id ? "Update" : "Add"} Users Type Successfully.`, {
            position: "top-center",
        });
    };
    const submitForm = async (values) => {
        try {
            if (!params?.id) {
                try {
                    await addUserType(values);
                    toastSuccessMessage();
                    setTimeout(() => {
                        navigate('/user-type')
                    }, 5000);
                } catch (error) {

                }

            } else {
                try {
                    await UserTypeUpdate(params.id, values);
                    toastSuccessMessage();
                    setTimeout(() => {
                        navigate('/user-type')
                    }, 5000);
                } catch (error) {

                }

            }

        } catch (error) {
            console.error("Error:", error);
        }

    }
    useEffect(() => {
        const fetchUserType = async () => {
            try {
                if (params?.id) {
                    const response = await getUserType(params.id);
                    const userTypeData = response.data;
                    setInitialValues(userTypeData);
                } else {
                    setInitialValues({
                        user_type: "",
                        language_id: "65d4443e0298611d3aa96c31",
                        id: "1",
                        is_active: 'false',
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

            <Breadcrumbs breadCrumbsTitle={""} />
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0">
                                        {params?.id ? "UPDATE" : "ADD"} USER TYPE
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
                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            value={values.user_type}
                                                            hasError={
                                                                errors.user_type && touched.user_type
                                                            }
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={
                                                                touched.user_type && errors.user_type
                                                            }
                                                            autoFocus={true}
                                                            id="user_type"
                                                            name="user_type"
                                                            placeholder="User Type"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            value={values.lockedAmount}
                                                            hasError={
                                                                errors.lockedAmount && touched.lockedAmount
                                                            }
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={
                                                                touched.lockedAmount && errors.lockedAmount
                                                            }
                                                            autoFocus={true}
                                                            id="lockedAmount"
                                                            name="lockedAmount"
                                                            placeholder="locked Amount"
                                                        />
                                                    </div>

                                                    <div className="col-xl-4 mb-3">
                                                        <select className="form-select" aria-label="Default select example" id="is_active" name="is_active"
                                                            defaultValue={values?.is_active}
                                                            onChange={handleChange}
                                                        >
                                                            <option selected> select Mode</option>
                                                            <option value={'true'}> Yes</option>
                                                            <option value={'false'}> No</option>
                                                        </select>

                                                    </div>
                                                </div>
                                                <div>
                                                    <Link
                                                        to="/user-type"
                                                        className="btn btn-danger light ms-1"
                                                    >
                                                        Cancel
                                                    </Link>
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

export default AddUsertType
