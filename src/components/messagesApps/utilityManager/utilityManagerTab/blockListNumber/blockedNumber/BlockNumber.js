import React from 'react';
import { Modal,  Tab, Tabs } from 'react-bootstrap'; // Use Form from react-bootstrap
import BlockMultipleContactNumber from './blockMultipleContactNumber/BlockMultipleContactNumber';
import BulkUpload from './bulkUpload/BulkUpload';

function BlockNumber({ show, setShow }) {
    return (
        <>
            <Modal show={show} onHide={() => setShow(!show)} size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className="modle-dilogee">
                <Modal.Header closeButton className=' bg-secondary'>
                    <Modal.Title className='text-light'>Add Sender Id</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Tabs
                        defaultActiveKey="blockMultipleContacts"
                        id="uncontrolled-tab-example"
                    >

                        <Tab eventKey="blockMultipleContacts" title="Block Multiple Contacts">
                            <BlockMultipleContactNumber />
                        </Tab>
                        <Tab eventKey="bulkUpload" title="Bulk Upload">
                            <BulkUpload />
                        </Tab>



                    </Tabs>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default BlockNumber;
