import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { message } from 'antd'
import DesignationMasterForm from './designationMasterForm/DesignationMasterForm'
import DesignationMasterList from './designationMasterList/DesignationMasterList'
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs'
import { adddesignationMaster, deletedesignationMaster, getdesignationMaster, getdesignationMasterId, updatedesignationMaster } from '../../../api/login/Login'


function DesignationMaster() {
    const breadCrumbsTitle = {
        id: "1",
        title_2: "designation Master",
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
          errors.name = "Designation Is Required";
        }
        return errors;
      };
    // ----------list Api----------
    const getdesignationMasters = async (page) => {
        setLoading(true)
        try {
            const res = await getdesignationMaster(page, count)
            setTotalCount(res?.totalCount)
            setPage(page)
            setData(res?.data)
        } catch (error) {

        }
        setLoading(false)
    }
    // add Area

    const blankBtn = () => {
        setInitialValues({ name: "", isActive: "" });
    };
    const toastSuccessMessage = () => {
        toast.success(`${params?.id ? "Update" : "Add"} Designation Successfully.`, {
            position: "top-right",
        });
    };
    const toastErrorMessage = () => {
        toast.error(`${params?.id ? "Update" : "Add"} Designation  Successfully.`, {
            position: "top-right",
        });
    };

    const submitForm = async (values) => {
        try {
            if (!params?.id) {
                try {
                    const res = await adddesignationMaster(values);
                    if (res?.statusCode == "200") {
                        toastSuccessMessage();
                        getdesignationMasters(page)
                        blankBtn()
                    }
                } catch (error) {
                    alert(error.message)
                }

            } else {
                try {
                    const res = await updatedesignationMaster(params.id, values);
                    if (res?.statusCode == "200") {
                        toastSuccessMessage();
                        getdesignationMasters(page)
                        navigate(`/designation-master`)
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
                    const response = await getdesignationMasterId(params.id);
                    const currencyData = response?.data;
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
        getdesignationMaster(e - 1)
        // setPage(e - 1)
    };
    const deleteBlockAdd = async (id) => {
        console.log(id);
        setLoading(true)
        try {
            await deletedesignationMaster(id)
            getdesignationMasters(page)
        } catch (error) {
            toastSuccessMessage(error.message)
        }
        setLoading(false)
    }
    

    const confirm = (id) => {
        deleteBlockAdd(id)
        let backList = totalCount % 11 === 0 ? page - 1 : page
        getdesignationMasters(backList)
        message.success('Delete Successfull!');

    };
    const cancel = (e) => {
        // console.log(e);
        message.error('Cancle Successfull!');
    };
    const cancelBtn = () => {
        setInitialValues({ name: "", isActive: "" });
        message.error('Cancel Successful!');
        navigate(`/designation-master`)
    };


    useEffect(() => {
        getdesignationMasters(page)
    }, [])
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <DesignationMasterForm initialValues={initialValues} validate={validate} params={params} submitForm={submitForm} cancelBtn={cancelBtn} />
            <DesignationMasterList totalCount={totalCount} onChangeVal={onChangeVal} data={data} page={page} count={count} confirm={confirm} cancel={cancel} loading={loading} />
        </>
    )
}

export default DesignationMaster
