import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs"
import ServiceCategoryMasterList from "./serviceCategoryMasterList/ServiceCategoryMasterList"
const breadCrumbsTitle = {
    id: "1",
    title_1: "Master",
    title_2: "Stream Master",
}
function ServiceCategoryMaster() {
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <ServiceCategoryMasterList />
        </>
    )
}
export default ServiceCategoryMaster