import React from 'react'
import { Link } from 'react-router-dom';

function MessageSearchReports({ templates, }) {
    return (
        <>
            <div className="card">
                <div className="mb-3 text-end">
                    <Link to="/create-camping-mess" className="btn btn-secondary" >
                        <span className="me-2 fs-4"><i class="fas fa-share"></i></span>Create Campaing
                    </Link>
                </div>
                <table className='table'>
                    <thead>
                        <tr>

                            <th> User/Parents</th>
                            <th>Primary Info</th>
                            <th>Headers/Gateway	</th>

                            <th>Type</th>
                            <th>Total Campaign Cost	</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {templates.map((template, index) => {

                            return (
                                <tr key={template._id}>
                                    <td>{template.userName}</td>
                                    <td><small>{template.primaryInfo}</small><br /><small>{template.createdAt}</small></td>
                                    <td>{template.Gateway}</td>
                                    <td>{template.type}</td>
                                    <td>{template.totalCampaignCost}</td>
                                    <td className="text-center">
                                        <button type="button" class="btn btn-outline-primary btn-sm"><i class="fas fa-eye"></i></button>
                                        <button type="button" class="btn btn-outline-primary btn-sm"><i class="far fa-arrow-alt-circle-down"></i></button>
                                        <button type="button" class="btn btn-outline-primary btn-sm"><i class="fas fa-circle-notch"></i></button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default MessageSearchReports
