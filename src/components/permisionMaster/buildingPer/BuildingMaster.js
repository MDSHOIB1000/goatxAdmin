import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs';
import { Formik } from 'formik';
import CustomInputField from '../../../common/CustomInputField';
import BuildingMasterForm from './buildingMasterform/BuildingMasterForm';
import BuildingMasterList from './BuildingMasterList/BuildingMasterList';
import { addBuildingMaster, deleteBuildingMaster, getBuildingsMaster, getBuildingsMasterId, updateBuildingMaster } from '../../../api/login/Login';
import { toast } from 'react-toastify';
import { message } from 'antd';
// import { message } from 'antd';

function BuildingMaster() {
    const breadCrumbsTitle = {
        id: "1",
        title_2: "Building Master",
    }
    const [data, setData] = useState()
    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState(10)
    const [page, setPage] = useState(0)
    const [totalCount, setTotalCount] = useState()
    const [initialValues, setInitialValues] = useState({
        name: "",
        isActive: false,
    });
    const params = useParams();
    const navigate = useNavigate()
    const validate = (values) => {
        let errors = {};
        if (!values.name) {
          errors.name = "Floor Name Is Required";
        }
        return errors;
      };
    // ----------list Api----------
    
    const getBuildingMaster = async (page) => {
        setLoading(true)
        try {
            const res = await getBuildingsMaster(page, count)
            setTotalCount(res?.totalCount)
            setPage(page)
            setData(res)
        } catch (error) {

        }
        setLoading(false)
    }
    // add building


    const toastSuccessMessage = () => {
        toast.success(`${params?.id ? "Update" : "Add"} Building Master Successfully.`, {
            position: "top-right",
        });
    };
    const toastErrorMessage = () => {
        toast.error(`${params?.id ? "Update" : "Add"} Building Master Successfully.`, {
            position: "top-right",
        });
    };
    const blankBtn = () => {
        setInitialValues({ name: "", isActive: "" });
    };
   
    const submitForm = async (values) => {
        try {
            if (!params?.id) {
                try {
                    const res = await addBuildingMaster(values);
                    if (res?.statusCode == "200") {
                        toastSuccessMessage();
                        blankBtn()
                        getBuildingMaster(page)
                    }
                } catch (error) {

                }

            } else {
                try {
                    const res = await updateBuildingMaster(params.id, values);
                    if (res?.statusCode == "200") {
                        toastSuccessMessage();
                        getBuildingMaster(page)
                        setTimeout(() => {
                            navigate(`/building-master`)
                        }, 1000);
                        blankBtn()
                    }
                } catch (error) {

                }

            }

        } catch (error) {
            console.error("Error:", error);
        }
    };

    useEffect(() => {
        const fetchCurrency = async () => {
            try {
                if (params?.id) {
                    const response = await getBuildingsMasterId(params.id);
                    const currencyData = response.data;
                    setInitialValues(currencyData);
                } else {
                    setInitialValues({
                        name: "",
                        isActive: true
                    });
                }
            } catch (error) {
                console.error("Error fetching currency:", error);
            }
        };

        fetchCurrency();
    }, [params?.id]);


    const onChangeVal = (e) => {
        getBuildingMaster(e - 1)
        // setPage(e - 1)
    };
    const deleteBuildingAdd = async (id) => {
        setLoading(true)
        try {
            await deleteBuildingMaster(id)
            let backList = totalCount % 11 === 0 ? page - 1 : page
            getBuildingMaster(backList)
        } catch (error) {
            toastSuccessMessage(error.message)
        }
        setLoading(false)
    }

    const confirm = (id) => {
        console.log(id);
        deleteBuildingAdd(id)
        message.success('Delete Successfull!');

    };
    const cancel = (e) => {
        // console.log(e);
        message.error('Cancle Successfull!');
    };
    const cancelBtn = () => {
        setInitialValues({ name: "", isActive: "" });
        message.error('Cancel Successful!');
        navigate(`/building-master`)
    };

    useEffect(() => {
        getBuildingMaster(page)
    }, [])
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <BuildingMasterForm initialValues={initialValues} params={params} submitForm={submitForm} cancelBtn={cancelBtn} validate={validate} />
            <BuildingMasterList onChangeVal={onChangeVal} totalCount={totalCount} data={data} page={page} count={count} confirm={confirm} cancel={cancel} loading={loading} />
        </>
    )
}

export default BuildingMaster
