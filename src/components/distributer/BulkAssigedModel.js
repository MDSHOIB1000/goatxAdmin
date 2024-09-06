import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { getServiceCategory, getStaffpermisionall, leadenquiryStatusMasterListAll, leadSubStatusMasterListAll, reailerDistIdAgainstAll } from '../../api/login/Login';

function BulkAssignedModel(props) {
    const [data, setData] = useState(props?.selectedUsers);
    const [stream, setStream] = useState([]);
    const [staff, setStaff] = useState([]);
    const [courses, setCourses] = useState([]);
    const [leadTypes, setLeadTypes] = useState([]);
    const [leadStatuses, setLeadStatuses] = useState([]);
    const [leadSubStatuses, setLeadSubStatuses] = useState([]);

    useEffect(() => {
        setData(props?.selectedUsers);
        getAllCrud();
    }, [props]);

    const getAllCrud = async () => {
        try {
            const res = await getServiceCategory();
            const res1 = await reailerDistIdAgainstAll();
            const res2 = await getStaffpermisionall({ page: 0, count: 100 });
            const res3 = await leadSubStatusMasterListAll();
            const res4 = await leadenquiryStatusMasterListAll();
            setStream(res?.data);
            setCourses(res1.data);
            setStaff(res2.data);
            setLeadSubStatuses(res3.data);
            setLeadStatuses(res4.data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleFormChange = (name, value) => {
        setData(prevData =>
            prevData.map((item) => ({
                ...item,
                [name]: value,
            }))
        );
    };

    const handleInputChange = (index, field, value) => {
        setData(prevData =>
            prevData.map((row, i) =>
                i === index ? { ...row, [field]: value } : row
            )
        );
    };


    return (
        <Modal
            {...props}
            size="xl"
            fullscreen={true}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Mass Lead Editing
                </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ overflow: "auto" }}>
                <Container fluid>

                    <div className="container mt-5">
                        <form className='row'>
                            <div className="mb-3 col-3">
                                <label htmlFor="leadAssign" className="form-label">Lead Assign</label>
                                <select
                                    className="form-select"
                                    id="leadAssign"
                                    name="leadAssign"
                                    onChange={(e) => handleFormChange(e.target.name, e.target.value)}
                                >
                                    <option value="" >Select Lead Assign</option>
                                    {staff?.map((staf) => (
                                        <option key={staf._id} value={staf._id}>{staf.name}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="mb-3 col-3">
                                <label htmlFor="leadType" className="form-label">Lead Type</label>
                                <select
                                    className="form-select"
                                    id="leadType"
                                    name="leadType"
                                    onChange={(e) => handleFormChange(e.target.name, e.target.value)}
                                >
                                    <option value="" >Select Lead Type</option>
                                    <option value="type1">Type 1</option>
                                    <option value="type2">Type 2</option>
                                    <option value="type3">Type 3</option>
                                </select>
                            </div>

                            <div className="mb-3 col-3">
                                <label htmlFor="leadStatus" className="form-label">Lead Status</label>
                                <select
                                    className="form-select"
                                    id="leadStatus"
                                    name="leadStatus"
                                    onChange={(e) => handleFormChange(e.target.name, e.target.value)}
                                >
                                    <option value="" >Select Lead Status</option>
                                    {leadStatuses?.map((subst) => {
                                        return <option key={subst._id} value={subst._id}>{subst.name}</option>
                                    })}

                                </select>
                            </div>

                            <div className="mb-3 col-3">
                                <label htmlFor="leadSubStatus" className="form-label">Lead Sub Status</label>
                                <select
                                    className="form-select"
                                    id="leadSubStatus"
                                    name="leadSubStatus"
                                    onChange={(e) => handleFormChange(e.target.name, e.target.value)}
                                >
                                    <option value="" >Select Lead Sub Status</option>
                                    {leadSubStatuses?.map((subst) => {
                                        return <option key={subst._id} value={subst._id}>{subst.name}</option>
                                    })}

                                </select>
                            </div>

                            <div className="mb-3 col-3">
                                <label htmlFor="streams" className="form-label">Streams</label>
                                <select
                                    className="form-select"
                                    id="streams"
                                    name="streams"
                                    onChange={(e) => handleFormChange(e.target.name, e.target.value)}
                                >
                                    <option value="" >Select Stream</option>
                                    {stream?.map((stream) => (
                                        <option key={stream._id} value={stream._id}>{stream.name}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="mb-3 col-3">
                                <label htmlFor="courses" className="form-label">Courses</label>
                                <select
                                    className="form-select"
                                    id="courses"
                                    name="courses"
                                    onChange={(e) => handleFormChange(e.target.name, e.target.value)}
                                >
                                    <option value="" >Select Course</option>
                                    {courses?.map((course) => (
                                        <option key={course._id} value={course._id}>{course.service_name}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="mb-3 col-3">
                                <label htmlFor="isApproved" className="form-label">KYC Status</label>
                                <select
                                    className="form-select"
                                    id="isApproved"
                                    name="isApproved"
                                    onChange={(e) => handleFormChange(e.target.name, e.target.value)}
                                >
                                    <option value="" >Select KYC Status</option>
                                    <option value={true}>Approved</option>
                                    <option value={false}>Not Approved</option>
                                </select>
                            </div>
                        </form>
                    </div>
                    <Table responsive bordered>
                        <thead className="table" style={{ width: "1500px" }}>
                            <tr>
                                <th>Sr. No.</th>
                                <th>Member Type</th>
                                <th>Name</th>
                                <th>Streams</th>
                                <th>Courses</th>
                                <th>Lead Assign</th>
                                <th>Lead Type</th>
                                <th>Lead Status</th>
                                <th>Lead Sub Status</th>
                                <th>Mobile</th>
                                <th>Email</th>
                                <th>Main Balance</th>
                                <th>KYC Status</th>
                            </tr>
                        </thead>
                        <tbody className='tbodyCustom'>
                            {data?.map((row, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <Form.Control
                                            type="text"
                                            value={row.member_type}
                                            onChange={(e) => handleInputChange(index, 'member_type', e.target.value)}
                                        />
                                    </td>
                                    <td>
                                        <Form.Control
                                            type="text"
                                            value={row.name}
                                            onChange={(e) => handleInputChange(index, 'name', e.target.value)}
                                        />
                                    </td>
                                    <td>
                                        <Form.Select
                                            value={row.streams}
                                            style={{ width: "200px" }}
                                            onChange={(e) => handleInputChange(index, 'streams', e.target.value)}
                                        >
                                            <option value="">Select Stream</option>
                                            {stream.map((item) => (
                                                <option key={item._id} value={item._id}>
                                                    {item.name}
                                                </option>
                                            ))}
                                        </Form.Select>
                                    </td>
                                    <td>
                                        <Form.Select
                                            value={row.courses}
                                            style={{ width: "200px" }}
                                            onChange={(e) => handleInputChange(index, 'courses', e.target.value)}
                                        >
                                            <option value="">Select Course</option>
                                            {courses.map((course) => (
                                                <option key={course._id} value={course._id}>
                                                    {course.service_name}
                                                </option>
                                            ))}
                                        </Form.Select>
                                    </td>
                                    <td>
                                        <Form.Select
                                            style={{ width: "200px" }}
                                            value={row.leadAssign}
                                            onChange={(e) => handleInputChange(index, 'leadAssign', e.target.value)}
                                        >
                                            <option value="">Select Assign</option>
                                            {staff?.map((staf) => (
                                                <option key={staf._id} value={staf._id}>{staf.name}</option>
                                            ))}
                                        </Form.Select>
                                    </td>
                                    <td>
                                        <Form.Select
                                            value={row.leadType}
                                            style={{ width: "200px" }}
                                            onChange={(e) => handleInputChange(index, 'leadType', e.target.value)}
                                        >
                                            <option value="">Select Lead Type</option>
                                            <option value="type1">Type 1</option>
                                            <option value="type2">Type 2</option>
                                            <option value="type3">Type 3</option>
                                        </Form.Select>
                                    </td>
                                    <td>
                                        <Form.Select
                                            value={row.leadStatus}
                                            style={{ width: "200px" }}
                                            onChange={(e) => handleInputChange(index, 'leadStatus', e.target.value)}
                                        >
                                            <option value="">Select Lead Status</option>
                                            {leadStatuses?.map((subst) => {
                                                return <option key={subst._id} value={subst._id}>{subst.name}</option>
                                            })}
                                        </Form.Select>
                                    </td>
                                    <td>
                                        <Form.Select
                                            value={row.leadSubStatus}
                                            style={{ width: "200px" }}
                                            onChange={(e) => handleInputChange(index, 'leadSubStatus', e.target.value)}
                                        >
                                            <option value="">Select Lead Sub Status</option>
                                            {leadSubStatuses?.map((subst) => {
                                                return <option key={subst._id} value={subst._id}>{subst.name}</option>
                                            })}
                                        </Form.Select>
                                    </td>
                                    <td>
                                        <Form.Control
                                            type="text"
                                            value={row.mobile}
                                            onChange={(e) => handleInputChange(index, 'mobile', e.target.value)}
                                        />
                                    </td>
                                    <td>
                                        <Form.Control
                                            type="text"
                                            value={row.email}
                                            onChange={(e) => handleInputChange(index, 'email', e.target.value)}
                                        />
                                    </td>
                                    <td>
                                        <Form.Control
                                            type="text"
                                            value={row.main_balance}
                                            onChange={(e) => handleInputChange(index, 'main_balance', e.target.value)}
                                        />
                                    </td>
                                    <td>
                                        <Form.Select
                                            value={row.isApproved}
                                            onChange={(e) => handleInputChange(index, 'isApproved', e.target.value)}
                                        >
                                            <option value={true}>Approved</option>
                                            <option value={false}>Not Approved</option>
                                        </Form.Select>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default BulkAssignedModel;
