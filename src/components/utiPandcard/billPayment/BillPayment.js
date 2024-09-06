import AadharPaysatement from "./addharPayStatement/AddharPaySatement"
import SearchAadhar from "./search/SerachAdhar"


function BillPayment() {
    return (
        <>
            <SearchAadhar />
            <AadharPaysatement></AadharPaysatement>
        </>
    )
}
export default BillPayment