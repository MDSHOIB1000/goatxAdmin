import Breadcrumbs from "../../common/breadcrumb/Breadcrumbs"
import BlanceTransferList from "./blanceTransferList/BlanceTransferList"

function BalanceTransfer() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Payment",
        title_2: "Balance Tarnsfer",
    }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <BlanceTransferList />
        </>
    )
}
export default BalanceTransfer