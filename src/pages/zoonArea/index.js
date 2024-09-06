import { useEffect, useState } from "react";
import { ZoonFilter, ZoonFilterSec, getAreaZoon } from "../../api/login/Login";

function ZoonArea() {

    const [data, setData] = useState(null);
    const [secCountry, setsecCountry] = useState(null)
    const [secState, setsecState] = useState(null)
    const getData = async () => {
        try {
            const res = await getAreaZoon()
            setData(res.data);
        } catch (error) {
            alert("Server Error Failed To load Data");
        }
    };

    useEffect(() => {
        getData();
    }, []);

    const onchageHandle = async (e) => {
        const maped = data.find((item) => {
            return item.id == e.target.value
        })
        if (!maped) {
            return
        }
        try {
            const res = await ZoonFilter({ areaid: [maped.id], level: [maped.level] })
            setsecCountry(res.data)
        } catch (error) {
            alert('Error Somthing Went Wrong')
        }
    }

    const onchageHandleSec = async (e) => {
        const maped = secCountry.find((item) => {
            return item.sortNo == e.target.value
        })
        if (!maped) {
            return
        }
        try {
            const res = await ZoonFilterSec({ zone: [maped.sortNo], area: [] })
            setsecState(res.data)
        } catch (error) {
            alert('Error Somthing Went Wrong')
        }
    }
    return <div>
        <div className="PageHeading">
            <h1 style={{ textAlign: "center", marginTop: "10px", fontSize: '25px' }}>Zoon & Area</h1>
        </div>
        <div className="ContentArea">
            <div className=" container ">
                <div className="card-body row maincs">
                    <div className="col-5">
                        <select className="form-select" onChange={onchageHandle} aria-label="Default select example">
                            <option selected>Open this selecter</option>
                            {data && data?.map((item) => {
                                return <option value={item.id}>{item?.name}</option>
                            })}

                        </select>
                    </div>
                    {secCountry?.length && <div className="col-5"> <select onChange={onchageHandleSec} className="form-select" aria-label="Default select example">
                        <option selected>Open this select Country</option>
                        {secCountry && secCountry?.map((item) => {
                            return <option value={item.sortNo}>{item?.name}</option>
                        })}

                    </select></div>}
                    {secState?.length && <div className="col-5"> <select onChange={onchageHandleSec} className="form-select" aria-label="Default select example">
                        <option selected>Open this select State</option>
                        {secState && secState?.map((item) => {
                            return <option value={item.area_id}>{item?.name}</option>
                        })}

                    </select></div>}
                </div>
            </div>
        </div>

    </div>
}
export default ZoonArea