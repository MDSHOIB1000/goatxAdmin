import { useParams } from "react-router-dom"
import Retailer from "../../components/retailer/Retailer"
import RetailerList from "../../components/retailer/retailerList/RetailerList"

function RetailerPage() {
    return (
        <>
            <Retailer />
            <RetailerList />
        </>
    )
}
export default RetailerPage