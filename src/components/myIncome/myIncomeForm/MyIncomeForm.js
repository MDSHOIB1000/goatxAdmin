import { useState } from "react";
import MyincomeModal from "./myIncomeModal/MyincomeModal";
import CustomInputField from "../../../common/CustomInputField";

function MyIncomeForm() {
    const [formData, setFormData] = useState({
        fromdate: '2024-01-18',
        todate: '2024-01-18',
        userId: '0', // Assuming "All User" is the default
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <>
            <div className="row">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0"><b>MY  INCOME </b></h4>
                                </div>
                                <form className="tbl-captionn">
                                    <div className="row">
                                        <div className="col-xl-4 mb-3">
                                            <label htmlFor="exampleFormControlInput1" className="form-label">From <span className="text-danger">*</span></label>
                                            <CustomInputField
                                                type="date"
                                                id="date"
                                            />
                                        </div>
                                        <div className="col-xl-4 mb-3">
                                            <label htmlFor="exampleFormControlInput2" className="form-label">To<span className="text-danger">*</span></label>
                                            <CustomInputField
                                                type="date"
                                                id="date"
                                            />
                                        </div>

                                        <div className="col-lg-3 col-md-4 mg-t-10 mg-sm-t-25">
                                            <label className="form-label"></label>
                                            <br />
                                            <button className="btn btn-primary pd-x-20 rounded-0 mt-3" type="submit"><i className="fas fa-search"></i> Search</button>
                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MyIncomeForm