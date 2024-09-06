import React from 'react'
import LedgerReportForm from './LedgerReportForm/LedgerReportForm'
import LedgerReportList from './ledgerReportList/LedgerReportList'

function LedgerReport() {
    return (
        <section>
            <div className='container'>
                <LedgerReportForm />
                <LedgerReportList/>
            </div>
        </section>
    )
}

export default LedgerReport
