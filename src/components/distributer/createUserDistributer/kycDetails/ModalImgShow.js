
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { baseUrlImage } from '../../../../baseUrl';
export const ModalImgShow = ({ handleClose, cantain }) => {
   
    return <>
        <Modal.Header closeButton>
            <Modal.Title>{cantain.str}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <img src={`${baseUrlImage}${cantain.url}`} style={{width:"100%"}}/>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
        </Modal.Footer>

    </>
}