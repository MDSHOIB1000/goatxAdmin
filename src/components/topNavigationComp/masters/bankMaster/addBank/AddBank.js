import { Formik } from "formik";
import { Link, useNavigate, useParams } from "react-router-dom"
import CustomInputField from "../../../../../common/CustomInputField";
import Breadcrumbs from "../../../../../common/breadcrumb/Breadcrumbs";
import { useEffect, useState } from "react";
import { bankMasterAdd, bankMasterUpdate, getBnakMasterId } from "../../../../../api/login/Login";
import { ToastContainer, toast } from "react-toastify";

function AddBank() {

    const breadCrumbsTitle = {
        id: "1",
        title_1: "Master",
        title_2: " Bank Master",
        path_2: "/bank-master",
        title_3: "Add Bank Master",
        path_3: "/add-bank",
    }
    const [initialValues, setInitialValues] = useState({
        bank_name: "",
        bank_code: "",
        branch_name: "",
        branch_no: "",
        ifsc_code: '',
        bank_id: '',
        eko_bank_code: '',
        paysprint_bank_id: '',
        remark: '',
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

        if (!values?.bank_name) {
            errors.bank_name = "Bank Name  is required";
        }
        if (!values?.branch_name) {
            errors.branch_name = "Branch Name  is required";
        }
        if (!values?.bank_account_number) {
            errors.bank_account_number = "Bank Account Number  is required";
        }
        // if (!values?.bank_code) {
        //     errors.bank_code = "Bank Code  is required";
        // }
        if (!values?.ifsc_code) {
            errors.ifsc_code = "IFSC Code is required";
        }
        // if (!values?.bank_id) {
        //     errors.bank_id = "Bank ID is required";
        // }
        // if (!values?.eko_bank_code) {
        //     errors.eko_bank_code = "Eko Bank Code is required";
        // }
        // if (!values?.paysprint_bank_id) {
        //     errors.paysprint_bank_id = "Paysprint Bank Id is required";
        // }

        return errors;
    };

    const toastSuccessMessage = () => {
        toast.success(`${params?.id ? "Update" : "Add"} Bank Master Successfully.`, {
            position: "top-center",
        });
    };

    const submitForm = async (values) => {
        try {
            if (!params?.id) {
                try {
                    const res = await bankMasterAdd(values);
                    if (res?.statusCode == "200") {
                        toastSuccessMessage();
                        setTimeout(() => {
                            navigate('/bank-master')
                        }, [4000])
                    }
                } catch (error) {

                }

            } else {
                try {
                    const res = await bankMasterUpdate(params.id, values);
                    if (res?.statusCode == "200") {
                        toastSuccessMessage();
                        setTimeout(() => {
                            navigate('/bank-master')
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
                    const response = await getBnakMasterId(params.id);
                    const currencyData = response.data;
                    setInitialValues(currencyData);
                } else {
                    setInitialValues({
                        bank_name: "",
                        bank_code: "",
                        branch_name: "",
                        ifsc_code: '',
                        bank_id: '',
                        eko_bank_code: '',
                        paysprint_bank_id: '',
                        is_active: true
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
                                        {params?.id ? "UPDATE" : "ADD"}  BANK MASTER

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
                                                        <select class="form-select" aria-label="Default select example" value={values?.banktype} name="banktype" onChange={handleChange}>
                                                            <option selected> select Bank Type</option>
                                                            <option value={'Bank Transfer'}>Bank Transfer</option>
                                                            <option value={'CDM'}>   CDM (Cash Deposite)</option>
                                                            <option value={'Branch'}>Branch (Cash Deposite)</option>

                                                        </select>
                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            value={values?.bank_name}
                                                            hasError={errors.bank_name && touched.bank_name}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.bank_name}
                                                            autoFocus={true}
                                                            id="bank_name"
                                                            name="bank_name"
                                                            placeholder="Bank Name"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            value={values?.branch_name}
                                                            hasError={errors.branch_name && touched.branch_name}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.branch_name}
                                                            autoFocus={true}
                                                            id="branch_name"
                                                            name="branch_name"
                                                            placeholder="Branch Name"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">

                                                        <CustomInputField
                                                            type="number"
                                                            value={values?.bank_code}
                                                            hasError={errors.bank_code && touched.bank_code}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.bank_code}
                                                            autoFocus={true}
                                                            id="bank_code"
                                                            name="bank_code"
                                                            placeholder="Bank Code"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">

                                                        <CustomInputField
                                                            type="number"
                                                            value={values?.bank_account_number}
                                                            hasError={errors.bank_account_number && touched.bank_account_number}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.bank_account_number}
                                                            autoFocus={true}
                                                            id="bank_account_number"
                                                            name="bank_account_number"
                                                            placeholder="Account Number"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            value={values?.ifsc_code}
                                                            hasError={errors.ifsc_code && touched.ifsc_code}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.ifsc_code}
                                                            autoFocus={true}
                                                            id="ifsc_code"
                                                            name="ifsc_code"
                                                            placeholder="IFSC Code"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">

                                                        <CustomInputField
                                                            type="number"
                                                            value={values?.bank_id}
                                                            hasError={errors.bank_id && touched.bank_id}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.bank_id}
                                                            autoFocus={true}
                                                            id="bank_id"
                                                            name="bank_id"
                                                            placeholder="Bank ID"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">

                                                        <CustomInputField
                                                            type="number"
                                                            value={values?.eko_bank_code}
                                                            hasError={errors.eko_bank_code && touched.eko_bank_code}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.eko_bank_code}
                                                            autoFocus={true}
                                                            id="eko_bank_code"
                                                            name="eko_bank_code"
                                                            placeholder="Eko Bank Code"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">

                                                        <CustomInputField
                                                            type="text"
                                                            value={values?.paysprint_bank_id}
                                                            hasError={errors.paysprint_bank_id && touched.paysprint_bank_id}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.paysprint_bank_id}
                                                            autoFocus={true}
                                                            id="paysprint_bank_id"
                                                            name="paysprint_bank_id"
                                                            placeholder="Paysprint Bank Id"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">

                                                        <CustomInputField
                                                            type="text"
                                                            value={values?.remark}
                                                            // hasError={errors.paysprint_bank_id && touched.paysprint_bank_id}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            // errorMsg={errors.paysprint_bank_id}
                                                            autoFocus={true}
                                                            id="remark"
                                                            name="remark"
                                                            placeholder="Remark "
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <select class="form-select" aria-label="Default select example" value={values?.is_active} name="is_active" onChange={handleChange}>
                                                            <option selected>Open this select menu</option>
                                                            <option value={true}>Active</option>
                                                            <option value={false}>In Active</option>

                                                        </select>
                                                    </div>
                                                </div>
                                                <div>
                                                    <Link to='/bank-master' className="btn btn-danger light ms-1">Cancel</Link>
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
export default AddBank