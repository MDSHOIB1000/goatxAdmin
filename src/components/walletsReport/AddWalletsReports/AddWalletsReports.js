import { Formik } from "formik";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import CustomInputField from "../../../common/CustomInputField";
import { Link } from "react-router-dom";
import { usersList, walletsReport } from "../../../api/login/Login";


function AddWalletsReports() {
    const [conbo, setCombo] = useState(null)
    const [initialValues, setInitialValues] = useState({
        userid: '',
        amount: "",
        trans_type: '',
        type: '',
        orderId: '',
        message: "",
        operatorId: ''
    });
    // const params = useParams();
    const validate = (values) => {
        let errors = {};
        if (!values.amount) {
            errors.amount = "Amount is required";
        }
        if (!values.message) {
            errors.message = "Message is required";
        }
        return errors;
    };

    const toastSuccessMessage = () => {
        // toast.success(`${params?.id ? "Update" : "Add"} Country Successfully.`, {
        toast.success(`Add Wallets Reports Successfully.`, {
            position: "top-center",
        });
    };

    const userGetId = async () => {
        const res = await usersList()
        const findData = res.data.find((item) => {
            return (item._id);

        })
        const clone = { ...initialValues, userid: findData?._id }
        setInitialValues(clone)
    }



    const submitForm = async (values) => {

        try {
            const res = await walletsReport(values);
            if (res?.statusCode == "200") {
                toastSuccessMessage();
            }
        } catch (error) {

        }

        // try {
        //     if (!params?.id) {
        //         try {
        //             const res = await countryAdd(values);
        //             if (res?.statusCode == "200") {
        //                 toastSuccessMessage();
        //             }
        //         } catch (error) {

        //         }

        //     } else {
        //         try {
        //             await countryUpdate(params.id, values);
        //         } catch (error) {

        //         }

        //     }

        // } catch (error) {
        //     console.error("Error:", error);
        // }
    };

    useEffect(() => {
        userGetId()
    }, [])

    // useEffect(() => {
    //     const fetchCurrency = async () => {
    //         try {
    //             if (params?.id) {
    //                 const response = await getcountry(params.id);
    //                 const currencyData = response.data;
    //                 setInitialValues(currencyData);
    //             } else {
    //                 setInitialValues({
    //                     name: "",
    //                     code: "",
    //                     curruncy_id: "",
    //                 });
    //             }
    //         } catch (error) {
    //             console.error("Error fetching currency:", error);
    //         }
    //     };

    //     fetchCurrency();
    // }, [params?.id]);
    return (
        <>
            <div className="row">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0">
                                        {/* {params?.id ? "UPDATE" : "ADD"} COUNTRY */}
                                        ADD WALLETS REPORTS
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
                                                        <CustomInputField
                                                            type="number"
                                                            value={values.amount}
                                                            hasError={
                                                                errors.amount && touched.amount
                                                            }
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={
                                                                touched.amount && errors.amount
                                                            }
                                                            autoFocus={true}
                                                            id="amount"
                                                            name="amount"
                                                            placeholder="Enter Amount"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            value={values.message}
                                                            hasError={
                                                                errors.message && touched.message
                                                            }
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={
                                                                touched.message && errors.message
                                                            }
                                                            autoFocus={true}
                                                            id="message"
                                                            name="message"
                                                            placeholder="Message"
                                                        />
                                                    </div>

                                                    <div className="col-xl-6 mb-3">
                                                        <select className="form-select" aria-label="Default select example" name="trans_type" onChange={handleChange}>
                                                            <option selected>Select Transaction type</option>
                                                            <option value="refund">Refund</option>
                                                            <option value="recharge">Recharge</option>
                                                            <option value="transfer">Transfer</option>
                                                            <option value="order">Order</option>
                                                            <option value="bill_pay">bill_pay</option>
                                                            <option value="pan">Pan</option>
                                                            <option value="fastag">Fastag</option>
                                                            <option value="credit_card">Credit Card</option>
                                                            <option value="lic_bill">lic bill</option>
                                                            <option value="qr_code">qr_code</option>
                                                            <option value="add-wallet">add-wallet</option>
                                                            <option value="onBoarding">On Boarding</option>
                                                            <option value="fromAEPS">fromAEPS</option>
                                                            <option value="reversal">reversal</option>
                                                            <option value="ureversal">ureversal</option>
                                                            <option value="ucommission">commission</option>
                                                            <option value="validate_beneficiary">validate_beneficiary</option>
                                                            <option value="dmt">dmt</option>
                                                            <option value="dmt_rev">dmt_rev</option>
                                                            <option value="admintrf">admin transfer</option>
                                                            <option value="cms">CMS</option>
                                                        </select>

                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <select class="form-select" aria-label="Default select example" name="type" onChange={handleChange}>
                                                            <option selected>Select type</option>
                                                            <option value="credit">Credit</option>
                                                            <option value="debit">Debit</option>

                                                        </select>

                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            value={values.orderId}
                                                            hasError={
                                                                errors.orderId && touched.orderId
                                                            }
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={
                                                                touched.orderId && errors.orderId
                                                            }
                                                            autoFocus={true}
                                                            id="orderId"
                                                            name="orderId"
                                                            placeholder="Order Id"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            value={values.operatorId}
                                                            hasError={
                                                                errors.operatorId && touched.operatorId
                                                            }
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={
                                                                touched.operatorId && errors.operatorId
                                                            }
                                                            autoFocus={true}
                                                            id="operatorId"
                                                            name="operatorId"
                                                            placeholder="Operator Id"
                                                        />
                                                    </div>

                                                </div>
                                                <div>
                                                    {/* <Link
                                                        to="/member-list"
                                                        className="btn btn-danger light ms-1"
                                                    >
                                                        Cancel
                                                    </Link> */}
                                                    <button
                                                        className="btn btn-primary me-1"
                                                        type="submit"
                                                        disabled={!isValid || !dirty}
                                                    >
                                                        {/* {params?.id ? "Update" : "Add"} */}
                                                        Add
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
export default AddWalletsReports