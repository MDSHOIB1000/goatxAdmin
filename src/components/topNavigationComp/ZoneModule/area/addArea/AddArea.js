import { useEffect, useState } from "react";
import { Formik } from "formik";
import { Link, useParams } from "react-router-dom"
import CustomInputField from "../../../../../common/CustomInputField";
import CustomDropdown from "../../../../../common/CustomDropdown";
import Breadcrumbs from "../../../../../common/breadcrumb/Breadcrumbs";
import { areaAdd, areaUpdate, getarea, languageList } from "../../../../../api/login/Login";
import { ToastContainer, toast } from "react-toastify";
import TabAddAreaForm from "./TabAddAreaForm";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


const breadCrumbsTitle = {
    id: "1",
    title_1: "Zone Module",
    title_2: "Area",
    title_3: "Add Area",
}

function AddArea() {
    const params = useParams()
    const [language, setlanguage] = useState(null)
    const [tab, setTab] = useState()
    const [data, SetData] = useState()
    const [selectData, SetselectData] = useState([])


    const getLanguageIdTab = async () => {
        const res = await languageList()
        // console.log(res);
        setlanguage(res?.data)
        setTab(res?.data[0]?._id)
    }

    const createInitailData = (language) => {
        const data = []
        const createInital = language.map(() => {

        })
    }

    useEffect(() => {
        getLanguageIdTab()
    }, [])

    const toastSuccessMessage = () => {
        toast.success(`${params?.id ? "Update" : "Add"} Area Successfully.`, {
            position: "top-center",
        });
    };


    const setInitialdata = () => {
        const data = language?.map((item) => {
            return { name: "", level: "", language_id: item?._id, is_active: false, langName: item?.name }
        })
        SetselectData(data)
    }


    useEffect(() => {
        const fetchCurrency = async () => {
            try {
                if (params?.id) {
                    const response = await getarea(params.id);
                    const currencyData = response.data;
                    const data = currencyData?.map((item, i) => {
                        return { id: item.id, name: item.name, level: item.level, language_id: item?.language_id, is_active: item.is_active ? item.is_active : false, langName: language[i].name }
                    })
                    SetselectData(data)
                } else {
                    setInitialdata()
                }
            } catch (error) {
                console.error("Error fetching currency:", error);
            }
        };

        fetchCurrency();
    }, [params?.id, language]);


    const submitForm = async (values) => {
        if (params?.id) {

            try {
                await areaUpdate({ id: params?.id, value: { list: selectData } });
                // if (res?.statusCode == "200") {
                //     toastSuccessMessage();
                // }

            } catch (error) {

            }
        } else {
            try {
                const res = await areaAdd({ list: selectData });
                toastSuccessMessage();
            } catch (error) {
            }
        }

    };

    const handleChangeCus = (e, id) => {
        const maped = selectData.map((item) => {
            if (item.language_id == id) {
                const obj = { ...item, [e.target.name]: e.target.value }
                return obj
            } else {
                return item
            }
        })
        SetselectData(maped)
    }


    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0">
                                        {params?.id ? "UPDATE" : "ADD"}
                                         AREA MASTER
                                    </h4>
                                </div>

                                <Tabs
                                    defaultActiveKey={tab}
                                    id="uncontrolled-tab-example"
                                    className="mb-3"
                                >
                                    {selectData && selectData?.map((item, i) => {
                                        return <Tab eventKey={item?.language_id} title={item?.langName}>
                                            <TabAddAreaForm i={i} language={language} item={item} languageId={item?.language_id} submitForm={submitForm} handleChangeCus={handleChangeCus} />
                                        </Tab>
                                    })}

                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </div>

        </>
    )
}
export default AddArea