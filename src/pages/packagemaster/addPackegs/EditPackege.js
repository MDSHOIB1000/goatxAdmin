import React, { useEffect, useState, useRef } from "react";
import JoditEditor from 'jodit-react';
import { Formik, Field, Form, ErrorMessage, FieldArray } from "formik";
import { clodinaryImage, getPackegById, getServicePacage, getStateMaster, relatedServiceType, sendPackegesUpdate } from "../../../api/login/Login";
import { ToastContainer, toast } from "react-toastify";
import { IoMdCloseCircle } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import Select from 'react-select';
import chroma from 'chroma-js';

// Custom styles for the select component
const colourStyles = {
    control: (styles) => ({ ...styles, backgroundColor: 'white' }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
        const color = chroma(data.color);
        return {
            ...styles,
            backgroundColor: isDisabled
                ? undefined
                : isSelected
                    ? data.color
                    : isFocused
                        ? color.alpha(0.1).css()
                        : undefined,
            color: isDisabled
                ? '#ccc'
                : isSelected
                    ? chroma.contrast(color, 'white') > 2
                        ? 'white'
                        : 'black'
                    : data.color,
            cursor: isDisabled ? 'not-allowed' : 'default',

            ':active': {
                ...styles[':active'],
                backgroundColor: !isDisabled
                    ? isSelected
                        ? data.color
                        : color.alpha(0.3).css()
                    : undefined,
            },
        };
    },
    multiValue: (styles, { data }) => {
        const color = chroma(data.color);
        return {
            ...styles,
            backgroundColor: color.alpha(0.1).css(),
        };
    },
    multiValueLabel: (styles, { data }) => ({
        ...styles,
        color: data.color,
    }),
    multiValueRemove: (styles, { data }) => ({
        ...styles,
        color: data.color,
        ':hover': {
            backgroundColor: data.color,
            color: 'white',
        },
    }),
};

