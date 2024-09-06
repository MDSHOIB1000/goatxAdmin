import { Empty } from 'antd'
import React from 'react'

function WaClickerReportsList({ templates }) {
    return (
        // <div className='container-fluid'>
        <div className='card'>
            <table className='table' striped bordered hover responsive className="align-middle">
                <thead>
                    <tr>

                        <th> From info</th>
                        <th>Number</th>
                        <th>Url</th>

                        <th>Device</th>
                        <th className="text-center">Clicks
                        </th>
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
                            <td colSpan={5} className="text-center">
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

export default WaClickerReportsList
