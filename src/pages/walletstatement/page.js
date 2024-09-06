import Breadcrumbs from "../../common/breadcrumb/Breadcrumbs"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import StatementTop from "../../components/statement/StatementTop";
import StatementList from "../../components/statement/StatementList";
import StatementTop2 from "../../components/statement2/StatementTop";
import StatementList2 from "../../components/statement2/StatementList";


function StatementWallet() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Ledger Wallet ",

    }
    return <div>
        <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
        <div style={{ margin: "14px" }}>
            <Tabs
                defaultActiveKey={1}
                id="uncontrolled-tab-example"
                className="mb-2"
            >
                <Tab eventKey={1} title={'Aeps Wallet'}>
                    <StatementTop />
                    <StatementList />
                </Tab>
                <Tab eventKey={2} title={'Main Wallet'}>
                    <StatementTop2 />
                    <StatementList2 />
                </Tab>

            </Tabs>
        </div>
    </div>
}
export default StatementWallet