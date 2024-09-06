
import CustomInputField from "../../../../common/CustomInputField";
import { Formik } from "formik";
function BankDetail({ initialValues, validate, submitForm, value, handleInput_A }) {
   
  return (
    <>
      <Formik
        initialValues={value}
        validate={validate}
        // onSubmit={submitForm}
        className="tbl-captionn"
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
                    placeholder="Name "
                    value={values?.bank_account_name}
                    hasError={errors.name && touched.name}
                    onChange={handleInput_A}
                    onBlur={handleBlur}
                    errorMsg={errors.name}
                    id="name"
                    name="name"
                  />
                </div>
                <div className="col-xl-4 mb-3">
                  <CustomInputField
                    type="text"
                    placeholder="Bank name "
                    value={values?.bank_name}
                    hasError={errors.bank_name && touched.bank_name}
                    onChange={handleInput_A}
                    onBlur={handleBlur}
                    errorMsg={errors.bank_name}
                    autoFocus={true}
                    id="bank_name"
                    name="bank_name"
                  />
                </div>
                <div className="col-xl-4 mb-3">
                  <CustomInputField
                    type="text"
                    placeholder="IFSC Code"
                    value={values?.bank_ifsc}
                    hasError={errors.ifsc && touched.ifsc}
                    onChange={handleInput_A}
                    onBlur={handleBlur}
                    errorMsg={errors.ifsc}
                    autoFocus={true}
                    id="ifsc"
                    name="ifsc"
                  />
                </div>
              
                <div className="col-xl-4 mb-3">
                  <CustomInputField
                    type="text"
                    placeholder="Account Number"
                    value={values?.bank_account_number}
                    hasError={errors.bankAccountnum && touched.bankAccountnum}
                    onChange={handleInput_A}
                    onBlur={handleBlur}
                    errorMsg={errors.bankAccountnum}
                    autoFocus={true}
                    id="Bank Account"
                    name="Bank Account"
                  />
                </div>
                <div className="col-xl-4 mb-3">
                  <CustomInputField
                    type="text"
                    placeholder="Account Type "
                    value={values?.account_type}
                    hasError={errors.AccountType && touched.AccountType}
                    onChange={handleInput_A}
                    onBlur={handleBlur}
                    errorMsg={errors.AccountType}
                    autoFocus={true}
                    id="AccountType"
                    name="AccountType"
                  />
                </div>
              </div>
            </form>
          );
        }}
      </Formik>


    </>
  );





}
export default BankDetail;
