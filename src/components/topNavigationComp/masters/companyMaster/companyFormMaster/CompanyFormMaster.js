import { Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import CustomInputField from '../../../../../common/CustomInputField';
import { Button } from 'antd';
import Breadcrumbs from '../../../../../common/breadcrumb/Breadcrumbs';
// import { addTypes_Of_AffilatedBy_Master, getAffilatedBy_MasterId,updateTypes_Of_AffilatedBy_Master } from '../../../../../api/login/Login';
import { toast } from 'react-toastify';
import { MdDelete } from 'react-icons/md';
import { IoMdAddCircle } from 'react-icons/io';
import { addCompany, cityAddCollageSelectList, CompanyTypeList, countryList, getStateMaster, getupdateCompanyId, languageList, StateAddCollageSelectList, updateCompany } from '../../../../../api/login/Login';

function CompanyFormMaster() {
    const breadCrumbsTitle = {
        title_1: "master",
        title_2: "Company Type",
    }
    const [initialValues, setInitialValues] = useState(
        {
            alias: "",
            directory: "",
            primary_mailing_name: "",
            address_line1: "",
            address_line2: "",
            state: "",
            city: "",
            country: "",
            faxNo: "",
            staffname: "",
            website: [],
            financialYear: "",
            bookBeginning: "",
            useSecurityCtrl: false,
            baseCurrencyInfo: "",
            formatName: "",
            suffixSymbol: false,
            addSpaceBet: false,
            amountInMil: false,
            numberOfDecimal: 0,
            vouPrefix: "",
            vouSequence: 0,
            language_id: "",
            name: "",
            mobile: "",
            email: "",
            password: "",
            companyType: "",
            domains: ["URL"],
            isActive: false
        }
    );
    const [language, setLanguage] = useState()
    const [company, setCompanyType] = useState()
    const [countryState, SetCountryState] = useState();
    const [countryWiseState, setCountryWiseState] = useState();
    // --------------------------------------------------------------------------------

    const [stateWiseCity, setStateWisecCity] = useState();
    // --------------------------------------------------------------------------------


    const params = useParams();
    const navigate = useNavigate()
    const validate = (values) => {
        let errors = {};

        /* if (!values.name) {
            errors.name = "Company Name is required";
        }
        if (!values.alias) {
            errors.alias = "Alias is required";
        }
        if (!values.directory) {
            errors.directory = "Directory is required";
        }
        if (!values.primary_mailing_name) {
            errors.primary_mailing_name = "Primary Mailing Name is required";
        }
        if (!values.address_line1) {
            errors.address_line1 = "Address Line 1 is required";
        }
        if (!values.state) {
            errors.state = "State is required";
        }
        if (!values.city) {
            errors.city = "City is required";
        }
        if (!values.country) {
            errors.country = "Country is required";
        }
        if (!values.faxNo) {
            errors.faxNo = "Fax Number is required";
        }
        if (!values.website || values.website.length === 0 || values.website.includes("(link unavailable)")) {
            errors.website = "Valid Website is required";
        }
        if (!values.financialYear) {
            errors.financialYear = "Financial Year is required";
        }
        if (!values.bookBeginning) {
            errors.bookBeginning = "Book Beginning date is required";
        }
        if (typeof values.useSecurityCtrl !== 'boolean') {
            errors.useSecurityCtrl = "Use Security Control must be a boolean value";
        }
        if (!values.baseCurrencyInfo) {
            errors.baseCurrencyInfo = "Base Currency Info is required";
        }
        if (!values.formatName) {
            errors.formatName = "Format Name is required";
        }
        if (typeof values.suffixSymbol !== 'boolean') {
            errors.suffixSymbol = "Suffix Symbol must be a boolean value";
        }
        if (typeof values.addSpaceBet !== 'boolean') {
            errors.addSpaceBet = "Add Space Between must be a boolean value";
        }
        if (typeof values.amountInMil !== 'boolean') {
            errors.amountInMil = "Amount In Millions must be a boolean value";
        }
        if (typeof values.numberOfDecimal !== 'number' || values.numberOfDecimal < 0) {
            errors.numberOfDecimal = "Number Of Decimal must be a positive number";
        }
        if (!values.vouPrefix) {
            errors.vouPrefix = "Voucher Prefix is required";
        }
        if (typeof values.vouSequence !== 'number' || values.vouSequence < 0) {
            errors.vouSequence = "Voucher Sequence must be a positive number";
        }
        if (!values.language_id) {
            errors.language_id = "Language ID is required";
        }
        if (!values.companyType) {
            errors.companyType = "Company Type is required";
        }
        if (!values.domains || values.domains.length === 0 || values.domains.includes("(link unavailable)")) {
            errors.domains = "Valid Domain(s) are required";
        }
        if (typeof values.isActive !== 'boolean') {
            errors.isActive = "Active status must be a boolean value";
        } */

        return errors;
    };

    const [domains, setDomains] = useState(["(link unavailable)", "(link unavailable)"]);

    /* const handleAddDomain = () => {
        setDomains([...domains, ""]);
    };

    const handleDeleteDomain = (index) => {
        const updatedDomains = domains.filter((_, i) => i !== index);
        setDomains(updatedDomains);
    };

    const handleChange = (index, e) => {
        const updatedDomains = [...domains];
        updatedDomains[index] = e.target.value;
        setDomains(updatedDomains);
    }; */
    const blankBtn = () => {
        setInitialValues({ name: "", type: "", domain: "" });
    }
    const toastSuccessMessage = (message) => {
        toast.success(`${params?.id ? "Update" : "Add"} ${message}`, {
            position: "top-right",
        });
    };
    const submitForm = async (values) => {
        console.log(values);

        try {
            if (!params?.id) {
                try {
                    const res = await addCompany(values);
                    if (res?.statusCode == "200") {
                        toastSuccessMessage(" Company Successfully");
                        navigate(`/company-master`)
                    }
                    blankBtn()
                } catch (error) {
                    alert(error.message)
                }

            } else {
                try {
                    const res = await updateCompany(params.id, values);

                    if (res?.statusCode == "200") {
                        toastSuccessMessage("Company Successfully");
                        blankBtn()
                        navigate(`/company-master`)
                    }
                    if (res?.statusCode == "403") {
                        toastSuccessMessage("Company Successfully");
                        blankBtn()
                    }
                    // getFloorMasters()

                } catch (error) {
                    alert(`Error`, error)
                }

            }

        } catch (error) {
            console.error("Error:", error);
        }
    };
    const getlanguage = async () => {
        try {
            const res = await languageList()
            setLanguage(res?.data)
            
        } catch (error) {
            alert(error.message)
        }

    }
    const getCompanyType = async () => {
        try {
            const res = await CompanyTypeList()
            setCompanyType(res?.data)
        } catch (error) {
            alert(error.message)
        }

    }
    const getCountrySelect = async () => {
        try {
            const res = await countryList()
            SetCountryState(res?.data)
        } catch (error) {
            alert(error.message)
        }

    }
    // const getStateSelect = async () => {
    //     try {
    //         const res = await getStateMaster()
    //         setState(res?.data)

    //         try {
    //             const cityRes = await cityAddCollageSelectList()
    //         } catch (error) {

    //         }
    //     } catch (error) {
    //         alert(error.message)
    //     }

    // }

    const handleChangeCountry = async (e) => {
        console.log(e.target.value);
        setInitialValues({
            ...initialValues,
            country: e.target.value,
        });
        try {
            const resSrtate = await StateAddCollageSelectList(e.target.value)
            setCountryWiseState(resSrtate?.data);

        } catch (error) {
            alert(error.message)
        }
    };
    const handleChangeState = async (e) => {
        console.log(e.target.value);

        setInitialValues({
            ...initialValues,
            state: e.target.value,
        });
        try {
            const resCity = await cityAddCollageSelectList(e.target.value)

            setStateWisecCity(resCity?.data);

        } catch (error) {
            alert(error.message)
        }
    };
    const handleChangeCity = async (e) => {
        setInitialValues({
            ...initialValues,
            city: e.target.value,
        });

    };
    useEffect(() => {
        getlanguage()
        getCompanyType()
        getCountrySelect()
        // getStateSelect() 
    }, [])


    useEffect(() => {
        const fetchCurrency = async () => {
            try {
                if (params?.id) {
                    const response = await getupdateCompanyId(params.id);
                    setInitialValues(response?.data);

                } else {
                    setInitialValues({
                        alias: "",
                        directory: "",
                        primary_mailing_name: "",
                        address_line1: "",
                        address_line2: "",
                        state: "",
                        city: "",
                        country: "",
                        faxNo: "",
                        staffname: "",
                        website: [],
                        financialYear: "",
                        bookBeginning: "",
                        useSecurityCtrl: false,
                        baseCurrencyInfo: "",
                        formatName: "",
                        suffixSymbol: false,
                        addSpaceBet: false,
                        amountInMil: false,
                        numberOfDecimal: 0,
                        vouPrefix: "",
                        vouSequence: 0,
                        language_id: "",
                        name: "",
                        mobile: "",
                        email: "",
                        password: "",
                        companyType: "",
                        domains: ["Edit Url"],
                        isActive: false
                    });
                }
            } catch (error) {
                console.error("Error fetching currency:", error);
            }
        };

        fetchCurrency();
    }, [params?.id]);

   

    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div style={{ margin: "14px" }}>
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0">
                                    {params?.id ? "UPDATE" : "ADD"}
                                    &nbsp;
                                    Company
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
                                    handleBlur,
                                    isValid,
                                    dirty,
                                    setFieldValue,
                                }) => {
                                    const handleAddDomain = () => {
                                        const newDomains = [...values.domains, ""];
                                        setFieldValue('domains', newDomains);
                                    };

                                    const handleDeleteDomain = (index) => {
                                        const updatedDomains = values.domains.filter((_, i) => i !== index);
                                        setFieldValue('domains', updatedDomains);
                                    };

                                    return (
                                        <form className="tbl-captionn" onSubmit={handleSubmit}>
                                            <div className="row">
                                                <div className="col-xl-4 mb-3">
                                                    <select
                                                        className="form-select"
                                                        aria-label="Default select example"
                                                        onChange={handleChangeCountry}
                                                        value={values?.country}
                                                        name="country"
                                                    >
                                                        <option value="" disabled style={{ backgroundColor: "#235c0a", color: "white" }}>Select Country</option>
                                                        {countryState?.map((item, index) => (
                                                            <option key={index} value={item?.id}>
                                                                {item?.name}
                                                            </option>
                                                        ))}
                                                    </select>
                                                    {errors.country && touched.country && (
                                                        <div className="error">{errors.country}</div>
                                                    )}
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <select
                                                        className="form-select"
                                                        aria-label="Default select example"
                                                        onChange={handleChangeState}
                                                        value={values?.state}
                                                        name="state"
                                                    >
                                                        <option value="" disabled style={{ backgroundColor: "#235c0a", color: "white" }}>Select State</option>
                                                        {countryWiseState?.map((item, index) => (
                                                            <option key={index} value={item?._id}>
                                                                {item?.name}
                                                            </option>
                                                        ))}
                                                    </select>
                                                    {errors.state && touched.state && (
                                                        <div className="error">{errors.state}</div>
                                                    )}
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <select
                                                        className="form-select"
                                                        aria-label="Default select example"
                                                        onChange={handleChangeCity}
                                                        value={values?.city}
                                                        name="city"
                                                    >
                                                        <option value="" disabled style={{ backgroundColor: "#235c0a", color: "white" }}>Select City</option>
                                                        {stateWiseCity?.map((item, index) => (
                                                            <option key={index} value={item?._id}>
                                                                {item?.name}
                                                            </option>
                                                        ))}
                                                    </select>
                                                    {errors.city && touched.city && (
                                                        <div className="error">{errors.city}</div>
                                                    )}
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <CustomInputField
                                                        type="text"
                                                        value={values?.directory}
                                                        hasError={errors.directory && touched.directory}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.directory}
                                                        autoFocus={true}
                                                        id="directory"
                                                        name="directory"
                                                        placeholder="Directory Name"
                                                    />
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <CustomInputField
                                                        type="text"
                                                        value={values?.name}
                                                        hasError={errors.name && touched.name}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.name}
                                                        autoFocus={true}
                                                        id="name"
                                                        name="name"
                                                        placeholder="Company Name"
                                                    />
                                                </div>

                                                <div className="col-xl-4 mb-3">
                                                    <CustomInputField
                                                        type="text"
                                                        value={values?.primary_mailing_name}
                                                        hasError={errors.primary_mailing_name && touched.primary_mailing_name}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.primary_mailing_name}
                                                        autoFocus={true}
                                                        id="primary_mailing_name"
                                                        name="primary_mailing_name"
                                                        placeholder="Mailing Name"
                                                    />
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <CustomInputField
                                                        type="text"
                                                        value={values?.address_line1}
                                                        hasError={errors.address_line1 && touched.address_line1}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.address_line1}
                                                        autoFocus={true}
                                                        id="address_line1"
                                                        name="address_line1"
                                                        placeholder="Address Line 1 "
                                                    />
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <CustomInputField
                                                        type="text"
                                                        value={values?.address_line2}
                                                        hasError={errors.address_line2 && touched.address_line2}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.address_line2}
                                                        autoFocus={true}
                                                        id="address_line2"
                                                        name="address_line2"
                                                        placeholder="Address Line 2"
                                                    />
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <CustomInputField
                                                        type="text"
                                                        value={values?.email}
                                                        hasError={errors.email && touched.email}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.email}
                                                        autoFocus={true}
                                                        id="email"
                                                        name="email"
                                                        placeholder="E-mail"
                                                    />
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <CustomInputField
                                                        type="text"
                                                        value={values?.mobile}
                                                        hasError={errors.mobile && touched.mobile}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.mobile}
                                                        autoFocus={true}
                                                        id="mobile"
                                                        name="mobile"
                                                        placeholder="Mobile No"
                                                    />
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <CustomInputField
                                                        type="text"
                                                        value={values?.faxNo}
                                                        hasError={errors.faxNo && touched.faxNo}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.faxNo}
                                                        autoFocus={true}
                                                        id="faxNo"
                                                        name="faxNo"
                                                        placeholder="Fax No"
                                                    />
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <CustomInputField
                                                        type="text"
                                                        value={values?.staffname}
                                                        hasError={errors.staffname && touched.staffname}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.staffname}
                                                        autoFocus={true}
                                                        id="staffname"
                                                        name="staffname"
                                                        placeholder=" Name"
                                                    />
                                                </div>

                                                <div className="col-xl-4 mb-3">
                                                    <select
                                                        className="form-select"
                                                        aria-label="Default select example"
                                                        onChange={handleChange}
                                                        value={values?.companyType}
                                                        name="companyType"
                                                    >
                                                        <option value="" disabled>
                                                            Select Company Type
                                                        </option>
                                                        {company?.map((item, i) => (
                                                            <option value={item?._id} key={i}>
                                                                {item?.name}
                                                            </option>
                                                        ))}
                                                    </select>
                                                    {errors.companyType && touched.companyType && (
                                                        <div className="error">{errors.companyType}</div>
                                                    )}
                                                </div>
                                                <div className="col-xl-10 mb-3">
                                                    {values?.domains?.length === 0 ? (
                                                        <div className="text-center">No domains available. Click "Create More Domain" to add.</div>
                                                    ) : (
                                                        values?.domains?.map((domain, index) => (
                                                            <div className='row' key={index}>
                                                                <div className='col-xl-7'>
                                                                    <div className='mb-3'>
                                                                        <CustomInputField
                                                                            type="text"
                                                                            value={domain}
                                                                            hasError={errors.domains && errors.domains[index] && touched.domains && touched.domains[index]}
                                                                            onChange={(e) =>
                                                                                setFieldValue(`domains[${index}]`, e.target.value)
                                                                            }
                                                                            id={`domains-${index}`}
                                                                            name={`domains[${index}]`}
                                                                            placeholder={`Company Domain ${index + 1}`}
                                                                            onBlur={handleBlur}
                                                                        />
                                                                        {errors.domains && errors.domains[index] && touched.domains && touched.domains[index] && (
                                                                            <div className="error">{errors.domains[index]}</div>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                                <div className='col-xl-2'>
                                                                    <button
                                                                        className='btn btn-outline-danger mt-2'
                                                                        type='button'
                                                                        onClick={() => handleDeleteDomain(index)}
                                                                        disabled={values.domains.length === 1}
                                                                    >
                                                                        <MdDelete />
                                                                    </button>
                                                                </div>
                                                                {index === values.domains.length - 1 && (
                                                                    <div className='col-xl-3'>
                                                                        <button
                                                                            className='btn btn-warning mt-2'
                                                                            type='button'
                                                                            onClick={handleAddDomain}
                                                                        >
                                                                            <IoMdAddCircle /> <span><small>Create More Domain</small></span>
                                                                        </button>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        ))
                                                    )}
                                                </div>
                                                <div className="col-xl-12 mb-3">
                                                    <b>Books and Financial Year</b>
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <CustomInputField type="date" value={values.financialYear} hasError={errors.financialYear && touched.financialYear} onChange={handleChange} onBlur={handleBlur} errorMsg={errors.financialYear} id="financialYear" name="financialYear" placeholder="Financial Year from" />
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <CustomInputField type="date" value={values.bookBeginning} hasError={errors.bookBeginning && touched.bookBeginning} onChange={handleChange} onBlur={handleBlur} errorMsg={errors.bookBeginning} id="bookBeginning" name="bookBeginning" placeholder="Books Beginning From" />
                                                </div>
                                                <div className="col-xl-12 mb-3">
                                                    <b>Security Control</b>
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <CustomInputField type="password" value={values.password} hasError={errors.password && touched.password} onChange={handleChange} onBlur={handleBlur} errorMsg={errors.password} id="password" name="password" placeholder="Password" />
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <div className='d-flex align-items-center'>
                                                        <input type="checkbox" checked={values.useSecurityCtrl} onChange={() => setFieldValue('useSecurityCtrl', !values.useSecurityCtrl)} id="useSecurityCtrl" name="useSecurityCtrl" />
                                                        <span className="ms-2">Use Security control</span>
                                                    </div>
                                                </div>
                                                <div className="col-xl-12 mb-3">
                                                    <b>Voucher Settings</b>
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <CustomInputField type="text" value={values.vouPrefix} hasError={errors.vouPrefix && touched.vouPrefix} onChange={handleChange} onBlur={handleBlur} errorMsg={errors.vouPrefix} id="vouPrefix" name="vouPrefix" placeholder="Voucher Prefix" />
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <CustomInputField type="text" value={values.vouSequence} hasError={errors.vouSequence && touched.vouSequence} onChange={handleChange} onBlur={handleBlur} errorMsg={errors.vouSequence} id="vouSequence" name="vouSequence" placeholder="Voucher Sequence" />
                                                </div>
                                                <div className="col-xl-12 mb-3">
                                                    <b>Base Currency Information</b>
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <CustomInputField type="text" value={values.baseCurrencyInfo} hasError={errors.baseCurrencyInfo && touched.baseCurrencyInfo} onChange={handleChange} onBlur={handleBlur} errorMsg={errors.baseCurrencyInfo} id="baseCurrencyInfo" name="baseCurrencyInfo" placeholder="Base Currency Information" />
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <CustomInputField type="text" value={values.formatName} hasError={errors.formatName && touched.formatName} onChange={handleChange} onBlur={handleBlur} errorMsg={errors.formatName} id="formatName" name="formatName" placeholder="Format Name" />
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <select className="form-select" aria-label="Default select example" onChange={handleChange} value={values.isActive} name="isActive" >
                                                        <option value="" disabled>Select Company Status</option>
                                                        <option value={true}>Active</option>
                                                        <option value={false}>Inactive</option>
                                                    </select> {errors.isActive && touched.isActive && (
                                                        <div className="error">{errors.isActive}</div>)}
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <div className='d-flex align-items-center'>
                                                        <input type="checkbox" checked={values.suffixSymbol} onChange={() => setFieldValue('suffixSymbol', !values.suffixSymbol)} id="suffixSymbol" name="suffixSymbol" />
                                                        <span className="ms-2">Suffix Symbol to amount</span>
                                                    </div>
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <div className='d-flex align-items-center'>
                                                        <input type="checkbox" checked={values.addSpaceBet} onChange={() => setFieldValue('addSpaceBet', !values.addSpaceBet)} id="addSpaceBet" name="addSpaceBet" />
                                                        <span className="ms-2">Add space b/w amount and symbol</span>
                                                    </div>
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <div className='d-flex align-items-center'>
                                                        <input type="checkbox" checked={values.amountInMil} onChange={() => setFieldValue('amountInMil', !values.amountInMil)} id="amountInMil" name="amountInMil" />
                                                        <span className="ms-2">Amount in million</span>
                                                    </div>
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <CustomInputField type="text" value={values.numberOfDecimal} hasError={errors.numberOfDecimal && touched.numberOfDecimal} onChange={handleChange} onBlur={handleBlur} errorMsg={errors.numberOfDecimal} id="numberOfDecimal" name="numberOfDecimal" placeholder="Number Of Decimal" />
                                                </div>
                                                <div className="col-xl-12 mb-3">
                                                    <b>Print Language</b>
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <select className="form-select" aria-label="Default select example" onChange={handleChange} value={values.language_id} name="language_id" >
                                                        <option value="" disabled>Select Language</option> {language?.map((item, i) => {
                                                            return <option value={item?._id}>{item?.name}</option>
                                                        })}
                                                    </select> {errors.language_id && touched.language_id && (
                                                        <div className="error">{errors.language_id}</div>)}
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <CustomInputField type="text" value={values.name} hasError={errors.name && touched.name} onChange={handleChange} onBlur={handleBlur} errorMsg={errors.name} id="name" name="name" placeholder="Enter Name" />
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <CustomInputField type="text" value={values.email} hasError={errors.email && touched.email} onChange={handleChange} onBlur={handleBlur} errorMsg={errors.email} id="email" name="email" placeholder="Email Address" />
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <CustomInputField type="text" value={values.mobile} hasError={errors.mobile && touched.mobile} onChange={handleChange} onBlur={handleBlur} errorMsg={errors.mobile} id="mobile" name="mobile" placeholder="Enter mobile number" />
                                                </div>
                                                {/* <div className="col-xl-4 mb-3">
                                                    <CustomInputField type="text" value={values.companyType} hasError={errors.companyType && touched.companyType} onChange={handleChange} onBlur={handleBlur} errorMsg={errors.companyType} id="companyType" name="companyType" placeholder="Enter Company Type" />
                                                </div> */}
                                                <div className="col-xl-12 mb-3">
                                                    <Link to='/company-master' type='submit' className="btn btn-danger light ms-1">Cancel</Link> {/* 
	<Button className="btn btn-danger light ms-1" onClick={() => cancelBtn()}>Cancel</Button> */}
                                                    <button className="btn btn-primary me-1" type="submit" disabled={!isValid || !dirty} > {params?.id ? "Update" : "Add"} </button>
                                                </div>
                                            </div>
                                        </form>
                                    );
                                }}
                            </Formik>


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CompanyFormMaster
