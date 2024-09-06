import { Formik } from "formik";
import { Link } from "react-router-dom"
import CustomDropdown from "../../../../../common/CustomDropdown";
import CustomInputField from "../../../../../common/CustomInputField";
const initialValues = {
    number :"",
}
function AddNumberSeriesMaster() {
    const itemList = [
        { name: "provider Name1", value: "provider Name1" },
        { name: "provider Name2", value: "provider Name2" },
        { name: "provider Name3", value: "provider Name3" },
    ];

    const validate = (values) => {
        let errors = {};
        if (!values.number) {
            errors.number = " Number  is required";
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
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="card">
                                    <div className="card-body p-0">
                                        <div className="table-responsive active-projects style-1">
                                            <div className="tbl-caption tbl-caption-2">
                                                <h4 className="heading mb-0">ADD NUMBER SERIES MASTER</h4>
                                            </div>
                                            <form className="tbl-captionn">
                                                <div className="row">
                                                    <div className="col-xl-6 mb-3">
                                                    <CustomInputField
                                                            type="text"
                                                            placeholder="Number *"
                                                            value={values.number}
                                                            hasError={errors.number && touched.number}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.number}
                                                            autoFocus={true}
                                                            id="number"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <div className="dropdownWrapper">
                                                            <CustomDropdown
                                                                itemList={itemList}
                                                                placeholder="--Select Providers -- "
                                                                isSingleSelect={false}
                                                                icon={true}
                                                                onChange={changeHandle}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <Link to='/number-series-master' className="btn btn-danger light ms-1">Cancel</Link>
                                                    <button className="btn btn-primary me-1">Submit</button>
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
export default AddNumberSeriesMaster