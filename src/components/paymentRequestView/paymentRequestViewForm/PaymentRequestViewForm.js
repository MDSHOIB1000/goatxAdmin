import { useState } from "react";
import PaymentRequestViewDownload from "./paymentRequestViewDownload/PaymentRequestViewDownload";
import { FaSearch } from "react-icons/fa";
import CustomInputField from "../../../common/CustomInputField";
import { Formik } from "formik";
import Loader from "../../../common/loader/Loader";
import Select from "react-select";

const initialValues = {
  user: '',
  user_id: '',
  count: 0,
  page: 1,
  min_amt: '',
  max_amt: '',
  end_date: '',
  start_date: '',
  bank: "",
  method: "",
  status: "",
};

function PaymentRequestViewForm({ submitForm, loading, page, count, token, userData }) {
  const [modalShow, setModalShow] = useState(false);
  const today = new Date();
  const formattedDate = `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`;

  const initialValues = {
    user: '',
    user_id: token,
    count: count,
    page: page,
    min_amt: '',
    max_amt: '',
    end_date: formattedDate,
    start_date: formattedDate,
    bank: "",
    method: "",
    status: "",
  };

  const validate = (values) => {
    let errors = {};
    // Custom validation logic can be added here
    return errors;
  };

  const userOptions = userData ? userData.map((user) => ({
    value: user._id,
    label: user.name,
  })) : [];

  return (
    <>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={submitForm}
        className="tbl-captionn"
      >
        {(formik) => {
          const {
            values,
            handleChange,
            handleSubmit,
            resetForm,
            setFieldValue,
            errors,
            touched,
            handleBlur,
          } = formik;

          return (
            <div className="row m-4">
              <div className="col-xl-12">
                <div className="card">
                  <div className="card-body p-0">
                    <div className="table-responsive active-projects style-1">
                      <div className="tbl-caption tbl-caption-2">
                        <h4 className="heading mb-0">PAYMENT REQUEST VIEW</h4>
                      </div>
                      <form className="tbl-captionn" onSubmit={handleSubmit}>
                        <div className="row">
                          <div className="col-xl-3 mb-3">
                            <CustomInputField
                              type="date"
                              placeholder="Start Date"
                              value={values.start_date}
                              hasError={errors.start_date && touched.start_date}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              errorMsg={errors.start_date}
                              id="start_date"
                            />
                          </div>
                          <div className="col-xl-3 mb-3">
                            <CustomInputField
                              type="date"
                              placeholder="End Date"
                              value={values.end_date}
                              hasError={errors.end_date && touched.end_date}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              errorMsg={errors.end_date}
                              id="end_date"
                            />
                          </div>
                          <div className="col-xl-3 mb-3">
                            <CustomInputField
                              type="number"
                              placeholder="Min Amount"
                              value={values.min_amt}
                              hasError={errors.min_amt && touched.min_amt}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              errorMsg={errors.min_amt}
                              id="min_amt"
                            />
                          </div>
                          <div className="col-xl-3 mb-3">
                            <CustomInputField
                              type="number"
                              placeholder="Max Amount"
                              value={values.max_amt}
                              hasError={errors.max_amt && touched.max_amt}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              errorMsg={errors.max_amt}
                              id="max_amt"
                            />
                          </div>
                          <div className="col-xl-3 mb-3">
                            <CustomInputField
                              type="text"
                              placeholder="Bank Name"
                              value={values.bank}
                              hasError={errors.bank && touched.bank}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              errorMsg={errors.bank}
                              id="bank"
                            />
                          </div>
                          <div className="col-xl-3 mb-3">
                            <Select
                              id="user"
                              name="user"
                              options={userOptions}
                              value={userOptions.find(option => option.value === values.user)}
                              onChange={option => setFieldValue("user", option.value)}
                              onBlur={handleBlur}
                              placeholder="Select User"
                              isLoading={loading}
                            />
                          </div>
                          <div className="col-xl-3 mb-3">
                            <select
                              className="form-select"
                              id="method"
                              name="method"
                              value={values.method}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            >
                              <option value="" disabled>Select Method</option>
                              <option value="NEFT">NEFT</option>
                              <option value="RTGS">RTGS</option>
                              <option value="IMPS">IMPS</option>
                              <option value="cashdeposit">CASH Deposit</option>
                              <option value="qrpayment">QR PAYMENT</option>
                              <option value="upipayment">UPI PAYMENT</option>
                            </select>
                          </div>
                          <div className="col-xl-3 mb-3">
                            <select
                              className="form-select"
                              id="status"
                              name="status"
                              value={values.status}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            >
                              <option value="" disabled>Select Status</option>
                              <option value="Pending" className="option-pending">Pending</option>
                              <option value="Approved" className="option-approved">Approved</option>
                              <option value="In progress" className="option-in-progress">In progress</option>
                              <option value="Reject" className="option-reject">Reject</option>
                            </select>
                          </div>
                          <div className="col-sm-3 mg-sm-t-25">
                            <div className="form-group">
                              <button className="btn btn-primary pd-x-20" type="submit"><FaSearch /> Search</button>
                              <button className="btn btn-warning pd-x-20" type="button" onClick={resetForm}>Reset</button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <PaymentRequestViewDownload show={modalShow} onHide={() => setModalShow(false)} />
            </div>
          );
        }}
      </Formik>
    </>
  );
}

export default PaymentRequestViewForm;
