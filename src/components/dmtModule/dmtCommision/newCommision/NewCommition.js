import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { PostComitionVs, getOperater, getOperater4, getdmtcomm3, relatedService } from '../../../../api/login/Login';
import Loadar from '../../../../common/loader/Loader';
import { ToastContainer, toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

const initialOperators = [
    {
        id: 1,
        name: 'Airtel JK',
        type: 'Prepaid',
        values: {
            general: {
                re: { charge_type: "S", trans_type: "P", amt: 0 },
                dist: { charge_type: "S", trans_type: "P", amt: 0 },
                sdist: { charge_type: "S", trans_type: "P", amt: 0 },
                wluser: { charge_type: "S", trans_type: "P", amt: 0 },
                cus: { charge_type: "S", trans_type: "P", amt: 0 },
            },
            real: {
                re: { charge_type: "S", trans_type: "P", amt: 0 },
                dist: { charge_type: "S", trans_type: "P", amt: 0 },
                sdist: { charge_type: "S", trans_type: "P", amt: 0 },
                wluser: { charge_type: "S", trans_type: "P", amt: 0 },
                cus: { charge_type: "S", trans_type: "P", amt: 0 },
            }
        }
    },
    {
        id: 2,
        name: 'Bsnl - Special Tariff',
        type: 'Prepaid',
        values: {
            general: {
                re: { charge_type: "S", trans_type: "P", amt: 0 },
                dist: { charge_type: "S", trans_type: "P", amt: 0 },
                sdist: { charge_type: "S", trans_type: "P", amt: 0 },
                wluser: { charge_type: "S", trans_type: "P", amt: 0 },
                cus: { charge_type: "S", trans_type: "P", amt: 0 },
            },
            real: {
                re: { charge_type: "S", trans_type: "P", amt: 0 },
                dist: { charge_type: "S", trans_type: "P", amt: 0 },
                sdist: { charge_type: "S", trans_type: "P", amt: 0 },
                wluser: { charge_type: "S", trans_type: "P", amt: 0 },
                cus: { charge_type: "S", trans_type: "P", amt: 0 },
            }
        }
    }
];

const NewCommition = () => {
    const [services, setServices] = useState([]);
    const [operators, setOperators] = useState([]);
    const [CommisionSchema, setCommisionSchema] = useState([]);
    const [selectedServiceSchema, setSelectedServiceSchema] = useState();
    const [loader, setLoader] = useState(false);
    const [serviceid, setServiceid] = useState('');

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const response = await relatedService();
                const userTypeData = response.data;
                setServices(userTypeData);
            } catch (error) {
                console.error("Error fetching User type:", error);
            }
        };
        fetchServices();
    }, []);

    const changeValue = (e, index, valueType, key, field) => {
        const updatedOperators = [...operators];
        updatedOperators[index].values[valueType][key][field] = e.target.value;
        setOperators(updatedOperators);
    };

    const handleRadioChange = (e, index, valueType, key, field) => {
        const updatedOperators = [...operators];
        updatedOperators[index].values[valueType][key][field] = e.target.value;
        setOperators(updatedOperators);
    };

    // New function to handle copying to all
    const copyToAll = (index, valueType, key) => {
        const updatedOperators = [...operators];
        const sourceValue = updatedOperators[index].values[valueType][key];

        updatedOperators.forEach((operator) => {
            operator.values[valueType][key] = { ...sourceValue };
        });

        setOperators(updatedOperators);
    };

    const copyAllValues = () => {
        if (operators.length === 0) return;
        
        const firstOperator = operators[0];
        const updatedOperators = operators.map((operator, index) => {
          if (index === 0) return operator;
          return {
            ...operator,
            values: {
              general: JSON.parse(JSON.stringify(firstOperator.values.general)),
              real: JSON.parse(JSON.stringify(firstOperator.values.real))
            }
          };
        });
        
        setOperators(updatedOperators);
      };
    const getDataServiceSet = async (e) => {
        setLoader(true);
        if (serviceid == '') {
            setOperators([]);
            setLoader(false);
            return;
        }
        try {
            const serviceOperators = await getOperater4({ service_id: serviceid, id: selectedServiceSchema });
            const maped = serviceOperators.data.map((item) => {
                return { ...item, values: { general: item?.general, real: item?.real }};
            })
            setLoader(false);
            setOperators(maped);
        } catch (error) {
            setLoader(false);
        }
    };

    const getDataService = async (e) => {
        const serviceId = e.target.value;
        setServiceid(serviceId);
        const serviceOperators2 = await getdmtcomm3({ start_date: null, end_date: null, service_id: serviceId, page: 0, count: 100 });
        setCommisionSchema(serviceOperators2?.data);

    };

    const params = useParams()

    const toastSuccessMessage = () => {
        toast.success(`Commission ${params?.id ? "Update" : "Add"}  Successfully.`, {
            position: "top-center",
        });
    };

    const toastErrorMessage = () => {
        toast.error(`Commission ${params?.id ? "Update" : "Add"}   Failed.`, {
            position: "top-center",
        });
    };

    const SendData = async () => {
        const clone = [...operators];
        setLoader(true);
        const mapped = clone.map((item) => {
            return { operator_id: item.operator_id, service_id: serviceid, commision_Schema: selectedServiceSchema, general: item?.values?.general, real: item?.values?.real }
        });
        try {
            const res = await PostComitionVs({ list: mapped });
            if (res.statusCode == 200) {
                setLoader(false);
                toastSuccessMessage();
            } else {
                setLoader(false);
                toastErrorMessage()
            }
        } catch (error) {
            setLoader(false);
        }
        setLoader(false);
    };
    return (
        <div className="Apps card">
            <ToastContainer />
            {loader && <Loadar />}
            <h1>Commission Details</h1>
            <div className='divbyu'>
                <h4 style={{ color: "black", fontWeight: "700" }}>Note : </h4>
                <h4 className="cGroup1">C : Commission</h4>
                <h4 className="sGroup1">S : Surcharges</h4>
                <h4 className="pGroup1">P : Percentage</h4>
                <h4 className="fGroup1">F : Flat Amount</h4>
            </div>
            <div className="top-controls cusformsnew">
                <select className="form-select" aria-label="Default select example" style={{ margin: "0 6px" }} id="service_id" name="service_id" onChange={getDataService}>
                    <option value=''> Select Service</option>
                    {services && services.map((item) => (
                        
                        <option key={item?._id} value={item?._id}>{item?.service_name}</option>
                    ))}
                </select>

                <input type="search" placeholder="Search" className="search-input form-control " />
                <div className="top-buttons d-flex">
                    <button type="button" className="btn btn-primary">C</button>
                    <button type="button" className="btn btn-secondary">S</button>
                    <button type="button" className="btn btn-success">P</button>
                    <button type="button" className="btn btn-danger">F</button>
                </div>
                <select className="form-select" aria-label="Default select example" value={selectedServiceSchema} onChange={(e) => { setSelectedServiceSchema(e.target.value) }}>
                    <option selected="">Select Commision Schema </option>
                    {CommisionSchema && CommisionSchema.map((item) => (
                        <option key={item?._id} value={item?._id}>{item?.name}</option>
                    ))}
                </select>
                <button className="set-button btn btn-primary" onClick={getDataServiceSet}>SET</button>
                
            </div>
            <div className='col-12 mt-1 mb-1' style={{display:'flex',justifyContent:'end'}}>
                <button className="copy-all-button btn btn-info" onClick={copyAllValues}>Copy First Row to All</button>
                </div>
            <table className="tariff-table">
    <thead>
        <tr>
            <th>S.No</th>
            <th>Operator</th>
            <th></th>
            <th>Retailer</th>
            <th>Distributor</th>
            <th>Super Distributor</th>
            <th>White Label User</th>
            <th>Customer</th>
        </tr>
    </thead>
    <tbody>
        {operators.map((operator, i) => (
            <React.Fragment key={operator.id}>
                <tr>
                    <td>{i + 1}</td>
                    <td>
                        <div>{operator.name}</div>
                        <div>{operator.type}</div>
                    </td>
                    <td>General</td>
                    {Object.keys(operator.values.general).map((key) => (
                        <td key={key}>
                            <input
                                type="number"
                                className="input-field"
                                onChange={(e) => changeValue(e, i, 'general', key, 'amt')}
                                value={operator.values.general[key].amt}
                            />
                            <div className="buttons">
                                <Form>
                                    {['radio'].map((type) => (
                                        <div key={`reverse-${type}`} className="mb-3">
                                            <Form.Check
                                                reverse
                                                label="C"
                                                name={`charge_type_general_${i}_${key}`}
                                                className='cGroup'
                                                type={type}
                                                id={`reverse-${type}-1`}
                                                checked={operator.values.general[key].charge_type === 'C'}
                                                value="C"
                                                onChange={(e) => handleRadioChange(e, i, 'general', key, 'charge_type')}
                                            />
                                            <Form.Check
                                                reverse
                                                label="S"
                                                name={`charge_type_general_${i}_${key}`}
                                                className='sGroup'
                                                type={type}
                                                id={`reverse-${type}-2`}
                                                checked={operator.values.general[key].charge_type === 'S'}
                                                value="S"
                                                onChange={(e) => handleRadioChange(e, i, 'general', key, 'charge_type')}
                                            />
                                        </div>
                                    ))}
                                </Form>
                                <Form>
                                    {['radio'].map((type) => (
                                        <div key={`reverse-${type}`} className="mb-3">
                                            <Form.Check
                                                reverse
                                                label="P"
                                                name={`trans_type_general_${i}_${key}`}
                                                className='pGroup'
                                                type={type}
                                                id={`reverse-${type}-1`}
                                                checked={operator.values.general[key].trans_type === 'P'}
                                                value="P"
                                                onChange={(e) => handleRadioChange(e, i, 'general', key, 'trans_type')}
                                            />
                                            <Form.Check
                                                reverse
                                                label="F"
                                                className='fGroup'
                                                name={`trans_type_general_${i}_${key}`}
                                                type={type}
                                                id={`reverse-${type}-2`}
                                                checked={operator.values.general[key].trans_type === 'F'}
                                                value="F"
                                                onChange={(e) => handleRadioChange(e, i, 'general', key, 'trans_type')}
                                            />
                                        </div>
                                    ))}
                                </Form>
                            </div>
                           
                        </td>
                    ))}
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>Real</td>
                    {Object.keys(operator.values.real).map((key) => (
                        <td key={key}>
                            <input
                                type="number"
                                className="input-field"
                                onChange={(e) => changeValue(e, i, 'real', key, 'amt')}
                                value={operator.values.real[key].amt}
                            />
                            <div className="buttons">
                                <Form>
                                    {['radio'].map((type) => (
                                        <div key={`reverse-${type}`} className="mb-3">
                                            <Form.Check
                                                reverse
                                                label="C"
                                                name={`charge_type_real_${i}_${key}`}
                                                className='cGroup'
                                                type={type}
                                                id={`reverse-${type}-1`}
                                                checked={operator.values.real[key].charge_type === 'C'}
                                                value="C"
                                                onChange={(e) => handleRadioChange(e, i, 'real', key, 'charge_type')}
                            />
                                            <Form.Check
                                                reverse
                                                label="S"
                                                name={`charge_type_real_${i}_${key}`}
                                                className='sGroup'
                                                type={type}
                                                id={`reverse-${type}-2`}
                                                checked={operator.values.real[key].charge_type === 'S'}
                                                value="S"
                                                onChange={(e) => handleRadioChange(e, i, 'real', key, 'charge_type')}
                                            />
                                        </div>
                                    ))}
                                </Form>
                                <Form>
                                    {['radio'].map((type) => (
                                        <div key={`reverse-${type}`} className="mb-3">
                                            <Form.Check
                                                reverse
                                                label="P"
                                                name={`trans_type_real_${i}_${key}`}
                                                className='pGroup'
                                                type={type}
                                                id={`reverse-${type}-1`}
                                                checked={operator.values.real[key].trans_type === 'P'}
                                                value="P"
                                                onChange={(e) => handleRadioChange(e, i, 'real', key, 'trans_type')}
                                            />
                                            <Form.Check
                                                reverse
                                                label="F"
                                                className='fGroup'
                                                name={`trans_type_real_${i}_${key}`}
                                                type={type}
                                                id={`reverse-${type}-2`}
                                                checked={operator.values.real[key].trans_type === 'F'}
                                                value="F"
                                                onChange={(e) => handleRadioChange(e, i, 'real', key, 'trans_type')}
                                            />
                                        </div>
                                    ))}
                                </Form>
                            </div>
                            
                        </td>
                    ))}
                </tr>
            </React.Fragment>
        ))}
    </tbody>
</table>
<div className='col-12 mt-2' style={{display:'flex',justifyContent:'center'}}>
            <button type="button" className="btn btn-success" style={{ width: "120px", margin: "10 auto" }} onClick={SendData}>Save</button>
            </div>
        </div>
    );
};

export default NewCommition;