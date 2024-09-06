import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import ManageSenderId from '../manageSenderId/ManageSenderId'
import ManageTemplete from '../manageTemplet/ManageTemplet'
import ManageShortUrl from '../manageShortUrl/ManageShortUrl'
import BlockListNumber from './blockListNumber/BlockListNumber'

function UtilityManagerTab() {
    return (
        <>
            <Tabs
                defaultActiveKey="ManageSenderId"
                id="uncontrolled-tab-example"
            >

                <Tab eventKey="ManageSenderId" title="Manage Sender ID">
                    <ManageSenderId />
                </Tab>
                <Tab eventKey="Manage Templete" title="Manage Templete">
                    <ManageTemplete />
                </Tab>
                <Tab eventKey="Manage Short URL" title="Manage Short URL">
                    <ManageShortUrl />
                </Tab>
                <Tab eventKey="BlockListNumber" title="Block List Number">
                    <BlockListNumber />
                </Tab>


            </Tabs>
        </>
    )
}

export default UtilityManagerTab
