import CustomDropdown from "../../../../../common/CustomDropdown";

function SearchStatus() {
    const itemList = [
        {
            name: "Enabled",
            value: "Enabled",
        },
        {
            name: "Disabled",
            value: "Disabled",
        },
    ];
    const changeHandle = (selectedData) => {
        // TODO
    };
    return (
        <>
            <div className='row m-4'>
                <div className="col-xl-12 row-sm ">
                    <div className="card">
                        <div className="card-body">
                            <div className="table-responsive">
                                <div id="my_table_wrapper" className="dataTables_wrapper dt-bootstrap4 no-footer">
                                    <div className="row">
                                        <div className="col-sm-12 col-md-4 mb-3">
                                            <div className="dataTables_lengthh" id="my_table_length">
                                                <label>Status</label>
                                                <CustomDropdown
                                                    itemList={itemList}
                                                    placeholder="Select Status *"
                                                    isSingleSelect={false}
                                                    icon={true}
                                                    onChange={changeHandle}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-4 mt-5">
                                            <div className="dataTables_lengthh text-center mb-5" id="my_table_length">
                                                <button className="btn btn-primary me-1">Submit</button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                {/* Script */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SearchStatus