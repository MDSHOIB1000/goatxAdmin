import { Empty } from 'antd'
import React from 'react'

function WaMessageList({ templates }) {
    return (
        // <div className='container-fluid'>
        <div className='card'>
            <table className='table' striped bordered hover responsive className="align-middle">
                <thead>
                    <tr>

                        <th> Primary Info</th>
                        <th>Recepient No / WA No</th>
                        <th>Conversation Id/ Msg Id</th>

                        <th>Message</th>
                        <th className="text-center">Status</th>
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

export default WaMessageList
