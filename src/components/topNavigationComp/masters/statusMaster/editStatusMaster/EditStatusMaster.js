import { Formik } from "formik";
import { Link } from "react-router-dom"
import CustomInputField from "../../../../../common/CustomInputField";
import Breadcrumbs from "../../../../../common/breadcrumb/Breadcrumbs";
const breadCrumbsTitle = {
    id: "1",
    title_1: "Master",
    title_2: "status Master",
    path_2:"/status-master",
    title_3: "Update status Master",
    path_3:"/edit-status-master",
}
function EditStatusMaster() {
    const initialValues = {
        statusTitle: ''
    }

    const validate = (values) => {
        let errors = {};
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const regexMobileNumber = /^(\+\d{1,3}\s?\d{1,14}|\d{5,15})$/;
        const regexPanNumber = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
        const regexGstNumber =
            /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}[Z]{1}[0-9A-Z]{1}$/;

        if (!values.statusTitle) {
            errors.statusTitle = "Status Title is required";
        }

        // if (!values.email) {
        //     errors.email = "Email is required";
        // } else if (!regexEmail.test(values.email)) {
        //     errors.email = "Invalid Email";
        // }

        // if (!values.mobileNumber) {
        //     errors.mobileNumber = "Mobile Number is required";
        // } else if (!regexMobileNumber.test(values.mobileNumber)) {
        //     errors.mobileNumber = "Invalid Mobile Number";
        // }

        // if (!values.panNumber) {
        //     errors.panNumber = "PAN Number is required";
        // } else if (!regexPanNumber.test(values.panNumber)) {
        //     errors.panNumber = "Invalid PAN Number";
        // }

        // if (!values.gstNumber) {
        //   errors.gstNumber = "GST Number is required";
        // } else if (!regexGstNumber.test(values.gstNumber)) {
        //   errors.gstNumber = "Invalid GST Number";
        // }



        return errors;
    };

    const submitForm = (values) => {
        console.log(values);
    };

    const changeHandle = (selectedData) => {
        // TODO
    };
    return (
        <>
        <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle}/>
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0">UPDATE STATUS MASTER</h4>
                                </div>
                                <Formik
                                    initialValues={initialValues}
                                    validate={validate}
                                    onSubmit={submitForm}

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
                                            <form className="tbl-captionn">
                                                <div className="row">
                                                    <div className="col-xl-6 mb-3">

                                                        <CustomInputField
                                                            type="text"
                                                            value={values.statusTitle}
                                                            hasError={errors.statusTitle && touched.statusTitle}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.statusTitle}
                                                            autoFocus={true}
                                                            id="statusTitle"
                                                            name="statusTitle"
                                                            placeholder="Status Title "
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-4 mt-2">
                                                        <div>
                                                            <Link to='/status-master' className="btn btn-danger light ms-1">Cancel</Link>
                                                            <button className="btn btn-primary me-1">Submit</button>
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
    )
}
export default EditStatusMaster