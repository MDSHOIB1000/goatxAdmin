import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs';
import { getFlowCategoryById, postFlowCategory, updateFlowCategory } from '../../api/login/Login';
import { toast, ToastContainer } from 'react-toastify';
import Loader from '../../common/loader/Loader';

const FlowBuilderAdd = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Master",
        title_2: "Flow Builder",
        title_3: "Flow",
    };

    const [formValues, setFormValues] = useState({
        flow_name: '',  // Flow Name field
        status: '',  // Status field
    });

    const [errors, setErrors] = useState({});
    const [loader, setLoader] = useState(false);

    const params = useParams();

    const getDataById = async (id) => {
        try {
            const data = await getFlowCategoryById(id);
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

        if (!formValues.flow_name) {
            errors.flow_name = "Flow Name is required";
        }
        if (!formValues.status) {
            errors.status = "Status is required";
        }

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const toastSuccessMessage = () => {
        toast.success(`${params?.id ? "Update" : "Add"} Flow Successfully.`, {
            position: "top-center",
        });
    };

    const toastErrorMessage = () => {
        toast.error(`${params?.id ? "Update" : "Add"} Flow Failed.`, {
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
            const res = await postFlowCategory(formValues);
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
            const res = await updateFlowCategory({ data: formValues, id: params?.id });
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
                                    <h4 className="heading mb-0">{params?.id ? "Edit Flow" : "Add Flow"}</h4>
                                </div>
                                <form className="tbl-captionn" onSubmit={params?.id ? handleSubmitUpdate : handleSubmit}>
                                    <div className="row">
                                        <div className="col-xl-6 mb-3">
                                            <div className={`form-group ${errors.flow_name ? 'has-error' : ''}`}>
                                                <label htmlFor="flow_name">Workflow Name</label>
                                                <input
                                                    id="flow_name"
                                                    name="flow_name"
                                                    value={formValues.flow_name}
                                                    onChange={handleChange}
                                                    className="form-control"
                                                    placeholder="Enter Flow Name"
                                                />
                                                {errors.flow_name && (
                                                    <div className="error">{errors.flow_name}</div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <div className={`form-group ${errors.status ? 'has-error' : ''}`}>
                                                <label htmlFor="status">From ID*</label>
                                                <select
                                                    id="status"
                                                    name="status"
                                                    value={formValues.status}
                                                    onChange={handleChange}
                                                    className="form-select"
                                                    aria-label="Select status"
                                                >
                                                    <option value="">Select From ID</option>
                                                    <option value="active">11</option>
                                                    <option value="inactive">22</option>
                                                </select>
                                                {errors.status && (
                                                    <div className="error">{errors.status}</div>
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

export default FlowBuilderAdd;
