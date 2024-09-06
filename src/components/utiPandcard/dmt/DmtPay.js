import AadharPaysatement from "./addharPayStatement/AddharPaySatement"
import SearchAadhar from "./search/SerachAdhar"


function DtmPay() {
    return (
        <>
            <SearchAadhar />
            <AadharPaysatement></AadharPaysatement>
        </>
    )
}
export default DtmPay