import { Formik } from "formik";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import CustomDropdown from "../../../common/CustomDropdown";
// import Select from 'react-select';
import {
  ZoneGetFilter,
  areaList,
  getServiceMaster,
} from "../../../api/login/Login";
import Breadcrumbs from "../../../common/breadcrumb/Breadcrumbs";

function FormServicePermission() {
  const itemList = [
    {
      value: 1,
      lable: "Active",
    },
    {
      value: 2,
      lable: "De-Active",
    },
  ];
  const [conbo, setCombo] = useState(null);
  const [area, setArea] = useState(null);
  const [selectedOption, setSelectedOption] = useState();
  // console.log(selectedOption);

  const [areaId, setAreaId] = useState(null);
  console.log(areaId);
  const [initialValues, setInitialValues] = useState({
    service_id: "",
    area_id: "",
    zone_id: [],
    is_active: "",
  });
  const params = useParams();
  const validate = (values) => {
    let errors = {};
    if (!values.service_id) {
      errors.service_id = "Service Id is required";
    }
    if (!values.area_id) {
      errors.area_id = "Area Id is required";
    }
    if (!values.zone_id) {
      errors.zone_id = "Zone Id is required";
    }
    if (!values.is_active) {
      errors.is_active = "Select Status is required";
    }
    return errors;
  };

  const toastSuccessMessage = () => {
    toast.success(`${params?.id ? "Update" : "Add"} Country Successfully.`, {
      position: "top-center",
    });
  };

  const changeHandleArea = (e) => {
    setSelectedOption(e.target.value);
    zoneGetFilterData();
  };

  const serviceidget = async () => {
    try {
      const data = await getServiceMaster();
      setCombo(data?.data);
    } catch (error) {
      alert(error.message);
    }
  };
  const areaidget = async () => {
    try {
      const data = await areaList();
      console.log(data);
      setArea(data?.data);
    } catch (error) {
      alert(error.message);
    }
  };

  const zoneGetFilterData = async () => {
    try {
      const data = await ZoneGetFilter(selectedOption);
      setAreaId(data?.data);
    } catch (error) {
      alert(error.message);
    }
  };

  const submitForm = async (values) => {
    try {
      if (!params?.id) {
        try {
          // const res = await countryAdd(values);
          // if (res?.statusCode == "200") {
          //     toastSuccessMessage();
          // }
        } catch (error) {}
      } else {
        try {
          // await countryUpdate(params.id, values);
        } catch (error) {}
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    serviceidget();
    areaidget();
  }, []);

  useEffect(() => {
    const fetchCurrency = async () => {
      try {
        if (params?.id) {
          // const response = await getcountry(params.id);
          // const currencyData = response.data;
          // setInitialValues(currencyData);
        } else {
          setInitialValues({
            name: "",
            code: "",
            curruncy_id: "",
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
      <Breadcrumbs breadCrumbsTitle={""} />
      <div className="row m-4">
        <div className="col-xl-12">
          <div className="card">
            <div className="card-body p-0">
              <div className="table-responsive active-projects style-1">
                <div className="tbl-caption tbl-caption-2">
                  <h4 className="heading mb-0">
                    {params?.id ? "UPDATE" : "ADD"} service area permision
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
                        <div className="row">
                          <div className="col-xl-6 mb-3">
                            <select
                              className="form-select"
                              aria-label="Default select example"
                              id="service_id"
                              name="service_id"
                              value={values.service_id}
                              onChange={handleChange}
                              hasError={errors.service_id && touched.service_id}
                              onBlur={handleBlur}
                              errorMsg={touched.service_id && errors.service_id}
                              autoFocus={true}
                            >
                              <option selected> select Service</option>
                              {conbo &&
                                conbo?.map((item) => {
                                  return (
                                    <option value={item?._id}>
                                      {item?.service_name}
                                    </option>
                                  );
                                })}
                            </select>
                          </div>
                          <div className="col-xl-6 mb-3">
                            <select
                              className="form-select"
                              aria-label="Default select example"
                              id="area_id"
                              name="area_id"
                              value={values.area_id}
                              onChange={changeHandleArea}
                              hasError={errors.area_id && touched.area_id}
                              onBlur={handleBlur}
                              errorMsg={touched.area_id && errors.area_id}
                              autoFocus={true}
                            >
                              <option selected> select Area</option>
                              {area &&
                                area?.map((item) => {
                                  return (
                                    <option value={item?._id}>
                                      {item?.name}
                                    </option>
                                  );
                                })}
                            </select>
                          </div>
                          <div className="col-xl-6 mb-3">
                            <CustomDropdown
                              itemList={areaId}
                              placeholder="Select Zone"
                              isSingleSelect={false}
                              icon={true}
                              defaultSelectedItem={["india"]}
                              // name="zone_id"
                              // onChange={handleChange}
                            />
                          </div>

                          {/* <div className="col-xl-6 mb-3">
                                                        <select className="form-select" aria-label="Default select example" id="area_id" name="area_id" value={values.area_id} onChange={handleChange}
                                                            hasError={
                                                                errors.area_id && touched.area_id
                                                            }

                                                            onBlur={handleBlur}
                                                            errorMsg={
                                                                touched.area_id && errors.area_id
                                                            }
                                                            autoFocus={true}
                                                        >
                                                            <option selected> Select Parent</option>
                                                            {area &&
                                                                area?.map((item) => {

                                                                    return (
                                                                        <option value={item?._id}>
                                                                            {item?.name}
                                                                        </option>
                                                                    );
                                                                })}
                                                        </select>

                                                    </div> */}
                          <div className="col-xl-6 mb-3">
                            <select
                              className="form-select"
                              aria-label="Default select example"
                            >
                              <option selected>select Status</option>
                              <option value={true}>Active</option>
                              <option value={false}>De Active</option>
                            </select>
                          </div>
                        </div>
                        <div>
                          <Link
                            to="/service-area-permision"
                            className="btn btn-danger light ms-1"
                          >
                            Cancel
                          </Link>
                          <button
                            className="btn btn-primary me-1"
                            type="submit"
                            disabled={!isValid || !dirty}
                          >
                            {params?.id ? "Update" : "Add"}
                          </button>
                        </div>
                      </form>
                    );
                  }}
                </Formik>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}
export default FormServicePermission;
