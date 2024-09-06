import { useParams } from "react-router-dom"
import EnquireDetail from "./EnquireDetail"
import SystematicInformation from "./Systematicinfo"

function CreateEnquiry() {
    const params = useParams()
    return <div className="row m-4">
        <div className="col-xl-12">
            <div className="card">
                <div className="card-body p-0">
                    <div className="table-responsive active-projects style-1">
                        <div className="tbl-caption tbl-caption-2">
                            <h4 className="heading mb-0">{params?.id ? "Edit Enquire  " : "Create Enquire  "}</h4>
                        </div>
                        <form className="tbl-captionn">
                            <div className="row">
                                <div className="card col-12">
                                    <h3>Enquire  Detail</h3>
                                    <hr></hr>
                                    <EnquireDetail />
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
export default CreateEnquiry