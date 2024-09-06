import { Button } from "react-bootstrap";
import CustomDropdown from "../../../../common/CustomDropdown";

function ServiceRetailer() {
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
    const changeHandle = (selectedData) => {
        // TODO
    };
    return (
        <>

            <form className="tbl-captionn">
                <div className="row">
                    <div className="col-xl-4 mb-3">
                        <div className="dropdownWrapper">
                            <CustomDropdown
                                itemList={itemList}
                                placeholder="Housing Society Services *"
                                isSingleSelect={false}
                                icon={true}
                                onChange={changeHandle}
                            />
                        </div>
                    </div>
                    <div className="col-xl-4 mb-3">
                        <div className="dropdownWrapper">
                            <CustomDropdown
                                itemList={itemList}
                                placeholder="Cable TV Services *"
                                isSingleSelect={false}
                                icon={true}
                                onChange={changeHandle}
                            />
                        </div>
                    </div>
                    <div className="col-xl-4 mb-3">
                        <div className="dropdownWrapper">
                            <CustomDropdown
                                itemList={itemList}
                                placeholder="LPG Gas Services *"
                                isSingleSelect={false}
                                icon={true}
                                onChange={changeHandle}
                            />
                        </div>
                    </div>
                    <div className="col-xl-4 mb-3">
                        <div className="dropdownWrapper">
                            <CustomDropdown
                                itemList={itemList}
                                placeholder="Pancard Services *"
                                isSingleSelect={false}
                                icon={true}
                                onChange={changeHandle}
                            />
                        </div>
                    </div>
                    <div className="col-xl-4 mb-3">
                        <div className="dropdownWrapper">
                            <CustomDropdown
                                itemList={itemList}
                                placeholder="Cable TV Services *"
                                isSingleSelect={false}
                                icon={true}
                                onChange={changeHandle}
                            />
                        </div>
                    </div>
                </div>
                <Button className="bg-danger" onClick={""}>Save</Button>
            </form>
        </>
    )
}
export default ServiceRetailer