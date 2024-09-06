import React from 'react'
import { Form } from 'react-bootstrap'
import CustomDropdown from '../../../../common/CustomDropdown';

function ApiMasterForm() {
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
                        placeholder="Select Provider Master *"
                        isSingleSelect={false}
                        icon={true}
                        onChange={changeHandle}
                    />
                </div>
                <div className="col-xl-6 mb-3">
                    <CustomDropdown
                        itemList={itemList}
                        placeholder="Select Api Master *"
                        isSingleSelect={false}
                        icon={true}
                        onChange={changeHandle}
                    />
                </div>
                <div className="col-xl-6 mb-3">

                    <CustomDropdown
                        itemList={itemList}
                        placeholder="Select Add New Api *"
                        isSingleSelect={false}
                        icon={true}
                        onChange={changeHandle}
                    />
                </div>
                <div className="col-xl-6 mb-3">

                    <CustomDropdown
                        itemList={itemList}
                        placeholder="Select Update Api *"
                        isSingleSelect={false}
                        icon={true}
                        onChange={changeHandle}
                    />
                </div>
                <div className="col-xl-6 mb-3">

                    <CustomDropdown
                        itemList={itemList}
                        placeholder="Select Denomination Wise Api *"
                        isSingleSelect={false}
                        icon={true}
                        onChange={changeHandle}
                    />
                </div>
                <div className="col-xl-6 mb-3">

                    <CustomDropdown
                        itemList={itemList}
                        placeholder="Select Number Series Master *"
                        isSingleSelect={false}
                        icon={true}
                        onChange={changeHandle}
                    />
                </div>
                <div className="col-xl-6 mb-3">

                    <CustomDropdown
                        itemList={itemList}
                        placeholder="Select State Wise Api *"
                        isSingleSelect={false}
                        icon={true}
                        onChange={changeHandle}
                    />
                </div>
                <div className="col-xl-6 mb-3">

                    <CustomDropdown
                        itemList={itemList}
                        placeholder="Select Backup Api Master *"
                        isSingleSelect={false}
                        icon={true}
                        onChange={changeHandle}
                    />
                </div>
                <div className="col-xl-6 mb-3">

                    <CustomDropdown
                        itemList={itemList}
                        placeholder="Select Api Switching *"
                        isSingleSelect={false}
                        icon={true}
                        onChange={changeHandle}
                    />
                </div>
                <div className="col-xl-6 mb-3">

                    <CustomDropdown
                        itemList={itemList}
                        placeholder="Select User Operator Limit *"
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

export default ApiMasterForm
