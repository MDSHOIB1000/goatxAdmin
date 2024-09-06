import CustomDropdown from "../../../../../../common/CustomDropdown";


function SearchUserOperator() {
    const itemList = [
        { name: "provider Name1", value: "provider Name1" },
        { name: "provider Name2", value: "provider Name2" },
        { name: "provider Name3", value: "provider Name3" },
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
                            <form className="tbl-captionn">
                                <div className="row">

                                    <div className="col-xl-6 mb-3">
                                        <div className="dropdownWrapper">
                                            <CustomDropdown
                                                itemList={itemList}
                                                placeholder="--Select Member Type -- "
                                                isSingleSelect={false}
                                                icon={true}
                                                onChange={changeHandle}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 mb-3">
                                        <div className="dropdownWrapper">
                                            <CustomDropdown
                                                itemList={itemList}
                                                placeholder="--Select User -- "
                                                isSingleSelect={false}
                                                icon={true}
                                                onChange={changeHandle}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div>

                                    <button className="btn btn-primary me-1">Search</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default SearchUserOperator