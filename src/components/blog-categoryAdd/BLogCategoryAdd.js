import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs';
import { clodinaryImage, getBlogCategoryById, getTestimonialById, getVideoGalleryById, postBlogCategory, postVideoGallery, testimonialPost, testimonialPostUpdate, updateBlogCategory, updateVideoGallery } from '../../api/login/Login';
import { toast, ToastContainer } from 'react-toastify';
import Loadar from '../../common/loader/Loader';
import { baseUrlImage } from '../../baseUrl';

const BLogCategoryAdd = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Master",
        title_2: "Blog Category",
        title_3: "Blog Category",
    };

    const [formValues, setFormValues] = useState({
        service_name: '',  // Service name field
        slug: '',  // Slug field
        meta_title: '',  // Meta title field
        meta_description: '',  // Meta description field
        meta_image: '',  // Meta image URL field
    });

    const [errors, setErrors] = useState({});
    const [loader, setLoader] = useState(false);

    const params = useParams();

    const getDataById = async (id) => {
        try {
            const data = await getBlogCategoryById(id);
            setFormValues(data.data);
            setImage(data.data.meta_image);
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

        if (!formValues.service_name) {
            errors.service_name = "Service name is required";
        }
        if (!formValues.slug) {
            errors.slug = "Slug is required";
        }
        if (!formValues.meta_title) {
            errors.meta_title = "Meta title is required";
        }
        if (!formValues.meta_description) {
            errors.meta_description = "Meta description is required";
        }
        if (!formValues.meta_image) {
            errors.meta_image = "Meta image URL is required";
        }

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const toastSuccessMessage = () => {
        toast.success(`${params?.id ? "Update" : "Add"} Blog Category Successfully.`, {
            position: "top-center",
        });
    };

    const toastErrorMessage = () => {
        toast.error(`${params?.id ? "Update" : "Add"} Blog Category Failed.`, {
            position: "top-center",
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoader(true);
        try {
            const res = await postBlogCategory({ ...formValues,meta_image:image });
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
            const res = await updateBlogCategory({ data: { ...formValues,meta_image:image }, id: params?.id });
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


    const imageForm = new FormData();
    const [image, setImage] = useState(formValues?.meta_image);
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
                                    <h4 className="heading mb-0">{params?.id ? "Edit Blog Category" : "Add Blog Category"}</h4>
                                </div>
                                <form className="tbl-captionn" onSubmit={params?.id ? handleSubmitUpdate : handleSubmit}>
                                    <div className="row">
                                        <div className="col-xl-4 mb-3">
                                            <div className={`form-group ${errors.service_name ? 'has-error' : ''}`}>
                                                <label htmlFor="service_name"> Name</label>
                                                <input
                                                    type="text"
                                                    id="service_name"
                                                    name="service_name"
                                                    value={formValues.service_name}
                                                    onChange={handleChange}
                                                    className="form-control"
                                                    placeholder="Enter Service Name"
                                                />
                                                {errors.service_name && (
                                                    <div className="error">{errors.service_name}</div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-xl-4 mb-3">
                                            <div className={`form-group ${errors.slug ? 'has-error' : ''}`}>
                                                <label htmlFor="slug">Slug</label>
                                                <input
                                                    type="text"
                                                    id="slug"
                                                    name="slug"
                                                    value={formValues.slug}
                                                    onChange={handleChange}
                                                    className="form-control"
                                                    placeholder="Enter Slug"
                                                />
                                                {errors.slug && (
                                                    <div className="error">{errors.slug}</div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-xl-4 mb-3">
                                            <div className={`form-group ${errors.meta_title ? 'has-error' : ''}`}>
                                                <label htmlFor="meta_title">Meta Title</label>
                                                <input
                                                    type="text"
                                                    id="meta_title"
                                                    name="meta_title"
                                                    value={formValues.meta_title}
                                                    onChange={handleChange}
                                                    className="form-control"
                                                    placeholder="Enter Meta Title"
                                                />
                                                {errors.meta_title && (
                                                    <div className="error">{errors.meta_title}</div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-xl-4 mb-3">
                                            <div className={`form-group ${errors.meta_description ? 'has-error' : ''}`}>
                                                <label htmlFor="meta_description">Meta Description</label>
                                                <textarea
                                                    id="meta_description"
                                                    name="meta_description"
                                                    value={formValues.meta_description}
                                                    onChange={handleChange}
                                                    className="form-control"
                                                    placeholder="Enter Meta Description"
                                                />
                                                {errors.meta_description && (
                                                    <div className="error">{errors.meta_description}</div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-xl-4 mb-3">
                                            <div className={`form-group ${errors.meta_image ? 'has-error' : ''}`}>
                                                <label htmlFor="meta_image">Meta Image</label>
                                                <input
                                                    type="file"
                                                    id="meta_image"
                                                    name="meta_image"
                                                    // value={formValues.meta_image}
                                                    onChange={handleChangeImage}
                                                    className="form-control"
                                                    placeholder="Enter Meta Image URL"
                                                />

                                                {image && (
                                                    <img src={`${baseUrlImage}${image}`} alt="profile" style={{ width: '150px', height: '150px' }} />
                                                )}

                                            </div>
                                        </div>
                                        <div className="col-xl-4 mb-3">
                                            <div className={`form-group ${errors.blog_id ? 'has-error' : ''}`}>
                                                <label htmlFor="blog_id">Active</label>
                                                <select
                                                    id="isActive"
                                                    name="isActive"
                                                    value={formValues.isActive}
                                                    onChange={handleChange}
                                                    className="form-control"
                                                >
                                                    <option value="">Select Is Active</option>
                                                    <option value={true}>Active</option>
                                                    <option value={false}>In Active</option>
                                                  
                                                </select>
                                              
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

export default BLogCategoryAdd;
