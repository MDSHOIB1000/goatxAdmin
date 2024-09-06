import { useState } from "react";
import CostSheetAdd from "./CostSheetAdd";
import CostSheetTable from "./CostSheetTable";

function CostSheetCompo() {

    const [modalShow, setModalShow] = useState(false);
    return <div className="container mt-4">
        <div className="row">
            <div className="col-12">
                <div className="card p-3">
                    <div className="row">
                        <div className="col-12 mb-2 d-flex justify-content-between">
                            <span className="pull-left" style={{alignItems:"center" , display:"flex"}} onClick={() => setModalShow(true)}>

                                Create Cost Sheet  <i className="fa fa-plus" />

                            </span>
                            <CostSheetAdd show={modalShow}
                                onHide={() => setModalShow(false)} />
                            <nav aria-label="Page navigation example">
                                <ul className="pagination">
                                    <li className="page-item">
                                        <a className="page-link" href="#">
                                            Prev
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">
                                            1
                                        </a>
                                    </li>

                                    <li className="page-item">
                                        <a className="page-link" href="#">
                                            Next
                                        </a>
                                    </li>
                                </ul>
                            </nav>


                        </div>
                        <div className="col-12" style={{ overflowX: "auto" }}>
                            <CostSheetTable />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default CostSheetCompo;