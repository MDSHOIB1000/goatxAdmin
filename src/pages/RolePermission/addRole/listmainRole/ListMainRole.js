import { useEffect, useState } from "react"
import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs"
import ListRole from "./listRole"
import { roleList } from "../../../../api/login/Login"


function ListMainRole() {
    const [userData, setUserData] = useState()
    const [dmtTtxn, setDmtTtxn] = useState()
    const [dmtExcelTtxn, setDmtExcelTtxn] = useState()
    const [count, setCount] = useState(10)
    const [page, setPage] = useState(0)
    const token = window.localStorage.getItem('userToken')
    const [loading, setLoadig] = useState(false)
    const [total, setTotal] = useState()
    const submitForm = async (values) => {
        console.log(values);
        setLoadig(true)
        try {
            // const res = await fillterDmtTxnReport(values);
            // setDmtTtxn(res?.data);
            // setLoadig(false)
        } catch (error) {

        }

    }
    const getDmtTxnData = async (page) => {
        setLoadig(true)
        try {
            const res = await roleList(page, count);
            // console.log(res?.data);
            setDmtTtxn(res?.data);
            console.log(res);
            setTotal(res?.totalCount)
            setLoadig(false)
        } catch (error) {
            alert(error.message)
        }
    }
    const onChangeVal = (e) => {
        // setPage(e - 1)
        getDmtTxnData(e - 1)
    };
    useEffect(() => {
        getDmtTxnData(page)
        const fetchUserType = async () => {
            setLoadig(true)
            try {
                // const response = await usersList();
                // setUserData(response?.data);
                // const resExp = await exportExcelDmt_txnList(token);
                // setDmtExcelTtxn(resExp?.data);
                setLoadig(false)
            } catch (error) {
                alert("Error fetching User type:", error);
            }
        };
        fetchUserType();
    }, [])
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={"Main Module List"} />
            <ListRole onChangeVal={onChangeVal} dmtTtxn={dmtTtxn} loading={loading} dmtExcelTtxn={dmtExcelTtxn} getDmtTxnData={getDmtTxnData} total={total} page={page} />
        </>
    )
}
export default ListMainRole