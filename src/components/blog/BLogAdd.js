import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs';
import { clodinaryImage, getBlogById, getBlogCategoryById, getBlogCategoryList, getTestimonialById, getVideoGalleryById, postBlog, postBlogCategory, postVideoGallery, testimonialPost, testimonialPostUpdate, updateBlog, updateBlogCategory, updateVideoGallery } from '../../api/login/Login';
import { toast, ToastContainer } from 'react-toastify';
import Loadar from '../../common/loader/Loader';
import { baseUrlImage } from '../../baseUrl';

const BLogAdd = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Master",
        title_2: "Blog",
        title_3: "Blog Add/Edit",
    };

    const [formValues, setFormValues] = useState({
        subject: '',             // Subject field
        attachment: '',          // Attachment field (could be a URL or file)
        description: '',         // Description field
        slug: '',                // Slug field
        meta_title: '',          // Meta title field
        meta_description: '',    // Meta description field
        meta_keyword: '',        // Meta keyword field
        meta_image: '',          // Meta image URL field
        blog_id: '',             // Blog category ID field
    });
    const [errors, setErrors] = useState({});
    const [loader, setLoader] = useState(false);

    const params = useParams();

    const getDataById = async (id) => {
        try {
            const data = await getBlogById(id);
            setFormValues(data.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if (params?.id) {
            getDataById(params?.id);
        }
    }, [params?.id]);


    const toastSuccessMessage = () => {
        toast.success(`${params?.id ? "Update" : "Add"} Blog  Successfully.`, {
            position: "top-center",
        });
    };

    const toastErrorMessage = () => {
        toast.error(`${params?.id ? "Update" : "Add"} Blog  Failed.`, {
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
            const res = await postBlog({ ...formValues });
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
            const res = await updateBlog({ data: { ...formValues }, id: params?.id });
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
    const handleChangeImage = async (e) => {
        const file = e.target.files[0];
        imageForm.append("image", file);
        try {
            const base64 = await clodinaryImage(imageForm);
            const fieldName = e.target.name;
            setFormValues({ ...formValues, [fieldName]: base64.data.data.url });
        } catch (error) {
            console.error("Error uploading image", error);
        }
    };

    const [dataBLog, setDataBlog] = useState();

    const getListBlogCategory = async (num) => {
        try {
            const data = await getBlogCategoryList(num, 100);
            setDataBlog(data);
        } catch (error) {
            alert(error.message);
        }
    };

    useEffect(() => {
        getListBlogCategory(0);
    }, []);

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
                                    <h4 className="heading mb-0">{params?.id ? "Edit Blog" : "Add Blog "}</h4>
                                </div>
                                <form className="tbl-captionn" onSubmit={params?.id ? handleSubmitUpdate : handleSubmit}>
                                    <div className="row">
                                        <div className="col-xl-4 mb-3">
                                            <div className={`form-group ${errors.subject ? 'has-error' : ''}`}>
                                                <label htmlFor="subject">Subject</label>
                                                <input
                                                    type="text"
                                                    id="subject"
                                                    name="subject"
                                                    value={formValues?.subject}
                                                    onChange={handleChange}
                                                    className="form-control"
                                                    placeholder="Enter Subject"
                                                />
                                                {errors.subject && (
                                                    <div className="error">{errors.subject}</div>
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
                                            <div className={`form-group ${errors.meta_keyword ? 'has-error' : ''}`}>
                                                <label htmlFor="meta_keyword">Meta Keyword</label>
                                                <input
                                                    type="text"
                                                    id="meta_keyword"
                                                    name="meta_keyword"
                                                    value={formValues.meta_keyword}
                                                    onChange={handleChange}
                                                    className="form-control"
                                                    placeholder="Enter Meta Keyword"
                                                />
                                                {errors.meta_keyword && (
                                                    <div className="error">{errors.meta_keyword}</div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-xl-4 mb-3">
                                            <div className={`form-group ${errors.blog_id ? 'has-error' : ''}`}>
                                                <label htmlFor="blog_id">Blog Category</label>
                                                <select
                                                    id="blog_id"
                                                    name="blog_id"
                                                    value={formValues.blog_id}
                                                    onChange={handleChange}
                                                    className="form-control"
                                                >
                                                    <option value="">Select Blog Category</option>
                                                    {dataBLog?.data?.map((category) => (
                                                        <option key={category._id} value={category._id}>
                                                            {category.service_name}
                                                        </option>
                                                    ))}
                                                </select>
                                                {errors.blog_id && (
                                                    <div className="error">{errors.blog_id}</div>
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
                                        <div className="col-xl-4 mb-3">
                                            <div className={`form-group ${errors.meta_image ? 'has-error' : ''}`}>
                                                <label htmlFor="meta_image">Meta Image</label>
                                                <input
                                                    type="file"
                                                    id="meta_image"
                                                    name="meta_image"
                                                    onChange={handleChangeImage}
                                                    className="form-control"
                                                    placeholder="Upload Meta Image"
                                                />

                                                {formValues?.meta_image && (
                                                    <img src={`${baseUrlImage}${formValues?.meta_image}`} alt="profile" style={{ width: '150px', height: '150px' }} />
                                                )}
                                            </div>
                                        </div>
                                       
                                        <div className="col-xl-4 mb-3">
                                            <div className={`form-group ${errors.attachment ? 'has-error' : ''}`}>
                                                <label htmlFor="attachment">Attachment</label>
                                                <input
                                                    type="file"
                                                    id="attachment"
                                                    name="attachment"
                                                    onChange={handleChangeImage}
                                                    className="form-control"
                                                    placeholder="Upload Attachment"
                                                />
                                                {formValues?.attachment && (
                                                    <img src={`${baseUrlImage}${formValues?.attachment}`} alt="profile" style={{ width: '150px', height: '150px' }} />
                                                )}
                                            </div>
                                        </div>
                                       

                                        <div className="col-xl-4 mb-3">
                                            <div className={`form-group ${errors.description ? 'has-error' : ''}`}>
                                                <label htmlFor="description">Description</label>
                                                <textarea
                                                    id="description"
                                                    name="description"
                                                    value={formValues.description}
                                                    onChange={handleChange}
                                                    className="form-control"
                                                    placeholder="Enter Description"
                                                />
                                                {errors.description && (
                                                    <div className="error">{errors.description}</div>
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

export default BLogAdd;
