import React from 'react'
import VisaCountryListFilter from './visaCountryListFill/VisaCountryListFill'
import VisCountryList from './VisaCountryLists/VisCountrytList'

function VisaCountryList() {
    return (
        <div className='card'>
            <VisaCountryListFilter />
            <VisCountryList/>
        </div>
    )
}

export default VisaCountryList
