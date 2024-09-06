import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Pagination, Popconfirm, message } from "antd";
import Breadcrumbs from "../../common/breadcrumb/Breadcrumbs";
import { deleteBlogCategory, getBlogCategoryList } from "../../api/login/Login"; 
import Loadar from "../../common/loader/Loader";
import { baseUrlImage } from "../../baseUrl";

const breadCrumbsTitle = {
    id: "1",
    title_1: "Master",
    title_2: "Blog Category Master",
    path_2: "/blog-category-master"
};

function BlogCategoryList() {

    const [data, setData] = useState();
    const [count, setCount] = useState(10);
    const [page, setPage] = useState(0);
    const [totalCount, setTotalCount] = useState();
    const [loading, setLoading] = useState(false);

    const getListBlogCategory = async (num) => {
        setLoading(true);
        try {
            const data = await getBlogCategoryList(num, count);
            setData(data);
        } catch (error) {
            alert(error.message);
        }
        setLoading(false);
    };

    useEffect(() => {
        getListBlogCategory(0);
    }, []);

    const deleteBlogCategoryItem = async (id) => {
        setLoading(true);
        try {
            await deleteBlogCategory(id);
            getListBlogCategory(0);
        } catch (error) {
            alert(error.message);
        }
        setLoading(false);
    };

    const confirm = (id) => {
        deleteBlogCategoryItem(id);
        message.success('Delete Successful!');
    };

    const cancel = (e) => {
        message.error('Cancel Successful!');
    };

    const onChangeVal = (e) => {
        setTimeout(() => {
            getListBlogCategory(e - 1);
        }, 1000);
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
                                    <h4 className="heading mb-0">Blog Category Master</h4>
                                    <div>
                                        <Link className="btn btn-primary btn-sm" to="/add-blog-category" role="button" aria-controls="offcanvasExample">+ Blog Category</Link>
                                    </div>
                                </div>
                                <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                                    <div className="dt-buttons">
                                        <button className="dt-button buttons-excel buttons-html5 btn btn-sm border-0" tabIndex={0} aria-controls="empoloyees-tblwrapper" type="button">
                                            <span><i className="fa-solid fa-file-excel" /> Export Report</span>
                                        </button>
                                    </div>
                                    <table id="empoloyees-tblwrapper" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                        <thead>
                                            <tr role="row">
                                                <th style={{ width: '50px' }}>S.NO</th>
                                                <th style={{ width: '150px' }}>Service Name</th>
                                                <th style={{ width: '150px' }}>Slug</th>
                                                <th style={{ width: '150px' }}>Meta Title</th>
                                                <th style={{ width: '200px' }}>Meta Description</th>
                                                <th style={{ width: '150px' }}>Meta Image</th>
                                                <th style={{ width: '100px' }}>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data && data?.data?.map((item, i) => (
                                                <tr role="row" className="odd" key={item._id}>
                                                    <td>{i + 1}</td>
                                                    <td>{item?.service_name}</td>
                                                    <td>{item?.slug}</td>
                                                    <td>{item?.meta_title}</td>
                                                    <td>{item?.meta_description}</td>
                                                    <td>
                                                        <img style={{width:"100px"}} src={`${baseUrlImage}${item?.meta_image}`} alt="Meta" />
                                                    </td>
                                                    <td>
                                                        <div className="d-flex">
                                                            <Link to={`/edit-blog-category/${item?._id}`} className="btn btn-primary shadow btn-xs sharp me-1">
                                                                <i className="fa fa-pencil" />
                                                            </Link>
                                                            <Popconfirm
                                                                title="Delete Blog Category"
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
                                    <div className="dataTables_info" id="empoloyees-tblwrapper_info" role="status" aria-live="polite">
                                        Total {data?.totalCount} entries
                                    </div>
                                    <div className="dataTables_paginate paging_simple_numbers" id="empoloyees-tblwrapper_paginate">
                                        <Pagination
                                            defaultCurrent={1}
                                            onChange={onChangeVal}
                                            total={data?.totalCount}
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

export default BlogCategoryList;
