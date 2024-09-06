import Breadcrumbs from "../../common/breadcrumb/Breadcrumbs"
import RetailerKycStatus from "./retailerKycStatus/RetailerKycStatus"

function Retailer() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Members",
        title_2: "Retailer (0)",
    }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <RetailerKycStatus />
        </>
    )
}
export default Retailer