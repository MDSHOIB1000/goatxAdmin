import { useEffect, useState } from "react";
import BasicDetails from "./basicDetails/BasicDetails";
import Presnoaldetails from "./presnolDetails/PresnoalDetails";
import Services from "./services/Services";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { Tab, Tabs } from "react-bootstrap";
import { getDistIdAgainst, updateDistIdAgainst } from "../../../api/login/Login";
import { use } from "i18next";
import Wallet from "./wallet/Wallet";
import BillingAddress from "./billingAddress/BillingAddress";
import ShipingAddress from "./shippingAddress/ShipingAddress";
import ApprovedArea from "./approved/Approved";
import DocumentDetails from "./documentsDetails/DocumentDetails";
import KycDetails from "./kycDetails/KycDetails";
import BankDetail from "./bankdetail/BankDetail";
import Package from "./Package";

const TAB = ["Basic Details", "Permanent Details", "Service"];

function CreateUserDistributer() {
  const [state, setState] = useState({})
  const [data, setData] = useState(null)
  const [permission, setPermission] = useState()
  const [business, setBusnissDetails] = useState(null)

  // console.log(business,"business details");
  const params = useParams()
  const [selectedTabPosition, setSelectedTabPosition] = useState(0);
  const [basicDetails, setbasicDetails] = useState({
    name: "",
    email: "",
    mobile: "",
    masterType: "",
    shopName: "",
    gst: "",
    pan_number: "",
    adhaar_number: "",
    office_address: "",
    is_pan_verified: null,
    is_adhaar_verified: null,
    is_gst: null,
    emailVerified: null,
    mobileVerified: null,
  });
  const [documnetDetails, setDocumnetDetail] = useState({
    adhaar_number: '',
    is_adhaar_verified: null,
    pan_number: '',
    is_pan_verified: null,
  });
  const [bankDetails, setbankDetails] = useState({
    name: '',
    ifsc: '',
    remarks: "",
    bankAccountnum: '',
    bank_name: '',
    AccountType: '',
  });
  const [permanentDetails, setpermanentDetails] = useState({
    p_address: "",
    state: "",
    pinCode: "",
    district: "",
    country: "",
    main_wallet: null,

  })

  const [service, setservice] = useState({
    H_service_socity: "",
    cable_tv_service: "",
    lpg_service: "",
    pancard_service: "",

  })
  const [wallet, setWallet] = useState({
    main_wallet: "",
    commision_wallet: "",
  })
  const [kycDetails, setKycDetails] = useState({
    docs: "",
  })
  const [initialValues, setInitialValue] = useState({
    is_approved: null
  })
const [retailerInfo,setRetailerInfo]=useState("")
  const handleChange = (e) => {
    const approved = e.target.value;
    console.log("approved----", approved);
    setInitialValue({ ...initialValues, is_approved: approved })
  }
  const submitForm = async (e, data) => {
    e.preventDefault()
    const cloneMerg = { permission: permission }
    const clone = { ...cloneMerg }
    console.log('clone', clone);
    try {
      const res = await updateDistIdAgainst(params?.id, clone);
      console.log(res);
      if (res?.statusCode == "200") {
        toastSuccessMessage();
        /* āsetTimeout(() => {
          navigate(`/member-list/${params.id}/${params.name}`)
        }, [4000]) */
      }
    } catch (error) {
      alert(error)
    }

  }
  const submitApproved = async () => {
    const aproveVal = initialValues.is_approved
    let booleanValue = JSON.parse(aproveVal);

    const cloneMerg = { basicDetails: basicDetails, documnetDetails: documnetDetails, permanentDetails: permanentDetails, service: service, is_approved: initialValues, kycDetails: kycDetails.docs, }
    const clone = { ...cloneMerg, is_approved: booleanValue }
    console.log(clone);
    try {
      const res = await updateDistIdAgainst(params?.id, clone);
      if (res?.statusCode == "200") {
        toastSuccessMessage();
        /* āsetTimeout(() => {
          navigate(`/member-list/${params.id}/${params.name}`)
        }, [4000]) */
      }
    } catch (error) {
      alert(error)
    }
  }
  const servicesData = async () => {
    try {
      const res = await getDistIdAgainst(params?.id)
      setData(res?.data?.permission)
      setRetailerInfo(res?.data)
    } catch (error) {
      alert("error occurs")
    }
    try {
      const res = await getDistIdAgainst(params?.id)
      setBusnissDetails(res?.data)
    } catch (error) {
      alert("error occurs")
    }
  }
  useEffect(() => {
    servicesData()
  }, [])

  const handlePermission = (category, field, event) => {
    // console.log(state.permission);
    console.log(data);
    const filter = JSON.parse(JSON.stringify(data))
    filter?.forEach(element => {
      if (element?._id == category) {
        console.log(element);
        if (field == 'is_Buy') {
          element.permit.isBuy = event.target.value
        } else {
          element.permit.is_activate = event.target.value
        }

      }
    });
    // setPermission(filter);
    // console.log(filter);

    setData(filter)
    setPermission(filter)
  }
  // /^(\+\d{1,3}\s?\d{1,14}|\d{5,15})$/
  const validate = (values) => {
    let errors = {};
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const regexmobile = /^(\+\d{1,3}\s?\d{1,14}|\d{5,15})$/;
    const regexPanNumber = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
    const regexAadhar = /^[2-9]{1}[0-9]{3}\s{1}[0-9]{4}\s{1}[0-9]{4}$/;
    // const regexGstNumber = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}[Z]{1}[0-9A-Z]{1}$/;

    if (!values.firstName) {
      errors.firstName = "First Name is required";
    }

    if (!values.lastName) {
      errors.lastName = "Last Name is required";
    }

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regexEmail.test(values.email)) {
      errors.email = "Invalid Email";
    }

    if (!values.mobile) {
      errors.mobile = "Mobile Number is required";
    } else if (!regexmobile.test(values.mobile)) {
      errors.mobile = "Invalid Mobile Number";
    }

    if (!values.masterType) {
      errors.masterType = "Master Type is required";
    }

    if (!values.shopName) {
      errors.shopName = "Shop Name is required";
    }

    /* if (!values.gst) {
      errors.gst = "Lock Amount is required";
    } */

    if (!values.panNumber) {
      errors.panNumber = "PAN Number is required";
    } else if (!regexPanNumber.test(values.panNumber)) {
      errors.panNumber = "Invalid PAN Number";
    }
    if (!values.adhaar_number) {
      errors.adhaar_number = "Aadhar Number is required";
    } else if (!regexAadhar.test(values.adhaar_number)) {
      errors.adhaar_number = "Invalid Aadhar Number";
    }
    // if (!values.gst) {
    //   errors.gst = "GST Number is required";
    // } else if (!regexGstNumber.test(values.gst)) {
    //   errors.gst = "Invalid GST Number";
    // }
    if (!values.officeAddress) {
      errors.officeAddress = "Office Address is required";
    }

    return errors;
  };
  const toastSuccessMessage = () => {
    toast.success(`${params?.id ? "Update" : "Add"} User Successfully.`, {
      position: "top-center",
    });
  };

  const handleInput_A = (e) => {
    const clone = { ...basicDetails }
    clone[e.target.name] = e.target.value
    setbasicDetails(clone)

  }
  const handleInput_B = (e) => {
    const clone = { ...permanentDetails }
    clone[e.target.name] = e.target.value
    setpermanentDetails(clone)
  };
  const handleInputDocumnetDetail = (e) => {
    const clone = { ...documnetDetails };
    clone[e.target.name] = e.target.value;
    setDocumnetDetail(clone)
  }
  const handleInput_C = (e) => {
    /* console.log(e.target?.value);
    const clone = {...service}
    clone[e.target.name]= e.target.value
    setservice(clone) */

  }
  const tabChange = (position) => {
    setSelectedTabPosition(position);
  };
  useEffect(() => {
    const fetchCurrency = async (id) => {
      try {
        const response = await getDistIdAgainst(id);
        // console.log('detailD--', response?.data);
        setState(response.data)
        if (response.data?.is_gst) {
          setbasicDetails({
            name: response.data?.name,
            email: response.data?.email,
            mobile: response.data?.mobile,
            selectMemberType: response.data?.selectMemberType,
            adhaar_number: response.data?.adhaar_number,
            office_address: "officeAddress",
            is_pan_verified: response.data?.is_pan_verified,
            is_adhaar_verified: response.data?.is_adhaar_verified,
            pan_number: response.data?.pan_number,
            gst: response.data?.gst,
            is_gst: response.data?.is_gst,
            gstType: response.data?.gst_register_type,
            shop_name: response.data?.shop_name,
            mobileVerified: response.data?.mobileVerified,
            emailVerified: response.data?.emailVerified,
            user_type: response.data?.user_type_id,
          })
        }

        setDocumnetDetail({
          adhaar_number: response.data?.adhaar_number,
          is_adhaar_verified: response.data?.is_adhaar_verified,
          pan_number: response.data?.pan_number,
          is_pan_verified: response.data?.is_pan_verified,
        })
        setpermanentDetails({
          presentAddr: response.data?.presentAddr,
          state: response.data?.state,
          pinCode: response.data?.pinCode,
          district: response.data?.district,
          country: response.data?.country,
          main_wallet: response.data?.main_wallet,
        })
        setbankDetails({ ...response.data?.bank })
        setservice({
          H_service_socity: response.data?.H_service_socity,
          cable_tv_service: response.data?.cable_tv_service,
          lpg_service: response.data?.lpg_service,
          state: response.data?.state,
          pancard_service: response.data?.pancard_service,
        })

        // setPermission({
        //   isBuy: response.data?.H_service_socity
        // })
        setInitialValue({
          is_approved: response.data?.is_approved
        })

        setWallet({
          main_wallet: response.data?.main_wallet,
          commision_wallet: response.data?.commision_wallet,
          aeps_wallet: response.data?.aeps_wallet,
        })
        setKycDetails({
          docs: response.data?.docs,
        })
      } catch (error) {
        console.error("Error fetching User Details:", error);
      }
    };

    fetchCurrency(params?.id);
  }, [params?.id]);
  return (
    <>
      <section className="CreateUserDistributer m-4 ">
        <div className="row">
          <div className="col-xl-12">
            <div className="card">
              <div className="card-body p-0">
                {/* <div className="table-responsive active-projects style-1 " >
                  <div className="tbl-caption tbl-caption-2" id="justify-none_Tab1">
                    {TAB.map((item, index) => (
                      <button
                        className={`heading mb-0 ${selectedTabPosition === index ? "active" : ""
                          }`}
                        // disabled={selectedTabPosition !== index}
                        onClick={() => tabChange(index)}
                        key={`tab_${index}`}
                      >
                        <b>{item}</b>
                      </button>
                    ))}
                  </div>
                </div>

                {selectedTabPosition === 0 && (
                  <BasicDetails initialValues={initialValues.basicDetails} validate={validate} submitForm={submitForm} />
                )}
                {selectedTabPosition === 1 && (
                  <Presnoaldetails
                    initialValues={initialValues.permanentDetails}
                  />
                )}
                {selectedTabPosition === 2 && (
                  <Services initialValues={initialValues.service} />
                )} */}

                <div className="table-responsive active-projects style-1 " >
                  <div className="tbl-caption tbl-caption-2" >
                    <h4 className="heading mb-0">
                      {params?.id ? "UPDATE" : "ADD"} USER

                    </h4>
                  </div>
                  <Tabs
                    defaultActiveKey="IdentifyVerification"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                  >

                    <Tab eventKey="IdentifyVerification" title="Identify Verification">
                      <DocumentDetails initialValues={documnetDetails} state={state} value={documnetDetails} handleInputDocumnetDetail={handleInputDocumnetDetail} submitForm={submitForm} />
                    </Tab>

                    <Tab eventKey="Personal Details" title="Personal Details">
                      <Presnoaldetails
                        initialValues={permanentDetails}
                        value={permanentDetails}
                        handleInput_B={handleInput_B}
                      />
                    </Tab>
                    <Tab eventKey="GST & Business Details" title="GST & Business Details">
                      <BasicDetails validate={validate} value={basicDetails} handleInput_A={handleInput_A} business={business} />
                    </Tab>
                    <Tab eventKey="Bank Details" title="Bank Details">
                      <BankDetail initialValues={bankDetails} validate={validate} value={bankDetails} handleInput_A={handleInput_A} />
                    </Tab>
                    <Tab eventKey=" Document | Video KYC" title=" Document | Video KYC">
                      <KycDetails initialValues={kycDetails} state={state} />
                    </Tab>
                    <Tab eventKey="Approval" title="Approval">
                      <ApprovedArea initialValues={initialValues} submitApproved={submitApproved} handleChange={handleChange} />
                    </Tab>

                    {/* <Tab eventKey="Services" title="Services">
                      <Services initialValues={service} validate={validate} value={state} data={data} submitForm={submitForm} handlePermission={handlePermission} />
                    </Tab> */}
                    <Tab eventKey="packagess" title="Package">
                      <Package initialValues={service} validate={validate} value={state} data={data} submitForm={submitForm} handlePermission={handlePermission} retailerInfo={retailerInfo}/>
                      {/* <Services initialValues={service} validate={validate} value={state} data={data} submitForm={submitForm} handlePermission={handlePermission} /> */}
                    </Tab>

                    {/* <Tab eventKey="Wallet" title="Wallet">
                      <Wallet initialValues={wallet} />
                    </Tab>
                    <Tab eventKey="billingAddress" title="Billing Address">
                      <BillingAddress />
                    </Tab>
                    <Tab eventKey="shippingAddress" title="Shipping Address">
                      <ShipingAddress />
                    </Tab> */}

                  </Tabs>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
}
export default CreateUserDistributer;
