import { Formik } from "formik";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";


import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaBroadcastTower } from 'react-icons/fa';
import CustomInputField from "../../../../common/CustomInputField";
import CustomTextArea from "../../../../common/CustomTextArea";

function BroadCasterModal(props) {
    const navigate = useNavigate();

    const [emailEngine, setEmailEngine] = useState("sendEmail");
    const [initialValues, setInitialValues] = useState({
        api: "",
        id: "",
    });
    const params = useParams();

    const validate = (values) => {
        let errors = {};
        return errors;
    };

    const toastSuccessMessage = () => {
        toast.success(`${params?.id ? "Update" : "Add"} New Api Successfully.`, {
            position: "top-center",
        });
    };

    const curencyidget = async () => {
        try {
            // const data = await getCountryAdd()
            // setCombo(data?.data)
        } catch (error) {
            alert(error.message);
        }
    };

    const submitForm = async (values) => {
        console.log(values);

        try {
            if (!params?.id) {
                try {
                    /* const res = await ApiTransactionAdd(values);
                       if (res?.statusCode == "200") {
                       toastSuccessMessage();
                       setTimeout(() => {
                         navigate('/api-master')
                       }, [4000])
                     } */
                } catch (error) { }
            } else {
                try {
                    // const res = await apiMasterUpdate(params.id, values);
                    // if (res?.statusCode == "200") {
                    //   toastSuccessMessage();
                    // }
                } catch (error) { }
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    useEffect(() => {
        curencyidget();
    }, []);

    useEffect(() => {
        const fetchCurrency = async () => {
            try {
                if (params?.id) {
                    // const response = await getapiMasterId(params.id);
                    // const currencyData = response.data;
                    // setInitialValues(currencyData);
                } else {
                    // setInitialValues({
                    //     name: "",
                    //     code: "",
                    //     curruncy_id: "",
                    // });
                }
            } catch (error) {
                console.error("Error fetching currency:", error);
            }
        };

        fetchCurrency();
    }, [params?.id]);

    const handleEmailEngineChange = (event) => {
        setEmailEngine(event.target.value);
    };
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <span><FaBroadcastTower className='fs-3' /></span>
                    <span className='align-baseline'> <b>Broadcaster</b>
                    </span>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <>
                    <Formik
                        initialValues={initialValues}
                        validate={validate}
                        onSubmit={submitForm}
                        enableReinitialize
                        className="tbl-captionn"
                    >
                        {(formik) => {
                            const {
                                values,
                                handleChange,
                                handleSubmit,
                                errors,
                                touched,
                                handleBlur,
                                isValid,
                                dirty,
                            } = formik;
                            return (
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="">
                                            <div className="card-body p-0">
                                                <div className="table-responsive active-projects style-1">

                                                    <form className="tbl-captionn" onSubmit={handleSubmit}>
                                                        <div className="row justify-content-center">

                                                            <div className="col-xl-12 my-2">
                                                                <select
                                                                    className="form-select"
                                                                    aria-label="Select Email Engine"
                                                                    value={emailEngine}
                                                                    // onChange={handleChange}
                                                                    name="emailEngine"
                                                                    placeholder="Select Channel"
                                                                >
                                                                    <option value="sms">SMS</option>
                                                                    <option value="whatsapp">WhatsApp</option>
                                                                    <option value="email">Email</option>
                                                                </select>

                                                            </div>
                                                            <div className="col-xl-12 my-2">
                                                                <select
                                                                    className="form-select"
                                                                    aria-label="Select Email Engine"
                                                                    value={"5743573487hdy3734"}
                                                                    // onChange={handleChange}
                                                                    isMulti
                                                                    name="emailEngine"
                                                                    placeholder="Select Channel"
                                                                >
                                                                    <option value="5743573487hdy3734">5743573487hdy3734</option>

                                                                </select>

                                                            </div>


                                                            <div className="col-12 col-xl-12">
                                                               <div className="card">
                                                                No Item Found
                                                               <div className="row">
                                                                    <div className="col-xl-6 mb-3">
                                                                        <CustomInputField
                                                                            type="text"
                                                                            value={values?.smtpUsername}
                                                                            hasError={errors.smtpUsername && touched.smtpUsername}
                                                                            onChange={handleChange}
                                                                            onBlur={handleBlur}
                                                                            errorMsg={errors.smtpUsername}
                                                                            id="smtpUsername"
                                                                            name="smtpUsername"
                                                                            placeholder="Gate Way Name"
                                                                        />
                                                                    </div>

                                                                    <div className="col-xl-6 mb-3">
                                                                        <CustomInputField
                                                                            type="password"
                                                                            value={values?.smtpPassword}
                                                                            hasError={errors.smtpPassword && touched.smtpPassword}
                                                                            onChange={handleChange}
                                                                            onBlur={handleBlur}
                                                                            errorMsg={errors.smtpPassword}
                                                                            id="smtpPassword"
                                                                            name="smtpPassword"
                                                                            placeholder="Sender ID"
                                                                        />
                                                                    </div>
                                                                    <div className="col-xl-6 mb-3">
                                                                        <CustomInputField
                                                                            type="text"
                                                                            value={values?.smtpUsername}
                                                                            hasError={errors.smtpUsername && touched.smtpUsername}
                                                                            onChange={handleChange}
                                                                            onBlur={handleBlur}
                                                                            errorMsg={errors.smtpUsername}
                                                                            id="smtpUsername"
                                                                            name="smtpUsername"
                                                                            placeholder="DLT Templet "
                                                                        />
                                                                    </div>

                                                                    <div className="col-xl-6 mb-3">
                                                                        <CustomInputField
                                                                            type="password"
                                                                            value={values?.smtpPassword}
                                                                            hasError={errors.smtpPassword && touched.smtpPassword}
                                                                            onChange={handleChange}
                                                                            onBlur={handleBlur}
                                                                            errorMsg={errors.smtpPassword}
                                                                            id="smtpPassword"
                                                                            name="smtpPassword"
                                                                            placeholder="Camping Name"
                                                                        />
                                                                    </div>
                                                                </div>
                                                               </div>
                                                            </div>

                                                            <div>

                                                                <div className="col-xl-12 mb-3">
                                                                    <CustomTextArea
                                                                        type="text"
                                                                        value={values?.smtpServer}
                                                                        hasError={errors.smtpServer && touched.smtpServer}
                                                                        onChange={handleChange}
                                                                        onBlur={handleBlur}
                                                                        errorMsg={errors.smtpServer}
                                                                        id="smtpServer"
                                                                        name="smtpServer"
                                                                        placeholder="TYPE MESSAGE HERE"
                                                                        className="h-50"
                                                                    />
                                                                </div>

                                                            </div>
                                                            <div className="text-end ">
                                                                <span><i>Char (0) ; SMS (0)</i></span>
                                                            </div>
                                                            <div>
                                                            <Button onClick={props.onHide}>Close</Button>
                                                                <button
                                                                    className="btn btn-primary me-1"
                                                                    type="submit"
                                                                    disabled={!isValid || !dirty}
                                                                >
                                                                    {params?.id ? "send" : "Save"}
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        }}
                    </Formik>

                    <ToastContainer />
                </>
            </Modal.Body>
           {/*  <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer> */}
        </Modal>
    );
}
export default BroadCasterModal