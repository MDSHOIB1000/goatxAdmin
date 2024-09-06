import { Link } from "react-router-dom"
import Breadcrumbs from "../../../../common/breadcrumb/Breadcrumbs"
import { deleteServiceMasterList, getServiceCategory, getServiceMaster, getServiceMasterFilter } from "../../../../api/login/Login"
import Loadar from "../../../../common/loader/Loader"
import { useEffect, useState } from "react"
import { Pagination, Popconfirm, message } from "antd"
import banner from '../../../../assets/images/logo/logo.png'
import icon from '../../../../assets/images/logo/profile-pic.png'
import { baseUrlImage } from "../../../../baseUrl"
import ServiceSearch from "./ServiceSearch"
const breadCrumbsTitle = {
    id: "1",
    title_1: "Master",
    title_2: "Course Master",
}
function ServiceMaster() {
    const [data, setData] = useState(null)
    const [count, setCount] = useState(10)
    const [page, setPage] = useState(0)
    const [loading, setLoading] = useState(false)
    const [total, setTotal] = useState(0)
    const [serviceCateg, set_serviceCateg] = useState(false);
    const [initialValues, setInitialValues] = useState({
        name: "",
        service_type_id: ""
    });
    const getServiceList = async (num) => {
        setLoading(true)
        try {
            const data = await getServiceMaster(num, count)
            setData(data?.data)
            setTotal(data)

        } catch (error) {
            alert(error.message)
        }
        setLoading(false)
    }
    console.log(total, "total");

    const deleteService = async (id) => {
        setLoading(true)
        try {
            await deleteServiceMasterList(id)
            getServiceList(page)
        } catch (error) {
            alert(error.message)
        }
        setLoading(false)
    }
    const getServicesCategory = async () => {
        const _serviceCategoery = await getServiceCategory()
        set_serviceCateg(_serviceCategoery?.data);
    }
    useEffect(() => {
        getServiceList(page)
        getServicesCategory()
    }, [])

    const submitForm = async (values) => {
        setPage(0)
        try {
          const res = await getServiceMasterFilter({ ...values, page: 0, count:count });
          setData(res?.data);
        } catch (error) {
          console.error("Error during Services filter:", error);
        } finally {
          setLoading(false);
        }
      };

    const onChangeVal = (e) => {
        setPage(e - 1)
        getServiceList(e - 1)
    };


    const confirm = (id) => {
        deleteService(id)
        message.success('Delete Successfull!');

    };
    const cancel = (e) => {
        // console.log(e);
        message.error('Cancle Successfull!');
    };
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <ServiceSearch initialValues={{ start_date: "", end_date: "", service_name: "", service_type: "" }} />
            {loading && <Loadar />}
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption">
                                    <h4 className="heading mb-0">COURSE MASTER</h4>
                                    <div>
                                        <Link className="btn btn-primary btn-sm" to="/add-course-master" role="button" aria-controls="offcanvasExample">+CREATE COURSE</Link>
                                        {/* <button type="button" className="btn btn-secondary btn-sm" >
                                        + Invite Employee
                                    </button> */}
                                    </div>
                                </div>
                                <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer"><div className="dt-buttons"><button className="dt-button buttons-excel buttons-html5 btn btn-sm border-0" tabIndex={0} aria-controls="empoloyees-tblwrapper" type="button"><span><i className="fa-solid fa-file-excel" /> Export Report</span></button> </div><table id="empoloyees-tblwrapper" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                    <thead>
                                        <tr role="row">
                                            <th className="sorting_asc" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-sort="ascending" aria-label="Employee ID: activate to sort column descending" style={{ width: '122.312px' }}>
                                                ID
                                            </th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Employee Name: activate to sort column ascending" style={{ width: '203.45px' }}>
                                                Course Name
                                            </th>
                                            {/*  <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Department: activate to sort column ascending" style={{ width: '156.475px' }}>
                                                Code</th> */}
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Department: activate to sort column ascending" style={{ width: '156.475px' }}>
                                                Short Description</th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Department: activate to sort column ascending" style={{ width: '156.475px' }}>
                                                Full Description</th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Department: activate to sort column ascending" style={{ width: '156.475px' }}>
                                                Icon Image</th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Department: activate to sort column ascending" style={{ width: '156.475px' }}>
                                                Banner Image</th>
                                            {/* <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Department: activate to sort column ascending" style={{ width: '156.475px' }}>
                                                Service Category</th> */}
                                            {/*  <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Department: activate to sort column ascending" style={{ width: '156.475px' }}>
                                                Permit By Area</th> */}

                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Status: activate to sort column ascending" style={{ width: '96.125px' }}>
                                                Status</th>
                                            <th className="sorting" tabIndex={0} aria-controls="empoloyees-tblwrapper" rowSpan={1} colSpan={1} aria-label="Contact Number: activate to sort column ascending" style={{ width: '161.675px' }}>
                                                Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data && data?.map((item, i) => {
                                            return <tr role="row" className="odd">
                                                <td className="sorting_1"><span>{i + 1}</span></td>
                                                <td>
                                                    {item?.service_name}
                                                </td>
                                                <td className="sorting_1"><span className="elip">{item?.short_description?.slice(0, 35)} &nbsp; ...</span></td>
                                                <td>
                                                    <span className="elip">{item?.full_description?.slice(0, 35)} &nbsp; ...</span>

                                                </td>
                                                <td className="sorting_1"><span>{item?.icon ? <img src={`${baseUrlImage}${item?.icon}`} alt="banner" width={'30px'} /> : <img src={icon} alt="banner" width={'30px'} />}</span></td>
                                                <td className="sorting_1"><span>{item?.banner_img ? <img src={`${baseUrlImage}${item?.banner_img}`} alt="banner" width={'80px'} /> : <img src={banner} alt="banner" width={'80px'} />}</span></td>
                                                {/* <td><span>{item?.service_category}</span></td> */}
                                                <td>
                                                    <span className="badge badge-success text-light  border-0" style={{ backgroundColor: `${item?.is_active === true ? 'blue' : 'red'}`, fontSize: `${item?.is_active === false ? '0.8rem' : ''}` }}>{item?.is_active == true ? 'Active' : 'Inactive'}</span>
                                                </td>
                                                <td>
                                                    <div className="d-flex">
                                                        <Link to={`/update-course-master/${item?.id}`} className="btn btn-primary shadow btn-xs sharp me-1"><i className="fa fa-pencil" /></Link>
                                                        <Popconfirm
                                                            title="Delete Course !"
                                                            description="Are you sure to delete ?"
                                                            onConfirm={() => confirm(item?.id)}
                                                            onCancel={cancel}
                                                            okText="Yes"
                                                            cancelText="No"
                                                        >
                                                            <Link to="#" disable className="btn btn-danger shadow btn-xs sharp"><i className="fa fa-trash" /></Link>
                                                        </Popconfirm>
                                                    </div>

                                                </td>

                                            </tr>
                                        })}
                                    </tbody>
                                </table>

                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="dataTables_info" id="empoloyees-tblwrapper_info" role="status" aria-live="polite">
                                    Total {total?.totalCount} entries
                                </div>
                                <div className="dataTables_paginate paging_simple_numbers" id="empoloyees-tblwrapper_paginate">
                                    <Pagination
                                        /* showSizeChanger
                                        onShowSizeChange={''} */

                                        defaultCurrent={1}
                                        onChange={onChangeVal}
                                        total={total?.totalCount}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
export default ServiceMaster