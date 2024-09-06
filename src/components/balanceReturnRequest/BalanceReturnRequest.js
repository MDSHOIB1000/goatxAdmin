import Breadcrumbs from "../../common/breadcrumb/Breadcrumbs"
import BalanceReturnRequestList from "./balanceReturnRequestList/BalanceReturnRequestList"
const breadCrumbsTitle = {
    id: "1",
    title_1: "Payment",
    title_2: "Balalnce Return Request",
    
}
function BalanceReturnRequest() {
    return (
        <>
         <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <BalanceReturnRequestList />
        </>
    )
}
export default BalanceReturnRequest