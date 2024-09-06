import { Formik } from "formik";
import { Link, useNavigate, useParams } from "react-router-dom"

// import CustomDropdown from "../../../../../common/CustomDropdown";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import CustomInputField from "../../../../common/CustomInputField";
import { addSubModule, mainModuleList, updateSubMainModule, updatesubModule } from "../../../../api/login/Login";


function AddSubModule() {
    const [count, setCount] = useState(100)
    const [page, setPage] = useState(0)
    const itemList = [
        { name: "Airtel", value: "Airtel" },
        { name: "Jio", value: "Jio" },
        { name: "VI", value: "VI" },
    ];
    const navigate = useNavigate()

    const [Combo, setCombo] = useState(null)
    console.log(Combo);

    const [initialValues, setInitialValues] = useState({
        name: "",
        main_module: '',
        slug: '',
        frontRoute: '',
        back_end_point: ['']
    });

    const params = useParams();


    const validate = (values) => {
        let errors = {};
        if (!values.name) {
            errors.name = "Name is required";
        }

        if (!values.slug) {
            errors.slug = "slug is required";
        }
        if (!values.main_module) {
            errors.main_module = "Main Module is required";
        }
        if (!values.frontRoute) {
            errors.frontRoute = "Front Route is required";
        }
        if (!values.back_end_point || values.back_end_point.length === 0 || values.back_end_point.some(point => !point)) {
            errors.back_end_point = "At least one Backend Point is required";
        }
        return errors;
    };

    const toastSuccessMessage = () => {
        toast.success(`${params?.id ? "Update" : "Add"} Sub Module Successfully.`, {
            position: "top-center",
        });
    };

    const curencyidget = async () => {
        try {
            const data = await mainModuleList(page, count)
            setCombo(data?.data)

        } catch (error) {
            alert(error.message)
        }
    }

    const submitForm = async (values) => {
        console.log(values);
        try {
            if (!params?.id) {
                try {
                    const res = await addSubModule(values);
                    if (res?.statusCode == "200") {
                        toastSuccessMessage();
                        setTimeout(() => {
                            navigate('/list-sub-module')
                        }, [4000])
                    }
                } catch (error) {

                }

            } else {
                try {
                    const res = await updatesubModule(params.id, values);
                    if (res?.statusCode == "200") {
                        toastSuccessMessage();
                        setTimeout(() => {
                            navigate('/list-sub-module')
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
                    const response = await updateSubMainModule(params.id);
                    const currencyData = response.data;
                    setInitialValues(currencyData);
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

    const addBackEndPoint = (values, setValues) => {
        const newBackEndPoint = [...values.back_end_point, ''];
        setValues({ ...values, back_end_point: newBackEndPoint });
    };

    const removeBackEndPoint = (index, values, setValues) => {
        const newBackEndPoint = values.back_end_point.filter((_, i) => i !== index);
        setValues({ ...values, back_end_point: newBackEndPoint });
    };
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
                        setValues
                    } = formik;
                    return (
                        <div className="row" >
                            <div className="col-xl-12">
                                <div className="card">
                                    <div className="card-body p-0">
                                        <div className="table-responsive active-projects style-1">
                                            <div className="tbl-caption tbl-caption-2">
                                                <h4 className="heading mb-0">
                                                    {params?.id ? "UPDATE" : "ADD"}  Sub Module</h4>
                                            </div>
                                            <form className="tbl-captionn" onSubmit={handleSubmit}>
                                                <div className="row">

                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="Enter Name"
                                                            value={values.name}
                                                            hasError={errors.name && touched.name}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.name}
                                                            autoFocus={true}
                                                            id="name"
                                                        />
                                                    </div>

                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="Enter Slug"
                                                            value={values.slug}
                                                            hasError={errors.slug && touched.slug}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.slug}
                                                            autoFocus={true}
                                                            id="slug"
                                                        />
                                                    </div>

                                                    <div className="col-xl-4 mb-3">
                                                        <select className="form-select" aria-label="Default select example" value={values.main_module} name="main_module" onChange={handleChange}>
                                                            <option selected>Open this select menu</option>
                                                            {Combo && Combo?.map((item) => {
                                                                return <option value={item?._id}>{item?.name}</option>
                                                            })}

                                                        </select>
                                                    </div>


                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="Enter Front Route"
                                                            value={values.frontRoute}
                                                            hasError={errors.frontRoute && touched.frontRoute}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.frontRoute}
                                                            autoFocus={true}
                                                            id="frontRoute"
                                                        />
                                                    </div>
                                                    {values.back_end_point.map((point, index) => (
                                                        <div className="col-xl-4 mb-3" key={index}>
                                                            <CustomInputField
                                                                type="text"
                                                                placeholder="Enter Backend Point"
                                                                value={point}
                                                                hasError={errors.back_end_point && touched.back_end_point}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                errorMsg={errors.back_end_point}
                                                                autoFocus={true}
                                                                id={`back_end_point_${index}`}
                                                                name={`back_end_point.${index}`}
                                                            />
                                                            {values.back_end_point.length > 1 && (
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-danger"
                                                                    onClick={() => removeBackEndPoint(index, values, setValues)}
                                                                >
                                                                    Remove
                                                                </button>
                                                            )}
                                                        </div>
                                                    ))}

                                                    <div className="col-xl-4 mb-3">
                                                        <button
                                                            className="btn btn-primary me-1"
                                                            type="button"
                                                            onClick={() => addBackEndPoint(values, setValues)}
                                                        >
                                                            Add More
                                                        </button>
                                                    </div>


                                                    <div className="col-xl-4 mb-3">
                                                        <Link to='/list-sub-module' className="btn btn-danger light ms-1">Cancel</Link>
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
export default AddSubModule