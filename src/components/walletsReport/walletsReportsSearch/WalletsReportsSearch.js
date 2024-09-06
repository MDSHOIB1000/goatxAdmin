import { Formik } from 'formik';
import CustomInputField from '../../../common/CustomInputField';
import { useEffect, useState } from 'react';
import { walletsReportFilter } from '../../../api/login/Login';
const initialValues = { from: "", to: "" }
function WalletsReportsSearch({ initialValues, submitForm, page }) {
    // const params = useParams();
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
                                    <h4 className="heading mb-0"><b>Wallets Report Search - </b></h4>
                                </div>
                                <Formik
                                    initialValues={initialValues}
                                    validate={validate}
                                    onSubmit={() => { submitForm(page, initialValues) }}
                                    enableReinitialize
                                    className="tbl-captionn"
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
                                                        <select class="form-select" aria-label="Default select example" name="trans_type" onChange={handleChange}>
                                                            <option selected>Select Transaction type</option>
                                                            <option value="refund">Refund</option>
                                                            <option value="2">Recharge</option>
                                                            <option value="transfer">Transfer</option>
                                                            <option value="3">Order</option>
                                                            <option value="3">bill_pay</option>
                                                            <option value="3">pan</option>
                                                            <option value="3">fastag</option>
                                                            <option value="3">credit_card</option>
                                                            <option value="3">lic_bill</option>
                                                            <option value="3">qr_code</option>
                                                            <option value="3">add-wallet</option>
                                                            <option value="3">onBoarding</option>
                                                            <option value="3">fromAEPS</option>
                                                            <option value="3">reversal</option>
                                                            <option value="3">ureversal</option>
                                                            <option value="3">ucommission</option>
                                                            <option value="3">validate_beneficiary</option>
                                                            <option value="3">dmt</option>
                                                            <option value="3">dmt_rev</option>
                                                            <option value="3">admintrf</option>
                                                            <option value="3">cms</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="date"
                                                            placeholder="From *"
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
                                                            placeholder="To *"
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
                                                        <select class="form-select" aria-label="Default select example" name="type" onChange={handleChange}>
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
                                                            Search
                                                        </button>
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
export default WalletsReportsSearch