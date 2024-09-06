import { Button, Modal } from "react-bootstrap"
function DistributeIncomeModle(props) {
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
                        <h2 className="text-center">Download Data</h2>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="form-body">
                        <div className="row">
                            <div className="col-sm-12 mt-3">
                                <div className="form-group">
                                    <label htmlFor="name" className="mb-2">Menu Name</label>
                                    <input type="text" id="download_menu_name" className="form-control" defaultValue="Distributor Income" readOnly />
                                </div>
                            </div>
                            <div className="col-sm-12 mt-3">
                                <div className="form-group">
                                    <label htmlFor="name" className="mb-2">Your Login Password</label>
                                    <input type="password" id="download_password" className="form-control" placeholder="Login Password" />
                                </div>
                            </div>
                        </div>
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <button className="btn ripple btn-primary" type="button" id="download_btn">Verify And Download</button>

                    <Button onClick={props.onHide}>Close</Button>

                </Modal.Footer>
            </Modal>
        </>
    )
}
export default DistributeIncomeModle