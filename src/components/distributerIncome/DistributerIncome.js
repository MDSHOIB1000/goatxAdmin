import Breadcrumbs from "../../common/breadcrumb/Breadcrumbs"
import DistributerIncomeForm from "./distributerIncomeForm/DistributerIncomeForm"
import DistributerIncomeList from "./distributerIncomeList/DistributerIncomeList"
const breadCrumbsTitle = {
    id: "1",
    title_1: "User Income",
    title_2: "Distributer Income",
}
function DistributerIncome() {
    return (
        <>
            <section className="DistributerIncome ">
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
                <div className="row m-4">
                    <DistributerIncomeForm />
                    <DistributerIncomeList />
                </div>
            </section>
        </>
    )
}
export default DistributerIncome