import { Formik } from 'formik';
import CustomInputField from '../../../common/CustomInputField';
import { useEffect, useState } from 'react';
import { walletsReportFilter } from '../../../api/login/Login';
const initialValues = { from: "", to: "" }
function VirtualWalletFills({ submitForm, page }) {
    // const params = useParams();
    const today = new Date();
    const [initialValues, setInitialValues] = useState({
        min_amt: '',
        max_amt: "",
        start_date: `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`,
        end_date: `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`,
        type: '',
        trans_type: "",
        page: page,
    });
    const validate = (values) => {
        let errors = {};
        // if (!values.amount) {
        //     errors.amount = "Amount is required";
        // }
        return errors;
    };
    return (
        <>
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0"><b>Virtual Report Search </b></h4>
                                </div>
                                <Formik
                                    initialValues={initialValues}
                                    validate={validate}
                                    onSubmit={submitForm}
                                    enableReinitialize
                                    className="tbl-captionn"
                                >
                                    {(formik) => {
                                        const {
                                            values,
                                            handleChange,
                                            handleSubmit,
                                            resetForm,
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
                                                        <select class="form-select" aria-label="Default select example" value={values.trans_type} name="trans_type" onChange={handleChange}>
                                                            <option selected>Select Transaction type</option>
                                                            <option value="refund">Refund</option>
                                                            <option value="recharge">Recharge</option>
                                                            <option value="transfer">Transfer</option>
                                                            <option value="order">Order</option>
                                                            <option value="bill_pay">Bill Pay</option>
                                                            <option value="pan">Pan</option>
                                                            <option value="fastag">Fastag</option>
                                                            <option value="credit_card">Credit Card</option>
                                                            <option value="lic_bill">LIC Bill</option>
                                                            <option value="qr_code">QR Code</option>
                                                            <option value="add_wallet">Add Wallet</option>
                                                            <option value="onBoarding">OnBoarding</option>
                                                            <option value="fromAEPS">From AEPS</option>
                                                            <option value="reversal">Reversal</option>
                                                            <option value="ureversal">Ureversal</option>
                                                            <option value="ucommission">Ucommission</option>
                                                            <option value="validate_beneficiary">Validate Beneficiary</option>
                                                            <option value="dmt">DMT</option>
                                                            <option value="dmt_rev">DMT Rev</option>
                                                            <option value="admintrf">Admin Transfer</option>
                                                            <option value="cms">CMS</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="date"
                                                            placeholder="From "
                                                            value={values.start_date}
                                                            hasError={errors.start_date && touched.start_date}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.start_date}
                                                            autoFocus={true}
                                                            id="start_date"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="date"
                                                            placeholder="To "
                                                            value={values.end_date}
                                                            hasError={errors.end_date && touched.end_date}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.end_date}
                                                            autoFocus={true}
                                                            id="end_date"
                                                        />

                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <select class="form-select" aria-label="Default select example" value={values.type} name="type" onChange={handleChange}>
                                                            <option selected> Select type</option>
                                                            <option value="credit">credit</option>
                                                            <option value="debit">debit</option>
                                                        </select>
                                                    </div>

                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="number"
                                                            placeholder="Min Amount"
                                                            value={values.min_amt}
                                                            hasError={errors.min_amt && touched.min_amt}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.min_amt}
                                                            autoFocus={true}
                                                            id="min_amt"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="number"
                                                            placeholder="Max Amount"
                                                            value={values.max_amt}
                                                            hasError={errors.max_amt && touched.max_amt}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.max_amt}
                                                            autoFocus={true}
                                                            id="max_amt"
                                                        />
                                                    </div>

                                                    <div className="col-lg-4 col-md-4 mg-t-10 mg-sm-t-25">
                                                        <button
                                                            className="btn btn-primary me-1"
                                                            type="submit"
                                                        // disabled={!isValid || !dirty}
                                                        >
                                                            {/* {params?.id ? "Update" : "Add"} */}
                                                            Search
                                                        </button>
                                                        <button className="btn btn-warning pd-x-20  " type="button" onClick={resetForm}><i className="fas fa-refresh"></i> Reset</button>
                                                        {/* <button className="btn btn-danger pd-x-20 rounded-0" type="button" data-toggle="modal" data-target="#transaction_download_model"><i className="fas fa-download"></i> Download</button> */}
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

export default VirtualWalletFills