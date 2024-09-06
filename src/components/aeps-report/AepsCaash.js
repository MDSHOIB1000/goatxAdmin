import React, { useEffect, useState } from 'react'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs'
import { aepsTransctionFilter } from '../../api/login/Login'
import AepsSearch from './AepsSearch'
import AepsLists from './AepsLists'
import { useParams } from 'react-router-dom'
import Loadar from '../../common/loader/Loader'

function AepsCaash() {
  const breadCrumbsTitle = {
    id: "1",
    title_1: "Master",
    title_2: "AEPS Cash Report",
  }
  const [initialValues, setIntialValues] = useState({
    name: "",
    datetime: "",
    amount: "",
    message: "",
    transactionstatus: "",
    disputestatus: "",
    customer_mobile: "",
  })

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
 

  const submitForm = async (values) => {
    const mobileNo = values.customer_mobile ? values.customer_mobile.trim() : '';
    const txnId = values.txn_id ? values.txn_id.trim() : '';
    setLoading(true);
    try {
      const res = await aepsTransctionFilter({ ...values, page:0, count, customer_mobile: mobileNo, txn_id: txnId });
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
      const res = await aepsTransctionFilter({ page: num, count, user_id: token, start_date: null, end_date: null, type: 'CD' });

      setAepsData(res);
      setLoading(false)
    } catch (error) {

    }
  }
  const onChangeVal = (e) => {
      getDmtTxnData(e - 1)
  };

  useEffect(() => {
    getDmtTxnData(0)
  }, [])


  return (
    <>
    {loading && <Loadar/>}
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
      <AepsSearch initialValues={initialValues} userData={userData} submitForm={submitForm} aepsData={aepsData} getDmtTxnData={getDmtTxnData}page={page}/>
      <AepsLists onChangeVal={onChangeVal} aepsData={aepsData} getDmtTxnData={getDmtTxnData} page={page} count={count}/>
    </>
  )
}

export default AepsCaash
