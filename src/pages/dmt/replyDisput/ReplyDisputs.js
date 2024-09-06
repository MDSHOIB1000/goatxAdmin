import { useEffect, useRef, useState } from "react";
import JoditEditor from 'jodit-react';
import { department, dmtDisputePriority, relatedService, clodinaryImage, sendTicketCreate, getNameUser } from "../../../api/login/Login";
import { ToastContainer, toast } from "react-toastify";
import { IoMdCloseCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function AddTicket() {
    const [departData, setDepartData] = useState(null);
    const [priotyData, setPriotyData] = useState(null);
    const [relateData, setRelateData] = useState(null);
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [content, setContent] = useState('');
    const editor = useRef(null);

    const [initialData, setInitialData] = useState({
        type: '',
        name: '',
        email: '',
        // phone: '',
        contact_no: '',
        subject: '',
        service_id: '',
        priority: '',
        description: '',
        attachments: []
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInitialData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const fetchDepartments = async () => {
        try {
            const res = await department({ page: 0, count: 10 });
            setDepartData(res?.data);
        } catch (error) {
            console.error(error);
        }
    };

    const fetchPriorities = async () => {
        try {
            const res = await dmtDisputePriority();
            setPriotyData(res?.data);
        } catch (error) {
            console.error(error);
        }
    };

    const fetchRelatedServices = async () => {
        try {
            const res = await relatedService();
            setRelateData(res?.data);
        } catch (error) {
            console.error(error);
        }
    };

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

    const toastSuccessMessage = () => {
        toast.success(`Your Ticket Created Successfully.`, {
            position: "top-center",
        });
    };
    const toastErrMessage = (msg) => {
        toast.error(`Ticket Not Added ${msg}.`, {
            position: "top-center",
        });
    };

    const [obj, setObj] = useState()
    const [objUser, setDataUser] = useState()
    const navigate = useNavigate()
    const submitData = async () => {
        const arr = []
        for (let i = 0; i < selectedFiles.length; i++) {
            const element = selectedFiles[i];
            arr.push(element.url)
        }
        const formData = {
            ...initialData,
            description: content,
            userid: objUser?._id,
            user_id: window.localStorage.getItem('userIdToken'),
            attachments: arr
        };
        try {
            const res = await sendTicketCreate(formData);
            if (res.statusCode == 200) {
                toastSuccessMessage();
                setTimeout(() => {
                    navigate('/disputes/welcome')
                }, 1000);

            } else {
                toastErrMessage(res.message)
            }
        } catch (error) {

        }
    };

    useEffect(() => {
        fetchDepartments();
        fetchPriorities();
        fetchRelatedServices();
    }, []);
    // selectedFiles, setSelectedFiles
    const Remove = (id) => {
        const clone = [...selectedFiles]
        const filters = clone.filter((item) => {
            return item.id !== id
        })

        setSelectedFiles(filters)

        // setFileArray(clone.filter(item => item.id !== id));
    }

    const changeHandleName = async (e) => {
        const { name, value } = e.target;
        setInitialData(prevState => ({
            ...prevState,
            [name]: value
        }));

        try {
            const res = await getNameUser(value);
            setObj(res?.data?.user);
        } catch (error) {
            console.error(error);
        }
    };

    const setDataUser2 = (val) => {
        setDataUser(val)
        setInitialData(prevState => ({
            ...prevState,
            name: val.name,
            email: val.email,
            contact_no: val.mobile,
        }));
        setObj([])
    }

    return (
        <>
            <div className="PageHeading">
                <h1>Add Ticket</h1>
            </div>
            <ToastContainer />
            <div className="ContentArea">
                <div className="card">
                    <div className="card-header"><span>Open Ticket</span></div>
                    <div className="card-body">
                        <form name="frmReport" id="frmReport">
                            <div className="row cusformsnew" style={{ alignItems: 'end' }}>
                                <div className="form-group col-md-4">
                                    <label>Name <span style={{ color: 'red' }}>*</span></label>
                                    <input type="text" name="name" placeholder="Enter Name" className="form-control" value={initialData.name} onChange={changeHandleName} />
                                    {obj?.length > 0 && <div className="nameBox">
                                        {obj?.map((item) => {
                                            return <div onClick={() => { setDataUser2(item) }}>
                                                <div>{item?.name} , {item?.mobile}</div>
                                            </div>
                                        })}
                                    </div>}
                                </div>
                                <div className="form-group col-md-4">
                                    <label>Email <span style={{ color: 'red' }}>*</span></label>
                                    <input type="email" name="email" placeholder="Enter email" className="form-control" value={initialData.email} onChange={handleChange} />
                                </div>
                                <div className="form-group col-md-4">
                                    <label>Phone <span style={{ color: 'red' }}>*</span></label>
                                    <input type="text" name="contact_no" placeholder="Enter Phone" className="form-control" value={initialData.contact_no} onChange={handleChange} />
                                </div>
                                <div className="form-group col-md-4">
                                    <label>Department <span style={{ color: 'red' }}>*</span></label>
                                    <select className="form-select" name="type" onChange={handleChange}>
                                        <option selected>Select Type</option>
                                        {departData && departData.map(item => (
                                            <option key={item._id} value={item._id}>{item.department}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-group col-md-4">
                                    <label>Related Service <span style={{ color: 'red' }}>*</span></label>
                                    <select className="form-select" name="service_id" onChange={handleChange}>
                                        <option selected>Select Type</option>
                                        {relateData && relateData.map(item => (
                                            <option key={item._id} value={item._id}>{item.service_name}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-group col-md-4">
                                    <label>Priority <span style={{ color: 'red' }}>*</span></label>
                                    <select className="form-select" name="priority" onChange={handleChange}>
                                        <option selected>Select Type</option>
                                        {priotyData && priotyData.map(item => (
                                            <option key={item._id} value={item._id}>{item.priority}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-group col-md-12">
                                    <label>Subject <span style={{ color: 'red' }}>*</span></label>
                                    <textarea className="form-control textareas" placeholder="Leave a comment here" name="subject" value={initialData.subject} onChange={handleChange}></textarea>
                                </div>

                                <div className="form-group col-md-12">
                                    <label>Message <span style={{ color: 'red' }}>*</span></label>
                                    <JoditEditor
                                        ref={editor}
                                        value={content}
                                        onChange={newContent => setContent(newContent)}
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <label>Attach <span style={{ color: 'red' }}>*</span></label>
                                    <input type="file" name="attachments" className="form-control" multiple onChange={handleFileUpload} />
                                    <div style={{ display: "flex" }}>

                                        {selectedFiles?.length > 0 && selectedFiles?.map((item) => {
                                            return <div style={{ width: "150px", height: "150px", margin: "5px", display: "flex" }}>
                                                <img style={{ width: "150px", height: "150px" }} src={`https://api.paypandabnk.com/api/cloudinary/${item.url}`} />
                                                <IoMdCloseCircle onClick={() => { Remove(item.id) }} style={{ marginLeft: "-30px", fontSize: "27px", cursor: "pointer" }} />

                                            </div>
                                        })}

                                    </div>
                                </div>
                                <div className="form-group col-md-12" style={{ textAlign: "end" }}>
                                    <button type="button" style={{ margin: "20px 0" }} className="btn btn-primary mr-3" onClick={submitData}>Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddTicket;
