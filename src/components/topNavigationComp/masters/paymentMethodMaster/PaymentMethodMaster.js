import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs"
import PaymentMethodMasterList from "./PaymentMethodMasterList/PaymentMethodMasterList"

function PaymentMethodMaster() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Master",
        title_2: "Payment Method",
    }
    return (
        <>
        <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <PaymentMethodMasterList />
        </>
    )
}
export default PaymentMethodMaster