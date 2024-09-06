import React from 'react'
import { Form } from 'react-bootstrap'
import CustomDropdown from '../../../../common/CustomDropdown';

function Members() {
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
                        placeholder="Select Member List *"
                        isSingleSelect={false}
                        icon={true}
                        onChange={changeHandle}
                    />
                </div>
                <div className="col-xl-6 mb-3">

                    <CustomDropdown
                        itemList={itemList}
                        placeholder="Select Create Member *"
                        isSingleSelect={false}
                        icon={true}
                        onChange={changeHandle}
                    />
                </div>
                <div className="col-xl-6 mb-3">

                    <CustomDropdown
                        itemList={itemList}
                        placeholder="Select Update Member *"
                        isSingleSelect={false}
                        icon={true}
                        onChange={changeHandle}
                    />
                </div>
                <div className="col-xl-6 mb-3">

                    <CustomDropdown
                        itemList={itemList}
                        placeholder="Select Reset Password *"
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

export default Members
