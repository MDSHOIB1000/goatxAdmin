import { Empty } from 'antd'
import React from 'react'

function WaCampaingReportsList({templates}) {
    return (
        // <div className='container-fluid'>
            <div className='card'>
                <table className='table' striped bordered hover responsive className="align-middle">
                    <thead>
                        <tr>

                            <th> User/Parent</th>
                            <th>Primary Info</th>
                            <th>Category/Template	</th>

                            <th>Source/Type	</th>
                            <th className="text-center">Campaign Cost</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {templates && templates.length > 0 ? (
                            templates.map((template, index) => (
                                <tr key={template._id}>
                                    <td>{template.userName}</td>
                                    <td>{template.headerType}</td>
                                    <td>{template.createdAt}</td>
                                    <td>{template.createdAt}</td>
                                    <td className="text-center">
                                        <button type="button" className="btn btn-outline-primary btn-sm"><i className="fas fa-cog"></i></button>
                                        <button type="button" className="btn btn-outline-primary btn-sm"><i className="fas fa-pencil-alt"></i></button>
                                        <button type="button" className="btn btn-outline-primary btn-sm"><i className="fas fa-trash"></i></button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={6} className="text-center">
                                    <Empty />
                                </td>
                            </tr>
                        )}

                    </tbody>
                </table>
            </div>
        // </div>
    )
}

export default WaCampaingReportsList
