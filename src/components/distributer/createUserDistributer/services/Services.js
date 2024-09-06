import { Button } from "react-bootstrap";
import CustomDropdown from "../../../../common/CustomDropdown";
import { Formik } from "formik";
import { getDistIdAgainst, getServiceMaster } from "../../../../api/login/Login";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Services({ submitForm, validate, handleInput_C, handlePermission, permission, data }) {

  const params = useParams()
  const itemList = [
    {
      name: "Enable",
      value: "Enable",
    },
    {
      name: "Disable",
      value: "Disable",
    },
  ];
  const changeHandle = (selectedData) => {
    // TODO
  };




  return (
    <>
      <Formik
        initialValues={''}
        validate={validate}
        onSubmit={submitForm}
        className="tbl-captionn"
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
            <form className="tbl-captionn" onSubmit={submitForm}>
              <div className="row">
                {data && data?.map((item) => {
                  if(item?.name){
                   console.log(item);
                  return <div className="col-xl-4 mb-3" key={item._id}>
                  <div>
                    <h5>{item?.name}</h5> <span>
                      <select className="form-select" aria-label="Default select example" defaultValue={item.permit.isBuy} value={item.permit.isBuy} onChange={(e) => handlePermission(item._id, "is_Buy", e)} >
                        <option selected> select Is Buy</option>
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                      </select>

                      <select className="form-select  mt-2" aria-label="Default select example" defaultValue={item.permit.is_activate} value={item.permit.is_activate} onChange={(e) => handlePermission(item._id, "is_activate", e)}>
                        <option selected> select Is Active</option>
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                      </select>
                    </span>
                  </div>
                </div>
                 }
                })}
              </div>
              <button type="submit" className="bg-danger p-2 border-0 text-white rounded">update</button>
            </form>
          );
        }}
      </Formik>
    </>
  );
}
export default Services;
