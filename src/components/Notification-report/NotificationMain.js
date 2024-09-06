import React, { useEffect, useState } from 'react'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs'
import { aepsTransctionFilter, getDataReports, notificationReport, paymentReport } from '../../api/login/Login'
import { useParams } from 'react-router-dom'
import Loadar from '../../common/loader/Loader'
import AepsBalanceFilter from './NotificationFilter'
import AepsBalanceList from './NotificationList'
import AepsCashList from './NotificationList'
import NotificationList from './NotificationList'
import NotificationFilter from './NotificationFilter'

function NotificationMain({ title_1, title_2, title }) {
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
    try {
      const res = await aepsTransctionFilter(values);
      setAepsData(res);
      setLoading(false)
    } catch (error) {

    }

  }
  const param = useParams()

  const getDmtTxnData = async (num) => {
    setLoading(true)
    try {
      const res = await notificationReport({ page: num, count, user_id: token, start_date: null, end_date: null,type:'CD' });
     
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
      <NotificationFilter title={title} initialValues={initialValues} userData={userData} submitForm={submitForm} aepsData={aepsData} />
      <NotificationList title={title} onChangeVal={onChangeVal} aepsData={aepsData} getDmtTxnData={getDmtTxnData} />
    </>
  )
}

export default NotificationMain
