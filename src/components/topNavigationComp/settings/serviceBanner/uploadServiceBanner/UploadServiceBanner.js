import { Formik } from "formik";
import { Link } from "react-router-dom"
import CustomInputField from "../../../../../common/CustomInputField";
import CustomDropdown from "../../../../../common/CustomDropdown";

const initialValues = {
    banner: ""
}
function UploadServiceBanner() {
    const itemList = [
        {
            name: "Mobile",
            value: "Mobile",
        }
    ]
    const validate = (values) => {
        let errors = {};
        if (!values.banner) {
            errors.banner = "Banner Image is required";
        }
    }
    const changeHandle =(selectedData) => {
        //todo
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
                                                <h4 className="heading mb-0">UPLOAD SERVICE BANNER</h4>
                                            </div>
                                            <form className="tbl-captionn">
                                                <div className="row">
                                                    <div className="col-xl-6 mb-3">
                                                        <div className="dropdownWrapper">
                                                            <CustomDropdown
                                                                itemList={itemList}
                                                                placeholder="Select Service *"
                                                                isSingleSelect={false}
                                                                icon={true}
                                                                onChange={changeHandle}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <CustomInputField
                                                            type="file"
                                                            placeholder="Upload Banner *"
                                                            value={values.banner}
                                                            hasError={errors.banner && touched.banner}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.banner}
                                                            autoFocus={true}
                                                            id="banner"
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <Link to='service-master' className="btn btn-danger light ms-1">Cancel</Link>
                                                    <button className="btn btn-primary me-1">Upload Banner</button>
                                                </div>
                                            </form>

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
export default UploadServiceBanner