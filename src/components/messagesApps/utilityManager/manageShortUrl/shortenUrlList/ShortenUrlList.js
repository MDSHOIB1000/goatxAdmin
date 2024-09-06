import React from 'react'

function ShortenUrlList({templates}) {
  return (
    <>
      <div className="card">
                <table className='table'>
                    <thead>
                        <tr>

                            <th> Short Url</th>
                            <th>Url Name</th>
                            <th>Triggered Url	</th>

                            <th>Status</th>
                            <th>Created At	</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {templates.map((template, index) => {

                            return (
                                <tr key={template._id}>
                                    <td>{template.userName}</td>
                                    <td>{template.headerType}</td>
                                    <td>{template.headerType}</td>
                                    <td>{template.status}</td>
                                    <td>{template.createdAt}</td>
                                    <td className="text-center">
                                        <button type="button" class="btn btn-outline-primary btn-sm"><i class="fas fa-cog"></i></button>
                                        <button type="button" class="btn btn-outline-primary btn-sm"><i class="fas fa-pencil-alt"></i></button>
                                        <button type="button" class="btn btn-outline-primary btn-sm"><i class="fas fa-trash"></i></button>
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

export default ShortenUrlList
