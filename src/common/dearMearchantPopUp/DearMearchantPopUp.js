import { Button, Modal } from "react-bootstrap"
import img from '../../assets/images/logo/merchant.paypanda-logo.png'
function DearMearchantPopUp(props) {
    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className="popupfirst"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter" style={{ fontWeight: '900', color: 'blue', fontSize: '25px' }}>
                        Dear Merchants
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <img src={img} alt="" style={{ width: '100%' }} />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <p style={{ float: 'left', color: 'green', fontWeight: '700' }}>Now You can do the transaction by using money transfer 1.</p>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default DearMearchantPopUp