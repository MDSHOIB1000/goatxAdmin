import React from 'react'
import { Formik } from 'formik';
import CustomInputField from '../../../../common/CustomInputField';
import CustomDropdown from '../../../../common/CustomDropdown';

const AddUpdatePerformanceReports = () => {
    const itemList = [
        {
            name: "DMT",
            value: "DMT",
        },
        {
            name: "AEPS",
            value: "AEPS",
        },
        {
            name: "BBPS",
            value: "BBPS",
        },
    ];
    const initialValues = {
        state: '',
        City: '',
        mappedParent: '',
        mappedParentType: '',
        number: '',
        mainParent: '',
        mainParentType: '',
        commissionTransferred: '',

    }


    const validate = (values) => {
        let errors = {};
       
        if (!values.date) {
            errors.date = "Date is required";
        }

        if (!values.updateDate) {
            errors.updateDate = "Update Date is required";
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

        if (!values.state) {
            errors.state = "State is required";
        }

        if (!values.City) {
            errors.City = "City  is required";
        }
        if (!values.mappedParent) {
            errors.mappedParent = "Provider Name  is required";
        }
        if (!values.mappedParentType) {
            errors.mappedParentType = "Mapped Parent Type  is required";
        }
        if (!values.mainParent) {
            errors.mainParent = "Main Parent is required";
        }
        if (!values.mainParentType) {
            errors.mainParentType = "Main Parent Type is required";
        }
        if (!values.commissionTransferred) {
            errors.commissionTransferred = "Commission Transferred is required";
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
        <div className="row m-4">
            <div className="col-xl-12">
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0"><b>ADD Performance Reports - </b></h4>
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
                                                <div className="col-xl-4 mb-3">

                                                    <CustomInputField
                                                        type="text"
                                                        value={values.type}
                                                        hasError={errors.type && touched.type}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.type}
                                                        autoFocus={true}
                                                        id="type"
                                                        placeholder={"Type"}
                                                    />
                                                </div>
                                                <div className="col-xl-4 mb-3">

                                                    <CustomInputField
                                                        type="text"
                                                        value={values.name}
                                                        hasError={errors.name && touched.name}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.name}
                                                        autoFocus={true}
                                                        id="name"
                                                        placeholder={"Name"}
                                                    />
                                                </div>
                                                <div className="col-xl-4 mb-3">

                                                    <CustomInputField
                                                        type="text"
                                                        value={values.state}
                                                        hasError={errors.state && touched.state}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.state}
                                                        autoFocus={true}
                                                        id="state"
                                                        placeholder="State"

                                                    />
                                                </div>
                                                <div className="col-xl-4 mb-3">

                                                    <CustomInputField
                                                        type="number"
                                                        value={values.City}
                                                        hasError={errors.City && touched.City}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.City}
                                                        autoFocus={true}
                                                        id="City"
                                                        placeholder="City"

                                                    />
                                                </div>
                                                <div className="col-xl-4 mb-3">

                                                    <CustomInputField
                                                        type="text"
                                                        value={values.mappedParent}
                                                        hasError={errors.mappedParent && touched.mappedParent}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.mappedParent}
                                                        autoFocus={true}
                                                        id="mappedParent"
                                                        placeholder="Mapped Parent"

                                                    />
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <CustomInputField
                                                        type="text"
                                                        value={values.mappedParentType}
                                                        hasError={errors.mappedParentType && touched.mappedParentType}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.mappedParentType}
                                                        autoFocus={true}
                                                        id="mappedParentType"
                                                        placeholder="Mapped Parent Type"

                                                    />
                                                </div>
                                                <div className="col-xl-4 mb-3">

                                                    <CustomInputField
                                                        type="number"
                                                        value={values.mainParent}
                                                        hasError={errors.mainParent && touched.mainParent}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.mainParent}
                                                        autoFocus={true}
                                                        id="mainParent"
                                                        placeholder="Main Parent"

                                                    />
                                                </div>
                                                <div className="col-xl-4 mb-3">

                                                    <CustomInputField
                                                        type="number"
                                                        value={values.mainParentType}
                                                        hasError={errors.mainParentType && touched.mainParentType}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.mainParentType}
                                                        autoFocus={true}
                                                        id="mainParentType"
                                                        placeholder="mainParentType"
                                                        name="Main Parent Type"

                                                    />
                                                </div>
                                                <div className="col-xl-4 mb-3">

                                                    <CustomDropdown
                                                        itemList={itemList}
                                                        placeholder="Transaction Turnover *"
                                                        isSingleSelect={false}
                                                        icon={true}
                                                        onChange={changeHandle}
                                                    />
                                                </div>
                                                <div className="col-xl-4 mb-3">

                                                    <CustomInputField
                                                        type="number"
                                                        value={values.commissionTransferred}
                                                        hasError={errors.commissionTransferred && touched.commissionTransferred}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.commissionTransferred}
                                                        autoFocus={true}
                                                        id="commissionTransferred"
                                                        placeholder="Commission Transferred"
                                                        name="commissionTransferred"

                                                    />
                                                </div>

                                                <div className='border-top'>
                                                    <button className="btn btn-primary pd-x-20 rounded-2 mt-4 " type="submit"> Save </button>
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
    )
}

export default AddUpdatePerformanceReports
