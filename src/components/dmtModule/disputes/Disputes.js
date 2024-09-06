import React, { useEffect, useState } from 'react'
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs'
import DisputeSearch from './disputesSearch/DisputesSearch'
import DisputeLists from './disputeList/DisputeLists'
import { DisputeData } from '../../../api/login/Login'

function Dispute() {
  const breadCrumbsTitle = {
    id: "1",
    title_1: "AEPS",
    title_2: "Ticket ",
  }
  const [count, setCount] = useState(10)
  const [page, setPage] = useState(0)
  const [aepsData, setAepsData] = useState()
  const [loading, setLoading] = useState(false)
  const [exportExcelData, setExportExcelData] = useState(false)
  const [userData, setUserData] = useState(false)
  const token = window.localStorage.getItem('userToken')
  // { name, customer mobile, datetime, amount, message, transaction status, dispute status }
  const [initialValues, setIntialValues] = useState({
    name: "",
    start_date: "",
    end_date: "",
    member_code: "",
    member_shop_name: "",
    ticket_no: "",
    subject: "",
    department: "",
    priority: "",
    reason: "",
    status: "",
    amount: count,
    message: page,
    transactionstatus: "",
    disputestatus: "",
    customer_mobile: "",
  })

  const submitForm = async (values) => {
    console.log(values);
    try {
      const res = await DisputeData({ page:page, count, user_id: token , ...values });
      setAepsData(res?.data);
      setLoading(false)
    } catch (error) {

    }
  }
  const getDmtTxnData = async (num) => {
    setLoading(true)
    try {
      const res = await DisputeData({ page: num ? num : page, count, user_id: token });
      setAepsData(res?.data);
      setLoading(false)
    } catch (error) {

    }
  }


  const onChangeVal = (e) => {
    // setPage(e - 1)
    setTimeout(() => {
    }, 1000);
    getDmtTxnData(e - 1)
  };


  useEffect(() => {
    getDmtTxnData()
    // const fetchUserType = async () => {
    //   setLoading(true)
    //   try {
    //     const response = await usersList();
    //     setUserData(response?.data);

    //     setLoading(false)
    //   } catch (error) {
    //     alert("Error fetching User type:", error);
    //   }
    // };
    // fetchUserType();
  }, [])
  console.log(aepsData);
  return (
    <>
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
      <DisputeSearch initialValues={initialValues} userData={userData} submitForm={submitForm} />
      <DisputeLists onChangeVal={onChangeVal} aepsData={aepsData} loading={loading} />
    </>
  )
}

export default Dispute
