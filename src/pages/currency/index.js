import Breadcrumbs from "../../common/breadcrumb/Breadcrumbs"
import Currency from "../../components/currency/Currency"

function CurrencyPage() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "setup & Confrigurations",
        title_2: "Currency",
      }
    return (
        <>
        <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle}/>
            <Currency />
        </>
    )
}
export default CurrencyPage