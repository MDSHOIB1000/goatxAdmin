import React, { useEffect, useState } from 'react'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs'
import { getDataPacage, getDataPacageSales, getDataReports } from '../../api/login/Login'
import SameCompFilter from './SameCompFilter'
import ElectricListReport from './ElectricListReport'
import { useParams } from 'react-router-dom'
import Loadar from '../../common/loader/Loader'

function ElectricMainComp({ title_1, title_2, title }) {
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
  const param = useParams()
  const [initialValues, setIntialValues] = useState({
    name: "",
    start_date: "",
    end_date: "",
    biller_id: "",
    txn_id:"",
    customer_mobile: "",
    category_id: param.id
  })
  const [operatorId, setOpratorID] = useState("")

  /* const submitForm = async (values) => {
    setLoading(true)
    console.log(values);
    try {
      const res = await getDataReports(values);
      setAepsData(res?.data);
      setLoading(false)
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
  }, []) */
  const handleChangeOp = (e) => {
    setOpratorID(e.target.value)
  }
  const submitForm = async (values) => {
    const txnId = values.txn_id ? values.txn_id.trim() : '';
    setLoading(true);
    setIntialValues({
      ...values, count, biller_id: operatorId, txn_id: txnId
    })
    setPage(0)
    try {

      const res = await getDataReports({ ...values, page: 0, count, txn_id: txnId,biller_id: operatorId,category_id: param.id});
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
      const res = await getDataReports({ ...initialValues, page: num, count, category_id: param.id });

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
      <SameCompFilter title={title} initialValues={initialValues} setIntialValues={setIntialValues} submitForm={submitForm} aepsData={aepsData} handleChangeOp={handleChangeOp} operatorId={operatorId} getDmtTxnData={getDmtTxnData} page={page} />
      <ElectricListReport title={title} onChangeVal={onChangeVal} aepsData={aepsData} getDmtTxnData={getDmtTxnData} />
    </>
  )
}

export default ElectricMainComp
