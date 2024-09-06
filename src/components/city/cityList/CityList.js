import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loadar from "../../../common/loader/Loader";
import { Pagination, Popconfirm, message } from "antd";
import { cityDelete, cityListbyPagination } from "../../../api/login/Login";

function CityList() {
    const [curencyData, setCurrencyData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState(10);
    const [page, setPage] = useState(1);
    const [totalCount, setTotalCount] = useState(0);

    const getPaginationApi = async (page) => {
        setLoading(true);
        try {
            const res = await cityListbyPagination(page, count);
            setTotalCount(res?.data?.count);
            setCurrencyData(res?.data);
        } catch (error) {
            console.error(error);
        }
        setLoading(false);
    };

    const onChangeVal = (e) => {
        setPage(e - 1);
        getPaginationApi(page);
    };

    useEffect(() => {
        getPaginationApi(page);
    }, [page]);

    const deleteCurrency = async (id) => {
        setLoading(true);
        try {
            await cityDelete(id);
            getPaginationApi(page);
        } catch (error) {
            alert(error.message);
        }
        setLoading(false);
    };

    const confirm = (id) => {
        deleteCurrency(id);
        message.success("Delete Successful!");
    };

    const cancel = () => {
        message.error("Cancel Successful!");
    };

    return (
        <>
            {loading && <Loadar />}
            <div className="row mx-3">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption">
                                    <h4 className="heading mb-0">ADD Cities</h4>
                                    <div>
                                        <Link className="btn btn-primary btn-sm" to="/add-cities" role="button" aria-controls="offcanvasExample">+ ADD CITY</Link>
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
                                                <th style={{ width: '122.312px' }}>S.No</th>
                                                <th style={{ width: '203.45px' }}>City Name</th>
                                                {/* <th style={{ width: '156.475px' }}>City code</th> */}
                                                <th style={{ width: '161.675px' }}>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {curencyData && curencyData?.city?.map((item, i) => (
                                                <tr role="row" className="odd" key={item?._id}>
                                                    <td><span>{(i + 1) + page * count}</span></td>
                                                    <td><span>{item?.name}</span></td>
                                                    {/* <td>{item?.code}</td> */}
                                                    <td>
                                                        <div className="d-flex">
                                                            <Link to={`/update-city/${item?._id}`} className="btn btn-primary shadow btn-xs sharp me-1">
                                                                <i className="fa fa-pencil" />
                                                            </Link>
                                                            <Popconfirm
                                                                title="Delete City!"
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
                                        Total {totalCount} entries
                                    </div>
                                    <div className="dataTables_paginate paging_simple_numbers" id="empoloyees-tblwrapper_paginate">
                                        <Pagination
                                            current={page}
                                            onChange={onChangeVal}
                                            total={totalCount}
                                            pageSize={count}
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

export default CityList;
