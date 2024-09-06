
import { Formik } from 'formik';
import React from 'react'
import CustomInputField from '../../../../common/CustomInputField';
import CustomDropdown from '../../../../common/CustomDropdown';
const initialValues = { from: "", to: "" }
const SearchReTaransactionFill = () => {
    const name = "dropdown";
    const placeholder = "Course Name";
    const type = "dropdown";
    const itemList = [
        {
            name: "Live",
            value: "Live",
        },
        {
            name: "Archive",
            value: "Archive",
        },
    ];
    const validate = (values) => {
        let errors = {};
        const regexMobileNumber = /^(\+\d{1,3}\s?\d{1,14}|\d{5,15})$/;
        if (!values.mobile_number) {
            errors.mobile_number = "Mobile Number is required";
        } else if (!regexMobileNumber.test(values.mobile_number)) {
            errors.mobile_number = "Invalid Mobile Number";
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
      <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0"><b>Fillter  </b></h4>
                                </div>
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
                                            <form className="tbl-captionn" onSubmit={submitForm}>
                                                <div className="row">
                                                    <div className="col-xl-3 mb-3">
                                                        <CustomInputField
                                                            type="number"
                                                            placeholder="Mobile No*"
                                                            value={values.mobile_number}
                                                            hasError={errors.mobile_number && touched.mobile_number}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.mobile_number}
                                                            autoFocus={true}
                                                            id="mobile_number"
                                                        />
                                                    </div>
                                                   
                                                    <div className="col-xl-3 mb-3">
                                                        <div className="dropdownWrapper">
                                                            <CustomDropdown
                                                                itemList={itemList}
                                                                placeholder="Data *"
                                                                isSingleSelect={false}
                                                                icon={true}
                                                                onChange={changeHandle}
                                                            />
                                                        </div>

                                                    </div>
                                                    
                                                    
                                                    <div className="col-lg-6 col-md-4 mg-t-10 mg-sm-t-25">
                                                        <button className="btn btn-primary pd-x-20  " type="submit"> Submit</button>
                                                        <button className="btn btn-danger pd-x-20 " type="button" data-toggle="modal" data-target="#transaction_download_model"><i className="fas fa-export"></i> Export</button>
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

export default SearchReTaransactionFill
