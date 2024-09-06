import { Formik } from "formik";
import { Link, useNavigate, useParams } from "react-router-dom";
import CustomInputField from "../../../../../common/CustomInputField";
import WithoutAtricCustomInputField from "../../../../../common/withoutAtrricCustomInp/WithoutAtricCustomInputField";
import Breadcrumbs from "../../../../../common/breadcrumb/Breadcrumbs";
import { Tab, Tabs } from "react-bootstrap";
import { useEffect, useState } from "react";
import { ServiceCategoryUpdate, getServiceCategoryId, languageList, serviceCategoryAdd } from "../../../../../api/login/Login";
import { ToastContainer, toast } from "react-toastify";

const breadCrumbsTitle = {
    id: "1",
    title_1: "Master",
    title_2: "Service Category Master",
    title_3: "Add Service Category Master",
};

function AddServiceCategoryMaster() {
    const [language, setLanguage] = useState(null);
    const [tab, setTab] = useState();
    const [selectData, setSelectData] = useState([]);
    const params = useParams();
    const navigate = useNavigate();
    

    const initialValues = {
        name: '',
        meta_title: '',
        meta_description: '',
        meta_keyword: '',
        language_id: '',
        is_active: ''
    };

    const validate = (values) => {
        let errors = {};
        if (!values.name) {
            errors.name = "Name is required";
        }
        if (!values.is_active) {
            errors.is_active = "Status is required";
        }
        return errors;
    };

    const toastSuccessMessage = () => {
        toast.success(`${params?.id ? "Update" : "Add"} Stream Successfully.`, {
            position: "top-center",
        });
    };

    const submitForm = async (values) => {
        try {
            if (!params?.id) {
                const res = await serviceCategoryAdd({ list: selectData });
                if (res?.statusCode === "200") {
                    toastSuccessMessage();
                    setTimeout(() => {
                        navigate('/stream-master');
                    }, 4000);
                }
            } else {
                const res = await ServiceCategoryUpdate(params?.id, { list: selectData });
                if (res?.statusCode === "200") {
                    toastSuccessMessage();
                    setTimeout(() => {
                        navigate('/stream-master');
                    }, 4000);
                }
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const handleChange1 = (e, id) => {
        const updatedData = selectData.map((item) => {
            if (item.language_id === id) {
                return { ...item, [e.target.name]: e.target.value };
            }
            return item;
        });
        setSelectData(updatedData);
    };

    const getLanguageIdTab = async () => {
        const res = await languageList();
        setLanguage(res?.data);
        setTab(res?.data[0]?._id);
    };

    const initialData = () => {
        const data = language?.map((item) => {
            return { ...initialValues, language_id: item?._id, langName: item?.name };
        });
        setSelectData(data);
    };

    useEffect(() => {
        getLanguageIdTab();
    }, []);

    useEffect(() => {
        const fetchCurrency = async () => {
            try {
                if (params?.id) {
                    const response = await getServiceCategoryId(params.id);
                    const currencyData = response.data;
                    const data = currencyData?.map((item, i) => {
                        return { id: item.id, name: item.name, meta_title: item.meta_title, meta_description: item.meta_description, meta_keyword: item.meta_keyword, language_id: item?.language_id, is_active: item.is_active ? item.is_active : false, langName: language[i].name };
                    });
                    setSelectData(data);
                } else {
                    initialData();
                }
            } catch (error) {
                console.error("Error fetching currency:", error);
            }
        };

        fetchCurrency();
    }, [params?.id, language]);

    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0">{params.id ? "Update" : "ADD"} STREAM</h4>
                                </div>

                                <Tabs
                                    defaultActiveKey={tab}
                                    id="uncontrolled-tab-example"
                                    className="mb-3"
                                >
                                    {selectData && selectData.map((item, i) => (
                                        <Tab key={item?.language_id} eventKey={item?.language_id} title={item?.langName}>
                                            <Formik
                                                initialValues={item}
                                                validate={validate}
                                                onSubmit={submitForm}
                                                enableReinitialize
                                            >
                                                {(formik) => {
                                                    const {
                                                        handleSubmit,
                                                        errors,
                                                        touched,
                                                        handleBlur,
                                                    } = formik;
                                                    return (
                                                        <form className="tbl-captionn" onSubmit={handleSubmit}>
                                                            <div className="row">
                                                                <div className="col-xl-6 mb-3">
                                                                    <CustomInputField
                                                                        type="text"
                                                                        placeholder="Name "
                                                                        value={item?.name}
                                                                        hasError={errors.name && touched.name}
                                                                        onChange={(e) => handleChange1(e, item?.language_id)}
                                                                        onBlur={handleBlur}
                                                                        errorMsg={errors.name}
                                                                        autoFocus={true}
                                                                        id="name"
                                                                        name="name"
                                                                    />
                                                                </div>
                                                                <div className="col-xl-6 mb-3">
                                                                    <WithoutAtricCustomInputField
                                                                        type="text"
                                                                        placeholder="Meta Title "
                                                                        value={item?.meta_title}
                                                                        hasError={errors.meta_title && touched.meta_title}
                                                                        onChange={(e) => handleChange1(e, item?.language_id)}
                                                                        onBlur={handleBlur}
                                                                        errorMsg={errors.meta_title}
                                                                        autoFocus={true}
                                                                        id="meta_title"
                                                                        name="meta_title"
                                                                    />
                                                                </div>
                                                                <div className="col-xl-6 mb-3">
                                                                    <WithoutAtricCustomInputField
                                                                        type="text"
                                                                        placeholder="Meta Description "
                                                                        value={item?.meta_description}
                                                                        hasError={errors.meta_description && touched.meta_description}
                                                                        onChange={(e) => handleChange1(e, item?.language_id)}
                                                                        onBlur={handleBlur}
                                                                        errorMsg={errors.meta_description}
                                                                        autoFocus={true}
                                                                        id="meta_description"
                                                                        name="meta_description"
                                                                    />
                                                                </div>
                                                                <div className="col-xl-6 mb-3">
                                                                    <WithoutAtricCustomInputField
                                                                        type="text"
                                                                        placeholder="Meta keyword "
                                                                        value={item?.meta_keyword}
                                                                        hasError={errors.meta_keyword && touched.meta_keyword}
                                                                        onChange={(e) => handleChange1(e, item?.language_id)}
                                                                        onBlur={handleBlur}
                                                                        errorMsg={errors.meta_keyword}
                                                                        autoFocus={true}
                                                                        id="meta_keyword"
                                                                        name="meta_keyword"
                                                                    />
                                                                </div>

                                                                <div className="col-xl-6 mb-3">
                                                                    <select className="form-select" aria-label="Default select example" name="is_active" value={item.is_active} onChange={(e) => handleChange1(e, item?.language_id)}>
                                                                        <option value="">Select Status</option>
                                                                        <option value={true}>Active</option>
                                                                        <option value={false}>In Active</option>
                                                                    </select>
                                                                    {errors.is_active && touched.is_active && (
                                                                        <div className="error">{errors.is_active}</div>
                                                                    )}
                                                                </div>

                                                            </div>
                                                            <div>
                                                                <Link to='/stream-master' className="btn btn-danger light ms-1">Cancel</Link>
                                                                <button type="submit" className="btn btn-primary me-1">
                                                                    {params.id ? "Update" : "ADD"}
                                                                </button>
                                                            </div>
                                                        </form>
                                                    );
                                                }}
                                            </Formik>
                                        </Tab>
                                    ))}
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </>
    );
}

export default AddServiceCategoryMaster;
