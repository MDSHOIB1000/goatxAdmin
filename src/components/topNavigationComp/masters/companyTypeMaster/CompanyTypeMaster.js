import Breadcrumbs from '../../../../common/breadcrumb/Breadcrumbs'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { message } from 'antd'
import { CompanyTypeList, deleteCompanyType } from '../../../../api/login/Login'
import CompanyTypeMasterList from './companyTypeMasterList/CompanyTypeMasterList'

function CompanyTypeMaster() {
  const breadCrumbsTitle = {
    title_1: "Master",
    title_2: "Company Type Master"
  }
  const [data, setData] = useState()
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(10)
  const [page, setPage] = useState(0)
  const [totalCount, setTotalCount] = useState()


  // ----------list Api----------
  const getFloorMasters = async () => {
    setLoading(true)
    try {
      const res = await CompanyTypeList()
      setData(res?.data)
    } catch (error) {

    }
    setLoading(false)
  }
  // add Area
  
  const deleteBlockAdd = async (id) => {
    setLoading(true)
    try {
      await deleteCompanyType(id)
      getFloorMasters()
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
    getFloorMasters()
  }, [])
  return (
    <>
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
      <CompanyTypeMasterList totalCount={totalCount} page={page}  data={data} count={count} confirm={confirm} cancel={cancel} loading={loading} />
    </>
  )
}

export default CompanyTypeMaster
