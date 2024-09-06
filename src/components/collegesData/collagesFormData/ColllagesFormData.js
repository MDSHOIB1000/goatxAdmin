import { Formik } from 'formik';
import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import Select from 'react-select';
import CustomInputField from '../../../common/CustomInputField';
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs';
import {
    addCollegescrud,
    cityAddCollageSelectList,
    clodinaryImage,
    countryList,
    getAffiliatedListSelect,
    getApproveListSelect,
    getCollegeTypeListSelect,
    getCourseListSelect,
    getFacilitiesListSelect,
    getStreamListSelect,
    getupdateCollegesCrudStatusId,
    StateAddCollageSelectList,
    updateCollegescrud
} from '../../../api/login/Login';
import JoditEditor from 'jodit-react';
import CustomTextArea from '../../../common/CustomTextArea';
import { baseUrlImage } from '../../../baseUrl';
// import { textAlign } from 'html2canvas/dist/types/css/property-descriptors/text-align';

function CollagesFormData() {
    const breadCrumbsTitle = {
        title_1: "College",
        title_2: "Create Colleges",
    };
    const editor = useRef(null);
    const [content, setContent] = useState('');
    const [profileImage, setProfileImage] = useState();
    const [logoImage, setLogoImage] = useState();
    const [metaImage, setMetaImage] = useState();
    const [bannImageState, setbannImageState] = useState();
    const [initialValues, setInitialValues] = useState({
        name: "",
        establish: "",
        college_type_id: "",
        affiliate: [],
        approvedBy: [],
        tags: [],
        location: "",
        overview: "",
        facilities: [],
        eligibilityCriteria: "",
        video_link: "",
        placement_desc: "",
        placement_company_name: "",
        Other: "",
        country: "",
        state: "",
        city: "",
        logo_img: "",
        banner_img: "",
        stream_id: [],
        meta_title: "",
        meta_keyword: "",
        meta_description: "",
        meta_image: "",
        course_type: "",
        courses: [{ course_id: "", fee: null }]
    });



    const [selectedCourseState, setselectedCourseState] = useState([]);
    const [courseState, SetCourseState] = useState();
    const [selectedOptions2, SetSelectedOptions2] = useState();
    // --------------------------------------------------------------------------------
    const [selectedStreamState, setselectedStreamState] = useState([]);
    const [streamState, SetStreamState] = useState();
    // --------------------------------------------------------------------------------
    const [countryState, SetCountryState] = useState();
    const [countryWiseState, setCountryWiseState] = useState();
    // --------------------------------------------------------------------------------

    const [stateWiseCity, setStateWisecCity] = useState();
    // --------------------------------------------------------------------------------

    const [selectedState2, setSelectedState2] = useState([]);
    const [state2, setState2] = useState();
    // --------------------------------------------------------------------------------

    const [selectedState3, setSelectedState3] = useState([]);
    const [state3, setState3] = useState();
    // --------------------------------------------------------------------------------

    const [selectedState4, setSelectedState4] = useState([]);
    const [state4, setState4] = useState();
    // --------------------------------------------------------------------------------

    const [state5, setState5] = useState();
    // --------------------------------------------------------------------------------

    const params = useParams();
    const navigate = useNavigate();
    // --------------------------------------------------------------------------------

    const validate = (values) => {
        let errors = {};

        if (!values.name) {
            errors.name = "College Name is required";
        }
        if (!values.establish) {
            errors.establish = "Establishment year is required";
        } else if (!/^\d{4}$/.test(values.establish)) {
            errors.establish = "Establishment year must be a valid 4-digit year";
        }
        if (!values.college_type_id) {
            errors.college_type_id = "College Type is required";
        }
        if (!values.affiliate) {
            errors.affiliate = "At least one affiliation is required";
        }
        if (!values.approvedBy) {
            errors.approvedBy = "At least one approval is required";
        }
        if (!values.location) {
            errors.location = "Location is required";
        }
        if (!values.overview) {
            errors.overview = "Overview is required";
        }
        if (!values.facilities) {
            errors.facilities = "At least one facility is required";
        }
        if (!values.eligibilityCriteria) {
            errors.eligibilityCriteria = "Eligibility criteria is required";
        }
        if (!values.video_link) {
            errors.video_link = "Video link is required";
        } else if (!/^https?:\/\/[^\s]+$/.test(values.video_link)) {
            errors.video_link = "Video link must be a valid URL";
        }
        if (!values.placement_desc) {
            errors.placement_desc = "Placement description is required";
        }
        if (!values.placement_company_name) {
            errors.placement_company_name = "Placement company name is required";
        }
        if (!values.Other) {
            errors.Other = "Other information is required";
        }
        if (!values.country) {
            errors.country = "Country is required";
        }
        if (!values.state) {
            errors.state = "State is required";
        }
        if (!values.city) {
            errors.city = "City is required";
        }
        if (!values.stream_id) {
            errors.stream_id = "At least one stream is required";
        }
        if (!values.meta_description) {
            errors.meta_description = "Meta description is required";
        }

        return errors;
    };


    // microphone----------------

    const toastSuccessMessage = (message) => {
        toast.success(message, {
            position: "top-right",
        });
    };
    const toastErrorMessage = (message) => {
        toast.error(message, {
            position: "top-right",
        });
    };


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
            console.log(resCity);

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
    const imgs = new FormData();
    const handleImageUpload = async (e, id) => {
        imgs.append("image", e.target.files[0]);
        try {
            const res = await clodinaryImage(imgs)

            setTimeout(() => {
                setProfileImage(res?.data)
                setbannImageState(res?.data?.data?.url)
            }, 1000)


        } catch (error) {
            alert(`Banner Images Not Upload`)
        }
    }
    const logoimgs = new FormData();
    const handleImageUploadLogo = async (e, id) => {
        logoimgs.append("image", e.target.files[0]);
        try {
            const res = await clodinaryImage(logoimgs)
            console.log(res?.data?.data?.url);

            setTimeout(() => {
                // setLogoImage(res?.data)
                setLogoImage(res?.data?.data?.url)
            }, 1000)
        } catch (error) {
            alert(`Logo Not Upload`)
        }
    }
    const metaimgs = new FormData();
    const handleImageUploadmetaImg = async (e, id) => {
        metaimgs.append("image", e.target.files[0]);
        try {
            const res = await clodinaryImage(metaimgs)

            setTimeout(() => {
                // setLogoImage(res?.data)
                setMetaImage(res?.data?.data?.url)
            }, 1000)


        } catch (error) {
            alert(`Meta Image Not Upload`)
        }
    }

    // console.log(selectedCourseState, "see you soon");
    // console.log(courseState, "see you ");

    const submitForm = async (values) => {
        const submissionData = {
            ...values,
            affiliate: selectedState4.map(option => option.value),
            approvedBy: selectedState3.map(option => option.value),
            facilities: selectedState2.map(option => option.value),
            stream_id: selectedStreamState.map(option => option.value),
            courses: selectedCourseState.map(option => ({
                course_id: option.value,
                fee: option.fee,
            })),
            overview: content,
            banner_img: bannImageState,
            logo_img: logoImage,
            meta_image: metaImage,
        };
        console.log(submissionData, "see Values");

        try {
            if (!params?.id) {
                try {
                    const res = await addCollegescrud(submissionData);
                    if (res?.statusCode === "200") {
                        toastSuccessMessage("College Successfully Added");
                        navigate(`/list-colleges`);
                    }
                    toastErrorMessage(res.message)
                } catch (error) {
                    toastErrorMessage(error.message)
                    console.log(error.message);

                }
            } else {
                const updatesubmissionData = {
                    ...submissionData,
                    country: values.country?.id
                };

                const res = await updateCollegescrud(params.id, updatesubmissionData);
                if (res?.statusCode === "200") {
                    toastSuccessMessage("College Successfully Updated");
                    navigate(`/list-colleges`);
                }
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    useEffect(() => {
        const fetchCollegeData = async () => {
            try {
                if (params?.id) {
                    const response = await getupdateCollegesCrudStatusId(params.id);
                    const collegeData = response?.data;
                    console.log(collegeData);

                    setInitialValues({
                        ...collegeData,
                        affiliate: collegeData?.affiliate?.map(item => ({ value: item?._id, label: item?.name })),
                        approvedBy: collegeData?.approvedBy?.map(item => ({ value: item?._id, label: item?.name })),
                        facilities: collegeData?.facilities?.map(item => ({ value: item?._id, label: item?.name })),
                        stream_id: collegeData?.stream_id?.map(item => ({ value: item?._id, label: item?.name })),
                        overview: collegeData?.overview || "",
                    });

                    setSelectedState4(collegeData?.affiliate?.map(item => ({ value: item?._id, label: item?.name })));
                    setSelectedState3(collegeData?.approvedBy?.map(item => ({ value: item?._id, label: item?.name })));
                    setSelectedState2(collegeData?.facilities?.map(item => ({ value: item?._id, label: item?.name })));
                    setselectedStreamState(collegeData?.stream_id?.map(item => ({ value: item?._id, label: item?.name })));
                    setContent(collegeData?.overview || "");

                    if (collegeData?.country?.id) {
                        const resState = await StateAddCollageSelectList(collegeData?.country?.id);
                        setCountryWiseState(resState?.data);
                    }
                    if (collegeData?.state?._id) {
                        const resCity = await cityAddCollageSelectList(collegeData?.state?._id);
                        setStateWisecCity(resCity?.data);
                    }

                    const streamIds = collegeData?.stream_id?.map(item => item?._id);
                    if (streamIds.length > 0) {
                        await courseTypeDataForSelect(streamIds);
                    }
                    console.log(collegeData, "see u soon");


                    setselectedCourseState(collegeData?.courses.map(item => ({
                        value: item?._id,
                        label: item?.service_name,
                        fee: item?.fee || null,
                    })));


                }
            } catch (error) {
                console.error("Error fetching college data:", error);
            }
        };

        fetchCollegeData();
    }, [params?.id]);




    useEffect(() => {
        const getCollegesDataForSelect = async () => {
            try {
                const response = await getCollegeTypeListSelect();
                setState5(response?.data);
            } catch (error) {
                alert(error.message);
            }
        };

        const getAffiliateDataForSelect = async () => {
            try {
                const response = await getAffiliatedListSelect();
                setState4(response?.data.map(item => ({
                    value: item?._id,
                    label: item?.name,
                })));
            } catch (error) {
                alert(error.message);
            }
        };

        const getApproveDataForSelect = async () => {
            try {
                const response = await getApproveListSelect();
                setState3(response?.data.map(item => ({
                    value: item?._id,
                    label: item?.name,
                })));
            } catch (error) {
                alert(error.message);
            }
        };

        const getFacilitiesDataForSelect = async () => {
            try {
                const response = await getFacilitiesListSelect();
                setState2(response?.data.map(item => ({
                    value: item?._id,
                    label: item?.name,
                })));
            } catch (error) {
                alert(error.message);
            }
        };
        const getStreamDataForSelect = async () => {
            try {
                const response = await getStreamListSelect();
                SetStreamState(response?.data.map(item => ({
                    value: item?._id,
                    label: item?.name,
                })));
            } catch (error) {
                alert(error.message);
            }
        };
        const getCountryDataForSelect = async () => {
            try {
                const response = await countryList();
                SetCountryState(response?.data)
            } catch (error) {
                alert(error.message);
            }
        };
        /* const getCourseDataForSelect = async () => {
            try {
                const response = await getCourseListSelect();
                console.log(response);

                SetCourseState(response?.data.map(item => ({
                    value: item?._id,
                    label: item?.name,
                })));
            } catch (error) {
                alert(error.message);
            }
        }; */

        getCollegesDataForSelect();
        getAffiliateDataForSelect();
        getApproveDataForSelect();
        getFacilitiesDataForSelect();
        getStreamDataForSelect()
        getCountryDataForSelect()

    }, []);

    const affiliatedHandler = (selectedOptions) => {
        setSelectedState4(selectedOptions);
    };

    const approveHandler = (selectedOptions) => {
        setSelectedState3(selectedOptions);
    };

    const facilitiesHandler = (selectedOptions) => {
        setSelectedState2(selectedOptions);
    };
    const courseTypeDataForSelect = async (ids) => {
        try {
            const response = await getCourseListSelect(ids)

            SetCourseState(response?.data.map(item => ({
                value: item?._id,
                label: item?.service_name,
                fee: null,
            })));
        } catch (error) {
            alert(error.message)
        }
    }
    const streamsHandler = (selectedOptions) => {
        setselectedStreamState(selectedOptions);
        const ids = selectedOptions.map((itemn) => itemn.value)
        courseTypeDataForSelect(ids)
    };

    const courseHandler = (selectedOptions) => {
        setselectedCourseState(selectedOptions);
    };

    /* const removeOption2 = (index) => {
        const updatedOptions = selectedOptions2.filter((item, idx) => idx !== index);
        setselectedCourseState(updatedOptions);
    } */
    console.log(selectedCourseState);

    const handleControlFee = (e, id) => {
        const updatedOptions = selectedCourseState.map((item) => {
            if (item.value === id) {
                return { ...item, fee: e.target.value };
            }
            return item;
        });
        setselectedCourseState(updatedOptions);
    };




    function handleTagKeyDown(e) {
        if (e.key !== "Enter") return;
        if (!e.target.value.trim()) return;
        setInitialValues({
            ...initialValues,
            tags: [...initialValues.tags, e.target.value],
        });
        e.target.value = "";
    }

    const removeTag = (index) => {
        setInitialValues({
            ...initialValues,
            tags: initialValues.tags.filter((_, i) => i !== index),
        });
    };

    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div style={{ margin: "14px" }}>
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0">
                                    {params?.id ? "UPDATE" : "ADD"} College
                                </h4>
                            </div>
                            <Formik
                                initialValues={initialValues}
                                validate={validate}
                                onSubmit={submitForm}
                                enableReinitialize
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
                                        <form className="tbl-captionn" onSubmit={handleSubmit}>
                                            <div className="row align-items-end">
                                                <div className="col-xl-4 mb-3">
                                                    {/* <label className='label fs-4'>Country</label> */}
                                                    <select
                                                        id="country"
                                                        name="country"
                                                        className="form-select"
                                                        value={values.country}
                                                        onChange={(e) => {
                                                            handleChangeCountry(e);
                                                            handleChange(e);
                                                        }}
                                                        onBlur={handleBlur}
                                                    >
                                                        <option value="" disabled style={{ backgroundColor: "#235c0a", color: "white" }}>Select Country</option>
                                                        {countryState?.map((item, index) => (
                                                            <option key={index} value={item?.id}>
                                                                {item?.name}
                                                            </option>
                                                        ))}
                                                    </select>
                                                    {errors.country && touched.country ? (
                                                        <small className="error-cls">{errors.country}</small>
                                                    ) : null}

                                                </div>
                                                {values?.country ? (<div className="col-xl-4 mb-3">
                                                    {/* <label className='label fs-4'>State</label> */}
                                                    <select
                                                        id="state"
                                                        name="state"
                                                        className="form-select"
                                                        value={values?.state ? values?.state : values?.state?.name}
                                                        onChange={(e) => {
                                                            handleChangeState(e);
                                                        }}
                                                        onBlur={handleBlur}
                                                    >
                                                        <option value="" disabled style={{ backgroundColor: "#235c0a", color: "white" }}>Select State</option>
                                                        {countryWiseState?.map((item, index) => (
                                                            <option key={index} value={item?._id}>
                                                                {item?.name}
                                                            </option>
                                                        ))}
                                                    </select>
                                                    {errors.state && touched.state ? (
                                                        <small className="error-cls">{errors.state}</small>
                                                    ) : null}

                                                </div>) : ""}
                                                {values?.state ? (<div className="col-xl-4 mb-3">
                                                    {/* <label className='label fs-4'>City</label> */}
                                                    <select
                                                        id="city"
                                                        name="city"
                                                        className="form-select"
                                                        value={values?.city ? values?.city : values?.city?.name}
                                                        onChange={(e) => {
                                                            handleChangeCity(e);
                                                            handleChange(e);
                                                        }}
                                                        onBlur={handleBlur}
                                                    >
                                                        <option value="" disabled style={{ backgroundColor: "#235c0a", color: "white" }}>Select City</option>

                                                        {stateWiseCity?.map((item, index) => (
                                                            <option key={index} value={item?._id}>
                                                                {item?.name}
                                                            </option>
                                                        ))}
                                                    </select>
                                                    {errors.city && touched.city ? (
                                                        <small className="error-cls">{errors.state}</small>
                                                    ) : null}

                                                </div>) : ""}
                                                <div className="col-xl-4 mb-3">
                                                    <CustomInputField
                                                        type="text"
                                                        value={values.name}
                                                        hasError={errors.name && touched.name}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.name}
                                                        autoFocus={true}
                                                        id="name"
                                                        name="name"
                                                        placeholder="College Name"
                                                    />
                                                </div>

                                                <div className="col-xl-4 mb-3">
                                                    <CustomInputField
                                                        type="number"
                                                        value={values.establish}
                                                        hasError={errors.establish && touched.establish}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.establish}
                                                        autoFocus={false}
                                                        id="establish"
                                                        name="establish"
                                                        placeholder="Establish Year"
                                                        min="1800"
                                                        max={new Date().getFullYear()}
                                                    />
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <select
                                                        id="college_type_id"
                                                        name="college_type_id"
                                                        className="form-select"
                                                        value={values?.college_type_id?._id ? values?.college_type_id?._id : values?.college_type_id}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                    >
                                                        <option value="">College Type</option>
                                                        {state5?.map((item, index) => (
                                                            <option key={index} value={item?.college_type_id?._id || item?._id}>
                                                                {item?.name}
                                                            </option>
                                                        ))}
                                                    </select>
                                                    {errors.college_type_id && touched.college_type_id && (
                                                        <small className="error-cls">
                                                            {errors.college_type_id}
                                                        </small>
                                                    )}
                                                </div>

                                                <div className="col-xl-4 mb-3">
                                                    <label className='label fs-4'>Streams</label>
                                                    <Select
                                                        name="stream_id"
                                                        isMulti
                                                        value={selectedStreamState}
                                                        onChange={streamsHandler}
                                                        options={streamState}
                                                        className="basic-multi-select"
                                                        classNamePrefix="select"
                                                        placeholder="Select Streams"
                                                    />
                                                    {errors.stream_id && touched.stream_id ? (
                                                        <small className="error-cls">
                                                            {errors.stream_id}
                                                        </small>
                                                    ) : null}
                                                </div>

                                                <div className="col-xl-4 mb-3">
                                                    <label className='label fs-4'>Course</label>
                                                    <Select
                                                        name="course_type"
                                                        isMulti
                                                        value={selectedCourseState}
                                                        onChange={courseHandler}
                                                        options={courseState}
                                                        className="basic-multi-select"
                                                        classNamePrefix="select"
                                                        placeholder="Select Course"
                                                    />
                                                    {errors.course_type && touched.course_type ? (
                                                        <small className="error-cls">
                                                            {errors.course_type}
                                                        </small>
                                                    ) : null}
                                                </div>

                                                <div className="row cusformsnew">
                                                    <div className="form-group col-md-12">
                                                        {selectedCourseState && selectedCourseState.map((item, i) => (
                                                            <div
                                                                key={item.value}
                                                                className="row cusformsnew"
                                                                style={{
                                                                    marginBottom: '10px',
                                                                    backgroundColor: "#9d9fd4",
                                                                    padding: "10px 0",
                                                                    margin: "5px 0"
                                                                }}
                                                            >
                                                                <div className="form-group col-md-4">
                                                                    <label className='text-center'>Course</label>
                                                                    <input
                                                                        placeholder="Course"
                                                                        value={item.label}
                                                                        disabled
                                                                        className="form-control"
                                                                        style={{ fontWeight: "900" }}
                                                                    />
                                                                </div>
                                                                <div className="form-group col-md-4">
                                                                    <label className='text-center'>Fee</label>
                                                                    <input
                                                                        type='number'
                                                                        placeholder="Fee"
                                                                        value={item.fee || ''}
                                                                        className="form-control"
                                                                        style={{ fontWeight: "900" }}
                                                                        onChange={(e) => handleControlFee(e, item.value)}
                                                                    />
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <label className='label fs-4'>Affiliate BY</label>
                                                    <Select
                                                        name="affiliate"
                                                        isMulti
                                                        value={selectedState4}
                                                        onChange={affiliatedHandler}
                                                        options={state4}
                                                        className="basic-multi-select"
                                                        classNamePrefix="select"
                                                        placeholder="Affiliate"
                                                    />
                                                    {errors.affiliate && touched.affiliate ? (
                                                        <small className="error-cls">
                                                            {errors.affiliate}
                                                        </small>
                                                    ) : null}
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <label className='label fs-4'>Approved By</label>
                                                    <Select
                                                        name="approvedBy"
                                                        isMulti
                                                        value={selectedState3}
                                                        onChange={approveHandler}
                                                        options={state3}
                                                        className="basic-multi-select"
                                                        classNamePrefix="select"
                                                        placeholder="Approved By"
                                                    />
                                                    {errors.approvedBy && touched.approvedBy ? (
                                                        <small className="error-cls">
                                                            {errors.approvedBy}
                                                        </small>
                                                    ) : null}
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <label className='label fs-4'>Facilities</label>
                                                    <Select
                                                        name="facilities"
                                                        isMulti
                                                        value={selectedState2}
                                                        onChange={facilitiesHandler}
                                                        options={state2}
                                                        className="basic-multi-select"
                                                        classNamePrefix="select"
                                                        placeholder="Facilities"
                                                    />
                                                    {errors.facilities && touched.facilities ? (
                                                        <small className="error-cls">
                                                            {errors.facilities}
                                                        </small>
                                                    ) : null}
                                                </div>

                                                <div className="col-xl-4 mb-3">
                                                    <CustomInputField
                                                        type="text"
                                                        value={values.location}
                                                        hasError={errors.location && touched.location}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.location}
                                                        autoFocus={false}
                                                        id="location"
                                                        name="location"
                                                        placeholder="Location"
                                                    />
                                                </div>

                                                <div className="form-group col-md-12 mb-4">
                                                    <label htmlFor="txtUserId">Description <span style={{ color: 'red' }}>*</span></label>
                                                    <JoditEditor
                                                        ref={editor}
                                                        value={content ? content : values?.overview}
                                                        onChange={newContent => setContent(newContent)}

                                                    />
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <CustomInputField
                                                        type="text"
                                                        value={values.eligibilityCriteria}
                                                        hasError={errors.eligibilityCriteria && touched.eligibilityCriteria}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.eligibilityCriteria}
                                                        autoFocus={false}
                                                        id="eligibilityCriteria"
                                                        name="eligibilityCriteria"
                                                        placeholder="Eligibility Criteria"
                                                    />
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <CustomInputField
                                                        type="url"
                                                        value={values.video_link}
                                                        hasError={errors.video_link && touched.video_link}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.video_link}
                                                        autoFocus={false}
                                                        id="video_link"
                                                        name="video_link"
                                                        placeholder="Video URL"
                                                    />
                                                </div>
                                                <div className="col-xl-4 mb-3">
                                                    <CustomInputField
                                                        type="text"
                                                        value={values.placement_company_name}
                                                        hasError={errors.placement_company_name && touched.placement_company_name}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.placement_company_name}
                                                        autoFocus={false}
                                                        id="placement_company_name"
                                                        name="placement_company_name"
                                                        placeholder="Placement Company Name"
                                                    />
                                                </div>
                                                <div className="col-xl-6 mb-3">
                                                    <CustomTextArea
                                                        type="text"
                                                        value={values.placement_desc}
                                                        hasError={errors.placement_desc && touched.placement_desc}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.placement_desc}
                                                        autoFocus={false}
                                                        id="placement_desc"
                                                        name="placement_desc"
                                                        placeholder="Placement  Description"
                                                    />
                                                </div>

                                                <div className="col-xl-6 mb-3">
                                                    <CustomTextArea
                                                        type="text"
                                                        value={values.Other}
                                                        hasError={errors.Other && touched.Other}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.Other}
                                                        autoFocus={false}
                                                        id="Other"
                                                        name="Other"
                                                        placeholder="Other"
                                                    />
                                                </div>
                                                <div className='col-xl-12'>
                                                    <div className='row align-items-center'>
                                                        <div className="col-xl-6 mb-3">
                                                            <CustomInputField
                                                                type="text"
                                                                value={values.meta_keyword}
                                                                hasError={errors.meta_keyword && touched.meta_keyword}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                errorMsg={errors.meta_keyword}
                                                                autoFocus={false}
                                                                id="meta_keyword"
                                                                name="meta_keyword"
                                                                placeholder="Meta Key Word "
                                                            />
                                                        </div>
                                                        <div className="col-xl-6 mb-3">
                                                            <CustomInputField
                                                                type="text"
                                                                value={values.meta_title}
                                                                hasError={errors.meta_title && touched.meta_title}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                errorMsg={errors.meta_title}
                                                                autoFocus={false}
                                                                id="meta_title"
                                                                name="meta_title"
                                                                placeholder="Meta Title"
                                                            />
                                                        </div>

                                                        <div className="col-xl-6 mb-3">
                                                            <CustomInputField
                                                                type="text"
                                                                value={values.meta_description}
                                                                hasError={errors.meta_description && touched.meta_description}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                errorMsg={errors.meta_description}
                                                                autoFocus={false}
                                                                id="meta_description"
                                                                name="meta_description"
                                                                placeholder="Meta Description"
                                                            />
                                                        </div>
                                                        <div className="col-xl-6 mb-3">
                                                            <div className='row align-items-center'>
                                                                <div className='col-xl-10'>
                                                                    <CustomInputField
                                                                        type="file"
                                                                        onChange={handleImageUploadmetaImg} // This should handle image upload
                                                                        onBlur={handleBlur}
                                                                        id="logo_img"
                                                                        name="logo_img"
                                                                        placeholder="Meta Image"
                                                                    />
                                                                </div>
                                                                <div className='col-xl-2'>
                                                                    {metaImage ? (
                                                                        <div className='image'>
                                                                            <picture>
                                                                                <img
                                                                                    src={`${baseUrlImage}${metaImage}`} // Display the uploaded image
                                                                                    alt='meta_image'
                                                                                    style={{ objectFit: 'cover' }}
                                                                                />
                                                                            </picture>
                                                                        </div>
                                                                    ) : values.meta_image ? (
                                                                        <div className='image'>
                                                                            <picture>
                                                                                <img
                                                                                    src={`${baseUrlImage}${values.meta_image}`} // Display the existing meta image
                                                                                    alt='meta_image'
                                                                                    style={{ objectFit: 'cover' }}
                                                                                />
                                                                            </picture>
                                                                        </div>
                                                                    ) : (
                                                                        <div className='border p-2 rounded-circle'>
                                                                            <img
                                                                                id="avatar-image"
                                                                                src="https://lh5.googleusercontent.com/proxy/t08n2HuxPfw8OpbutGWjekHAgxfPFv-pZZ5_-uTfhEGK8B5Lp-VN4VjrdxKtr8acgJA93S14m9NdELzjafFfy13b68pQ7zzDiAmn4Xg8LvsTw1jogn_7wStYeOx7ojx5h63Gliw"
                                                                                alt="default_image"
                                                                                style={{ objectFit: 'cover' }}
                                                                            />
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            </div>

                                                        </div>

                                                    </div>
                                                </div>
                                                <div className='col-12 '>
                                                    <div className='row align-items-center'>
                                                        <div className="col-xl-6 mb-3">
                                                            <div className='row align-items-end'>
                                                                <div className='col-xl-8'>
                                                                    <CustomInputField
                                                                        type="file"
                                                                        onChange={handleImageUpload}
                                                                        onBlur={handleBlur}
                                                                        id="image"
                                                                        name="image"
                                                                        placeholder="Upload Image"
                                                                    />
                                                                </div>
                                                                <div className='col-xl-4'>
                                                                    {profileImage?.data?.url ? (
                                                                        <div className='image'>
                                                                            <picture>
                                                                                <img
                                                                                    src={`${baseUrlImage}${profileImage?.data?.url}`}
                                                                                    alt='profile_pic'
                                                                                    style={{
                                                                                        width: "100%",
                                                                                        height: "45px",
                                                                                        borderRadius: "8px",
                                                                                        objectFit: "contain"
                                                                                    }}
                                                                                />
                                                                            </picture>
                                                                        </div>
                                                                    ) : values.banner_img ? (
                                                                        <div className='image'>
                                                                            <picture>
                                                                                <img
                                                                                    src={`${baseUrlImage}${values.banner_img}`}
                                                                                    alt='banner_img'
                                                                                    style={{
                                                                                        width: "100%",
                                                                                        height: "45px",
                                                                                        borderRadius: "8px",
                                                                                        objectFit: "contain"
                                                                                    }}
                                                                                />
                                                                            </picture>
                                                                        </div>
                                                                    ) : (
                                                                        <div className='border rounded'>
                                                                            <img
                                                                                id="avatar-image"
                                                                                src="https://lh5.googleusercontent.com/proxy/t08n2HuxPfw8OpbutGWjekHAgxfPFv-pZZ5_-uTfhEGK8B5Lp-VN4VjrdxKtr8acgJA93S14m9NdELzjafFfy13b68pQ7zzDiAmn4Xg8LvsTw1jogn_7wStYeOx7ojx5h63Gliw"
                                                                                alt="default_image"
                                                                                style={{
                                                                                    width: "100%",
                                                                                    height: "45px",
                                                                                    borderRadius: "8px",
                                                                                    objectFit: "cover"
                                                                                }}
                                                                            />
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-xl-6 mb-3">
                                                            <div className='row align-items-center'>
                                                                <div className='col-xl-10'>
                                                                    <CustomInputField
                                                                        type="file"
                                                                        onChange={handleImageUploadLogo}
                                                                        onBlur={handleBlur}
                                                                        id="logo_img"
                                                                        name="logo_img"
                                                                        placeholder="Logo"
                                                                    // Removed `value` attribute for file inputs as it is not required
                                                                    />
                                                                </div>
                                                                <div className='col-xl-2'>
                                                                    {logoImage ? (
                                                                        <div className='image'>
                                                                            <picture>
                                                                                <img
                                                                                    src={`${baseUrlImage}${logoImage}`}
                                                                                    alt='logo_image'
                                                                                    style={{ width: "100%", height: "auto", borderRadius: "8px", objectFit: 'cover' }}
                                                                                />
                                                                            </picture>
                                                                        </div>
                                                                    ) : values.logo_img ? (
                                                                        <div className='image'>
                                                                            <picture>
                                                                                <img
                                                                                    src={`${baseUrlImage}${values.logo_img}`}
                                                                                    alt='logo_image'
                                                                                    style={{ width: "100%", height: "auto", borderRadius: "8px", objectFit: 'cover' }}
                                                                                />
                                                                            </picture>
                                                                        </div>
                                                                    ) : (
                                                                        <div className='border p-2 rounded-circle'>
                                                                            <img
                                                                                id="avatar-image"
                                                                                src="https://lh5.googleusercontent.com/proxy/t08n2HuxPfw8OpbutGWjekHAgxfPFv-pZZ5_-uTfhEGK8B5Lp-VN4VjrdxKtr8acgJA93S14m9NdELzjafFfy13b68pQ7zzDiAmn4Xg8LvsTw1jogn_7wStYeOx7ojx5h63Gliw"
                                                                                alt="default_image"
                                                                                style={{ objectFit: 'cover' }}
                                                                            />
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="text-right col-12">
                                                    <Link
                                                        to="/list-colleges"
                                                        className="btn btn-outline-primary mr-2"
                                                    >
                                                        Close
                                                    </Link>
                                                    <button
                                                        type="submit"
                                                        className="btn btn-primary"
                                                    >
                                                        {params?.id ? "Update" : "Add"}
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    );
                                }}
                            </Formik>
                        </div>
                    </div>
                </div>
                <ToastContainer className={"text-center"} />
            </div>
        </>
    );
}

export default CollagesFormData;
