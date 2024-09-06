import { Link, useNavigate, useParams } from "react-router-dom"
import { Field, Formik } from "formik";
import { ToastContainer, toast } from 'react-toastify';
import { useEffect, useState } from "react";
import CustomInputField from "../../../common/CustomInputField";
import Breadcrumbs from "../../../common/breadcrumb/Breadcrumbs";

function ChargesPayoutForm() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Commision",
        title_2: "Add Payout Reports",

    }
    const [initialValues, setInitialValues] = useState({
        vender_id: "<selector>",
        start_amt: "",
        end_amt: "",
        charge: "",
        charge_type: ""
    });
    const params = useParams()
    const navigate = useNavigate()

    const validate = (values) => {
        let errors = {};

        if (!values.start_amt) {
            errors.start_amt = "Min Amt is required";
        }
        if (!values.end_amt) {
            errors.end_amt = "Max Amt is required";
        }
        if (!values.charge) {
            errors.charge = "Charge is required";
        }
        if (!values.charge_type) {
            errors.charge_type = "Charge Type is required";
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
    /* const submitForm = async (values) => {
        try {
            if (!params?.id) {
                try {
                    const response = await addRole(values);
                    if (response?.statusCode === "200") {
                        toastSuccessMessage();
                        setTimeout(() => {
                            navigate('/role-master')
                        }, 5000);
                    } else {
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
    }, [params?.id]); */
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0"> {params?.id ? "UPDATE" : "ADD"}  PAYOUT</h4>
                                </div>
                                <Formik
                                    initialValues={initialValues}
                                    validate={validate}
                                    // onSubmit={submitForm}
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
                                                <div className="col-xl-6 mb-3" key={""}>
                                                    <Field as="select" name="" className="form-select" onChange={handleChange} onBlur={handleBlur} value={values?.vender?.name}>
                                                        <option value="">Select Vendor</option>
                                                       {/*  {options.map(item => (
                                                            <option key={item._id} value={item._id}>{item.name}</option>
                                                        ))} */}
                                                    </Field>
                                                    {/* <ErrorMessage name={name} component="div" className="text-danger" /> */}
                                                </div>
                                                    <div className="col-xl-6 mb-3">

                                                        <CustomInputField
                                                            type="text"
                                                            value={values?.start_amt}
                                                            hasError={errors.start_amt && touched.start_amt}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.start_amt}
                                                            autoFocus={true}
                                                            id="start_amt"
                                                            name="start_amt"
                                                            placeholder="Min Amount"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">

                                                        <CustomInputField
                                                            type="text"
                                                            value={values?.end_amt}
                                                            hasError={errors.end_amt && touched.end_amt}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.end_amt}
                                                            autoFocus={true}
                                                            id="end_amt"
                                                            name="end_amt"
                                                            placeholder="Max Amount"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">

                                                        <CustomInputField
                                                            type="text"
                                                            value={values?.charge}
                                                            hasError={errors.charge && touched.charge}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.charge}
                                                            autoFocus={true}
                                                            id="charge"
                                                            name="charge"
                                                            placeholder="Charge"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">

                                                        <CustomInputField
                                                            type="text"
                                                            value={values?.charge_type}
                                                            hasError={errors.charge_type && touched.charge_type}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.charge_type}
                                                            autoFocus={true}
                                                            id="charge_type"
                                                            name="charge_type"
                                                            placeholder="Charge Type"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-4 mt-2">
                                                        <div>
                                                            <Link to='/payout-charges' className="btn btn-danger light ms-1">Cancel</Link>
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

export default ChargesPayoutForm
