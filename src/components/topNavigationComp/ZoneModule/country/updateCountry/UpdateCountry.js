import { Link } from "react-router-dom"
import CustomInputField from "../../../../../common/CustomInputField";
import { Formik } from "formik";
import CustomDropdown from "../../../../../common/CustomDropdown";
import CustomTextArea from "../../../../../common/CustomTextArea";

const initialValues = {
    shortingNumber: "",
    uniqCode: "",
    metaTitle: "",
    metaDescription: "",
    metaKeyWord: "",
    areaType: "",
    parentArea: "",
    status: "",
    description: "",
}

function UpdateCountry() {
    const name = "dropdown";
    const placeholder = "Course Name";
    const type = "dropdown";
    const areaType = [
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
        
    ];
    const status = [
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
        
    ];

    const validate = (values) => {
        let errors = {};
       
        const regexDecription = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
        const regexUnicode = /[\pL\pN_\-]+/;
       
        if (!values.shortingNumber) {
            errors.shortingNumber = "Shorting Number  is required";
        }

        if (!values.metaTitle) {
            errors.metaTitle = "Meta Title is required";
        }

        if (!values.metaDescription) {
            errors.metaDescription = "Meta Description is required";
        }

        if (!values.metaKeyWord) {
            errors.metaKeyWord = "Meta KeyWord is required";
        }

        if (!values.parentArea) {
            errors.parentArea = "Parent Area is required";
        }

        if (!values.uniqCode) {
            errors.uniqCode = "Uniq Code is required";
        } else if (!regexUnicode.test(values.uniqCode)) {
            errors.uniqCode = "Invalid Uniq Code Number";
        }
        if (!values.description) {
            errors.description = "Description is required";
        } else if (!regexDecription.test(values.description)) {
            errors.description = "Invalid Description Number";
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
                                                <h4 className="heading mb-0">UPDATE COUNTRY</h4>
                                            </div>
                                            <form className="tbl-captionn">
                                                <div className="row">
                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="Shorting number *"
                                                            value={values.shortingNumber}
                                                            hasError={errors.shortingNumber && touched.shortingNumber}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.shortingNumber}
                                                            autoFocus={true}
                                                            id="shortingNumber"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="Uniq Code *"
                                                            value={values.uniqCode}
                                                            hasError={errors.uniqCode && touched.uniqCode}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.uniqCode}
                                                            autoFocus={true}
                                                            id="uniqCode"
                                                        />
                                                    </div>

                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="Meta Title *"
                                                            value={values.metaTitle}
                                                            hasError={errors.metaTitle && touched.metaTitle}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.metaTitle}
                                                            autoFocus={true}
                                                            id="metaTitle"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="Meta Description *"
                                                            value={values.metaDescription}
                                                            hasError={errors.metaDescription && touched.metaDescription}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.metaDescription}
                                                            autoFocus={true}
                                                            id="metaDescription"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="Meta Key Word *"
                                                            value={values.metaKeyWord}
                                                            hasError={errors.metaKeyWord && touched.metaKeyWord}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.metaKeyWord}
                                                            autoFocus={true}
                                                            id="metaKeyWord"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="Parent Area *"
                                                            value={values.parentArea}
                                                            hasError={errors.parentArea && touched.parentArea}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.parentArea}
                                                            autoFocus={true}
                                                            id="parentArea"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <div className="dropdownWrapper">
                                                            <CustomDropdown
                                                                itemList={areaType}
                                                                placeholder="Select Area Type *"
                                                                isSingleSelect={false}
                                                                icon={true}
                                                                onChange={changeHandle}
                                                            />
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="col-xl-4 mb-3">
                                                        <div className="dropdownWrapper">
                                                            <CustomDropdown
                                                                itemList={status}
                                                                placeholder="Select Status *"
                                                                isSingleSelect={false}
                                                                icon={true}
                                                                onChange={changeHandle}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-12 mb-3">
                                                        <CustomTextArea
                                                            placeholder="Description *"
                                                            value={values.description}
                                                            hasError={errors.description && touched.description}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.description}
                                                            autoFocus={false}
                                                            rows="6"
                                                            id="description"
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <Link to='/country' className="btn btn-danger light ms-1">Cancel</Link>
                                                    <button className="btn btn-primary me-1">Submit</button>
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
export default UpdateCountry