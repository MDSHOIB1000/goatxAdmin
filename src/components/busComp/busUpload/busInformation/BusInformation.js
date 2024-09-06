import React from 'react'
import CustomInputField from '../../../../common/CustomInputField'

function BusInformation({ handleChange }) {
    return (
        <>


            <div className="table-responsive active-projects style-1 mb-3">
                <div className="tbl-caption">
                    <h4 className="heading mb-0"><b>Bus Informations
                    </b></h4>
                </div>
            </div>

            <div className='card'>
                <div className='row'>
                   
                    <div className="col-xl-4 mb-3">
                        <CustomInputField
                            type="text"
                            placeholder="Bus Type"
                            name="busType"
                            value={""}
                            onChange={handleChange}
                            id="busType"
                        />
                    </div>
                    
                    <div className="col-xl-4 mb-3">
                        <CustomInputField
                            type="text"
                            placeholder="Bus Name"
                            name="busname"
                            value={""}
                            onChange={handleChange}
                            id="busname"
                        />
                    </div>
                    <div className="col-xl-4 mb-3">
                        <CustomInputField
                            type="text"
                            placeholder="Origin City"
                            name="origincity"
                            value={""}
                            onChange={handleChange}
                            id="origincity"
                        />
                    </div>
                    <div className="col-xl-4 mb-3">
                        <CustomInputField
                            type="text"
                            placeholder="Destination City"
                            name="destinationcity"
                            value={""}
                            onChange={handleChange}
                            id="destinationcity"
                        />
                    </div>
                    <div className="col-xl-4 mb-3">
                        <CustomInputField
                            type="date"
                            placeholder="Depart Date"
                            name="departdate"
                            value={""}
                            onChange={handleChange}
                            id="departdate"
                        />
                    </div>
                    <div className="col-xl-4 mb-3">
                        <CustomInputField
                            type="time"
                            placeholder="Depart Time"
                            name="departTime"
                            value={""}
                            onChange={handleChange}
                            id="departTime"
                        />
                    </div>
                    <div className="col-xl-4 mb-3">
                        <CustomInputField
                            type="date"
                            placeholder="Arrival Date "
                            name="arrivalDate"
                            value={""}
                            onChange={handleChange}
                            id="arrivalDate"
                        />
                    </div>
                    <div className="col-xl-4 mb-3">
                        <CustomInputField
                            type="time"
                            placeholder="Arrival Time"
                            name="arrivalTime"
                            value={""}
                            onChange={handleChange}
                            id="arrivalTime"
                        />
                    </div>
                    <div className="col-xl-6 mb-3">
                        <CustomInputField
                            type="text"
                            placeholder="Boarding City Point"
                            name="BoardingCityPoint "
                            value={""}
                            onChange={handleChange}
                            id="BoardingCityPoint "
                        />
                    </div>
                    <div className="col-xl-6 mb-3">
                        <CustomInputField
                            type="text"
                            placeholder="Destination City"
                            name="destinationcity"
                            value={""}
                            onChange={handleChange}
                            id="destinationcity"
                        />
                    </div>



                </div>
            </div>


        </>
    )
}

export default BusInformation