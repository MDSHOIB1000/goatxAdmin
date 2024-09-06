import Breadcrumbs from "../../common/breadcrumb/Breadcrumbs"
import NotWorkingUserList from "./notWorkingUserList/NotWorkingUserList"

function NotWorkingUser() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Members",
        title_2: "Not Working User",
    }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <NotWorkingUserList />
        </>
    )
}
export default NotWorkingUser