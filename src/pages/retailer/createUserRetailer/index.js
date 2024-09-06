import Breadcrumbs from "../../../common/breadcrumb/Breadcrumbs"
import CreateUserRetailer from "../../../components/retailer/createUserRetailer/CreateUserRetailer"

function CreateUserRetailerPage() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Members",
        title_2: "Retailer (0)",
        title_3: "Creat Retailer ",
    }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <CreateUserRetailer />
        </>
    )
}
export default CreateUserRetailerPage