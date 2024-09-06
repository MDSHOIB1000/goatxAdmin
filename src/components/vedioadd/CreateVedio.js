import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs';
import {  getTestimonialById, getVideoGalleryById, postVideoGallery, testimonialPost, testimonialPostUpdate, updateVideoGallery } from '../../api/login/Login';
import { toast, ToastContainer } from 'react-toastify';
import Loadar from '../../common/loader/Loader';

const CreateVedio = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Master",
        title_2: "Vedio",
        title_3: "Vedio",
    };

    const [formValues, setFormValues] = useState({
        video: '',  // Video field
        isActive: '', // 'yes' or 'no' based on selection
    });

    const [errors, setErrors] = useState({});
    const [loader, setLoader] = useState(false);

    const params = useParams();

    const getDataById = async (id) => {
        try {
            const data = await getVideoGalleryById(id);
            setFormValues(data.data.data);
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

        if (!formValues.video) {
            errors.video = "Video is required";
        }
        if (!formValues.isActive) {
            errors.isActive = "Active status is required";
        }

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const toastSuccessMessage = () => {
        toast.success(`${params?.id ? "Update" : "Add"} Video Successfully.`, {
            position: "top-center",
        });
    };

    const toastErrorMessage = () => {
        toast.error(`${params?.id ? "Update" : "Add"} Video Failed.`, {
            position: "top-center",
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;

        setLoader(true);
        try {
            const res = await postVideoGallery({ ...formValues });
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
        if (!validate()) return;

        setLoader(true);
        try {
            const res = await updateVideoGallery({ data: { ...formValues }, id: params?.id });
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
                                    <h4 className="heading mb-0">ADD Video -</h4>
                                </div>
                                <form className="tbl-captionn" onSubmit={params?.id ? handleSubmitUpdate : handleSubmit}>
                                    <div className="row">
                                        <div className="col-xl-4 mb-3">
                                            <div className={`form-group ${errors.video ? 'has-error' : ''}`}>
                                                <label htmlFor="video">Video</label>
                                                <input
                                                    type="text"
                                                    id="video"
                                                    name="video"
                                                    value={formValues.video}
                                                    onChange={handleChange}
                                                    className="form-control"
                                                    placeholder="Enter Video URL"
                                                />
                                                {errors.video && (
                                                    <div className="error">{errors.video}</div>
                                                )}
                                            </div>
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
                                                    <option value="true">Yes</option>
                                                    <option value="false">No</option>
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

export default CreateVedio;
