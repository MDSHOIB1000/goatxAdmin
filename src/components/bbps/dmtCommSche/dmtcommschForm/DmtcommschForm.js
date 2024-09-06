import { Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import CustomInputField from '../../../../common/CustomInputField';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Breadcrumbs from '../../../../common/breadcrumb/Breadcrumbs';
import { adddmtcommscheme, adddmtcommscheme2, getBppsID, getdmtcommschemeagId, relatedService, relatedService23, updatedmtcommschemeagId, updatedmtcommschemeagId2 } from '../../../../api/login/Login';
import { ToastContainer, toast } from 'react-toastify';

function DmtcommschForm() {
    const params = useParams()
    const navigate = useNavigate()
    const [services, setServices] = useState()
    const [initialValues, setInitialValues] = useState({
        name: "",
        service_id: "",
        isActive: false,

    });
    const validate = (values) => {
        let errors = {};

        // if (!values.name) {
        //     errors.name = "Scheme Name is required";
        // }
        // if (!values.service) {
        //     errors.name = "Scheme Service is required";
        // }
        return errors;
    };

    const toastSuccessMessage = () => {
        toast.success(`${params?.id ? "Update" : "Add"} BBPS Comm Scheme Successfully.`, {
            position: "top-right",
        });
    };
    const submitForm = async (values) => {
        try {
            if (!params?.id) {
                try {
                    const res = await adddmtcommscheme2(values);
                    if (res.statusCode == 200) {

                        toastSuccessMessage();
                    }
                    else {
                        alert(res.message)
                        return
                    }
                    setTimeout(() => {
                        navigate('/dmt-commision')
                    }, 2000);
                } catch (error) {

                }

            } else {
                try {
                    await updatedmtcommschemeagId2(params.id, values);
                    toastSuccessMessage();
                    setTimeout(() => {
                        navigate('/dmt-commision')
                    }, 2000);
                } catch (error) {

                }

            }

        } catch (error) {
            console.error("Error:", error);
        }

    }
    const fetchUserType = async () => {
        try {
            if (params?.id) {
                const response = await getdmtcommschemeagId(params.id);
                const userTypeData = response.data;
                setInitialValues(userTypeData);
            } else {
                setInitialValues({
                    name: "",
                    isActive: false,
                });
            }
        } catch (error) {
            console.error("Error fetching User type:", error);
        }
    };


    const fetchSercices = async () => {
        try {
            const response = await getBppsID();
            const userTypeData = response.data;
            setServices(userTypeData);
        } catch (error) {
            console.error("Error fetching User type:", error);
        }
    };
    console.log(services);
    
    /* const bbpsServicesId = async () => {
        try {
            const res = await getBppsID()
            if (res.statusCode === "200") {
                
            } else {
                throw new Error(res.message);
            }
        } catch (error) {
            alert(error.message)
        }
    } */
    useEffect(() => {
        fetchSercices()
        fetchUserType();
        // bbpsServicesId()


    }, [params?.id]);
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={""} />
            <ToastContainer />
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0"><b> ADD BBPS Commision SCHEME  - </b></h4>
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
                                                            value={values.name}
                                                            hasError={errors.name && touched.name}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.name}
                                                            autoFocus={true}
                                                            id="name"
                                                            placeholder="Scheme Name"
                                                            name="name"
                                                        />
                                                    </div>
                                                    <div className='col-xl-4 mb-3'>
                                                        <select class="form-select" aria-label="Default select example" id="service_id" name="service_id"
                                                            value={values?.service_id} onChange={handleChange}>
                                                            <option> select service</option>
                                                            {services && services?.map((item) => {
                                                                return <option value={item?.id}>{item?.service_name}</option>
                                                            })}
                                                        </select>
                                                    </div>

                                                    <div className='col-xl-4 mb-3'>
                                                        <select class="form-select" aria-label="Default select example" id="isActive" name="isActive"
                                                            defaultValue={values?.isActive} onChange={handleChange}><option disabled> select Status</option><option value={true}>Active</option><option value={false}>Inactive</option></select>
                                                    </div>
                                                    
                                                    <div>
                                                        <Link
                                                            to="/dmt-commision"
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
    )
}

export default DmtcommschForm