import React, { useEffect, useState } from 'react'
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs'
import QuickDhanSearch from './quickDhansearch/QuickDahanSearch'
import QuickDhanList from './quickDhanList/QuickDhanList'
import { quickDhanFilter, usersList } from '../../../api/login/Login'

function QuickDhan() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "AEPS",
        title_2: "Quick Dhan Transactions",
      }
      const [count, setCount] = useState(10)
      const [page, setPage] = useState(0)
      const [aepsData, setAepsData] = useState()
      const [loading, setLoading] = useState(false)
      const [exportExcelData, setExportExcelData] = useState(false)
      const [userData, setUserData] = useState(false)
      const token = window.localStorage.getItem('userToken')
      const [initialValues, setIntialValues] = useState({
        start_date: "",
        end_date: "",
        count: count,
        page: page,
        txn_id: "",
        // userid: "",
        customer_mobile: "",
      })
      
      const submitForm = async (values) => {
        setLoading(true)
        try {
          const res = await quickDhanFilter(values);
          setAepsData(res?.data);
          setLoading(false)
        } catch (error) {
    
        }
    
      }
      const getDmtTxnData = async () => {
        setLoading(true)
        try {
          const res = await quickDhanFilter({ page, count, token });
          setAepsData(res?.data);
          setLoading(false)
        } catch (error) {
    
        }
      }

      
      const onChangeVal = (e) => {
        setPage(e - 1)
        getDmtTxnData()
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
      <QuickDhanSearch initialValues={initialValues} userData={userData}  submitForm={submitForm}/>
      <QuickDhanList onChangeVal={onChangeVal} aepsData={aepsData}/>
    </>
  )
}

export default QuickDhan
