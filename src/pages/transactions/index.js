import React from 'react'
import AepsWallet from '../../components/transactions/aepstab/Aeps'
import { Tab, Tabs } from 'react-bootstrap'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs'
import AepsSearch from '../../components/transactions/aepstab/AepsSearch'
import AdhaarPay from '../../components/transactions/adhaarPay/AdhaarPay'
import Aadharpaysearch from '../../components/transactions/adhaarPay/Aadharpaysearch'
import Dmtsearch from '../../components/transactions/dmt/dmtsearchform/Dmtsearch'
import Dmt from '../../components/transactions/dmt/Dmt'
import ReachargeSearch from '../../components/transactions/recharges/recchargeSearch/ReachargeSearch'
import Recharge from '../../components/transactions/recharges/Recharge'
import BillpaymentSearch from '../../components/transactions/billPay/bilPaymentSearch/BillpaymentSearch'
import BillPament from '../../components/transactions/billPay/BillPament'

function Transactions() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Transactions ",

    }
    return <div>
        <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
        <div className='m-4 t '>
            <Tabs
                defaultActiveKey={1}
                id="uncontrolled-tab-example"
                className=" tab_bg rounded-top "
            >
                <Tab eventKey={1} title={'AEPS '}>
                    <AepsSearch/>
                    <AepsWallet />
                </Tab>
                <Tab eventKey={2} title={'AADHAR PAY'}>
                    <Aadharpaysearch/>
                    <AdhaarPay/>
                </Tab>
                <Tab eventKey={3} title={'DMT'}>
                    <Dmtsearch/>
                    <Dmt/>
                </Tab>
                <Tab eventKey={4} title={'RECHARGE'}>
                    <ReachargeSearch/>
                    <Recharge/>
                </Tab>
                <Tab eventKey={5} title={'BILL PAYMENT'}>
                    <BillpaymentSearch/>
                    <BillPament/>
                </Tab>

            </Tabs>
        </div>
    </div>
}

export default Transactions