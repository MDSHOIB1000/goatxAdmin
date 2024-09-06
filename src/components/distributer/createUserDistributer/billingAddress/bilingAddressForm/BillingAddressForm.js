import React from 'react'
import { Formik } from 'formik';
import CustomInputField from '../../../../../common/CustomInputField';

function BillingAddressForm({submitForm,initialValues,validate,selecAddressId}) {
    return (
        <div className="row m-4">
            <div className="col-xl-12">
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            {/* <div className="tbl-caption bg-primary justify-content-center">
                                <h4 className="heading mb-0 border p-1 rounded udtfont"><b>Billing Address</b></h4>
                            </div> */}
                            <Formik
                                initialValues={initialValues}
                                validate={validate}
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
                                                <div className="col-xl-4 mb-3">
                                                    <CustomInputField
                                                        type="text"
                                                        placeholder="First Name *"
                                                        value={values?.firstname}
                                                        hasError={errors.firstname && touched.firstname}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.firstname}
                                                        autoFocus={true}
                                                        id="firstname"
                                                        name="firstname"
                                                    />
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <CustomInputField
                                                        type="text"
                                                        placeholder="Last Name *"
                                                        value={values?.lastname}
                                                        hasError={errors.lastname && touched.lastname}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.lastname}
                                                        autoFocus={true}
                                                        id="lastname"
                                                        name="lastname"
                                                    />
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <CustomInputField
                                                        type="text"
                                                        placeholder="Country *"
                                                        value={values?.country}
                                                        hasError={errors.country && touched.country}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.country}
                                                        autoFocus={true}
                                                        id="country"
                                                        name="country"
                                                    />
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <CustomInputField
                                                        type="mail"
                                                        placeholder="E-mail *"
                                                        value={values?.email}
                                                        hasError={errors.email && touched.email}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.email}
                                                        autoFocus={true}
                                                        id="email"
                                                        name="email"
                                                    />

                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <CustomInputField
                                                        type="text"
                                                        placeholder="State *"
                                                        value={values?.state}
                                                        hasError={errors.state && touched.state}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.state}
                                                        autoFocus={true}
                                                        id="state"
                                                        state="state"
                                                    />
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <CustomInputField
                                                        type="text"
                                                        placeholder="City *"
                                                        value={values?.city}
                                                        hasError={errors.city && touched.city}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.city}
                                                        autoFocus={true}
                                                        id="city"
                                                        name="city"
                                                    />
                                                </div>

                                                <div className="col-xl-4 mb-3">
                                                    <CustomInputField
                                                        type="number"
                                                        placeholder="PIN Code *"
                                                        value={values?.pin_code}
                                                        hasError={errors.pin_code && touched.pin_code}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.pin_code}
                                                        autoFocus={true}
                                                        id="pin_code"
                                                        name="pin_code"
                                                    />
                                                </div>

                                                <div className="col-xl-4 mb-3">
                                                    <CustomInputField
                                                        type="text"
                                                        placeholder="province *"
                                                        value={values?.province}
                                                        hasError={errors.province && touched.province}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.province}
                                                        autoFocus={true}
                                                        id="province"
                                                        name="province"
                                                    />
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <CustomInputField
                                                        type="text"
                                                        placeholder="Address (1) *"
                                                        value={values?.addressLine1}
                                                        hasError={errors.addressLine1 && touched.addressLine1}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.addressLine1}
                                                        autoFocus={true}
                                                        id="addressLine1"
                                                    />
                                                </div>

                                                <div className="col-xl-4 mb-3">
                                                    <CustomInputField
                                                        type="text"
                                                        placeholder="Address (2) *"
                                                        value={values?.addressLine2}
                                                        hasError={errors.addressLine2 && touched.addressLine2}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.addressLine2}
                                                        autoFocus={true}
                                                        id="addressLine2"
                                                        name="addressLine2"
                                                    />
                                                </div>

                                                <div className="col-xl-4 mb-3">
                                                    <CustomInputField
                                                        type="number"
                                                        placeholder="Contact No * "
                                                        value={values?.mobile_number}
                                                        hasError={errors.mobile_number && touched.mobile_number}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.mobile_number}
                                                        id="mobile_number"
                                                    />
                                                </div>

                                                <div className="col-xl-4 mb-3">
                                                    <CustomInputField
                                                        type="text"
                                                        placeholder="Companyy"
                                                        value={values?.company}
                                                        hasError={errors.company && touched.company}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.company}
                                                        id="company"
                                                    />
                                                </div>

                                                <div className=''>
                                                <button
                                                        className="btn btn-primary me-1"
                                                        type="submit"
                                                        disabled={!isValid || !dirty}
                                                    >
                                                        {selecAddressId ? "Update" : "Add"}
                                                    </button>
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

export default BillingAddressForm