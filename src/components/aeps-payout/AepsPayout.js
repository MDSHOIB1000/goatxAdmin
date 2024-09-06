import React, { useEffect, useState } from 'react'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs'
import { apesPayOutReport } from '../../api/login/Login'
import AepsSearch from './AepsSearch'
import AepsLists from './AepsLists'

function AepsPayout() {
  const breadCrumbsTitle = {
    id: "1",
    title_1: "Master",
    title_2: "AEPS Payout Report",
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

      const res = await apesPayOutReport({ ...values, page: 0, count, customer_mobile: mobileNo, txn_id: txnId });
      setAepsData(res);
    } catch (error) {
      console.error("Error during AEPS transaction filter:", error);
    } finally {
      setLoading(false);
    }
  };

  const getDmtTxnData = async (num) => {
    setLoading(true)
    try {
      const res = await apesPayOutReport({ ...initialValues, page: num, count });

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
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
      <AepsSearch initialValues={initialValues} userData={userData} submitForm={submitForm} />
      <AepsLists onChangeVal={onChangeVal} aepsData={aepsData} getDmtTxnData={getDmtTxnData} page={page} count={count} />
    </>
  )
}

export default AepsPayout
