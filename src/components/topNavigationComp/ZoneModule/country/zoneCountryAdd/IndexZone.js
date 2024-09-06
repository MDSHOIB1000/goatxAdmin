import { Tab, Tabs } from "react-bootstrap";
import CountryAddZone from "./ZoneCountryAdd";
import { useEffect, useState } from "react";
import { languageList, zoonById, zoonPost } from "../../../../../api/login/Login";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import Breadcrumbs from "../../../../../common/breadcrumb/Breadcrumbs";

const breadCrumbsTitle = {
    id: "1",
    title_1: "Zone Module",
    title_2: "Country",
    title_3: "Add Country",
}

function IndexZone() {

    const [selectData, SetselectData] = useState([])
    const [tab, setTab] = useState()
    const [language, setlanguage] = useState(null)
    const params = useParams()
    const setInitialdata = () => {
        const data = language?.map((item) => {
            return { name: "", sort_no: "", language_id: item?._id, is_active: false, langName: item?.name, uni_code: '', description: '', meta_title: '', meta_description: '', meta_keyword: '', parent_id: [], area_id: '' }
        })
        SetselectData(data)
    }


    const getLanguageIdTab = async () => {
        const res = await languageList()
        setlanguage(res?.data)
        setTab(res?.data[0]?._id)
    }
    useEffect(() => {
        getLanguageIdTab()
    }, [])

    useEffect(() => {
        const fetchCurrency = async () => {
            try {
                if (params?.id) {
                    const response = await zoonById(params.id);
                    const currencyData = response.data;
                    const data = currencyData?.map((item, i) => {
                        return { id: item.id, name: item.name, sort_no: "", language_id: item?.language_id, is_active: false, langName: item?.name, uni_code: '', description: '', meta_title: '', meta_description: '', meta_keyword: '', parent_id: [], langName: language[i].name, area_id: item.area_id }

                    })
                    // SetselectData(data)
                } else {
                    setInitialdata()
                }
            } catch (error) {
                console.error("Error fetching currency:", error);
            }
        };

        fetchCurrency();
    }, [params?.id, language]);

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
    const toastSuccessMessage = () => {
        toast.success(`${params?.id ? "Update" : "Add"} Zoon Successfully.`, {
            position: "top-center",
        });
    };
    const submitForm = async (values) => {
        console.log(selectData);

        if (params?.id) {

            try {
                // await areaUpdate({ id: params?.id, value: { list: selectData } });
            } catch (error) {

            }
        } else {
            try {
                const res = await zoonPost({ list: selectData });
                toastSuccessMessage();
            } catch (error) {
            }
        }

    };
    return <div>
        <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />

        <div className="row m-4">
            <div className="col-xl-12">
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0">ADD ZONE</h4>
                            </div>
                            <Tabs
                                defaultActiveKey={tab}
                                id="uncontrolled-tab-example"
                                className="mb-3"
                            >
                                {selectData && selectData?.map((item, i) => {
                                    return <Tab eventKey={item?.language_id} title={item?.langName}>
                                        <CountryAddZone item={item} i={i} language={language} languageId={item?.language_id} submitForm={submitForm} handleChangeCus={handleChangeCus} />
                                    </Tab>
                                })}

                            </Tabs>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
}
export default IndexZone