import { baseUrl } from "../../baseUrl";
import axiosInstance from "../../axiosServiseFactory/AxiosServiseFactory";
import axios from "axios";
// Export  Excel Apis  ---------------------!

export const exportExcelDmt_txnList = (data) => {
  return axiosInstance.post(`${baseUrl}dmt_txn/st/report/all`, data);
};
//count Length RetDist ----------------------!

export const getLength = () => {
  return axiosInstance.get(`${baseUrl}user/memberType/count`);
}


export const getMenusdata = () => {
  return axiosInstance.get(`${baseUrl}role/navigate`);
}




export const department = (val) => {
  return axiosInstance.post(`${baseUrl}department/admin`, val, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const dmtDisputePriority = () => {
  return axiosInstance.get(`${baseUrl}dmtDisputePriority/admin`, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const getNameUser = (val) => {
  return axiosInstance.get(`${baseUrl}user/member/filter/search?name=${val}&count=10&page=1`, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const getTicketByIdTicket = (id) => {
  return axiosInstance.get(`${baseUrl}dmtdisputechat/admin?dispute_id=${id}&count=10&page=0`, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const getByIdTicket = (id) => {
  return axiosInstance.get(`${baseUrl}dmtDisputes/${id}`, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const relatedService = () => {
  return axiosInstance.get(`${baseUrl}/service/serviceListForBBPSCommision`, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};
export const relatedService2 = () => {
  const arr = ["65def1e41c20b7a8ba230200", "65def1e41c20b7a8ba2301ff"]
  return axiosInstance.get(`${baseUrl}service/fetchByServiceType?ids=${JSON.stringify(arr)}`, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};
export const lockAmount = (data) => {
  return axiosInstance.post(`${baseUrl}staff/lockAmt`, data, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};
export const relatedService23 = () => {
  const arr = ["65d70e989e6fb337fd07fdb6"]
  return axiosInstance.get(`${baseUrl}service/fetchByServiceType?ids=${JSON.stringify(arr)}`, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};
export const relatedServiceType = () => {
  return axiosInstance.get(`${baseUrl}servicecategory`, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};






export const LoginSubmit = (data) =>
  axiosInstance.post(`${baseUrl}staff/login`, data);


export const sendOtpByEmail = (data) => {
  return axios.post(`${baseUrl}auth/mb/verifyEmail`, data);
};
export const submitReplay = (data) => {
  return axiosInstance.post(`${baseUrl}dmtdisputeChat/add_dispute/admin`, data);
};
export const sendVerifyEmailOtp = (data) => {
  return axios.post(`${baseUrl}auth/mb/verifyEmailOtp`, data);
}

export const sendOtpByPhone = (data) => {
  return axios.post(`${baseUrl}auth/mb/verifyMobileNo`, data);
};
export const sendVerifyPhoneOtp = (data) => {

  return axios.post(`${baseUrl}auth/mb/verifyMobileNoOtp`, data);
}
export const sendTicketCreate = (data) => {

  return axiosInstance.post(`${baseUrl}dmtDisputes/add_disputestaff`, data);
}
export const sendPackegesCreate = (data) => {

  return axiosInstance.post(`${baseUrl}package/addPackage`, data);
}
export const sendPackegesUpdate = ({ id, data }) => {

  return axiosInstance.put(`${baseUrl}package/Updatpackage/${id}`, data);
}

export const getServicePacage = (data) => {

  return axiosInstance.get(`${baseUrl}service/ids?ids=${data}`);
}
export const getPackegById = (id) => {
  return axiosInstance.get(`${baseUrl}package/${id}`);
};
export const PackegDelete = (id) => {
  return axiosInstance.delete(`${baseUrl}package/deletePackage/${id}`);
};
export const getDataPacage = (data) => {
  return axiosInstance.get(`${baseUrl}package?start_date=${data.start_date}&end_date=${data.end_date}&page=${data.page}&count=${data.count}&name=${data.name}`);
};
export const getDataPacageSales = (data) => {
  return axiosInstance.get(`${baseUrl}packagePayment?page=${data?.page}&count=${data?.count}&package_id=${data?.package_id ? data.package_id : ''}`);
};
export const DashboardGet = (date) => {
  return axiosInstance.get(`${baseUrl}dashboard/admin?date=${date.data}`);
};
export const getDataReports = (data) => {
  return axiosInstance.get(`${baseUrl}bbps_txn/admin?start_date=${data.start_date}&end_date=${data.end_date}&biller_id=${data.biller_id}&page=${data.page}&count=${data.count}&category_id=${data.param}`);
};
export const paymentReport = (data) => {
  return axiosInstance.get(`${baseUrl}payout/admin?start_date=${data.start_date}&end_date=${data.end_date}&txn_id=${data.txn_id}&page=${data.page}&count=${data.count}`);
};
export const ApespaymentReport = (data) => {
  return axiosInstance.post(`${baseUrl}adhaarPay/staff`, data, {
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};
export const getOperater = (id) => {
  return axiosInstance.get(`${baseUrl}operator/public?api_id=1&service=${id}`);
};

export const currencyAdd = (data) => {
  return axiosInstance.post(`${baseUrl}currency/addcurrency`, data);
};
export const resetPassword = (data) => {
  return axiosInstance.put(`${baseUrl}staff/changePass`, data);
};
export const currencyList = (data) => {
  return axiosInstance.get(`${baseUrl}currency`);
};
export const currencyDelete = (id) => {
  return axiosInstance.delete(`${baseUrl}currency/deletecurrency/${id}`);
};

export const getCurrency = (id) => {
  return axiosInstance.get(`${baseUrl}currency/${id}`);
};

export const currencyUpdate = (id, value) => {
  return axiosInstance.put(`${baseUrl}currency/updatcurrency/${id}`, value);
};


export const countryAdd = (data) => {
  return axiosInstance.post(`${baseUrl}country/addcountry`, data);
};
export const getCountryAdd = () => {
  return axiosInstance.get(`${baseUrl}country`);
};
// -----------logical Play ATQ COUNTRY  STATE CITY----
export const countryList = (data) => {
  return axiosInstance.get(`${baseUrl}country`);
};
export const countryDelete = (id) => {
  return axiosInstance.delete(`${baseUrl}country/deletecountry/${id}`);
};
export const StateAddCollageSelectList = (id) => {
  return axiosInstance.get(`${baseUrl}state/country/${id}`);
};
export const cityAddCollageSelectList = (id) => {
  return axiosInstance.get(`${baseUrl}city/state?id=${id}`);
};

export const getcountry = (id) => {
  return axiosInstance.get(`${baseUrl}country/${id}`);
};
// -----------------------CityApis-----------------------------
export const cityAdd = (data) => {
  return axiosInstance.post(`${baseUrl}city/addcity`, data);
};
export const getcityUpdate = () => {
  return axiosInstance.get(`${baseUrl}currency`);
};
export const cityListbyPagination = (page, count) => {
  return axiosInstance.get(`${baseUrl}city/page?page=${page}&count=${count}&state_id=&country_id=`);
};
export const cityUpdate = (id, value) => {
  return axiosInstance.put(`${baseUrl}city/updateCity/${id}`, value);
};
export const cityDelete = (id) => {
  return axiosInstance.delete(`${baseUrl}city/deletecity/${id}`);
};

export const getcity = (id) => {
  return axiosInstance.get(`${baseUrl}city/${id}`);
};


export const sendNotification = (data) => {
  return axiosInstance.post(`${baseUrl}fcm/staff/save`, data);
};
export const notificaltionSendAll = (data) => {
  return axiosInstance.post(`${baseUrl}notification/sendNotificationToAll`, data);
};


export const countryUpdate = (id, value) => {
  return axiosInstance.put(`${baseUrl}country/updatecountry/${id}`, value);
};
export const languageAdd = (data) => {
  return axiosInstance.post(`${baseUrl}language/addlanguage`, data);
};
export const languageList = () => {
  return axiosInstance.get(`${baseUrl}language`);
};
export const languageDelete = (id) => {
  return axiosInstance.delete(`${baseUrl}language/delete_language/${id}`);
};

export const getlanguage = (id) => {
  return axiosInstance.get(`${baseUrl}language/${id}`);
};

export const languageUpdate = (id, value) => {
  return axiosInstance.put(`${baseUrl}language/update_language/${id}`, value);
};

export const areaAdd = (data) => {
  return axiosInstance.post(`${baseUrl}area/addarea`, data);
};


// ---------Zone Module Intrigation--------------

export const zoneCountryAdd = (data) => {
  return axiosInstance.post(`${baseUrl}zone/addzone`, data);
};

export const areaList = () => {
  return axiosInstance.get(`${baseUrl}area`);
};
export const areaDelete = (id) => {
  return axiosInstance.delete(`${baseUrl}area/deletearea/${id}`);
};

export const getarea = (id) => {
  return axiosInstance.get(`${baseUrl}area/${id}`);
};

export const areaUpdate = ({ id, value }) => {
  return axiosInstance.put(`${baseUrl}area/updatearea/${id}`, value);
};

export const staffAdd = (data) => {
  return axiosInstance.post(`${baseUrl}staff/addstaff`, data);
};
export const staffList = () => {
  return axiosInstance.get(`${baseUrl}staff`);
};
export const staffType = () => {
  return axiosInstance.get(`${baseUrl}stafftype`);
};
export const staffDelete = (id) => {
  return axiosInstance.delete(`${baseUrl}staff/deletestaff/${id}`);
};

export const getstaff = (id) => {
  return axiosInstance.get(`${baseUrl}staff/${id}`);
};

export const staffUpdate = (id, value) => {
  return axiosInstance.put(`${baseUrl}staff/updatestaff/${id}`, value);
};

export const staffTypeAdd = (data) => {
  return axiosInstance.post(`${baseUrl}stafftype/addstaff`, data);
};
export const staffTypeList = () => {
  return axiosInstance.get(`${baseUrl}stafftype`);
};
export const staffTypeDelete = (id) => {
  return axiosInstance.delete(`${baseUrl}stafftype/deleteStaff/${id}`);
};

export const getstaffType = (id) => {
  return axiosInstance.get(`${baseUrl}stafftype/${id}`);
};

export const staffTypeUpdate = (id, value) => {
  return axiosInstance.put(`${baseUrl}stafftype/updateStaff/${id}`, value);
};



// Zoon master
export const getZoon = () => {
  return axiosInstance.get(`${baseUrl}zone`);
};

export const zoonById = ({ id }) => {
  return axiosInstance.get(`${baseUrl}zone/${id}`);
};
export const zoonPost = ({ data }) => {
  return axiosInstance.post(`${baseUrl}zone/addzone`, data);
};

// Users
export const addUsers = (data) => {
  return axiosInstance.post(`${baseUrl}user/adduser`, data);
};
export const usersList = () => {
  return axiosInstance.get(`${baseUrl}user`);
};

export const userDelete = (id) => {
  return axiosInstance.delete(`${baseUrl}user/deleteuser/${id}`);
};

export const getUserId = (id) => {
  return axiosInstance.get(`${baseUrl}user/${id}`);
};

export const updateUser = (id, value) => {
  return axiosInstance.put(`${baseUrl}user/updateuser/${id}`, value);
};


// userType Intrigation 

export const addUserType = (data) => {
  return axiosInstance.post(`${baseUrl}usertype/adduser`, data);
};
export const changeSTatuss = (data) => {
  return axiosInstance.post(`${baseUrl}virtual_wallet/fund-transfer`, data, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};
export const listUserType = () => {
  return axiosInstance.get(`${baseUrl}usertype`);
};
export const deleteUserType = (id) => {
  return axiosInstance.delete(`${baseUrl}usertype/deleteuser/${id}`);
};
export const getUserType = (id) => {
  return axiosInstance.get(`${baseUrl}usertype/${id}`);
};
export const UserTypeUpdate = (id, value) => {
  return axiosInstance.put(`${baseUrl}usertype/updateuser/${id}`, value);
};










// Role Master 

export const addRole = (data) => {
  return axiosInstance.post(`${baseUrl}role/addrole`, data);
}
export const addDepartment = (data) => {
  return axiosInstance.post(`${baseUrl}department/add_Department`, data);
}
export const getListRole = (page, count) => {
  return axiosInstance.get(`${baseUrl}role?page=${page}&count=${count}`);
}
export const getListDepartment = (data) => {
  return axiosInstance.post(`${baseUrl}department/admin`, {
    page: data.page, count: 10
  })
}
export const DeleteRole = (id) => {
  return axiosInstance.delete(`${baseUrl}role/deleterole/${id}`,);
}
export const DeleteDepartment = (id) => {
  return axiosInstance.delete(`${baseUrl}department/delete_department/${id}`,);
}
export const getRoleEdit = (id) => {
  return axiosInstance.get(`${baseUrl}role/${id}`);
};
export const getDepartmentEdit = (id) => {
  return axiosInstance.get(`${baseUrl}department/${id}`);
};
export const updateRole = (id, value) => {
  return axiosInstance.put(`${baseUrl}role/updatrole/${id}`, value);
};
export const updateDepartment = (id, value) => {
  return axiosInstance.put(`${baseUrl}department/update_department/${id}`, value);
};

//Payout Beneficiary Api Intrigation :-

export const addBeneficiaryData = (data) => {
  return axiosInstance.post(`${baseUrl}payout-beneficiary/addpayout`, data);
}
export const getBeneficiaryData = () => {
  return axiosInstance.get(`${baseUrl}payout-beneficiary`);
}
export const DeleteBeneficiaryData = (id) => {
  return axiosInstance.delete(`${baseUrl}payout-beneficiary/deletepayout/${id}`,);
}
export const getBeneficiaryDataEdit = (id) => {
  return axiosInstance.get(`${baseUrl}payout-beneficiary/${id}`);
};
export const updateBeneficiaryData = (id, value) => {
  return axiosInstance.put(`${baseUrl}payout-beneficiary/updatpayout/${id}`, value);
};

export const stateMasterAdd = (data) => {
  return axiosInstance.post(`${baseUrl}state/addstate`, data);
};
export const getStateMaster = () => {
  return axiosInstance.get(`${baseUrl}state`);
};
// export const countryList = (data) => {
//   return axiosInstance.get(`${baseUrl}country`);
// };
export const stateMasterDelete = (id) => {
  return axiosInstance.delete(`${baseUrl}state/deletestate/${id}`);
};

export const getstateMaster = (id) => {
  return axiosInstance.get(`${baseUrl}state/${id}`);
};

export const stateMasterUpdate = (id, value) => {
  return axiosInstance.put(`${baseUrl}state/updatestate/${id}`, value);
};

// bankMaster
export const bankMasterAdd = (data) => {
  return axiosInstance.post(`${baseUrl}bank/addbank`, data);
};
export const getBankMaster = () => {
  return axiosInstance.get(`${baseUrl}bank`);
};

export const BankMasterDelete = (id) => {
  return axiosInstance.delete(`${baseUrl}bank/deletebank/${id}`);
};

export const getBnakMasterId = (id) => {
  return axiosInstance.get(`${baseUrl}bank/${id}`);
};

export const bankMasterUpdate = (id, value) => {
  return axiosInstance.put(`${baseUrl}bank/updatebank/${id}`, value);
};

// statusMaster
export const statusMasterAdd = (data) => {
  return axiosInstance.post(`${baseUrl}status/addstatus`, data);
};
export const getStatusMaster = () => {
  return axiosInstance.get(`${baseUrl}status`);
};
export const dmtstatus = () => {
  return axiosInstance.get(`${baseUrl}dmtstatus/admin`);
};

export const statusMasterDelete = (id) => {
  return axiosInstance.delete(`${baseUrl}status/deletestatus/${id}`);
};

export const getStatusMasterId = (id) => {
  return axiosInstance.get(`${baseUrl}status/${id}`);
};

export const statusMasterUpdate = (id, value) => {
  return axiosInstance.put(`${baseUrl}status/updatstatus/${id}`, value);
};

// paymentMaster
export const paymentMethodAdd = (data) => {
  return axiosInstance.post(`${baseUrl}payment-method/addpayment`, data);
};
export const getpaymentMethod = () => {
  return axiosInstance.get(`${baseUrl}payment-method`);
};

export const paymentMethodDelete = (id) => {
  return axiosInstance.delete(`${baseUrl}payment-method/deletepayment/${id}`);
};

export const getpaymentMasterId = (id) => {
  return axiosInstance.get(`${baseUrl}payment-method/${id}`);
};

export const paymentMasterUpdate = (id, value) => {
  return axiosInstance.put(`${baseUrl}payment-method/updatpayment/${id}`, value);
};

// -------------Service Master ---------------!
export const addServiceMaster = (data) => {

  return axiosInstance.post(`${baseUrl}course/addservice`, data);
};
export const getServiceMaster = (page, count) => {
  return axiosInstance.get(`${baseUrl}course/pagination?page=${page}&count=${count}&name=&service_type_id=`)
}
export const getServiceMasterFilter = (data) => {
  return axiosInstance.get(`${baseUrl}course/pagination?page=${data?.page}&count=${data?.count}&name=${data?.name}&service_type_id=${data?.service_type_id}`)
}
export const getServiceMasterId = (id) => {
  return axiosInstance.get(`${baseUrl}course/${id}`);
};
export const updateServiceMaster = (id, value) => {
  return axiosInstance.put(`${baseUrl}course/updateservice/${id}`, value);
};
export const deleteServiceMasterList = (id, value) => {
  return axiosInstance.delete(`${baseUrl}course/deleteservice/${id}`);
};

// serviceCategory

export const serviceCategoryAdd = (data) => {
  return axiosInstance.post(`${baseUrl}stream/addcategory`, data);
};
export const getServiceCategory = () => {
  return axiosInstance.get(`${baseUrl}stream`);
};
export const getCourseTypeForCombo = () => {
  return axiosInstance.get(`${baseUrl}coursetype/admin`);
};
export const getServiceCategoryByPagination = (count, page) => {
  return axiosInstance.get(`${baseUrl}stream/admin?&count=${count}&page=${page}`);
};

export const ServiceCategoryDelete = (id) => {
  return axiosInstance.delete(`${baseUrl}stream/deletecategory/${id}`);
};

export const getServiceCategoryId = (id) => {
  return axiosInstance.get(`${baseUrl}stream/${id}`);
};

export const ServiceCategoryUpdate = (id, value) => {
  return axiosInstance.put(`${baseUrl}stream/updatecategory/${id}`, value);
};

// staff------//

export const staffUpdateProfile = (value) => {
  return axiosInstance.put(`${baseUrl}staff/profile/update`, value);
};

export const getUpdateProfile = (value) => {
  return axiosInstance.get(`${baseUrl}staff/profile/view`);
};


// provider

export const providerAdd = (data) => {
  return axiosInstance.post(`${baseUrl}provider/addprovider`, data);
};
export const getprovider = () => {
  return axiosInstance.get(`${baseUrl}provider`);
};

export const providerDelete = (id) => {
  return axiosInstance.delete(`${baseUrl}provider/deleteprovider/${id}`);
};

export const getProviderId = (id) => {
  return axiosInstance.get(`${baseUrl}provider/${id}`);
};

export const providerUpdate = (id, value) => {
  return axiosInstance.put(`${baseUrl}provider/updateprovider/${id}`, value);
};

// clodinaryImage

export const clodinaryImage = (value) => {
  return axios.post(`${baseUrl}cloudinary/addImage`, value);
};

// clodinaryImage

// Zone get filter

export const ZoneGetFilter = (id) => {
  return axiosInstance.get(`${baseUrl}zone/get/filter`, id);
};

// Api  Master

export const ApiTransactionAdd = (data) => {
  return axiosInstance.post(`${baseUrl}apiList/addApi`, data);
};
export const getApiTransaction = () => {
  return axiosInstance.get(`${baseUrl}apiList`);
};

export const apiMasterDelete = (id) => {
  return axiosInstance.delete(`${baseUrl}apiList/deleteApi/${id}`);
};

export const getapiMasterId = (id) => {
  return axiosInstance.get(`${baseUrl}apiList/${id}`);
};

export const apiMasterUpdate = (id, value) => {
  return axiosInstance.put(`${baseUrl}apiList/updateApi/${id}`, value);
};

// Api Transaction Master

export const getApiTransactionMaster = () => {
  return axiosInstance.get(`${baseUrl}apiTrans`);
};
export const getTransactionList = (id) => {
  return axiosInstance.delete(`${baseUrl}apiTrans/deleteApiTrans/${id}`);
};


// Contact Enquiries Api

export const contactEnquiryAdd = (data) => {
  return axiosInstance.post(`${baseUrl}contact-enquiries/addContactEnquiries`, data);
};
export const getcontactEnquiry = () => {
  return axiosInstance.get(`${baseUrl}contact-enquiries`);
};

export const contactEnquiryDelete = (id) => {
  return axiosInstance.delete(`${baseUrl}contact-enquiries/deleteContactEnquiries/${id}`);
};

export const getcontactEnquiryId = (id) => {
  return axiosInstance.get(`${baseUrl}contact-enquiries/${id}`);
};

export const apiContactEnquiry = (id, value) => {
  return axiosInstance.put(`${baseUrl}contact-enquiries/updateContactEnquiries/${id}`, value);
};

// agent onBoarding -------!

export const addAgentOnboarding = (data) => {
  return axiosInstance.post(`${baseUrl}agentonboarding/addOnboarding`, data);
};
export const getAgentOnboarding = () => {
  return axiosInstance.get(`${baseUrl}agentonboarding`)
}
export const getAgentOnboardingEdit = (id) => {
  return axiosInstance.get(`${baseUrl}agentonboarding/${id}`)
}
export const updateAgentOnboarding = (id, value) => {
  return axiosInstance.put(`${baseUrl}agentonboarding/updateOnBoarding/${id}`, value);
};
export const deleteAgentOnboarding = (id) => {
  return axiosInstance.delete(`${baseUrl}agentonboarding/deleteOnBoarding/${id}`);
};

export const getAreaZoon = () => {
  return axiosInstance.get(`${baseUrl}area`)
}

// pagination

export const paginationApiArea = (page, count) => {
  return axiosInstance.get(`${baseUrl}area/page/${page}&${count}`)
}

export const paginationApiMaster = (page, count) => {
  return axiosInstance.get(`${baseUrl}bank/page/${page}&${count}`)
}
export const paginationUserTypeMaster = (page, count) => {
  return axiosInstance.get(`${baseUrl}usertype/page/${page}&${count}`)
}
export const paginationstaffMaster = (page, count) => {
  return axiosInstance.get(`${baseUrl}staff/page/${page}&${count}`)
}
export const paginationstaffTypeMaster = (page, count) => {
  return axiosInstance.get(`${baseUrl}stafftype/page/${page}&${count}`)
}
export const paginationPayoutbeneficiaryMaster = (page, count) => {
  return axiosInstance.get(`${baseUrl}payout-beneficiary/page/${page}&${count}`)
}
export const paginationCountryMaster = (page, count) => {
  return axiosInstance.get(`${baseUrl}country/page/${page}&${count}`)
}


// pagination
export const reailerDistIdAgainstAll = (page, count, id) => {
  return axiosInstance.get(`${baseUrl}course`)
}
// Distributor Retailer

export const reailerDistIdAgainst = (page, count, id) => {
  return axiosInstance.get(`${baseUrl}user/member/filter?id=${id}&page=${page}&count=${count}`)
}
export const reailerDistIdAgainstFillers = (data) => {
  return axiosInstance.get(`${baseUrl}user/member/filter/search?mobile=${data.mobile}&page=${data.page}&count=${data.count}&id=${data.id}&email=${data.email}&is_approved=${data.kycStatus ? data.kycStatus : ''}&name=${data.name}&refer_id=${data.refer_id}`)
}
export const updateDistributerApproval = (val, id) => {
  return axiosInstance.put(`${baseUrl}user/updateuserStatus/${id}`, val)
}

export const changePin = (val) => {
  return axiosInstance.put(`${baseUrl}staff/pinChange`, val)
}
export const sendForgotPinOtp = (val) => {
  return axiosInstance.put(`${baseUrl}staff/forgotpinsendotp`, val)
}
export const sendForgotPinOtpVerify = (val) => {
  return axiosInstance.put(`${baseUrl}staff/forgotpinverifyotp`, val)
}

export const changePassword = (val) => {
  return axiosInstance.put(`${baseUrl}staff/passwordChange`, val)
}

// Distributor Retailer upDate

export const getDistIdAgainst = (id) => {
  return axiosInstance.get(`${baseUrl}user/${id}`)
}
export const updateDistIdAgainst = (id, value) => {
  return axiosInstance.put(`${baseUrl}user/updateuser/${id}`, { ...value.basicDetails, ...value.permanentDetails, ...value.serviceDetails, permission: value.permission, is_approved: value.is_approved, kycDetails: value.kycDetails })
}

export const ZoonFilter = ({ areaid, level }) => {
  return axiosInstance.get(`${baseUrl}/zone/get/filter?area=${areaid}&level=${level}`);
};
export const ZoonFilterSec = ({ zone, area }) => {
  return axiosInstance.get(`${baseUrl}/zone/get/filter?zone=${zone}&area=${area}`);
}
// ------------- billing Address Api---------------

export const addBillingAddress = (data) => {
  return axiosInstance.post(`${baseUrl}deliveryaddress/addDeliveryAddress`, data);
};
export const getBillingAddress = (id) => {
  return axiosInstance.get(`${baseUrl}deliveryaddress/user/billing/${id}`)
}
export const getBillingAddressDetails = (id) => {
  return axiosInstance.get(`${baseUrl}deliveryaddress/${id}`)
}
export const updateBillingAddress = (id, value) => {
  return axiosInstance.put(`${baseUrl}deliveryaddress/updatDeliveryAddress/${id}`, value);
};
export const deletBillingAddress = (id) => {
  return axiosInstance.delete(`${baseUrl}deliveryaddress/deleteDeliveryAddress/${id}`);
};
// ------------- shipping Address Api---------------

export const addshippingAddress = (data) => {
  return axiosInstance.post(`${baseUrl}deliveryaddress/addDeliveryAddress`, data);
};
export const getshippingAddress = (id) => {
  return axiosInstance.get(`${baseUrl}deliveryaddress/user/shipping/${id}`)
}
export const getshippingAddressDetails = (id) => {
  return axiosInstance.get(`${baseUrl}deliveryaddress/${id}`)
}
export const updateshippingAddress = (id, value) => {
  return axiosInstance.put(`${baseUrl}deliveryaddress/updatDeliveryAddress/${id}`, value);
};
export const deletshippingAddress = (id) => {
  return axiosInstance.delete(`${baseUrl}deliveryaddress/deleteDeliveryAddress/${id}`);
};


//  DMT Apis

export const adddmtcommscheme = (data) => {
  return axiosInstance.post(`${baseUrl}dmtCommisionSchema/add`, data)
}
export const adddmtcommscheme2 = (data) => {
  return axiosInstance.post(`${baseUrl}dmtCommision/add`, data)
}
export const getdmtcommscheme = (data) => {
  return axiosInstance.get(`${baseUrl}dmtCommisionSchema/findCommisionByDMT?start_date=${data?.start_date ? data?.start_date : ''}&end_date=${data?.end_date ? data?.end_date : ""}&service_id=${data?.service_id ? data?.service_id : ''}&page=${data?.page ? data?.page : ''}&name=${data?.name ? data?.name : 'BBPPSS'}&count=${data?.count ? data?.count : ''}`)
}
export const getBbpscommscheme = (data) => {
  return axiosInstance.get(`${baseUrl}dmtCommisionSchema/findCommisionByBBPS?count=${data?.count ? data?.count : '10'}&page=${data?.page ? data?.page : '0'}`)
}

export const getdmtcommschemeagId = (id) => {
  return axiosInstance.get(`${baseUrl}dmtCommisionSchema/${id}`)
}
export const updatedmtcommschemeagId = (id, value) => {
  return axiosInstance.put(`${baseUrl}dmtCommisionSchema/update/${id}`, value)
}
export const updatedmtcommschemeagId2 = (id, value) => {
  return axiosInstance.put(`${baseUrl}dmtCommision/update/${id}`, value)
}
export const deletedmtcommschemeagId = (id) => {
  return axiosInstance.delete(`${baseUrl}dmtCommisionSchema/delete/${id}`,)
}
// -------------DMT API ---------
export const adddmtcomm = (data) => {
  return axiosInstance.post(`${baseUrl}dmtCommisionSchema/add`, data)
}
export const addBbpsPost = (data) => {
  return axiosInstance.post(`${baseUrl}bbps_Commision/addCommision`, data)
}
export const getdmtcomm = (data) => {
  return axiosInstance.get(`${baseUrl}dmtCommision?start_date=${data?.start_date ? data?.start_date : ''}&end_date=${data?.end_date ? data?.end_date : ""}&service_id=${data?.service_id ? data?.service_id : ''}&page=${data?.page ? data?.page : ''}`)
}
export const getdmtcomm2 = (data) => {
  return axiosInstance.get(`${baseUrl}dmtCommision?start_date=${data?.start_date ? data?.start_date : ''}&end_date=${data?.end_date ? data?.end_date : ""}&service_id=${data?.service_id ? data?.service_id : ''}&count=${data?.count ? data?.count : ''}&page=${data?.page ? data?.page : ''}`)
}
export const getdmtbbpscommSchema = (data) => {
  return axiosInstance.get(`${baseUrl}dmtCommisionSchema/findCommisionByBBPS?&count=${data?.count ? data?.count : ''}&page=${data?.page ? data?.page : ''}`)
}
export const getOperater4 = (data) => {
  return axiosInstance.get(`${baseUrl}bbps_Commision/getCommisionById?id=${data?.id ? data?.id : ''}&service_id=${data?.service_id ? data?.service_id : ''}`)
}
export const getdmtcomm3 = (data) => {
  return axiosInstance.get(`${baseUrl}operator/service/${data.service_id}`)
}
export const getdmtcommagId = (id) => {
  return axiosInstance.get(`${baseUrl}dmtCommisionSchema/${id}`)
}
export const getbbpscommagId = (id) => {
  return axiosInstance.get(`${baseUrl}bbps_Commision/getCommisionById?id=${id}`)
}
export const updatedmtcommagId = (id, value) => {
  return axiosInstance.put(`${baseUrl}dmtCommisionSchema/update/${id}`, value)
}
export const updateBbpscommagId = (id, value) => {
  return axiosInstance.put(`${baseUrl}bbps_Commision/updateCommision/${id}`, value)
}
export const deletedmtcommagId = (id) => {
  return axiosInstance.delete(`${baseUrl}dmtCommision/delete/${id}`,)
}
export const PostComitionVs = (data) => {
  return axiosInstance.post(`${baseUrl}bbps_Commision/addCommision`, data)
}

// ----------------for id------------
export const getBppsID = () => {
  return axiosInstance.get(`${baseUrl}/service/serviceListForBBPSCommision`,)
}
export const getDmtCommSchemeID = () => {
  return axiosInstance.get(`${baseUrl}/service/serviceListForDMTCommision`,)
}
export const getDmtCommSchemeNew = () => {
  return axiosInstance.get(`${baseUrl}/service/serviceListForBBPSCommision`,)
}
export const getReason = () => {
  return axiosInstance.get(`${baseUrl}dmtdisputeReasons/admin`)
}
export const deleteReasonId = (id, token) => {
  return axiosInstance.delete(`${baseUrl}dmtdisputeReasons/delete_dispute/${id}`, token)
}
export const addReasons = (data) => {
  return axiosInstance.post(`${baseUrl}dmtdisputeReasons/add_dispute`, data)
}
export const updateReasons = (id, token) => {
  return axiosInstance.put(`${baseUrl}dmtdisputeReasons/update_dispute/${id}`, token)
}
export const getReasonId = (id) => {
  return axiosInstance.get(`${baseUrl}dmtdisputeReasons/${id}`)
}

export const getStatus = () => {
  return axiosInstance.get(`${baseUrl}dmtstatus/admin`)
}
export const deleteStatusId = (id, token) => {
  return axiosInstance.delete(`${baseUrl}dmtstatus/delete_dispute/${id}`)
}
export const addStatus = (data) => {
  return axiosInstance.post(`${baseUrl}dmtstatus/add_dispute`, data)
}
export const updateStatus = (id, token) => {
  return axiosInstance.put(`${baseUrl}dmtstatus/update_dispute/${id}`, token)
}
export const getStatusId = (id) => {
  return axiosInstance.get(`${baseUrl}dmtstatus/${id}`)
}

export const getPriority = (data) => {
  return axiosInstance.get(`${baseUrl}dmtDisputePriority/admin?page=${data?.page}&count=${data?.count}`)
}
export const deletePriorityId = (id, token) => {
  return axiosInstance.delete(`${baseUrl}dmtDisputePriority/delete_dispute/${id}`)
}
export const adddmtPriority = (data) => {
  return axiosInstance.post(`${baseUrl}dmtDisputePriority/add_dispute`, data)
}
export const updatePriority = (id, token) => {
  return axiosInstance.put(`${baseUrl}dmtDisputePriority/update_dispute/${id}`, token)
}
export const getPriorityId = (id) => {
  return axiosInstance.get(`${baseUrl}dmtDisputePriority/${id}`)
}


// ---------------DMT Txn Fillter --------------- 

export const fillterDmtTxnReport = (data) => {
  return axiosInstance.post(`${baseUrl}dmt_txn/st/report`, data)
}

export const walletsReport = (data) => {
  return axiosInstance.post(`${baseUrl}mainwallet/create`, data)
}

export const walletsReportFilter = (page, count, data) => {
  return axiosInstance.post(`${baseUrl}mainwallet/filter`, { page, ...data, count })
}
// --------------------paymentRequest-------------------
export const fillterRequestPayment = (data) => {
  return axiosInstance.post(`${baseUrl}paymentRequest/admin`, data)
}
// -----------------------Virtual Wallelt --------------------------
export const virtualWallets = (data) => {
  return axiosInstance.post(`${baseUrl}virtual_wallet/initiateTrans`, data)
}
export const addVirtualWallets = (data) => {
  return axiosInstance.post(`${baseUrl}virtual_wallet/create`, data)
}
export const virtualWalletsFilter = (page, count, data) => {
  return axiosInstance.post(`${baseUrl}virtual_wallet/filter`, { ...data, count: count, page: page })
}
// -------------------------------------chargesSettings-----------------------------------

export const getchargesSettings = (token) => {
  return axiosInstance.get(`${baseUrl}setting/`, token)
}
export const chargesUpdateSettings = (token) => {
  return axiosInstance.put(`${baseUrl}setting/update/`, token)
}


// _________________AEPS________________

export const aepsTransctionFilter = (data) => {
  return axiosInstance.post(`${baseUrl}aepstxn/staff`, data)
}
export const aepsTransctionAll = (data) => {
  return axiosInstance.post(`${baseUrl}aepstxn/staff/all`, data)
}
export const aadharPayTransctionFilter = (data) => {
  return axiosInstance.post(`${baseUrl}adhaarpay/staff`, data)
}
export const aadharPayTransctionAll = (data) => {
  return axiosInstance.post(`${baseUrl}adhaarpay/staff/all`, data)
}

// _________________Quick Dhan ________________

export const quickDhanFilter = (data) => {
  return axiosInstance.post(`${baseUrl}quickdhan/staff`, data)
}
export const quickDhanAll = (data) => {
  return axiosInstance.post(`${baseUrl}quickdhan/staff/all`, data)
}


// Disputs

export const DisputeData = (data) => {
  return axiosInstance.post(`${baseUrl}dmtdisputes/admin`, data)
}



// export const aadharPayTransctionFilter = (data) => {
//   return axiosInstance.post(`${baseUrl}adhaarpay/staff`, data)
// }
// export const aadharPayTransctionAll = (data) => {
//   return axiosInstance.post(`${baseUrl}adhaarpay/staff/all`, data)
// }


// -----staff Address Apis All Masters ------

// ------------------Building Apis------
export const getBuildingsMaster = (page, count) => {
  return axiosInstance.get(`${baseUrl}staffaddr/building?page=${page}&count=${count}`);
};

export const addBuildingMaster = (data) => {
  return axiosInstance.post(`${baseUrl}staffaddr/building/addbuilding`, data);
};
export const deleteBuildingMaster = (id) => {
  console.log(id);
  return axiosInstance.delete(`${baseUrl}staffaddr/building/deletebuilding/${id}`);
};
export const updateBuildingMaster = (id, value) => {
  return axiosInstance.put(`${baseUrl}staffaddr/building/updatebuilding/${id}`, value);
};
export const getBuildingsMasterId = (id) => {
  return axiosInstance.get(`${baseUrl}staffaddr/building/${id}`);
};

// ------------------Block Apis------

export const getBlockMaster = (page, count) => {
  return axiosInstance.get(`${baseUrl}staffaddr/block?page=${page}&count=${count}`);
};

export const addBlockMaster = (data) => {
  return axiosInstance.post(`${baseUrl}staffaddr/block/addblock`, data);
};
export const deleteBlockMaster = (id) => {
  return axiosInstance.delete(`${baseUrl}staffaddr/block/deleteblock/${id}`);
};
export const updateBlockMaster = (id, value) => {
  return axiosInstance.put(`${baseUrl}staffaddr/block/updateblock/${id}`, value);
};
export const getBlockMasterId = (id) => {
  return axiosInstance.get(`${baseUrl}staffaddr/block/${id}`);
};
// ------------------Area Apis------

export const getAreaMaster = (page, count) => {
  return axiosInstance.get(`${baseUrl}staffaddr/area?page=${page}&count=${count}`);
};

export const addAreaMaster = (data) => {
  return axiosInstance.post(`${baseUrl}staffaddr/area/addarea`, data);
};
export const deleteAreaMaster = (id) => {
  return axiosInstance.delete(`${baseUrl}staffaddr/area/deletearea/${id}`);
};
export const updateAreaMaster = (id, value) => {
  return axiosInstance.put(`${baseUrl}staffaddr/area/updatearea/${id}`, value);
};
export const getAreaMasterId = (id) => {
  return axiosInstance.get(`${baseUrl}staffaddr/area/${id}`);
};
// ------------------Floor Apis------

export const getFloorMaster = (page, count) => {
  return axiosInstance.get(`${baseUrl}staffaddr/floor?page=${page}&count=${count}`);
};

export const addFloorMaster = (data) => {
  return axiosInstance.post(`${baseUrl}staffaddr/floor/addfloor`, data);
};
export const deleteFloorMaster = (id) => {
  return axiosInstance.delete(`${baseUrl}staffaddr/floor/deletefloor/${id}`);
};
export const updateFloorMaster = (id, value) => {
  return axiosInstance.put(`${baseUrl}staffaddr/floor/updatefloor/${id}`, value);
};
export const getFloorMasterId = (id) => {
  return axiosInstance.get(`${baseUrl}staffaddr/floor/${id}`);
};
// ------------------Wards Apis------

export const getWardMaster = (page, count) => {
  return axiosInstance.get(`${baseUrl}staffaddr/ward?page=${page}&count=${count}`);
};

export const addWardMaster = (data) => {
  return axiosInstance.post(`${baseUrl}staffaddr/ward/addward`, data);
};
export const deleteWardMaster = (id) => {
  return axiosInstance.delete(`${baseUrl}staffaddr/ward/deleteward/${id}`);
};
export const updateWardMaster = (id, value) => {
  return axiosInstance.put(`${baseUrl}staffaddr/ward/updateward/${id}`, value);
};
export const getWardMasterId = (id) => {
  return axiosInstance.get(`${baseUrl}staffaddr/ward/${id}`);
};
// ------------------Office Apis------

export const getOfficeMaster = (page, count) => {
  return axiosInstance.get(`${baseUrl}staffaddr/office?page=${page}&count=${count}`);
};

export const addOfficeMaster = (data) => {
  return axiosInstance.post(`${baseUrl}staffaddr/office/addoffice`, data);
};
export const deleteOfficeMaster = (id) => {
  return axiosInstance.delete(`${baseUrl}staffaddr/office/deleteoffice/${id}`);
};
export const updateOfficeMaster = (id, value) => {
  return axiosInstance.put(`${baseUrl}staffaddr/office/updateoffice/${id}`, value);
};
export const getOfficeMasterId = (id) => {
  return axiosInstance.get(`${baseUrl}staffaddr/office/${id}`);
};

// ------------------department  Permision Apis------

export const getDepartmentMaster = (page, count) => {
  return axiosInstance.get(`${baseUrl}staffaddr/department?page=${page}&count=${count}`);
};

export const addDepartmentMaster = (data) => {
  return axiosInstance.post(`${baseUrl}staffaddr/department/adddepartment`, data);
};
export const deleteDepartmentMaster = (id) => {
  return axiosInstance.delete(`${baseUrl}staffaddr/department/deletedepartment/${id}`);
};
export const updateDepartmentMaster = (id, value) => {
  return axiosInstance.put(`${baseUrl}staffaddr/department/updatedepartment/${id}`, value);
};
export const getDepartmentMasterId = (id) => {
  return axiosInstance.get(`${baseUrl}staffaddr/department/${id}`);
};
// ------------------Designation  Permision Apis------

export const getdesignationMaster = (page, count) => {
  return axiosInstance.get(`${baseUrl}staffaddr/designation?page=${page}&count=${count}`);
};

export const adddesignationMaster = (data) => {
  return axiosInstance.post(`${baseUrl}staffaddr/designation/adddesignation`, data);
};
export const deletedesignationMaster = (id) => {
  return axiosInstance.delete(`${baseUrl}staffaddr/designation/deletedesignation/${id}`);
};
export const updatedesignationMaster = (id, value) => {
  return axiosInstance.put(`${baseUrl}staffaddr/designation/updatedesignation/${id}`, value);
};
export const getdesignationMasterId = (id) => {
  return axiosInstance.get(`${baseUrl}staffaddr/designation/${id}`);
};


// ------------------Staff Permision Apis------

export const getStaffpermision = (page, count) => {
  return axiosInstance.get(`${baseUrl}staff?page=${page}&count=${count}`);
};
export const getStaffpermisionall = (page) => {
  return axiosInstance.get(`${baseUrl}staff?page=${page.page}&count=${page.count}`);
};

export const addStaffpermision = (data) => {
  return axiosInstance.post(`${baseUrl}staff/addstaff`, data);
};
export const deleteStaffpermision = (id) => {
  return axiosInstance.delete(`${baseUrl}staff/deletestaff/${id}`);
};
export const updateStaffpermision = (id, value) => {
  return axiosInstance.put(`${baseUrl}staff/updatestaff/${id}`, value);
};
export const getStaffpermisionId = (id) => {
  return axiosInstance.get(`${baseUrl}staff/${id}`);
};



// -------------------add staff for selector apis-----------------

export const getStaffSelecAdd = () => {
  return axiosInstance.get(`${baseUrl}staffaddr/building/public`);
};
export const getOfficeSelecStaff = () => {
  return axiosInstance.get(`${baseUrl}staffaddr/office/public`);
};
export const getFloorSelecStaff = () => {
  return axiosInstance.get(`${baseUrl}staffaddr/floor/public`);
};
export const getAreaSelecStaff = () => {
  return axiosInstance.get(`${baseUrl}staffaddr/area/public`);
};
export const getBlockSelecStaff = () => {
  return axiosInstance.get(`${baseUrl}staffaddr/block/public`);
};
export const getWardSelecStaff = () => {
  return axiosInstance.get(`${baseUrl}staffaddr/ward/public`);
};
export const getDepartmentSelecStaff = () => {
  return axiosInstance.get(`${baseUrl}staffaddr/department/public`);
};
export const getDesignationSelecStaff = () => {
  return axiosInstance.get(`${baseUrl}staffaddr/designation/public`);
};
export const getRoleSelecStaff = () => {
  return axiosInstance.get(`${baseUrl}role/public`);
};



// --------------Mustaf's APIS Start-----------------------------------


export const addMainModule = (data) => {
  return axiosInstance.post(`${baseUrl}mainModule/addMainModule`, data)
};

export const updateMainModule = (id) => {
  return axiosInstance.get(`${baseUrl}mainModule/${id}`);
};

export const updateModule = (id, value) => {
  return axiosInstance.put(`${baseUrl}mainModule/updatMainModule/${id}`, value);
};

export const deleteMainModulee = (id) => {
  return axiosInstance.delete(`${baseUrl}mainModule/deleteMainModule/${id}`);
};


export const mainModuleList = (page, count) => {
  // console.log(page, page);
  return axiosInstance.get(`${baseUrl}mainModule?page=${page}&count=${count}`);
}

export const addSubModule = (data) => {
  return axiosInstance.post(`${baseUrl}subModule/addsubModule`, data)
};

export const subModule = (page, count) => {
  // console.log(page, page);
  return axiosInstance.get(`${baseUrl}subModule?page=${page}&count=${count}`);
}

export const updatesubModule = (id, value) => {
  return axiosInstance.put(`${baseUrl}subModule/updatsubModule/${id}`, value);
};

export const updateSubMainModule = (id) => {
  return axiosInstance.get(`${baseUrl}subModule/${id}`);
}
export const deleteSubModulee = (id) => {
  return axiosInstance.delete(`${baseUrl}subModule/deletesubModule/${id}`);
};


export const getControler = (data) => {
  return axiosInstance.get(`${baseUrl}mainmodule/ids?controllers=${JSON.stringify(data)}`)
};

export const addRolee = (data) => {
  return axiosInstance.post(`${baseUrl}role/addRole`, data)
};
export const roleList = (page, count) => {
  // console.log(page, page);
  return axiosInstance.get(`${baseUrl}role?page=${page}&count=${count}`);
}

export const updategetId = (id) => {
  return axiosInstance.get(`${baseUrl}role/${id}`);
};
export const updatesaddRole = (id, value) => {
  return axiosInstance.put(`${baseUrl}role/updatrole/${id}`, value);
};

export const listRoleDelete = (id) => {
  return axiosInstance.delete(`${baseUrl}role/deleterole/${id}`);
};

export const pri = (data) => {
  return axiosInstance.get(`${baseUrl}dmtDisputePriority/admin`)
};

export const sta = (data) => {
  return axiosInstance.get(`${baseUrl}dmtstatus/admin`)
};
export const build = (data) => {
  return axiosInstance.get(`${baseUrl}staffaddr/building/public`)
};

export const bolk = (data) => {
  return axiosInstance.get(`${baseUrl}staffaddr/block/public`)
};
export const oRome = (data) => {
  return axiosInstance.get(`${baseUrl}staffaddr/office/public`)
};
export const oword = (data) => {
  return axiosInstance.get(`${baseUrl}staffaddr/ward/public`)
};
export const oArea = (data) => {
  return axiosInstance.get(`${baseUrl}staffaddr/area/public`)
};

export const flore = (data) => {
  return axiosInstance.get(`${baseUrl}staffaddr/floor/public`)
};

export const addComplain = (data) => {
  return axiosInstance.post(`${baseUrl}staff_dispute/adddispute`, data)
};

export const complaneList = (page, count) => {
  // console.log(page, page);
  return axiosInstance.get(`${baseUrl}staff_dispute?page=${page}&count=${count}`);
}

export const complaneListDelete = (id) => {
  return axiosInstance.delete(`${baseUrl}staff_dispute/deletedispute/${id}`);
};

export const compalneId = (id) => {
  return axiosInstance.get(`${baseUrl}staff_dispute/${id}`);
};
export const updateComplane = (id, value) => {
  return axiosInstance.put(`${baseUrl}staff_dispute/updatdispute/${id}`, value);
};

export const dasComplaient = (data) => {
  return axiosInstance.get(`${baseUrl}dashboard/complaint`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// --------------kyc Documents Apis Staff----------
export const addStaffKycDoc = (data) => {
  return axiosInstance.post(`${baseUrl}staff_document/add_Doc`, data)
};
export const getStaffKycDoc = () => {
  return axiosInstance.get(`${baseUrl}staff_document/kycView`)
};
export const getStaffKycDocStaffId = (id) => {
  return axiosInstance.get(`${baseUrl}staff_document/${id}`)
};
export const updateStatusStaffKycDocStaffId = (id, value) => {
  return axiosInstance.put(`${baseUrl}staff/updatestaffstatus/${id}`, value)
};

export const getsNotification = (value) => {

  return axiosInstance.get(`${baseUrl}notification/filter/admin?readed=${false}&page=${value?.page}&count=${value?.count}`);
};

export const countNotification = (value) => {
  return axiosInstance.get(`${baseUrl}notification/summary/admin`);
};
export const notificationReport = (data) => {
  return axiosInstance.get(`${baseUrl}notification/report?count=10&page=${data.page}&sendFrom&sendBy&message_type&to`)
}
export const bpbsOperatorList = async (serviceId, page, pageSize, packageId) => {
  console.log("packageId", packageId)
  try {
    const response = await axios.get(`${baseUrl}package/bbps/commision/admin`, {
      params: {
        service_id: serviceId,
        package_id: packageId,
        count: pageSize,
        page: page
      },
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching BBPS operators:', error);
    throw error;
  }
};
export const bpbsAllServiceList = async () => {
  try {
    const response = await axios.get(`${baseUrl}service/admin`, {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching package invoice:', error);
    throw error;
  }
};
export const fetchInitialPackages = async (userId) => {
  const url = `${baseUrl}package/freeList?user_id=${userId}`;
  const token = localStorage.getItem('userToken');

  const response = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const fetchPackageDetails = async (packageId) => {
  const url = `${baseUrl}package/${packageId}`;
  const token = localStorage.getItem('userToken');

  const response = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const assignPackage = async (userId, selectedPackage) => {
  const url = `${baseUrl}package/packageChange`;
  const token = localStorage.getItem('userToken');

  const response = await axiosInstance.put(
    url,
    {
      userid: userId,
      package_id: selectedPackage,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  console.log("assignPckage", response)

  return response;
};
export const commissionServiceByReport = async (startDate, endDate) => {


  try {
    let url = `${baseUrl}dashboard/commisionReportByServices?`;

    const params = new URLSearchParams({
      // service_id: serviceId,
      // page,
      // page_size: pageSize,
      // package_id: packageId
    });

    if (startDate) {
      params.append('start_date', startDate);
    }

    if (endDate) {
      params.append('end_date', endDate);
    }

    url += params.toString();

    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching commission report:', error);
    throw error;
  }
};
export const tdsServiceByReport = async (startDate, endDate) => {


  try {
    let url = `${baseUrl}dashboard/tdsReportByServices?`;

    const params = new URLSearchParams({

    });

    if (startDate) {
      params.append('start_date', startDate);
    }

    if (endDate) {
      params.append('end_date', endDate);
    }

    url += params.toString();

    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching commission report:', error);
    throw error;
  }
};
export const chargeServiceByReport = async (startDate, endDate) => {


  try {
    let url = `${baseUrl}dashboard/chargeReportByServices?`;

    const params = new URLSearchParams({

    });

    if (startDate) {
      params.append('start_date', startDate);
    }

    if (endDate) {
      params.append('end_date', endDate);
    }

    url += params.toString();

    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching commission report:', error);
    throw error;
  }
};
export const ledgerReport = async (page, count, startDate, endDate) => {
  try {
    let url = `${baseUrl}dashboard/ledgerReport`;

    const params = new URLSearchParams({
      page: page.toString(),
      count: count.toString()
    });

    if (startDate) {
      params.append('start_date', startDate);
    }

    if (endDate) {
      params.append('end_date', endDate);
    }

    url += `?${params.toString()}`;

    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching ledger report:', error);
    throw error;
  }
};
export const ledgerReportAll = async (startDate, endDate) => {
  try {
    let url = `${baseUrl}dashboard/ledgerReport/all`;

    const params = new URLSearchParams({

    });

    if (startDate) {
      params.append('start_date', startDate);
    }

    if (endDate) {
      params.append('end_date', endDate);
    }

    url += `?${params.toString()}`;

    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching ledger report:', error);
    throw error;
  }
};



//------------------College Bazzar Apis ===============
// --------------------CollegeTypeApis---------------------------
export const getTypes_Of_collegesMaster = (page, count) => {
  return axiosInstance.get(`${baseUrl}type_of_college?page=${page}&count=${count}`);
};

export const addTypes_Of_collegesMaster = (data) => {
  return axiosInstance.post(`${baseUrl}type_of_college/addType`, data);
};
export const deleteTypes_Of_collegesMaster = (id) => {
  return axiosInstance.delete(`${baseUrl}type_of_college/delete_type/${id}`);
};
export const updateTypes_Of_collegesMaster = (id, value) => {
  return axiosInstance.put(`${baseUrl}type_of_college/update_type/${id}`, value);
};
export const getTypes_Of_collegesMasterId = (id) => {
  return axiosInstance.get(`${baseUrl}type_of_college/${id}`);
};
// --------------------AffiliatedByApis---------------------------
export const getTypes_Of_AffilatedBy_Master = (page, count) => {
  return axiosInstance.get(`${baseUrl}affiliatedBy?page=${page}&count=${count}`);
};

export const addTypes_Of_AffilatedBy_Master = (data) => {
  return axiosInstance.post(`${baseUrl}affiliatedBy/addType`, data);
};
export const deleteTypes_Of_AffilatedBy_Master = (id) => {
  return axiosInstance.delete(`${baseUrl}affiliatedBy/delete_type/${id}`);
};
export const updateTypes_Of_AffilatedBy_Master = (id, value) => {
  return axiosInstance.put(`${baseUrl}affiliatedBy/update_type/${id}`, value);
};
export const getAffilatedBy_MasterId = (id) => {
  return axiosInstance.get(`${baseUrl}affiliatedBy/${id}`);
};
// --------------------ApprovedByApis---------------------------
export const getApprovedBy_Master = (page, count) => {
  return axiosInstance.get(`${baseUrl}approvedBy?page=${page}&count=${count}`);
};

export const addTypes_Of_ApprovedBy_Master = (data) => {
  return axiosInstance.post(`${baseUrl}approvedBy/addType`, data);
};
export const deleteTypes_Of_ApprovedBy_Master = (id) => {
  return axiosInstance.delete(`${baseUrl}approvedBy/delete_type/${id}`);
};
export const updateTypes_Of_ApprovedBy_Master = (id, value) => {
  return axiosInstance.put(`${baseUrl}approvedBy/update_type/${id}`, value);
};
export const getApprovedBy_MasterId = (id) => {
  return axiosInstance.get(`${baseUrl}approvedBy/${id}`);
};
// --------------------credit Cards Apis---------------------------
export const getTypes_Of_creditCardMaster = (page, count) => {
  return axiosInstance.get(`${baseUrl}creditCard?page=${page}&count=${count}`);
};

export const addTypes_Of_creditCardMaster = (data) => {
  return axiosInstance.post(`${baseUrl}creditCard/addType`, data);
};
export const deleteTypes_Of_creditCardMaster = (id) => {
  return axiosInstance.delete(`${baseUrl}creditCard/delete_type/${id}`);
};
export const updateTypes_Of_creditCardMaster = (id, value) => {
  return axiosInstance.put(`${baseUrl}creditCard/update_type/${id}`, value);
};
export const getTypes_Of_creditCardMasterId = (id) => {
  return axiosInstance.get(`${baseUrl}creditCard/${id}`);
};
// --------------------Sources Apis---------------------------
export const leadSourseMasterList = (page, count) => {
  return axiosInstance.get(`${baseUrl}source?page=${page}&count=${count}`);
};

export const addLeadSourseMaster = (data) => {
  return axiosInstance.post(`${baseUrl}source/addType`, data);
};
export const deleteLeadSourseMaster = (id) => {
  return axiosInstance.delete(`${baseUrl}source/delete_type/${id}`);
};
export const updateLeadSourseMaster = (id, value) => {
  return axiosInstance.put(`${baseUrl}source/update_type/${id}`, value);
};
export const getUpdateLeadSourseId = (id) => {
  return axiosInstance.get(`${baseUrl}source/${id}`);
};

//  ------------------------------Lead Sub Status-------------------------
export const leadSubStatusMasterList = (page, count) => {
  return axiosInstance.get(`${baseUrl}subStatus?page=${page}&count=${count}`);
};
export const leadSubStatusMasterListAll = (page, count) => {
  return axiosInstance.get(`${baseUrl}subStatus`);
};

export const addLeadSubStatusMaster = (data) => {
  return axiosInstance.post(`${baseUrl}subStatus/addType`, data);
};
export const deleteLeadSubStatusMaster = (id) => {
  return axiosInstance.delete(`${baseUrl}subStatus/delete_type/${id}`);
};
export const updateLeadSubStatusMaster = (id, value) => {
  return axiosInstance.put(`${baseUrl}subStatus/update_type/${id}`, value);
};
export const getUpdateLeadSubStatusId = (id) => {
  return axiosInstance.get(`${baseUrl}subStatus/${id}`);
};
//  ------------------------------Lead  Status-------------------------
export const leadenquiryStatusMasterList = (page, count) => {
  return axiosInstance.get(`${baseUrl}enquiryStatus?page=${page}&count=${count}`);
};
export const leadenquiryStatusMasterListAll = (page, count) => {
  return axiosInstance.get(`${baseUrl}enquiryStatus`);
};

export const addenquiryStatusMaster = (data) => {
  return axiosInstance.post(`${baseUrl}enquiryStatus/addstatus`, data);
};
export const deleteenquiryStatusMaster = (id) => {
  return axiosInstance.delete(`${baseUrl}enquiryStatus/deletestatus/${id}`);
};
export const updateenquiryStatusMaster = (id, value) => {
  return axiosInstance.put(`${baseUrl}enquiryStatus/updatstatus/${id}`, value);
};
export const getUpdateenquiryStatusId = (id) => {
  return axiosInstance.get(`${baseUrl}enquiryStatus/${id}`);
};
// ____________________Facilities Crud Apis ___________________________________

export const facilitiesMasterList = (page, count) => {
  return axiosInstance.get(`${baseUrl}facility?page=${page}&count=${count}`);
};

export const addfacilitiesMaster = (data) => {
  return axiosInstance.post(`${baseUrl}facility/addType`, data);
};
export const deletefacilitiesMaster = (id) => {
  return axiosInstance.delete(`${baseUrl}facility/delete_type/${id}`);
};
export const updatefacilitiesMaster = (id, value) => {
  return axiosInstance.put(`${baseUrl}facility/update_type/${id}`, value);
};
export const getUpdatefacilitiesStatusId = (id) => {
  return axiosInstance.get(`${baseUrl}facility/${id}`);
};
//  ------------------------------Colleges Api  Status-------------------------
export const CollegescrudList = (page, count) => {
  return axiosInstance.get(`${baseUrl}college?page=${page}&count=${count}`);
};

export const addCollegescrud = (data) => {
  return axiosInstance.post(`${baseUrl}college/addcollege`, data);
};
export const deleteCollegescrud = (id) => {
  return axiosInstance.delete(`${baseUrl}college/deletecollege/${id}`);
};
export const updateCollegescrud = (id, value) => {
  return axiosInstance.put(`${baseUrl}college/updatcollege/${id}`, value);
};
export const getupdateCollegesCrudStatusId = (id) => {
  return axiosInstance.get(`${baseUrl}college/${id}`);
};


//  ------------------------------GAllERY MAster  APIS-------------------------
export const PhotosGalleryList = (page, count) => {
  return axiosInstance.get(`${baseUrl}photoGallery?page=${page}&count=${count}`);
};

export const addPhotosGallery = (data) => {
  return axiosInstance.post(`${baseUrl}photoGallery/addPhotoGallery`, data);
};
export const deletePhotosGallery = (id) => {
  return axiosInstance.delete(`${baseUrl}photoGallery/delete_photoGallery/${id}`);
};
export const updatePhotosGallery = (id, value) => {
  return axiosInstance.put(`${baseUrl}photoGallery/update_photoGallery/${id}`, value);
};
export const getupdatePhotosGalleryStatusId = (id) => {
  return axiosInstance.get(`${baseUrl}photoGallery/${id}`);
};


//  ------------------------------Course Degree Type  APIS-------------------------
export const CourseDegreeList = (page, count) => {
  return axiosInstance.get(`${baseUrl}courseType?page=${page}&count=${count}`);
};

export const addCourseDegree = (data) => {
  return axiosInstance.post(`${baseUrl}courseType/addType`, data);
};
export const deleteCourseDegree = (id) => {
  return axiosInstance.delete(`${baseUrl}courseType/delete_Type/${id}`);
};
export const updateCourseDegree = (id, value) => {
  return axiosInstance.put(`${baseUrl}courseType/update_Type/${id}`, value);
};
export const getupdateCourseDegreeStatusId = (id) => {
  return axiosInstance.get(`${baseUrl}courseType/${id}`);
};


// ---------------------Apis for Add Colleges Selector N combo ====================
export const getCollegeTypeListSelect = () => {
  return axiosInstance.get(`${baseUrl}type_of_college/admin`);
};

export const getAffiliatedListSelect = () => {
  return axiosInstance.get(`${baseUrl}affiliatedBy/admin`);
};
export const getApproveListSelect = () => {
  return axiosInstance.get(`${baseUrl}approvedBy/admin`);
};
export const getCreditCardListSelect = () => {
  return axiosInstance.get(`${baseUrl}creditCard/admin`);
};
export const getFacilitiesListSelect = () => {
  return axiosInstance.get(`${baseUrl}facility/admin`);
};
export const getStreamListSelect = () => {
  return axiosInstance.get(`${baseUrl}stream/admin`);
};
export const getCourseListSelect = (id) => {
  return axiosInstance.get(`${baseUrl}course/service_category?ids=${JSON.stringify(id)}`);
};




// -------------------Junaid'S APIS- START------------------------------
export const DeleteTestimonial = (id) => {
  return axiosInstance.delete(`${baseUrl}testimonial / delete_testimonial / ${id}`,);
}



export const getTestimonialById = (value) => {
  return axios.get(`${baseUrl}testimonial/${value}, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: Bearer ${window.localStorage.getItem('userToken')},
    },
  }`);
};



export const testimonialPost = (data) => {
  return axiosInstance.post(`${baseUrl}testimonial/addTestimonial`, data)
};

export const testimonialPostUpdate = (data) => {
  return axiosInstance.put(`${baseUrl}testimonial/update_testimonial/${data.id}`, data.data)
};

export const getTestimonial = (page, count) => {
  return axiosInstance.get(`${baseUrl}testimonial?page=${page}&count=${count}`);
}



export const deleteVideoGallery = (id) => {
  return axiosInstance.delete(`${baseUrl}videoGallery/delete_videoGallery/${id}`);
};

export const getVideoGalleryById = (id) => {
  return axiosInstance.get(`${baseUrl}videoGallery/${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const postVideoGallery = (data) => {
  return axiosInstance.post(`${baseUrl}videoGallery/addVideoGallery`, data);
};

export const updateVideoGallery = (data) => {
  return axiosInstance.put(`${baseUrl}videoGallery/update_videoGallery/${data.id}`, data.data);
};

export const getVideoGallery = (page, count) => {
  return axiosInstance.get(`${baseUrl}videoGallery?page=${page}&count=${count}`);
};



export const deleteBlogCategory = (id) => {
  return axiosInstance.delete(`${baseUrl}blogCategory/delete_blogCategory/${id}`);
};

// GET a blog category by ID
export const getBlogCategoryById = (id) => {
  return axiosInstance.get(`${baseUrl}blogCategory/${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// POST a new blog category
export const postBlogCategory = (data) => {
  return axiosInstance.post(`${baseUrl}blogCategory/addBlogCategory`, data);
};

// PUT (update) an existing blog category by ID
export const updateBlogCategory = (data) => {
  return axiosInstance.put(`${baseUrl}blogCategory/update_blogCategory/${data.id}`, data.data);
};

// GET the list of blog categories with pagination
export const getBlogCategoryList = (page, count) => {
  return axiosInstance.get(`${baseUrl}blogCategory?page=${page}&count=${count}`);
};




// DELETE a blog by ID
export const deleteBlog = (id) => {
  return axiosInstance.delete(`${baseUrl}blog/delete_blog/${id}`);
};

// GET a blog by ID
export const getBlogById = (id) => {
  return axiosInstance.get(`${baseUrl}blog/${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// POST a new blog
export const postBlog = (data) => {
  return axiosInstance.post(`${baseUrl}blog/addBlog`, data);
};

// PUT (update) an existing blog by ID
export const updateBlog = (data) => {
  return axiosInstance.put(`${baseUrl}blog/update_blog/${data.id}`, data.data);
};

// GET the list of blogs with pagination
export const getBlogList = (page, count) => {
  return axiosInstance.get(`${baseUrl}blog?page=${page}&count=${count}`);
};


// DELETE a partner by ID
export const deletePartner = (id) => {
  return axiosInstance.delete(`${baseUrl}partner/delete_partner/${id}`);
};

// GET a partner by ID
export const getPartnerById = (id) => {
  return axiosInstance.get(`${baseUrl}partner/${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// POST a new partner
export const postPartner = (data) => {
  return axiosInstance.post(`${baseUrl}partner/addPartner`, data);
};

// PUT (update) an existing partner by ID
export const updatePartner = (data) => {
  return axiosInstance.put(`${baseUrl}partner/update_partner/${data.id}`, data.data);
};

// GET the list of partners with pagination
export const getPartnerList = (page, count) => {
  return axiosInstance.get(`${baseUrl}partner?page=${page}&count=${count}`);
};

export const getAboutUs = (page, count) => {
  return axiosInstance.get(`${baseUrl}aboutus/admin`);
};
export const updateAboutUs = (data) => {
  return axiosInstance.put(`${baseUrl}aboutus/update`, data);
};
export const getContactUs = (page, count) => {
  return axiosInstance.get(`${baseUrl}contactus/admin`);
};
export const updateContactUs = (data) => {
  return axiosInstance.put(`${baseUrl}contactus/update`, data);
};
export const getPrivacyPolicy = (page, count) => {
  return axiosInstance.get(`${baseUrl}privacyNPolicy/admin`);
};
export const updatePrivacyPolicy = (data) => {
  return axiosInstance.put(`${baseUrl}privacyNPolicy/update`, data);
};

export const getReturnPolicy = (page, count) => {
  return axiosInstance.get(`${baseUrl}returnPolicy/admin`);
};
export const updateReturnPolicy = (data) => {
  return axiosInstance.put(`${baseUrl}returnPolicy/update`, data);
};

export const gettermsNCondition = (page, count) => {
  return axiosInstance.get(`${baseUrl}termsNCondtion/admin`);
};
export const updatetermsNCondition = (data) => {
  return axiosInstance.put(`${baseUrl}termsNCondtion/update`, data);
};


export const deleteFaq = (id) => {
  return axiosInstance.delete(`${baseUrl}faq/delete_type/${id}`);
};

export const getFaqById = (id) => {
  return axiosInstance.get(`${baseUrl}faq/${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

export const postFaq = (data) => {
  return axiosInstance.post(`${baseUrl}faq/addType`, data);
};

export const updateFaq = (data) => {
  return axiosInstance.put(`${baseUrl}faq/update_type/${data.id}`, data.data);
};

export const getFaqList = (page, count) => {
  return axiosInstance.get(`${baseUrl}faq`);
};
export const collegeListss = (page, count) => {
  return axiosInstance.get(`${baseUrl}college/admin`);
};




// DELETE a template type by ID
export const deleteTemplateType = (id) => {
  return axiosInstance.delete(`${baseUrl}template-type/delete_template_type/${id}`);
};

// GET a template type by ID
export const getTemplateTypeById = (id) => {
  return axiosInstance.get(`${baseUrl}template-type/${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// POST a new template type
export const postTemplateType = (data) => {
  return axiosInstance.post(`${baseUrl}template-type/addTemplateType`, data);
};

// PUT (update) an existing template type by ID
export const updateTemplateType = (data) => {
  return axiosInstance.put(`${baseUrl}template-type/update_template_type/${data.id}`, data.data);
};

// GET the list of template types with pagination
export const getTemplateTypeList = (page, count) => {
  return axiosInstance.get(`${baseUrl}template-type?page=${page}&count=${count}`);
};



// DELETE a template category by ID
export const deleteTemplateCategory = (id) => {
  return axiosInstance.delete(`${baseUrl}template-category/delete_template_category/${id}`);
};

// GET a template category by ID
export const getTemplateCategoryById = (id) => {
  return axiosInstance.get(`${baseUrl}template-category/${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// POST a new template category
export const postTemplateCategory = (data) => {
  return axiosInstance.post(`${baseUrl}template-category/addTemplateCategory`, data);
};

// PUT (update) an existing template category by ID
export const updateTemplateCategory = (data) => {
  return axiosInstance.put(`${baseUrl}template-category/update_template_category/${data.id}`, data.data);
};

// GET the list of template categories with pagination
export const getTemplateCategoryList = (page, count) => {
  return axiosInstance.get(`${baseUrl}template-category?page=${page}&count=${count}`);
};


// DELETE a flow by ID
export const deleteFlowCategory = (id) => {
  return axiosInstance.delete(`${baseUrl}flow-builder/delete_flow_category/${id}`);
};

// GET a flow by ID
export const getFlowCategoryById = (id) => {
  return axiosInstance.get(`${baseUrl}flow-builder/${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// POST a new flow category
export const postFlowCategory = (data) => {
  return axiosInstance.post(`${baseUrl}flow-builder/addFlowCategory`, data);
};

// PUT (update) an existing flow category by ID
export const updateFlowCategory = (data) => {
  return axiosInstance.put(`${baseUrl}flow-builder/update_flow_category/${data.id}`, data.data);
};

// GET the list of flow categories with pagination
export const getFlowCategoryList = (page, count) => {
  return axiosInstance.get(`${baseUrl}flow-builder?page=${page}&count=${count}`);
};



// DELETE a lead type by ID
export const deleteLeadType = (id) => {
  return axiosInstance.delete(`${baseUrl}leadType/delete_type/${id}`);
};

// GET a lead type by ID
export const getLeadTypeById = (id) => {
  return axiosInstance.get(`${baseUrl}leadType/${id}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
    },
  });
};

// POST a new lead type
export const postLeadType = (data) => {
  return axiosInstance.post(`${baseUrl}leadType/addType`, data);
};

// PUT (update) an existing lead type by ID
export const updateLeadType = (data) => {
  return axiosInstance.put(`${baseUrl}leadType/update_type/${data.id}`, data.data);
};

// GET the list of lead types with pagination
export const getLeadTypeList = (page, count) => {
  return axiosInstance.get(`${baseUrl}leadType?page=${page}&count=${count}`);
};



// -------------------Junaid'S APIS- END------------------------------

// ----------------RELATED COMPANY APIS------------------
// ----------------RELATED COMPANY TYPE APIS------------------

export const CompanyTypeList = () => {
  return axiosInstance.get(`${baseUrl}companyType`);
};

export const addCompanyType = (data) => {
  return axiosInstance.post(`${baseUrl}companyType/addType`, data);
};
export const deleteCompanyType = (id) => {
  return axiosInstance.delete(`${baseUrl}companyType/delete_type/${id}`);
};
export const updateCompanyType = (id, value) => {
  return axiosInstance.put(`${baseUrl}companyType/update_type/${id}`, value);
};
export const getupdateCompanyTypeId = (id) => {
  return axiosInstance.get(`${baseUrl}companyType/${id}`);
};
// ----------------RELATED COMPANY Master APIS------------------

export const getcompanyList = () => {
  return axiosInstance.get(`${baseUrl}company`);
};

export const addCompany = (data) => {
  return axiosInstance.post(`${baseUrl}company/addType`, data);
};
export const deleteCompany = (id) => {
  return axiosInstance.delete(`${baseUrl}company/delete_type/${id}`);
};
export const updateCompany = (id, value) => {
  return axiosInstance.put(`${baseUrl}company/update_type/${id}`, value);
};
export const getupdateCompanyId = (id) => {
  return axiosInstance.get(`${baseUrl}company/${id}`);
};





































































