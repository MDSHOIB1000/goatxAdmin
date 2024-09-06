import React, { useState } from "react";
// import react icon start
import { FaSearch } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
// import react icon end
import PendingTransctionModal from "./pendingTransactionModal/PendingTransctionModal";
import { Link } from "react-router-dom";
import PendingReportForm from "./pendTransRepForm/PendingReportForm";
import PendingTranRepLists from "../pendingTransactionReport/pendingTranRepList/PendingTranRepLists";
import Breadcrumbs from "../../../common/breadcrumb/Breadcrumbs";

function PendingTransactionReport() {
  const breadCrumbsTitle = {
    id: "1",
    title_1: "Reports",
    title_2: "Pending Transactions ",
  }
  return (
    <>
      <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
      <PendingReportForm />
      <PendingTranRepLists />
    </>
  );
}

export default PendingTransactionReport;
