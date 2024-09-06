import { Tab, Tabs } from "react-bootstrap"
import Breadcrumbs from "../../common/breadcrumb/Breadcrumbs"
import Aeps from "./aeps/Aeps"
import AdharPay from "./adharPay/AdharPay"
import DtmPay from "./dmt/DmtPay"
import RechargePay from "./recharge/RechargePay"
import BillPayment from "./billPayment/BillPayment"


function UtiPancard() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Profile ",

    }
    return (
        <>
            <div>
                <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
                <div style={{ margin: "14px" }}>
                    <Tabs
                        defaultActiveKey={1}
                        id="uncontrolled-tab-example"
                        className="mb-3"
                    >
                        <Tab eventKey={1} title={'AEPS '}>
                            <Aeps />
                        </Tab>
                        <Tab eventKey={2} title={'AADHAR PAY'}>
                            <AdharPay />
                        </Tab>
                        <Tab eventKey={3} title={'DMT'}>
                            <DtmPay />
                        </Tab>
                        <Tab eventKey={4} title={'RECHARGE'}>
                            <RechargePay />
                        </Tab>
                        <Tab eventKey={5} title={'BILL PAYMENT'}>
                            {/* <StokeDetails /> */}
                            <BillPayment />
                        </Tab>

                    </Tabs>
                </div>
            </div >
        </>
    )
}
export default UtiPancard