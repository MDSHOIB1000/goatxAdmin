import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Pagination, Popconfirm, message } from "antd";
import Breadcrumbs from "../../common/breadcrumb/Breadcrumbs";
import Loader from "../../common/loader/Loader"; 
import { deleteTemplateType, getTemplateTypeList } from "../../api/login/Login";

const breadCrumbsTitle = {
    id: "1",
    title_1: "Master",
    title_2: "Template Type",
    path_2: "/template-type"
};

function TemplateTypeList() {

    const [data, setData] = useState([]);
    const [count, setCount] = useState(10);
    const [page, setPage] = useState(0);
    const [totalCount, setTotalCount] = useState();
    const [loading, setLoading] = useState(false);

    const getTemplateList = async (num) => {
        setLoading(true);
        try {
            const response = await getTemplateTypeList(num, count);
            setData(response.data);
            setTotalCount(response.totalCount);
        } catch (error) {
            alert(error.message);
        }
        setLoading(false);
    };

    useEffect(() => {
        getTemplateList(0);
    }, []);

    const deleteTemplateItem = async (id) => {
        setLoading(true);
        try {
            await deleteTemplateType(id);
            getTemplateList(0);
            message.success('Delete Successful!');
        } catch (error) {
            alert(error.message);
        }
        setLoading(false);
    };

    const confirm = (id) => {
        deleteTemplateItem(id);
    };

    const cancel = () => {
        message.error('Cancel Successful!');
    };

    const onChangeVal = (page) => {
        setPage(page);
        getTemplateList(page - 1);
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
                                    <h4 className="heading mb-0">Template Type Master</h4>
                                    <div>
                                        <Link className="btn btn-primary btn-sm" to="/add-template-type" role="button" aria-controls="offcanvasExample">+ Add Template Type</Link>
                                    </div>
                                </div>
                                <div id="template-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                                    <div className="dt-buttons">
                                        <button className="dt-button buttons-excel buttons-html5 btn btn-sm border-0" tabIndex={0} aria-controls="template-tblwrapper" type="button">
                                            <span><i className="fa-solid fa-file-excel" /> Export Report</span>
                                        </button>
                                    </div>
                                    <table id="template-tblwrapper" className="table dataTable no-footer" role="grid" aria-describedby="template-tblwrapper_info">
                                        <thead>
                                            <tr role="row">
                                                <th style={{ width: '50px' }}>S.NO</th>
                                                <th style={{ width: '300px' }}>Template Name</th>
                                                <th style={{ width: '500px' }}>Status</th>
                                                <th style={{ width: '100px' }}>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data && data.map((item, i) => (
                                                <tr role="row" className="odd" key={item._id}>
                                                    <td>{i + 1}</td>
                                                    <td>{item?.template}</td>
                                                    <td>{item?.is_active}</td>
                                                    <td>
                                                        <div className="d-flex">
                                                            <Link to={`/edit-template-type/${item?._id}`} className="btn btn-primary shadow btn-xs sharp me-1">
                                                                <FaRegEdit />
                                                            </Link>
                                                            <Popconfirm
                                                                title="Delete Template Type"
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
                                    <div className="dataTables_info" id="template-tblwrapper_info" role="status" aria-live="polite">
                                        Total {totalCount} entries
                                    </div>
                                    <div className="dataTables_paginate paging_simple_numbers" id="template-tblwrapper_paginate">
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

export default TemplateTypeList;
