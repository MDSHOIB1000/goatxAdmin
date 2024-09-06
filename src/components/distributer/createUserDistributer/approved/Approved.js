import { useState } from "react"

function ApprovedArea({ handleChange, submitApproved, initialValues }) {
    // const [initialValues, setInitialValue] = useState()
    // const handleChange = (e) => {
    //     setInitialValue(e.target.value)
    // }
    // const submitApproved = () => {
    //     console.log(initialValues);
    // }
    return (
        <>
            <section className="ListDistributer m-4">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body p-0">
                                <div className="table-responsive active-projects style-1">
                                    <div className="tbl-caption justify-content-center">
                                        <h4 className="heading mb-0 border p-1 rounded"><b>Approval</b></h4>

                                    </div>
                                    <div id="empoloyees-tblwrapper_wrapper" className=" no-footer"><div className="dt-buttons"></div>
                                        <div class="container pb-4">
                                            <div className='row'>
                                                <div className="col-lg-6">
                                                    <div className="approved">
                                                        <select className="form-select" aria-label="Default select example" name="is_approved" value={initialValues.is_approved} onChange={handleChange}>
                                                            <option selected>Open this select menu</option>
                                                            <option value={"false"}>Not Approved</option>
                                                            <option value={"true"}>Approved</option>
                                                        </select>

                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="approved">
                                                        <button type="button" className="btn btn-warning" onClick={submitApproved}>Submit</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >

            </section>
        </>
    )
}
export default ApprovedArea