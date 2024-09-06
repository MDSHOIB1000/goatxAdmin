import React, { useEffect, useState } from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import MessageSearchReports from './messageSearchReports/MessageSearchReports';
import LogsFilter from './logsFilter/LogsFilter';
import LogosLists from './logsLists/LogosLists';
import UserReportsDownload from './userReportsDownload/UserReportsDownload';
function ManageTabReport() {
    const templates = [
        {
            _id: "1A1212D",
            userName: 'demo',
            Gateway: 'Gate Way',
            phoneNumber: '+917250652850',
            type: 'Total Number: 3',
            totalCampaignCost: 'INR 0.330',
            status: 'APPROVED',
            createdAt: 'Aug 16, 2024',
            primaryInfo: `Campaign Name: 7492244527397406`,
            createdAt: `Aug 20, 2024, 5: 17: 25 PM`
        },

    ];
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
            <Tabs
                defaultActiveKey="mesReports"
                id="uncontrolled-tab-example"

            >
                <Tab eventKey="mesReports" title="Messages Reports">
                    <MessageSearchReports templates={templates} />
                </Tab>
                <Tab eventKey="logs" title="Logs">
                    <LogsFilter initialValues={initialValues} page={page} count={count} userData={userData} submitForm={submitForm} aepsData={aepsData} />
                    <LogosLists />
                </Tab>
                <Tab eventKey="userReportsDownload" title="User Reports Download">
                    <UserReportsDownload initialValues={initialValues} page={page} count={count} userData={userData} submitForm={submitForm} aepsData={aepsData} templates={templates} />
                </Tab>
            </Tabs>
        </>
    )
}

export default ManageTabReport
