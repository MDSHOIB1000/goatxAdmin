import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CustomDropdown from '../../../../common/CustomDropdown';

function Dispute() {
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
                        placeholder="Select Pending Dispute *"
                        isSingleSelect={false}
                        icon={true}
                        onChange={changeHandle}
                    />
                </div>
                <div className="col-xl-6 mb-3">

                    <CustomDropdown
                        itemList={itemList}
                        placeholder="Select Dispute Chat *"
                        isSingleSelect={false}
                        icon={true}
                        onChange={changeHandle}
                    />
                </div>
                <div className="col-xl-6 mb-3">

                    <CustomDropdown
                        itemList={itemList}
                        placeholder="Select Dispute Update *"
                        isSingleSelect={false}
                        icon={true}
                        onChange={changeHandle}
                    />
                </div>
                <div className="col-xl-6 mb-3">

                    <CustomDropdown
                        itemList={itemList}
                        placeholder="Select Solve Dispute *"
                        isSingleSelect={false}
                        icon={true}
                        onChange={changeHandle}
                    />
                </div>
                <div className="col-xl-6 mb-3">

                    <CustomDropdown
                        itemList={itemList}
                        placeholder="Select Reopen Dispute *"
                        isSingleSelect={false}
                        icon={true}
                        onChange={changeHandle}
                    />
                </div>
            </div>
            <div>
                <Link to={"/company-staff/welcome"} className="btn btn-warning me-1">cancel</Link>
                <button className="btn btn-primary me-1">Update </button>
            </div>
        </form>


    )
}

export default Dispute
