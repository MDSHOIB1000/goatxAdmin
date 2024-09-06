import React from 'react'
import CustomInputField from '../../../../common/CustomInputField'

function FareInformations({ handleChange }) {
    return (
        <>
            <div className="table-responsive active-projects style-1 mb-3">
                <div className="tbl-caption">
                    <h4 className="heading mb-0"><b>Fare Informations
                    </b></h4>
                </div>
            </div>

            <div className='card'>
                <div className='row'>
                   
                    <div className="col-xl-4 mb-3">
                        <CustomInputField
                            type="text"
                            placeholder="Bus Fare"
                            name="busfare"
                            value={""}
                            onChange={handleChange}
                            id="busfare"
                        />
                    </div>
                    
                    <div className="col-xl-4 mb-3">
                        <CustomInputField
                            type="text"
                            placeholder="Tax"
                            name="tax"
                            value={""}
                            onChange={handleChange}
                            id="tax"
                        />
                    </div>
                    <div className="col-xl-4 mb-3">
                        <CustomInputField
                            type="text"
                            placeholder="Other Charges"
                            name="otherCharges"
                            value={""}
                            onChange={handleChange}
                            id="otherCharges"
                        />
                    </div>
                </div>
            </div>


        </>
    )
}

export default FareInformations