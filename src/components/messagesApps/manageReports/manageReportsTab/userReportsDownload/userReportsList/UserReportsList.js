import { Empty } from 'antd'
import React from 'react'

function UserReportsList({ templates }) {
    return (
        <div className="card">
            <table className='table'>
                <thead>
                    <tr>

                        <th> Filtered Data	</th>
                        <th>Type</th>
                        <th>Number Count		</th>

                        <th>Date		</th>
                        <th className="text-center">Status	</th>
                        <th className="text-center">Actions 	</th>
                    </tr>
                </thead>
                <tbody>
                    {templates && templates.length > 0 ? (
                        templates.map((template, index) => (
                            <tr key={template._id}>
                                <td>{template.userName}</td>
                                <td>{template.headerType}</td>
                                <td>{"----"}</td>
                                <td>{template.createdAt}</td>
                                <td>{"---pending---"}</td>
                                <td className="text-center">
                                    <button type="button" className="btn btn-outline-primary btn-sm"><i class="fas fa-download"></i></button>
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
    )
}

export default UserReportsList
