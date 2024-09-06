
import { Formik } from "formik";
import { Link, useNavigate, useParams } from "react-router-dom"

// import CustomDropdown from "../../../../../common/CustomDropdown";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import CustomInputField from "../../../common/CustomInputField";
import { addMainModule, updateMainModule, updateModule } from "../../../api/login/Login";
function AddMainModule() {

    const itemList = [
        { name: "Airtel", value: "Airtel" },
        { name: "Jio", value: "Jio" },
        { name: "VI", value: "VI" },
    ];
    const navigate = useNavigate()

    const [initialValues, setInitialValues] = useState({
        name: "",
        slug: '',
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


        return errors;
    };

    const toastSuccessMessage = () => {
        toast.success(`${params?.id ? "Update" : "Add"} Main Module successfully .`, {
            position: "top-center",
        });
    };

    // const curencyidget = async () => {
    //     try {
    //         const data = await getCountryAdd()
    //         setCombo(data?.data)

    //     } catch (error) {
    //         alert(error.message)
    //     }
    // }

    const submitForm = async (values) => {
        console.log(values);

        try {
            if (!params?.id) {
                try {
                    const res = await addMainModule(values);
                    if (res?.statusCode == "200") {
                        toastSuccessMessage();
                        setTimeout(() => {
                            navigate('/listMainModule')
                        }, [4000])
                    }
                } catch (error) {

                }

            } else {
                try {
                    const res = await updateModule(params.id, values);
                    if (res?.statusCode == "200") {
                        toastSuccessMessage();
                        setTimeout(() => {
                            navigate('/listMainModule')
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
        // curencyidget()
    }, [])

    useEffect(() => {
        const fetchCurrency = async () => {
            try {
                if (params?.id) {
                    const response = await updateMainModule(params.id);
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
                        <div className="row m-4" >
                            <div className="col-xl-12">
                                <div className="card">
                                    <div className="card-body p-0">
                                        <div className="table-responsive active-projects style-1">
                                            <div className="tbl-caption tbl-caption-2">
                                                <h4 className="heading mb-0">
                                                    {params?.id ? "UPDATE" : "ADD"} Main Module</h4>
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
                                                            type="text"
                                                            placeholder="Enter Name "
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
                                                            placeholder="Enter Slug "
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
                                                        <Link to='/listMainModule' className="btn btn-danger light ms-1">Cancel</Link>
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
export default AddMainModule