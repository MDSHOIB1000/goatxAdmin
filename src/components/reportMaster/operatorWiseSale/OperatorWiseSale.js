import React from 'react'
import OperatorWiseForm from './operatorWiseFormSe/OperatorWiseForm'
import OperatorWiseReportList from './operatorWiseReportList/OperatorWiseReportList'
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs'

function OperatorWiseSale() {
  const breadCrumbsTitle = {
    id: "1",
    title_1: "Reports",
    title_2: "Operator Wise Sale",
}
    return (
        <section>
             <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
                <OperatorWiseForm />
                <OperatorWiseReportList/>
        </section>
    )
}

export default OperatorWiseSale
