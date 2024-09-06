import Breadcrumbs from "../../../common/breadcrumb/Breadcrumbs"
import AddMainModule from "../../../components/RolePermission/addMainModule/AddMainModule"


function AddMainModulePage() {
    return (
        <>
        <Breadcrumbs breadCrumbsTitle={"Main Module List"} />
            <AddMainModule />
        </>
    )
}
export default AddMainModulePage