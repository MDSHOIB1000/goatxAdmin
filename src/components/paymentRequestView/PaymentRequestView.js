import { useEffect, useState } from "react"
import Breadcrumbs from "../../common/breadcrumb/Breadcrumbs"
import PaymentRequestViewForm from "./paymentRequestViewForm/PaymentRequestViewForm"
import PaymentRequestViewList from "./paymentRequestViewList/PaymentRequestViewList"
import { fillterRequestPayment, usersList } from "../../api/login/Login"

const breadCrumbsTitle = {
    id: "1",
    title_1: "Payment",
    title_2: "Payment Request View",
}
function PaymentRequestView() {
    const [state, setState] = useState()
    const [count, setCount] = useState(10)
    const [userData, setUserData] = useState([])
    const [page, setPage] = useState(0)
    const [loading, setLoading] = useState(0)
    const token = window.localStorage.getItem("userToken")

    const submitForm = async (values) => {
        setLoading(true)
        try {
            const res = await fillterRequestPayment(values);
            setState(res?.data);
            setLoading(false)
        } catch (error) {

        }

    }
    const getPaymentRequest = async (page) => {
        setLoading(true)
        try {
            const res = await fillterRequestPayment({ page, count, token });
            setState(res?.data);
            setLoading(false)
        } catch (error) {

        }
    }
    const onChangeVal = (e) => {
        // setPage(e - 1)
        getPaymentRequest(e - 1)
    };
    const fetchUserType = async () => {
        setLoading(true)
        try {
            const response = await usersList();
            setUserData(response?.data);
            setLoading(false)
        } catch (error) {
            alert("Error fetching User type:", error);
        }
    };
    useEffect(() => {
        getPaymentRequest(0)

        fetchUserType();
    }, [])
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <PaymentRequestViewForm submitForm={submitForm} loading={loading} page={page} count={count} token={token} userData={userData} />
            <PaymentRequestViewList fetchUserType={getPaymentRequest} onChangeVal={onChangeVal} state={state} loading={loading} />
        </>
    )
}
export default PaymentRequestView