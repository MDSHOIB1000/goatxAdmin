import React from 'react'
import BasicInformation from './basicInformation/BasicInformation'
import BusInformation from './busInformation/BusInformation'
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs'
import BusCancelPolicy from './cancelPolicy/BusCancelPolicy'
import AddPassanger from './addPassenger/AddPassanger'
import FareInformations from './fareInformations/FareInformations'
import MarkupDiscount from './markupDiscount/MarkupDiscount'

function BusUpload() {
    const handleChange = () => {

    }
    const breadCrumbsTitle = {
        title_1: "Bus",
        title_1: "Bus Upload"
    }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div className="card m-4">
                <div className="row">
                    <div className="col-xl-12">
                        <BasicInformation handleChange={handleChange} />
                        <BusInformation handleChange={handleChange} />
                        <BusCancelPolicy handleChange={handleChange} />
                        <AddPassanger handleChange={handleChange} />
                        <FareInformations handleChange={handleChange} />
                        <MarkupDiscount handleChange={handleChange} />
                    </div>
                </div>
                <div className='col '>
                    <button className='btn rounded-lg btn-dark'>Details Review</button>
                </div>
            </div>
        </>
    )
}

export default BusUpload