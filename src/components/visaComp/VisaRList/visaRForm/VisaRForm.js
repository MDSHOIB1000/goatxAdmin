import React from 'react'
import VisaBasicInformation from './visaBasicInformation/VisaBasicInformation'
import VisaPriceInfo from './visaPriceInfo/VisaPriceInfo'
import VisaApplicationForm from './visaApplicationsForm/VisaApplicationForm'

function VisaRForm() {
    const handleChange = () => {

    }
    return (
        <>
            <div className="card m-4">
                <div className="row">
                    <div className="col-xl-12">
                        <VisaBasicInformation handleChange={handleChange} />
                        <VisaPriceInfo handleChange={handleChange} />
                        <VisaApplicationForm handleChange={handleChange} />
                       <div  className='text-end'>
                       <button className=''>Save</button>
                       </div>
                    </div>
                   
                </div>
            </div>
        </>
    )
}

export default VisaRForm
