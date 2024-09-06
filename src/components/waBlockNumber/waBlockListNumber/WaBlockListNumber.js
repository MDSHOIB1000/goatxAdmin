import React, { useState } from 'react'
import { Button, Form, Table } from 'react-bootstrap';

function WaBlockListNumber({ templates }) {
    const [selectAll, setSelectAll] = useState(false);
    const [selectedUsers, setSelectedUsers] = useState([]);
    const handleCheckboxChange = (event, user) => {
        if (event.target.checked) {
            setSelectedUsers([...selectedUsers, user]);
        } else {
            setSelectedUsers(selectedUsers.filter(selectedUser => selectedUser._id !== user._id));
        }
    };

    const handleSelectAll = (event) => {
        const isChecked = event.target.checked;
        setSelectAll(isChecked);
        if (isChecked) {
            setSelectedUsers(templates);
        } else {
            setSelectedUsers([]);
        }
    };
    return (
        <div className='card ' style={{height:'min-content'}}>
            <Table striped bordered hover responsive className='align-middle'>
                <thead>
                    <tr>
                        <th>
                            <p className="m-0">
                                <small style={{ fontSize: "0.8em" }}>Select All</small>
                            </p>
                            <Form.Check
                                type="checkbox"
                                id="selectAll"
                                checked={selectAll}
                                onChange={handleSelectAll}
                            />
                        </th>
                        <th>Mobile Number</th>
                        <th>Created At</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {templates.map((template) => {
                        const isChecked = selectedUsers.some(user => user?._id === template?._id);
                        return (
                            <tr key={template._id}>
                                <td>
                                    <Form.Check
                                        type="checkbox"
                                        checked={isChecked}
                                        onChange={(e) => handleCheckboxChange(e, template)}
                                    />
                                </td>
                                <td>{template.phoneNumber}</td>
                                <td>{template.createdAt}</td>
                                <td className='text-start'>
                                    <Button variant='outline-primary'>
                                        <i className="fa-solid fa-trash"></i>
                                    </Button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </div>
    )
}

export default WaBlockListNumber
