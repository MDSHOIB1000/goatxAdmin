import AadharPaysatement from "./addharPayStatement/AddharPaySatement"
import SearchAadhar from "./search/SerachAdhar"


function AdharPay() {
    return (
        <>
            <SearchAadhar />
            <AadharPaysatement></AadharPaysatement>
        </>
    )
}
export default AdharPay