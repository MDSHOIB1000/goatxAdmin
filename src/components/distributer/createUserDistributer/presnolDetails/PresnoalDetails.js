import { Formik } from "formik";
import CustomInputField from "../../../../common/CustomInputField";
import CustomDropdown from "../../../../common/CustomDropdown";
import { useEffect, useState } from "react";
import { countryList, getStateMaster } from "../../../../api/login/Login";

function Presnoaldetails({ value, submitForm, handleInput_B }) {
    const [country, setcountry] = useState()
    const [state, setstate] = useState()
    const name = "dropdown";
    const placeholder = "Course Name";
    const type = "dropdown";

    const getCountry = async () => {
        const res = await countryList()
        setcountry(res?.data)
        const response = await getStateMaster()
        setstate(response?.data)
    }
    useEffect(() => {
        getCountry()
    }, [])

    const validate = (values) => {
        let errors = {};

        if (!values.address) {
            errors.address = "Address is required";
        }

        if (!values.state) {
            errors.state = "State Name is required";
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


    function extractAddressComponents(data, address) {
        const components = address.split(',').map(component => component.trim());
        const pincode = components.pop();
        const state = components.pop();
        const city = components.pop();
        const area = components.join(', '); // Assuming everything before city is area

        const clone = { ...data, business_pincode: pincode, business_city: city, businessName: state }
    }
    // useEffect(() => {
    //    console.log(value)
    // extractAddressComponents(value)
    // }, [value])




    const changeHandle = (selectedData) => {
        // TODO
    };
    return (
        <>

            <Formik
                initialValues={value}
                validate={validate}
                // onSubmit={submitForm}
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
                        <form className="tbl-captionn">
                            <div className="row">
                                <div className="col-xl-4 mb-3">
                                    <CustomInputField
                                        type="text"
                                        placeholder="Address * "
                                        value={values?.presentAddr}
                                        hasError={errors.presentAddr && touched.presentAddr}
                                        onChange={handleInput_B}
                                        onBlur={handleBlur}
                                        errorMsg={errors.presentAddr}
                                        id="presentAddr"
                                        name='presentAddr'
                                    />
                                </div>
                                {country &&
                                    <div className="col-xl-4 mb-3">
                                        <select className="form-select" aria-label="Default select example" id="is_active" name="country"
                                            value={values?.country}
                                            onChange={handleInput_B}
                                        >
                                            {country.map((item, i) => {
                                                // console.log(item);
                                                return <option value={item?._id}> {item?.name}</option>
                                            })}

                                        </select>
                                    </div>}
                                    <div className="col-xl-4 mb-3">
                                    <CustomInputField
                                        type="text"
                                        placeholder="Address * "
                                        value={values?.state}
                                        hasError={errors.state && touched.state}
                                        onChange={handleInput_B}
                                        onBlur={handleBlur}
                                        errorMsg={errors.state}
                                        id="state"
                                        name='state'
                                    />
                                </div>
                                {/* {state &&
                                    <div className="col-xl-4 mb-3">
                                        <select className="form-select" aria-label="Default select example" id="is_active" name="is_active"
                                            defaultValue={values?.state?.name}
                                            onChange={handleInput_B}
                                        >
                                            {state.map((item, i) => {
                                                // console.log(item);
                                                return <option value={item?._id}> {item?.name}</option>
                                            })}

                                        </select>
                                    </div>} */}

                                <div className="col-xl-4 mb-3">
                                    <CustomInputField
                                        type="text"
                                        placeholder="Pincode"
                                        value={values?.pinCode}
                                        hasError={errors.pincode && touched.pincode}
                                        onChange={handleInput_B}
                                        onBlur={handleBlur}
                                        errorMsg={errors.pincode}
                                        id="pincode"
                                        name="pinCode"
                                    />
                                </div>
                                <div className="col-xl-4 mb-3">
                                    <CustomInputField
                                        type="text"
                                        placeholder="Main Wallet"
                                        value={values?.main_wallet}
                                        hasError={errors.main_wallet && touched.main_wallet}
                                        onChange={handleInput_B}
                                        onBlur={handleBlur}
                                        errorMsg={errors.main_wallet}
                                        id="main_wallet"
                                        name="main_wallet"
                                        disable
                                    />
                                </div>
                                {/*  <div className="col-xl-4 mb-3">
                                        <CustomInputField
                                            type="text"
                                            placeholder="Distic"
                                            value={values?.distic}
                                            hasError={errors.distic && touched.distic}
                                            onChange={handleInput_B}
                                            onBlur={handleBlur}
                                            errorMsg={errors.distic}
                                            id="distic"
                                            name="distic"
                                        />
                                    </div> */}
                                {/* <div className="col-xl-4 mb-3">
                                    <select className="form-select" aria-label="Default select example" id="is_active" name="is_active"
                                        defaultValue={values?.is_active}
                                        onChange={handleInput_B}
                                    >
                                        <option selected> Select State Id</option>
                                        <option value={values?.state}> Select State By Id</option>
                                    </select>

                                </div> */}
                            </div>
                        </form>
                    );
                }}
            </Formik>
        </>
    );
}
export default Presnoaldetails;
