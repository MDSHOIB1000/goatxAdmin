import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import CmposeSms from '../manageTemplet/ManageTemplet'
import CustomizeSms from '../manageSenderId/ManageSenderId'
import BulkUploadSms from '../manageShortUrl/ManageShortUrl'

function ManageSenderId() {
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

export default ManageSenderId
