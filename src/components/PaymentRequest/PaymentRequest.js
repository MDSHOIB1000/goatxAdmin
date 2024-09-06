import Breadcrumbs from "../../common/breadcrumb/Breadcrumbs"
import PaymentRequestForm from "./PaymentRequestForm/PaymentRequestForm"
import PaymentBankDetails from "./pamentBankDetails/PaymentBankDetails"
import PaymentRequestList from "./pamentRequestList/PaymentRequestList"
const breadCrumbsTitle = {
    id: "1",
    title_1: "Payment",
    title_2: "Payment Request",
}
function PaymentRequest() {
    
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div className="row m-4">
                <PaymentRequestForm />
                <PaymentBankDetails />
                <PaymentRequestList />

            </div>
        </>
    )
}
export default PaymentRequest