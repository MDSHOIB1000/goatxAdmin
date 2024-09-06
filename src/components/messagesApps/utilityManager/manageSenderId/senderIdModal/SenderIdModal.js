import React from 'react';
import { Button, Modal, Form, Tab, Tabs } from 'react-bootstrap'; // Use Form from react-bootstrap
import SingleAdd from './singleAdd/SingleAdd';
import ImportData from './importData/ImportData';

function SenderIdModal({ show, setShow }) {
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
                        defaultActiveKey="SingleAdd"
                        id="uncontrolled-tab-example"
                    >

                        <Tab eventKey="SingleAdd" title="Single Add">
                            <SingleAdd />
                        </Tab>
                        <Tab eventKey="import" title="import">
                            <ImportData />
                        </Tab>



                    </Tabs>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default SenderIdModal;