function EditPackegs() {
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [relateData, setRelateData] = useState([]);
    const [content, setContent] = useState('');
    const editor = useRef(null);
    const [initialData, setInitialData] = useState({
        state: '',
        package_name: '',
        services: [{}],
        description: '',
        commisionSchema: [],
        isActive: true,
        isPaid: true,
    });
    const params = useParams();
    const navigate = useNavigate();
    const [iconImg, setIconImg] = useState(null);
    const [bannerImg, setBannerImg] = useState(null);
    const [state, setState] = useState([]);
    const [selectedOptions2, setSelectedOptions2] = useState([]);
    const [selectedOptions3, setSelectedOptions3] = useState([]);
    const [isPaid, setIsPaid] = useState('true');
    const [idsSelected, setIdsSelected] = useState([]);
    const [PackageStatus, setPackageStatus] = useState('true')

    const handleFileUpload = async (e, fileType) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('image', file);
        try {
            const res = await clodinaryImage(formData);
            const url = res?.data?.data?.url;
            if (fileType === 'icon') {
                setIconImg(url);
            } else if (fileType === 'banner') {
                setBannerImg(url);
            } else {
                setSelectedFiles(prevFiles => [...prevFiles, { id: Math.random(), url }]);
            }
        } catch (error) {
            console.error("Image not uploaded", error);
        }
    };

    const toastSuccessMessage = () => {
        toast.success(`Your Package ${params?.id ? 'Update' : 'Created'} Successfully.`, {
            position: "top-center",
        });
    };

    const toastErrMessage = (msg) => {
        toast.error(`Package Not Added ${msg}.`, {
            position: "top-center",
        });
    };

    const fetchRelatedServices = async () => {
        try {
            const res = await relatedServiceType();
            const res2State = await getStateMaster();
            setState(res2State?.data);
            const mapped = res?.data?.map((item) => {
                return { ...item, value: item.id, label: item.name, color: '#253858' }
            });
            setRelateData(mapped);
        } catch (error) {
            console.error(error);
        }
    };

    const fetchPackegbyId = async (id) => {
        try {
            const res = await getPackegById(id);
            setIconImg(res?.data[0]?.icon_img);
            setBannerImg(res?.data[0]?.banner_img);
            setContent(res?.data[0]?.description);
            setIsPaid(res?.data[0]?.isPaid);
            setPackageStatus(res?.data[0]?.isActive);
            const mappedServices = res?.data[0]?.commisionSchema.map((item) => ({
                ...item,
                id: item.service_id?.id,
                service_id: item.service_id?.id,
                value: item.service_id.id,
                label: item.service_id.name,
                color: '#253858',
                name: item.service_id.name,
            }));
            const mappedServices3 = res?.data[0]?.services.map((item) => ({
                ...item,
                id: item?.id,
                service_id: item?.id,
                value: item.id,
                label: item.name,
                color: '#253858',
                name: item.name
            }));


            setSelectedOptions2(mappedServices);
            setSelectedOptions3(mappedServices3)
            setInitialData({
                ...res.data[0],
                services: res.data[0]?.prices,
            });
            setIdsSelected(res.data[0]?.services)
            console.log(res);

        } catch (error) {
            console.error(error);
        }
    };
    console.log(selectedOptions2);

    useEffect(() => {
        fetchRelatedServices();
        if (params?.id) {
            fetchPackegbyId(params?.id);
        }
    }, [params?.id]);

    const submitDataUpdate = async (values) => {
        const formData = {
            description: content,
            isActive: PackageStatus,
            package_name: values.package_name,
            icon_img: iconImg,
            banner_img: bannerImg,
            prices: values.services,
            state: values.state,
            services: idsSelected,
            isPaid: isPaid,
            commisionSchema: selectedOptions2
        };
        // return console.log(formData);
        try {
            const res = await sendPackegesUpdate({ id: params.id, data: formData });
            if (res.statusCode == 200) {
                toastSuccessMessage();
                setTimeout(() => {
                    navigate('/package-master');
                }, 1000);
            } else {
                toastErrMessage(res.message);
            }
        } catch (error) {
            toastErrMessage("An error occurred.");
        }
    };


    // Function to merge arrays based on service_id, focusing on array2
    function mergeArrays(arr1, arr2) {
        // Create a map from arr1 for easy lookup
        const map = new Map();
        arr1.forEach(item => {
            map.set(item.service_id, item);
        });

        // Merge data based on arr2
        const mergedArray = arr2.map(item => {
            const matchedItem = map.get(item.service_id);
            if (matchedItem) {
                return { ...matchedItem, ...item };
            }
            return { ...item };
        });

        return mergedArray;
    }



    const handleChange22 = async (options) => {
        const mappedIds = options?.map(item => item.id);
        const mappedIds3 = options?.map(item => item);
        setIdsSelected(mappedIds);
        setSelectedOptions3(mappedIds3);
        try {
            const res = await getServicePacage(JSON.stringify(mappedIds));

            // setSelectedOptions2(res.data)

            const mergedArray = mergeArrays(selectedOptions2, res.data);
            setSelectedOptions2(mergedArray)
        } catch (error) {
            console.error(error);
        }
    };

    const onChangeData = (e, index) => {
        const updatedOptions = selectedOptions2.map((item, idx) => {
            if (idx === index) {
                return { ...item, commision_id: e.target.value };
            } else {
                return item;
            }
        });
        setSelectedOptions2(updatedOptions);
    };

    const changeIsPaid = (e) => {
        setIsPaid(e.target.value);
    };

    const changePackageStatus = (e) => {
        setPackageStatus(e.target.value)
    }

    const Remove = (id, type) => {
        if (type === 'icon') {
            setIconImg(null);
        } else if (type === 'banner') {
            setBannerImg(null);
        } else {
            setSelectedFiles(selectedFiles.filter(file => file.id !== id));
        }
    };

    const removeOption2 = (index) => {
        const updatedOptions = selectedOptions2.filter((item, idx) => idx !== index);
        setSelectedOptions2(updatedOptions);
    }


    return (
        <>
            <ToastContainer />
            <div className="ContentArea">
                <div className="card">
                    <div className="card-header"><span>Edit Packages</span></div>
                    <div className="card-body">
                        <Formik
                            initialValues={initialData}
                            enableReinitialize={true}
                            onSubmit={(values) => {
                                submitDataUpdate(values);
                            }}
                        >
                            {({ setFieldValue }) => (
                                <Form>
                                    <div className="row cusformsnew" style={{ alignItems: 'end' }}>
                                        <div className="form-group col-md-4">
                                            <label>Package Name <span style={{ color: 'red' }}>*</span></label>
                                            <Field type="text" name="package_name" placeholder="Enter Service Name" className="form-control" />
                                            <ErrorMessage name="package_name" component="div" className="text-danger" />
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label>Services <span style={{ color: 'red' }}>*</span></label>
                                            <Select
                                                closeMenuOnSelect={false}
                                                value={selectedOptions3 && selectedOptions3?.map((item, i) => {
                                                    return selectedOptions3[i]
                                                })}
                                                // value={[selectedOptions3[0]]}
                                                isMulti
                                                options={relateData}
                                                styles={colourStyles}

                                                onChange={handleChange22}
                                            />
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label>State <span style={{ color: 'red' }}>*</span></label>
                                            <Field as="select" name="state" className="form-select">
                                                <option value="">Select State</option>
                                                {state.map((item, i) => (
                                                    <option key={i} value={item._id}>{item.name}</option>
                                                ))}
                                            </Field>
                                            <ErrorMessage name="state" component="div" className="text-danger" />
                                        </div>
                                    </div>
                                    <div className="row cusformsnew">
                                        <div className="form-group col-md-12">
                                            {selectedOptions2?.[0]?.service_id &&
                                                selectedOptions2.map((item, i) => (
                                                    <div className="row cusformsnew" key={i} style={{ marginBottom: '10px', backgroundColor: "#9d9fd4", padding: "10px 0", margin: "5px 0" }}>
                                                        {console.log(item, "services")}
                                                        <div className="form-group col-md-4">
                                                            <label>Service <span style={{ color: 'red' }}>*</span></label>
                                                            <input placeholder="Service" value={item?.name ? item?.name : item?.service_id?.name} disabled className="form-control" />
                                                        </div>
                                                        <div className="form-group col-md-4">
                                                            <label>Commision <span style={{ color: 'red' }}>*</span></label>
                                                            <Field as="select" name="commision_id" value={item?.commision_id ? item?.commision_id : ''} className="form-select" onChange={(e) => { onChangeData(e, i) }}>
                                                                <option value='' disabled>Select Commision</option>
                                                                {item?.commision?.map((commItem, index) => (
                                                                    <option key={index} value={commItem?._id}>{commItem?.name}</option>
                                                                ))}
                                                                {item?.commisionList?.map((commItem, index) => (
                                                                    <option key={index} value={commItem?._id}>{commItem?.name}</option>
                                                                ))}
                                                            </Field>
                                                        </div>
                                                        <div className="form-group col-md-4" style={{ display: "flex", justifyContent: "space-around", alignItems: "end" }}><button type="button" className="btn btn-danger" onClick={() => {
                                                            removeOption2(i)
                                                        }}><i className="fa fa-trash"></i></button></div>
                                                    </div>
                                                ))}
                                        </div>
                                    </div>
                                    <div className="form-group col-md-12">
                                        <label>Description <span style={{ color: 'red' }}>*</span></label>
                                        <JoditEditor
                                            ref={editor}
                                            value={content}
                                            name="description"
                                            onChange={newContent => setContent(newContent)}
                                        />
                                        <ErrorMessage name="description" component="div" className="text-danger" />
                                    </div>
                                    <div>
                                        <div className="form-group col-md-5 cusformsnew">
                                            <label>Icon Image <span style={{ color: 'red' }}>*</span></label>
                                            <input type="file" name="icon_img" className="form-control" onChange={(e) => {
                                                handleFileUpload(e, 'icon');
                                                setFieldValue("icon_img", e.target.files[0]);
                                            }} />
                                            {iconImg && (
                                                <div style={{ display: "flex" }}>
                                                    <img style={{ width: "150px", height: "150px" }} src={`https://api.paypandabnk.com/api/cloudinary/${iconImg}`} alt="icon" />
                                                    <IoMdCloseCircle onClick={() => Remove(initialData?.icon_img?.id, 'icon')} style={{ fontSize: "27px", cursor: "pointer", marginLeft: "-27px" }} />
                                                </div>
                                            )}
                                            <ErrorMessage name="icon_img" component="div" className="text-danger" />
                                        </div>
                                        <div className="form-group col-md-5 cusformsnew">
                                            <label>Banner Image <span style={{ color: 'red' }}>*</span></label>
                                            <input type="file" name="banner_img" className="form-control" onChange={(e) => {
                                                handleFileUpload(e, 'banner');
                                                setFieldValue("banner_img", e.target.files[0]);
                                            }} />
                                            {bannerImg && (
                                                <div style={{ display: "flex" }}>
                                                    <img style={{ width: "150px", height: "150px" }} src={`https://api.paypandabnk.com/api/cloudinary/${bannerImg}`} alt="banner" />
                                                    <IoMdCloseCircle onClick={() => Remove(initialData?.banner_img?.id, 'banner')} style={{ fontSize: "27px", cursor: "pointer", marginLeft: "-27px" }} />
                                                </div>
                                            )}
                                            <ErrorMessage name="banner_img" component="div" className="text-danger" />
                                        </div>
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label>Is Paid <span style={{ color: 'red' }}>*</span></label>
                                        {console.log(isPaid)}
                                        <Field as="select" name="isPaid" className="form-select" value={isPaid} onChange={changeIsPaid}>

                                            <option value={true}>Paid</option>
                                            <option value={false}>Un Paid</option>
                                        </Field>
                                    </div>

                                    {isPaid && (
                                        <div className="row cusformsnew">
                                            <div className="form-group col-md-12">
                                                <h5>Prices <span style={{ color: 'red' }}>*</span></h5>
                                                <FieldArray name="services">
                                                    {({ push, remove, form }) => (
                                                        <>
                                                            {form?.values?.services?.map((service, index) => (
                                                                <div key={index} className="row cusformsnew" style={{ marginBottom: '10px', backgroundColor: "#9d9fd4", padding: "10px 0", margin: "5px 0" }}>
                                                                    {/* <div className="form-group col-md-2 ">
                                                                        <label>Is  Paid</label>
                                                                        <Field as="select" name={`services[${index}].isPaid`} className="form-control">
                                                                            <option value={true}>Paid</option>
                                                                            <option value={false}>Un Paid</option>
                                                                        </Field>
                                                                    </div> */}
                                                                    <div className="form-group col-md-2">
                                                                        <label>Duration <span style={{ color: 'red' }}>*</span></label>
                                                                        <Field type="text" name={`services[${index}].duration`} placeholder="Enter Duration" className="form-control" />
                                                                        <ErrorMessage name={`services[${index}].duration`} component="div" className="text-danger" />
                                                                    </div>
                                                                    <div className="form-group col-md-2">
                                                                        <label>Duration Type</label>
                                                                        <Field as="select" name={`services[${index}].duration_type`} className="form-control">
                                                                            <option value="">Select Duration Type</option>
                                                                            <option value="Day">Day</option>
                                                                            <option value="Month">Month</option>
                                                                            <option value="Year">Year</option>
                                                                        </Field>
                                                                    </div>
                                                                    <div className="form-group col-md-2">
                                                                        <label>Tax <span style={{ color: 'red' }}>*</span></label>
                                                                        <Field type="text" name={`services[${index}].tax`} placeholder="Enter Tax" className="form-control" />
                                                                        <ErrorMessage name={`services[${index}].tax`} component="div" className="text-danger" />
                                                                    </div>
                                                                    <div className="form-group col-md-2">
                                                                        <label>Tax Type</label>
                                                                        <Field as="select" name={`services[${index}].tax_type`} className="form-control">
                                                                            <option value="">Select Tax Type</option>
                                                                            <option value="%">%</option>
                                                                            <option value="RS">RS</option>
                                                                        </Field>
                                                                    </div>
                                                                    <div className="form-group col-md-2">
                                                                        <label>MRP <span style={{ color: 'red' }}>*</span></label>
                                                                        <Field type="text" name={`services[${index}].mrp`} placeholder="Enter MRP" className="form-control" />
                                                                        <ErrorMessage name={`services[${index}].mrp`} component="div" className="text-danger" />
                                                                    </div>
                                                                    <div className="form-group col-md-2">
                                                                        <label>Sale Rate <span style={{ color: 'red' }}>*</span></label>
                                                                        <Field type="text" name={`services[${index}].sale_rate`} placeholder="Enter Sale Rate" className="form-control" />
                                                                        <ErrorMessage name={`services[${index}].sale_rate`} component="div" className="text-danger" />
                                                                    </div>
                                                                    <div className="form-group col-md-2" style={{ display: 'flex', alignItems: 'end', marginBottom: '5px' }}>
                                                                        <button type="button" onClick={() => remove(index)} className="btn btn-danger">Remove</button>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                            <button type="button" onClick={() => push({ duration: '', durationType: '', mrp: '', saleRate: '' })} className="btn btn-primary">Add More</button>
                                                        </>
                                                    )}
                                                </FieldArray>
                                            </div>
                                        </div>
                                    )}
                                    <div className="form-group col-md-4">
                                        <label>Package Status <span style={{ color: 'red' }}>*</span></label>
                                        <Field as="select" name="PackageStatus" className="form-select" value={PackageStatus.toString()} onChange={changePackageStatus}>
                                            <option value={true}>Active</option>
                                            <option value={false}>Inactive </option>
                                        </Field>
                                    </div>
                                    <div className="form-group col-md-12" style={{ textAlign: "end" }}>
                                        <button type="submit" style={{ margin: "20px 0" }} className="btn btn-primary mr-3">Update</button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EditPackegs;
