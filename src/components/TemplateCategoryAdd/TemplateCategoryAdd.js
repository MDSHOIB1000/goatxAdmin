import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs';
import { getTemplateCategoryById, postTemplateCategory, updateTemplateCategory } from '../../api/login/Login';
import { toast, ToastContainer } from 'react-toastify';
import Loader from '../../common/loader/Loader';

const TemplateCategoryAdd = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Master",
        title_2: "Category",
        title_3: "Template Category",
    };

    const [formValues, setFormValues] = useState({
        category_name: '',  // Category Name field
        status: '',  // Status field
    });

    const [errors, setErrors] = useState({});
    const [loader, setLoader] = useState(false);

    const params = useParams();

    const getDataById = async (id) => {
        try {
            const data = await getTemplateCategoryById(id);
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

        if (!formValues.category_name) {
            errors.category_name = "Category Name is required";
        }
        if (!formValues.status) {
            errors.status = "Status is required";
        }

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const toastSuccessMessage = () => {
        toast.success(`${params?.id ? "Update" : "Add"} Category Successfully.`, {
            position: "top-center",
        });
    };

    const toastErrorMessage = () => {
        toast.error(`${params?.id ? "Update" : "Add"} Category Failed.`, {
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
            const res = await postTemplateCategory(formValues);
            if (res?.statusCode === 200) {
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
            const res = await updateTemplateCategory({ data: formValues, id: params?.id });
            if (res?.statusCode === 200) {
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
            {loader && <Loader />}
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0">{params?.id ? "Edit Template Category" : "Add Template Category"}</h4>
                                </div>
                                <form className="tbl-captionn" onSubmit={params?.id ? handleSubmitUpdate : handleSubmit}>
                                    <div className="row">
                                        <div className="col-xl-6 mb-3">
                                            <div className={`form-group ${errors.category_name ? 'has-error' : ''}`}>
                                                <label htmlFor="category_name">Template Category Name</label>
                                                <input
                                                    id="category_name"
                                                    name="category_name"
                                                    value={formValues.category_name}
                                                    onChange={handleChange}
                                                    className="form-control"
                                                    placeholder="Enter Category Name"
                                                />
                                                {errors.category_name && (
                                                    <div className="error">{errors.category_name}</div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <div className={`form-group ${errors.status ? 'has-error' : ''}`}>
                                                <label htmlFor="status">Status</label>
                                                <select
                                                    id="status"
                                                    name="status"
                                                    value={formValues.status}
                                                    onChange={handleChange}
                                                    className="form-select"
                                                    aria-label="Select status"
                                                >
                                                    <option value="">Select Status</option>
                                                    <option value="active">Active</option>
                                                    <option value="inactive">Inactive</option>
                                                </select>
                                                {errors.status && (
                                                    <div className="error">{errors.status}</div>
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

export default TemplateCategoryAdd;
