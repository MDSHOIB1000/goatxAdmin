import { Link } from "react-router-dom";
import CustomInputField from "../../../../common/CustomInputField";
import CustomDropdown from "../../../../common/CustomDropdown";
import { Formik, Form, Field, ErrorMessage } from "formik";
import CustomTextArea from "../../../../common/CustomTextArea";

function BasicDetailsRetails({initialValues}) {
    
    const name = "dropdown";
    const placeholder = "Course Name";
    const type = "dropdown";
    const itemList = [
      {
        name: "Abc",
        value: "Abc",
      },
      {
        name: "Abcd",
        value: "Abcd",
      },
      {
        name: "Abce",
        value: "Abce",
      },
      {
        name: "Abcf",
        value: "Abcf",
      },
    ];
  
    const validate = (values) => {
      let errors = {};
      const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      const regexMobileNumber = /^(\+\d{1,3}\s?\d{1,14}|\d{5,15})$/;
      const regexPanNumber = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
      const regexGstNumber =
        /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}[Z]{1}[0-9A-Z]{1}$/;
  
      if (!values.firstName) {
        errors.firstName = "First Name is required";
      }
  
      if (!values.lastName) {
        errors.lastName = "Last Name is required";
      }
  
      if (!values.email) {
        errors.email = "Email is required";
      } else if (!regexEmail.test(values.email)) {
        errors.email = "Invalid Email";
      }
  
      if (!values.mobileNumber) {
        errors.mobileNumber = "Mobile Number is required";
      } else if (!regexMobileNumber.test(values.mobileNumber)) {
        errors.mobileNumber = "Invalid Mobile Number";
      }
  
      if (!values.masterType) {
        errors.masterType = "Master Type is required";
      }
  
      if (!values.shopName) {
        errors.shopName = "Shop Name is required";
      }
  
      if (!values.lockAmount) {
        errors.lockAmount = "Lock Amount is required";
      }
  
      if (!values.panNumber) {
        errors.panNumber = "PAN Number is required";
      } else if (!regexPanNumber.test(values.panNumber)) {
        errors.panNumber = "Invalid PAN Number";
      }
  
      // if (!values.gstNumber) {
      //   errors.gstNumber = "GST Number is required";
      // } else if (!regexGstNumber.test(values.gstNumber)) {
      //   errors.gstNumber = "Invalid GST Number";
      // }
  
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
              <form className="tbl-captionn" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-xl-4 mb-3">
                    <CustomInputField
                      type="text"
                      placeholder="First Name *"
                      value={values.firstName}
                      hasError={errors.firstName && touched.firstName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      errorMsg={errors.firstName}
                      autoFocus={true}
                      id="firstName"
                    />
                  </div>
                  <div className="col-xl-4 mb-3">
                    <CustomInputField
                      type="text"
                      placeholder="Last Name *"
                      value={values.lastName}
                      hasError={errors.lastName && touched.lastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      errorMsg={errors.lastName}
                      id="lastName"
                    />
                  </div>
                  <div className="col-xl-4 mb-3">
                    <CustomInputField
                      type="email"
                      placeholder="Email *"
                      value={values.email}
                      hasError={errors.email && touched.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      errorMsg={errors.email}
                      id="email"
                    />
                  </div>
                  <div className="col-xl-4 mb-3">
                    <CustomInputField
                      type="number"
                      placeholder="Mobile Number *"
                      value={values.mobileNumber}
                      hasError={errors.mobileNumber && touched.mobileNumber}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      errorMsg={errors.mobileNumber}
                      id="mobileNumber"
                    />
                  </div>
                  <div className="col-xl-4 mb-3">
                    <div className="dropdownWrapper">
                      <CustomDropdown
                        itemList={itemList}
                        placeholder="Select Member Type *"
                        isSingleSelect={false}
                        icon={true}
                        onChange={changeHandle}
                      />
                    </div>
                  </div>
                  <div className="col-xl-4 mb-3">
                    <CustomInputField
                      type="text"
                      placeholder="Shop Name *"
                      value={values.shopName}
                      hasError={errors.shopName && touched.shopName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      errorMsg={errors.shopName}
                      id="shopName"
                    />
                  </div>
  
                  <div className="col-xl-4 mb-3">
                    <CustomInputField
                      type="text"
                      placeholder="Lock Amount *"
                      value={values.lockAmount}
                      hasError={errors.lockAmount && touched.lockAmount}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      errorMsg={errors.lockAmount}
                      id="lockAmount"
                    />
                  </div>
                  <div className="col-xl-4 mb-3">
                    <CustomInputField
                      type="text"
                      placeholder="Pan Number *"
                      value={values.panNumber}
                      hasError={errors.panNumber && touched.panNumber}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      errorMsg={errors.panNumber}
                      id="panNumber"
                    />
                  </div>
                  <div className="col-xl-4 mb-3">
                    <CustomInputField
                      type="text"
                      placeholder="GST Number "
                      value={values.gstNumber}
                      hasError={errors.gstNumber && touched.gstNumber}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      errorMsg={errors.gstNumber}
                      id="gstNumber"
                    />
                  </div>
                  <div className="col-xl-4 mb-3">
                    <CustomTextArea
                      placeholder="Office Address *"
                      value={values.officeAddress}
                      hasError={errors.officeAddress && touched.officeAddress}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      errorMsg={errors.officeAddress} 
                      autoFocus={false}
                      rows="6"
                      id="officeAddress"
                    />
                  </div>
                </div>
                <div className="card-footer text-right">
                  <button
                    type="submit"
                    className="btn btn-danger waves-effect waves-light"
                  >
                    Next
                  </button>
                </div>
              </form>
            );
          }}
        </Formik>
      </>
    );
}
export default BasicDetailsRetails