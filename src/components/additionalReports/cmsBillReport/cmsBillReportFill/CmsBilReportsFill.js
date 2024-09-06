import { Formik } from 'formik';
import React from 'react'
import CustomInputField from '../../../../common/CustomInputField';
import CustomDropdown from '../../../../common/CustomDropdown';

const initialValues = { from: "", to: "" }
function CmsBillReportFill() {
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

        if (!values.from) {
            errors.from = "From Date is required";
        }

        if (!values.to) {
            errors.to = "To Date is required";
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
                                    <h4 className="heading mb-0"><b>Filter  </b></h4>
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
                                                            type="date"
                                                            placeholder="From Date*"
                                                            value={values.from}
                                                            hasError={errors.from && touched.from}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.from}
                                                            autoFocus={true}
                                                            id="from"
                                                        />
                                                    </div>
                                                    <div className="col-xl-3 mb-3">
                                                        <CustomInputField
                                                            type="date"
                                                            placeholder="To Date*"
                                                            value={values.to}
                                                            hasError={errors.to && touched.to}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.to}
                                                            autoFocus={true}
                                                            id="to"
                                                        />

                                                    </div>
                                                    <div className="col-lg-3 col-md-4 mg-t-10 mg-sm-t-25">
                                                        <button className="btn btn-primary pd-x-20  " type="submit"><i className="fas fa-search"></i> Search</button>
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

export default CmsBillReportFill