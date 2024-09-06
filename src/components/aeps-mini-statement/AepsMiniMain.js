import React, { useEffect, useState } from 'react'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs'
import { aepsTransctionFilter, getDataReports, paymentReport } from '../../api/login/Login'
import { useParams } from 'react-router-dom'
import Loadar from '../../common/loader/Loader'
import AepsMiniList from './AepsMiniList'
import AepsMiniFilter from './AepsMiniFilter'

function AepsMiniMain({ title_1, title_2, title }) {
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
    amount: "",
    message: "",
    transactionstatus: "",
    start_date: "",
    end_date: "",
    disputestatus: "",
    customer_mobile: "",
  })

  const submitForm = async (values) => {
    const mobileNo = values.customer_mobile ? values.customer_mobile.trim() : '';
    const txnId = values.txn_id ? values.txn_id.trim() : '';
    setLoading(true);
    setIntialValues({
      ...values, count, customer_mobile: mobileNo, txn_id: txnId
    })
    setPage(0)
    try {

      const res = await aepsTransctionFilter({ ...values, page: 0, count, customer_mobile: mobileNo, txn_id: txnId });
      setAepsData(res);
    } catch (error) {
      console.error("Error during AEPS transaction filter:", error);
    } finally {
      setLoading(false);
    }
  };
  const param = useParams()

  const getDmtTxnData = async (num) => {
    setLoading(true)
    try {
      const res = await aepsTransctionFilter({ ...initialValues, page: num, count, type: 'MS' });

      setAepsData(res);
      setLoading(false)
    } catch (error) {

    }
  }




  const onChangeVal = (e) => {
    setPage(e - 1)
    setTimeout(() => {
      getDmtTxnData(e - 1)
    }, 1000);
  };


  useEffect(() => {
    getDmtTxnData(0)
  }, [])
  return (
    <>
      {loading && <Loadar />}
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
      <AepsMiniFilter title={title} initialValues={initialValues} userData={userData} submitForm={submitForm} aepsData={aepsData} getDmtTxnData={getDmtTxnData} page={page} />
      <AepsMiniList title={title} onChangeVal={onChangeVal} aepsData={aepsData} getDmtTxnData={getDmtTxnData} page={page} count={count} />
    </>
  )
}

export default AepsMiniMain
