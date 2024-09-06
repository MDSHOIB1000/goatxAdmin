import Breadcrumbs from "../../common/breadcrumb/Breadcrumbs"
import SuspendedUserList from "./suspendedUserList/SuspendUserList"

function SuspendedUsers() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Members",
        title_2: "Suspended User",
    }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <section className="CreateUserDistributer m-4">
                <div className="">
                    <SuspendedUserList />
                </div>
            </section>

        </>
    )
}
export default SuspendedUsers