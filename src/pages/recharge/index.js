import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs'
import Aadharpaysearch from '../../components/transactions/adhaarPay/Aadharpaysearch'
import AepsSearch from '../../components/transactions/aepstab/AepsSearch'
import Aeps from '../../components/recharge/aeps/Aeps'
import AadharPaySearch from '../../components/recharge/aadharPay/aadharPaySearch/AadharPaySearch'
import AadharPay from '../../components/recharge/aadharPay/AadharPay'
import DmtSearch from '../../components/recharge/dmt/dmtsearch/DmtSearch'
import Dmt from '../../components/recharge/dmt/Dmt'
import RechargeSearch from '../../components/recharge/recharge/rechargeSearch/RechargeSearch'
import RechargesList from '../../components/recharge/recharge/RechargesList'
import BillPaymentSearch from '../../components/recharge/billPayment/billPayMentSearch/BillPaymentSearch'
import BillPayment from '../../components/recharge/billPayment/BillPayment'

function Recharge() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Transactions ",

    }
    return <div>
        <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
        <div className='m-4'>
            <Tabs
                defaultActiveKey={1}
                id="uncontrolled-tab-example"
                className=" tab_bg rounded-top "
            >
                <Tab eventKey={1} title={'AEPS '}>
                   <AepsSearch/>
                   <Aeps/>
                </Tab>
                <Tab eventKey={2} title={'AADHAR PAY'}>
                  <AadharPaySearch/>
                  <AadharPay/>
                </Tab>
                <Tab eventKey={3} title={'DMT'}>
                   <DmtSearch/>
                   <Dmt/>
                </Tab>
                <Tab eventKey={4} title={'RECHARGE'}>
                    <RechargeSearch/>
                    <RechargesList/>
                </Tab>
                <Tab eventKey={5} title={'BILL PAYMENT'}>
                   <BillPaymentSearch/>
                   <BillPayment/>
                </Tab>

            </Tabs>
        </div>
    </div>
}

export default Recharge