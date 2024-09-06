import { Formik } from "formik";
import { Link } from "react-router-dom"
import CustomInputField from "../../../common/CustomInputField";
import Breadcrumbs from "../../../common/breadcrumb/Breadcrumbs";

const initialValues = {
    basicDetails: {
        date: "",
        requestBy: "",
        remark: "",
        amount: "",
    },
};

const breadCrumbsTitle = {
    id: "1",
    title_1: "Payment",
    title_2: "Balance Return Request",
    title_3: "Add Balance Return Request",
}

function AddBlanceReturnRequest() {
    const validate = (values) => {
        let errors = {};
        if (!values.date) {
            errors.date = "Date is required";
        }

        if (!values.requestBy) {
            errors.requestBy = "Request is required";
        }
        if (!values.remark) {
            errors.remark = "Remark is required";
        }
        if (!values.amount) {
            errors.amount = "Amount  is required";
        }

        return errors;
    };

    const submitForm = (values) => {
        console.log(values);
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
                    } = formik;
                    return (
                        <>
                            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
                            <div className="row m-4">
                                <div className="col-xl-12">
                                    <div className="card">
                                        <div className="card-body p-0">
                                            <div className="table-responsive active-projects style-1">
                                                <div className="tbl-caption tbl-caption-2">
                                                    <h4 className="heading mb-0">ADD BALANCE RETURN REQUEST</h4>
                                                </div>
                                                <form className="tbl-captionn" onSubmit={handleSubmit}>
                                                    <div className="row">
                                                        <div className="col-xl-6 mb-3">
                                                            <CustomInputField
                                                                type="date"
                                                                placeholder="Date *"
                                                                value={values.date}
                                                                hasError={errors.date && touched.date}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                errorMsg={errors.date}
                                                                autoFocus={true}
                                                                id="date"
                                                            />
                                                        </div>
                                                        <div className="col-xl-6 mb-3">
                                                            <CustomInputField
                                                                type="text"
                                                                placeholder="Request By *"
                                                                value={values.requestBy}
                                                                hasError={errors.requestBy && touched.requestBy}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                errorMsg={errors.requestBy}
                                                                autoFocus={true}
                                                                id="requestBy"
                                                            />
                                                        </div>
                                                        <div className="col-xl-6 mb-3">
                                                            <CustomInputField
                                                                type="text"
                                                                placeholder="Remark *"
                                                                value={values.remark}
                                                                hasError={errors.remark && touched.remark}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                errorMsg={errors.remark}
                                                                autoFocus={true}
                                                                id="remark"
                                                            />
                                                        </div>
                                                        <div className="col-xl-6 mb-3">
                                                            <CustomInputField
                                                                type="text"
                                                                placeholder="Amount *"
                                                                value={values.amount}
                                                                hasError={errors.amount && touched.amount}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                errorMsg={errors.amount}
                                                                autoFocus={true}
                                                                id="amount"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <Link to='/balance-return-request' className="btn btn-danger light ms-1">Cancel</Link>
                                                        <button className="btn btn-primary me-1">Submit</button>
                                                    </div>
                                                </form>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    );
                }}
            </Formik>
        </>
    )
}
export default AddBlanceReturnRequest