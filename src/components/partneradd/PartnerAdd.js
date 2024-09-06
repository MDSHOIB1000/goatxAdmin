import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs';
import { clodinaryImage, getPartnerById, postPartner, updatePartner } from '../../api/login/Login';
import { toast, ToastContainer } from 'react-toastify';
import Loadar from '../../common/loader/Loader';
import { baseUrlImage } from '../../baseUrl';

const PartnerAdd = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Master",
        title_2: "Partner",
        title_3: "Partner",
    };

    const [formValues, setFormValues] = useState({
        name: '',  // Partner name field
        description: '',  // Description field
        profile: '',  // Profile URL field
        image: '',  // Image URL field
        isActive: true,  // Active status field
    });

    const [errors, setErrors] = useState({});
    const [loader, setLoader] = useState(false);
    const params = useParams();

    const getDataById = async (id) => {
        try {
            const data = await getPartnerById(id);
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

    const validate = () => {
        let errors = {};

        if (!formValues.name) {
            errors.name = "Name is required";
        }
        if (!formValues.description) {
            errors.description = "Description is required";
        }
        if (!formValues.profile) {
            errors.profile = "Profile URL is required";
        }
       

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const toastSuccessMessage = () => {
        toast.success(`${params?.id ? "Update" : "Add"} Partner Successfully.`, {
            position: "top-center",
        });
    };

    const toastErrorMessage = () => {
        toast.error(`${params?.id ? "Update" : "Add"} Partner Failed.`, {
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
            const res = await postPartner({ ...formValues });
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
            const res = await updatePartner({ data: { ...formValues }, id: params?.id });
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
        const { name, files } = e.target;
        const file = files[0];
        imageForm.append("image", file);
    
        try {
            const base64 = await clodinaryImage(imageForm);
            setFormValues({ ...formValues, [name]: base64.data.data.url });
           
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
                                    <h4 className="heading mb-0">{params?.id ? "Edit Partner" : "Add Partner"}</h4>
                                </div>
                                <form className="tbl-captionn" onSubmit={params?.id ? handleSubmitUpdate : handleSubmit}>
                                    <div className="row newForm">
                                        <div className="col-xl-4 mb-3">
                                            <div className={`form-group ${errors.name ? 'has-error' : ''}`}>
                                                <label htmlFor="name">Name</label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    value={formValues.name}
                                                    onChange={handleChange}
                                                    className="form-control"
                                                    placeholder="Enter Name"
                                                />
                                                {errors.name && (
                                                    <div className="error">{errors.name}</div>
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
                                        <div className="col-xl-4 mb-3">
                                            <div className={`form-group ${errors.profile ? 'has-error' : ''}`}>
                                                <label htmlFor="image">Profile</label>
                                                <input
                                                    type="file"
                                                    id="image"
                                                    name="profile"
                                                    onChange={handleChangeImage}
                                                    className="form-control"
                                                />

                                                {formValues.profile && (
                                                    <img src={`${baseUrlImage}${formValues.profile}`} alt="profile" style={{ width: '150px', height: '150px' }} />
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-xl-4 mb-3">
                                            <div className={`form-group ${errors.image ? 'has-error' : ''}`}>
                                                <label htmlFor="image">Image</label>
                                                <input
                                                    type="file"
                                                    id="image"
                                                    name="image"
                                                    onChange={handleChangeImage}
                                                    className="form-control"
                                                />

                                                {formValues.image && (
                                                    <img src={`${baseUrlImage}${formValues.image}`} alt="profile" style={{ width: '150px', height: '150px' }} />
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-xl-4 mb-3">
                                            <div className="form-group">
                                                <label htmlFor="isActive">Active Status</label>
                                                <select
                                                    id="isActive"
                                                    name="isActive"
                                                    value={formValues.isActive}
                                                    onChange={handleChange}
                                                    className="form-control"
                                                >
                                                    <option value={true}>Active</option>
                                                    <option value={false}>Inactive</option>
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
};

export default PartnerAdd;
