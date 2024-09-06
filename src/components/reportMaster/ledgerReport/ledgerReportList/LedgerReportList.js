import React from 'react'

function LedgerReportList() {
    return (
        <>
            <div className="row row-sm">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-header pb-0">
                            <div className="d-flex justify-content-between">
                                <h4 className="card-title mg-b-2 mt-2">Ledger Report</h4>
                                <i className="mdi mdi-dots-horizontal text-gray" />
                            </div>
                            <hr />
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <div id="my_table_wrapper" className="dataTables_wrapper dt-bootstrap4 no-footer">
                                    <div className="row">
                                        <div className="col-sm-12 col-md-6">
                                            <div className="dataTables_length" id="my_table_length">
                                                <label>
                                                    Show{' '} entries
                                                    <select
                                                        name="my_table_length"
                                                        aria-controls="my_table"
                                                        className="custom-select custom-select-sm form-control form-control-sm"
                                                    >
                                                        <option value={10}>10</option>
                                                        <option value={25}>25</option>
                                                        <option value={50}>50</option>
                                                        <option value={100}>100</option>
                                                    </select>{' '}

                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-6">
                                            <div id="my_table_filter" className="dataTables_filter">
                                                <label>
                                                    Search:
                                                    <form autoComplete="off">
                                                        <input
                                                            type="search"
                                                            className="form-control form-control-sm"
                                                            placeholder=""
                                                            aria-controls="my_table"
                                                        />
                                                    </form>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <table
                                                className="display responsive nowrap dataTable no-footer dtr-inline collapsed"
                                                id="my_table"
                                                role="grid"
                                                aria-describedby="my_table_info"
                                            >
                                                <thead>
                                                    <tr role="row">
                                                        <th className="wd-15p border-bottom-0 sorting_asc" tabIndex="0" aria-controls="example1" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Sr No: activate to sort column descending" style={{ width: '222px' }}>ID</th>
                                                        <th className="wd-15p border-bottom-0 sorting" tabIndex="0" aria-controls="example1" rowSpan="1" colSpan="1" aria-label="Provider: activate to sort column ascending" style={{ width: '222px' }}>Date & Time</th>
                                                        <th className="wd-15p border-bottom-0 sorting" tabIndex="0" aria-controls="example1" rowSpan="1" colSpan="1" aria-label="Amount: activate to sort column ascending" style={{ width: '222px' }}>Txind</th>
                                                        <th className="wd-15p border-bottom-0 sorting" tabIndex="0" aria-controls="example1" rowSpan="1" colSpan="1" aria-label="User Comm: activate to sort column ascending" style={{ width: '222px' }}>description</th>
                                                        <th className="wd-15p border-bottom-0 sorting" tabIndex="0" aria-controls="example1" rowSpan="1" colSpan="1" aria-label="count: activate to sort column ascending" style={{ width: '222px' }}>OP</th>
                                                        <th className="wd-15p border-bottom-0 sorting" tabIndex="0" aria-controls="example1" rowSpan="1" colSpan="1" aria-label="count: activate to sort column ascending" style={{ width: '222px' }}>Debit</th>
                                                        <th className="wd-15p border-bottom-0 sorting" tabIndex="0" aria-controls="example1" rowSpan="1" colSpan="1" aria-label="count: activate to sort column ascending" style={{ width: '222px' }}>Credit</th>
                                                        <th className="wd-15p border-bottom-0 sorting" tabIndex="0" aria-controls="example1" rowSpan="1" colSpan="1" aria-label="count: activate to sort column ascending" style={{ width: '222px' }}>Profit</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="odd">
                                                        <td valign="top" colSpan="8" className="dataTables_empty">
                                                            No data available in table
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <div id="my_table_processing" className="dataTables_processing card" style={{ display: 'none' }}>
                                                Processing...
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12 col-md-5">
                                            <div className="dataTables_info" id="my_table_info" role="status" aria-live="polite">
                                                Showing 0 to 0 of 0 entries
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-7">
                                            <div className="dataTables_paginate paging_simple_numbers" id="my_table_paginate">
                                                <ul className="pagination">
                                                    <li className="paginate_button page-item previous disabled" id="my_table_previous">
                                                        <a href="#" aria-controls="my_table" data-dt-idx={0} tabIndex={0} className="page-link">
                                                            Previous
                                                        </a>
                                                    </li>
                                                    <li className="paginate_button page-item next disabled" id="my_table_next">
                                                        <a href="#" aria-controls="my_table" data-dt-idx={1} tabIndex={0} className="page-link">
                                                            Next
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default LedgerReportList
