import Breadcrumbs from "../../common/breadcrumb/Breadcrumbs"
import PendingDisputeList from "./pemdingDisputList/PendingDispute"


function PendingDisput() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Dispute",
        title_2: "Pending Dispute",
    }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <PendingDisputeList />
        </>
    )
}
export default PendingDisput