import CustomInputField from "../../../../common/CustomInputField";
import CustomDropdown from "../../../../common/CustomDropdown";
import { Formik, Form, Field, ErrorMessage } from "formik";
import CustomTextArea from "../../../../common/CustomTextArea";
import { useEffect, useState } from "react";
import { getZoon, listUserType } from "../../../../api/login/Login";
import Item from "antd/es/list/Item";

function BasicDetails({ validate, business, value, handleInput_A }) {
  const [data, setData] = useState()
  const [userData, setuserData] = useState()
  const name = "dropdown";
  const placeholder = "Course Name";
  const type = "dropdown";

  const getUserType = async () => {
    const res = await listUserType()
    const resZone = await getZoon()
    setData(resZone?.data)
    setuserData(res?.data);
  }
  useEffect(() => {
    getUserType()
  }, [])


  return (
    <>
      <Formik
        initialValues={value}
        validate={validate}
        // onSubmit={submitForm}
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
            <>
              {value?.gst ? (<form className="tbl-captionn" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-xl-4 mb-3">
                    <CustomInputField
                      type="text"
                      placeholder="GST Number "
                      value={values?.gst?.GSTIN}
                      hasError={errors.gst && touched.gst}
                      onChange={handleInput_A}
                      onBlur={handleBlur}
                      errorMsg={errors.gst}
                      id="gst"
                      name="gst"
                    />
                    <span className="text-white position-relative rounded" style={{ bottom: "34px", left: '280px', padding: "2px  8px", display: "inline-block", backgroundColor: `${values?.is_gst === true ? 'green' : 'red'}` }}>{values?.is_gst === true ? 'Verify ✅' : 'Not Verify ❎'}</span>
                  </div>
                  <div className="col-xl-4 mb-3">
                    <CustomInputField
                      type="text"
                      placeholder="Name "
                      value={values?.name}
                      hasError={errors.name && touched.name}
                      onChange={handleInput_A}
                      onBlur={handleBlur}
                      errorMsg={errors.name}
                      autoFocus={true}
                      id="name"
                      name="name"
                    />
                  </div>
                  <div className="col-xl-4 mb-3">
                    <CustomInputField
                      type="text"
                      placeholder="GST Type "
                      value={values?.gstType}
                      hasError={errors.gstType && touched.gstType}
                      onChange={handleInput_A}
                      onBlur={handleBlur}
                      errorMsg={errors.gstType}
                      autoFocus={true}
                      id="GST Type"
                      name="GST Type"
                    />
                  </div>
                  <div className="col-xl-4 mb-3">
                    <CustomInputField
                      type="text"
                      placeholder="Shop Name "
                      value={values?.shop_name}
                      hasError={errors.shop_name && touched.shop_name}
                      onChange={handleInput_A}
                      onBlur={handleBlur}
                      errorMsg={errors.shop_name}
                      autoFocus={true}
                      id="Shop Name"
                      name="Shop Name"
                    />
                  </div>
                  {/* <div className="col-xl-4 mb-3">
                  <CustomInputField
                    type="email"
                    placeholder="Email "
                    value={values?.email}
                    // hasError={errors.email && touched.email}
                    onChange={handleInput_A}
                    onBlur={handleBlur}
                    // errorMsg={errors.email}
                    id="email"
                    name="email"
                  />
                
                </div> */}
                  {/* <div className="col-xl-4 mb-3">
                  <CustomInputField
                    type="text"
                    placeholder="Mobile Number "
                    value={values?.mobile}
                    hasError={errors.mobile && touched.mobile}
                    onChange={handleInput_A}
                    onBlur={handleBlur}
                    errorMsg={errors.mobile}
                    id="mobile"
                    name="mobile"
                  />
                  <span className="text-white position-relative rounded" style={{ bottom: "34px", left: '280px', padding: "2px  8px", display: "inline-block", backgroundColor: `${values?.mobileVerified === true ? 'green' : 'red'}` }}>{values?.mobileVerified === true ? 'Verify ✅' : 'Not Verify ❎'}</span>
                </div> */}
                  {/* {userData &&
                  <div className="col-xl-4 mb-3">
                    <select class="form-select" value={value?.user_type === "65e2f1a585bfd78f9866c09b" ? "65e2f1a585bfd78f9866c09b" : "65e2f15785bfd78f9866c090"} aria-label="Default select example" name="is_active" onChange={handleChange}>

                      {userData.map((itm, i) => {
                        return <option value={itm?._id} key={i} disabled>{itm?.user_type}</option>
                      })}


                    </select>
                  </div>
                } */}
                  {/* <div className="col-xl-4 mb-3">
                  <CustomInputField
                    type="text"
                    placeholder="Shop Name "
                    value={values?.shopName}
                    hasError={errors.shopName && touched.shopName}
                    onChange={handleInput_A}
                    onBlur={handleBlur}
                    errorMsg={errors.shopName}
                    id="shopName"
                    name="shopNamename"
                  />
                </div> */}


                  {/* <div className="col-xl-4 mb-3">
                  <CustomInputField
                    type="text"
                    placeholder="Pan Number "
                    value={values?.pan_number}
                    hasError={errors.pan_number && touched.pan_number}
                    onChange={handleInput_A}
                    onBlur={handleBlur}
                    errorMsg={errors.pan_number}
                    id="pan_number"
                    name="pan_number"

                  />
                  <span className="text-white position-relative rounded" style={{ bottom: "34px", left: '280px', padding: "2px  8px", display: "inline-block", backgroundColor: `${values?.is_pan_verified === true ? 'green' : 'red'}` }}>{values?.is_pan_verified == true ? 'Verify ✅ ' : 'Not Verify ❎ '}</span>
                </div> */}

                  {data &&
                    <div className="col-xl-4 mb-3">
                      <select class="form-select" aria-label="Default select example" onChange={handleChange}>
                        <option selected> select Zone</option>
                        {data && data?.map((item) => {
                          return <option value="1">{item?.name}</option>
                        })}
                      </select>
                    </div>
                  }

                  {/* <div className="col-xl-4 mb-3">
                  <CustomInputField
                    type="text"
                    placeholder="Aadhar Number "
                    value={values?.adhaar_number}
                    // hasError={errors.adhaar_number && touched.adhaar_number}
                    onChange={handleInput_A}
                    onBlur={handleBlur}
                    // errorMsg={errors.adhaar_number}
                    id="adhaar_number"
                    name="adhaar_number"
                  />
                  <span className="text-white position-relative rounded" style={{ bottom: "34px", left: '280px', padding: "2px  8px", display: "inline-block", backgroundColor: `${value?.is_adhaar_verified === true ? 'green' : 'red'}` }}>{value?.is_adhaar_verified == true ? 'Verify ✅' : 'Not Verify ❎'}</span>
                </div> */}
                  <div className="col-xl-12 mb-3">
                    <CustomTextArea
                      placeholder=" Address "
                      value={values?.gst?.principal_place_address}
                      // hasError={errors.officeAddress && touched.officeAddress}
                      onChange={handleInput_A}
                      onBlur={handleBlur}
                      // errorMsg={errors.officeAddress}
                      autoFocus={false}
                      rows="6"
                      id="officeAddress"
                      name="officeAddress"
                    />
                  </div>
                </div>
                {/* <div className="card-footer text-right">
                <button
                  type="submit"
                  className="btn btn-danger waves-effect waves-light"
                >
                  Next
                </button>
              </div> */}
              </form>) : (
                <section className="ListDistributer exppdf">
                  <div className="row m-4">
                    <div className="col-xl-12">
                      <div className="card">
                        <div className="card-body p-0">
                          <div className="table-responsive active-projects style-1">
                            <div className="tbl-caption">
                              <h4 className="heading mb-0"><b>Business Details</b></h4>
                            </div>
                            <div id="empoloyees-tblwrapper_wrapper" className="dataTables_wrapper no-footer">
                              <table id="table-to-xls" className="table dataTable no-footer" role="grid" aria-describedby="empoloyees-tblwrapper_info">
                                <thead>
                                  <tr role="row">
                                    <p>
                                      <th  style={{ width: '200px' }}>
                                        Business Address
                                      </th>
                                      <td style={{ width: '200px' }}>
                                      {business?.business_Address}
                                      </td>
                                    </p>
                                    <p>
                                      <th  style={{ width: '200px' }}>
                                        Business Area
                                      </th>
                                       <td style={{ width: '200px' }}>
                                      {business?.business_Area}
                                      </td>
                                    </p>
                                    <p>
                                      <th  style={{ width: '200px' }}>
                                        Business City
                                      </th>
                                       <td style={{ width: '200px' }}>
                                      {business?.business_Area}
                                      </td>
                                    </p>
                                    <p>
                                      <th  style={{ width: '200px' }}>
                                        Business Pin Code
                                      </th>
                                      <td style={{ width: '200px' }}>
                                      {business?.business_pincode}
                                      </td>
                                    </p>
                                    <p>
                                      <th  style={{ width: '200px' }}>
                                        Shop Name
                                      </th>
                                      <td style={{ width: '200px' }}>
                                      {business?.shop_name}
                                      </td>
                                    </p>
                                  </tr>
                                </thead>
                                {/* <tbody>
                                  <tr role="row" className="odd" style={{ cursor: "pointer" }}>
                                    <td>{business?.business_Address}</td>
                                    <td>{business?.business_Area}</td>
                                    <td>{business?.business_city}</td>
                                    <td>{business?.business_pincode}</td>
                                  </tr>
                                </tbody> */}
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              )

              }

            </>
          );
        }}
      </Formik >

    </>
  );








  // if (value.is_gst) {
  //   return (
  //     <>
  //       <Formik
  //         initialValues={value}
  //         validate={validate}
  //         // onSubmit={submitForm}
  //         className="tbl-captionn"
  //         enableReinitialize
  //       >
  //         {(formik) => {
  //           const {
  //             values,
  //             handleChange,
  //             handleSubmit,
  //             errors,
  //             touched,
  //             handleBlur,
  //             isValid,
  //             dirty,
  //           } = formik;
  //           return (
  //             <form className="tbl-captionn" onSubmit={handleSubmit}>
  //               <div className="row">
  //               <div className="col-xl-4 mb-3">
  //                   <CustomInputField
  //                     type="text"
  //                     placeholder="GST Number "
  //                     value={business?.business_Address}
  //                     hasError={errors.gst && touched.gst}
  //                     onChange={handleInput_A}
  //                     onBlur={handleBlur}
  //                     errorMsg={errors.gst}
  //                     id="gst"
  //                     name="gst"
  //                   />
  //                   <span className="text-white position-relative rounded" style={{ bottom: "34px", left: '280px', padding: "2px  8px", display: "inline-block", backgroundColor: `${values?.is_gst === true ? 'green' : 'red'}` }}>{values?.is_gst === true ? 'Verify ✅' : 'Not Verify ❎'}</span>
  //                 </div>
  //                 <div className="col-xl-4 mb-3">
  //                   <CustomInputField
  //                     type="text"
  //                     placeholder="Name "
  //                     value={values?.name}
  //                     hasError={errors.name && touched.name}
  //                     onChange={handleInput_A}
  //                     onBlur={handleBlur}
  //                     errorMsg={errors.name}
  //                     autoFocus={true}
  //                     id="name"
  //                     name="name"
  //                   />
  //                 </div>
  //                 <div className="col-xl-4 mb-3">
  //                   <CustomInputField
  //                     type="text"
  //                     placeholder="GST Type "
  //                     value={values?.gstType}
  //                     hasError={errors.gstType && touched.gstType}
  //                     onChange={handleInput_A}
  //                     onBlur={handleBlur}
  //                     errorMsg={errors.gstType}
  //                     autoFocus={true}
  //                     id="GST Type"
  //                     name="GST Type"
  //                   />
  //                 </div>
  //                  <div className="col-xl-4 mb-3">
  //                   <CustomInputField
  //                     type="text"
  //                     placeholder="Shop Name "
  //                     value={values?.shop_name}
  //                     hasError={errors.shop_name && touched.shop_name}
  //                     onChange={handleInput_A}
  //                     onBlur={handleBlur}
  //                     errorMsg={errors.shop_name}
  //                     autoFocus={true}
  //                     id="Shop Name"
  //                     name="Shop Name"
  //                   />
  //                 </div>
  //                 {/* <div className="col-xl-4 mb-3">
  //                   <CustomInputField
  //                     type="email"
  //                     placeholder="Email "
  //                     value={values?.email}
  //                     // hasError={errors.email && touched.email}
  //                     onChange={handleInput_A}
  //                     onBlur={handleBlur}
  //                     // errorMsg={errors.email}
  //                     id="email"
  //                     name="email"
  //                   />

  //                 </div> */}
  //                 {/* <div className="col-xl-4 mb-3">
  //                   <CustomInputField
  //                     type="text"
  //                     placeholder="Mobile Number "
  //                     value={values?.mobile}
  //                     hasError={errors.mobile && touched.mobile}
  //                     onChange={handleInput_A}
  //                     onBlur={handleBlur}
  //                     errorMsg={errors.mobile}
  //                     id="mobile"
  //                     name="mobile"
  //                   />
  //                   <span className="text-white position-relative rounded" style={{ bottom: "34px", left: '280px', padding: "2px  8px", display: "inline-block", backgroundColor: `${values?.mobileVerified === true ? 'green' : 'red'}` }}>{values?.mobileVerified === true ? 'Verify ✅' : 'Not Verify ❎'}</span>
  //                 </div> */}
  //                 {/* {userData &&
  //                   <div className="col-xl-4 mb-3">
  //                     <select class="form-select" value={value?.user_type === "65e2f1a585bfd78f9866c09b" ? "65e2f1a585bfd78f9866c09b" : "65e2f15785bfd78f9866c090"} aria-label="Default select example" name="is_active" onChange={handleChange}>

  //                       {userData.map((itm, i) => {
  //                         return <option value={itm?._id} key={i} disabled>{itm?.user_type}</option>
  //                       })}


  //                     </select>
  //                   </div>
  //                 } */}
  //                 {/* <div className="col-xl-4 mb-3">
  //                   <CustomInputField
  //                     type="text"
  //                     placeholder="Shop Name "
  //                     value={values?.shopName}
  //                     hasError={errors.shopName && touched.shopName}
  //                     onChange={handleInput_A}
  //                     onBlur={handleBlur}
  //                     errorMsg={errors.shopName}
  //                     id="shopName"
  //                     name="shopNamename"
  //                   />
  //                 </div> */}


  //                 {/* <div className="col-xl-4 mb-3">
  //                   <CustomInputField
  //                     type="text"
  //                     placeholder="Pan Number "
  //                     value={values?.pan_number}
  //                     hasError={errors.pan_number && touched.pan_number}
  //                     onChange={handleInput_A}
  //                     onBlur={handleBlur}
  //                     errorMsg={errors.pan_number}
  //                     id="pan_number"
  //                     name="pan_number"

  //                   />
  //                   <span className="text-white position-relative rounded" style={{ bottom: "34px", left: '280px', padding: "2px  8px", display: "inline-block", backgroundColor: `${values?.is_pan_verified === true ? 'green' : 'red'}` }}>{values?.is_pan_verified == true ? 'Verify ✅ ' : 'Not Verify ❎ '}</span>
  //                 </div> */}

  //                 {data &&
  //                   <div className="col-xl-4 mb-3">
  //                     <select class="form-select" aria-label="Default select example" onChange={handleChange}>
  //                       <option selected> select Zone</option>
  //                       {data && data?.map((item) => {
  //                         return <option value="1">{item?.name}</option>
  //                       })}
  //                     </select>
  //                   </div>
  //                 }

  //                 {/* <div className="col-xl-4 mb-3">
  //                   <CustomInputField
  //                     type="text"
  //                     placeholder="Aadhar Number "
  //                     value={values?.adhaar_number}
  //                     // hasError={errors.adhaar_number && touched.adhaar_number}
  //                     onChange={handleInput_A}
  //                     onBlur={handleBlur}
  //                     // errorMsg={errors.adhaar_number}
  //                     id="adhaar_number"
  //                     name="adhaar_number"
  //                   />
  //                   <span className="text-white position-relative rounded" style={{ bottom: "34px", left: '280px', padding: "2px  8px", display: "inline-block", backgroundColor: `${value?.is_adhaar_verified === true ? 'green' : 'red'}` }}>{value?.is_adhaar_verified == true ? 'Verify ✅' : 'Not Verify ❎'}</span>
  //                 </div> */}
  //                 <div className="col-xl-12 mb-3">
  //                   <CustomTextArea
  //                     placeholder=" Address "
  //                     value={values?.gst?.principal_place_address}
  //                     // hasError={errors.officeAddress && touched.officeAddress}
  //                     onChange={handleInput_A}
  //                     onBlur={handleBlur}
  //                     // errorMsg={errors.officeAddress}
  //                     autoFocus={false}
  //                     rows="6"
  //                     id="officeAddress"
  //                     name="officeAddress"
  //                   />
  //                 </div>
  //               </div>
  //               {/* <div className="card-footer text-right">
  //                 <button
  //                   type="submit"
  //                   className="btn btn-danger waves-effect waves-light"
  //                 >
  //                   Next
  //                 </button>
  //               </div> */}
  //             </form>
  //           );
  //         }}
  //       </Formik>


  //     </>
  //   );
  // } else {
  //   return (
  //     <>
  //       <Formik
  //         initialValues={value}
  //         validate={validate}
  //         // onSubmit={submitForm}
  //         className="tbl-captionn"
  //         enableReinitialize
  //       >
  //         {(formik) => {
  //           const {
  //             values,
  //             handleChange,
  //             handleSubmit,
  //             errors,
  //             touched,
  //             handleBlur,
  //             isValid,
  //             dirty,
  //           } = formik;
  //           return (
  //             <form className="tbl-captionn" onSubmit={handleSubmit}>
  //               <div className="row">
  //                 <div className="col-xl-4 mb-3">
  //                   <CustomInputField
  //                     type="text"
  //                     placeholder="Name "
  //                     value={values?.name}
  //                     hasError={errors.name && touched.name}
  //                     onChange={handleInput_A}
  //                     onBlur={handleBlur}
  //                     errorMsg={errors.name}
  //                     autoFocus={true}
  //                     id="name"
  //                     name="name"
  //                   />
  //                 </div>

  //                 <div className="col-xl-4 mb-3">
  //                   <CustomInputField
  //                     type="text"
  //                     placeholder="Mobile Number "
  //                     value={values?.mobile}
  //                     hasError={errors.mobile && touched.mobile}
  //                     onChange={handleInput_A}
  //                     onBlur={handleBlur}
  //                     errorMsg={errors.mobile}
  //                     id="mobile"
  //                     name="mobile"
  //                   />
  //                   <span className="text-white position-relative rounded" style={{ bottom: "34px", left: '280px', padding: "2px  8px", display: "inline-block", backgroundColor: `${values?.mobileVerified === true ? 'green' : 'red'}` }}>{values?.mobileVerified === true ? 'Verify ✅' : 'Not Verify ❎'}</span>
  //                 </div>

  //                 {/* <div className="col-xl-4 mb-3">
  //                   <CustomInputField
  //                     type="text"
  //                     placeholder="Shop Name "
  //                     value={values?.shopName}
  //                     hasError={errors.shopName && touched.shopName}
  //                     onChange={handleInput_A}
  //                     onBlur={handleBlur}
  //                     errorMsg={errors.shopName}
  //                     id="shopName"
  //                     name="shopNamename"
  //                   />
  //                 </div> */}

  //                 <div className="col-xl-4 mb-3">
  //                   <CustomInputField
  //                     type="text"
  //                     placeholder="GST Number (optional)"
  //                     value={values?.gst?.GSTIN}
  //                     hasError={errors.gst && touched.gst}
  //                     onChange={handleInput_A}
  //                     onBlur={handleBlur}
  //                     errorMsg={errors.gst}
  //                     id="gst"
  //                     name="gst"
  //                   />
  //                   <span className="text-white position-relative rounded" style={{ bottom: "34px", left: '280px', padding: "2px  8px", display: "inline-block", backgroundColor: `${values?.is_gst === true ? 'green' : 'red'}` }}>{values?.is_gst === true ? 'Verify ✅' : 'Not Verify ❎'}</span>
  //                 </div>


  //               </div>

  //             </form>
  //           );
  //         }}
  //       </Formik>


  //     </>
  //   );
  // }



}
export default BasicDetails;
