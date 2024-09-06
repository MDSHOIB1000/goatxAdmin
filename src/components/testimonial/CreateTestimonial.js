import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs';
import CustomInputField from '../../common/CustomInputField';
import { clodinaryImage, getTestimonialById, testimonialPost, testimonialPostUpdate } from '../../api/login/Login';
import { toast, ToastContainer } from 'react-toastify';
import Loadar from '../../common/loader/Loader';
import { baseUrlImage } from '../../baseUrl';

const CreateTestimonial = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Master",
        title_2: "Testimonial",
        title_3: "Testimonial",
    }

    const [formValues, setFormValues] = useState({
        name: '',
        description: '',
        profile: '',
        isActive: '', // 'yes' or 'no' based on selection
    });

    const [errors, setErrors] = useState({});
    const [image, setImage] = useState(null);
    const [loader, setLoader] = useState(false);

    const params = useParams();

    const getDataById = async (id) => {
        try {
            const data = await getTestimonialById(id);

            setFormValues(data.data.data);
            setImage(data.data.data.profile);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        if (params?.id) {
            getDataById(params?.id);
        }
    }, [params?.id]);

    const validate = () => {
        let errors = {};

        if (!formValues.name) {
            errors.name = "Name is required";
        }
        if (!formValues.description) {
            errors.description = "Description is required";
        }
        if (!formValues.profile) {
            errors.profile = "Profile is required";
        }
        if (!formValues.isActive) {
            errors.isActive = "Active status is required";
        }

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const toastSuccessMessage = () => {
        toast.success(`${params?.id ? "Update" : "Add"} Testimonial Successfully.`, {
            position: "top-center",
        });
    };

    const toastErrorMessage = () => {
        toast.error(`${params?.id ? "Update" : "Add"} Testimonial Failed.`, {
            position: "top-center",
        });
    };
    const imageForm = new FormData();
    const handleChangeImage = async (e) => {
        const file = e.target.files[0];
        imageForm.append("image", file);
        try {
            const base64 = await clodinaryImage(imageForm);
            setImage(base64.data.data.url);
            setFormValues({ ...formValues, profile: base64.data.data.url });
        } catch (error) {
            console.error("Error uploading image", error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoader(true);
        try {
            const res = await testimonialPost({ ...formValues, profile: image });
            console.log(res);

            if (res?.statusCode == 200) {
                toastSuccessMessage();
            } else {
                toastErrorMessage();
            }
        } catch (error) {
            toastErrorMessage();
        }
        setLoader(false);
    };
    const handleSubmitUpdate = async (e) => {
        e.preventDefault();

        setLoader(true);
        try {
            const res = await testimonialPostUpdate({ data: { ...formValues, profile: image }, id: params?.id });
            if (res?.statusCode == 200) {
                toastSuccessMessage();
            } else {
                toastErrorMessage();
            }
        } catch (error) {
            toastErrorMessage();
        }
        setLoader(false);
    };

    return (
        <>
            <ToastContainer />
            {loader && <Loadar />}
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0">ADD Testimonial -</h4>
                                </div>
                                <form className="tbl-captionn" onSubmit={params?.id ? handleSubmitUpdate : handleSubmit}>
                                    <div className="row">
                                        <div className="col-xl-4 mb-3">
                                            <CustomInputField
                                                type="text"
                                                value={formValues.name}
                                                hasError={errors.name}
                                                onChange={handleChange}
                                                id="name"
                                                name="name"
                                                placeholder="Name"
                                            />
                                            {errors.name && <div className="error">{errors.name}</div>}
                                        </div>
                                        <div className="col-xl-4 mb-3">
                                            <CustomInputField
                                                type="text"
                                                value={formValues.description}
                                                hasError={errors.description}
                                                onChange={handleChange}
                                                id="description"
                                                name="description"
                                                placeholder="Description"
                                            />
                                            {errors.description && <div className="error">{errors.description}</div>}
                                        </div>
                                        <div className="col-xl-4 mb-3">
                                            <CustomInputField
                                                type="file"
                                                onChange={handleChangeImage}
                                                hasError={errors.profile}
                                                id="profile"
                                                name="profile"
                                                placeholder="Profile"
                                            />
                                            {errors.profile && <div className="error">{errors.profile}</div>}
                                            {image && (
                                                <img src={`${baseUrlImage}${image}`} alt="profile" style={{ width: '150px', height: '150px' }} />
                                            )}
                                        </div>
                                        <div className="col-xl-4 mb-3">
                                            <div className={`form-group ${errors.isActive ? 'has-error' : ''}`}>
                                                <label htmlFor="isActive">Is Active</label>
                                                <select
                                                    id="isActive"
                                                    name="isActive"
                                                    value={formValues.isActive}
                                                    onChange={handleChange}
                                                    className="form-control"
                                                >
                                                    <option value="">Select Status</option>
                                                    <option value={true}>Yes</option>
                                                    <option value={false}>No</option>
                                                </select>
                                                {errors.isActive && (
                                                    <div className="error">{errors.isActive}</div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <button className="btn btn-primary me-1" type="submit">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CreateTestimonial;
