import React, { useEffect, useState, useRef } from "react";
import JoditEditor from 'jodit-react';
import { Formik, Field, Form, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";
import { clodinaryImage, getPackegById, getServicePacage, getStateMaster, relatedService, relatedServiceType, sendPackegesCreate, sendPackegesUpdate } from "../../../api/login/Login";
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
function AddPackegs() {
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [relateData, setRelateData] = useState(null);
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
    const isDisabled = !!params?.id;
    const validationSchema = Yup.object({
        package_name: Yup.string().required('Package Name is required'),
        services: Yup.array().of(
            Yup.object({
                serviceType: Yup.string().required('Service Type is required'),
                duration: Yup.string().required('Duration is required'),
                durationType: Yup.string().required('Duration Type is required'),
                mrp: Yup.number().required('MRP is required').positive('MRP must be positive'),
                saleRate: Yup.number().required('Sale Rate is required').positive('Sale Rate must be positive'),
                fromAmount: Yup.number().required('From Amount is required').positive('From Amount must be positive'),
                toAmount: Yup.number().required('To Amount is required').positive('To Amount must be positive'),
                commissionAmt: Yup.number().required('Commission Amount is required').positive('Commission Amount must be positive')
            })
        ).min(1, 'At least one service is required'),
        // description: Yup.string().required('Description is required'),
        icon_img: Yup.mixed().required('Icon Image is required'),
    });


    const [iconImg, setIconImg] = useState(null);
    const [bannerImg, setBannerImg] = useState(null);
    const handleFileUpload = async (e, fileType) => {
        const file2 = e.target.files[0];
        const validImageTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];

        if (!file2 || !validImageTypes.includes(file2.type)) {
            alert('Only image files are allowed. Please upload a valid image.');
            return;
        }
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('image', file);
        try {
            const res = await clodinaryImage(formData);
            if (fileType === 'icon') {
                setTimeout(() => {
                    setIconImg(res?.data?.data?.url);
                }, 1000);
            } else if (fileType === 'banner') {
                setTimeout(() => {
                    setBannerImg(res?.data?.data?.url);
                }, 1000);

            } else {
                setSelectedFiles(prevFiles => [...prevFiles, { id: Math.random(), url: res?.data?.data?.url }]);
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
    const [state, setState] = React.useState()
    const fetchRelatedServices = async () => {
        try {
            const res = await relatedServiceType();
            const res2State = await getStateMaster();
            setState(res2State?.data);
            const maped = res?.data?.map((item) => {
                return { ...item, value: item.id, label: item.name, color: '#253858' }
            })
            setRelateData(maped);
        } catch (error) {
            console.error(error);
        }
    };

    const [defautId, setdefautId] = useState(null);
    const fetchPackegbyId = async () => {

        try {
            const res = await getPackegById(params?.id);
            setIconImg(res?.data[0]?.icon_img)
            setBannerImg(res?.data[0]?.banner_img)
            setContent(res?.data[0]?.description)
            setdefautId(res?.data[0]?.services)
            // const res2 = await getServicePacage(JSON.stringify(res?.data[0]?.services));
            setSelectedOptions2(res?.data[0]?.commisionSchema)

            setInitialData({
                ...res.data[0],
                services: res.data[0]?.prices,
            });
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        fetchRelatedServices();
        if (params?.id) {
            fetchPackegbyId();
        }
    }, [params?.id]);

    const submitDataUpdate = async (values) => {
        const formData = {
            ...values,
            icon_img: values?.icon_img?.url,
            banner_img: values?.banner_img?.url,
        };
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

    const [selectedOptions, setSelectedOptions] = useState([]);
    const [selectedOptions2, setSelectedOptions2] = useState([]);
    const [isPaid, setIsPaid] = useState('true');
    const [PackageStatus, setPackageStatus] = useState('true')
    console.log(PackageStatus);
    const submitData = async (values) => {
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
            const res = await sendPackegesCreate(formData);
            if (res.statusCode == 200) {
                toastSuccessMessage();
                setTimeout(() => {
                    navigate('/package-master');
                }, 1000);
            } else if (res.statusCode == 404) {
                toastErrMessage("Please Add Package");
            }
            else {
                toastErrMessage(res.message + '!');
            }
        } catch (error) {
            toastErrMessage(`An error occurred.`);
        }
    };

    const Remove = (id, type) => {
        if (type === 'icon') {
            setIconImg(null);
        } else if (type === 'banner') {
            setBannerImg(null);
        } else {
            setSelectedFiles(selectedFiles.filter(file => file.id !== id));
        }
    };



    const [idsSelected, setIdsSelected] = React.useState([]);

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
        const maped = options?.map((item) => {
            return { ...item, service_id: item?.id, commision_id: '' }
        })

        const maped1 = options?.map((item) => {
            return item.id
        })
        setIdsSelected(maped1)
        try {
            const res = await getServicePacage(JSON.stringify(maped1));

            console.log(maped1);

            const mergedArray = mergeArrays(selectedOptions2, res.data);
            setSelectedOptions2(mergedArray)

        } catch (error) {

        }





        setSelectedOptions(maped);
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
    }
    const changeIsPaid = (e) => {
        setIsPaid(e.target.value)
    }



    const changePackageStatus = (e) => {
        setPackageStatus(e.target.value)
    }
    const removeOption2 = (index) => {
        const updatedOptions = selectedOptions2.filter((item, idx) => idx !== index);
        setSelectedOptions2(updatedOptions);
    }
    return (
        <>

            <ToastContainer className={"text-center"} />
            <div className="ContentArea">
                <div className="card">
                    <div className="card-header"><span>Add Package</span></div>
                    <div className="card-body">
                        <Formik
                            initialValues={initialData}
                            // validationSchema={validationSchema}
                            enableReinitialize={true}
                            onSubmit={(values) => {
                                if (params?.id) {
                                    submitDataUpdate(values);
                                } else {
                                    submitData(values);
                                }
                            }}
                        >
                            {({ values, errors, dirty, isValid, setFieldValue }) => (
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
                                                isMulti
                                                options={relateData}
                                                styles={colourStyles}
                                                onChange={handleChange22}
                                                isDisabled={isDisabled}
                                            />
                                        </div>



                                        <div className="form-group col-md-4">
                                            <label>State <span style={{ color: 'red' }}>*</span></label>
                                            <Field as="select" name="state" className="form-select">
                                                <option value="">Select State</option>
                                                {state && state.map((item, i) => {
                                                    return <option key={i} value={item._id}>{item.name}</option>
                                                })}
                                            </Field>
                                            <ErrorMessage name="state" component="div" className="text-danger" />
                                        </div>







                                        <div className="row cusformsnew">
                                            <div className="form-group col-md-12">
                                                {selectedOptions2 && selectedOptions2?.map((item, i) => {
                                                    return <div className="row cusformsnew" style={{ marginBottom: '10px', backgroundColor: "#9d9fd4", padding: "10px 0", margin: "5px 0" }}>


                                                        <div className="form-group col-md-4">
                                                            <label>Service <span style={{ color: 'red' }}>*</span></label>
                                                            {/* <Field type="text"  placeholder="Service" className="form-control" /> */}
                                                            <input placeholder="Service" value={item?.name ? item?.name : item?.service_id?.name} disabled className="form-control" style={{ fontWeight: "900" }} />
                                                        </div>
                                                        <div className="form-group col-md-4">
                                                            <label>Commision <span style={{ color: 'red' }}>*</span></label>
                                                            <Field as="select" name="tax_type" value={item?.commision_id ? item?.commision_id : ''} className="form-select" onChange={(e) => { onChangeData(e, i) }}>
                                                                <option selected value='' disabled>Select Commision</option>
                                                                {item?.commision && item?.commision?.map((item) => {
                                                                    return <option value={item?._id}>{item?.name}</option>
                                                                })}
                                                            </Field>
                                                        </div>
                                                        <div className="form-group col-md-4" style={{ display: "flex", justifyContent: "space-around", alignItems: "end" }}><button type="button" className="btn btn-danger" onClick={() => {
                                                            removeOption2(i)
                                                        }}><i className="fa fa-trash"></i></button></div>
                                                    </div>
                                                })}


                                            </div>
                                        </div>





                                        <div className="form-group col-md-12">
                                            <label>Description <span style={{ color: 'red' }}>*</span></label>
                                            {/* <Field type="text" name="description" placeholder="Enter description" className="form-control" /> */}
                                            <JoditEditor
                                                ref={editor}
                                                value={content}
                                                name="description"
                                                onChange={newContent => setContent(newContent)}
                                            />
                                            <ErrorMessage name="description" component="div" className="text-danger" />
                                        </div>
                                        <div className="form-group col-md-6">
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
                                        <div className="form-group col-md-6">
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

                                        <div className="form-group col-md-4">
                                            <label>Is Paid <span style={{ color: 'red' }}>*</span></label>
                                            <Field as="select" name="state" className="form-select" value={isPaid.toString()} onChange={changeIsPaid}>
                                                <option value={true}>Paid</option>
                                                <option value={false}>Un Paid</option>
                                            </Field>
                                        </div>

                                        <div className="form-group col-md-4">
                                            <label>Package Status <span style={{ color: 'red' }}>*</span></label>
                                            <Field as="select" name="PackageStatus" className="form-select" value={PackageStatus.toString()} onChange={changePackageStatus}>
                                                <option value={true}>Active</option>
                                                <option value={false}>Inactive </option>
                                            </Field>
                                        </div>


                                        {isPaid == 'true' && <div className="row cusformsnew">
                                            <div className="form-group col-md-12">
                                                <h5>Prices <span style={{ color: 'red' }}>*</span></h5>
                                                <FieldArray name="services">
                                                    {({ push, remove, form }) => (
                                                        <>
                                                            {form?.values?.services?.map((service, index) => (
                                                                <div key={index} className="row cusformsnew" style={{ marginBottom: '10px', backgroundColor: "#9d9fd4", padding: "10px 0", margin: "5px 0" }}>

                                                                    <div className="form-group col-md-2 ">
                                                                        <label>Is  Paid</label>
                                                                        <Field as="select" name={`services[${index}].isPaid`} className="form-control">
                                                                            <option value={true}>Paid</option>
                                                                            <option value={false}>Un Paid</option>
                                                                        </Field>
                                                                    </div>

                                                                    <div className="form-group col-md-2">
                                                                        <label>Duration <span style={{ color: 'red' }}>*</span></label>
                                                                        <Field type="text" name={`services[${index}].duration`} placeholder="Enter Duration" className="form-control" />
                                                                        <ErrorMessage name={`services[${index}].duration`} component="div" className="text-danger" />
                                                                    </div>

                                                                    <div className="form-group col-md-2">
                                                                        <label>Duration Type</label>
                                                                        <Field as="select" name={`services[${index}].duration_type`} className="form-control">
                                                                            <option value="" selected>Select Duration Type</option>
                                                                            <option value="Day">Day</option>
                                                                            <option value="Month">Month</option>
                                                                            <option value="Year">Year</option>
                                                                        </Field>
                                                                    </div>
                                                                    <div className="form-group col-md-2">
                                                                        <label>Tax <span style={{ color: 'red' }}>*</span></label>
                                                                        <Field type="text" name={`services[${index}].tax`} placeholder="Enter Duration" className="form-control" />
                                                                        <ErrorMessage name={`services[${index}].tax`} component="div" className="text-danger" />
                                                                    </div>

                                                                    <div className="form-group col-md-2">
                                                                        <label>Tax Type</label>
                                                                        <Field as="select" name={`services[${index}].tax_type`} className="form-control">
                                                                            <option value="" selected>Select Tax Type</option>
                                                                            <option value="%">%</option>
                                                                            <option value="RS">RS</option>
                                                                        </Field>
                                                                    </div>
                                                                    {/* <div className="form-group col-md-2">
                                                                        <label>Member Type</label>
                                                                        <Field as="select" name={`services[${index}].durationType`} className="form-control">
                                                                            <option value="" selected>Select Member Type</option>
                                                                            {memberType && memberType?.map((item)=>{
                                                                                return  <option value={item?._id}>{item?.user_type}</option>
                                                                            })}
                                                                           
                                                                        </Field>
                                                                    </div> */}

                                                                    <div className="form-group col-md-2">
                                                                        <label>MRP <span style={{ color: 'red' }}>*</span></label>
                                                                        <Field type="text" name={`services[${index}].mrp`} placeholder="Enter MRP" className="form-control" />
                                                                        <ErrorMessage name={`services[${index}].mrp`} component="div" className="text-danger" />
                                                                    </div>

                                                                    <div className="form-group col-md-2">
                                                                        <label>Sale Rate <span style={{ color: 'red' }}>*</span></label>
                                                                        <Field type="text" name={`services[${index}].sale_rate`} placeholder="Enter Sale Rate" className="form-control" />
                                                                        <ErrorMessage name={`services[${index}].saleRate`} component="div" className="text-danger" />
                                                                    </div>

                                                                    {/* <div className="form-group col-md-2">
                                                                        <label>From Amount <span style={{ color: 'red' }}>*</span></label>
                                                                        <Field type="text" name={`services[${index}].fromAmount`} placeholder="Enter From Amount" className="form-control" />
                                                                        <ErrorMessage name={`services[${index}].fromAmount`} component="div" className="text-danger" />
                                                                    </div>

                                                                    <div className="form-group col-md-2">
                                                                        <label>To Amount <span style={{ color: 'red' }}>*</span></label>
                                                                        <Field type="text" name={`services[${index}].toAmount`} placeholder="Enter To Amount" className="form-control" />
                                                                        <ErrorMessage name={`services[${index}].toAmount`} component="div" className="text-danger" />
                                                                    </div> */}

                                                                    {/* <div className="form-group col-md-2">
                                                                        <label>Commission Amount <span style={{ color: 'red' }}>*</span></label>
                                                                        <Field type="text" name={`services[${index}].commissionAmt`} placeholder="Enter Commission Amount" className="form-control" />
                                                                        <ErrorMessage name={`services[${index}].commissionAmt`} component="div" className="text-danger" />
                                                                    </div> */}

                                                                    <div className="form-group col-md-2" style={{
                                                                        display: 'flex',
                                                                        alignItems: 'end',
                                                                        marginBottom: '5px'
                                                                    }}>
                                                                        <button type="button" onClick={() => remove(index)} className="btn btn-danger">Remove</button>
                                                                    </div>
                                                                </div>
                                                            ))}

                                                            <button type="button" onClick={() => push({

                                                                duration: '',
                                                                durationType: '',
                                                                mrp: '',
                                                                saleRate: '',
                                                            })} className="btn btn-primary">Add More</button>
                                                        </>
                                                    )}
                                                </FieldArray>
                                            </div>
                                        </div>}


                                        <div className="form-group col-md-12" style={{ textAlign: "end" }}>
                                            <button type="submit" style={{ margin: "20px 0" }} className="btn btn-primary mr-3">Submit</button>
                                        </div>
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

export default AddPackegs;
