import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CustomInputField from '../../../../../common/CustomInputField';
import WithoutAtricCustomInputField from '../../../../../common/withoutAtrricCustomInp/WithoutAtricCustomInputField';
import CustomTextArea from '../../../../../common/CustomTextArea';
import { baseUrlImage } from '../../../../../baseUrl';

function NewtabAddServiceMaster({ i, colodinaryImage, language, service_category, course_type, submitForm, handleChangeCus, item, params }) {
    const [formData, setFormData] = useState(item);
    console.log(formData);

    const [errors, setErrors] = useState({});

    useEffect(() => {
        setFormData(item);
    }, [item]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const validateForm = () => {
        let newErrors = {};
        if (!formData.service_name) newErrors.service_name = 'Course Name is required';
        // if (!formData.short_description) newErrors.short_description = 'Short Description is required';
        // if (!formData.full_description) newErrors.full_description = 'Full Description is required';
        // if (!formData.service_category) newErrors.service_category = 'Service Category is required';
        if (formData.is_active === null) newErrors.is_active = 'Active status is required';
        // if (!formData.meta_title) newErrors.meta_title = 'Meta Title is required';
        // if (!formData.meta_keyword) newErrors.meta_keyword = 'Meta Keyword is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            submitForm({ [formData.language_id]: formData });
        }
    };

    return (
        <form className="tbl-captionn" onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-xl-6 mb-3">
                    <CustomInputField
                        type="text"
                        placeholder="Course Name "
                        value={formData.service_name}
                        hasError={!!errors.service_name}
                        onChange={handleChange}
                        errorMsg={errors.service_name}
                        id="service_name"
                        name="service_name"
                    />
                </div>
                <div className="col-xl-6 mb-3">
                    <div className="d-flex">
                        {formData.icon && (
                            <img
                                src={`${baseUrlImage}${formData.icon}`}
                                alt="profile"
                                width={50}
                                height={60}
                            />
                        )}
                        <CustomInputField
                            type="file"
                            onChange={(e) => colodinaryImage(e, formData.language_id)}
                            id="icon"
                            name="icon"
                            placeholder="Icon Image"
                        />

                    </div>
                </div>

                <div className="col-xl-6 mb-3">
                    <div className="d-flex">
                        {formData.banner_img && (
                            <img
                                src={`${baseUrlImage}${formData.banner_img}`}
                                alt="profile"
                                width={50}
                                height={60}
                            />
                        )}
                        <CustomInputField
                            type="file"
                            onChange={(e) => colodinaryImage(e, formData.language_id)}
                            id="banner_img"
                            name="banner_img"
                            placeholder="Banner Image"
                        />
                    </div>
                </div>
                <div className="col-xl-6 mb-3">
                    <select
                        className="form-select"
                        name="course_type"
                        value={formData?.course_type}
                        onChange={handleChange}
                    >
                        <option value="" disabled>Select Course Type</option>
                        {course_type && course_type.map((courseType, i) => (
                            <option key={i} value={courseType._id}>
                                {courseType?.course_type_name}
                            </option>
                        ))}
                    </select>
                    {errors.course_type && <div className="invalid-feedback d-block">{errors.course_type}</div>}
                </div>
                <div className="col-xl-6 mb-3">
                    <select
                        className="form-select"
                        name="service_category"
                        value={formData?.service_category}
                        onChange={handleChange}
                    >
                        <option value="" disabled>Select Stream</option>
                        {service_category && service_category.map((category) => (
                            <option key={category._id} value={category._id}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                    {errors.service_category && <div className="invalid-feedback d-block">{errors.service_category}</div>}
                </div>
                <div className="col-xl-6 mb-3">
                    <select
                        className="form-select"
                        name="duration_type"
                        value={formData?.duration_type}
                        onChange={handleChange}
                    >
                        <option value="" disabled>Select Durations</option>
                        <option value="Day" >Day</option>
                        <option value="Week" >Week</option>
                        <option value="Month" >Month</option>
                        <option value="Year" >Year</option>

                    </select>
                    {errors.duration_type && <div className="invalid-feedback d-block">{errors.service_category}</div>}
                </div>
                <div className="col-xl-6 mb-3">
                    <select
                        className="form-select"
                        name="is_active"
                        value={formData.is_active}
                        onChange={handleChange}
                    >
                        <option value="">Select status</option>
                        <option value={true}>Active</option>
                        <option value={false}>In Active</option>
                    </select>
                    {errors.is_active && <div className="invalid-feedback d-block">{errors.is_active}</div>}
                </div>
                <div className="col-xl-6 mb-3">
                    <WithoutAtricCustomInputField
                        type="text"
                        value={formData.meta_title}
                        hasError={!!errors.meta_title}
                        onChange={handleChange}
                        errorMsg={errors.meta_title}
                        id="meta_title"
                        name="meta_title"
                        placeholder="Meta Title"
                    />
                </div>
                <div className="col-xl-6 mb-3">
                    <CustomInputField
                        type="number"
                        value={formData.duration}
                        hasError={!!errors.duration}
                        onChange={handleChange}
                        errorMsg={errors.duration}
                        id="duration"
                        name="duration"
                        placeholder="Durations"
                    />
                </div>
                <div className="col-xl-6 mb-3">
                    <WithoutAtricCustomInputField
                        type="file"
                        onChange={(e) => colodinaryImage(e, formData.language_id)}
                        id="meta_image"
                        name="meta_image"
                        placeholder="Meta Image"
                    />
                </div>
                <div className="col-xl-6 mb-3">
                    <WithoutAtricCustomInputField
                        type="text"
                        value={formData.meta_keyword}
                        hasError={!!errors.meta_keyword}
                        onChange={handleChange}
                        errorMsg={errors.meta_keyword}
                        id="meta_keyword"
                        name="meta_keyword"
                        placeholder="Meta Keyword"
                    />
                </div>
                <div className="col-xl-6 mb-3">
                    <CustomTextArea
                        placeholder="Short Description "
                        value={formData.short_description}
                        hasError={!!errors.short_description}
                        onChange={handleChange}
                        errorMsg={errors.short_description}
                        rows="3"
                        id="short_description"
                        name="short_description"
                    />
                </div>
                <div className="col-xl-6 mb-3">
                    <CustomTextArea
                        placeholder="Full Description "
                        value={formData.full_description}
                        hasError={!!errors.full_description}
                        onChange={handleChange}
                        errorMsg={errors.full_description}
                        rows="3"
                        id="full_description"
                        name="full_description"
                    />
                </div>
            </div>
            <div>
                <Link to='/course-master' className="btn btn-danger light ms-1">Cancel</Link>
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
}

export default NewtabAddServiceMaster;