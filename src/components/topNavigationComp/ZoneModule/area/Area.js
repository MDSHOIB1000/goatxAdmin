import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs"
import ListArea from "./listArea/ListArea"

function Area() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Zone Module",
        title_2: "Area",
    }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <ListArea />
        </>
    )
}
export default Area