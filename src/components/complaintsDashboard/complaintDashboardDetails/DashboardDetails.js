import React from 'react'

function DashboardDetails({ searchListData, getDetails }) {
    return <div style={{ overflowX: "auto" }}>
        <table className="table table-3 position-relative  rounded-4">
            <thead>
                <tr>
                    <th class="table-secondary" scope="col">ID</th>
                    <th class="table-secondary" scope="col">Complaint Creation Date</th>
                    <th class="table-secondary" scope="col">Complaint Number</th>
                    <th class="table-secondary" scope="col"> Employee Name</th>
                    <th class="table-secondary" scope="col">Office No</th>
                    <th class="table-secondary" scope="col">Building</th>
                    <th class="table-secondary" scope="col">Ward/Block,</th>
                    <th class="table-secondary" scope="col">Status</th>
                    <th class="table-secondary" scope="col">Complaint Type</th>
                    <th class="table-secondary" scope="col">Complaint Nature</th>
                    <th class="table-secondary" scope="col">Assigned Employee</th>

                </tr>
            </thead>
            <tbody>
                {searchListData?.map((item, i) => {
                    console.log(item);
                    return <tr key={i} onClick={() => getDetails()}>
                        <td>{item?.id}</td>
                        <td>{item?.createdAt}</td>
                        <td>{item?._id}</td>
                        <td>
                            <span> {item?.firstname}</span>
                            <span> {item?.lastname}</span>
                        </td>
                        <td>{item?.officeRoom_id?.name}</td>
                        <td>{item?.building_id?.name}</td>
                        <td>
                            <span>{item?.block_id?.name}</span>
                            {item?.block_id?.name && item?.ward_id?.name && <>
                                &nbsp;
                                /
                                &nbsp;
                            </>}
                            <span>{item?.ward_id?.name}</span>
                        </td>
                        <td /* style={{ display: "table-cell" }} */><span class="badge badge-inline badge-danger" style={{ color: "white", backgroundColor: item?.status === "Solved" ? "blue" : item?.status === 'Pending' ? 'yellow' : "red" }}>{item?.status}</span></td>
                        <td>{item?.complaintType_id?.name}</td>
                        <td>{item?.complaintNature_id?.name}</td>
                        <td>{item?.assignTo}</td>
                    </tr>
                })}

            </tbody>
        </table>
    </div>

}

export default DashboardDetails
