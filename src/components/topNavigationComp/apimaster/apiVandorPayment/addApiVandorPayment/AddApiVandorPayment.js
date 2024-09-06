import CustomDropdown from "../../../../../common/CustomDropdown"

function AddApiVandorPayment() {
    const itemList = [
        { name: "one 1", value: "one 1" },
        { name: "one 2", value: "one 2" },
        { name: "one 3", value: "one 3" },
    ];
    const changeHandle = (selectedData) => {
        // TODO
    };
    return (
        <>
            <div className="row">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0">ADD API VENDOR</h4>
                                </div>
                                <form className="tbl-captionn">
                                    <div className="row">
                                        <div className="col-xl-6 mb-3">
                                        <div className="dropdownWrapper">
                                            <CustomDropdown 
                                                itemList={itemList}
                                                placeholder="--Select Limit Status -- "
                                                isSingleSelect={false}
                                                icon={true}
                                                onChange={changeHandle}
                                            />
                                        </div>
                                        </div>
                                        <div className="col-xl-6 mt-3">

                                            <button className="btn btn-primary me-1 mt-4">Submit</button>
                                        </div>
                                    </div>

                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AddApiVandorPayment