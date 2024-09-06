import { FaSearch } from "react-icons/fa";
import CustomDropdown from "../../../common/CustomDropdown";
function RetailerKycStatus() {
    const name = "dropdown";
    const placeholder = "Course Name";
    const type = "dropdown";
    const itemList = [
        {
            name: "Active",
            value: "Active",
          },
          {
            name: "De-Active",
            value: "De-Active",
          },
    ];

    const changeHandle = (selectedData) => {
        // TODO
    };
    return (
        <>
            <div className="kycStatus m-4">
                <div className="">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="card">
                                <div className="card-body">
                                    <form >
                                        <div className="row">
                                            <div className="col-lg-3 col-md-8 form-group mg-b-0">

                                                <div className="dropdownWrapper p-2">
                                                    <CustomDropdown
                                                        itemList={itemList}
                                                        placeholder="Select KYC Status"
                                                        isSingleSelect={false}
                                                        icon={true}
                                                        onChange={changeHandle}
                                                    />
                                                </div>
                                                {/* <select
                          className="form-control  example select2"
                          id="kyc_status"
                          name="kyc_status"
                          style={{ width: "100%" }}
                          fdprocessedid="5ibydh"
                        >
                          <option value="all" id="123">
                            All Status (0)
                          </option>
                          <option value="approved">Approved (0)</option>
                          <option value="rejected">Rejected (0)</option>
                          <option value="pending">Pending (0)</option>
                        </select> */}
                                            </div>
                                            <div className="col-lg-3 col-md-4 mg-t-10 mg-sm-t-25">
                                                <button className="btn btn-primary pd-x-20" style={{ marginTop: '15px' }} type="submit" ><FaSearch style={{ marginBottom: '5px' }} /> Search</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default RetailerKycStatus