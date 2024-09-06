import { Tab, Tabs } from "react-bootstrap"
import Breadcrumbs from "../../common/breadcrumb/Breadcrumbs"
import PasswordReset from "./passwordReset/PasswordReset"
import PinReset from "./pinReset/PinReset"
import RoleManeger from "./mappingRole/roleManeger/RoleManeger"
import ChangeMapping from "./mappingRole/changeMapping/ChangeMapping"
import StokeDetails from "./stokeManager/StokeDetails"


function ViewProfileMember() {
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
                        <Tab eventKey={1} title={'Password & PIN '}>
                            <div className="row">
                                <div className="col-lg-6">
                                    <PasswordReset />
                                </div>
                                <div className="col-lg-6">
                                    <PinReset />
                                </div>
                            </div>


                        </Tab>
                        <Tab eventKey={2} title={'Mapping & Role'}>
                            <div className="row">
                                <div className="col-lg-6">
                                    <RoleManeger />
                                </div>
                                <div className="col-lg-6">
                                    <ChangeMapping />
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey={3} title={'Stock Manage'}>
                            <StokeDetails />
                        </Tab>

                    </Tabs>
                </div>
            </div >
        </>
    )
}
export default ViewProfileMember