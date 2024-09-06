import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import CmposeSms from '../composeSms/CmposeSms'
import CustomizeSms from '../customizeSms/CustomizeSms'
import BulkUploadSms from '../bulkUploadSms/BulkUploadSms'

function CreateCampingAside() {
    return (
        <>
            <Tabs
                defaultActiveKey="Compose SMS"
                id="uncontrolled-tab-example"
            >

                <Tab eventKey="Compose SMS" title="Compose SMS">
                    <CmposeSms/>
                </Tab>
                <Tab eventKey="Customised SMS" title="Customised SMS">
                    <CustomizeSms/>
                </Tab>
                <Tab eventKey="Bulk Upload Sms" title="Bulk Upload Sms">
                    <BulkUploadSms/>
                </Tab>

            </Tabs>
        </>
    )
}

export default CreateCampingAside
