import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Pagination, Popconfirm, message, Switch } from "antd"; // Added Switch component
import Breadcrumbs from "../../common/breadcrumb/Breadcrumbs";
import Loader from "../../common/loader/Loader"; 
import { deleteFlowCategory, getFlowCategoryList } from "../../api/login/Login";

const breadCrumbsTitle = {
    id: "1",
    title_1: "Master",
    title_2: "Flow Builder",
    path_2: "/flow-builder"
};

function FlowBuilder() {
    const [data, setData] = useState([]);
    const [count, setCount] = useState(10);
    const [page, setPage] = useState(0);
    const [totalCount, setTotalCount] = useState();
    const [loading, setLoading] = useState(false);

    const getFlowCategoryListData = async (num) => {
        setLoading(true);
        try {
            const response = await getFlowCategoryList(num, count);
            setData(response.data);
            setTotalCount(response.totalCount);
        } catch (error) {
            alert(error.message);
        }
        setLoading(false);
    };

    useEffect(() => {
        getFlowCategoryListData(0);
    }, []);

    const deleteFlowCategoryItem = async (id) => {
        setLoading(true);
        try {
            await deleteFlowCategory(id);
            getFlowCategoryListData(0);
            message.success('Delete Successful!');
        } catch (error) {
            alert(error.message);
        }
        setLoading(false);
    };

    const confirm = (id) => {
        deleteFlowCategoryItem(id);
    };

    const cancel = () => {
        message.error('Cancel Successful!');
    };

    const onChangeVal = (page) => {
        setPage(page);
        getFlowCategoryListData(page - 1);
    };

    const toggleActivate = (checked, id) => {
        // Add your activate/deactivate logic here
        console.log(`Workflow ${id} is now ${checked ? 'Activated' : 'Deactivated'}`);
    };

    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div className="row m-4">
                {loading && <Loader />}
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption">
                                    <h4 className="heading mb-0">Flow Builder Master</h4>
                                    <div>
                                        <Link className="btn btn-primary btn-sm" to="/add-flow-builder" role="button" aria-controls="offcanvasExample">+ Create Work Flow</Link>
                                    </div>
                                </div>
                                <div id="flow-category-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                                    <div className="dt-buttons">
                                        <button className="dt-button buttons-excel buttons-html5 btn btn-sm border-0" tabIndex={0} aria-controls="flow-category-tblwrapper" type="button">
                                            <span><i className="fa-solid fa-file-excel" /> Export Report</span>
                                        </button>
                                    </div>
                                    <table id="flow-category-tblwrapper" className="table dataTable no-footer" role="grid" aria-describedby="flow-category-tblwrapper_info">
                                        <thead>
                                            <tr role="row">
                                                <th style={{ width: '50px' }}>S.NO</th>
                                                <th style={{ width: '300px' }}>Workflow Name</th>
                                                <th style={{ width: '300px' }}>Workflow Id</th>
                                                <th style={{ width: '300px' }}>Created At</th>
                                                <th style={{ width: '300px' }}>Updated At</th>
                                                <th style={{ width: '200px' }}>Status</th>
                                                <th style={{ width: '150px' }}>Activate</th>
                                                <th style={{ width: '100px' }}>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data && data.map((item, i) => (
                                                <tr role="row" className="odd" key={item._id}>
                                                    <td>{i + 1}</td>
                                                    <td>{item?.flowName}</td>
                                                    <td>{item?._id}</td>
                                                    <td>{new Date(item?.createdAt).toLocaleString()}</td>
                                                    <td>{new Date(item?.updatedAt).toLocaleString()}</td>
                                                    <td>{item?.isActive ? 'Active' : 'Inactive'}</td>
                                                    <td>
                                                        <Switch
                                                            checked={item?.isActive}
                                                            onChange={(checked) => toggleActivate(checked, item._id)}
                                                        />
                                                    </td>
                                                    <td>
                                                        <div className="d-flex">
                                                            <Link to={`/add-flow-builder/${item?._id}`} className="btn btn-primary shadow btn-xs sharp me-1">
                                                                <FaRegEdit />
                                                            </Link>
                                                            <Popconfirm
                                                                title="Delete Flow Category"
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
                                    <div className="dataTables_info" id="flow-category-tblwrapper_info" role="status" aria-live="polite">
                                        Total {totalCount} entries
                                    </div>
                                    <div className="dataTables_paginate paging_simple_numbers" id="flow-category-tblwrapper_paginate">
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

export default FlowBuilder;
