
import { FaArrowDownLong } from "react-icons/fa6";
import { FaArrowUpLong } from "react-icons/fa6";
import imsgChart from '../../../asesets/adminImage/chart.png';
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Doughnut, Line, PolarArea } from "react-chartjs-2";
import DasBoardSlideProduct from "./dasboardSlideProduct/DasBoardSlideProduct";
import { useEffect, useState } from "react";
import { dateGet } from "../../../api/login/Login";
function DasBoardCheck() {

    const [data, setData] = useState(null)
    // console.log(data.bbps[0]?.success);
    const currentDates = async () => {
        const date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        // This arrangement can be altered based on how we want the date's format to appear.
        let currentDate = `${day}-${month}-${year}`;


        try {
            const res = await dateGet(currentDate)
            console.log(res.data?.data);
            setData(res?.data?.data)
        } catch (error) {

        }

    }

    useEffect(() => {
        currentDates()
    }, [])

    return (
        <>
            <div className="ContentArea">
                <div className="card">
                    <div className="card-header"><span>Hi, Welcome To back!</span></div>
                    <DasBoardSlideProduct />
                    <div className="card-body">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="total-txn">
                                            <div>
                                                <span role="img" aria-label="insert-row-above" size={52} className="anticon anticon-insert-row-above hover:animate-spin border-dashed cursor-pointer transition-all border-black font-extrabold bg-[#ffffff42] rounded-full p-4">
                                                    <svg viewBox="64 64 896 896" focusable="false" data-icon="insert-row-above" width="1em" height="1em" fill="currentColor" aria-hidden="true"><defs></defs><path d="M878.7 336H145.3c-18.4 0-33.3 14.3-33.3 32v464c0 17.7 14.9 32 33.3 32h733.3c18.4 0 33.3-14.3 33.3-32V368c.1-17.7-14.8-32-33.2-32zM360 792H184V632h176v160zm0-224H184V408h176v160zm240 224H424V632h176v160zm0-224H424V408h176v160zm240 224H664V632h176v160zm0-224H664V408h176v160zm64-408H120c-4.4 0-8 3.6-8 8v80c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-80c0-4.4-3.6-8-8-8z" /></svg>
                                                </span>
                                            </div>
                                            <div className="rupees">
                                                <span>{data?.dmtTotal} ₹</span>
                                            </div>
                                            <div className="tName">
                                                <span>Total Txn</span>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="total-txn money_in">
                                            <div>
                                                <span role="img" aria-label="insert-row-above" size={52} className="anticon anticon-insert-row-above hover:animate-spin border-dashed cursor-pointer transition-all border-black font-extrabold bg-[#ffffff42] rounded-full p-4">
                                                    <FaArrowDownLong />

                                                </span>
                                            </div>
                                            <div className="rupees">
                                                <span>{data?.wallet?.creditTotal} ₹</span>
                                            </div>
                                            <div className="tName">
                                                <span>Credit</span>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="total-txn Money-out  mt-3">
                                            <div>
                                                <span role="img" aria-label="insert-row-above" size={52} className="anticon anticon-insert-row-above hover:animate-spin border-dashed cursor-pointer transition-all border-black font-extrabold bg-[#ffffff42] rounded-full p-4">
                                                    <FaArrowUpLong />
                                                </span>
                                            </div>
                                            <div className="rupees">
                                                <span>{data?.wallet?.debitTotal} ₹</span>
                                            </div>
                                            <div className="tName">
                                                <span>Debit</span>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="total-txn dispute  mt-3">
                                            <div>
                                                <span role="img" aria-label="insert-row-above" size={52} className="anticon anticon-insert-row-above hover:animate-spin border-dashed cursor-pointer transition-all border-black font-extrabold bg-[#ffffff42] rounded-full p-4">
                                                    <FaArrowUpLong />
                                                </span>
                                            </div>
                                            <div className="rupees">
                                                <span>{data && data?.disputeRequest}</span>
                                            </div>
                                            <div className="tName">
                                                <span>Dispute Request</span>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                {/* <div className="row">
                                    <div className="col-lg-8">
                                        <div className=" card-card mt-4">
                                            <div className="card-header"><span>TODAY SALES</span></div>
                                            <div className="card-body">
                                                <Bar
                                                    data={{
                                                        labels: ["A", "B", "C"],
                                                        datasets: [
                                                            {
                                                                label: 'Revenue',
                                                                data: [200, 300, 400],
                                                                backgroundColor: [
                                                                    "rgb(60, 179, 113)"
                                                                ],
                                                                borderRadius: 5,
                                                                pointStyle: 'circle'

                                                            },
                                                            {
                                                                label: 'Loss',
                                                                data: [90, 70, 70],
                                                                backgroundColor: [
                                                                    'rgb(255, 0, 0)'
                                                                ],
                                                                borderRadius: 5
                                                            }
                                                        ]
                                                    }}
                                                />

                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className=" card-card mt-4">
                                            <div className="card-header"><span>Product Wise Volume Share</span></div>
                                            <div className="">
                                                <PolarArea
                                                    data={{
                                                        labels: [
                                                            'Red',
                                                            'Green',
                                                            'Yellow',
                                                            'Grey',
                                                            'Blue'
                                                        ],
                                                        datasets: [{
                                                            label: 'My First Dataset',
                                                            data: [11, 16, 7, 3, 14],
                                                            backgroundColor: [
                                                                'rgb(255, 99, 132)',
                                                                'rgb(75, 192, 192)',
                                                                'rgb(255, 205, 86)',
                                                                'rgb(201, 203, 207)',
                                                                'rgb(54, 162, 235)'
                                                            ]
                                                        }]
                                                    }}
                                                />

                                            </div>
                                        </div>
                                    </div>

                                </div> */}

                            </div>

                            {/* <div className="row"> */}
                            <div className="col-lg-12 mt-3">
                                <h2 className="text-align-center bussnuness">Today's Business Summary</h2>
                            </div>
                            {/* <div className="col-lg-12 mt-3">
                                    <h6>Today's Mobile/DTH Recharge Summary</h6>
                                </div>
                                <div className="col-lg-4">
                                    <div className="bussnes-data">
                                        <div className="left-sides">
                                            SUCCESS
                                        </div>
                                        <div className="right-sides">
                                            {data?.recharge && data?.recharge[0]?.success}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="bussnes-data-red">
                                        <div className="left-sides">
                                            FAILED
                                        </div>
                                        <div className="right-sides">
                                            {data?.recharge && data?.recharge[0]?.failed}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="bussnes-data-yellow">
                                        <div className="left-sides">
                                            PENDING
                                        </div>
                                        <div className="right-sides">
                                            {data?.recharge && data?.recharge[0]?.pending}
                                        </div>
                                    </div>
                                </div> */}
                            {/* <div className="col-lg-12 mt-3">
                                    <h6>Today's BBPS Summary</h6>
                                </div>
                                <div className="col-lg-4">
                                    <div className="bussnes-data">
                                        <div className="left-sides">
                                            SUCCESS
                                        </div>
                                        <div className="right-sides">
                                            {data && data?.bbps[0]?.success}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="bussnes-data-red">
                                        <div className="left-sides">
                                            FAILED
                                        </div>
                                        <div className="right-sides">
                                            {data && data?.bbps[0]?.failed}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="bussnes-data-yellow">
                                        <div className="left-sides">
                                            PENDING
                                        </div>
                                        <div className="right-sides">
                                            {data && data?.bbps[0]?.pending}
                                        </div>
                                    </div>
                                </div> */}
                            <div className="col-lg-12 mt-3">
                                <h6>Today's DMT Summary</h6>
                            </div>
                            <div className="col-lg-4">
                                <div className="bussnes-data">
                                    <div className="left-sides">
                                        SUCCESS
                                    </div>
                                    <div className="right-sides">
                                        {data && data?.dmt[0]?.success}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="bussnes-data-red">
                                    <div className="left-sides">
                                        FAILED
                                    </div>
                                    <div className="right-sides">
                                        {data && data?.dmt[0]?.failed}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="bussnes-data-yellow">
                                    <div className="left-sides">
                                        PENDING
                                    </div>
                                    <div className="right-sides">
                                        {data && data?.dmt[0]?.pending}
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-lg-12 mt-3">
                                    <h6>Today's AEPS Summary</h6>
                                </div>
                                <div className="col-lg-4">
                                    <div className="bussnes-data">
                                        <div className="left-sides">
                                            SUCCESS
                                        </div>
                                        <div className="right-sides">
                                            {data && data?.aeps[0]?.success}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="bussnes-data-red">
                                        <div className="left-sides">
                                            FAILED
                                        </div>
                                        <div className="right-sides">
                                            {data && data?.aeps[0]?.failed}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="bussnes-data-yellow">
                                        <div className="left-sides">
                                            PENDING
                                        </div>
                                        <div className="right-sides">
                                            {data && data?.aeps[0]?.pending}
                                        </div>
                                    </div>
                                </div> */}
                            {/* <div className="col-lg-12 mt-3">
                                    <h6>Today's Payout Summary</h6>
                                </div>
                                <div className="col-lg-4">
                                    <div className="bussnes-data">
                                        <div className="left-sides">
                                            SUCCESS
                                        </div>
                                        <div className="right-sides">
                                            {data && data?.payout[0]?.success}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="bussnes-data-red">
                                        <div className="left-sides">
                                            FAILED
                                        </div>
                                        <div className="right-sides">
                                            {data && data?.payout[0]?.failed}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 mb-3">
                                    <div className="bussnes-data-yellow">
                                        <div className="left-sides">
                                            PENDING
                                        </div>
                                        <div className="right-sides">
                                            {data && data?.payout[0]?.pending}
                                        </div>
                                    </div>
                                </div> */}
                            {/* </div> */}



                            {/* <div className="col-lg-12">
                                <div className="card">
                                   
                            <div className="card-body">
                                <form action="" method="post" name="frmReport" id="frmReport">
                                    <div className="form-row" style={{ alignItems: 'end' }}>
                                        <div className="form-group col-md-4">
                                            <label htmlFor="txtFrom">From Date</label>
                                            <input className="form-control datefield" id="txtFrom" name="txtFrom" type="date" style={{ cursor: 'pointer' }} />
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label htmlFor="txtTo">To Date</label>
                                            <input className="form-control datefield" id="txtTo" name="txtTo" type="date" style={{ cursor: 'pointer' }} />
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label>&nbsp;</label>
                                            <input type="submit" name="btnSearch" id="btnSearch" defaultValue="Search" className="btn btn-primary" title="Click to search." fdprocessedid="h4pz8" />
                                        </div>

                                    </div>
                                </form>
                                <table className="table table-striped table-bordered table-hover display dataTable no-footer dtr-inline collapsed" id="myTable" role="grid" aria-describedby="myTable_info" >
                                    <thead>
                                        <tr role="row">
                                            <th className="sorting_asc" tabIndex={0} aria-controls="myTable" rowSpan={1} colSpan={1} style={{ width: '66.4px' }} aria-sort="ascending" aria-label="Sr No: activate to sort column descending">
                                                STATUS
                                            </th>
                                            <th className="sorting" tabIndex={0} aria-controls="myTable" rowSpan={1} colSpan={1} style={{ width: '60.4px' }} aria-label="Date: activate to sort column ascending">
                                                AMOUNT</th>
                                            <th className="sorting" tabIndex={0} aria-controls="myTable" rowSpan={1} colSpan={1} style={{ width: '169.4px' }} aria-label="Company Name: activate to sort column ascending">
                                                PERCENTAGE
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="odd odd-2">
                                            <td valign="" >
                                                <div className="project-names">
                                                    <h6 className="bg-primary-transparent text-primary d-inline-block mr-2 text-center">
                                                        Success
                                                    </h6>
                                                   
                                                </div>
                                            </td>
                                            <td>
                                                <div className="badge badge-success badge-2" id="dashboard_today_success">0.00</div>
                                            </td>
                                            <td>
                                                <div className="badge badge-success badge-2" id="success_percentage">0</div>
                                            </td>
                                        </tr>
                                        <tr className="odd odd-2">
                                            <td valign="" >
                                                <div className="project-names">
                                                    <h6 className="bg-primary-transparent text-primary d-inline-block mr-2 text-center">
                                                        Failure
                                                    </h6>
                                                    
                                                </div>
                                            </td>
                                            <td>
                                                <div className="badge badge-danger badge-2" id="dashboard_today_success">0.00</div>
                                            </td>
                                            <td>
                                                <div className="badge badge-danger badge-2" id="success_percentage">0</div>
                                            </td>
                                        </tr>
                                        <tr className="odd odd-2">
                                            <td valign="" >
                                                <div className="project-names">
                                                    <h6 className="bg-primary-transparent text-primary d-inline-block mr-2 text-center">
                                                        Pending
                                                    </h6>
                                                    
                                                </div>
                                            </td>
                                            <td>
                                                <div className="badge badge-warning badge-2" id="dashboard_today_success">0.00</div>
                                            </td>
                                            <td>
                                                <div className="badge badge-warning badge-2" id="success_percentage">0</div>
                                            </td>
                                        </tr>
                                        <tr className="odd odd-2">
                                            <td valign="" >
                                                <div className="project-names">
                                                    <h6 className="bg-primary-transparent text-primary d-inline-block mr-2 text-center">
                                                        Refunded
                                                    </h6>
                                                    
                                                </div>
                                            </td>
                                            <td>
                                                <div className="badge badge-danger badge-2" id="dashboard_today_success">0.00</div>
                                            </td>
                                            <td>
                                                <div className="badge badge-danger badge-2" id="success_percentage">0</div>
                                            </td>
                                        </tr>
                                        <tr className="odd odd-2">
                                            <td valign="" >
                                                <div className="project-names">
                                                    <h6 className="bg-primary-transparent text-primary d-inline-block mr-2 text-center">
                                                        Debit
                                                    </h6>
                                                    
                                                </div>
                                            </td>
                                            <td>
                                                <div className="badge badge-warning badge-2" id="dashboard_today_success">0.00</div>
                                            </td>

                                        </tr>
                                        <tr className="odd odd-2">
                                            <td valign="" >
                                                <div className="project-names">
                                                    <h6 className="bg-primary-transparent text-primary d-inline-block mr-2 text-center">
                                                        Credit
                                                    </h6>
                                                    
                                                </div>
                                            </td>
                                            <td>
                                                <div className="badge badge-warning badge-2" id="dashboard_today_success">0.00</div>
                                            </td>

                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>

                    </div> */}
                        </div>
                    </div>
                </div >
            </div >
        </>
    )
}
export default DasBoardCheck