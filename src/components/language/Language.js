import Breadcrumbs from "../../common/breadcrumb/Breadcrumbs"
import LanguageList from "./languageList/LanguageList"


function Language() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "setup & Confrigurations",
        title_2: "Languages",
      }
    return (
        <>
        <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle}/>
            <LanguageList />
        </>
    )
}
export default Language