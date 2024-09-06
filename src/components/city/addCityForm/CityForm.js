import { useParams, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Formik } from "formik";
import CustomInputField from "../../../common/CustomInputField";
import { Link } from "react-router-dom";
import CustomTextArea from "../../../common/CustomTextArea";
import { cityAdd, cityUpdate, countryList, getcity, getStateMaster } from "../../../api/login/Login";

function CityForm() {
    const [countryData, setCountryData] = useState([]);
    const [stateData, setStateData] = useState([]);
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

    const getCountryData = async () => {
        try {
            const countryResponse = await countryList();
            setCountryData(countryResponse?.data || []);
            const stateResponse = await getStateMaster();
            setStateData(stateResponse?.data || []);
        } catch (error) {
            console.error("Error fetching country or state data:", error);
            alert(error.message);
        }
    };

    const submitForm = async (values) => {
        try {
            if (!params?.id) {
                const res = await cityAdd(values);
                if (res?.statusCode === "200") {
                    toastSuccessMessage();
                    navigate(`/cities-master`);
                }
            } else {
                await cityUpdate(params.id, values);
                toastSuccessMessage();
                navigate(`/cities-master`);
            }
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
                try {
                    const response = await getcity(params.id);
                    const cityData = response.data;
                    setInitialValues(cityData);
                } catch (error) {
                    console.error("Error fetching city data:", error);
                }
            }
        };
        fetchCityData();
    }, [params?.id]);

    return (
        <>
            <div className="row mx-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0">
                                        {params?.id ? "UPDATE" : "ADD"} CITY
                                    </h4>
                                </div>
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
                                                    <CustomInputField
                                                        type="text"
                                                        value={values.name}
                                                        hasError={errors.name && touched.name}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={touched.name && errors.name}
                                                        id="name"
                                                        name="name"
                                                        placeholder="City name"
                                                    />
                                                </div>
                                                <div className="col-xl-6 mb-3">
                                                    <CustomInputField
                                                        type="text"
                                                        value={values.meta_description}
                                                        hasError={
                                                            errors.meta_description &&
                                                            touched.meta_description
                                                        }
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={
                                                            touched.meta_description &&
                                                            errors.meta_description
                                                        }
                                                        id="meta_description"
                                                        name="meta_description"
                                                        placeholder="Meta Description"
                                                    />
                                                </div>
                                                <div className="col-xl-12 mb-3">
                                                    <CustomTextArea
                                                        value={values.description}
                                                        hasError={
                                                            errors.description && touched.description
                                                        }
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={
                                                            touched.description && errors.description
                                                        }
                                                        id="description"
                                                        name="description"
                                                        placeholder="Description"
                                                    />
                                                </div>
                                                <div className="col-xl-6 mb-3">
                                                    <CustomInputField
                                                        type="text"
                                                        value={values.meta_title}
                                                        hasError={
                                                            errors.meta_title && touched.meta_title
                                                        }
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={
                                                            touched.meta_title && errors.meta_title
                                                        }
                                                        id="meta_title"
                                                        name="meta_title"
                                                        placeholder="Meta Title"
                                                    />
                                                </div>
                                                <div className="col-xl-6 mb-3">
                                                    <CustomInputField
                                                        type="text"
                                                        value={values.meta_image}
                                                        hasError={
                                                            errors.meta_image && touched.meta_image
                                                        }
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={
                                                            touched.meta_image && errors.meta_image
                                                        }
                                                        id="meta_image"
                                                        name="meta_image"
                                                        placeholder="Meta Image"
                                                    />
                                                </div>
                                                <div className="col-xl-6 mb-3">
                                                    <select
                                                        className="form-select"
                                                        aria-label="Default select example"
                                                        id="state_id"
                                                        name="state_id"
                                                        value={values.state_id}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    >
                                                        <option value="">Select State</option>
                                                        {stateData.map((item) => (
                                                            <option
                                                                key={item?._id}
                                                                value={item?._id}
                                                            >
                                                                {item?.name}
                                                            </option>
                                                        ))}
                                                    </select>
                                                    {touched.state_id && errors.state_id && (
                                                        <div className="error">{errors.state_id}</div>
                                                    )}
                                                </div>
                                                <div className="col-xl-6 mb-3">
                                                    <select
                                                        className="form-select"
                                                        aria-label="Default select example"
                                                        id="country_id"
                                                        name="country_id"
                                                        value={values.country_id}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    >
                                                        <option value="">Select Country</option>
                                                        {countryData.map((item) => (
                                                            <option
                                                                key={item?._id}
                                                                value={item?._id}
                                                            >
                                                                {item?.name}
                                                            </option>
                                                        ))}
                                                    </select>
                                                    {touched.country_id && errors.country_id && (
                                                        <div className="error">
                                                            {errors.country_id}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            <div>
                                                <Link
                                                    to="/cities-master"
                                                    className="btn btn-danger light ms-1"
                                                >
                                                    Cancel
                                                </Link>
                                                <button
                                                    className="btn btn-primary me-1"
                                                    type="submit"
                                                    disabled={!isValid || !dirty}
                                                >
                                                    {params?.id ? "Update" : "Add"}
                                                </button>
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
    );
}

export default CityForm;
