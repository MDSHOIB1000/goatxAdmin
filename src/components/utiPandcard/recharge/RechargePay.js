import AadharPaysatement from "./addharPayStatement/AddharPaySatement"
import SearchAadhar from "./search/SerachAdhar"


function RechargePay() {
    return (
        <>
            <SearchAadhar />
            <AadharPaysatement></AadharPaysatement>
        </>
    )
}
export default RechargePay