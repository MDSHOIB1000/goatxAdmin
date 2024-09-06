import CustomDropdown from "../../../../../common/CustomDropdown";


function GuestResistrationSerttings() {
    const itemList = [
        {
            name: "Enable",
            value: "Enable",
        },
        {
            name: "Disable",
            value: "Disable",
        },
        
    ];
    const itemList_2 = [
        {
            name: "Retailer",
            value: "Retailer",
        },
        {
            name: "Distributer",
            value: "Distributer",
        },
        
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
                                <div className="tbl-caption">
                                    <h4 className="heading mb-0">GUEST REGISTRATION SETTINGS</h4>
                                </div>
                                <form className="tbl-captionn">
                                    <div className="row">
                                        <div className="col-xl-6 mb-3">
                                        <div className="dropdownWrapper">
                                                            <CustomDropdown
                                                                itemList={itemList}
                                                                placeholder="Registration Status"
                                                                isSingleSelect={false}
                                                                icon={true}
                                                                onChange={changeHandle}
                                                            />
                                                        </div>
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                        <div className="dropdownWrapper">
                                                            <CustomDropdown
                                                                itemList={itemList_2}
                                                                placeholder="Default Retailer Scheme"
                                                                isSingleSelect={false}
                                                                icon={true}
                                                                onChange={changeHandle}
                                                            />
                                                        </div>
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                        <div className="dropdownWrapper">
                                                            <CustomDropdown
                                                                itemList={itemList_2}
                                                                placeholder="Default Guest Scheme"
                                                                isSingleSelect={false}
                                                                icon={true}
                                                                onChange={changeHandle}
                                                            />
                                                        </div>
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                        <div className="dropdownWrapper">
                                                            <CustomDropdown
                                                                itemList={itemList_2}
                                                                placeholder="Default Distributer Scheme"
                                                                isSingleSelect={false}
                                                                icon={true}
                                                                onChange={changeHandle}
                                                            />
                                                        </div>
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                        <div className="dropdownWrapper">
                                                            <CustomDropdown
                                                                itemList={itemList_2}
                                                                placeholder="Default Member Type"
                                                                isSingleSelect={false}
                                                                icon={true}
                                                                onChange={changeHandle}
                                                            />
                                                        </div>
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                        <div className="dropdownWrapper">
                                                            <CustomDropdown
                                                                itemList={itemList_2}
                                                                placeholder="Default Parents"
                                                                isSingleSelect={false}
                                                                icon={true}
                                                                onChange={changeHandle}
                                                            />
                                                        </div>
                                            
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                        <div className="dropdownWrapper">
                                                            <CustomDropdown
                                                                itemList={itemList_2}
                                                                placeholder="Default State"
                                                                isSingleSelect={false}
                                                                icon={true}
                                                                onChange={changeHandle}
                                                            />
                                                        </div>
                                        </div>
                                        <div className="col-xl-6 mb-3">
                                        <div className="dropdownWrapper">
                                                            <CustomDropdown
                                                                itemList={itemList_2}
                                                                placeholder="Default District"
                                                                isSingleSelect={false}
                                                                icon={true}
                                                                onChange={changeHandle}
                                                            />
                                                        </div>
                                        </div>
                                    </div>
                                    {/* <div>
                                        <Link to='service-master' className="btn btn-danger light ms-1">Cancel</Link>
                                        <button className="btn btn-primary me-1">Submit</button>
                                    </div> */}
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default GuestResistrationSerttings