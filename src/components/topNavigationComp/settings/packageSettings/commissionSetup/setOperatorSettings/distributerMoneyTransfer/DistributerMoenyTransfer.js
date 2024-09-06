import { Formik } from "formik";
import CustomInputField from "../../../../../../../common/CustomInputField";
import CustomDropdown from "../../../../../../../common/CustomDropdown";

const initialValues = {
    minAmount: '',
    maxAmount: '',
    saleTeam: '',
    superDistributer: '',
    superRetailer: '',
    superRefral: '',
}

function DistributerMoneyTrnsfer() {
    const name = "dropdown";
    const placeholder = "Course Name";
    const type = "dropdown";
    const itemList = [
        {
            name: "%",
            value: "%",
        },


    ];

    const validate = (values) => {
        let errors = {};
        if (!values.minAmount) {
            errors.minAmount = "Min-Amount is required";
        }

        if (!values.maxAmount) {
            errors.maxAmount = "Max-Amount is required";
        }

        if (!values.saleTeam) {
            errors.saleTeam = "Sale Team  is required";
        }

        if (!values.superDistributer) {
            errors.superDistributer = "Super Distributer is required";
        }

        if (!values.superRetailer) {
            errors.superRetailer = "Super Retailer is required";
        }

        // if (!values.panNumber) {
        //     errors.panNumber = "PAN Number is required";
        // } else if (!regexPanNumber.test(values.panNumber)) {
        //     errors.panNumber = "Invalid PAN Number";
        // }

        // if (!values.gstNumber) {
        //   errors.gstNumber = "GST Number is required";
        // } else if (!regexGstNumber.test(values.gstNumber)) {
        //   errors.gstNumber = "Invalid GST Number";
        // }

        if (!values.superRefral) {
            errors.superRefral = "Super Refral is required";
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
                                                <h4 className="heading mb-0">DISTRIBUTOR : MONEY TRANSFER</h4>
                                            </div>
                                            <form className="tbl-captionn">
                                                <div className="row">
                                                    <div className="col-xl-6 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="Min Amount *"
                                                            value={values.minAmount}
                                                            hasError={errors.minAmount && touched.minAmount}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.minAmount}
                                                            autoFocus={true}
                                                            id="minAmount"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="Max Amount *"
                                                            value={values.maxAmount}
                                                            hasError={errors.maxAmount && touched.maxAmount}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.maxAmount}
                                                            autoFocus={true}
                                                            id="maxAmount"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <div className="dropdownWrapper">
                                                            <CustomDropdown
                                                                itemList={itemList}
                                                                placeholder="Type *"
                                                                isSingleSelect={false}
                                                                icon={true}
                                                                onChange={changeHandle}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="Sale Team* *"
                                                            value={values.saleTeam}
                                                            hasError={errors.saleTeam && touched.saleTeam}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.saleTeam}
                                                            autoFocus={true}
                                                            id="saleTeam"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="Super Distributer *"
                                                            value={values.superDistributer}
                                                            hasError={errors.superDistributer && touched.superDistributer}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.superDistributer}
                                                            autoFocus={true}
                                                            id="superDistributer"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="Super Retailer *"
                                                            value={values.superRetailer}
                                                            hasError={errors.superRetailer && touched.superRetailer}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.superRetailer}
                                                            autoFocus={true}
                                                            id="superRetailer"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="Super Referal *"
                                                            value={values.superRefral}
                                                            hasError={errors.superRefral && touched.superRefral}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.superRefral}
                                                            autoFocus={true}
                                                            id="superRefral"
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <button className="btn btn-primary me-1">Save Commission</button>
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
export default DistributerMoneyTrnsfer