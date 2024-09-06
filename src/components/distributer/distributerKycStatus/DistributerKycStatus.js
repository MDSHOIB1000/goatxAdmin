import { FaSearch } from "react-icons/fa";
import CustomDropdown from "../../../common/CustomDropdown";
import CustomInputField from "../../../common/CustomInputField";
import { Formik } from "formik";
function DistributerKycStatus({ submitForm, initialValues, params }) {
  return (
    <>
      <div className="row m-4">
        <div className="col-xl-12">
          <div className="card">
            <div className="card-body p-0">
              <div className="table-responsive active-projects style-1">
                <div className="tbl-caption tbl-caption-2">
                  <h4 className="heading mb-0"><b>Search &nbsp; &nbsp;{`${params?.name}`}  </b></h4>
                </div>
                <Formik
                  initialValues={initialValues}
                  // validate={validate}
                  onSubmit={submitForm}
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
                          <div className="col-xl-10 mb-3">
                            <CustomInputField
                              placeholder={"Searching Area"}
                              type="text"
                              value={values.merchant}
                              hasError={errors.merchant && touched.merchant}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              errorMsg={errors.merchant}
                              autoFocus={true}
                              id="merchant"
                            />
                          </div>

                          <div className="col-lg-2 col-md-12 mg-t-10 mg-sm-t-25">
                            <div className='d-flex justify-content-end'>
                              <button className="btn btn-primary pd-x-20  " type="submit"><i className="fas fa-search" disabled={!isValid || !dirty}></i> Search</button>
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
    </>
  );
}
export default DistributerKycStatus;
