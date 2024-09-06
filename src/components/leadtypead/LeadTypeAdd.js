import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs';
import { getLeadTypeById, postLeadType, updateLeadType } from '../../api/login/Login';
import { toast, ToastContainer } from 'react-toastify';
import Loader from '../../common/loader/Loader';

const LeadTypeAdd = () => {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Master",
        title_3: "Lead Type Master",
    };

    const [formValues, setFormValues] = useState({
        name: '',      // Lead Type Name field
        is_active: false, // Is Active field
    });

    const [errors, setErrors] = useState({});
    const [loader, setLoader] = useState(false);

    const params = useParams();

    const getDataById = async (id) => {
        try {
            const data = await getLeadTypeById(id);
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

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const toastSuccessMessage = () => {
        toast.success(`${params?.id ? "Update" : "Add"} Lead Type Successfully.`, {
            position: "top-center",
        });
    };

    const toastErrorMessage = () => {
        toast.error(`${params?.id ? "Update" : "Add"} Lead Type Failed.`, {
            position: "top-center",
        });
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormValues({
            ...formValues,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validate()) return;

        setLoader(true);
        try {
            const res = await postLeadType(formValues);
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
            const res = await updateLeadType({ data: formValues, id: params?.id });
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
            {loader && <Loader />}
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0">{params?.id ? "Edit Lead Type" : "Add Lead Type"}</h4>
                                </div>
                                <form className="tbl-captionn" onSubmit={params?.id ? handleSubmitUpdate : handleSubmit}>
                                    <div className="row">
                                        <div className="col-xl-6 mb-3">
                                            <div className={`form-group ${errors.name ? 'has-error' : ''}`}>
                                                <label htmlFor="name">Lead Type Name</label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    value={formValues.name}
                                                    onChange={handleChange}
                                                    className="form-control"
                                                    placeholder="Enter Lead Type Name"
                                                />
                                                {errors.name && (
                                                    <div className="error">{errors.name}</div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                            <div className="form-group">
                                                <label htmlFor="is_active">Is Active</label>
                                                <div className="form-check">
                                                    <input
                                                        type="checkbox"
                                                        id="is_active"
                                                        name="is_active"
                                                        checked={formValues.is_active}
                                                        onChange={handleChange}
                                                        className="form-check-input"
                                                    />
                                                    <label className="form-check-label" htmlFor="is_active">
                                                        Active
                                                    </label>
                                                </div>
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

export default LeadTypeAdd;
