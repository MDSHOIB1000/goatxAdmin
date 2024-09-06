import { Formik } from "formik";
import CustomDropdown from "../../../../../common/CustomDropdown";
import CustomInputField from "../../../../../common/CustomInputField";

function UploadUserPannelSlider() {
    const itemList = [
        {
            name: "Abc",
            value: "Abc",
        },
        {
            name: "Def",
            value: "Def",
        },
    ];
    const initialValues = {
        bannerType: '',
        selectBanner: '',
    }

    const validate = (values) => {
        let errors = {};
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const regexMobileNumber = /^(\+\d{1,3}\s?\d{1,14}|\d{5,15})$/;
        const regexPanNumber = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
        const regexGstNumber =
            /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}[Z]{1}[0-9A-Z]{1}$/;

        if (!values.selectBanner) {
            errors.selectBanner = "Select Banner is required";
        }

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
            <div className="row">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption">
                                    <h4 className="heading mb-0">UPLOAD USER SLIDE BANNER</h4>
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

                                                        <CustomDropdown
                                                            itemList={itemList}
                                                            placeholder="Select Banner Type *"
                                                            isSingleSelect={false}
                                                            icon={true}
                                                            onChange={changeHandle}
                                                        />
                                                    </div>

                                                    <div className="col-xl-6 mb-3">

                                                        <CustomInputField
                                                            type="file"
                                                            value={values.selectBanner}
                                                            hasError={errors.selectBanner && touched.selectBanner}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.selectBanner}
                                                            autoFocus={true}
                                                            id="selectBanner"
                                                            name="selectBanner"
                                                            placeholder="Select Banner"
                                                        />

                                                    </div>
                                                </div>
                                                <div>
                                                    {/* <Link to='service-master' className="btn btn-danger light ms-1">Cancel</Link> */}
                                                    <button className="btn btn-primary me-1">Submit</button>
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
export default UploadUserPannelSlider