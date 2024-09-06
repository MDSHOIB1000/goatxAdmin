import Breadcrumbs from "../../common/breadcrumb/Breadcrumbs"
import StateMasterList from "./stateMasterList/StateMasterList"

function StateMaster() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "setup & Confrigurations",
        title_2: "State",
      }
    return (
        <>
        <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle}/>
            <StateMasterList />
        </>
    )
}
export default StateMaster