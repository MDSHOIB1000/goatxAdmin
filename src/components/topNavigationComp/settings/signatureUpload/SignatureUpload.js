import { Link } from "react-router-dom"
import logo from '../../../../assets/images/logo/merchant.paypanda-logo.png'
import { Formik } from "formik";
import CustomInputField from "../../../../common/CustomInputField";
const initialValues = {
    signature: "",
}
function SignatureUpload() {
    const validate = (values) => {
        let errors = {};
        if (!values.signature) {
            errors.signature = "signature is required";
        }
    }

    const submitForm = (values) => {
        console.log(values);
    };
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
                        errors,
                        touched,
                        handleBlur,
                        isValid,
                        dirty,
                    } = formik;
                    return (
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="card">
                                    <div className="card-body p-0">
                                        <div className="table-responsive active-projects style-1">
                                            <div className="tbl-caption tbl-caption-2">
                                                <h4 className="heading mb-0">SIGNATURE UPLOAD</h4>
                                            </div>
                                            <form className="tbl-captionn">
                                                <div className="row">
                                                    <div className="col-xl-6 mb-3">
                                                        <CustomInputField
                                                            type="file"
                                                            placeholder="upload signature *"
                                                            value={values.signature}
                                                            hasError={errors.signature && touched.signature}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.signature}
                                                            autoFocus={true}
                                                            id="signature"
                                                        />
                                                        {/* <label htmlFor="exampleFormControlInput1" className="form-label mt-3">Width:160 ,Height:45</label> */}
                                                    </div>



                                                    <div className="col-xl-6 mb-3 mt-4-2">
                                                        <Link to='service-master' className="btn btn-danger light ms-1">Cancel</Link>
                                                        <button className="btn btn-primary me-1">Submit</button>
                                                    </div>
                                                </div>
                                            </form>
                                            <div className="tbl-captionn row">
                                                <div className="col-xl-6 mb-3">
                                                    <label htmlFor="exampleFormControlInput1" className="form-label">Current Signature<span className="text-danger">*</span></label>
                                                    <img src={logo} style={{ width: '100%', height: '150px' }} alt="" />
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                }}
            </Formik>
        </>
    )
}
export default SignatureUpload