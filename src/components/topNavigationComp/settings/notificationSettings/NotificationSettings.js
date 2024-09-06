import { Link } from "react-router-dom";
import CustomDropdown from "../../../../common/CustomDropdown";
import CustomInputField from "../../../../common/CustomInputField";
import CustomTextArea from "../../../../common/CustomTextArea";
import { Formik } from "formik";
import axios from 'axios';
import { notificaltionSendAll } from "../../../../api/login/Login";
import Loadar from "../../../../common/loader/Loader";
import { useState } from "react";

const initialValues = {
    notificationTitle: "",
    notificationMessage: "",
    sendTo: "",
};

function NotificationsSetting() {
    const validate = (values) => {
        let errors = {};

        if (!values.notificationTitle) {
            errors.notificationTitle = "Notification Title is required";
        }

        if (!values.notificationMessage) {
            errors.notificationMessage = "Notification Message is required";
        }

        if (!values.sendTo) {
            errors.sendTo = "Send To is required";
        }

        return errors;
    };

    const [loading, setLoading] = useState(false);
    const submitForm = async (values, { setSubmitting, resetForm }) => {
        const payload = {
            sendTo: values.sendTo,
            subject: values.notificationTitle,
            remarks: values.notificationMessage,
            icon: ""
        };
        setLoading(true);

        try {
            let result = await notificaltionSendAll(payload);
            setLoading(false);
            if (result.status == 200) {
                resetForm();
                alert('Notification sent successfully');
            } else {
                alert(result.message);
            }

        } catch (error) {
            setLoading(false);
        }
        setSubmitting(false);
    };

    const itemList = [
        { name: "To All Staff", value: "ToAllStaff" },
        { name: "Members", value: "Members" },
    ];

    return (
        <>
            {loading && <Loadar />}
            <Formik
                initialValues={initialValues}
                validate={validate}
                onSubmit={submitForm}
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
                        setFieldValue,
                    } = formik;
                    return (
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="card">
                                    <div className="card-body p-0">
                                        <div className="table-responsive active-projects style-1">
                                            <div className="tbl-caption">
                                                <h4 className="heading mb-0">SEND NOTIFICATION</h4>
                                            </div>
                                            <form className="tbl-captionn" onSubmit={handleSubmit}>
                                                <div className="row">
                                                    <div className="col-xl-6 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="Subject*"
                                                            value={values.notificationTitle}
                                                            hasError={errors.notificationTitle && touched.notificationTitle}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.notificationTitle}
                                                            id="notificationTitle"
                                                        />
                                                    </div>
                                                    {/* <div className="col-xl-6 mb-3">
                                                        <CustomDropdown
                                                            name="sendTo"
                                                            placeholder="Send To*"
                                                            value={values.sendTo}
                                                            itemList={itemList}
                                                            onChange={(value) => setFieldValue("sendTo", value)}
                                                            hasError={errors.sendTo && touched.sendTo}
                                                            errorMsg={errors.sendTo}
                                                        />
                                                    </div> */}
                                                    <div className="col-xl-6  mb-3">
                                                        <select 
                                                            className="form-select" 
                                                            aria-label="Default select example"
                                                            value={values.sendTo}
                                                            onChange={(e) => setFieldValue("sendTo", e.target.value)}
                                                        >
                                                            <option value="">Select To Send</option>
                                                            <option value="Members">Members</option>
                                                            <option value="ToAllStaff">To All Staff</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-xl-12 mb-3">
                                                        <CustomTextArea
                                                            placeholder="Message*"
                                                            value={values.notificationMessage}
                                                            hasError={errors.notificationMessage && touched.notificationMessage}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.notificationMessage}
                                                            id="notificationMessage"
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <button type="submit" className="btn btn-primary me-1">
                                                        Send Notification
                                                    </button>
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
        </>
    );
}

export default NotificationsSetting;
