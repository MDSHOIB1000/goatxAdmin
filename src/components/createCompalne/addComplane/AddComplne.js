import { Link, useNavigate, useParams } from "react-router-dom";
import { Formik } from "formik";
import { useEffect, useState } from "react";
import CustomInputField from "../../../common/CustomInputField";
import { toast, ToastContainer } from "react-toastify";
import { addComplain, bolk, build, compalneId, flore, oArea, oRome, oword, pri, sta, updateComplane } from "../../../api/login/Login";


function AddComplane() {
    const navigate = useNavigate()

    const [initialValues, setInitialValues] = useState({
        ticket_no: "",

        building_id: '',
        block_id: '',
        office_id: '',
        ward_id: '',
        area_id: '',
        floor_id: '',
        priority_id: '',
        status_id: '',
        mobileNo: '',
        firstname: '',
        lastname: '',
        subject: '',
        detail: '',
    });

    const [initialValues2, setInitialValues2] = useState({
        ticket_no: "",
        building_id: '',
        block_id: '',
        office_id: '',
        ward_id: '',
        area_id: '',
        floor_id: '',
        priority_id: '',
        status_id: '',
        mobileNo: '',
        firstname: '',
        lastname: '',
        subject: '',
        detail: '',
    });

    const handleChange2 = (e) => {
        const clone = { ...initialValues2 }
        const value = e.target?.value
        const name = e.target?.name
        clone[name] = value
        setInitialValues2(clone)
    }

    const [priority, setpriority] = useState(null)
    const [status, setStatus] = useState(null)
    const [building, setbuilding] = useState(null)
    const [Block, setBlock] = useState(null)
    const [OfficeRoom, setOfficeRoom] = useState(null)
    const [OfficeWard, setOfficeWard] = useState(null)
    const [Officearea, setOfficearea] = useState(null)

    const [floor, setfloor] = useState(null)
    console.log(floor);

    const params = useParams();


    const validate = (values) => {
        let errors = {};
        if (!values.ticket_no) {
            errors.ticket_no = "Ticket No is required";
        }

        if (!values.firstname) {
            errors.firstname = "first name is required";
        }
        if (!values.lastname) {
            errors.lastname = "Last name is required";
        }
        if (!values.mobileNo) {
            errors.mobileNo = "Mobile No is required";
        }
        if (!values.subject) {
            errors.subject = "Subject  is required";
        }
        if (!values.detail) {
            errors.detail = "Detail  is required";
        }

        return errors;
    };

    const toastSuccessMessage = () => {
        toast.success(`${params?.id ? "Update" : "Create"} Complaint Successfully.`, {
            position: "top-center",
        });
    };

    const curencyidget = async () => {
        try {
            const prii = await pri()
            // console.log(pri);
            setpriority(prii?.data)
            // build
            const staa = await sta()
            setStatus(staa?.data)
            const build1 = await build()
            setbuilding(build1?.data)
            const bolk1 = await bolk()
            setBlock(bolk1?.data)
            const office1 = await oRome()
            setOfficeRoom(office1?.data)
            const officeWord1 = await oword()
            setOfficeWard(officeWord1?.data)
            const oArea1 = await oArea()
            setOfficearea(oArea1?.data)
            const flore1 = await flore()
            console.log(flore1);
            setfloor(flore1)

        } catch (error) {
            alert(error.message)
        }
    }

    const submitForm = async (values) => {
        // console.log(values);

        const clone = { ...initialValues2, ticket_no: values?.ticket_no, mobileNo: values?.mobileNo, firstname: values?.firstname, lastname: values?.lastname, subject: values?.subject, detail: values?.detail }
        // console.log(clone);

        try {
            if (!params?.id) {
                try {
                    const res = await addComplain(clone);
                    if (res?.statusCode == "200") {
                        toastSuccessMessage();
                        setTimeout(() => {
                            navigate('/list-Complaint')
                        }, [4000])
                    }
                } catch (error) {

                }

            } else {
                try {
                    const res = await updateComplane(params.id, clone);
                    if (res?.statusCode == "200") {
                        toastSuccessMessage();
                        setTimeout(() => {
                            navigate('/list-Complaint')
                        }, [4000])
                    }
                } catch (error) {

                }

            }

        } catch (error) {
            console.error("Error:", error);
        }
    };

    useEffect(() => {
        curencyidget()
    }, [])

    useEffect(() => {
        const fetchCurrency = async () => {
            try {
                if (params?.id) {
                    const response = await compalneId(params.id);
                    const currencyData = response.data;
                    setInitialValues(currencyData);
                    setInitialValues2(currencyData)
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
    return (
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
                        <div className="row" >
                            <div className="col-xl-12">
                                <div className="card">
                                    <div className="card-body p-0">
                                        <div className="table-responsive active-projects style-1">
                                            <div className="tbl-caption tbl-caption-2">
                                                <h4 className="heading mb-0">
                                                    {params?.id ? "UPDATE" : "ADD"} Create Complaint</h4>
                                            </div>
                                            <form className="tbl-captionn" onSubmit={handleSubmit}>
                                                <div className="row">
                                                    {/* <div className="col-xl-4 mb-3">
                                                        <select className="form-select" aria-label="Default select example" value={values.provider_name} name="provider_name" onChange={handleChange}>
                                                            <option selected>Open this select menu</option>
                                                            <option value={"Airtel"}>Airtel</option>
                                                            <option value={"Jio"}>Jio</option>
                                                            <option value={'VI'}>VI</option>
                                                        </select>

                                                    </div> */}
                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="number"
                                                            placeholder="Enter Mobile *"
                                                            value={values.mobileNo}
                                                            hasError={errors.mobileNo && touched.mobileNo}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.mobileNo}
                                                            autoFocus={true}
                                                            id="mobileNo"
                                                        />
                                                    </div>

                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="Enter First name *"
                                                            value={values.firstname}
                                                            hasError={errors.firstname && touched.firstname}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.firstname}
                                                            autoFocus={true}
                                                            id="firstname"
                                                        />
                                                    </div>

                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="Enter Last Name *"
                                                            value={values.lastname}
                                                            hasError={errors.lastname && touched.lastname}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.lastname}
                                                            autoFocus={true}
                                                            id="lastname"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="Enter Subject *"
                                                            value={values.subject}
                                                            hasError={errors.subject && touched.subject}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.subject}
                                                            autoFocus={true}
                                                            id="subject"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="Enter ticket Id *"
                                                            value={values.ticket_no}
                                                            hasError={errors.ticket_no && touched.ticket_no}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.ticket_no}
                                                            autoFocus={true}
                                                            id="ticket_no"
                                                        />
                                                    </div>
                                                    {/* <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="Enter Reply *"
                                                            value={values.slug}
                                                            hasError={errors.slug && touched.slug}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.slug}
                                                            autoFocus={true}
                                                            id="slug"
                                                        />
                                                    </div> */}

                                                    <div className="col-xl-4 mb-3">
                                                        <select className="form-select" aria-label="Default select example" value={initialValues2?.status_id} name="status_id" onChange={handleChange2}>
                                                            <option selected>Open this select Status</option>
                                                            {status && status?.map((item) => {
                                                                return <option value={item?._id}>{item?.name}</option>
                                                            })}
                                                        </select>

                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <select className="form-select" aria-label="Default select example" value={initialValues2?.priority_id} name="priority_id" onChange={handleChange2}>
                                                            <option selected>Open this select Priority</option>
                                                            {priority && priority?.map((item) => {
                                                                return <option value={item?._id}>{item?.priority}</option>
                                                            })}


                                                        </select>
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <select className="form-select" aria-label="Default select example" value={initialValues2?.building_id} name="building_id" onChange={handleChange2}>
                                                            <option selected>Open this select Building</option>
                                                            {building && building?.map((item) => {
                                                                return <option value={item?._id}>{item?.name}</option>
                                                            })}
                                                        </select>
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <select className="form-select" aria-label="Default select example" value={initialValues2?.block_id} name="block_id" onChange={handleChange2}>
                                                            <option selected>Open this select Block</option>
                                                            {Block && Block?.map((item) => {
                                                                return <option value={item?._id}>{item?.name}</option>
                                                            })}
                                                        </select>
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <select className="form-select" aria-label="Default select example" value={initialValues2?.office_id} name="office_id" onChange={handleChange2}>
                                                            <option selected>Open this select Office Room</option>
                                                            {OfficeRoom && OfficeRoom?.map((item) => {
                                                                return <option value={item?._id}>{item?.name}</option>
                                                            })}
                                                        </select>
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <select className="form-select" aria-label="Default select example" value={initialValues2?.ward_id} name="ward_id" onChange={handleChange2}>
                                                            <option selected>Open this select Office Word</option>
                                                            {OfficeWard && OfficeWard?.map((item) => {
                                                                return <option value={item?._id}>{item?.name}</option>
                                                            })}
                                                        </select>
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <select className="form-select" aria-label="Default select example" value={initialValues2?.area_id} name="area_id" onChange={handleChange2}>
                                                            <option selected>Open this select Office Area</option>
                                                            {Officearea && Officearea?.map((item) => {
                                                                return <option value={item?._id}>{item?.name}</option>
                                                            })}
                                                        </select>
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <select className="form-select" aria-label="Default select example" value={initialValues2?.floor_id} name="floor_id" onChange={handleChange2}>
                                                            <option selected>Open this select Office Floor</option>
                                                            {floor && floor?.map((item) => {
                                                                console.log(item);
                                                                return <option value={item?._id}>{item?.name}</option>
                                                            })}
                                                        </select>
                                                    </div>
                                                    <div className="col-xl-4 mb-3">

                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="Enter Details *"
                                                            value={values.detail}
                                                            hasError={errors.detail && touched.detail}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.detail}
                                                            autoFocus={true}
                                                            id="detail"
                                                        />
                                                    </div>


                                                    <div className="col-xl-4 mb-3">
                                                        <Link to='/employees-complaints-dashboard' className="btn btn-danger light ms-1">Cancel</Link>
                                                        <button
                                                            className="btn btn-primary me-1"
                                                            type="submit"
                                                            disabled={!isValid || !dirty}
                                                        >
                                                            {params?.id ? "Update" : "Add"}
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
    )
}
export default AddComplane