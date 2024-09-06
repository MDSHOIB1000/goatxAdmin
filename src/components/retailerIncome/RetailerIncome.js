import { BreadcrumbItem } from "react-bootstrap"
import RetailerIncomeForm from "./retailerIncomeForm/RetailerIncomeForm"
import RetailerIncomeList from "./retailerIncomeList/RetailerIncomeList"
import Breadcrumbs from "../../common/breadcrumb/Breadcrumbs"
const breadCrumbsTitle = {
    id: "1",
    title_1: "User Income",
    title_2: "Retailer  Income",
}
function RetailerIncone() {
    return (
        <>
            <section className="RetailerIncone">
                <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle}/>
                    <div className="row m-4">
                        <RetailerIncomeForm />
                        <RetailerIncomeList />
                    </div>
            </section>
        </>
    )
}
export default RetailerIncone