import { ToastContainer } from "react-toastify"
import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs"


function AddNumber() {
    const breadCrumbsTitle = {
        title_1: "Add Number"
    }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div className="ContentArea m-4">
                <div className="card">
                    <div className="card-header"><span></span></div>
                    <div className="card-body">
                        <form action="" method="post" name="frmReport" id="frmReport" className="cusforms">
                            <input type="hidden" id="hidID" name="hidID" />
                            <div className="form-row row" style={{ alignItems: 'end' }}>
                                <div className="form-group col-12 col-md-6 col-lg-4 mb-3">
                                    <label htmlFor="user_id">User Id <span style={{ color: 'red' }}>*</span></label>
                                    <input
                                        type="text"
                                        name="user_id"
                                        id="user_id"
                                        className="form-control"
                                        placeholder="Enter User Id"
                                    />
                                </div>
                                <div className="form-group col-12 col-md-6 col-lg-4 mb-3">
                                    <label htmlFor="email_id">Email ID <span style={{ color: 'red' }}>*</span></label>
                                    <input
                                        type="email"
                                        name="email_id"
                                        id="email_id"
                                        className="form-control"
                                        placeholder="Enter Email ID"
                                    />
                                </div>
                                <div className="form-group col-12 col-md-6 col-lg-4 mb-3">
                                    <label htmlFor="phone_number">Phone Number <span style={{ color: 'red' }}>*</span></label>
                                    <input
                                        type="number"
                                        name="phone_number"
                                        id="phone_number"
                                        className="form-control"
                                        placeholder="Enter Phone Number"
                                    />
                                </div>
                                <div className="form-group col-12 col-md-6 col-lg-4 mb-3">
                                    <label htmlFor="waba_id">Waba Id <span style={{ color: 'red' }}>*</span></label>
                                    <input
                                        type="text"
                                        name="waba_id"
                                        id="waba_id"
                                        className="form-control"
                                        placeholder="Enter Waba Id"
                                    />
                                </div>
                                <div className="form-group col-12 col-md-6 col-lg-4 mb-3">
                                    <label htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        className="form-control"
                                        placeholder="Enter Name"
                                    />
                                </div>
                                <div className="form-group col-12 col-md-6 col-lg-4 mb-3">
                                    <label htmlFor="entity_name">Entity Name</label>
                                    <input
                                        type="text"
                                        name="entity_name"
                                        id="entity_name"
                                        className="form-control"
                                        placeholder="Enter Entity Name"
                                    />
                                </div>

                                <div className="form-group col-12 col-md-4 col-lg-2 mb-3">
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
export default AddNumber