import { Formik } from "formik";
import { Link, useNavigate, useParams } from "react-router-dom";
import Select from 'react-select';
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import CustomInputField from "../../../common/CustomInputField";
import { addRolee, getControler, mainModuleList, updategetId, updatesaddRole } from "../../../api/login/Login";
import { MdDelete, MdDeleteSweep } from "react-icons/md";

const moduleOptions = [
    { value: 'module1', label: 'Module 1' },
    { value: 'module2', label: 'Module 2' },
    { value: 'module3', label: 'Module 3' },
];

function AddRole() {
    const [page, setPage] = useState(0);
    const [count, setCount] = useState(30);
    const navigate = useNavigate();

    const [dataconntriler, setDataconntriler] = useState(null);
    const [addDisable, setAddDisable] = useState(true);
    const [initialValues, setInitialValues] = useState({
        role_name: "",
        slug: '',
        permits: [],
    });

    const [sortNumbers, setSortNumbers] = useState({});
    const [selectedModules, setSelectedModules] = useState([]);
    const [dataModule, setDataModule] = useState(null);

    const params = useParams();

    const handleSortNumberChange = (mainModuleId, subModuleId, value) => {
        setSortNumbers(prev => ({
            ...prev,
            [mainModuleId]: {
                ...prev[mainModuleId],
                [subModuleId]: value
            }
        }));
    };

    const validate = (values) => {
        let errors = {};
        if (!values.role_name) {
            errors.role_name = "Role name is required";
        }
        if (!values.slug) {
            errors.slug = "Slug is required";
        }
        return errors;
    };

    const toastSuccessMessage = () => {
        toast.success(`${params?.id ? "Update" : "Add"} Role Successfully`, {
            position: "top-center",
        });
    };

    const handleModuleChange = (selectedOptions) => {
        setSelectedModules(selectedOptions);
    };

    const curencyidget = async () => {
        try {
            const res = await mainModuleList(page, count);
            const mapped = res?.data?.map((item) => {
                return { ...item, value: item.name, label: item.name };
            });
            setDataModule(mapped);
        } catch (error) {
            alert(error.message);
        }
    };

    const submitForm = async (values) => {
        const permits = dataconntriler?.map((item) => {
            return {
                main_module: {
                    _id: item.main_module._id,
                    name: item.main_module.name,
                    sort_no: sortNumbers[item.main_module._id]?.[''] || '',
                },
                sub_module: item.sub_module?.map((subItem) => {
                    return {
                        _id: subItem._id,
                        name: subItem.name,
                        sort_no: sortNumbers[item.main_module._id]?.[subItem._id] || '',
                    };
                })
            };
        });

        const transformedValues = {
            role_name: values.role_name,
            slug: values.slug,
            permits,
        };

        try {
            if (!params?.id) {
                const res = await addRolee(transformedValues);
                if (res?.statusCode === "200") {
                    toastSuccessMessage();
                    setTimeout(() => {
                        navigate('/list-role');
                    }, 4000);
                }
            } else {
                const res = await updatesaddRole(params.id, transformedValues);
                if (res?.statusCode === "200") {
                    toastSuccessMessage();
                    setTimeout(() => {
                        navigate('/list-role');
                    }, 4000);
                }
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    useEffect(() => {
        curencyidget();
    }, []);

    useEffect(() => {
        const fetchCurrency = async () => {
            try {
                if (params?.id) {
                    const response = await updategetId(params.id);
                    const currencyData = response.data[0];

                    const initialPermits = currencyData.permits.map(permit => ({
                        ...permit,
                        main_module: {
                            ...permit.main_module,
                            sort_no: permit.main_module.sort_no || '',
                        },
                        sub_module: permit.sub_module.map(sub => ({
                            ...sub,
                            sort_no: sub.sort_no || ''
                        })),
                    }));

                    setInitialValues({
                        role_name: currencyData.role_name,
                        slug: currencyData.slug,
                        permits: currencyData.permits,
                    });

                    setDataconntriler(currencyData.permits);

                    setSelectedModules(currencyData.permits.map(permit => ({
                        _id: permit.main_module._id,
                        name: permit.main_module.name,
                        value: permit.main_module.name,
                        label: permit.main_module.name,
                    })));

                    const initialSortNumbers = {};
                    currencyData.permits.forEach(permit => {
                        initialSortNumbers[permit.main_module._id] = {
                            '': permit.main_module.sort_no || '',
                            ...permit.sub_module.reduce((acc, sub) => {
                                acc[sub._id] = sub.sort_no || '';
                                return acc;
                            }, {})
                        };
                    });
                    setSortNumbers(initialSortNumbers);
                }
            } catch (error) {
                console.error("Error fetching currency:", error);
            }
        };

        fetchCurrency();
    }, [params?.id]);

    const getController = async () => {
        try {
            const selectedModuleIds = selectedModules.map(module => module._id);
            const res = await getControler(selectedModuleIds);
            setDataconntriler(res?.data);
            setAddDisable(false);
        } catch (error) {
            console.error("Error fetching controllers:", error);
        }
    };

    const deleteAllSubmodules = (mainModuleId) => {
        setDataconntriler(prevData =>
            prevData.filter(item => item.main_module._id !== mainModuleId)
        );
    };

    const deleteSubmodule = (mainModuleId, subModuleId) => {
        setDataconntriler(prevData => prevData.map(item => {
            if (item.main_module._id === mainModuleId) {
                return {
                    ...item,
                    sub_module: item.sub_module.filter(subItem => subItem._id !== subModuleId)
                };
            }
            return item;
        }));
    };

    const isGetControllerEnabled = () => {
        return initialValues.role_name && initialValues.slug && selectedModules.length > 0;
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
                    } = formik;
                    return (
                        <div className="row mx-3">
                            <div className="col-xl-12">
                                <div className="card">
                                    <div className="card-body p-0">
                                        <div className="table-responsive active-projects style-1">
                                            <div className="tbl-caption tbl-caption-2">
                                                <h4 className="heading mb-0">
                                                    {params?.id ? "UPDATE" : "ADD"} Role
                                                </h4>
                                            </div>
                                            <form className="tbl-captionn" onSubmit={handleSubmit}>
                                                <div className="row">
                                                    <div className="col-xl-3 mb-3">
                                                        <CustomInputField
                                                            type="text"
                                                            placeholder="Enter Add Role"
                                                            value={values.role_name}
                                                            hasError={errors.role_name && touched.role_name}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.role_name}
                                                            autoFocus={true}
                                                            id="role_name"
                                                        />
                                                    </div>
                                                    <div className="col-xl-3 mb-3">
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
                                                    <div className="col-xl-3 mb-3">
                                                        <Select
                                                            id="selectModule"
                                                            closeMenuOnSelect={false}
                                                            className="multi-select-set"
                                                            isMulti
                                                            options={dataModule}
                                                            value={selectedModules}
                                                            onChange={handleModuleChange}
                                                        />
                                                    </div>
                                                    <div className="col-xl-3 mb-3">
                                                        <button
                                                            className="btn btn-primary me-1 get-controller"
                                                            type="button"
                                                            onClick={getController}
                                                            disabled={!values?.role_name || !values?.slug || !values?.permits}
                                                        >
                                                            Get Controller
                                                        </button>
                                                    </div>
                                                </div>
                                                {selectedModules.length > 0 && (
                                                    <div className="row">
                                                        {dataconntriler && dataconntriler.map((item) => (
                                                            <div className="col-xl-4 mb-3" key={item.main_module._id}>
                                                                <div className="row">
                                                                    <div className="col-md-12">
                                                                        <h3 className="set-heading-late text-center p-2 rounded text-white" style={{background:"rgb(46 49 145)"}}>Main Module</h3>
                                                                        <label htmlFor="" className="form-label">{item.main_module.name}</label>
                                                                        <div className="head-combo d-flex align-items-center">
                                                                            <input
                                                                                type="number"
                                                                                name={`sort_no_${item.main_module._id}`}
                                                                                placeholder="Sort Number"
                                                                                value={sortNumbers[item.main_module._id]?.[''] || ''}
                                                                                onChange={(e) => handleSortNumberChange(item.main_module._id, '', e.target.value)}
                                                                                className="form-control"
                                                                            />
                                                                            <button
                                                                                className="btn btn-danger my-3"
                                                                                type="button"
                                                                                onClick={() => deleteAllSubmodules(item.main_module._id)}
                                                                            >
                                                                                <span className="fs-2">
                                                                                    <MdDeleteSweep />
                                                                                </span> <small>All SubModules</small>
                                                                            </button>
                                                                        </div>
                                                                        <h3 className="set-heading-late bg-warning text-center p-2 rounded text-white">Sub Module</h3>
                                                                        {item.sub_module.map((subItem) => (
                                                                            <div className="subModule" key={subItem._id}>
                                                                                
                                                                                <label htmlFor="" className="form-label"><small>{subItem.name}</small></label>
                                                                                <div className="head-combo head-combo d-flex align-items-center my-2">
                                                                                    <input
                                                                                        type="number"
                                                                                        name={`sort_no_${item.main_module._id}_${subItem._id}`}
                                                                                        placeholder="Sort Number"
                                                                                        value={sortNumbers[item.main_module._id]?.[subItem._id] || ''}
                                                                                        onChange={(e) => handleSortNumberChange(item.main_module._id, subItem._id, e.target.value)}
                                                                                        className="form-control"
                                                                                    />
                                                                                    <button
                                                                                        className="btn btn-danger"
                                                                                        type="button"
                                                                                        onClick={() => deleteSubmodule(item.main_module._id, subItem._id)}
                                                                                    >
                                                                                        <span className="fs-2"><MdDelete /></span>
                                                                                    </button>
                                                                                </div>
                                                                            </div>
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}

                                                <div className="col-xl-4 mb-3">
                                                    <Link to='/list-role' className="btn btn-danger light ms-1">Cancel</Link>
                                                    <button
                                                        className="btn btn-primary me-1"
                                                        type="submit"
                                                        disabled={params.id ? null : !isValid || !dirty || addDisable}
                                                    >
                                                        {params?.id ? "Update" : "Add"}
                                                    </button>
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
    );
}

export default AddRole;
