import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import Breadcrumbs from '../../common/breadcrumb/Breadcrumbs'
import AepsSearch from '../../components/moneyTransfer/moneyTranAeps/aepssearch/AepsSearch'
import Aeps from '../../components/moneyTransfer/moneyTranAeps/Aeps'
import AadharPaysearch from '../../components/moneyTransfer/moneyTransAadharpay/aadharpaySearch/AadharPaysearch'
import AadharPay from '../../components/moneyTransfer/moneyTransAadharpay/AadharPay'
import DmtSearch from '../../components/moneyTransfer/moneyTransDmt/dmtsearch/DmtSearch'
import Dmt from '../../components/moneyTransfer/moneyTransDmt/Dmt'
import Rechargesear from '../../components/moneyTransfer/moneyTransRecharge/rechargesearch/Rechargesear'
import Reacharge from '../../components/moneyTransfer/moneyTransRecharge/Reacharge'
import MoneyBillSearch from '../../components/moneyTransfer/moneyBill/moneyBillsearch/MoneyBillSearch'
import BillPay from '../../components/moneyTransfer/moneyBill/BillPay'

function MoneyTransfer() {
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
                  <AadharPaysearch/>
                  <AadharPay/>
                </Tab>
                <Tab eventKey={3} title={'DMT'}>
                    <DmtSearch/>
                    <Dmt/>
                </Tab>
                <Tab eventKey={4} title={'RECHARGE'}>
                    <Rechargesear/>
                    <Reacharge/>
                </Tab>
                <Tab eventKey={5} title={'BILL PAYMENT'}>
                   <MoneyBillSearch/>
                   <BillPay/>
                </Tab>

            </Tabs>
        </div>
    </div>
}

export default MoneyTransfer