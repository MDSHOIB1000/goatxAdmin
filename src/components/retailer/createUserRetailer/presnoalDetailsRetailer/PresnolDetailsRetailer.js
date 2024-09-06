import { Formik } from "formik";
import CustomInputField from "../../../../common/CustomInputField";
import CustomDropdown from "../../../../common/CustomDropdown";
function PermanentDetailsRetailer({initialValues}) {
    const name = "dropdown";
    const placeholder = "Course Name";
    const type = "dropdown";
    const itemList = [
        {
            name: "Maharashtra",
            value: "Maharashtra",
        },
        {
            name: "Delhi",
            value: "Delhi",
        },
        {
            name: "Tamil Nadu",
            value: "Tamil Nadu",
        },
        {
            name: "Gujarat",
            value: "Gujarat",
        },
    ];

    const validate = (values) => {
        let errors = {};
      
        if (!values.address) {
            errors.address = "Address is required";
        }

        if (!values.city) {
            errors.city = "City Name is required";
        }

        

        if (!values.pincode) {
            errors.pincode = "Pincode is required";
        }

        if (!values.state) {
            errors.state = "State is required";
        }

        if (!values.lockAmount) {
            errors.lockAmount = "Lock Amount is required";
        }

        if (!values.officeAddress) {
            errors.officeAddress = "Office Address is required";
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
                        <form className="tbl-captionn">
                            <div className="row">
                                <div className="col-xl-4 mb-3">
                                    <CustomInputField
                                        type="text"
                                        placeholder="Address * "
                                        value={values.address}
                                        hasError={errors.address && touched.address}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        errorMsg={errors.address}
                                        id="address"
                                    />
                                </div>
                                <div className="col-xl-4 mb-3">
                                    <CustomInputField
                                        type="text"
                                        placeholder="City"
                                        value={values.city}
                                        hasError={errors.city && touched.city}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        errorMsg={errors.city}
                                        id="city"
                                    />
                                </div>
                                <div className="col-xl-4 mb-3">
                                    <CustomInputField
                                        type="text"
                                        placeholder="Pincode"
                                        value={values.pincode}
                                        hasError={errors.pincode && touched.pincode}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        errorMsg={errors.pincode}
                                        id="pincode"
                                    />
                                </div>
                                <div className="col-xl-4 mb-3">
                                    <CustomInputField
                                        type="text"
                                        placeholder="State"
                                        value={values.state}
                                        hasError={errors.state && touched.state}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        errorMsg={errors.state}
                                        id="state"
                                    />
                                </div>
                                <div className="col-xl-4 mb-3">
                                    <div className="dropdownWrapper">
                                        <CustomDropdown
                                            itemList={itemList}
                                            placeholder="Select State *"
                                            isSingleSelect={false}
                                            icon={true}
                                            onChange={changeHandle}
                                        />
                                    </div>
                                </div>
                            </div>
                        </form>
                    );
                }}
            </Formik>
        </>
    );
}
export default PermanentDetailsRetailer