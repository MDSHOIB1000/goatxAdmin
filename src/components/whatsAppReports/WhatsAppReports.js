import React, { useEffect, useState } from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs'
import WaCampingReports from './waCampingReports/WaCampingReports'
import WaMessagesLogs from './waMessagesLogs/WamessagesLogs'
import InboundMessage from './waMessagesLogs/WamessagesLogs'
import WaClickerReports from './waClickerReports/WaClickerReports'
import WaRepoDownload from './waRepDowload/WaRepoDownload'

function WhatsAppReports() {
    const breadCrumbsTitle = {
        title_1: "whatsapp-app/report"
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
        txn_id: "",
        count: count,
        page: page,
        start_date: getCurrentDate(),
        end_date: getCurrentDate(),
        adhaar_no: "",
        customer_mobile: "",
        userid: "",
    })

    const submitForm = async (values) => {
        setLoading(true)
        try {
            // const res = await ApespaymentReport(values);
            // setAepsData(res?.data);
            // setLoading(false)
        } catch (error) {

        }

    }

    const getDmtTxnData = async () => {
        setLoading(true)
        try {
            // const res = await ApespaymentReport({ ...initialValues });

            // setAepsData(res?.data);
            // setLoading(false)
        } catch (error) {

        }
    }


    const onChangeVal = (e) => {
        // setPage(e - 1)
        getDmtTxnData(e - 1)
    };


    useEffect(() => {
        getDmtTxnData(page)
    }, [])
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div className='m-4'>
                <Tabs
                    defaultActiveKey="wacampingreports"
                    id="uncontrolled-tab-example"
                >

                    <Tab eventKey="wacampingreports" title="Wa Camping Reports">
                        <WaCampingReports initialValues={initialValues} page={page} count={count} userData={userData} submitForm={submitForm} aepsData={aepsData} />
                    </Tab>
                    <Tab eventKey="waMessageLogs" title="Wa Message Logs">
                        <WaMessagesLogs initialValues={initialValues} page={page} count={count} userData={userData} submitForm={submitForm} aepsData={aepsData} />
                    </Tab>
                    <Tab eventKey="inbound-msgs" title="Inbound Messages">
                        <InboundMessage />
                    </Tab>
                    <Tab eventKey="wa-clicker-report" title="Wa Clicker Reports">
                        <WaClickerReports />
                    </Tab>
                    <Tab eventKey="wa-report-download" title="Wa Report Download">
                        <WaRepoDownload />
                    </Tab>
                </Tabs>
            </div>
        </>
    )
}

export default WhatsAppReports
