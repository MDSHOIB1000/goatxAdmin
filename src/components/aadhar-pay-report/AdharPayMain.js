import React, { useEffect, useState } from 'react'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs'
import { ApespaymentReport, getDataReports, paymentReport } from '../../api/login/Login'
import { useParams } from 'react-router-dom'
import Loadar from '../../common/loader/Loader'
import AepsMiniList from './AdharPayList'
import AepsMiniFilter from './AdharPayFilter'
import AdharPayFilter from './AdharPayFilter'
import AdharPayList from './AdharPayList'

function AdharPayMain({ title_1, title_2, title }) {
  const breadCrumbsTitle = {
    id: "1",
    title_1: title_1,
    title_2: title_2,
  }
  const [count, setCount] = useState(10)
  const [page, setPage] = useState(0)
  const [aepsData, setAepsData] = useState()
  const [loading, setLoading] = useState(false)
  const [userData, setUserData] = useState(false)
  const token = window.localStorage.getItem('userToken')
  const getCurrentDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };
  const [initialValues, setIntialValues] = useState({
    txn_id: "",
    count: count,
    page: page,
    start_date: getCurrentDate(),
    end_date: getCurrentDate(),
    adhaar_no: "",
    customer_mobile: "",
    userid:"",
  })

  const submitForm = async (values) => {
    setLoading(true)
    try {
      const res = await ApespaymentReport(values);
      setAepsData(res?.data);
      setLoading(false)
    } catch (error) {

    }

  }

  const getDmtTxnData = async () => {
    setLoading(true)
    try {
      const res = await ApespaymentReport({...initialValues});
      
      setAepsData(res?.data);
      setLoading(false)
    } catch (error) {

    }
  }


  const onChangeVal = (e) => {
    // setPage(e - 1)
      getDmtTxnData(e - 1)
  };


  useEffect(() => {
    getDmtTxnData(page)
  }, [])
  return (
    <>
    {loading && <Loadar />}
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
      <AdharPayFilter title={title} initialValues={initialValues} page={page} count={count} userData={userData} submitForm={submitForm} aepsData={aepsData} />
      <AdharPayList title={title} onChangeVal={onChangeVal} aepsData={aepsData} getDmtTxnData={getDmtTxnData} page={page} count={count} />
    </>
  )
}

export default AdharPayMain
