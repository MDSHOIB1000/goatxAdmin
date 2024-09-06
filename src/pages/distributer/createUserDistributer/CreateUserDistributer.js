import Breadcrumbs from "../../../common/breadcrumb/Breadcrumbs"
import CreateUserDistributer from "../../../components/distributer/createUserDistributer/CreateUserDistributer"

const breadCrumbsTitle = {
    id: "1",
    title_1: "Members",
    // title_2: "Distributer (0)",
    title_3: "Update User",
}
function CreateUserDistributerPage() {

    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <CreateUserDistributer />
        </>
    )
}
export default CreateUserDistributerPage