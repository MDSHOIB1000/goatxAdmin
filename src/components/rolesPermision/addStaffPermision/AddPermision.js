import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Breadcrumbs from '../../../common/breadcrumb/Breadcrumbs';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import CustomInputField from '../../../common/CustomInputField';
import CustomPassInputField from '../../../common/CustomPassInputField';
import { addStaffpermision, clodinaryImage, getAreaSelecStaff, getBlockSelecStaff, getDepartmentSelecStaff, getDesignationSelecStaff, getFloorSelecStaff, getOfficeSelecStaff, getRoleSelecStaff, getStaffpermisionId, getStaffSelecAdd, getWardSelecStaff, updateStaffpermision } from '../../../api/login/Login';
import { toast, ToastContainer } from 'react-toastify';
import { baseUrlImage } from '../../../baseUrl';

const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    mobile: Yup.number().typeError('Mobile number must be a number').required('Mobile number is required'),
    password: Yup.string().when('$isUpdate', {
        is: false,
        then: Yup.string().required('Password is required')
    }),
        /* role_id: Yup.string().required('Role is required'),
        building_id: Yup.string().required('Building is required'),
        floor_id: Yup.string().required('Floor is required'),
        area_id: Yup.string().required('Area is required'),
        block_id: Yup.string().required('Block is required'),
        ward_id: Yup.string().required('Ward is required'),
        office_id: Yup.string().required('Office is required'),
        department_id: Yup.string().required('Department is required'),
        designation_id: Yup.string().required('Designation is required'),
        slug: Yup.string().required('Slug is required'),  */// Added slug validation
});

const validate = async (values) => {
    let errors = {};

    try {
        await validationSchema.validate(values, { abortEarly: false });
    } catch (validationErrors) {
        validationErrors.inner.forEach((error) => {
            errors[error.path] = error.message;
        });
    }

    return errors;
};

