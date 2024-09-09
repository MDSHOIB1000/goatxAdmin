import React from 'react'
import TicketBasicInformation from './ticketBasicInformation/TicketBasicInformation'
import SegamentDetails from './segamentDetails/SegamentDetails'

function FlightUploadTicket() {
    const handleChange = () => {

    }
    return (
        <>
            <div className="card m-4">
                <div className="row">
                    <div className="col-xl-12">
                        <TicketBasicInformation handleChange={handleChange} />
                        <SegamentDetails handleChange={handleChange} />
                        {/* <VisaApplicationForm handleChange={handleChange} />
                        <div className='text-end'>
                            <button className=''>Save</button>
                        </div> */}
                    </div>

                </div>
            </div>
        </>
    )
}

export default FlightUploadTicket
