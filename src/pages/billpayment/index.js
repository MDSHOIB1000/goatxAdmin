import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs'
import Aadharpaysearch from '../../components/transactions/adhaarPay/Aadharpaysearch'
import Aadharpay from '../../components/billpayment/aadharpay/Aadharpay'
import Aeps from '../../components/billpayment/aeps/Aeps'
import AepsSearch from '../../components/billpayment/aeps/aepsSearch/AepsSearch'
import Dmt from '../../components/billpayment/dmt/Dmt'
import Dmtsearch from '../../components/billpayment/dmt/dmtsearch/Dmtsearch'
import RechargeSearch from '../../components/billpayment/recharge/rechargeSearch/RechargeSearch'
import Recharge from '../../components/billpayment/recharge/Recharge'
import BillPay from '../../components/billpayment/billpayment/BillPay'
import BillPaymentSearch from '../../components/billpayment/billpayment/billPaySearch/BillPaymentSearch'

function BillPayment() {
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
                    <AepsSearch />
                    <Aeps />
                </Tab>
                <Tab eventKey={2} title={'AADHAR PAY'}>
                    <Aadharpaysearch />
                    <Aadharpay />
                </Tab>
                <Tab eventKey={3} title={'DMT'}>
                    <Dmtsearch />
                    <Dmt />
                </Tab>
                <Tab eventKey={4} title={'RECHARGE'}>
                    <RechargeSearch />
                    <Recharge />
                </Tab>
                <Tab eventKey={5} title={'BILL PAYMENT'}>
                    <BillPaymentSearch/>
                    <BillPay/>
                </Tab>

            </Tabs>
        </div>
    </div>
}

export default BillPayment