function AddPermision() {
    const breadCrumbsTitle = {
        id: "1",
        title_1: "Roles & Permissions",
        title_2: "Add Staff",
    };

    const [profileImage, setProfileImage] = useState();
    const [initialValues, setInitialValues] = useState({
        name: "",
        email: "",
        profile: "",
        password: "",
        role_id: "",
        building_id: "",
        office_id: "",
        block_id: "",
        ward_id: "",
        area_id: "",
        floor_id: "",
        department_id: "",
        designation_id: "",
    });
    const [buildingState, setBuildingState] = useState([]);
    const [officeState, setOfficeState] = useState([]);
    const [floorState, setFloorState] = useState([]);
    const [areaState, setAreaState] = useState([]);
    const [blockState, setBlockState] = useState([]);
    const [wardState, setWardState] = useState([]);
    const [departmentState, setDepartmentState] = useState([]);
    const [designationState, setDesignationState] = useState([]);
    const [roleState, setRoleState] = useState([]);

    const params = useParams();
    const navigate = useNavigate();

    const toastSuccessMessage = () => {
        toast.success(`${params?.id ? "Update" : "Add"} Staff Successfully.`, {
            position: "top-right",
        });
    };

    const toastErrorMessage = (message) => {
        toast.error(`${message}`, {
            position: "top-right",
        });
    };

    const submitForm = async (values) => {
        try {
            if (!params?.id) {
                const res = await addStaffpermision(values);
                if (res?.statusCode === "200") {
                    toastSuccessMessage();
                    setTimeout(() => {
                        navigate('/staff-list');
                    }, 4000);
                } else if (res?.error) {
                    toastErrorMessage(res?.message);
                }
            } else {
                const res = await updateStaffpermision(params.id, values);
                if (res?.statusCode === "200") {
                    toastSuccessMessage();
                    setTimeout(() => {
                        navigate('/staff-list');
                    }, 4000);
                }
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const fetchDropdownData = async () => {
        try {
            const [buildingRes, officeRes, floorRes, areaRes, blockRes, wardRes, departmentRes, designationRes, roleRes] = await Promise.all([
                getStaffSelecAdd(),
                getOfficeSelecStaff(),
                getFloorSelecStaff(),
                getAreaSelecStaff(),
                getBlockSelecStaff(),
                getWardSelecStaff(),
                getDepartmentSelecStaff(),
                getDesignationSelecStaff(),
                getRoleSelecStaff()
            ]);

            setBuildingState(buildingRes?.data || []);
            setOfficeState(officeRes?.data || []);
            setFloorState(floorRes || []);
            setAreaState(areaRes?.data || []);
            setBlockState(blockRes?.data || []);
            setWardState(wardRes?.data || []);
            setDepartmentState(departmentRes?.data || []);
            setDesignationState(designationRes?.data || []);
            setRoleState(roleRes?.data || []);
        } catch (error) {
            console.error("Error fetching dropdown data:", error);
        }
    };

    useEffect(() => {
        const fetchInitialData = async () => {
            try {
                if (params?.id) {
                    const response = await getStaffpermisionId(params.id);
                    setInitialValues(response?.data || {});
                }
            } catch (error) {
                console.error("Error fetching initial data:", error);
            }
        };

        fetchInitialData();
        fetchDropdownData();
    }, [params?.id]);

    const imgs = new FormData();
    const handleImageUpload = async (e, id) => {
        imgs.append("image", e.target.files[0]);
        try {
            const res = await clodinaryImage(imgs)
            setTimeout(() => {
                setProfileImage(res?.data)
            }, 3000)


        } catch (error) {
            alert(`Profile not uploaded`)
        }
    }

    return (
        <>
            <Breadcrumbs breadCrumbsTitle={breadCrumbsTitle} />
            <div style={{ margin: "14px" }}>
                <div className="card">
                    <div className="card-body p-0">
                        <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption tbl-caption-2">
                                <h4 className="heading mb-0">
                                    {params?.id ? "UPDATE" : "ADD"} Staff
                                </h4>
                            </div>
                            <Formik
                                initialValues={initialValues}
                                validate={validate}
                                onSubmit={submitForm}
                                enableReinitialize
                                context={{ isUpdate: Boolean(params?.id) }}
                            >
                                {({ values, handleChange, handleSubmit, errors, touched, handleBlur, isValid, dirty }) => (
                                    <Form className="tbl-captionn" onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="col-xl-6 mb-3">
                                                <CustomInputField
                                                    type="text"
                                                    value={values.name}
                                                    hasError={errors.name && touched.name}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    errorMsg={errors.name}
                                                    autoFocus
                                                    id="name"
                                                    name="name"
                                                    placeholder="Name"
                                                />
                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <CustomInputField
                                                    type="email"
                                                    value={values.email}
                                                    hasError={errors.email && touched.email}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    errorMsg={errors.email}
                                                    autoFocus
                                                    id="email"
                                                    name="email"
                                                    placeholder="Email"
                                                />
                                            </div>
                                            <div className="col-xl-6 mb-3">
                                                <CustomInputField
                                                    type="number"
                                                    value={values.mobile}
                                                    hasError={errors.mobile && touched.mobile}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    errorMsg={errors.mobile}
                                                    autoFocus
                                                    id="mobile"
                                                    name="mobile"
                                                    placeholder="Mobile"
                                                />
                                            </div>
                                            {!params.id && (
                                                <div className="col-xl-6 mb-3">
                                                    <CustomPassInputField
                                                        type="password"
                                                        value={values.password}
                                                        hasError={errors.password && touched.password}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        errorMsg={errors.password}
                                                        autoFocus
                                                        id="password"
                                                        name="password"
                                                        placeholder="Password"
                                                    />
                                                </div>
                                            )}
                                            <div className="col-xl-6 mb-3">
                                                <div className='row align-items-center'>
                                                    <div className='col-xl-10'>
                                                        <CustomInputField
                                                            type="file"
                                                            onChange={handleImageUpload}
                                                            onBlur={handleBlur}
                                                            id="profile"
                                                            name="profile"
                                                            placeholder="Profile"
                                                        />
                                                    </div>
                                                    <div className='col-xl-2'>
                                                        {profileImage?.data?.url && (
                                                            <div className='profilepic'>
                                                                <picture>
                                                                    <img src={`${baseUrlImage}${profileImage?.data?.url}`} alt='profile_pic' />
                                                                </picture>
                                                            </div>
                                                        )}
                                                        {values.profile && !profileImage?.data?.url && (
                                                            <div className='profilepic'>
                                                                <picture>
                                                                    <img src={`${baseUrlImage}${values.profile}`} alt='profile_pic' />
                                                                </picture>
                                                            </div>
                                                        )}
                                                        {!values.profile && !profileImage?.data?.url && (
                                                            <div className='border p-2 rounded-circle'><img id="avatar-image" src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" alt="Profile Picture" /></div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            {[
                                                { name: 'role_id', label: 'Role', options: roleState },
                                                { name: 'building_id', label: 'Building', options: buildingState },
                                                { name: 'floor_id', label: 'Floor', options: floorState },
                                                { name: 'area_id', label: 'Area', options: areaState },
                                                { name: 'block_id', label: 'Block', options: blockState },
                                                { name: 'ward_id', label: 'Ward', options: wardState },
                                                { name: 'office_id', label: 'Office', options: officeState },
                                                { name: 'department_id', label: 'Department', options: departmentState },
                                                { name: 'designation_id', label: 'Designation', options: designationState },
                                            ].map(({ name, label, options }) => (
                                                <div className="col-xl-6 mb-3" key={name}>
                                                    <Field as="select" name={name} className="form-select" onChange={handleChange} onBlur={handleBlur} value={values[name]}>
                                                        <option value="">Select {label}</option>
                                                        {options.map(item => (
                                                            <option key={item._id} value={item._id}>{item.name}</option>
                                                        ))}
                                                    </Field>
                                                    <ErrorMessage name={name} component="div" className="text-danger" />
                                                </div>
                                            ))}
                                        </div>
                                        <div>
                                            <Link
                                                to="/staff-list"
                                                className="btn btn-danger light ms-1"
                                            >
                                                Cancel
                                            </Link>
                                            <button
                                                className="btn btn-primary me-1"
                                                type="submit"
                                                disabled={!dirty || (params.id && !isValid)}
                                            >
                                                {params?.id ? "Update" : "Add"}
                                            </button>
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer className="text-center" />
        </>
    );
}

export default AddPermision;
