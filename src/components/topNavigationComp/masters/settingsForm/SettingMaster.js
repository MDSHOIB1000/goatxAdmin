import React from 'react'
import { Form } from 'react-bootstrap'
import CustomDropdown from '../../../../common/CustomDropdown'

function SettingMaster() {
    const itemList = [
        {
            name: "Disabled",
            value: "Disabled",
        },
        {
            name: "Enabled",
            value: "Enabled",
        },
    ];
    const changeHandle = (selectedData) => {
        // TODO
    };
    return (

        <form className="tbl-captionn">
            <div className="row">
                <div className="col-xl-6 mb-3">
                    <CustomDropdown
                        itemList={itemList}
                        placeholder="Select Company Settings *"
                        isSingleSelect={false}
                        icon={true}
                        onChange={changeHandle}
                    />
                </div>
                <div className="col-xl-6 mb-3">

                    <CustomDropdown
                        itemList={itemList}
                        placeholder="Select Site Settings *"
                        isSingleSelect={false}
                        icon={true}
                        onChange={changeHandle}
                    />
                </div>
                <div className="col-xl-6 mb-3">

                    <CustomDropdown
                        itemList={itemList}
                        placeholder="Select Sms Templete *"
                        isSingleSelect={false}
                        icon={true}
                        onChange={changeHandle}
                    />
                </div>
                <div className="col-xl-6 mb-3">

                    <CustomDropdown
                        itemList={itemList}
                        placeholder="Select Pakage Settings*"
                        isSingleSelect={false}
                        icon={true}
                        onChange={changeHandle}
                    />
                </div>
                <div className="col-xl-6 mb-3">

                    <CustomDropdown
                        itemList={itemList}
                        placeholder="Select Bank Settings*"
                        isSingleSelect={false}
                        icon={true}
                        onChange={changeHandle}
                    />
                </div>
                <div className="col-xl-6 mb-3">

                    <CustomDropdown
                        itemList={itemList}
                        placeholder="Select Logo Upload*"
                        isSingleSelect={false}
                        icon={true}
                        onChange={changeHandle}
                    />
                </div>
                <div className="col-xl-6 mb-3">

                    <CustomDropdown
                        itemList={itemList}
                        placeholder="Select Service Banner*"
                        isSingleSelect={false}
                        icon={true}
                        onChange={changeHandle}
                    />
                </div>
                <div className="col-xl-6 mb-3">

                    <CustomDropdown
                        itemList={itemList}
                        placeholder="Select Notification Settis ngs*"
                        isSingleSelect={false}
                        icon={true}
                        onChange={changeHandle}
                    />
                </div>
            </div>
            {/* <div>
                                    <button className="btn btn-primary me-1">Submit</button>
                                </div> */}
        </form>


    )
}

export default SettingMaster
