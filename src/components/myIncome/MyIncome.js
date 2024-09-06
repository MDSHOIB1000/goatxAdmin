import Breadcrumbs from "../../common/breadcrumb/Breadcrumbs"
import MyIncomeForm from "./myIncomeForm/MyIncomeForm"
import MyIncomeList from "./myIncomeList/MyIncomeList"
const breadCrumbsTitle = {
    id: "1",
    title_1: "User Income",
    title_2: "My  Income",
}
function MyIncome() {
    return (
        <>
            <section className="myIncome">
                <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle}/>
                    <div className="row m-4">
                        <MyIncomeForm />
                        <MyIncomeList />
                </div>
            </section>
        </>
    )
}
export default MyIncome
