import { Formik } from "formik";
import { Link, useNavigate, useParams } from "react-router-dom"
import CustomInputField from "../../../../../common/CustomInputField";
import CustomDropdown from "../../../../../common/CustomDropdown";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { getProviderId, providerAdd, providerUpdate } from "../../../../../api/login/Login";


function AddProvider() {
    const itemList = [
        { name: "Airtel", value: "Airtel" },
        { name: "Jio", value: "Jio" },
        { name: "VI", value: "VI" },
    ];
    const navigate = useNavigate()

    const [initialValues, setInitialValues] = useState({
        provider_name: "",
        merchant_pay2all: '',
        description: '',
        slug: '',
        gst_type: '',
        min_length: '',
        max_length: '',
        help_line: '',
        block_amount: '',
        meta_title: '',
        meta_description: '',
        meta_keyword: '',
        // meta_image: ''
    });

    const params = useParams();


    const validate = (values) => {
        let errors = {};
        if (!values.provider_name) {
            errors.provider_name = "Provider Name is required";
        }

        if (!values.merchant_pay2all) {
            errors.merchant_pay2all = "Merchant pay2all is required";
        }
        if (!values.description) {
            errors.description = "Description is required";
        }
        if (!values.slug) {
            errors.slug = "Slug is required";
        }
        if (!values.gst_type) {
            errors.gst_type = "Gst Type is required";
        }
        if (!values.min_length) {
            errors.min_length = "Min Length is required";
        }
        if (!values.max_length) {
            errors.max_length = "Max Length is required";
        }
        if (!values.help_line) {
            errors.help_line = "Help Line is required";
        }
        if (!values.block_amount) {
            errors.block_amount = "Block Amount is required";
        }
        if (!values.meta_title) {
            errors.meta_title = "Meta Title is required";
        }
        if (!values.meta_description) {
            errors.meta_description = "Meta Description is required";
        }
        if (!values.meta_keyword) {
            errors.meta_keyword = "Meta keyword is required";
        }
        return errors;
    };

    const toastSuccessMessage = () => {
        toast.success(`${params?.id ? "Update" : "Add"} Provider Successfully.`, {
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
                    const res = await providerAdd(values);
                    if (res?.statusCode == "200") {
                        toastSuccessMessage();
                        setTimeout(() => {
                            navigate('/provider')
                        }, [4000])
                    }
                } catch (error) {

                }

            } else {
                try {
                    const res = await providerUpdate(params.id, values);
                    if (res?.statusCode == "200") {
                        toastSuccessMessage();
                        setTimeout(() => {
                            navigate('/provider')
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
                    const response = await getProviderId(params.id);
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
                        <div className="row" >
                            <div className="col-xl-12">
                                <div className="card">
                                    <div className="card-body p-0">
                                        <div className="table-responsive active-projects style-1">
                                            <div className="tbl-caption tbl-caption-2">
                                                <h4 className="heading mb-0">
                                                    {params?.id ? "UPDATE" : "ADD"} PROVIDER</h4>
                                            </div>
                                            <form className="tbl-captionn" onSubmit={handleSubmit}>
                                                <div className="row">
                                                    <div className="col-xl-4 mb-3">
                                                        <select className="form-select" aria-label="Default select example" value={values.provider_name} name="provider_name" onChange={handleChange}>
                                                            <option selected>Open this select menu</option>
                                                            <option value={"Airtel"}>Airtel</option>
                                                            <option value={"Jio"}>Jio</option>
                                                            <option value={'VI'}>VI</option>
                                                        </select>

                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="Merchant Pay2all *"
                                                            value={values.merchant_pay2all}
                                                            hasError={errors.merchant_pay2all && touched.merchant_pay2all}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.merchant_pay2all}
                                                            autoFocus={true}
                                                            id="merchant_pay2all"
                                                        />
                                                    </div>

                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="Description *"
                                                            value={values.description}
                                                            hasError={errors.description && touched.description}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.description}
                                                            autoFocus={true}
                                                            id="description"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="Slug *"
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
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="Gst_type *"
                                                            value={values.gst_type}
                                                            hasError={errors.gst_type && touched.gst_type}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.gst_type}
                                                            autoFocus={true}
                                                            id="gst_type"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="number"
                                                            placeholder="min_length *"
                                                            value={values.min_length}
                                                            hasError={errors.min_length && touched.min_length}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.min_length}
                                                            autoFocus={true}
                                                            id="min_length"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="number"
                                                            placeholder="max_length *"
                                                            value={values.max_length}
                                                            hasError={errors.max_length && touched.max_length}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.max_length}
                                                            autoFocus={true}
                                                            id="max_length"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="number"
                                                            placeholder="help_line *"
                                                            value={values.help_line}
                                                            hasError={errors.help_line && touched.help_line}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.help_line}
                                                            autoFocus={true}
                                                            id="help_line"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="number"
                                                            placeholder="block_amount *"
                                                            value={values.block_amount}
                                                            hasError={errors.block_amount && touched.block_amount}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.block_amount}
                                                            autoFocus={true}
                                                            id="block_amount"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="meta_title *"
                                                            value={values.meta_title}
                                                            hasError={errors.meta_title && touched.meta_title}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.meta_title}
                                                            autoFocus={true}
                                                            id="meta_title"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="meta_description *"
                                                            value={values.meta_description}
                                                            hasError={errors.meta_description && touched.meta_description}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.meta_description}
                                                            autoFocus={true}
                                                            id="meta_description"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="Meta_keyword *"
                                                            value={values.meta_keyword}
                                                            hasError={errors.meta_keyword && touched.meta_keyword}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.meta_keyword}
                                                            autoFocus={true}
                                                            id="meta_keyword"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <Link to='/provider' className="btn btn-danger light ms-1">Cancel</Link>
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
export default AddProvider