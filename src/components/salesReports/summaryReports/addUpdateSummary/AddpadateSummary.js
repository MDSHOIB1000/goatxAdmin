import React from 'react'
import Breadcrumbs from '../../../../common/breadcrumb/Breadcrumbs';
import { Formik } from 'formik';
import CustomInputField from '../../../../common/CustomInputField';
import CustomDropdown from '../../../../common/CustomDropdown';

function AddpadateSummary() {
    const itemList = [
        {
            name: "ASM",
            value: "ASM",
        },
        {
            name: "TSM",
            value: "TSM",
        },
        {
            name: "Ex Di",
            value: "Ex Di",
        },
    ];
    const initialValues = {
        salesExName: '',
        noofSuperDistributor: '',
        NoofRetailers : '',
        dmt: '',
        aeps: '',
        aadharPay: '',
        upi: '',
        bbps: '',
        totalTransactions: '',
        TotalCommissiontransferredtoretailerbeforetds: '',
        TotalCommissiontransferredtodistributorbeforetds:"",

    }


    const validate = (values) => {
        let errors = {};
       
        if (!values.salesExName) {
            errors.salesExName = "Sales Ex Name is required";
        }

        if (!values.noofSuperDistributor) {
            errors.noofSuperDistributor = "No of Super Distributor is required";
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

        if (!values.NoofRetailers ) {
            errors.NoofRetailers  = "No of Retailers  is required";
        }

        if (!values.dmt) {
            errors.dmt = "DMT  is required";
        }
        if (!values.aeps) {
            errors.aeps = "AEPS  is required";
        }
        if (!values.aadharPay) {
            errors.aadharPay = "Aadhar Pay  is required";
        }
        if (!values.upi) {
            errors.upi = "UPI is required";
        }
        if (!values.bbps) {
            errors.bbps = "BBPS is required";
        }
        if (!values.totalTransactions) {
            errors.totalTransactions = "totalTransactions is required";
        }
        if (!values.TotalCommissiontransferredtoretailerbeforetds) {
            errors.TotalCommissiontransferredtoretailerbeforetds = "Closing Balance is required";
        }
        if (!values.TotalCommissiontransferredtodistributorbeforetds) {
            errors.TotalCommissiontransferredtodistributorbeforetds = "Total Commtransto Dist before tds Balance is req";
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
                                <h4 className="heading mb-0"><b>ADD Summary Report - </b></h4>
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
                                                        value={values.salesExName}
                                                        hasError={errors.salesExName && touched.salesExName}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.salesExName}
                                                        autoFocus={true}
                                                        id="salesExName"
                                                        name="salesExName"
                                                        placeholder="Sales Ex Name"
                                                    />
                                                </div>
                                                <div className="col-xl-4 mb-3">

                                                    <CustomDropdown
                                                        itemList={itemList}
                                                        placeholder="Designation *"
                                                        isSingleSelect={false}
                                                        icon={true}
                                                        onChange={changeHandle}
                                                    />
                                                </div>
                                                <div className="col-xl-4 mb-3">

                                                    <CustomInputField
                                                        type="date"
                                                        value={values.noofSuperDistributor}
                                                        hasError={errors.noofSuperDistributor && touched.noofSuperDistributor}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.noofSuperDistributor}
                                                        autoFocus={true}
                                                        id="No of Super Distributor"
                                                        name="No of Super Distributor"

                                                    />
                                                </div>
                                                <div className="col-xl-4 mb-3">

                                                    <CustomInputField
                                                        type="text"
                                                        value={values.NoofRetailers }
                                                        hasError={errors.NoofRetailers  && touched.NoofRetailers }
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.NoofRetailers }
                                                        autoFocus={true}
                                                        id="NoofRetailers "
                                                        name="NoofRetailers "
                                                        placeholder="No of Retailers "

                                                    />
                                                </div>
                                                <div className="col-xl-4 mb-3">

                                                    <CustomInputField
                                                        type="text"
                                                        value={values.dmt}
                                                        hasError={errors.dmt && touched.dmt}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.dmt}
                                                        autoFocus={true}
                                                        name="dmt"
                                                        id="dmt"
                                                        placeholder="DMT"

                                                    />
                                                </div>
                                                <div className="col-xl-4 mb-3">

                                                    <CustomInputField
                                                        type="text"
                                                        value={values.aeps}
                                                        hasError={errors.aeps && touched.aeps}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.aeps}
                                                        autoFocus={true}
                                                        id="aeps"
                                                        name="aeps"
                                                        placeholder="AEPS"

                                                    />
                                                </div>
                                                <div className="col-xl-4 mb-3">

                                                    <CustomInputField
                                                        type="text"
                                                        value={values.aadharPay}
                                                        hasError={errors.aadharPay && touched.aadharPay}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.aadharPay}
                                                        autoFocus={true}
                                                        id="aadharPay"
                                                        name='aadharPay'
                                                        placeholder="Aadhar Pay"

                                                    />
                                                </div>
                                                <div className="col-xl-4 mb-3">

                                                    <CustomInputField
                                                        type="text"
                                                        value={values.upi}
                                                        hasError={errors.upi && touched.upi}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.upi}
                                                        autoFocus={true}
                                                        id="upi"
                                                        placeholder="UPI"
                                                        name="upi"

                                                    />
                                                </div>
                                                <div className="col-xl-4 mb-3">

                                                    <CustomInputField
                                                        type="number"
                                                        value={values.bbps}
                                                        hasError={errors.bbps && touched.bbps}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.bbps}
                                                        autoFocus={true}
                                                        id="bbps"
                                                        placeholder="BBPS"
                                                        name="bbps"

                                                    />
                                                </div>
                                                <div className="col-xl-4 mb-3">

                                                    <CustomInputField
                                                        type="number"
                                                        value={values.totalTransactions}
                                                        hasError={errors.totalTransactions && touched.totalTransactions}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.totalTransactions}
                                                        autoFocus={true}
                                                        id="totalTransactions"
                                                        placeholder="Total Transactions"
                                                        name="totalTransactions"

                                                    />
                                                </div>
                                                <div className="col-xl-4 mb-3">

                                                    <CustomInputField
                                                        type="text"
                                                        value={values.TotalCommissiontransferredtoretailerbeforetds}
                                                        hasError={errors.TotalCommissiontransferredtoretailerbeforetds && touched.TotalCommissiontransferredtoretailerbeforetds}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.TotalCommissiontransferredtoretailerbeforetds}
                                                        autoFocus={true}
                                                        id="TotalCommissiontransferredtoretailerbeforetds"
                                                        placeholder="Total Com trans to retailer before TDS"
                                                        name="TotalCommissiontransferredtoretailerbeforetds"

                                                    />
                                                    
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                <CustomInputField
                                                        type="text"
                                                        value={values.TotalCommissiontransferredtodistributorbeforetds}
                                                        hasError={errors.TotalCommissiontransferredtodistributorbeforetds && touched.TotalCommissiontransferredtodistributorbeforetds}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.TotalCommissiontransferredtodistributorbeforetds}
                                                        autoFocus={true}
                                                        id="TotalCommissiontransferredtodistributorbeforetds"
                                                        placeholder="Total Com trans to Distributor before TDS"
                                                        name="TotalCommissiontransferredtodistributorbeforetds"
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
        </>
      
  )
}

export default AddpadateSummary
