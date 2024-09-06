import React, { useState } from 'react'
import AddPersonaliseUrlModal from './addPersonaliseUrl/AddPersonaliseUrlModal';

function PersonalizeUrl({ templates }) {
    const [show, setShow] = useState(false);
    return (
        <>

            <div className="card">
                <div className="text-end"><button className=" btn-sm mb-4 mx-3 btn  btn-success"onClick={()=>setShow(!show)} > + ADD PERSONALISE URL</button></div>
                <table className='table'>
                    <thead>
                        <tr>

                            <th> Name</th>
                            <th>Url</th>
                            <th>Created At</th>

                            <th>Expired At</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {templates.map((template, index) => {

                            return (
                                <tr key={template._id}>
                                    <td>{template.userName}</td>
                                    <td>{template.headerType}</td>
                                    <td>{template.createdAt}</td>
                                    <td>{template.status}</td>
                                    <td className="text-center">
                                        <button type="button" class="btn btn-outline-primary btn-sm"><i class="fas fa-pencil-alt"></i></button>
                                        <button type="button" class="btn btn-outline-primary btn-sm"><i class="fas fa-trash"></i></button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            {['end'].map((placement, idx) => (
                <AddPersonaliseUrlModal key={idx} placement={placement} name={placement} show={show} setShow={setShow} />
              ))}
        </>
    )
}

export default PersonalizeUrl
