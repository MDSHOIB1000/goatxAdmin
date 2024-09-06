import React, { useEffect, useState } from 'react';
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs';
import DmtReportSearchFill from './dmtReportSearchFill/DmtReportSearchFill';
import DmtReportSearchList from './dmtReportSearchList/DmtReportSearchList';
import { exportExcelDmt_txnList, fillterDmtTxnReport, usersList } from '../../../api/login/Login';

function DmtReportSearch() {
  const [userData, setUserData] = useState();
  const [dmtTtxn, setDmtTtxn] = useState();
  const [dmtExcelTtxn, setDmtExcelTtxn] = useState();
  const [count, setCount] = useState(10);
  const [page, setPage] = useState(0);
  const token = window.localStorage.getItem('userToken');
  const [loading, setLoading] = useState(false);

  const submitForm = async (values) => {
    console.log(values);
    setLoading(true);
    try {
      const res = await fillterDmtTxnReport(values);
      setDmtTtxn(res?.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const getDmtTxnData = async () => {
    setLoading(true);
    try {
      const res = await fillterDmtTxnReport({ page, count, token });
      setDmtTtxn(res?.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const getDmtExcelTxnData = async () => {
    setLoading(true);
    try {
      const res = await exportExcelDmt_txnList(token);
      setDmtExcelTtxn(res?.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const onChangeVal = (e) => {
    setPage(e - 1);
    getDmtTxnData();
  };

  useEffect(() => {
    getDmtTxnData();
    getDmtExcelTxnData(); // Fetch Excel data when component mounts
    const fetchUserType = async () => {
      setLoading(true);
      try {
        const response = await usersList();
        setUserData(response?.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        alert("Error fetching User type:", error);
      }
    };
    fetchUserType();
  }, []);

  return (
    <>
      <Breadcrumbs breadCrumbsTitle={"DMT Transaction Search"} />
      <DmtReportSearchFill submitForm={submitForm} userData={userData} page={page} count={count} token={token} loading={loading} getDmtTxnData={getDmtTxnData} />
      <DmtReportSearchList onChangeVal={onChangeVal} dmtTtxn={dmtTtxn} loading={loading} dmtExcelTtxn={dmtExcelTtxn} />
    </>
  );
}

export default DmtReportSearch;
