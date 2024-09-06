import { Link, useNavigate, useParams } from "react-router-dom"
import Breadcrumbs from "../../../../../common/breadcrumb/Breadcrumbs";
import { useEffect, useState } from "react";
import { addServiceMaster, clodinaryImage, getCourseTypeForCombo, getServiceCategory, getServiceMaster, getServiceMasterId, languageList, updateServiceMaster } from "../../../../../api/login/Login";
import { Tab, Tabs } from "react-bootstrap";
import TabAddServiceMaster from "./tabAddServicemaster/TabAddServiceMaster";
import { ToastContainer, toast } from "react-toastify";
import { baseUrl } from "../../../../../baseUrl";
import NewtabAddServiceMaster from "./NewtabAddServiceMaster";
const breadCrumbsTitle = {
    id: "1",
    title_1: "Master",
    title_2: "Course",
    title_3: "Add Course",
}


function AddServiceMaster() {
    const [language, setLanguage] = useState(null);
    const [service_category, set_serviceCateg] = useState(null);
    const [course_type, setCourseTypeState] = useState();
    const [tab, setTab] = useState();
    const [selectData, setSelectData] = useState([]);
    const [profileImage, setProfileImage] = useState();
    const params = useParams()
    const [formData, setFormData] = useState({});
    const navigate = useNavigate()
    const initialValues = {
        service_name: '',
        service_image: "",
        slug: "",
        service_charge: 100,
        bbps: 1,
        background_color: "",
        order_by: null,
        service_category: '',
        short_description: "",
        full_description: "",
        icon: "",
        banner_img: "",
        area_id: "",
        meta_title: "",
        meta_description: "",
        meta_keyword: "",
        meta_image: "",
        language_id: "",
        is_active: "",
        course_type: "",
        duration_type: "",/* ["Day", "Week", "Month", "Year"] */
        duration: null,
    }


    const validate = (values) => {
        let errors = {};
        if (!values.service_name) {
            errors.service_name = "Service Name is required";
        }
        if (!values.order_by) {
            errors.order_by = "code  is required";
        }
        if (!values.short_description) {
            errors.short_description = "Short Description is required";
        }
        if (!values.full_description) {
            errors.full_description = "Full Description is required";
        }
        /*  if (!values.icon) {
             errors.icon = "Icon Image is required";
         } */
        /*  if (!values.banner_img) {
             errors.banner_img = "Banner Image is required";
         } */
        if (!values.permit_by_area) {
            errors.permit_by_area = "Permit By Area is required";
        }
        if (!values.meta_title) {
            errors.meta_title = "Meta Title  is required";
        }
        if (!values.meta_description) {
            errors.meta_description = "Meta Description  is required";
        }
        if (!values.meta_keyword) {
            errors.meta_keyword = "Meta Keyword   is required";
        }
        if (!values.service_category) {
            errors.service_category = "service category   is required";
        }
        if (!values.course_type) {
            errors.course_type = "Course Type   is required";
        }
        /* if (!values.meta_image) {
            errors.meta_image = "Meta Image  is required";
        } */
        return errors;
    };

    const toastSuccessMessage = () => {
        toast.success(`${params?.id ? "Update" : "Add"} Course Successfully.`, {
            position: "top-center",
        });
    };

    const initialData = () => {
        if (language) {
            const data = language?.map((item) => {
                return { ...initialValues, language_id: item?._id, langName: item?.name };
            });
            setSelectData(data);

        } else {
            const data = [{ ...initialValues, language_id: 22, langName: 'English' }];
            setSelectData(data);
        }

    };

    const submitForm = async (formData) => {
        try {
            const dataToSend = Object.values(selectData).map(item => ({
                ...item,
                ...formData[item.language_id]
            }));

            if (!params?.id) {
                const res = await addServiceMaster({ list: dataToSend });
                if (res?.statusCode == "200") {
                    toastSuccessMessage();
                    setTimeout(() => {
                        navigate('/course-master')
                    }, 4000)
                }
            } else {
                await updateServiceMaster(params?.id, { list: dataToSend });
                toastSuccessMessage();
                setTimeout(() => {
                    navigate('/course-master')
                }, 4000)
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const handleChangeCus = (e, id) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [id]: {
                ...prevData[id],
                [name]: value
            }
        }));
    };

    const getLanguageIdTab = async () => {
        const res = await languageList();
        setLanguage(res?.data);
        setTab(res?.data[0]?._id);
    };


    const getServicesCategory = async () => {
        const _serviceCategoery = await getServiceCategory()
        set_serviceCateg(_serviceCategoery?.data);
    }
    const getCourseType = async () => {
        const CourseType = await getCourseTypeForCombo()
        setCourseTypeState(CourseType?.data);
    }


    useEffect(() => {
        getLanguageIdTab();
        getServicesCategory()
        getCourseType()
    }, []);



    useEffect(() => {
        const fetchCurrency = async () => {
            try {
                if (params?.id) {
                    const response = await getServiceMasterId(params.id);
                    const serviceData = response.data;
                    const data = serviceData?.map((item, i) => {
                        return { id: item.id, service_name: item.service_name, meta_title: item.meta_title, full_description: item.full_description, short_description: item.short_description, meta_keyword: item.meta_keyword, language_id: item?.language_id, is_active: item.is_active ? item.is_active : false, langName: language[i].name, ...item }
                    })
                    setSelectData(data)
                } else {
                    initialData();
                }
            } catch (error) {
                console.error("Error fetching currency:", error);
            }
        };

        fetchCurrency();
    }, [params?.id, language]);

    const imgs = new FormData();
    const colodinaryImage = async (e, id) => {
        imgs.append("image", e.target.files[0]);
        if (e.target.name == 'icon') {
            try {
                const res = await clodinaryImage(imgs)
                setProfileImage(res?.data?.data?.url)
                // const updatedData = selectData.map((item) => {
                //     if (item.language_id === id) {
                //         return { ...item, icon: res?.data?.data?.url };
                //     }
                //     return item;
                // });
                // setSelectData(updatedData);
            } catch (error) {

            }

        } else {
            try {
                const res = await clodinaryImage(imgs)
                setProfileImage(res?.data?.data?.url)
                // const updatedData = selectData.map((item) => {
                //     if (item.language_id === id) {
                //         return { ...item, banner_img: res?.data?.data?.url };
                //     }
                //     return item;
                // });
                // setSelectData(updatedData);
            } catch (error) {

            }
        }

    }
    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <ToastContainer />
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0">{params.id ? "UPDATE" : 'ADD'} COURSE</h4>
                                </div>
                                <Tabs
                                    defaultActiveKey={tab}
                                    id="uncontrolled-tab-example"
                                    className="mb-3"
                                >
                                    {selectData && selectData?.map((item, i) => {
                                        return <Tab eventKey={item?.language_id} title={item?.langName}>
                                            {/* <TabAddServiceMaster i={i} colodinaryImage={colodinaryImage} language={language} item={item} languageId={item?.language_id} submitForm={submitForm} handleChangeCus={handleChangeCus} service_category={service_category} params={params} validate={validate} /> */}
                                            <NewtabAddServiceMaster i={i} colodinaryImage={colodinaryImage} language={language} item={formData[item.language_id] || item} languageId={item?.language_id} submitForm={submitForm} handleChangeCus={handleChangeCus} service_category={service_category} params={params} validate={validate} course_type={course_type} />
                                        </Tab>
                                    })}

                                </Tabs>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AddServiceMaster