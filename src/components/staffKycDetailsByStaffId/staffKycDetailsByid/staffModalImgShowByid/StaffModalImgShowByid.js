import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { baseUrVideos, baseUrlImage } from '../../../../baseUrl';

const StaffModalImgShowByid = ({ handleClose, cantain }) => {
    const isVideo = (url) => {
        return url && (url.toLowerCase().endsWith('.mp4') || url.toLowerCase().endsWith('.m4v') || url.toLowerCase().endsWith('.mov') || url.toLowerCase().endsWith('.avi') || url.toLowerCase().endsWith('.wmv') || url.toLowerCase().endsWith('.flv'));
    };

    return (
        <>
            <Modal.Header closeButton>
                <Modal.Title>{cantain.str}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {cantain?.url ? (
                    isVideo(cantain.url) ? (
                        <video controls style={{ width: '100%' }} autoPlay poster={`${baseUrlImage}${cantain.url.replace('.mp4', '.jpg')}`}>
                            <source src={`${baseUrVideos}${cantain.url}`} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    ) : (
                        <img src={`${baseUrlImage}${cantain.url}`} style={{ width: "100%" }} alt="Document" />
                    )
                ) : (
                    "Document Not Uploaded"
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </>
    );
};

export default StaffModalImgShowByid;
