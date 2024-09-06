import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { addBbpsPost, adddmtcomm, getbbpscommagId, getdmtcomm3, getdmtcommagId, getdmtcommscheme, getDmtCommSchemeID, getDmtCommSchemeNew, mainModuleList, relatedService, relatedService2, updateBbpscommagId, updatedmtcommagId } from '../../../api/login/Login';
import { ToastContainer, toast } from 'react-toastify';
import CustomInputField from '../../../common/CustomInputField';
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs';
import { IoIosCloseCircleOutline } from "react-icons/io";

import Select from 'react-select'
import Loadar from '../../../common/loader/Loader';
function BbpsCommisionForm() {
    const [comboData, setcomboData] = useState(null);
    const params = useParams();
    const navigate = useNavigate();


    const [mainForms, setMainForms] = useState({
        name: '',
        service_id: '',
        isActive: false,
        commision_list: [
            {
                isDefault: true,
                slots: [
                    {
                        start_amt: '',
                        end_amt: '',
                        charge: '',
                        charge_type: '',
                        commision: '',
                        commision_type: '',
                        distributor_comm: '',
                        distributor_comm_type: '',
                        master_distributer_com: '',
                    }
                ]
            }
        ]
    });

    const [errors, setErrors] = useState({});

    const toastSuccessMessage = () => {
        toast.success(`${params?.id ? "Update" : "Add"} BBPS Commission Successfully.`, {
            position: "top-center",
        });
    };

    const toastErrorMessage = () => {
        toast.error(`${params?.id ? "Update" : "Add"} BBPS Commission Failed.`, {
            position: "top-center",
        });
    };

    const handleChange = (e, index, index1) => {
        const { name, value } = e.target;
        const updatedFormValues = { ...mainForms }
        updatedFormValues.commision_list[index1].slots[index][name] = value;
        setMainForms(updatedFormValues);

    };

    const [loader , setLoader] = useState(false);

    const [formValues2, setFormValues2] = useState({
        name: '',
        service_id: '',
        isActive: false,
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        // if (!validate()) return;
        setLoader(true);
        const clone = { ...mainForms, name: formValues2.name, service_id: formValues2.service_id, is_active: formValues2.isActive }

        console.log(clone);
        let res;
        if (!params?.id) {
            res = await addBbpsPost(clone);
        } else {
            res = await updateBbpscommagId(params.id, clone);
        }

        if (res.statusCode == 200) {
            toastSuccessMessage();
            setTimeout(() => {
                navigate('/bbps-commision');
            }, 2000);
            setLoader(false);
        } else {
            toastErrorMessage();
            setLoader(false);
        }
    };



    const addMore = (index) => {
        const clone = { ...mainForms }
        clone.commision_list[index].slots.push({ start_amt: '', end_amt: '', charge: '', charge_type: '', commision: '', commision_type: '', distributor_comm: '', distributor_comm_type: '', master_distributer_com: '' })
        console.log(clone);
        setMainForms(clone);
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
            const res = await getDmtCommSchemeNew()
            stateSetServices(res?.data);
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
            setLoader(true);
            if (params?.id) {
                
                const response = await getbbpscommagId(params.id);
                setFormValues2({ name: response.data.name, service_id: response.data.service_id, is_active: response.data.is_active })
                curencyidget(response.data.service_id)
                const clone = { commision_list: response.data.commision_list }
                for (const key in clone) {
                  for (let i = 0; i < clone[key].length; i++) {
                    const element = clone[key][i];
                    if (element.operator_id?.length > 0) {
                        element.operator_id = element.operator_id.map((item) => {
                            return {...item , value: item.name, label: item.name }
                        })
                        
                    }
                  }
                }
                setMainForms({ commision_list: response.data.commision_list })
            } else {
                setMainForms({
                    name: '',
                    service_id: '',
                    isActive: false,
                    commision_list: [
                        {
                            isDefault: true,
                            slots: [
                                {
                                    start_amt: '',
                                    end_amt: '',
                                    charge: '',
                                    charge_type: '',
                                    commision: '',
                                    commision_type: '',
                                    distributor_comm: '',
                                    distributor_comm_type: '',
                                    master_distributer_com: '',
                                }
                            ]
                        }
                    ]
                });
            }
            setLoader(false);
        };
        fetchData();
    }, [params?.id]);

    const removeItem = (index, index1) => {
        const updatedFormValues = { ...mainForms }
        updatedFormValues.commision_list[index1].slots.splice(index, 1)
        setMainForms(updatedFormValues)

    };

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormValues2(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };


    const addMoreMain = () => {
        const clone = { ...mainForms }
        clone.commision_list.push({
            isDefault: false,
            operator_id: [],
            slots: [
                {
                    start_amt: '',
                    end_amt: '',
                    charge: '',
                    charge_type: '',
                    commision: '',
                    commision_type: '',
                    distributor_comm: '',
                    distributor_comm_type: '',
                    master_distributer_com: '',
                }
            ]
        })
        setMainForms(clone);
    }
    const removeItemMain = (index) => {
        const updatedFormValues = { ...mainForms }
        updatedFormValues.commision_list.splice(index, 1)
        setMainForms(updatedFormValues)
    }

    const [DataModule, setDataModule] = useState(null)

    const curencyidget = async (id) => {
        try {
            const res = await getdmtcomm3({ start_date: null, end_date: null, service_id: id, page: 0, count: 100 });
            const maped = res?.data?.map((item) => {
                return { ...item, value: item.name, label: item.name }
            })
            setDataModule(maped)

        } catch (error) {
            alert(error.message)
        }
    }
    const handleModuleChange = (selectedOptions, index) => {


        const updatedFormValues = { ...mainForms }
        updatedFormValues.commision_list[index].operator_id = selectedOptions
        setMainForms(updatedFormValues);
    };

    const handleInputChangeNew = (e, index) => {
        const { name, value, type, checked } = e.target;
        setFormValues2(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
        curencyidget(value)
    };


    return (
        <>
            <Breadcrumbs breadCrumbsTitle={""} />
            <ToastContainer />
            {loader? <Loadar /> : null}
            
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0"><b>{params?.id ? "UPDATE" : "ADD"} BBPS Commission Scheme </b></h4>
                                </div>


                                {mainForms?.commision_list?.map((item, index1) => {
                                    return <div className='mainForm card' key={index1}>
                                        {index1 !== 0 && <IoIosCloseCircleOutline style={{ fontSize: "22px", color: "red", cursor: "pointer" }} onClick={() => removeItemMain(index1)} />}

                                        <form className="form-container" style={{ padding: "20px 0", margin: "0 20px" }} >

                                            {index1 == 0 ? <div className="row" >

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
                                                        defaultValue={formValues2?.service_id} onChange={handleInputChangeNew} value={formValues2?.service_id}>
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
                                                        value={formValues2.is_active}
                                                        onChange={handleInputChange}
                                                    >
                                                        <option value="">Status</option>
                                                        <option value={true}>Active</option>
                                                        <option value={false}>Inactive</option>
                                                    </select>
                                                </div>


                                            </div> : <div className="row" >

                                                <div className="col-xl-4 mb-3">
                                                    <Select
                                                        id="selectModule"
                                                        closeMenuOnSelect={false}
                                                        className="multi-select-set"
                                                        isMulti
                                                        options={DataModule}
                                                        value={item?.operator_id}
                                                        // onChange={handleModuleChange}
                                                        onChange={(e) => { handleModuleChange(e, index1) }}
                                                    />
                                                </div>
                                                {/* <div className="col-xl-4 mb-3">
                                                    <select
                                                        className="form-select"
                                                        aria-label="Default select example"
                                                        name="isDefault"
                                                        value={index1 == 0 ? true : item.isDefault}
                                                        onChange={(e) => handleChange(e, index1)}
                                                    >
                                                        <option value="">Is Default</option>
                                                        <option value="true">Active</option>
                                                        <option value="false">In Active</option>
                                                    </select>
                                                </div> */}




                                            </div>}




                                        </form>
                                        <form className="tbl-captionn" onSubmit={handleSubmit}>
                                            {item?.slots && item?.slots?.map((item, index) => (
                                                <div className="row" key={index} style={{ border: "1px solid #ccc", padding: "10px 0", margin: "10px 0" }}>

                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="number"
                                                            value={item.start_amt}
                                                            hasError={errors[`start_amt_${index}`]}
                                                            onChange={(e) => handleChange(e, index, index1)}
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
                                                            onChange={(e) => handleChange(e, index, index1)}
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
                                                            onChange={(e) => handleChange(e, index, index1)}
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
                                                            onChange={(e) => handleChange(e, index, index1)}
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
                                                            onChange={(e) => handleChange(e, index, index1)}
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
                                                            onChange={(e) => handleChange(e, index, index1)}
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
                                                            onChange={(e) => handleChange(e, index, index1)}
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
                                                            onChange={(e) => handleChange(e, index, index1)}
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
                                                            onChange={(e) => handleChange(e, index, index1)}
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
                                                            onChange={(e) => handleChange(e, index, index1)}
                                                        >
                                                            <option value="">S Dist Commission type</option>
                                                            <option value="Percent">%</option>
                                                            <option value="Flat">RS</option>
                                                        </select>
                                                    </div>


                                                    {index !== 0 && (
                                                        <div className="col-xl-4 mb-3">
                                                            <button
                                                                className="btn btn-danger"
                                                                type="button"
                                                                onClick={(e) => removeItem(index, index1)}
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
                                                    onClick={() => { addMore(index1) }}
                                                >
                                                    Add More Slot
                                                </button>


                                            </div>
                                        </form>

                                    </div>
                                })}

                                <div>


                                    <button
                                        className="btn btn-secondary"
                                        type="button"
                                        onClick={addMoreMain}
                                    >
                                        Add More
                                    </button>

                                    <button
                                        className="btn btn-primary"
                                        type="button"
                                        onClick={handleSubmit}
                                    >
                                        {params?.id ? "Update" : "Save"}
                                    </button>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BbpsCommisionForm;