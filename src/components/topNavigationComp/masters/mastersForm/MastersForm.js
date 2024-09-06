import React from 'react'
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CustomDropdown from '../../../../common/CustomDropdown';

function MastersForm() {
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
                    {/* <label htmlFor="exampleFormControlInput3" className="form-label">Bank Master:<span className="text-danger">*</span></label> */}
                    <CustomDropdown
                        itemList={itemList}
                        placeholder="Select Bank Master *"
                        isSingleSelect={false}
                        icon={true}
                        onChange={changeHandle}
                    />
                </div>
                <div className="col-xl-6 mb-3">
                    <CustomDropdown
                        itemList={itemList}
                        placeholder="Select Role Master *"
                        isSingleSelect={false}
                        icon={true}
                        onChange={changeHandle}
                    />
                </div>
                <div className="col-xl-6 mb-3">
                    <CustomDropdown
                        itemList={itemList}
                        placeholder="Select Status Master *"
                        isSingleSelect={false}
                        icon={true}
                        onChange={changeHandle}
                    />
                </div>
                <div className="col-xl-6 mb-3">

                    <CustomDropdown
                        itemList={itemList}
                        placeholder="Select Service Master *"
                        isSingleSelect={false}
                        icon={true}
                        onChange={changeHandle}
                    />
                </div>
                <div className="col-xl-6 mb-3">

                    <CustomDropdown
                        itemList={itemList}
                        placeholder="Select Payment Method Master *"
                        isSingleSelect={false}
                        icon={true}
                        onChange={changeHandle}
                    />
                </div>
                <div className="col-xl-6 mb-3">

                    <CustomDropdown
                        itemList={itemList}
                        placeholder="Select Payout Beneficiary Master *"
                        isSingleSelect={false}
                        icon={true}
                        onChange={changeHandle}
                    />
                </div>
                <div className="col-xl-6 mb-3">

                    <CustomDropdown
                        itemList={itemList}
                        placeholder="Select Contact Enquiry *"
                        isSingleSelect={false}
                        icon={true}
                        onChange={changeHandle}
                    />
                </div>
                <div className="col-xl-6 mb-3">
                    <CustomDropdown
                        itemList={itemList}
                        placeholder="Select Agent Onboarding List *"
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

export default MastersForm
