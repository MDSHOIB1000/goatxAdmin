import { Formik } from 'formik';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CustomInputField from '../../../../common/CustomInputField';
import { baseUrl } from '../../../../baseUrl';
import { lockAmount } from '../../../../api/login/Login';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

function LockAmount({ show5, handleClose5, getItem }) {
    // const initialValues = {
    //     SecurityPin: '',
    //     locking_amt: ''
    // };
    const [initialValues, setInitialValues] = useState(getItem);
    useEffect(() => {
        setInitialValues(getItem)
    }, [getItem])
    const param = useParams()

    const validate = (values) => {
        let errors = {};
        if (!values.locking_amt) {
            errors.locking_amt = "Amount is required";
        }

        if (!values.SecurityPin) {
            errors.SecurityPin = "Security Pin is required";
        }

        return errors;
    };

    const toastSuccessMessage = () => {
        toast.success(`Locked Amount Updated Successfully.`, {
            position: "top-right",
        });
    };
    const errorMessage = () => {
        toast.error(`Locked Amount Not Updated.`, {
            position: "top-right"
        })
    }

    const submitForm = async (values) => {
        const obj = {
            ammount: values.locking_amt,
            refer_id: getItem.refer_id,
            retailer_id: getItem._id,
            user_id: window.localStorage.getItem('userToken')
        };
        try {
            const res = await lockAmount(obj);
            if (res.statusCode == 200) {
                toastSuccessMessage();
                setTimeout(() => {
                    handleClose5();
                }, 2000);

            } else {
                errorMessage()
            }

        } catch (error) {

        }
        // Prevent default behavior if necessary
    };

    return (
        <>
            <ToastContainer />
            <Modal show={show5} onHide={handleClose5} className='dilog-Locked' id="dilog-box" size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title>Locked  Amount For {param?.name} : {getItem?.member_lockedAmountt}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Formik
                        initialValues={initialValues}
                        // validate={validate}
                        onSubmit={submitForm}
                    >
                        {(formik) => {
                            const {
                                values,
                                handleChange,
                                handleSubmit,
                                errors,
                                touched,
                                handleBlur,
                            } = formik;
                            return (
                                <form onSubmit={handleSubmit} className="tbl-captionn">
                                    <div className="row">
                                        <div className="col-x-12-6 mb-3">
                                            <CustomInputField
                                                type="number"
                                                value={values.locking_amt}
                                                hasError={errors.locking_amt && touched.locking_amt}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                errorMsg={errors.locking_amt}
                                                autoFocus={true}
                                                id="Amount"
                                                placeholder="Amount"
                                                name="locking_amt"
                                            />
                                        </div>
                                        {/* <div className="col-x-12-6 mb-3">
                                            <CustomInputField
                                                type="password"
                                                value={values.SecurityPin}
                                                hasError={errors.SecurityPin && touched.SecurityPin}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                errorMsg={errors.SecurityPin}
                                                autoFocus={true}
                                                id="SecurityPin"
                                                placeholder="Security Pin"
                                                name="SecurityPin"
                                            />
                                        </div> */}
                                        <div className='border-top'>
                                            <button className="btn btn-primary pd-x-20 rounded-2" type="submit" style={{ marginTop: "15px" }}> Save </button>
                                            {/* <button className="btn btn-danger pd-x-20 rounded-2" onClick={handleClose5} type="button" style={{ marginTop: "15px" }}> Close </button> */}
                                        </div>
                                    </div>
                                </form>
                            );
                        }}
                    </Formik>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default LockAmount;
