import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs"
import PayoutBeneficiaryMasterList from "./PayoutBeneficiaryMasterList/PayoutBeneficiaryMasterList"
import SearchStatus from "./searchStatus/SearchStatus"



function PayoutBeneficiaryMaster() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Master",
        title_2: "Payout Beneficiary ",
    }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <SearchStatus />
            <PayoutBeneficiaryMasterList />

        </>
    )
}
export default PayoutBeneficiaryMaster