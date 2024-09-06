import React, { useEffect, useState } from 'react'
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs'
import AadharPayTxnSearch from './aadharPayTxnSearch/AadharPayTxnSearch'
import AadharPayTxnList from './aadharPayTxnList/AadharPayTxnList'
import { aadharPayTransctionFilter } from '../../../api/login/Login'

function AadharPayTxn() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "AEPS",
        title_2: "AadharPay Transactions",
      }
      const [count, setCount] = useState(10)
      const [page, setPage] = useState(0)
      const [aepsData, setAepsData] = useState()
      const [loading,setLoading] = useState(false)
      const token = window.localStorage.getItem('userToken')
      const [initialValues, setIntialValues] = useState({
        start_date: "",
        end_date: "",
        count: count,
        page: page,
        txn_id: "",
        adhaar_no: "",
        customer_mobile: "",
      })
      // const validate = (values) => {
      //   const regexMobileNumber = /^(\+\d{1,3}\s?\d{1,14}|\d{5,15})$/;
      //   const regexAadhar = /^[2-9]{1}[0-9]{3}\s{1}[0-9]{4}\s{1}[0-9]{4}$/;
      //   let errors = {};
    
      //   if (!values.start_date) {
      //     errors.start_date = "Start Date is required";
      //   }
    
      //   if (!values.end_date) {
      //     errors.end_date = "End  Date is required";
      //   }
      //   if (!values.customer_mobile) {
      //     errors.customer_mobile = "Mobile Number is required";
      //   } else if (!regexMobileNumber.test(values.customer_mobile)) {
      //     errors.customer_mobile = "Invalid Mobile Number";
      //   }
    
      //   if (!values.txn_id) {
      //     errors.txn_id = "Transaction ID is required";
      //   }
      //   if (!values.adhaar_no) {
      //     errors.adhaar_no = "Aadhar Number is required";
      //   } else if (!regexAadhar.test(values.adhaar_no)) {
      //     errors.adhaar_no = "Invalid Aadhar Number";
      //   }
      //   return errors;
      // };
      const submitForm = async (values) => {
        setLoading(true)
        try {
          const res = await aadharPayTransctionFilter(values);
          setAepsData(res?.data);
          setLoading(false)
        } catch (error) {
    
        }
    
      }
      const getDmtTxnData = async () => {
        setLoading(true)
        try {
          const res = await aadharPayTransctionFilter({ page, count, token });
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
      }, [])
  return (
    <>
      <Breadcrumbs breadCrumbsTitle={""}/>
      <AadharPayTxnSearch initialValues={initialValues}  submitForm={submitForm}/>
      <AadharPayTxnList onChangeVal={onChangeVal} aepsData={aepsData}/>
    </>
  )
}

export default AadharPayTxn
