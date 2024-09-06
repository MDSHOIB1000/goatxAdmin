import { Formik } from 'formik';
import * as Yup from 'yup';
import React from 'react';
import CustomInputField from '../../../../../../common/CustomInputField';
import CustomTextArea from '../../../../../../common/CustomTextArea';
import { Link } from 'react-router-dom';

import { baseUrlImage } from '../../../../../../baseUrl';
import  iconImg  from '../../../../../../assets/images/logo/profile-pic.png';
import { pay } from '../../../../../../assets/images/logo/pay-logo.png';

function TabAddServiceMaster({ i, colodinaryImage, language, service_category, submitForm, handleChangeCus, item, params }) {
    // Define validation schema using Yup
    const validationSchema = Yup.object().shape({
        service_name: Yup.string().required('Service Name is required'),
        short_description: Yup.string().required('Short Description is required'),
        full_description: Yup.string().required('Full Description is required'),
        service_category: Yup.string().required('Service Category is required'),
        is_active: Yup.boolean().required('Active status is required'),
        meta_title: Yup.string().required('Meta Title is required'),
        meta_keyword: Yup.string().required('Meta Keyword is required'),
    });

    return (
        <>
            <Formik
                initialValues={item}
                validationSchema={validationSchema}
                onSubmit={submitForm}
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
                        <form className="tbl-captionn" onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-xl-6 mb-3">
                                    <CustomInputField
                                        type="text"
                                        placeholder="Service Name *"
                                        value={values.service_name}
                                        hasError={errors.service_name && touched.service_name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        errorMsg={errors.service_name}
                                        autoFocus={true}
                                        id="service_name"
                                        name="service_name"
                                    />
                                </div>
                                <div className="col-xl-6 mb-3">
                                    {params?.id ? (
                                        <div className="d-flex">
                                            <img
                                                src={`${baseUrlImage}${item?.icon}`}
                                                alt="profile"
                                                width={50}
                                                height={60}
                                            />
                                            <CustomInputField
                                                type="file"
                                                hasError={errors.icon && touched.icon}
                                                onChange={(e) => colodinaryImage(e, item?.language_id)}
                                                onBlur={handleBlur}
                                                errorMsg={errors.icon}
                                                autoFocus={true}
                                                id="icon"
                                                name="icon"
                                                placeholder="Icon Image"
                                            />
                                        </div>
                                    ) : (
                                        <div className="d-flex">
                                            {item?.icon && (
                                                <img
                                                    src={`${baseUrlImage}${item?.icon}`}
                                                    alt="profile"
                                                    width={50}
                                                    height={60}
                                                />
                                            )}
                                            <CustomInputField
                                                type="file"
                                                hasError={errors.icon && touched.icon}
                                                onChange={(e) => colodinaryImage(e, item?.language_id)}
                                                onBlur={handleBlur}
                                                errorMsg={errors.icon}
                                                autoFocus={true}
                                                id="icon"
                                                name="icon"
                                                placeholder="Icon Image"
                                            />
                                        </div>
                                    )}
                                </div>
                                <div className="col-xl-6 mb-3">
                                    <CustomTextArea
                                        placeholder="Short Description"
                                        value={values.short_description}
                                        hasError={errors.short_description && touched.short_description}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        errorMsg={errors.short_description}
                                        autoFocus={false}
                                        rows="3"
                                        id="short_description"
                                        name="short_description"
                                    />
                                </div>
                                <div className="col-xl-6 mb-3">
                                    <CustomTextArea
                                        placeholder="Full Description *"
                                        value={values.full_description}
                                        hasError={errors.full_description && touched.full_description}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        errorMsg={errors.full_description}
                                        autoFocus={false}
                                        rows="3"
                                        id="full_description"
                                        name="full_description"
                                    />
                                </div>
                                <div className="col-xl-6 mb-3">
                                    {params?.id ? (
                                        <div className="d-flex">
                                            <img
                                                src={`${baseUrlImage}${item?.banner_img}`}
                                                alt="profile"
                                                width={50}
                                                height={60}
                                            />
                                            <CustomInputField
                                                type="file"
                                                hasError={errors.banner_img && touched.banner_img}
                                                onChange={(e) => colodinaryImage(e, item?.language_id)}
                                                onBlur={handleBlur}
                                                errorMsg={errors.banner_img}
                                                autoFocus={true}
                                                id="banner_img"
                                                name="banner_img"
                                                placeholder="Banner Image"
                                            />
                                        </div>
                                    ) : (
                                        <div className="d-flex">
                                            {item?.banner_img ? (
                                                <img
                                                    src={`${baseUrlImage}${item?.banner_img}`}
                                                    alt="profile"
                                                    width={50}
                                                    height={60}
                                                />
                                            ) : <imgs
                                                src={iconImg}
                                                alt="profile"
                                                width={50}
                                                height={60}
                                            />}
                                            <CustomInputField
                                                type="file"
                                                hasError={errors.banner_img && touched.banner_img}
                                                onChange={(e) => colodinaryImage(e, item?.language_id)}
                                                onBlur={handleBlur}
                                                errorMsg={errors.banner_img}
                                                autoFocus={true}
                                                id="banner_img"
                                                name="banner_img"
                                                placeholder="Banner Image"
                                            />
                                        </div>
                                    )}
                                </div>
                                <div className="col-xl-6">
                                    <select
                                        className="form-select"
                                        aria-label="Default select example"
                                        name="service_category"
                                        value={values?.service_name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    >
                                        <option value="" disabled>Open this select service category</option>
                                        {service_category && service_category.map((category) => (
                                            <option key={category.id} value={category.id}>
                                                {category.name}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.service_category && touched.service_category && (
                                        <div className="invalid-feedback d-block">{errors.service_category}</div>
                                    )}
                                </div>
                                <div className="col-xl-6 mb-3">
                                    {/* <select
                                        className="form-select"
                                        aria-label="Default select example"
                                        name="is_active"
                                        value={values.is_active}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    >
                                        <option value="">Open this select</option>
                                        <option value={true}>Yes</option>
                                        <option value={false}>No</option>
                                    </select>
                                    {errors.is_active && touched.is_active && (
                                        <div className="invalid-feedback d-block">{errors.is_active}</div>
                                    )} */}
                                    <select
                                        className="form-select"
                                        aria-label="Default select example"
                                        id="dmtApiType"
                                        name="dmtApiType"
                                        value={values.is_active}
                                        onChange={handleChange} // Update handler
                                        hasError={errors.is_active && touched.is_active}
                                        onBlur={handleBlur}
                                        errorMsg={touched.is_active && errors.is_active}
                                        autoFocus={true}
                                    >
                                        <option value="">Open this select</option>
                                        <option value={true}>Active</option>
                                        <option value={false}>In Active</option>
                                    </select>
                                </div>
                                <div className="col-xl-6 mb-3">
                                    <CustomInputField
                                        type="text"
                                        value={values.meta_title}
                                        hasError={errors.meta_title && touched.meta_title}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        errorMsg={errors.meta_title}
                                        autoFocus={true}
                                        id="meta_title"
                                        name="meta_title"
                                        placeholder="Meta Title"
                                    />
                                </div>
                                <div className="col-xl-6 mb-3">
                                    <CustomInputField
                                        type="file"
                                        hasError={errors.meta_image && touched.meta_image}
                                        onChange={(e) => colodinaryImage(e, item?.language_id)}
                                        onBlur={handleBlur}
                                        errorMsg={errors.meta_image}
                                        autoFocus={true}
                                        id="meta_image"
                                        name="meta_image"
                                        placeholder="Meta Image"
                                    />
                                </div>
                                <div className="col-xl-6 mb-3">
                                    <CustomInputField
                                        type="text"
                                        value={values.meta_keyword}
                                        hasError={errors.meta_keyword && touched.meta_keyword}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        errorMsg={errors.meta_keyword}
                                        autoFocus={true}
                                        id="meta_keyword"
                                        name="meta_keyword"
                                        placeholder="Meta Keyword"
                                    />
                                </div>
                            </div>
                            <div>
                               
                                <Link to='/service-master' className="btn btn-danger light ms-1">Cancel</Link>
                                {i === language?.length - 2 && (
                                    <button type="button" className="btn btn-primary me-1">
                                        Next
                                    </button>
                                )}
                                {i === language?.length - 1 && (
                                    <button
                                        className="btn btn-primary me-1"
                                        type="submit"
                                    >
                                        {params?.id ? "Update" : "Add"}
                                    </button>
                                )}
                            </div>
                        </form>
                    );
                }}
            </Formik>
        </>
    );
}

export default TabAddServiceMaster;
