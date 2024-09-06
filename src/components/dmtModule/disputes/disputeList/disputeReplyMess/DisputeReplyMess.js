import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
function DisputeReplyMess(props) {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here, for example, you can log the input value
        console.log('Submitted Value:', inputValue);
    };
    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered

                className="modle-dilogee"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter" className="text-center">
                        <h4 className="text-center">Dispute Message</h4>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <form onSubmit={handleSubmit} className='cusforms'>
                        <div className="form-group">
                            <label htmlFor="inputField"> Message Replay Disputes</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputField"
                                placeholder="Enter Replay..."
                                value={inputValue}
                                onChange={handleChange}
                            />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn ripple btn-success" type="button" id="download_btn">Send</button>

                    <Button onClick={props.onHide}>Close</Button>

                </Modal.Footer>
            </Modal>
        </>
    )
}

export default DisputeReplyMess
