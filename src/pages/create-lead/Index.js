import { useParams } from "react-router-dom"
import LeadInformations from "../../components/CreateLead/LeadInformations"
import OptInForm from "../../components/CreateLead/OptinPermission"
import RequirementDetails from "../../components/CreateLead/RequirementDetails"
import SystematicInformation from "../../components/CreateLead/SystematicInformation"

function CreateLead() {
    const params = useParams()
    return <div className="row m-4">
        <div className="col-xl-12">
            <div className="card">
                <div className="card-body p-0">
                    <div className="table-responsive active-projects style-1">
                        <div className="tbl-caption tbl-caption-2">
                            <h4 className="heading mb-0">{params?.id ? "Edit Lead" : "Create Lead"}</h4>
                        </div>
                        <form className="tbl-captionn">
                            <div className="row">
                                <div className="card col-12">
                                    <h3>Lead Informations</h3>
                                    <hr></hr>
                                    <LeadInformations />
                                </div>
                                <div className="card col-12">
                                    <h3>Optin Permission</h3>
                                    <hr></hr>
                                    <OptInForm />
                                </div>
                                <div className="card col-12">
                                    <h3>Requirement Details</h3>
                                    <hr></hr>
                                    <RequirementDetails />
                                </div>
                                <div className="card col-12">
                                    <h3>Systematic Information</h3>
                                    <hr></hr>
                                    <SystematicInformation />
                                </div>
                            </div>
                            <div>
                                <button className="btn btn-primary me-1" type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default CreateLead