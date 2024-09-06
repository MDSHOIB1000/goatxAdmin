import React, { useEffect, useState } from 'react'
import FloorForm from './floorForm/FloorForm'
import FloorList from './floorPerList/FloorList'
import { addFloorMaster, deleteFloorMaster, getFloorMaster, getFloorMasterId, updateFloorMaster } from '../../../../api/login/Login'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import Breadcrumbs from '../../../../common/breadcrumb/Breadcrumbs'
import { message } from 'antd'

function FloorPermission() {
    const breadCrumbsTitle = {
        id: "1",
        title_2: "Floor Master",
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
    const getFloorMasters = async (page) => {
        setLoading(true)
        try {
            const res = await getFloorMaster(page, count)
            setTotalCount(res?.totalCount)
            setData(res?.data)
            setPage(page)
        } catch (error) {

        }
        setLoading(false)
    }
    // add Area


    const toastSuccessMessage = (message) => {
        toast.success(`${params?.id ? "Update" : "Add"} ${message}`, {
            position: "top-right",
        });
    };
    const toastErrorMessage = () => {
        toast.error(`${params?.id ? "Update" : "Add"} Block Master Successfully.`, {
            position: "top-right",
        });
    };
    const blankBtn = () => {
        setInitialValues({ name: "", isActive: "" });
    }
    const submitForm = async (values) => {
        try {
            if (!params?.id) {
                try {
                    const res = await addFloorMaster(values);
                    toastSuccessMessage(" Floor Successfully");
                    if (res?.statusCode == "200") {

                    }
                    blankBtn()
                    getFloorMasters(page)
                } catch (error) {
                    alert(error.message)
                }

            } else {
                try {
                    const res = await updateFloorMaster(params.id, values);
                    toastSuccessMessage("Floor Successfully");
                    blankBtn()
                    navigate(`/floor-master`)
                    if (res?.statusCode == "200") {
                    }
                    if (res?.statusCode == "403") {
                        toastSuccessMessage("Floor Successfully");
                        blankBtn()
                    }
                    getFloorMasters(page)

                } catch (error) {
                    alert(`Error`, error)
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
                    const response = await getFloorMasterId(params.id);
                    const currencyData = response;
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
        // console.log(e);
        getFloorMasters(e - 1)

    };
    const deleteBlockAdd = async (id) => {
        setLoading(true)
        try {
            await deleteFloorMaster(id)
            let backList = totalCount % 11 === 0 ? page - 1 : page
            getFloorMasters(backList)
        } catch (error) {
            toastSuccessMessage(error.message)
        }
        setLoading(false)
    }

    const confirm = (id) => {
        console.log(id);
        deleteBlockAdd(id)
        message.success('Delete Successfull!');

    };
    const cancel = (e) => {
        // console.log(e);
        message.error('Cancle Successfull!');
    };
    const cancelBtn = () => {
        setInitialValues({ name: "", isActive: "" });
        message.error('Cancel Successful!');
        navigate(`/floor-master`)
    };


    useEffect(() => {
        getFloorMasters(page)
    }, [])
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <FloorForm initialValues={initialValues} params={params} submitForm={submitForm} cancelBtn={cancelBtn} validate={validate} />
            <FloorList totalCount={totalCount} page={page} onChangeVal={onChangeVal} data={data}  count={count} confirm={confirm} cancel={cancel} loading={loading} />
        </>
    )
}

export default FloorPermission
