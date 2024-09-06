import { Formik } from "formik";
import { Link } from "react-router-dom"
import CustomInputField from "../../../../../common/CustomInputField";
import CustomDropdown from "../../../../../common/CustomDropdown";
import CustomTextArea from "../../../../../common/CustomTextArea";
import Breadcrumbs from "../../../../../common/breadcrumb/Breadcrumbs";
const breadCrumbsTitle = {
    id: "1",
    title_1: "Master",
    title_2: "Service Master",
    title_3: "Update Service Master",
}
function EditServiceMaster() {
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
    const itemList2 = [
        {
            name: "Enabled",
            value: "Enabled",
        },
        {
            name: "Disabled",
            value: "Disabled",
        },
    ];

    const initialValues = {
        serviceName: '',
        code: '',
        shortDescription: '',
        fullDescrption: '',
        iconImage: '',
        bannerImage: '',
        serviceCategory: '',
        permitByArea: '',
        status: '',
    }

    const validate = (values) => {
        let errors = {};
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const regexMobileNumber = /^(\+\d{1,3}\s?\d{1,14}|\d{5,15})$/;
        const regexPanNumber = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
        const regexGstNumber =
            /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}[Z]{1}[0-9A-Z]{1}$/;

        if (!values.serviceName) {
            errors.serviceName = "Service Name is required";
        }
        if (!values.code) {
            errors.code = "Code is required";
        }
        if (!values.shortDescription) {
            errors.shortDescription = "Short Description is required";
        }
        if (!values.fullDescrption) {
            errors.fullDescrption = "Full Description is required";
        }
        if (!values.iconImage) {
            errors.iconImage = "Icon Image is required";
        }
        if (!values.bannerImage) {
            errors.bannerImage = "Banner Image is required";
        }
        if (!values.permitByArea) {
            errors.permitByArea = "Permit By Area is required";
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
         <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0">UPDATE SERVICE MASTER</h4>
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
                                                    <div className="col-xl-6 mb-3">

                                                        <CustomInputField
                                                            type="text"
                                                            value={values.serviceName}
                                                            hasError={errors.serviceName && touched.serviceName}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.serviceName}
                                                            autoFocus={true}
                                                            id="serviceName"
                                                            name="serviceName"
                                                            placeholder="Service Name"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">

                                                        <CustomInputField
                                                            type="number"
                                                            value={values.code}
                                                            hasError={errors.code && touched.code}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.code}
                                                            autoFocus={true}
                                                            id="code"
                                                            name="code"
                                                            placeholder="Code"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">

                                                        <CustomTextArea
                                                            placeholder="Short Description *"
                                                            value={values.shortDescription}
                                                            hasError={errors.shortDescription && touched.shortDescription}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.shortDescription}
                                                            autoFocus={false}
                                                            rows="3"
                                                            id="reason"
                                                        />

                                                    </div>
                                                    <div className="col-xl-6 mb-3">

                                                        <CustomTextArea
                                                            placeholder="Full Description *"
                                                            value={values.fullDescrption}
                                                            hasError={errors.fullDescrption && touched.fullDescrption}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.fullDescrption}
                                                            autoFocus={false}
                                                            rows="3"
                                                            id="reason"
                                                        />

                                                    </div>
                                                    <div className="col-xl-6 mb-3">

                                                        <CustomInputField
                                                            type="file"
                                                            value={values.iconImage}
                                                            hasError={errors.iconImage && touched.iconImage}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.iconImage}
                                                            autoFocus={true}
                                                            id="iconImage"
                                                            name="iconImage"
                                                            placeholder="Icon Image"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">

                                                        <CustomInputField
                                                            type="file"
                                                            value={values.bannerImage}
                                                            hasError={errors.bannerImage && touched.bannerImage}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.bannerImage}
                                                            autoFocus={true}
                                                            id="bannerImage"
                                                            name="bannerImage"
                                                            placeholder="Banner Image"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6">


                                                        <CustomDropdown
                                                            itemList={itemList}
                                                            placeholder="Select Service Category *"
                                                            isSingleSelect={false}
                                                            icon={true}
                                                            onChange={changeHandle}
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">

                                                        <CustomInputField
                                                            type="text"
                                                            value={values.permitByArea}
                                                            hasError={errors.permitByArea && touched.permitByArea}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.permitByArea}
                                                            autoFocus={true}
                                                            id="permitByArea"
                                                            name="permitByArea"
                                                            placeholder="Permit By Area"
                                                        />
                                                    </div>
                                                    <div className="col-xl-6 mb-3">

                                                        <CustomDropdown
                                                            itemList={itemList2}
                                                            placeholder="Select Status *"
                                                            isSingleSelect={false}
                                                            icon={true}
                                                            onChange={changeHandle}
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <Link to='/service-master' className="btn btn-danger light ms-1">Cancel</Link>
                                                    <button className="btn btn-primary me-1">Submit</button>
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
export default EditServiceMaster