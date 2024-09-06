import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

function TopEmpList({ pendingList, getDetails }) {
    const params = useParams()
    const navigate = useNavigate()
    const onRowClick = (_id) => {
        getDetails(_id)
        navigate(`/view/complaints-detail/${_id}`)
    }
    return (
        <div style={{ overflowX: "auto" }}>
            <table className="table table-3 position-relative  rounded-4">
                <thead>
                    <tr>
                        <th class="table-secondary" scope="col">complainant ID</th>
                        <th class="table-secondary" scope="col">complainant Creation Date</th>
                        {/* <th class="table-secondary" scope="col"> Number Of complainant </th> */}
                        <th class="table-secondary" scope="col"> Employee Name</th>
                        <th class="table-secondary" scope="col">Office No</th>
                        <th class="table-secondary" scope="col">Building</th>
                        <th class="table-secondary" scope="col">Ward</th>
                        <th class="table-secondary" scope="col">Block</th>
                        <th class="table-secondary" scope="col">Floor</th>
                        <th class="table-secondary" scope="col">Area</th>
                        <th class="table-secondary" scope="col">Status</th>
                        <th class="table-secondary" scope="col">complainant Type</th>
                        <th class="table-secondary" scope="col">complainant Nature</th>
                        <th class="table-secondary" scope="col">Assigned Employee</th>
                        {/* <th class="table-secondary" scope="col">Action</th> */}
                    </tr>
                </thead>
                <tbody>
                    {pendingList?.map((item, i) => {
                        return <tr key={i}>

                            <td>{item?.id}</td>
                            <td>{item?.createdAt}</td>
                            <td>{item?.firstname + " " + item?.lastname}</td>
                            <td>{item?.officeRoom_id[0]?.name}</td>
                            <td>{item?.building_id[0]?.name}</td>
                            <td>{item?.ward_id[0]?.name}</td>
                            <td>{item?.block_id[0]?.name}</td>
                            <td>{item?.floor_id[0]?.name}</td>
                            <td>{item?.area_id[0]?.name}</td>
                            <td>----</td>

                            {/* <td><span class="badge badge-inline badge-danger" style={{ color: "white", backgroundColor: item?.status === "Solved" ? "blue" : item?.status === 'Pending' ? 'green' : "red" }}>{item?.status}</span></td> */}
                            <td>{item?.complaintType_id?.name}</td>
                            <td>{item?.complaintNature_id?.name}</td>
                            <td>{item?.assignTo}</td>

                            {/* <td className='' style={{ cursor: "pointer" }} onClick={() => onRowClick(item?._id)}>
                                <span>view details</span>
                            </td> */}
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default TopEmpList