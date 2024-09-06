import { useParams, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import CustomInputField from "../../../../common/CustomInputField";
import CustomTextArea from "../../../../common/CustomTextArea";
import { Button, Form, Tab, Tabs } from "react-bootstrap";
import { MdDeleteSweep } from "react-icons/md";
import { ImParagraphRight } from "react-icons/im";
import { FaLink } from "react-icons/fa";
import { FaLinkSlash } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
function BulkUploadSms() {
    const [countryData, setCountryData] = useState([]);
    const [stateData, setStateData] = useState([]);
    const [messageText, setMessageText] = useState('');
    const [initialValues, setInitialValues] = useState({
        name: "",
        description: "",
        state_id: "",
        country_id: "",
        meta_title: "",
        meta_description: "",
        meta_image: "",
    });
    const params = useParams();
    const navigate = useNavigate();

    const validate = (values) => {
        let errors = {};
        if (!values.name) {
            errors.name = "City Name is required";
        }
        if (!values.state_id) {
            errors.state_id = "State is required";
        }
        if (!values.country_id) {
            errors.country_id = "Country is required";
        }

        return errors;
    };

    const toastSuccessMessage = () => {
        toast.success(`${params?.id ? "Update" : "Add"} City Successfully.`, {
            position: "top-center",
        });
    };
    const handleTextMessage = (e) => {
        setMessageText(e.target.value);
    };
    const getCountryData = async () => {
        // try {
        //     const countryResponse = await countryList();
        //     setCountryData(countryResponse?.data || []);
        //     const stateResponse = await getStateMaster();
        //     setStateData(stateResponse?.data || []);
        // } catch (error) {
        //     console.error("Error fetching country or state data:", error);
        //     alert(error.message);
        // }
    };

    const submitForm = async (values) => {
        try {
            // if (!params?.id) {
            //     const res = await cityAdd(values);
            //     if (res?.statusCode === "200") {
            //         toastSuccessMessage();
            //         navigate(`/cities-master`);
            //     }
            // } else {
            //     await cityUpdate(params.id, values);
            //     toastSuccessMessage();
            //     navigate(`/cities-master`);
            // }
        } catch (error) {
            console.error("Error in submitForm:", error);
        }
    };

    useEffect(() => {
        getCountryData();
    }, []);

    useEffect(() => {
        const fetchCityData = async () => {
            if (params?.id) {
                // try {
                //     const response = await getcity(params.id);
                //     const cityData = response.data;
                //     setInitialValues(cityData);
                // } catch (error) {
                //     console.error("Error fetching city data:", error);
                // }
            }
        };
        fetchCityData();
    }, [params?.id]);
    return (
        <>
            <div className="row">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">

                                <Formik
                                    initialValues={initialValues}
                                    validate={validate}
                                    onSubmit={submitForm}
                                    enableReinitialize
                                >
                                    {({
                                        values,
                                        handleChange,
                                        handleSubmit,
                                        errors,
                                        touched,
                                        isValid,
                                        dirty,
                                        handleBlur,
                                    }) => (
                                        <form className="tbl-captionn" onSubmit={handleSubmit}>
                                            <div className="row">
                                                <div className="col-xl-6 mb-3">
                                                    <div className="card">
                                                        <div className="row">
                                                            <div className="col-xl-12 mb-3">
                                                                <span>Upload File *</span>
                                                                <CustomInputField
                                                                    type="file"
                                                                    value={values.meta_title}
                                                                    hasError={errors.meta_title && touched.meta_title}
                                                                    onChange={handleChange}
                                                                    onBlur={handleBlur}
                                                                    errorMsg={touched.meta_title && errors.meta_title}
                                                                    id="meta_title"
                                                                    name="meta_title"
                                                                    className="flex-grow-1 me-2"
                                                                />
                                                                <span><small>Only CSV, XLSX format files are allowed to import.</small></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div className="col-xl-6 mb-3">
                                                    <div className="card    ">
                                                        <div className="row">
                                                            <div className="col-xl-6 mb-3">
                                                                <span>Gateway Name*</span>
                                                                <select
                                                                    className="form-select"
                                                                    aria-label="Default select example"
                                                                    id="state_id"
                                                                    name="state_id"
                                                                    value={""}
                                                                    // onChange={handleChange}
                                                                    onBlur={handleBlur}
                                                                >
                                                                    <option value={""}>Test1</option>
                                                                    <option value={""}>Test2</option>
                                                                    <option value={""}>Test3</option>
                                                                </select>
                                                            </div>
                                                            <div className="col-xl-6 mb-3">
                                                                <span>Sender Id*</span>
                                                                <select
                                                                    className="form-select"
                                                                    aria-label="Default select example"
                                                                    id="state_id"
                                                                    name="state_id"
                                                                    value={""}
                                                                    // onChange={handleChange}
                                                                    onBlur={handleBlur}
                                                                >
                                                                    <option value={""}>Test1</option>
                                                                    <option value={""}>Test2</option>
                                                                    <option value={""}>Test3</option>
                                                                </select>
                                                            </div>
                                                            <div className="col-xl-6 mb-3">
                                                                <span>DLT Template</span>
                                                                <select
                                                                    className="form-select"
                                                                    aria-label="Default select example"
                                                                    id="state_id"
                                                                    name="state_id"
                                                                    value={""}
                                                                    // onChange={handleChange}
                                                                    onBlur={handleBlur}
                                                                >
                                                                    <option value={""}>Test1</option>
                                                                    <option value={""}>Test2</option>
                                                                    <option value={""}>Test3</option>
                                                                </select>
                                                            </div>
                                                            <div className="col-xl-6 mb-3">
                                                                <span>Campaign Name*</span>
                                                                <select
                                                                    className="form-select"
                                                                    aria-label="Default select example"
                                                                    id="state_id"
                                                                    name="state_id"
                                                                    value={""}
                                                                    // onChange={handleChange}
                                                                    onBlur={handleBlur}
                                                                >
                                                                    <option value={""}>Test1</option>
                                                                    <option value={""}>Test2</option>
                                                                    <option value={""}>Test3</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-8 mb-3">
                                                    <div className="card">
                                                        <Button className="mx-0 my-3 d-flex align-items-center">
                                                            <ImParagraphRight className="me-2" /> Text Message
                                                        </Button>
                                                        <div className="">
                                                            <CustomTextArea
                                                                type="text"
                                                                value={messageText}
                                                                hasError={errors.meta_title && touched.meta_title}
                                                                onChange={handleTextMessage}
                                                                onBlur={handleBlur}
                                                                errorMsg={touched.meta_title && errors.meta_title}
                                                                id="meta_title"
                                                                name="meta_title"
                                                                placeholder="TYPE MESSAGE HERE"
                                                                className="flex-grow-1 me-2 forTextAreaHeight"
                                                            />
                                                            <div className="d-flex align-items-center justify-content-between">
                                                                <div className="d-flex"
                                                                ><Button className="btn btn-outline-primary d-flex align-items-center">
                                                                        <FaLink />
                                                                    </Button>
                                                                    <Button className="btn btn-outline-primary d-flex align-items-center">
                                                                        <FaLinkSlash />
                                                                    </Button></div>
                                                                <span><div class="form-check form-switch">
                                                                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                                                    <label class="form-check-label" for="flexSwitchCheckDefault">Flash
                                                                    </label>
                                                                </div></span>
                                                                <div className="">
                                                                    <span>Char (0)</span>
                                                                    <span>SMS (0)</span>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <div className="create-Camping-mess-bg-img text-center position-relative">
                                                        {messageText ? (
                                                            <div className="position-absolute border p-3 responsive-box text-start"
                                                                style={{ left: "45px", top: "145px", borderRadius: "0 0.5rem 0.5rem 0.5rem", backgroundColor: "#fff" }}>
                                                                {messageText}
                                                                <div className="triangle"></div>
                                                            </div>
                                                        ) : ""}
                                                    </div>
                                                </div>


                                                <div className="col-xl-6 mb-3">
                                                    <Button className="btn btn-outline-primary d-flex align-items-center">
                                                        <IoIosSend /> Send Now
                                                    </Button>
                                                </div>

                                            </div>

                                        </form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </>
    )
}

export default BulkUploadSms
