import React, { useState } from 'react'
import Select from 'react-select';
import CustomInputField from '../../../../../common/CustomInputField';
function VisaBasicInformation({ handleChange }) {
    const options = [
        { value: '1', label: 'TBO For' },
        { value: '2', label: 'Other Supplier' },
        // Add more options as needed
    ];
    const [selectedOption, setSelectedOption] = useState(null);

    const handleChanges = (selectedOption) => {
        setSelectedOption(selectedOption);
        console.log(`Selected:`, selectedOption);
    };
    return (
        <>

            <div className="table-responsive active-projects bg-primary text-uppercase mb-3">
                <div className="tbl-caption">
                    <h4 className="heading mb-0"><b>Add Visa</b></h4>
                </div>
            </div>
            <div className="table-responsive active-projects style-1 mb-3">
                <div className="tbl-caption">
                    <h4 className="heading mb-0"><b>Visa Basic Information </b></h4>
                </div>
            </div>

            <div className='card'>
                <div className='row'>
                    <div className="col-xl-4 mb-3">
                        <Select
                            value={selectedOption}
                            onChange={handleChanges}
                            options={options}
                            placeholder="Select Visa Country*"
                            isSearchable={true}
                        />

                    </div>
                    <div className="col-xl-4 mb-3">
                        <Select
                            value={selectedOption}
                            onChange={handleChanges}
                            options={options}
                            placeholder="Select Visa Type*"
                            isSearchable={true}
                        />

                    </div>
                    <div className="col-xl-4 mb-3">
                        <select className="form-select" aria-label="Default select example" name="ServiceProvider"
                            value={""}
                            onChange={handleChange}
                            placeholder = "Select Status"
                        >
                            
                            <option value={true}>Active</option>
                            <option value={false}>In Active</option>
                        </select>

                    </div>
                    <div className="col-xl-4 mb-3">
                        <CustomInputField
                            type="text"
                            placeholder="Processing Time "
                            name="processingTime"
                            value={""}
                            onChange={handleChange}
                            id="processingTime"
                        />
                    </div>
                    <div className="col-xl-4 mb-3">
                        <CustomInputField
                            type="text"
                            placeholder="Opt. for Delivery"
                            name="otpForDelivery"
                            value={""}
                            onChange={handleChange}
                            id="otpForDelivery"
                        />
                    </div>
                    <div className="col-xl-4 mb-3">
                        <CustomInputField
                            type="text"
                            placeholder="Travel Operator PNR"
                            name="traveloperatorPNR"
                            value={""}
                            onChange={handleChange}
                            id="traveloperatorPNR"
                        />
                    </div>



                </div>
            </div>


        </>
    )
}

export default VisaBasicInformation
