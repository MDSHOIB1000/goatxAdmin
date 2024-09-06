import { Link } from "react-router-dom"
import CustomInputField from "../../../../../common/CustomInputField";
import { Formik } from "formik";
import CustomDropdown from "../../../../../common/CustomDropdown";
import CustomTextArea from "../../../../../common/CustomTextArea";
import { areaList, zoneCountryAdd } from "../../../../../api/login/Login";
import { useEffect, useState } from "react";


function CountryAddZone({ i, language, languageId, submitForm, handleChangeCus, item }) {
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

        if (!values.meta_title) {
            errors.meta_title = "Meta Title is required";
        }

        if (!values.meta_description) {
            errors.meta_description = "Meta Description is required";
        }

        if (!values.meta_keyword) {
            errors.meta_keyword = "Meta KeyWord is required";
        }

        if (!values.parentArea) {
            errors.parentArea = "Parent Area is required";
        }
        if (!values.name) {
            errors.name = "Name is required";
        }
        if (!values.uni_code) {
            errors.uni_code = "Uniq Code is required";
        }
        if (!values.description) {
            errors.description = "Description is required";
        }

        return errors;
    };

    const [areas, setAreas] = useState()


    const changeHandle = (selectedData) => {
        // TODO
    };

    const addZoneCountry = async () => {
        try {
            const ares = await areaList()
            setAreas(ares?.data)

        } catch (error) {
            alert(error.message)
        }
    }
    useEffect(() => {
        addZoneCountry()
    }, [])

    return (
        <>

            <Formik
                initialValues={item}
                validate={validate}
                onSubmit={submitForm}
                enableReinitialize
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
                        <form className="tbl-captionn">
                            <div className="row">
                                <div className="col-xl-4 mb-3">
                                    <CustomInputField
                                        type="text"
                                        placeholder="Name *"
                                        value={values.name}
                                        hasError={errors.name && touched.name}
                                        onChange={(e) => { handleChangeCus(e, item.language_id) }}
                                        onBlur={handleBlur}
                                        errorMsg={errors.name}
                                        autoFocus={true}
                                        id="name"
                                        name='name'
                                    />
                                </div>
                                <div className="col-xl-4 mb-3">
                                    <CustomInputField
                                        type="text"
                                        placeholder="Shorting number *"
                                        value={values.sort_no}
                                        hasError={errors.sort_no && touched.sort_no}
                                        onChange={(e) => { handleChangeCus(e, item.language_id) }}
                                        onBlur={handleBlur}
                                        errorMsg={errors.sort_no}
                                        autoFocus={true}
                                        id="sort_no"
                                        name='sort_no'
                                    />
                                </div>

                                <div className="col-xl-4 mb-3">
                                    <CustomInputField
                                        type="text"
                                        placeholder="Uniq Code *"
                                        value={values.uni_code}
                                        hasError={errors.uni_code && touched.uni_code}
                                        onChange={(e) => { handleChangeCus(e, item.language_id) }}
                                        onBlur={handleBlur}
                                        errorMsg={errors.uni_code}
                                        autoFocus={true}
                                        id="uni_code"
                                        name='uni_code'
                                    />
                                </div>

                                <div className="col-xl-4 mb-3">
                                    <CustomInputField
                                        type="text"
                                        placeholder="Meta Title *"
                                        value={values.meta_title}
                                        hasError={errors.meta_title && touched.meta_title}
                                        onChange={(e) => { handleChangeCus(e, item.language_id) }}
                                        onBlur={handleBlur}
                                        errorMsg={errors.meta_title}
                                        autoFocus={true}
                                        id="meta_title"
                                        name='meta_title'
                                    />
                                </div>
                                <div className="col-xl-4 mb-3">
                                    <CustomInputField
                                        type="text"
                                        placeholder="Meta Description *"
                                        value={values.meta_description}
                                        hasError={errors.meta_description && touched.meta_description}
                                        onChange={(e) => { handleChangeCus(e, item.language_id) }}
                                        onBlur={handleBlur}
                                        errorMsg={errors.meta_description}
                                        autoFocus={true}
                                        id="meta_description"
                                        name='meta_description'
                                    />
                                </div>
                                <div className="col-xl-4 mb-3">
                                    <CustomInputField
                                        type="text"
                                        placeholder="Meta Key Word *"
                                        value={values.meta_keyword}
                                        hasError={errors.meta_keyword && touched.meta_keyword}
                                        onChange={(e) => { handleChangeCus(e, item.language_id) }}
                                        onBlur={handleBlur}
                                        errorMsg={errors.meta_keyword}
                                        autoFocus={true}
                                        id="meta_keyword"
                                        name='meta_keyword'
                                    />
                                </div>
                                {/* <div className="col-xl-4 mb-3">

                                    <CustomDropdown
                                        itemList={areaType}
                                        placeholder="Parent Area *"
                                        value={values.parentArea}
                                        hasError={errors.parentArea && touched.parentArea}
                                        errorMsg={errors.parentArea}
                                        isSingleSelect={false}
                                        icon={true}
                                        onChange={changeHandle}
                                    />
                                </div> */}
                                <div className="col-xl-4 mb-3">
                                    <div className="dropdownWrapper">
                                        <select className="form-select" aria-label="Default select example" name="area_id" value={item.area_id} onChange={(e) => { handleChangeCus(e, item.language_id) }}>
                                            <option selected> select Area</option>
                                            {areas && areas?.map((item) => {
                                                return <option value={item.id}>{item.name}</option>
                                            })}

                                        </select>
                                    </div>
                                </div>

                                <div className="col-xl-4 mb-3">
                                    <div className="dropdownWrapper">
                                        <select className="form-select" aria-label="Default select example" name="is_active" onChange={(e) => { handleChangeCus(e, item.language_id) }}>
                                            <option selected> select status</option>
                                            <option value={'Enabled'}>Enabled</option>
                                            <option value={'diasabled'}>diasabled</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-xl-6 mb-3">
                                    <CustomTextArea
                                        placeholder="Description *"
                                        value={values.description}
                                        hasError={errors.description && touched.description}
                                        onChange={(e) => { handleChangeCus(e, item.language_id) }}
                                        onBlur={handleBlur}
                                        errorMsg={errors.description}
                                        autoFocus={false}
                                        rows="6"
                                        id="description"
                                        name='description'
                                    />
                                </div>
                            </div>
                            <div>
                                <Link to='/country' className="btn btn-danger light ms-1">Cancel</Link>
                                {i == language?.length - 1 && <button type="button" onClick={submitForm} className="btn btn-primary me-1">
                                    Submit
                                </button>}
                            </div>
                        </form>
                    );
                }}
            </Formik>

        </>
    )
}
export default CountryAddZone