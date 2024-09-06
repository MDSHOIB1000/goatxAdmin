import Accordion from 'react-bootstrap/Accordion';
import { MdEdit } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
import JoditEditor from 'jodit-react';
import { IoMdCloseCircle } from 'react-icons/io';
import { clodinaryImage, dmtstatus, submitReplay } from '../../../api/login/Login'; // Assume submitReplay is your API for submitting the replay
import { baseUrlImage } from '../../../baseUrl';

function Replay({ id, fetchTicket, data, setData,setstatusData }) {


    const editor = useRef(null);
    const [content, setContent] = useState('');
    const [selectedFiles, setSelectedFiles] = useState([]);
    

    const getStatusData = async () => {
        try {
            const response = await dmtstatus();
            setstatusData(response?.data);
        } catch (error) {
            alert(error.message);
        }
    };

    useEffect(() => {
        getStatusData();
    }, []);

    const handleFileUpload = async (e) => {
        const files = e.target.files;
        if (files?.length == 0) {
            return
        }
        const allowedTypes = [
            'video/mp4',
            'application/msword',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            'application/vnd.ms-excel',
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            'application/x-rar-compressed',
            'application/x-zip-compressed',
            'application/zip'
        ];

        const uploadedFiles = [...selectedFiles];

        for (let file of files) {
            if (allowedTypes.includes(file.type)) {
                alert('Warning: Only image files are allowed.');
                return;
            } else {
                const formData = new FormData();
                formData.append('image', file);
                try {
                    const res = await clodinaryImage(formData);
                    uploadedFiles.push({ id: Math.random(), url: res?.data?.data?.url });
                } catch (error) {
                    console.error("Image not uploaded");
                }
            }
        }
        setSelectedFiles(uploadedFiles);
    };

    const Remove = (id) => {
        const filteredFiles = selectedFiles.filter((item) => item.id !== id);
        setSelectedFiles(filteredFiles);
    };

    const handleSubmit = async () => {
        const formData = {
            chat: content,
            dispute_id: id,
            name: data.name,
            email: data.email,
            attachments: selectedFiles.map(file => file.url)
        };

        console.log(formData);
        try {
            const response = await submitReplay(formData);
            alert('Replay submitted successfully!');
            fetchTicket()
        } catch (error) {
            alert("Error submitting replay:", error);
        }
    };

    /* const onChangeHandle = (e) => {
        const clone = { ...data }
        clone[e.target.name] = e.target.value
        setData(clone)
    } */

    return (
        <>
            <div className='col-lg-12'>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header style={{ fontWeight: '700' }}>
                            <MdEdit className='mr-2' style={{ fontWeight: '700' }} /> Reply
                        </Accordion.Header>
                        <Accordion.Body>
                            <form name="frmReport" id="frmReport">
                                <div className="row cusformsnew" style={{ alignItems: 'end' }}>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="txtUserId">Name <span style={{ color: 'red' }}>*</span></label>
                                        <input type="text" name="name" id="account_no" disabled placeholder="Enter Name" className="form-control" value={data?.name} />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="txtUserId">Email <span style={{ color: 'red' }}>*</span></label>
                                        <input type="email" name="email" id="account_no" disabled placeholder="Enter email" className="form-control" value={data?.email} />
                                    </div>
                                    {/* <div className="form-group col-md-4">
                                        <label htmlFor="txtUserId">Status <span style={{ color: 'red' }}>*</span></label>
                                        <select className="form-select" aria-label="Default select example" name="status" value={data?.status} onChange={onChangeHandle}>
                                            <option selected=""> Select Status</option>
                                            {statusData && statusData?.map((item) => {
                                                return <option value={item._id}>{item?.name}</option>
                                            })}
                                        </select>
                                    </div> */}
                                    <div className="form-group col-md-12">
                                        <label htmlFor="txtUserId">Message <span style={{ color: 'red' }}>*</span></label>
                                        <JoditEditor
                                            ref={editor}
                                            value={content}
                                            onChange={newContent => setContent(newContent)}
                                        />
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label htmlFor="txtUserId">Attach <span style={{ color: 'red' }}>*</span></label>
                                        <input type="file" name="attachments" className="form-control" multiple onChange={handleFileUpload} />
                                        <div style={{ display: "flex", flexWrap: "wrap", width: "1000px" }}>
                                            {selectedFiles.length > 0 && selectedFiles.map((item) => (
                                                <div key={item.id} style={{ width: "120px", height: "120px", margin: "5px", display: "flex" }}>
                                                    <img style={{ width: "120px", height: "120px" }} src={`${baseUrlImage}${item.url}`} alt="attachment" />
                                                    <IoMdCloseCircle onClick={() => { Remove(item.id) }} style={{ marginLeft: "-30px", fontSize: "27px", cursor: "pointer" }} />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="form-group col-md-12">
                                        <button type="button" className="btn btn-primary mr-3" style={{ margin: "20px 0" }} onClick={handleSubmit}>Submit</button>
                                    </div>
                                </div>
                            </form>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </>
    );
}

export default Replay;
