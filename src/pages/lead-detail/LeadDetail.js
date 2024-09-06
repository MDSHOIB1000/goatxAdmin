import { Accordion } from "react-bootstrap";
import LeadInformation from "../../components/lead-detail/LeadInformation";
import Comments from "../../components/lead-detail/Comments";
import EnquiryTable from "../../components/lead-detail/EnquiryTable";
import PermisionOption from "../../components/lead-detail/PermisionOption";
import RequirementDetail from "../../components/lead-detail/RequirementDetail";
import SystematicInfo from "../../components/lead-detail/SystematicInfo";
import CallsCompo from "../../components/lead-detail/CallsCompo";
import FeedBack from "../../components/lead-detail/FeedBack";
import Updates from "../../components/lead-detail/Updates";
import CostSheetCompo from "../../components/lead-detail/cost-sheet/CostSheetCompo";
import EmailCompo from "../../components/lead-detail/email/EmailCompo";
import ChattingWindow from "../../components/lead-detail/ChattingWindow";

function LeadDetail() {

    return <div className="row m-4">
        <div className="col-xl-12" style={{ padding: "0" }}>
            <div className="card">
                <div className="card-body p-0">
                    <div className="table-responsive active-projects style-1">
                        <div className="tbl-caption tbl-caption-2">
                            <h4 className="heading mb-0">Lead Detail </h4>
                        </div>
                    </div>
                    <div className="row" style={{ margin: "20px 0" }}>
                        <div className="col-4">
                            <Accordion defaultActiveKey="0" className="acorianDetail">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Lead Information</Accordion.Header>
                                    <Accordion.Body style={{ padding: "0" }}>
                                        <LeadInformation />
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Option Permission</Accordion.Header>
                                    <Accordion.Body style={{ padding: "0" }}>
                                        <PermisionOption />
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Requirement Detail</Accordion.Header>
                                    <Accordion.Body style={{ padding: "0" }}>
                                        <RequirementDetail />
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>Description Detail</Accordion.Header>
                                    <Accordion.Body style={{ padding: "0" }}>
                                        Description Detail
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4">
                                    <Accordion.Header>Systematic Information</Accordion.Header>
                                    <Accordion.Body style={{ padding: "0" }}>
                                        <SystematicInfo />
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                        <div className="col-8">
                            <Accordion defaultActiveKey="0" className="acorianDetail">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Comments (0)</Accordion.Header>
                                    <Accordion.Body style={{ padding: "0" }}>
                                        <Comments />
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Calls (0)</Accordion.Header>
                                    <Accordion.Body style={{ padding: "0" }}>
                                        <CallsCompo />
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="5">
                                    <Accordion.Header>Feedback (0)</Accordion.Header>
                                    <Accordion.Body style={{ padding: "0" }}>
                                        <FeedBack />
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Updates (0)</Accordion.Header>
                                    <Accordion.Body style={{ padding: "0" }}>
                                        <Updates />
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="6">
                                    <Accordion.Header>Cost Sheet (0)</Accordion.Header>
                                    <Accordion.Body style={{ padding: "0" }}>
                                        <CostSheetCompo />
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4">
                                    <Accordion.Header>Enquiry (1)</Accordion.Header>
                                    <Accordion.Body style={{ padding: "0" }}>
                                        <EnquiryTable />
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="7">
                                    <Accordion.Header>Emails (0)</Accordion.Header>
                                    <Accordion.Body style={{ padding: "0" }}>
                                        <EmailCompo />
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>Chats (0)</Accordion.Header>
                                    <Accordion.Body style={{ padding: "0" }}>
                                        <ChattingWindow />
                                    </Accordion.Body>
                                </Accordion.Item>


                            </Accordion>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default LeadDetail;