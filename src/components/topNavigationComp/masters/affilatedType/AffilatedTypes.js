import CollegetypeList from './affilatedTypeList/AffilatedTypeList'
import Breadcrumbs from '../../../../common/breadcrumb/Breadcrumbs'
import React, { useEffect, useState } from 'react'
import { deleteTypes_Of_AffilatedBy_Master, deleteTypes_Of_collegesMaster, getTypes_Of_AffilatedBy_Master, getTypes_Of_collegesMaster } from '../../../../api/login/Login'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { message } from 'antd'
function AffilatedType() {
    const breadCrumbsTitle = {
        title_1: "master",
        title_2: "Affiliated ",
    }
    const [data, setData] = useState()
    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState(10)
    const [page, setPage] = useState(0)
    const [totalCount, setTotalCount] = useState()
    

    // ----------list Api----------
    const getFloorMasters = async (page) => {
        setLoading(true)
        try {
            const res = await getTypes_Of_AffilatedBy_Master(page, count)
            setTotalCount(res?.totalCount)
            setData(res?.data)
            setPage(page)
        } catch (error) {

        }
        setLoading(false)
    }
    // add Area
    const onChangeVal = (e) => {
        // console.log(e);
        getFloorMasters(e - 1)

    };
    const deleteBlockAdd = async (id) => {
        setLoading(true)
        try {
            await deleteTypes_Of_AffilatedBy_Master(id)
            let backList = totalCount % 11 === 0 ? page - 1 : page
            getFloorMasters(backList)
        } catch (error) {
            // toastSuccessMessage(error.message)
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
    useEffect(() => {
        getFloorMasters(page)
    }, [])
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <CollegetypeList totalCount={totalCount} page={page} onChangeVal={onChangeVal} data={data}  count={count} confirm={confirm} cancel={cancel} loading={loading}/>
        </>
    )
}

export default AffilatedType
