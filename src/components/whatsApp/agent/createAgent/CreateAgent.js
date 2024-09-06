import { ToastContainer } from "react-toastify"
import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs"


function CreateAgent() {
    const breadCrumbsTitle = {
        title_1:"Create Agent"
    }
    return (
        <>
          <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle}/>
<div className="ContentArea m-3">
    <div className="card">
        <div className="card-header"><span></span></div>
        <div className="card-body">
            <form action="" method="post" name="frmReport" id="frmReport" className="cusforms">
                <input type="hidden" id="hidID" name="hidID" />
                <div className="form-row row" style={{ alignItems: 'end' }}>
                    <div className="form-group col-12 col-md-6 col-lg-4 mb-3">
                        <label htmlFor="agent_name">Agent Name <span style={{ color: 'red' }}>*</span></label>
                        <input type="text" name="agent_name" id="agent_name" className="form-control" placeholder="Enter Agent Name" />
                    </div>
                    <div className="form-group col-12 col-md-6 col-lg-4 mb-3">
                        <label htmlFor="agent_number">Agent Number <span style={{ color: 'red' }}>*</span></label>
                        <input type="number" name="agent_number" id="agent_number" className="form-control" placeholder="Enter Agent Number" />
                    </div>
                    <div className="form-group col-12 col-md-6 col-lg-4 mb-3">
                        <label htmlFor="agent_email">Agent Email <span style={{ color: 'red' }}>*</span></label>
                        <input type="email" name="agent_email" id="agent_email" className="form-control" placeholder="Enter Agent Email" />
                    </div>
                    <div className="form-group col-12 col-md-6 col-lg-4 mb-3">
                        <label htmlFor="agent_password">Agent Password <span style={{ color: 'red' }}>*</span></label>
                        <input type="password" name="agent_password" id="agent_password" className="form-control" placeholder="Enter Agent Password" />
                    </div>
                    <div className="form-group col-12 col-md-2 mb-3">
                        <label>&nbsp;</label>
                        <button type="button" className="btn btn-primary w-100">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
    <ToastContainer />
</div>

        </>
    )
}
export default CreateAgent