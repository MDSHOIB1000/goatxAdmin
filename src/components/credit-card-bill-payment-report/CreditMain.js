import React, { useEffect, useState } from 'react'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs'
import { getDataReports } from '../../api/login/Login'
import { useParams } from 'react-router-dom'
import Loadar from '../../common/loader/Loader'
import CreditFilter from './CreditFilter'
import CreditReport from './CreditReport'

function CreditMain({ title_1, title_2, title }) {
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
    name: "",
    datetime: "",
    amount: count,
    message: page,
    transactionstatus: "",
    start_date: getCurrentDate(),
    end_date: getCurrentDate(),
    disputestatus: "",
    customer_mobile: "",
  })

  const submitForm = async (values) => {
    setLoading(true)
    console.log(values);
    try {
      // const res = await DisputeFilter(values);
      // setAepsData(res?.data);
      // setLoading(false)
    } catch (error) {

    }

  }
  const param = useParams()

  const getDmtTxnData = async (num) => {
    setLoading(true)
    try {
      const res = await getDataReports({ page: num, count, user_id: token, param: param.id, biller_id: null, start_date: null, end_date: null });
      setAepsData(res);
      setLoading(false)
    } catch (error) {

    }
  }


  const onChangeVal = (e) => {
    setPage(e - 1)
    getDmtTxnData(e - 1)
  };


  useEffect(() => {
    getDmtTxnData(0)
  }, [])
  return (
    <>
      {loading && <Loadar />}
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
      <CreditFilter title={title} initialValues={initialValues} userData={userData} submitForm={submitForm} aepsData={aepsData} />
      <CreditReport title={title} onChangeVal={onChangeVal} aepsData={aepsData} getDmtTxnData={getDmtTxnData} />
    </>
  )
}

export default CreditMain
