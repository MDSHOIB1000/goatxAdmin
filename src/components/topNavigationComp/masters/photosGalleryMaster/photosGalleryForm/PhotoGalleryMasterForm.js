import { Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import CustomInputField from '../../../../../common/CustomInputField';
import { Button } from 'antd';
import Breadcrumbs from '../../../../../common/breadcrumb/Breadcrumbs';
import { toast } from 'react-toastify';
import { addPhotosGallery, clodinaryImage, getupdatePhotosGalleryStatusId, updatePhotosGallery } from '../../../../../api/login/Login';
import { baseUrlImage } from '../../../../../baseUrl';

function PhotoGalleryMasterForm
    () {
    const breadCrumbsTitle = {
        title_1: "master",
        title_2: "Gallery",
    }
    const [initialValues, setInitialValues] = useState({
        image: "",
        isActive: "",
    });
    const params = useParams();
    const navigate = useNavigate()
    const validate = (values) => {
        let errors = {};
        /* if (!values.image) {
            errors.image = "Gallery By Is Required";
        } */
        if (!values.isActive) {
            errors.isActive = "Status Is Required";
        }

        return errors;
    };
    const [profileImage, setProfileImage] = useState();
    const [imageSata, setImageSata] = useState();
    const blankBtn = () => {
        setInitialValues({
            image: "",
            isActive: "",
        });
    }
    const toastSuccessMessage = (message) => {
        toast.success(`${params?.id ? "Update" : "Add"} ${message}`, {
            position: "top-right",
        });
    };
    const submitForm = async (values) => {
        try {
            const updatedValues = { ...values, image: imageSata };
            console.log(updatedValues);


            if (!params?.id) {
                try {
                    // Handle the addition of a new gallery item
                    const res = await addPhotosGallery(updatedValues);
                    if (res?.statusCode === "200") {
                        toastSuccessMessage("Image Successfully");
                        navigate(`/gallery`);
                    }
                } catch (error) {
                    alert(error.message);
                }
            } else {
                try {
                    // Handle the update of an existing gallery item
                    const res = await updatePhotosGallery(params.id, updatedValues);
                    if (res?.statusCode === "200") {
                        toastSuccessMessage("Gallery Updated Successfully");
                        blankBtn(); // Clear form values
                        navigate(`/Gallery`);
                    } else if (res?.statusCode === "403") {
                        toastSuccessMessage("Gallery Access Forbidden");
                        blankBtn(); // Clear form values
                    }
                } catch (error) {
                    alert(`Error: ${error.message}`);
                }
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const imgs = new FormData();
    const handleImageUpload = async (e, id) => {
        imgs.append("image", e.target.files[0]);
        try {
            const res = await clodinaryImage(imgs)

            setTimeout(() => {
                setProfileImage(res?.data)
                setImageSata(res?.data?.data?.url)
            }, 3000)


        } catch (error) {
            alert(`Profile not uploaded`)
        }
    }



    useEffect(() => {
        const fetchCurrency = async () => {
            try {
                if (params?.id) {
                    const response = await getupdatePhotosGalleryStatusId(params.id);
                    setInitialValues(response?.data);

                } else {
                    setInitialValues({
                        image: "",
                        isActive: "",
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
                                    Gallery
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
                                            <div className="row align-items-center">
                                                <div className="col-xl-6 mb-3">
                                                    <div className='row align-items-center'>
                                                        <div className='col-xl-8'>
                                                            <CustomInputField
                                                                type="file"
                                                                onChange={handleImageUpload}
                                                                onBlur={handleBlur}
                                                                value={values?.profileImage?.data?.url}
                                                                id="image"
                                                                name="image"
                                                                placeholder="image"

                                                            />
                                                        </div>
                                                        <div className='col-xl-4'>
                                                            {profileImage?.data?.url && (
                                                                <div className='image'>
                                                                    <picture>
                                                                        <img src={`${baseUrlImage}${profileImage?.data?.url}`} alt='profile_pic' style={{ width: "100%", height: "45px", borderRadius: "8px", objectFit: "contain" }} />
                                                                    </picture>
                                                                </div>
                                                            )}
                                                            {values.image && !profileImage?.data?.url && (
                                                                <div className='image'>
                                                                    <picture>
                                                                        <img src={`${baseUrlImage}${values.image}`} alt='profile_pic' style={{ width: "100%", height: "45px", borderRadius: "8px", objectFit: "contain" }} />
                                                                    </picture>
                                                                </div>
                                                            )}
                                                            {!values.image && !profileImage?.data?.url && (
                                                                <div className='border p-2 rounded'><img id="avatar-image" src="https://lh5.googleusercontent.com/proxy/t08n2HuxPfw8OpbutGWjekHAgxfPFv-pZZ5_-uTfhEGK8B5Lp-VN4VjrdxKtr8acgJA93S14m9NdELzjafFfy13b68pQ7zzDiAmn4Xg8LvsTw1jogn_7wStYeOx7ojx5h63Gliw" alt="Profile Picture" style={{ width: "100%", height: "45px", borderRadius: "8px", objectFit: "cover" }} /></div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-xl-6 mb-3">
                                                    <select
                                                        className="form-select"
                                                        aria-label="Default select example"
                                                        onChange={handleChange}
                                                        value={values?.isActive}
                                                        name="isActive"
                                                    >
                                                        <option value="" disabled>
                                                            Select Gallery Status
                                                        </option>
                                                        <option value={true}>Active</option>
                                                        <option value={false}>Inactive</option>
                                                    </select>
                                                    {errors.isActive && touched.isActive && (
                                                        <div className="error">{errors.isActive}</div>
                                                    )}
                                                </div>

                                                <div className="col-xl-2 mb-3">
                                                    <Link to='/gallery' type='submit' className="btn btn-danger light ms-1">Cancel</Link>
                                                    {/* <Button className="btn btn-danger light ms-1" onClick={() => cancelBtn()}>Cancel</Button> */}
                                                    <button
                                                        className="btn btn-primary me-1"
                                                        type="submit"
                                                        disabled={!isValid || !dirty}
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
            </div>
        </>
    )
}

export default PhotoGalleryMasterForm

