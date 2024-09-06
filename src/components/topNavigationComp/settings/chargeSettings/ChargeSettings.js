import { Link } from "react-router-dom";
import CustomInputField from "../../../../common/CustomInputField";
import { Formik } from "formik";
import { chargesUpdateSettings, getchargesSettings } from "../../../../api/login/Login";
import { useEffect, useState } from "react";
import Loadar from "../../../../common/loader/Loader";
import { ToastContainer, toast } from "react-toastify";

function ChargeSettings() {
    const token = window.localStorage.getItem("userToken");
    const [initialValues, setInitialValues] = useState({
        bankVerificationCharge: "",
        aeps_onBoardingCharge: "",
        minAepsToMainWallet: "",
        dmtApiType: "",
        defaultApi: "",
        aeps_onBoardingDefaultBank: "",
    });
    const [loading, setLoading] = useState(false);

    const validate = (values) => {
        let errors = {};

        if (values.bankVerificationCharge === "") {
            errors.bankVerificationCharge = "Account Verification Charge is required";
        }

        if (values.aeps_onBoardingCharge === "") {
            errors.aeps_onBoardingCharge = "AEPS Onboarding Charge is required";
        }
        if (values.minAepsToMainWallet === "") {
            errors.minAepsToMainWallet = "Min AEPS To Main Wallet is required";
        }
        return errors;
    };

    const toastSuccessMessage = () => {
        toast.success("Charge Settings Updated Successfully.", {
            position: "top-center",
        });
    };

    const toastErrorMessage = (message) => {
        toast.error(message, {
            position: "top-center",
        });
    };

    const submitForm = async (values) => {
        try {
            setLoading(true);
            const errors = validate(values);
            if (Object.keys(errors).length > 0) {
                setLoading(false);
                Object.values(errors).forEach((error) => toastErrorMessage(error));
                return;
            }
            const res = await chargesUpdateSettings(values);
            toastSuccessMessage();
            setLoading(false);
        } catch (error) {
            setLoading(false);
            toastErrorMessage("Error updating charge settings");
        }
    };

    useEffect(() => {
        const fetchUserType = async () => {
            try {
                setLoading(true);
                const response = await getchargesSettings({ token });
                setInitialValues(response?.data);
                setLoading(false);
            } catch (error) {
                alert("Error fetching charges SETTINGS:", error);
                setLoading(false);
            }
        };
        fetchUserType();
    }, []);

    const handleChange2 = (e) => {
        const clone = { ...initialValues }
        clone[e.target.id] = e.target.value
        if (e.target.value < 0) {
            return
        }
        setInitialValues(clone)
    }

    return (
        <>
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

                    const handleDmtApiTypeChange = (e) => {
                        const { value } = e.target;
                        setInitialValues((prevState) => ({
                            ...prevState,
                            dmtApiType: value,
                            defaultApi: value,
                        }));
                    };

                    return (
                        <div className="row m-4">
                            {loading && <Loadar />}
                            <div className="col-xl-12">
                                <div className="card">
                                    <div className="card-body p-0">
                                        <div className="table-responsive active-projects style-1">
                                            <div className="tbl-caption">
                                                <h4 className="heading mb-0">Charges</h4>
                                            </div>
                                            <form className="tbl-captionn" onSubmit={handleSubmit}>
                                                <div className="row">
                                                    <div className="col-xl-6 mb-3">
                                                        <CustomInputField
                                                            type="number"
                                                            placeholder="Account Verification Charge"
                                                            value={values.bankVerificationCharge}
                                                            hasError={errors.bankVerificationCharge && touched.bankVerificationCharge}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.bankVerificationCharge}
                                                            id="bankVerificationCharge"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <CustomInputField
                                                            type="number"
                                                            placeholder="AEPS Onboarding Charge"
                                                            value={values.aeps_onBoardingCharge}
                                                            hasError={errors.aeps_onBoardingCharge && touched.aeps_onBoardingCharge}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.aeps_onBoardingCharge}
                                                            id="aeps_onBoardingCharge"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <CustomInputField
                                                            type="number"
                                                            placeholder="Min AEPS To Main Wallet"
                                                            value={values.minAepsToMainWallet}
                                                            hasError={errors.minAepsToMainWallet && touched.minAepsToMainWallet}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.minAepsToMainWallet}
                                                            id="minAepsToMainWallet"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="tbl-caption">
                                                    <h4 className="heading mb-0">DMT</h4>
                                                </div>
                                                <div className="row">
                                                    <div className="col-xl-6 my-3">
                                                        <select
                                                            className="form-select"
                                                            aria-label="Default select example"
                                                            id="dmtApiType"
                                                            name="dmtApiType"
                                                            value={values.dmtApiType}
                                                            onChange={handleDmtApiTypeChange}
                                                            hasError={errors.dmtApiType && touched.dmtApiType}
                                                            onBlur={handleBlur}
                                                            errorMsg={touched.dmtApiType && errors.dmtApiType}
                                                        >
                                                            <option value="" disabled>SELECT DMT API TYPE</option>
                                                            <option value="eko">EKO</option>
                                                            <option value="Paysprint">PAYSPRINT</option>
                                                            <option value="both">BOTH</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-xl-6 my-3">
                                                        <select
                                                            className="form-select"
                                                            aria-label="Default select example"
                                                            id="defaultApi"
                                                            name="defaultApi"
                                                            disabled={values.dmtApiType === "eko" || values.dmtApiType === "Paysprint"}
                                                            value={values.defaultApi}
                                                            onChange={handleChange}
                                                            hasError={errors.defaultApi && touched.defaultApi}
                                                            onBlur={handleBlur}
                                                            errorMsg={touched.defaultApi && errors.defaultApi}
                                                        >
                                                            <option value="" disabled>SELECT DEFAULT API</option>
                                                            <option value="eko">EKO</option>
                                                            <option value="Paysprint">PAYSPRINT</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="tbl-caption">
                                                    <h4 className="heading mb-0">AEPS</h4>
                                                </div>
                                                <div className="row">
                                                    <div className="col-xl-6 my-3">
                                                        <select
                                                            className="form-select"
                                                            aria-label="Default select example"
                                                            id="aeps_onBoardingDefaultBank"
                                                            name="aeps_onBoardingDefaultBank"
                                                            value={values.aeps_onBoardingDefaultBank}
                                                            onChange={handleChange}
                                                            hasError={errors.aeps_onBoardingDefaultBank && touched.aeps_onBoardingDefaultBank}
                                                            onBlur={handleBlur}
                                                            errorMsg={touched.aeps_onBoardingDefaultBank && errors.aeps_onBoardingDefaultBank}
                                                        >
                                                            <option value="" disabled>SELECT AEPS ON BOARDING DEFAULT BANK</option>
                                                            <option value="bank2">BANK 2</option>
                                                            <option value="bank3">BANK 3</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div>
                                                    <button className="btn btn-primary me-1" type="submit" disabled={!isValid || !dirty}>
                                                        Update
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ToastContainer className="text-center" />
                        </div>
                    );
                }}
            </Formik>
        </>
    );
}

export default ChargeSettings;