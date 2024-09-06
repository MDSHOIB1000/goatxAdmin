import React, { useEffect, useState } from 'react'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs'
import PackgesSearch from './PackgesSearch'
import PackesLists from './PackesLists'
import { getDataPacage } from '../../api/login/Login'

function PackgesList() {
  const breadCrumbsTitle = {
    id: "1",
    title_1: "Master",
    title_2: "Package-master",
  }
  const [count, setCount] = useState(10)
  const [page, setPage] = useState(0)
  const [aepsData, setAepsData] = useState()
  const [loading, setLoading] = useState(false)
  const [userData, setUserData] = useState(false)
  const token = window.localStorage.getItem('userToken')
  const [initialValues, setIntialValues] = useState({
    name: "",
    datetime: "",
    amount: count,
    message: page,
    transactionstatus: "",
    disputestatus: "",
    customer_mobile: "",
  })

  const submitForm = async (values) => {
    console.log(values);
    setLoading(true)
    try {
      const res = await getDataPacage({ page:page, count, user_id: token,start_date:"" ,end_date:"" ,name:values.subject});
      setAepsData(res);
      setLoading(false)
    } catch (error) {

    }
    setLoading(false)
  }
  const getDmtTxnData = async (num) => {
    setLoading(true)
    try {
      const res = await getDataPacage({ page: num, count, user_id: token,start_date:"" ,end_date:"" ,name:""});
      setAepsData(res);
      setLoading(false)
    } catch (error) {

    }
  }


  const onChangeVal = (e) => {
    setPage(e - 1)
      getDmtTxnData(e - 1)
  };

  const resetData = () => {
    setIntialValues({
      name: "",
      datetime: "",
      amount: count,
      message: page,
      transactionstatus: "",
      disputestatus: "",
      customer_mobile: "",
      subject: "",
    })
    setTimeout(() => {
      getDmtTxnData(0)
    }, 1000);
  }


  useEffect(() => {
    getDmtTxnData(0)
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
  return (
    <>
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
      <PackgesSearch initialValues={initialValues} userData={userData} submitForm={submitForm} resetData={resetData}/>
      <PackesLists onChangeVal={onChangeVal} aepsData={aepsData} getDmtTxnData={getDmtTxnData}/>
    </>
  )
}

export default PackgesList
