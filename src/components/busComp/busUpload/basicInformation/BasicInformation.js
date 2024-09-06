import React from 'react'
import CustomInputField from '../../../../common/CustomInputField'

function BasicInformation({ handleChange }) {
    return (
        <>

            <div className="table-responsive active-projects bg-primary text-uppercase mb-3">
                <div className="tbl-caption">
                    <h4 className="heading mb-0"><b>Bus Upload
                    </b></h4>
                </div>
            </div>
            <div className="table-responsive active-projects style-1 mb-3">
                <div className="tbl-caption">
                    <h4 className="heading mb-0"><b>Basic Informations
                    </b></h4>
                </div>
            </div>

           <div className='card'>
           <div className='row'>
                <div className="col-xl-4 mb-3">
                    <select className="form-select" aria-label="Default select example" name="ServiceProvider"
                        value={""}
                        onChange={handleChange}
                    >
                        <option >Select Busness Type</option>
                        <option value={1}>B2B</option>
                        <option value={3}>B2C</option>
                    </select>

                </div>
                <div className="col-xl-4 mb-3">
                    <CustomInputField
                        type="text"
                        placeholder="Agent Name"
                        name="agentName"
                        value={""}
                        onChange={handleChange}
                        id="agentName"
                    />
                </div>
                <div className="col-xl-4 mb-3">
                    <select className="form-select" aria-label="Default select example" name="ServiceProvider"
                        value={""}
                        onChange={handleChange}
                    >
                        <option >Issue Supplier *</option>
                        <option value={1}>TBO For</option>
                    </select>

                </div>
                <div className="col-xl-4 mb-3">
                    <CustomInputField
                        type="text"
                        placeholder="Confirmation Number"
                        name="confirmationNumber"
                        value={""}
                        onChange={handleChange}
                        id="confirmationNumber"
                    />
                </div>
                <div className="col-xl-4 mb-3">
                    <CustomInputField
                        type="text"
                        placeholder="Ticket Number"
                        name="ticketNumber"
                        value={""}
                        onChange={handleChange}
                        id="ticketNumber"
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

export default BasicInformation