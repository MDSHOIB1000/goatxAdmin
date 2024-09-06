import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Pagination, Popconfirm, message } from "antd";
import Breadcrumbs from "../../common/breadcrumb/Breadcrumbs";
// import { deleteLeadType, getLeadTypeList } from "../../api/l"; 
import Loadar from "../../common/loader/Loader";
import { deleteLeadType, getLeadTypeList }  from "../../api/login/Login";

const breadCrumbsTitle = {
    id: "1",
    title_1: "Master",
    title_2: "Lead Type Master",
    path_2: "/lead-type-master"
};

function LeadTypeList() {

    const [data, setData] = useState([]);
    const [count, setCount] = useState(10);
    const [page, setPage] = useState(0);
    const [totalCount, setTotalCount] = useState();
    const [loading, setLoading] = useState(false);

    const getListLeadType = async (num) => {
        setLoading(true);
        try {
            const response = await getLeadTypeList(num, count);
            setData(response.data);
            setTotalCount(response.totalCount);
        } catch (error) {
            alert(error.message);
        }
        setLoading(false);
    };

    useEffect(() => {
        getListLeadType(0);
    }, []);

    const deleteLeadTypeItem = async (id) => {
        setLoading(true);
        try {
            await deleteLeadType(id);
            getListLeadType(0);
            message.success('Delete Successful!');
        } catch (error) {
            alert(error.message);
        }
        setLoading(false);
    };

    const confirm = (id) => {
        deleteLeadTypeItem(id);
    };

    const cancel = () => {
        message.error('Cancel Successful!');
    };

    const onChangeVal = (page) => {
        setPage(page);
        getListLeadType(page - 1);
    };

    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div className="row m-4">
                {loading && <Loadar />}
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption">
                                    <h4 className="heading mb-0">Lead Type Master</h4>
                                    <div>
                                        <Link className="btn btn-primary btn-sm" to="/add-lead_Type" role="button" aria-controls="offcanvasExample">+ Add Lead Type</Link>
                                    </div>
                                </div>
                                <div id="lead-type-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                                    <div className="dt-buttons">
                                        <button className="dt-button buttons-excel buttons-html5 btn btn-sm border-0" tabIndex={0} aria-controls="lead-type-tblwrapper" type="button">
                                            <span><i className="fa-solid fa-file-excel" /> Export Report</span>
                                        </button>
                                    </div>
                                    <table id="lead-type-tblwrapper" className="table dataTable no-footer" role="grid" aria-describedby="lead-type-tblwrapper_info">
                                        <thead>
                                            <tr role="row">
                                                <th style={{ width: '50px' }}>S.NO</th>
                                                <th style={{ width: '300px' }}>Lead Type</th>
                                                <th style={{ width: '100px' }}>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data && data.map((item, i) => (
                                                <tr role="row" className="odd" key={item._id}>
                                                    <td>{i + 1}</td>
                                                    <td>{item?.leadType}</td>
                                                    <td>
                                                        <div className="d-flex">
                                                            <Link to={`/edit-lead_Type/${item?._id}`} className="btn btn-primary shadow btn-xs sharp me-1">
                                                                <FaRegEdit />
                                                            </Link>
                                                            <Popconfirm
                                                                title="Delete Lead Type"
                                                                description="Are you sure to delete?"
                                                                onConfirm={() => confirm(item?._id)}
                                                                onCancel={cancel}
                                                                okText="Yes"
                                                                cancelText="No"
                                                            >
                                                                <Link to="#" className="btn btn-danger shadow btn-xs sharp">
                                                                    <i className="fa fa-trash" />
                                                                </Link>
                                                            </Popconfirm>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    <div className="dataTables_info" id="lead-type-tblwrapper_info" role="status" aria-live="polite">
                                        Total {totalCount} entries
                                    </div>
                                    <div className="dataTables_paginate paging_simple_numbers" id="lead-type-tblwrapper_paginate">
                                        <Pagination
                                            current={page + 1}
                                            onChange={onChangeVal}
                                            total={totalCount}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LeadTypeList;
