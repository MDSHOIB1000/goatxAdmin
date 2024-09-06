import { Formik } from "formik";
import CustomDropdown from "../../../../common/CustomDropdown";
import CustomTextArea from "../../../../common/CustomTextArea";

function SendRoleWise() {
    const itemList = [
        {
            name: "Pay Panda Payment Solution Pvt Ltd",
            value: "Pay Panda Payment Solution Pvt Ltd",
        },
    ];
    const memberTypeList = [
        {
            name: "Company Staff",
            value: "Company Staff",
        },
        {
            name: "TSM",
            value: "TSM",
        },
        {
            name: "Sales Excutive",
            value: "Sales Excutive",
        },
        {
            name: "Supper Distributer",
            value: "Supper Distributer",
        },
        {
            name: "Distributer",
            value: "Distributer",
        },
        {
            name: "Retailer",
            value: "Retailer",
        },
    ];
    const initialValues = {
        selectCompany: '',
        memberType: '',
        message: ''
    }

    const validate = (values) => {
        let errors = {};
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const regexMobileNumber = /^(\+\d{1,3}\s?\d{1,14}|\d{5,15})$/;
        const regexPanNumber = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
        const regexGstNumber =
            /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}[Z]{1}[0-9A-Z]{1}$/;

        if (!values.message) {
            errors.message = "Message is required";
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

            <div className='col-lg-6'>
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h6 className="heading mb-0"><b>Send Role Wise </b></h6>
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
                                                <div className="col-xl-12 mb-3">

                                                    <CustomDropdown
                                                        itemList={itemList}
                                                        placeholder="Select Select Commpany *"
                                                        isSingleSelect={false}
                                                        icon={true}
                                                        onChange={changeHandle}
                                                    />
                                                </div>
                                                <div className="col-xl-12 mb-3">

                                                    <CustomDropdown
                                                        itemList={memberTypeList}
                                                        placeholder="Select Member Type *"
                                                        isSingleSelect={false}
                                                        icon={true}
                                                        onChange={changeHandle}
                                                    />
                                                </div>
                                                <div className="col-xl-12 mb-3">

                                                    <CustomTextArea
                                                        type="text"
                                                        value={values.message}
                                                        hasError={errors.message && touched.message}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.message}
                                                        autoFocus={true}
                                                        id="message"
                                                        name="message"
                                                        placeholder="Message *"
                                                    />

                                                </div>

                                                <div className=''>
                                                    <button className="btn btn-primary pd-x-20  rounded-2 " type="submit" style={{ marginTop: "15px" }}> Send Now </button>
                                                    <button className="btn btn-warning pd-x-20  rounded-2 " type="submit" style={{ marginTop: "15px" }}> Cancel </button>
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

        </>
    )
}
export default SendRoleWise