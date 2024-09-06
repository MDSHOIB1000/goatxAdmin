import Breadcrumbs from "../../common/breadcrumb/Breadcrumbs"
import SolveDisputeList from "./solveDisputeList/SolveDisputeList"


function SolveDispute() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Dispute",
        title_2: "Solve Dispute",
    }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <SolveDisputeList />
        </>
    )
}
export default SolveDispute