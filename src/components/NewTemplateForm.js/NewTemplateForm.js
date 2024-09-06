import React from "react";
import "./NewTemplateForm.css"; // Import the CSS file
import { Link } from "react-router-dom";

const NewTemplateForm = () => {
    return (
        <div >
            <div className="container-fluid m-4">
                <div className="card">
                    <h2>New Template Message</h2>
                    <form>
                        <div className="row">
                            <div className="col-xl-6">
                                <div className="form-group">
                                    <label>Add Number<span>*</span></label>
                                    <select className="form-control">
                                        <option value="">Select Number</option>
                                        {/* Add more options here */}
                                    </select>
                                </div>
                            </div>



                            <div className="col-xl-6">
                                <div className="form-group">
                                    <label>Template Category<span>*</span></label>
                                    <select className="form-control">
                                        <option value="">Select Category...</option>
                                        {/* Add more options here */}
                                    </select>
                                </div>
                            </div>

                            <div className="col-xl-6">
                                <div className="form-group">
                                    <label>Template Name<span>*</span></label>
                                    <input type="text" className="form-control" placeholder="Enter Template Name" />
                                </div>
                            </div>

                            <div className="col-xl-6">
                                <div className="form-group">
                                    <label>Select Language<span>*</span></label>
                                    <select className="form-control">
                                        <option value="">Select Language</option>
                                        {/* Add more options here */}
                                    </select>
                                </div>
                            </div>
                        </div>

                        <button type="submit" className="btn-next">Next</button>
                    </form>
                    <Link to="/utility-master" className="back-link">Go back to template list</Link>
                </div>
            </div>
        </div>
    );
};

export default NewTemplateForm;
