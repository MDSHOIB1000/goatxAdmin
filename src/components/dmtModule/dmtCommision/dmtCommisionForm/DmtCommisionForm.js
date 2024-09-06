import React, { useEffect, useState } from 'react';
import CustomInputField from '../../../../common/CustomInputField';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Breadcrumbs from '../../../../common/breadcrumb/Breadcrumbs';
import { adddmtcomm, getdmtcommagId, getdmtcommscheme, getDmtCommSchemeID, relatedService, relatedService2, updatedmtcommagId } from '../../../../api/login/Login';
import { ToastContainer, toast } from 'react-toastify';

function DmtCommisionForm() {
    const [comboData, setcomboData] = useState(null);
    const params = useParams();
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState([{
        dmt_comm_id: "",
        start_amt: "",
        end_amt: "",
        charge: "",
        charge_type: "",
        distributor_comm: "",
        distributor_comm_type: "",
        master_distributer_com: "",
        master_distributer_com_type: "",
        apiProvider: "",
        white_label_comm: "",
        white_label_comm_type: "",
    }]);

    const [errors, setErrors] = useState({});

    const validate = () => {
        let validationErrors = {};

        formValues.forEach((item, index) => {
            if (!item.start_amt) {
                validationErrors[`start_amt_${index}`] = "Min Amount is required";
            }
            if (!item.end_amt) {
                validationErrors[`end_amt_${index}`] = "Max Amount is required";
            }
            if (!item.charge) {
                validationErrors[`charge_${index}`] = "Charges are required";
            }
            if (!item.charge_type) {
                validationErrors[`charge_type_${index}`] = "Charge type is required";
            }
            if (!item.distributor_comm) {
                validationErrors[`distributor_comm_${index}`] = "Distributor Commission is required";
            }
            if (!item.distributor_comm_type) {
                validationErrors[`distributor_comm_type_${index}`] = "Distributor Commission type is required";
            }
            if (!item.master_distributer_com) {
                validationErrors[`master_distributer_com_${index}`] = "Super Distributor Commission is required";
            }
            if (!item.master_distributer_com_type) {
                validationErrors[`master_distributer_com_type_${index}`] = "Super Distributor Commission type is required";
            }
            if (!item.tds) {
                validationErrors[`tds_${index}`] = "TDS is required";
            }
            if (!item.tds_type) {
                validationErrors[`tds_type_${index}`] = "TDS type is required";
            }

        });

        setErrors(validationErrors);
        return Object.keys(validationErrors).length === 0;
    };

    const toastSuccessMessage = () => {
        toast.success(`${params?.id ? "Update" : "Add"} DMT/AEPS Commission Successfully.`, {
            position: "top-center",
        });
    };

    const toastErrorMessage = () => {
        toast.error(`${params?.id ? "Update" : "Add"} DMT/AEPS Commission Failed.`, {
            position: "top-center",
        });
    };

    const handleChange = (e, index) => {
        const { name, value } = e.target;
        const updatedFormValues = [...formValues];
        updatedFormValues[index][name] = value;
        setFormValues(updatedFormValues);
    };
    const [formValues2, setFormValues2] = useState({
        name: '',
        service_id: '',
        isActive: false,
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        // if (!validate()) return;

        const clone = { name: formValues2.name, service_id: formValues2.service_id, isActive: formValues2.isActive, list: [...formValues] }
        let res;
        if (!params?.id) {
            res = await adddmtcomm(clone);
        } else {
            res = await updatedmtcommagId(params.id, clone);
        }

        if (res.statusCode == 200) {
            toastSuccessMessage();
            setTimeout(() => {
                navigate('/dmt-commision-scheme');
            }, 2000);
        } else {
            toastErrorMessage();
        }
    };

    const addMore = () => {
        setFormValues([
            ...formValues,
            {
                dmt_comm_id: "",
                start_amt: "",
                end_amt: "",
                charge: "",
                charge_type: "",
                distributor_comm: "",
                distributor_comm_type: "",
                master_distributer_com: "",
                master_distributer_com_type: "",
                apiProvider: "",
                white_label_comm: "",
                white_label_comm_type: "",
            }
        ]);
    };
    const getSchCombo = async () => {
        try {
            const comboRes = await getdmtcommscheme();
            setcomboData(comboRes?.data);
        } catch (error) {
            alert(error.message)
        }
    };
    const [stateServices, stateSetServices] = useState([]);
    const getDMTid = async () => {
       try {
         const res = await getDmtCommSchemeID()
         stateSetServices(res?.data);
         console.log(res?.data);
       } catch (error) {
        alert(error.message)
       }
    }

    useEffect(() => {
        getSchCombo();
        getDMTid()
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            if (params?.id) {
                const response = await getdmtcommagId(params.id);
                setFormValues(response.data.list);
                setFormValues2({ name: response.data.name, service_id: response.data.service_id, isActive: response.data.isActive })
            } else {
                setFormValues([{
                    dmt_comm_id: "",
                    start_amt: "",
                    end_amt: "",
                    charge: "",
                    charge_type: "",
                    distributor_comm: "",
                    distributor_comm_type: "",
                    master_distributer_com: "",
                    master_distributer_com_type: "",
                }]);
            }
        };
        fetchData();
    }, [params?.id]);

    const removeItem = (index) => {
        const updatedFormValues = [...formValues];
        updatedFormValues.splice(index, 1);
        setFormValues(updatedFormValues);
    };

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormValues2(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };
    const [services, setServices] = useState([]);
   
    const fetchSercices = async () => {
        try {
            const response = await relatedService2();
            const userTypeData = response.data;
            setServices(userTypeData);
        } catch (error) {
            console.error("Error fetching User type:", error);
        }
    };
    useEffect(() => {
        fetchSercices()
    }, [params?.id]);
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={""} />
            <ToastContainer />
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0"><b>{params?.id ? "UPDATE" : "ADD"} DMT / AEPS Commission Scheme </b></h4>
                                </div>
                                <form className="form-container" style={{ padding: "20px 0", margin: "0 20px" }} >


                                    <div className="row" >

                                        <div className="col-xl-4 mb-3">
                                            <CustomInputField
                                                type="text"
                                                value={formValues2.name}
                                                placeholder="Name"
                                                name="name"
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div className='col-xl-4 mb-3'>
                                            <select class="form-select" aria-label="Default select example" id="service_id" name="service_id"
                                                defaultValue={formValues2?.service_id} onChange={handleInputChange} value={formValues2?.service_id}>
                                                <option> select service</option>
                                                {stateServices && stateServices?.map((item) => {
                                                    return <option value={item?.id}>{item?.service_name}</option>
                                                })}
                                            </select>
                                        </div>


                                        <div className="col-xl-4 mb-3">
                                            <select
                                                className="form-select"
                                                aria-label="Default select example"
                                                name="isActive"
                                                value={formValues2.isActive}
                                                onChange={handleInputChange}
                                            >
                                                <option value="">Status</option>
                                                <option value="true">Active</option>
                                                <option value="false">Inactive</option>
                                            </select>
                                        </div>


                                    </div>


                                </form>
                                <form className="tbl-captionn" onSubmit={handleSubmit}>
                                    {formValues && formValues?.map((item, index) => (
                                        <div className="row" key={index} style={{ border: "1px solid #ccc", padding: "10px 0", margin: "10px 0" }}>
                                            {/* <div className="col-xl-4 mb-3">
                                                <select
                                                    className="form-select"
                                                    aria-label="Default select example"
                                                    id={`dmt_comm_id_${index}`}
                                                    name="dmt_comm_id"
                                                    value={item.dmt_comm_id}
                                                    onChange={(e) => handleChange(e, index)}
                                                >
                                                    <option value="">Select DMT Commission</option>
                                                    {comboData &&
                                                        comboData.map((comboItem) => (
                                                            <option key={comboItem._id} value={comboItem._id}>
                                                                {comboItem.name}
                                                            </option>
                                                        ))}
                                                </select>
                                            </div> */}
                                            <div className="col-xl-4 mb-3">
                                                <CustomInputField
                                                    type="number"
                                                    value={item.start_amt}
                                                    hasError={errors[`start_amt_${index}`]}
                                                    onChange={(e) => handleChange(e, index)}
                                                    errorMsg={errors[`start_amt_${index}`]}
                                                    id={`start_amt_${index}`}
                                                    placeholder="From Amount"
                                                    name="start_amt"
                                                />
                                            </div>
                                            <div className="col-xl-4 mb-3">
                                                <CustomInputField
                                                    type="number"
                                                    value={item.end_amt}
                                                    hasError={errors[`end_amt_${index}`]}
                                                    onChange={(e) => handleChange(e, index)}
                                                    errorMsg={errors[`end_amt_${index}`]}
                                                    id={`end_amt_${index}`}
                                                    placeholder="To Amount"
                                                    name="end_amt"
                                                />
                                            </div>
                                            <div className="col-xl-2 mb-3">
                                                <CustomInputField
                                                    type="number"
                                                    value={item.charge}
                                                    hasError={errors[`charge_${index}`]}
                                                    onChange={(e) => handleChange(e, index)}
                                                    errorMsg={errors[`charge_${index}`]}
                                                    id={`charge_${index}`}
                                                    placeholder="Charges"
                                                    name="charge"
                                                />
                                            </div>
                                            <div className="col-xl-2 mb-3">
                                                <select
                                                    className="form-select"
                                                    aria-label="Default select example"
                                                    id={`charge_type_${index}`}
                                                    name="charge_type"
                                                    value={item.charge_type}
                                                    onChange={(e) => handleChange(e, index)}
                                                >
                                                    <option value="">Charges type</option>
                                                    <option value="Percent">%</option>
                                                    <option value="Flat">RS</option>
                                                </select>
                                            </div>
                                            <div className="col-xl-4 mb-3">
                                                <CustomInputField
                                                    type="number"
                                                    value={item.commision}
                                                    hasError={errors[`commision_${index}`]}
                                                    onChange={(e) => handleChange(e, index)}
                                                    errorMsg={errors[`commision_${index}`]}
                                                    id={`commision_${index}`}
                                                    placeholder="R Commission"
                                                    name="commision"
                                                />
                                            </div>
                                            <div className="col-xl-4 mb-3">
                                                <select
                                                    className="form-select"
                                                    aria-label="Default select example"
                                                    id={`commision_type${index}`}
                                                    name="commision_type"
                                                    value={item.commision_type}
                                                    onChange={(e) => handleChange(e, index)}
                                                >
                                                    <option value="">R commission type</option>
                                                    <option value="Percent">%</option>
                                                    <option value="Flat">RS</option>
                                                </select>
                                            </div>
                                            <div className="col-xl-4 mb-3">
                                                <CustomInputField
                                                    type="number"
                                                    value={item.distributor_comm}
                                                    hasError={errors[`distributor_comm_${index}`]}
                                                    onChange={(e) => handleChange(e, index)}
                                                    errorMsg={errors[`distributor_comm_${index}`]}
                                                    id={`distributor_comm_${index}`}
                                                    placeholder="Dist Commission"
                                                    name="distributor_comm"
                                                />
                                            </div>
                                            <div className="col-xl-4 mb-3">
                                                <select
                                                    className="form-select"
                                                    aria-label="Default select example"
                                                    id={`distributor_comm_type_${index}`}
                                                    name="distributor_comm_type"
                                                    value={item.distributor_comm_type}
                                                    onChange={(e) => handleChange(e, index)}
                                                >
                                                    <option value="">Dist Commission type</option>
                                                    <option value="Percent">%</option>
                                                    <option value="Flat">RS</option>
                                                </select>
                                            </div>
                                            <div className="col-xl-4 mb-3">
                                                <CustomInputField
                                                    type="number"
                                                    value={item.master_distributer_com}
                                                    hasError={errors[`master_distributer_com_${index}`]}
                                                    onChange={(e) => handleChange(e, index)}
                                                    errorMsg={errors[`master_distributer_com_${index}`]}
                                                    id={`master_distributer_com_${index}`}
                                                    placeholder="S Dist Commission"
                                                    name="master_distributer_com"
                                                />
                                            </div>
                                            <div className="col-xl-4 mb-3">
                                                <select
                                                    className="form-select"
                                                    aria-label="Default select example"
                                                    id={`master_distributer_com_type_${index}`}
                                                    name="master_distributer_com_type"
                                                    value={item.master_distributer_com_type}
                                                    onChange={(e) => handleChange(e, index)}
                                                >
                                                    <option value="">S Dist Commission type</option>
                                                    <option value="Percent">%</option>
                                                    <option value="Flat">RS</option>
                                                </select>
                                            </div>
                                            <div className="col-xl-4 mb-3">
                                                <CustomInputField
                                                    type="number"
                                                    value={item.white_label_comm}
                                                    hasError={errors[`white_label_comm${index}`]}
                                                    onChange={(e) => handleChange(e, index)}
                                                    errorMsg={errors[`white_label_comm${index}`]}
                                                    id={`white_label_comm${index}`}
                                                    placeholder="W label Commission"
                                                    name="white_label_comm"
                                                />
                                            </div>
                                            <div className="col-xl-4 mb-3">
                                                <select
                                                    className="form-select"
                                                    aria-label="Default select example"
                                                    id={`white_label_comm_type_${index}`}
                                                    name="white_label_comm_type"
                                                    value={item.white_label_comm_type}
                                                    onChange={(e) => handleChange(e, index)}
                                                >
                                                    <option value="">W L Commission type</option>
                                                    <option value="Percent">%</option>
                                                    <option value="Flat">RS</option>
                                                </select>
                                            </div>
                                            <div className="col-xl-4 mb-3">
                                                <select
                                                    className="form-select"
                                                    aria-label="Default select example"
                                                    id={`apiProvider${index}`}
                                                    name="apiProvider"
                                                    value={item.apiProvider}
                                                    onChange={(e) => handleChange(e, index)}
                                                >
                                                    <option value="">API Provider</option>
                                                    <option value="true">Active</option>
                                                    <option value="false">Inactive</option>
                                                </select>
                                            </div>
                                            {/* <div className="col-xl-4 mb-3">
                                                <select
                                                    className="form-select"
                                                    aria-label="Default select example"
                                                    id={`isActive_${index}`}
                                                    name="isActive"
                                                    value={item.isActive}
                                                    onChange={(e) => handleChange(e, index)}
                                                >
                                                    <option value="">Status</option>
                                                    <option value="true">Active</option>
                                                    <option value="false">Inactive</option>
                                                </select>
                                            </div> */}

                                            {index !== 0 && (
                                                <div className="col-xl-4 mb-3">
                                                    <button
                                                        className="btn btn-danger"
                                                        type="button"
                                                        onClick={(e) => removeItem(e, index)}
                                                    >
                                                        Remove
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                    <div className="d-flex justify-content-between mt-4 mb-4">
                                        <button
                                            className="btn btn-secondary"
                                            type="button"
                                            onClick={addMore}
                                        >
                                            Add More
                                        </button>
                                        <div>
                                            <Link
                                                to="/dmt-commision-scheme"
                                                className="btn btn-primary me-2"
                                            >
                                                Cancel
                                            </Link>
                                            <button
                                                className="btn btn-primary"
                                                type="button"
                                                onClick={handleSubmit}
                                            >
                                                {params?.id ? "Update" : "Save"}
                                            </button>
                                        </div>
                                    </div>
                                </form>
                                {/* <div className="d-flex justify-content-center mt-4 mb-4">
                                    
                                </div> */}
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DmtCommisionForm;
