import { useParams } from "react-router-dom";

import { FaUser } from "react-icons/fa";
import Replay from "./Replay";
import { getByIdTicket, getTicketByIdTicket } from "../../../api/login/Login";
import { useEffect, useState } from "react";
import { ModalImgShow } from "../../../components/distributer/createUserDistributer/kycDetails/ModalImgShow";
import { Modal } from "react-bootstrap";
function createMarkup(data) {
    return { __html: data };
}
function TicketReply() {
    const { id } = useParams();
    const [ticket, setTicket] = useState(null);
    const [tickData, settickData] = useState(null)
    const [statusData, setstatusData] = useState([]);
    const fetchTicket = async () => {
        try {
            const response = await getTicketByIdTicket(id);
            const response2 = await getByIdTicket(id);
            const arr = [...response.data]
            arr.push({ ...response2.data[0], chat: response2.data[0]?.description, operator: response2.data[0]?.operator, by: { name: response2.data[0]?.name, email: response2.data[0]?.email } })
            setTicket(arr);
            setData({
                ...data, name: response2.data[0]?.name,
                email: response2.data[0]?.email,
            })
            settickData(response2.data);
        } catch (error) {
            console.error("Error fetching ticket:", error);
        }
    };
    useEffect(() => {
        fetchTicket();
    }, [id]);


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [cantain, setcantain] = useState({})

    const CLickImgShow = (url, str) => {
        setTimeout(() => {
            handleShow()
        }, 1000);
        setcantain({ url: url, str: str })
    }
    const [data, setData] = useState({
        chat: "",
        dispute_id: id,
        name: '',
        email: '',
        status: '',
        attachments: ""
    });

    const onChangeHandle = (e) => {
        const clone = { ...data }
        clone[e.target.name] = e.target.value
        setData(clone)
    }
    return (
        <>
            <div className="ContentArea">
                <div className="card">
                    <div className="card-header d-block sizBoxs">
                        <div className="namedSpan" style={{ display: "flex", justifyContent: "space-between" }}> <span>Ticket Number : {tickData && tickData[0]?.refer_code}</span>  <span>Department : {tickData && tickData[0]?.department_id}</span>  <span>Priority : {tickData && tickData[0]?.priority}</span>  <span>Service : {tickData && tickData[0]?.service_id}</span></div>
                        <div style={{ margin: "10px 0" }}> Subject : {tickData && tickData[0]?.subject}</div>
                    </div>
                    <div className="card-body">
                        <div className="form-row" style={{ alignItems: 'end' }}>
                            <div className="row">
                                <div className="col-xl-10">
                                    <Replay data={data} setData={setData} id={id} fetchTicket={fetchTicket} onChangeHandle={onChangeHandle} setstatusData={setstatusData} />
                                </div>
                                <div className="form-group col-md-4 col-xl-2">
                                    <label htmlFor="txtUserId">Status <span style={{ color: 'red' }}>*</span></label>
                                    <select className="form-select" aria-label="Default select example" name="status" value={data?.status} onChange={onChangeHandle}>
                                        <option selected=""> Select Status</option>
                                        {statusData && statusData?.map((item) => {
                                            return <option value={item._id}>{item?.name}</option>
                                        })}
                                    </select>
                                </div>
                            </div>

                            {ticket && ticket?.map((item, i) => {
                                return <div className="col-lg-12 mt-3">
                                    <div className="chat-first">
                                        <div className={`card-header card-header-card ${item?.operator == 'Retailer' && 'card-header-card-2'}`}>
                                            <div className="nameAndDetails">
                                                <div className="avtar-set">
                                                    <FaUser />
                                                </div>
                                                <div className="parent-set">
                                                    <h5 style={{ color: "white" }}>{item?.by?.name}</h5>
                                                    <h5 style={{ color: "white" }}>{item?.by?.email}</h5>
                                                </div>
                                                <div className="parent-set">
                                                    <p className="operator">{item?.operator}</p>
                                                </div>
                                            </div>
                                            <div className="dateandtime">
                                                <p><td>{new Date(item?.createdAt).getDate() + "/" + Number(new Date(item?.createdAt).getMonth() + 1) + "/" + new Date(item?.createdAt).getFullYear() + " , " + new Date(item?.createdAt).getHours() + ":" + new Date(item?.createdAt).getMinutes()}</td></p>
                                            </div>
                                        </div>
                                        <div className="msg-sec" dangerouslySetInnerHTML={createMarkup(
                                            item?.chat
                                        )}
                                        >


                                        </div>
                                        <div style={{ display: "flex", cursor: "pointer" }} >
                                            {item?.attachments?.map((item, i) => (
                                                <div key={i} onClick={() => { CLickImgShow(item) }} style={{ width: "120px", height: "120px", margin: "5px", display: "flex" }}>
                                                    <img style={{ width: "120px", height: "120px" }} src={`https://api.paypandabnk.com/api/cloudinary/${item}`} alt="attachment" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            })}

                            <Modal
                                show={show}
                                onHide={handleClose}
                                keyboard={false}
                                size='sm'
                                className='naomedClass'
                            >
                                <ModalImgShow handleClose={handleClose} cantain={cantain} />
                            </Modal>


                        </div>
                    </div>
                </div >
            </div >
        </>
    )
}
export default TicketReply