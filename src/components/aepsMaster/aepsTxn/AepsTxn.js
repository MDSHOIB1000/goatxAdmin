import React, { useEffect, useState } from 'react'
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs'
import AepsTxnSearch from './aepsTxnSearch/AepsTxnSearch'
import AepsTxnList from './aepsTxnList/AepsTxnList'
import { aepsTransctionAll, aepsTransctionFilter } from '../../../api/login/Login'

function AepsTxn() {
  const breadCrumbsTitle = {
    id: "1",
    title_1: "AEPS",
    title_2: "AEPS Transctions",
  }
  const [count, setCount] = useState(10)
  const [page, setPage] = useState(0)
  const [aepsData, setAepsData] = useState()
  const [loading, setLoading] = useState(false)
  const [exportExcelData, setExportExcelData] = useState(false)
  const token = window.localStorage.getItem('userToken')
  const [initialValues, setIntialValues] = useState({
    start_date: "",
    end_date: "",
    count: count,
    page: page,
    txn_id: "",
    adhaar_no: "",
    customer_mobile: "",
  })
  const submitForm = async (values) => {
    setLoading(true)
    try {
      const res = await aepsTransctionFilter(values);
      setAepsData(res?.data);
      setLoading(false)
    } catch (error) {

    }

  }
  const getDmtTxnData = async () => {
    setLoading(true)
    try {
      const res = await aepsTransctionFilter({ page, count, token });
      setAepsData(res?.data);
      setLoading(false)
    } catch (error) {

    }
  }
  const onChangeVal = (e) => {
    setPage(e - 1)
    getDmtTxnData()
  };
  const getExcelData = () => {
    // const res = aepsTransctionAll(token)
  
    // setExportExcelData(res?.data)
  }
  useEffect(() => {
    getExcelData()
    getDmtTxnData()
  }, [])
  return (
    <>
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
      <AepsTxnSearch initialValues={initialValues}  submitForm={submitForm} />
      <AepsTxnList onChangeVal={onChangeVal} aepsData={aepsData} />
    </>
  )
}

export default AepsTxn
