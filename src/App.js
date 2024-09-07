import { Navigate, Route, Routes } from "react-router-dom";

import "./assets/css/style.css";
import "./components/upgrade-member/member.css"
import "react-toastify/dist/ReactToastify.css";

// import 'bootstrap/dist/css/bootstrap.min.css';
// import "./assets/css/style.css";
import "./common/CustomInputField/index.module.scss";

import DasBoardRight from "./pages/dasBoardRight/DasBoardRight";
import DistributerPage from "./pages/distributer";
import CreateUserDistributerPage from "./pages/distributer/createUserDistributer/CreateUserDistributer";
import SuspendedUserPage from "./pages/suspendedUsers";
import NotWorkingUserPage from "./pages/notWorkingUser";
import PendingTransactionReport from "./components/reportMaster/pendingTransactionReport/PendingTransactionReport";
import OperatorWiseSalePage from "./pages/operatorWiseSale";
import BalanceTransferPage from "./pages/balanceTransfer";
import SolveDisputePage from "./pages/solveDispute";
import RetailerIncomePage from "./pages/retailerIncome";
import MyIncomePage from "./pages/myIncome";
import MasterPages from "./pages/topNavigationPages/Master";
import CompanyStaffPages from "./pages/topNavigationPages/companyStaff/CompanyStaffPages";
import BoardcastPage from "./pages/boardcast";
import BankMasterP from "./pages/topNavigationPages/Master/bankMaster";
import Provider from "./components/topNavigationComp/apimaster/provider/Provider";
import AddproviderLogo from "./components/topNavigationComp/apimaster/provider/providerForm/addproviderLogo/AddproviderLogo";
import AddBank from "./components/topNavigationComp/masters/bankMaster/addBank/AddBank";
import RoleMasterPage from "./pages/topNavigationPages/Master/roleMaster";
import StatusMasterPage from "./pages/topNavigationPages/Master/statusMaster";
import ServiceMasterPage from "./pages/topNavigationPages/Master/serviceMaster";
import AddRoleMaster from "./components/topNavigationComp/masters/roleMaster/addRoleMaster/AddRoleMaster";
import AddStatusMaster from "./components/topNavigationComp/masters/statusMaster/addStatusMaster/AddStatusMaster";
import AddServiceMaster from "./components/topNavigationComp/masters/serviceMaster/addServiceMaster/AddServiceMaster";
import PaymentMethodMasterPage from "./pages/topNavigationPages/Master/paymentMethodMaster";
import AddPaymentMethod from "./components/topNavigationComp/masters/paymentMethodMaster/addPaymentMethod/AddPaymentMethod";
import PayoutBeneficiaryMasterPage from "./pages/topNavigationPages/payoutBenefisiaryMaster";
import AddPayoutBeneficiaryMaster from "./components/topNavigationComp/masters/PayoutBeneficiaryMaster/addPayoutBeneficiaryMaster/AddPayoutBeneficiaryMaster";
import ServiceCategoryMasterPage from "./pages/topNavigationPages/Master/serviceCategoryMaster";
import AddServiceCategoryMaster from "./components/topNavigationComp/masters/serviceCategoryMaster/addServiceCategoryMaster/AddServiceCategoryMaster";
import AreaPage from "./pages/topNavigationPages/ZoneModule/area";
import AddArea from "./components/topNavigationComp/ZoneModule/area/addArea/AddArea";
import AgentOnbordingPage from "./pages/topNavigationPages/agentOnbording/index";
import AddAgentOnbording from "./components/topNavigationComp/masters/agentOnbording/addAgentOnbording/AddAgentOnbording";
import BalanceTransferAdd from "./components/balanceTransfer/blanceTrnsferAdd/BlanceTransferAdd";
import UpdateBlanceTransfer from "./components/balanceTransfer/UpdateBlanceTransfer/UpdateBlanceTransfer";
import UpdatePendingDisput from "./components/pendingDisput/updatePendingDisput/UpdatePendingDisput";
import AddSolveDispute from "./components/solveDispute/addSolveDispute/AddSolveDispute";
import UpdateSolveDispute from "./components/solveDispute/updateSolveDispute/UpdateSolveDispute";
import AddTransactionReport from "./components/reportMaster/alltransationsReports/addTransactionReport/AddTransactionReport";
import AddPendingTransactionReport from "./components/reportMaster/pendingTransactionReport/addPendingTarnsactionReport/AddPendingTransactionReport";
import AddNotWorkingUserList from "./components/notWorkingUser/addNotWorkingUserList/AddNotWorkingUserList";
import AddSuspendedUser from "./components/suspendedUsers/add SuspendedUser/AddSuspendedUser";
import AddOperatorWiseReport from "./components/reportMaster/operatorWiseSale/addOperatorWiseReports/AddOperatorWiseReport";
import AddDebitReport from "./components/reportMaster/debitReport/addDebitReport/AddDebitReport";
import AddCreditReport from "./components/reportMaster/creditReport/addCreditReport/AddCreditReport";
import AddProvider from "./components/topNavigationComp/apimaster/provider/addProvider/AddProvider";
import UpdateProvider from "./components/topNavigationComp/apimaster/provider/updateProvider/UpdateProvider";
import ApiMasterPage from "./pages/topNavigationPages/apisMaster/apiMaster";
import AddApiMaster from "./components/topNavigationComp/apimaster/appiMaster/addApiMaster/AddApiMaster";
import DominationWiseMasterPage from "./pages/topNavigationPages/apisMaster/dominationWiseMaster";
import AddDominationWiseMaster from "./components/topNavigationComp/apimaster/dominationWiseMaster/addDominationWiseMaster/AddDominationWiseMaster";
import UpdateDonimationWiseMaster from "./components/topNavigationComp/apimaster/dominationWiseMaster/updateDominationWiseMaster/UpdateDominationWiseMaster";
import NumberSeriesMasterPage from "./pages/topNavigationPages/apisMaster/numberSeriesMaster";
import AddNumberSeriesMaster from "./components/topNavigationComp/apimaster/numberSeriesMaster/addNumberSeriesMaster/AddNumberSeriesMaster";
import UpdateNumberSeriesMaster from "./components/topNavigationComp/apimaster/numberSeriesMaster/updateNumberSeriesMaster/UpdateNumberSeriesMaster";
import StateWiseApiPage from "./pages/topNavigationPages/apisMaster/stateWiseApi";
import StateWiseProviderSetting from "./components/topNavigationComp/apimaster/stateWiseApi/stateWiseProviderSettings/StateWiseProviderSetting";
import BackupApiMasterPage from "./pages/topNavigationPages/apisMaster/backupApiMaster";
import AddBackupApiMaster from "./components/topNavigationComp/apimaster/backupApiMaster/addBackupApiMaster/AddBackupApiMaster";
import UpdateBackupApiMaster from "./components/topNavigationComp/apimaster/backupApiMaster/updateBackupApiMaster/UpdateBackupApiMaster";
import ApiSwitchingPage from "./pages/topNavigationPages/apisMaster/apiSwitch";
import UserOperatorLimitPage from "./pages/topNavigationPages/apisMaster/userOperatorLimit";
import ViewOperatorLimit from "./components/topNavigationComp/apimaster/userOperatorLimit/viewOperatorLimit/ViewOperatorLimit";
import ApiVandorPaymentPage from "./pages/topNavigationPages/apisMaster/apiVandorPayment";
import SiteSettingPage from "./pages/topNavigationPages/settings/siteSetting";
import SmsSettingsPage from "./pages/topNavigationPages/settings/smsSetting";
import PackageSettingsPage from "./pages/topNavigationPages/settings/packageSettings";
import CommissionSetup from "./components/topNavigationComp/settings/packageSettings/commissionSetup/CommissionSetup";
import SetOperatorSettings from "./components/topNavigationComp/settings/packageSettings/commissionSetup/setOperatorSettings/SetOperatorsettings";
import BankSettingsPage from "./pages/topNavigationPages/settings/bankSettings";
import AddBankSettings from "./components/topNavigationComp/settings/bankSettings/addBankSetting/AddBankSettings";
import UpdateBankSettings from "./components/topNavigationComp/settings/bankSettings/updateBankSettings/UpdateBanksettings";
import AddDistributerInc from "./components/distributerIncome/distributerIncomeForm/addDistributerInc/AddDistributerInc";
import AddRetailerInc from "./components/retailerIncome/addRetailerInc/AddRetailerInc";
import ContactInquery from "./pages/topNavigationPages/Master/contactInquery/index";
import AddContactEnquiry from "./components/topNavigationComp/masters/contactEnquiry/addContactEnquiry/AddContactEnquiry";
import AddCompanyStaff from "./components/topNavigationComp/companyStaff/addCompanyStaff/AddCompanyStaff";
import CashfreeGateWayMasterPages from "./pages/topNavigationPages/Master/cashfreeGateWayMasterPages";
import AddCashFreeGateway from "./components/topNavigationComp/masters/cashfreeGatewayMaster/addCashFreeGateway/AddCashFreeGateway";
import SendRoleWisepage from "./pages/topNavigationPages/whatsAppPages";
import CompanySettings from "./components/topNavigationComp/settings/companySetting/CompanySettings";
import LogoUploadPage from "./pages/topNavigationPages/settings/logoUpload";
import SignatureUploadPage from "./pages/topNavigationPages/settings/signatureUpload";
import ServiceBannerPage from "./pages/topNavigationPages/settings/serviceBanner";
import NotificationSettingsPage from "./pages/topNavigationPages/settings/notificationSettings";
import DynemicPage from "./pages/topNavigationPages/websiteMaster/dynemicPage";
import FrontBannerPage from "./pages/topNavigationPages/websiteMaster/frontBanner";
import UserPannelSliderPage from "./pages/topNavigationPages/websiteMaster/userPannelSlider";
import LoginPage from "./pages/login";
import CurrencyPage from "./pages/currency";
import CurrencyForm from "./components/currency/CurrencyForm";
import CountryPage from "./pages/country";
import CountryForm from "./components/country/countryForm/CountryForm";
import LanguagePage from "./pages/language";
import FormLanguage from "./components/language/formLanguage.js/FormLanguage";
import CountryZoneMudle from "./components/topNavigationComp/ZoneModule/country/Country";
import StaffPage from "./pages/staffModule/staff";
import StaffForm from "./components/staffModule/staffForm/StaffForm";
import StaffTypePage from "./pages/staffModule/staffType";
import StaffTypeAdd from "./components/staffModule/staffType/staffTypeAdd/StaffTypeAdd";
import Customer from "./components/topNavigationComp/customer/Customer";
import AddUsers from "./components/topNavigationComp/customer/users/addUsers/AddUsers";
import IndexZone from "./components/topNavigationComp/ZoneModule/country/zoneCountryAdd/IndexZone";
import UsersType from "./pages/topNavigationPages/userType";
import AddUsertType from "./components/topNavigationComp/customer/addUserType/AddUsertType";
import StateMasterPage from "./pages/stateMaster";
import FormStateMaster from "./components/stateMaster/formStateMaster/FormStateMaster";
import Profile from "./common/profileUser/Profile";
import ServiceAreaPermissionPage from "./pages/servicePermission/serviceAreaPermission/index";
import FormServicePermission from "./components/servicePermission/formServiceAreaPermission/FormServiceAreaPermission";
import ApiTransitionMasterPage from "./pages/topNavigationPages/apisMaster/apiTransitionMaster";
import PrivateRoute from "./privateRote/PrivateRoute";
import { useSelector } from "react-redux";
import { getToken2 } from "./utils/localStorage";
import { useDispatch } from "react-redux";
import { setIsLogin } from "./slice/auth";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ZoonArea from "./pages/zoonArea";
import Statement from "./pages/statement/page";
import StatementWallet from "./pages/walletstatement/page";
import Transactions from "./pages/transactions";
import ViewProfileMemberPage from "./pages/viewProfileMember";
import UtiPancardPage from "./pages/utiPandcard";
import ChangePinPage from "./pages/changePinPage";
import ChangePasswordPage from "./pages/changePassword";
import ForgotPassword from "./components/forgotPassword/ForgotPassword";
import LoginPasswordReset from "./pages/paswordResetPages";
import ChargesSettingsPage from "./pages/chargeSettings/index";
import TicketForm from "./components/ticketMaster/addTicket/TicketForm";
import DepartmentMasterPage from "./pages/topNavigationPages/Master/department";
import AddDepartmentMaster from "./components/topNavigationComp/masters/roleMaster/addDepartment/AddRoleMaster";
import PackageMasterPage from "./pages/packagemaster";
import AddPackegs from "./pages/packagemaster/addPackegs/AddPackegs";
import PackageSaleReplort from "./pages/Package-Sales-Report";
import EditPackegs from "./pages/packagemaster/addPackegs/EditPackege";
import AddPermision from "./components/rolesPermision/addStaffPermision/AddPermision";
import ListStaffPermision from "./components/rolesPermision/listStaffPermision/ListStaffPermision";
import BuildingMaster from "./components/permisionMaster/buildingPer/BuildingMaster";
import BlockMaster from "./components/permisionMaster/blockpermission/BlockMaster";
import AreaPermision from "./components/permisionMaster/areaPerMaster/AreaPermision";
import FloorPermission from "./components/permisionMaster/floorMaster/floorPermission/FloorPermission";
import WardMaster from "./components/permisionMaster/wardMaster/WardMaster";
import OfficeMaster from "./components/permisionMaster/officeMaster/OfficeMaster";
import DepartmentMaster from "./components/permisionMaster/departmentMaster/DepartmentMaster";
import DesignationMaster from "./components/permisionMaster/designationMaster/DesignationMaster";
// --------------------------mustafa import routes----------------

import AddMainModulePage from "./pages/RolePermission/addMainModule/AddMainModule";
import MainListModule from "./pages/RolePermission/addMainModule/mailListModule/MailLisyModule";
import AddSubModule from "./pages/RolePermission/subModule/addSubModule/AddSubModule";
import MainSubListModule from "./pages/RolePermission/subModule/mailSubListModule/MainSubListModule";
import AddRole from "./pages/RolePermission/addRole/AddRole";
import ListMainRole from "./pages/RolePermission/addRole/listmainRole/ListMainRole";
import ComplaintsDashboardPages from "./pages/complaintsDashboardPages";
import AddCompalnePage from "./pages/createCompalne/addCompalne/AddComplane";
import MainListComplane from "./components/createCompalne/listComplane/MainListCompalne";
import StaffKycMaster from "./components/staffKycMaster/StaffKycMaster";
import StaffKycMasterByid from "./components/staffKycMaster/StaffKycMaster";
import StaffKycDetailsMasterByid from "./components/staffKycDetailsByStaffId/StaffKyDetailsMasterByid";
import { NotificationReport } from "./pages/Notification-Report/indexSame";
import { getToken } from 'firebase/messaging';
import { messaging } from "./firebase/fireBase";
import { sendNotification } from "./api/login/Login";
import SetGroupAttributesPages from "./pages/setGroupAttributes";
import Cities from "./pages/city";
import CityForm from "./components/city/addCityForm/CityForm";
import PageNotFound from "./common/pageNotFound/PageNotFound";
//---------------------end--------------------------
//---------------------After Delete start--------------------------
import DmtDisputesPage from "./pages/dmt/disputes";
import DmtStatusPage from "./pages/dmt/dmtStatus/DmtStatus";
import PriorityPages from "./pages/dmt/priorityPages";
import CollegetypesPage from "./pages/collegeTypes";
import CollegetypeForm from "./components/topNavigationComp/masters/collegeType/collegeTypesForm/CollegetypeForm";
import LeadStatusMaster from "./pages/LeadStatusMaster";
import LeadStatusForm from "./components/topNavigationComp/masters/leadStatusMaster/leadStatusForm/LeadStatusForm";
import LeadSubStatusMaster from "./pages/leadSubStatusMaster";
import LeadSubStatusForm from "./components/topNavigationComp/masters/leadSubStatusMaster/leadSubStatusForm/LeadSubStatusForm";
import LeadSourceMasterPage from "./pages/LeadSourceMasterpage";
import LeadSourceMasterForm from "./components/topNavigationComp/masters/leadSourceMaster/leadSourceMasterForm/LeadSourceMasterForm";
import AffilatedBy from "./pages/affilatedBy";
import AffilatedTypesForm from "./components/topNavigationComp/masters/affilatedType/affilatedTypeForm/AffilatedTypesForm";
import CreditCard from "./pages/creditCard";
import CreditCardMasterForm from "./components/topNavigationComp/masters/creditCardMaster/creditCardMasterForm/CreditCardMasterForm";
import ApprovalMasterForm from "./components/topNavigationComp/masters/approvalMaster/approvalMasterForm/ApprovalMasterForm";
import ApprovalMaster from "./pages/approvalMaster/ApprovalMaster";
import CollagesData from "./pages/collegesDatas";
import CollagesFormData from "./components/collegesData/collagesFormData/ColllagesFormData";
import PriorityMasterForm from "./components/dmtModule/priorityMaster/priorityMasterForm/PriorityMasterForm";
import DmtStatusForm from "./components/dmtModule/status/dmtStatusForm/DmtStatusForm";
import Facilities from "./pages/facilities";
import FacilitiesMasterForm from "./components/topNavigationComp/masters/facilitiesMaster/facilitiesMasterForm/FacilitiesMasterForm";
import GalleryDatas from "./pages/Gallery";
import PhotoGalleryMasterForm from "./components/topNavigationComp/masters/photosGalleryMaster/photosGalleryForm/PhotoGalleryMasterForm";
import MoveMember from "./pages/move-member";
import UpgradeMember from "./pages/upgrade-member";
//---------------------end--------------------------

//---------------------JUNAID IMPORT START--------------------------
import CreateTestimonial from "./components/testimonial/CreateTestimonial";
import Testimoniallist from "./components/testimonialList/Testimoniallist";
import CreateVedio from "./components/vedioadd/CreateVedio";
import VedioList from "./components/vediolist/VedioList";
import BlogCategoryList from "./components/blog-categoryList/BlogCategoryList";
import BLogCategoryAdd from "./components/blog-categoryAdd/BLogCategoryAdd";
import BlogList from "./components/blogList/BlogList";
import BLogAdd from "./components/blog/BLogAdd";
import PartnerList from "./components/partnerList/PartnerList";
import PartnerAdd from "./components/partneradd/PartnerAdd";
import AboutUs from "./components/aboutus/AboutUs";
import ContactUs from "./components/contact/AboutUs";
import PrivacyAndPolicy from "./components/privecyPolecy/PrivacyAndPolicy";
import ReturnPolicy from "./components/return-policy/Return-Policy";
import TermsCondition from "./components/terms-condition/TermsCondition";
import FAQAdd from "./components/FaqAdd/FAQAdd";
import FaqList from "./components/FaqList/FaqList";
import WhatsaapMaster from "./components/whatsaap-master/WhatsaapMaster";
import WhatsAppManager from "./components/WhatsAppManager/WhatsAppManager";
import { ListUtility } from "./components/WhatsAppManager/ListUtility";
import NewTemplateForm from "./components/NewTemplateForm.js/NewTemplateForm";
import TableTemplate from "./components/template-typeList/TemplateTypeList";
import TemplateTypeAdd from "./components/template-typeAdd/TemplateTypeAdd";
import TemplateCategoryList from "./components/TemplateCategoryList/TemplateCategoryList";
import TemplateCategoryAdd from "./components/TemplateCategoryAdd/TemplateCategoryAdd";
import FlowBuilder from "./components/flow-builderList/FlowBuildList";
import FlowBuilderAdd from "./components/flow-builderAdd/FlowBuilderAdd";
import LeadDetail from "./pages/lead-detail/LeadDetail";
import Coursedegree from "./pages/topNavigationPages/Master/courseTypesdegree";
import CourceDegreeTypeForm from "./components/topNavigationComp/masters/courseDegreeType/courseDegreeTypeForm/CourceDegreeTypeForm";
import ListnumberWhatsaap from "./components/whatsApp/addNumberWhatsapp/listNumberWhatsapp/ListNumberWhatsApp";
import AddNumber from "./components/whatsApp/addNumberWhatsapp/addNumber/AddNumber";
import AgentList from "./components/whatsApp/agent/agentList/AgentList";
import SharedTeamWhatsapp from "./components/whatsApp/sharedTeamInbox/SharedTeamWhatsapp";
import CreateAgent from "./components/whatsApp/agent/createAgent/CreateAgent";
import EmailSettings from "./pages/emailSetings";
import CreateCampingMessages from "./components/messagesApps/CreateCamping/CreateCamping";
import UtilityManager from "./components/messagesApps/utilityManager/UtilityManager";
import ManageReports from "./components/messagesApps/manageReports/ManageReports";
import CreateLead from "./pages/create-lead/Index";
import CreateCall from "./pages/createcall/Index";
import CallList from "./pages/List-Call/Index";
import CreateEnquiry from "./pages/Create-Enquiry/Index";
import EnquiryList from "./pages/List-Enquiry/Index";
import LeadTypeList from "./components/LeadType/LeadTypeList";
import LeadTypeAdd from "./components/leadtypead/LeadTypeAdd";
import OptinManageMent from "./components/optinMangement/OptinManageMent";
import WaBlockNumber from "./components/waBlockNumber/WaBlockNumber";
import WhatsAppReports from "./components/whatsAppReports/WhatsAppReports";
import CompanyMasters from "./pages/companyMasters";
import CompanyFormMaster from "./components/topNavigationComp/masters/companyMaster/companyFormMaster/CompanyFormMaster";
import CompanyTypeMasters from "./pages/companyTypeMaster";
import CompanyTypeMasterForm from "./components/topNavigationComp/masters/companyTypeMaster/companyTypeMasterForm/CompanyTypeMasterForm";
import FlightRequestPages from "./pages/flightAllPages";

import FlightAmbd from "./components/flightComp/flightAmbd/FlightAmbd";
import FlightCancel from "./components/flightComp/flightCancel/FlightCancel";
import FlightRefunds from "./components/flightComp/flightRefundlList/FlightRefunds";
import FlightBookingCalender from "./components/flightComp/flightBCalender/flightBookingCalender/FlightBookingCalender";
import HoteltAmbd from "./components/hotelComp/hotelAmbd/HotelAmbd";
import HotelBooking from "./components/hotelComp/hotelBooking/HotelBooking";
import HotelBCalender from "./components/hotelComp/hotelBCalender/HotelBCalender";
import HotelCancel from "./components/hotelComp/HotelCancel/HotelCancel";
import HotelRefunds from "./components/hotelComp/HotelRefundlList/HotelRefunds";
import BusMarkup from "./components/busComp/busMarkup/BusMarkup";
import BusAmendments from "./components/busComp/busAmendment/BusAmendments ";
import BusBooking from "./components/busComp/busBooking/BusBooking";
import BusCancel from "./components/busComp/busCancel/BusCancel";
import BusRefunds from "./components/busComp/BusRefund/BusRefund";
import BusGroupRequest from "./components/busComp/busGroupRequest/BusGroupRequest";
import BusDiscount from "./components/busComp/busDiscount/BusDiscount";
import BusUpload from "./components/busComp/busUpload/BusUpload";
import VisaMarkup from "./components/visaComp/visaMarkup/Visamarkup";
import VisaDiscount from "./components/visaComp/VisaDiscount/VisaDiscount";
import VisaList from "./components/visaComp/VisaList/Visalist";
import VisaAmendmentsList from "./components/visaComp/VisaAmendmentsList/VisaAmendmentslist";
import VisaBooking from "./components/visaComp/visaBooking/visaBooking";
import VisaSetings from "./components/visaComp/visaSettings/VisaSetings";
import AccountManagement from "./components/accountmanagment/AccountManagement";
import DistributorRequest from "./components/distributorDepositeRequest/DistributorRequest";
import RemarkPayment from "./components/flightComp/flightRequest/flightRequestList/RemarkPayment";
import ViewInvoice from "./components/flightComp/viewInvoice/ViewInvoice";
//---------------------JUNAID IMPORT END --------------------------
//---------------------JUNAID IMPORT Start Goatx --------------------------
// import HotelGroupRequestListPage from './pages/viaggioWebPages/hotelGroupRequestListPage';
// import MyBookingCalenderListPage from './pages/viaggioWebPages/myBookingCalenderListPage';
// import MyAmendmentsListPage from './pages/viaggioWebPages/myAmendmentsListPage';
// import MyCancellationPage from './pages/viaggioWebPages/myCancellationsPage';
// import MyRefundsPage from './pages/viaggioWebPages/myRefundsPage';
// import FlightCreditNotePage from './pages/admin/account/creditNote/flightCreditNote';
// import ViaggioHotelBookingListPage from "./pages/viaggioWebPages/viaggioHotelBookingList";
// import AccountLadgerPage from './pages/admin/account/accountLadger';
// import RechargeHistoryPagee from './pages/admin/account/RechargeHistory';
// import DetailsHistory from './pages/admin/account/RechargeHistory/detailsHistory/DetailsHistory';
// import DepositHistoryPage from './pages/admin/account/depositHistory';
// import DepositHistoryDetails from './components/admin/account/depositHistory/depositHistoryDetails/DepositHistoryDetails';
//---------------------JUNAID IMPORT Goatx END --------------------------
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { isLogin } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // console.log(getToken());
    requestPermissions()
    if (getToken2()) {
      dispatch(setIsLogin({ isLogin: true }));
      navigate(location?.pathname);
    }
  }, []);

  useEffect(() => {
    setIsAuthenticated(isLogin);

  }, [isLogin]);




  const [tokenNoti, setokenNoti] = useState(null);

  const sendNotification2 = async (token) => {
    try {
      let result = await sendNotification({ type: 'Browser', token: token });

    } catch (error) {

    }
  };

  async function requestPermissions() {


    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        getToken(messaging, { vapidKey: 'BPmnN4enu6SLX6ASW7dctK6Q0j3GnTUhL5ZRi16I6RDqGav4khN2JIHmdKcL4eTqwRBu-PWmaUa1G-Oaor7AcF4' }).then((currentToken) => {
          if (currentToken) {
            console.log('Got FCM device token:', currentToken);
            setokenNoti(currentToken)
            if (isLogin) {
              sendNotification2(currentToken)

            }
            // Send the token to your server or display it on the UI
          } else {
            console.log('No registration token available. Request permission to generate one.');
          }
        }).catch((err) => {
          console.log('An error occurred while retrieving token. ', err);
        });
      }
    })



  }

  return (
    <>
      <Routes>
        {!isAuthenticated ? (
          <>
            <Route path="/" element={<Navigate to={"/loginPage"} />} />
            <Route path="/loginPage" element={<LoginPage />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<LoginPasswordReset />} />
            <Route path="*" element={<Navigate to="/loginPage" />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Navigate to={"/admin"} />} />
            <Route
              path=""
              element={<PrivateRoute isAuthenticated={isAuthenticated} />}
            >
              <Route path="admin" element={<DasBoardRight />} />
              <Route path="bank-master" element={<BankMasterP />} />
              <Route path="zoon_area" element={<ZoonArea />} />
              <Route path="add-bank" element={<AddBank />} />
              <Route path="update-bank/:id" element={<AddBank />} />
              <Route path="role-master" element={<RoleMasterPage />} />
              <Route path="add-role-master" element={<AddRoleMaster />} />
              <Route
                path="update-role-master/:id"
                element={<AddRoleMaster />}
              />

              <Route
                path="company-staff/welcome"
                element={<CompanyStaffPages />}
              />
              <Route
                path="add-company-staff/welcome"
                element={<AddCompanyStaff />}
              />
              <Route
                path="company-staff-permission"
                element={<MasterPages />}
              />
              <Route path="status-master" element={<StatusMasterPage />} />
              <Route path="add-status-master" element={<AddStatusMaster />} />
              <Route
                path="update-status-master/:id"
                element={<AddStatusMaster />}
              />
              <Route path="course-master" element={<ServiceMasterPage />} />
              <Route path="add-course-master" element={<AddServiceMaster />} />
              <Route
                path="update-course-master/:id"
                element={<AddServiceMaster />}
              />
              <Route
                path="stream-master"
                element={<ServiceCategoryMasterPage />}
              />
              <Route
                path="add-stream-category"
                element={<AddServiceCategoryMaster />}
              />
              <Route
                path="update-stream-category/:id"
                element={<AddServiceCategoryMaster />}
              />
              <Route path="boardcast" element={<BoardcastPage />} />
              <Route
                path="payment-method"
                element={<PaymentMethodMasterPage />}
              />
              <Route path="add-payment-method" element={<AddPaymentMethod />} />
              <Route
                path="update-payment-method/:id"
                element={<AddPaymentMethod />}
              />
              <Route
                path="payout-beneficiary-master"
                element={<PayoutBeneficiaryMasterPage />}
              />
              <Route
                path="add-payout-beneficiary-master"
                element={<AddPayoutBeneficiaryMaster />}
              />
              <Route
                path="update-payout-beneficiary-master/:id"
                element={<AddPayoutBeneficiaryMaster />}
              />

              <Route path="area" element={<AreaPage />} />
              <Route path="add-area" element={<AddArea />} />
              <Route path="update-area/:id" element={<AddArea />} />
              <Route
                path="agent-onboarding-list"
                element={<AgentOnbordingPage />}
              />
              <Route path="country-zone" element={<CountryZoneMudle />} />
              <Route path="add-country-zone" element={<IndexZone />} />


              <Route
                path="add-agent-onboarding"
                element={<AddAgentOnbording />}
              />
              <Route
                path="update-agent-onboarding/:id"
                element={<AddAgentOnbording />}
              />
              <Route path="provider" element={<Provider />} />
              <Route path="add-provider" element={<AddProvider />} />
              <Route path="update-provider/:id" element={<AddProvider />} />
              <Route path="add-provider-logo" element={<AddproviderLogo />} />
              <Route path="update-provider-logo" element={<UpdateProvider />} />
              <Route path="api-master" element={<ApiMasterPage />} />
              <Route path="add-api-master" element={<AddApiMaster />} />
              <Route path="update-api-master/:id" element={<AddApiMaster />} />
              <Route
                path="api-transaction-master"
                element={<ApiTransitionMasterPage />}
              />
              <Route
                path="denomination-wise-api"
                element={<DominationWiseMasterPage />}
              />
              <Route
                path="add-denomination-wise-api"
                element={<AddDominationWiseMaster />}
              />
              <Route
                path="update-denomination-wise-api"
                element={<UpdateDonimationWiseMaster />}
              />
              <Route
                path="number-series-master"
                element={<NumberSeriesMasterPage />}
              />
              <Route
                path="add-number-series-master"
                element={<AddNumberSeriesMaster />}
              />
              <Route
                path="update-number-series-master"
                element={<UpdateNumberSeriesMaster />}
              />
              <Route path="state-wise-api" element={<StateWiseApiPage />} />
              <Route
                path="state-provider-settings"
                element={<StateWiseProviderSetting />}
              />
              <Route
                path="backup-api-master"
                element={<BackupApiMasterPage />}
              />
              <Route
                path="add-backup-api-master"
                element={<AddBackupApiMaster />}
              />
              <Route
                path="update-backup-api-master"
                element={<UpdateBackupApiMaster />}
              />
              <Route path="api-switching" element={<ApiSwitchingPage />} />
              <Route
                path="user-operator-limit"
                element={<UserOperatorLimitPage />}
              />
              <Route
                path="view-operator-limit"
                element={<ViewOperatorLimit />}
              />
              <Route
                path="vandor/payment/welcome"
                element={<ApiVandorPaymentPage />}
              />
              <Route
                path="site-setting/welcome"
                element={<SiteSettingPage />}
              />
              <Route
                path="sms-templete/welcome"
                element={<SmsSettingsPage />}
              />
              <Route
                path="package-settings"
                element={<PackageSettingsPage />}
              />
              <Route path="commission-setup" element={<CommissionSetup />} />
              <Route
                path="set-operator-commission"
                element={<SetOperatorSettings />}
              />
              <Route path="bank-settings" element={<BankSettingsPage />} />
              <Route path="user" element={<Customer />} />
              <Route path="user/add-user" element={<AddUsers />} />
              <Route path="update-user/:id" element={<AddUsers />} />
              <Route path="user-type" element={<UsersType />} />
              <Route path="add/user-type" element={<AddUsertType />} />
              <Route path="update/user-type/:id" element={<AddUsertType />} />
              <Route path="add-bank-settings" element={<AddBankSettings />} />
              <Route
                path="update-bank-settings"
                element={<UpdateBankSettings />}
              />
              <Route path="logo-upload" element={<LogoUploadPage />} />
              <Route
                path="signature-upload"
                element={<SignatureUploadPage />}
              />
              <Route path="service-banner" element={<ServiceBannerPage />} />
              <Route
                path="notification/welcome"
                element={<NotificationSettingsPage />}
              />
              <Route
                path="change-pin"
                element={<ChangePinPage />}
              />

              <Route
                path="charges-settings/welcome"
                element={<ChargesSettingsPage />}
              />
              <Route
                path="change-password"
                element={<ChangePasswordPage />}
              />
              <Route path="dynemic-page" element={<DynemicPage />} />
              <Route path="front-banner" element={<FrontBannerPage />} />
              <Route
                path="user-pannel-slider"
                element={<UserPannelSliderPage />}
              />
              <Route
                path="user-pannel-slider"
                element={<UserPannelSliderPage />}
              />

              <Route
                path="member-list/:id/:name"
                element={<DistributerPage />}
              />


              <Route
                path="create-user/:id"
                element={<CreateUserDistributerPage />}
              />
              <Route
                path="/admin/detail-lead/:id"
                element={<LeadDetail />}
              />

              <Route path="member/profile/view/:id" element={<ViewProfileMemberPage />} />
              <Route path="report/pancard/:id" element={<UtiPancardPage />} />
              <Route path="suspended-users" element={<SuspendedUserPage />} />
              <Route
                path="add-suspended-users"
                element={<AddSuspendedUser />}
              />
              <Route
                path="not-working-users"
                element={<NotWorkingUserPage />}
              />
              <Route
                path="add-not-working-user"
                element={<AddNotWorkingUserList />}
              />

              <Route
                path="add-transaction-report"
                element={<AddTransactionReport />}
              />

              <Route
                path="pending-transaction-report"
                element={<PendingTransactionReport />}
              />
              <Route
                path="add-pending-transaction-report"
                element={<AddPendingTransactionReport />}
              />

              <Route
                path="operator-wise-sale"
                element={<OperatorWiseSalePage />}
              />
              <Route
                path="add-operator-wise-sale"
                element={<AddOperatorWiseReport />}
              />
              <Route
                path="balance-trasnfer"
                element={<BalanceTransferPage />}
              />
              <Route
                path="add-balance-trasnfer"
                element={<BalanceTransferAdd />}
              />
              <Route
                path="update-balance-trasnfer"
                element={<UpdateBlanceTransfer />}
              />
              <Route
                path="update-pending-dispute"
                element={<UpdatePendingDisput />}
              />
              <Route path="solve-dispute" element={<SolveDisputePage />} />
              <Route path="add-solve-dispute" element={<AddSolveDispute />} />
              <Route
                path="update-solve-dispute"
                element={<UpdateSolveDispute />}
              />
              <Route
                path="add/distributor/income"
                element={<AddDistributerInc />}
              />
              <Route
                path="user-income/retailer"
                element={<RetailerIncomePage />}
              />
              <Route path="add/retailer/income" element={<AddRetailerInc />} />
              <Route path="income/my-income" element={<MyIncomePage />} />
              <Route path="add-debit-report" element={<AddDebitReport />} />
              <Route path="add-credit-report" element={<AddCreditReport />} />
              <Route path="contact-enquiry" element={<ContactInquery />} />
              <Route
                path="add-contact-enquiry"
                element={<AddContactEnquiry />}
              />
              <Route
                path="update-contact-enquiry/:id"
                element={<AddContactEnquiry />}
              />
              <Route
                path="cashfree-gateway-master"
                element={<CashfreeGateWayMasterPages />}
              />
              <Route
                path="add-cashfree-gateway-master"
                element={<AddCashFreeGateway />}
              />
              <Route
                path="whatapp/send-role-wise"
                element={<SendRoleWisepage />}
              />
              <Route path="company-setting" element={<CompanySettings />} />
              <Route path="currency" element={<CurrencyPage />} />
              <Route path="add-currency" element={<CurrencyForm />} />
              <Route path="update-currency/:id" element={<CurrencyForm />} />
              <Route path="country" element={<CountryPage />} />
              <Route path="add-country" element={<CountryForm />} />
              <Route path="update-country/:id" element={<CountryForm />} />
              <Route path="language" element={<LanguagePage />} />
              <Route path="satff" element={<StaffPage />} />
              <Route path="add-satff" element={<StaffForm />} />
              <Route path="update-satff/:id" element={<StaffForm />} />
              <Route path="staff-type" element={<StaffTypePage />} />
              <Route path="staff-type-add" element={<StaffTypeAdd />} />
              <Route path="staff-type-update/:id" element={<StaffTypeAdd />} />
              <Route path="add-language" element={<FormLanguage />} />
              <Route path="update_language/:id" element={<FormLanguage />} />
              <Route path="state-master" element={<StateMasterPage />} />
              <Route path="add-state-master" element={<FormStateMaster />} />
              <Route
                path="update-state-master/:id"
                element={<FormStateMaster />}
              />
              <Route
                path="service-area-permision"
                element={<ServiceAreaPermissionPage />}
              />
              <Route
                path="add-service-area-permision"
                element={<FormServicePermission />}
              />
              <Route
                path="package-master"
                element={<PackageMasterPage />}
              />

              <Route
                path="Package-Sales-Report"
                element={<PackageSaleReplort />}
              />
              <Route
                path="add-package"
                element={<AddPackegs />}
              />
              <Route
                path="add-package/:id"
                element={<EditPackegs />}
              />
              <Route
                path="department-master"
                element={<DepartmentMasterPage />}
              />
              <Route
                path="add-department-master"
                element={<AddDepartmentMaster />}
              />


              <Route
                path="update-department-master/:id"
                element={<AddDepartmentMaster />}
              />


              <Route path="profile" element={<Profile />} />
              <Route
                path="/statement/report/:id"
                element={<Statement />}
              />
              <Route
                path="/statementwallet/report/:id"
                element={<StatementWallet />}
              />
              <Route
                path="/statement/apes/report/:id"
                element={<Transactions />}
              />
              <Route
                path="/add-tickets"
                element={<TicketForm />}
              />
              <Route
                path="/staff-list"
                element={<ListStaffPermision />}
              />
              <Route
                path="/add-staff"
                element={<AddPermision />}
              />
              <Route
                path="/update-staff/:id"
                element={<AddPermision />}
              />
              <Route
                path="/building-master"
                element={<BuildingMaster />}
              />
              <Route
                path="/building-master/:id"
                element={<BuildingMaster />}
              />
              <Route
                path="/block-master"
                element={<BlockMaster />}
              />
              <Route
                path="/block-master/:id"
                element={<BlockMaster />}
              />
              <Route
                path="/area-master"
                element={<AreaPermision />}
              />
              <Route
                path="/area-master/:id"
                element={<AreaPermision />}
              />
              <Route
                path="/floor-master"
                element={<FloorPermission />}
              />
              <Route
                path="/floor-master/:id"
                element={<FloorPermission />}
              />
              <Route
                path="/ward-master"
                element={<WardMaster />}
              />
              <Route
                path="/ward-master/:id"
                element={<WardMaster />}
              />
              <Route
                path="/office-master"
                element={<OfficeMaster />}
              />
              <Route
                path="/office-master/:id"
                element={<OfficeMaster />}
              />
              <Route
                path="/departments-master"
                element={<DepartmentMaster />}
              />
              <Route
                path="/departments-master/:id"
                element={<DepartmentMaster />}
              />
              <Route
                path="/designation-master"
                element={<DesignationMaster />}
              />
              <Route
                path="/designation-master/:id"
                element={<DesignationMaster />}
              />
              <Route
                path="/staff-kyc_details"
                element={<StaffKycMaster />}
              />
              <Route
                path="/staff-kyc_details/:id"
                element={<StaffKycDetailsMasterByid />}
              />

              {/* ----------mustafa routes ------ */}
              <Route
                path="/add-main-module"
                element={<AddMainModulePage />}
              />
              <Route
                path="/update-main-module/:id"
                element={<AddMainModulePage />}
              />
              <Route
                path="/listMainModule"
                element={<MainListModule />}
              />

              <Route
                path="/add-sub-module"
                element={<AddSubModule />}
              />
              <Route
                path="/update-sub-module/:id"
                element={<AddSubModule />}
              />
              <Route
                path="/list-sub-module"
                element={<MainSubListModule />}
              />

              <Route
                path="/add-role"
                element={<AddRole />}
              />
              <Route
                path="/list-role"
                element={<ListMainRole />}
              />
              <Route
                path="/update-role/:id"
                element={<AddRole />}
              />
              {/* Create-Complaint */}

              <Route
                path="/employees-complaints-dashboard"
                element={<ComplaintsDashboardPages />}
              />

              <Route
                path="/Create-Complaint"
                element={<AddCompalnePage />}
              />
              <Route
                path="/update-Complaint/:id"
                element={<AddCompalnePage />}
              />
              <Route
                path="/list-Complaint"
                element={<MainListComplane />}
              />


              {/* --------------Colleges Bazzar path Routes----------------------- */}
              <Route
                path="/list-set-Attributes"
                element={<SetGroupAttributesPages />}
              />
              <Route
                path="/cities-master"
                element={<Cities />}
              />
              <Route
                path="/add-cities"
                element={<CityForm />}
              />
              <Route
                path="/update-city/:id"
                element={<CityForm />}
              />
              <Route
                path="/college_types"
                element={<CollegetypesPage />}
              />
              <Route
                path="/create-colleges"
                element={<CollegetypeForm />}
              />
              <Route
                path="/update-collage-type/:id"
                element={<CollegetypeForm />}
              />
              <Route
                path="/affilated-by"
                element={<AffilatedBy />}
              />
              <Route
                path="/company-master"
                element={<CompanyMasters />}
              />
              <Route
                path="/update-company-master/:id"
                element={<CompanyFormMaster  />}
              />
              <Route
                path="/create_company-master"
                element={<CompanyFormMaster />}
              />
              <Route
                path="/company-type-master"
                element={<CompanyTypeMasters />}
              />
              <Route
                path="/create_company-type-master"
                element={<CompanyTypeMasterForm />}
              />
              <Route
                path="/update_company-type-master/:id"
                element={<CompanyTypeMasterForm />}
              />
              <Route
                path="/create-affilated-by"
                element={<AffilatedTypesForm />}
              />
              <Route
                path="/update-affilated-by/:id"
                element={<AffilatedTypesForm />}
              />
              <Route
                path="/credit-cards"
                element={<CreditCard />}
              />
              <Route
                path="/create-credit-card"
                element={<CreditCardMasterForm />}
              />
              <Route
                path="/update-credit-card/:id"
                element={<CreditCardMasterForm />}
              />
              <Route
                path="/facilities"
                element={<Facilities />}
              />
              <Route
                path="/create-facilities"
                element={<FacilitiesMasterForm />}
              />
              <Route
                path="/update-facilities/:id"
                element={<FacilitiesMasterForm />}
              />


              <Route
                path="/approval"
                element={<ApprovalMaster />}
              />
              <Route
                path="/create-approval"
                element={<ApprovalMasterForm />}
              />
              <Route
                path="/update-approval/:id"
                element={<ApprovalMasterForm />}
              />
              <Route
                path="/lead-status"
                element={<LeadStatusMaster />}
              />
              <Route
                path="/create-lead-status"
                element={<LeadStatusForm />}
              />
              <Route
                path="/update-lead-status/:id"
                element={<LeadStatusForm />}
              />
              <Route
                path="/lead-sub-status"
                element={<LeadSubStatusMaster />}
              />
              <Route
                path="/create-lead-sub-status"
                element={<LeadSubStatusForm />}
              />
              <Route
                path="/update-lead-sub-status/:id"
                element={<LeadSubStatusForm />}
              />
              <Route
                path="/lead-source"
                element={<LeadSourceMasterPage />}
              />
              <Route
                path="/create-lead-source"
                element={<LeadSourceMasterForm />}
              />
              <Route
                path="/update-lead-source/:id"
                element={<LeadSourceMasterForm />}
              />
              <Route
                path="/list-colleges"
                element={<CollagesData />}
              />
              <Route
                path="/add-colleges"
                element={<CollagesFormData />}
              />
              <Route
                path="/update-college/:id"
                element={<CollagesFormData />}
              />
              <Route
                path="/gallery"
                element={<GalleryDatas />}
              />
              <Route
                path="/create-gallery"
                element={<PhotoGalleryMasterForm />}
              />
              <Route
                path="/update-gallery/:id"
                element={<PhotoGalleryMasterForm />}
              />

              {/* afterdelete Routes  */}
              <Route
                path="disputes/welcome"
                element={<DmtDisputesPage />}
              />
              <Route
                path="dmt-status/welcome"
                element={<DmtStatusPage />}
              />
              <Route
                path="priority-master/welcome"
                element={<PriorityPages />}
              />
              <Route
                path="add-priority-master/welcome"
                element={<PriorityMasterForm />}
              />
              <Route
                path="update-priority-master/:id/welcome"
                element={<PriorityMasterForm />}
              />
              <Route
                path="add-dmt-status/welcome"
                element={<DmtStatusForm />}
              />
              <Route
                path="update-dmt-status/welcome/:id"
                element={<DmtStatusForm />}
              />
              <Route
                path="move-member"
                element={<MoveMember />}
              />
              <Route
                path="upgrade-member"
                element={<UpgradeMember />}
              />
              {/* -------------------------------------- */}

              <Route
                path="course-degree-list"
                element={<Coursedegree />}
              />
              <Route
                path="add-course-degree-type"
                element={<CourceDegreeTypeForm />}
              />
              <Route
                path="update-course-degree-type/:id"
                element={<CourceDegreeTypeForm />}
              />
              <Route
                path="mail-settings"
                element={<EmailSettings />}
              />
              <Route
                path="create-camping-mess"
                element={<CreateCampingMessages />}
              />
              <Route
                path="utility-manager"
                element={<UtilityManager />}
              />
              <Route
                path="messages/manage-reports"
                element={<ManageReports />}
              />
              {/* mustafa Routes -------------------- */}
              <Route path="number-list" element={<ListnumberWhatsaap />} />
              <Route path='add-numbers' element={<AddNumber />} />
              <Route path='team-inbox' element={<SharedTeamWhatsapp name="Mustafa Ashraf" message="Hello" />} />
              <Route path='agent_List' element={<AgentList />} />
              <Route path='create-agent' element={<CreateAgent />} />
              <Route path='chat' element={<SharedTeamWhatsapp name="Anshika Kumari" message="Hello" />} />
              {/* -----------------junaid"s Route Start--------- */}
              <Route path="add-testimonial" element={<CreateTestimonial />} />
              <Route path="edit-testimonial/:id" element={<CreateTestimonial />} />
              <Route path="list-testimonial" element={<Testimoniallist />} />

              <Route path="add-vedio" element={<CreateVedio />} />
              <Route path="edit-vedio/:id" element={<CreateVedio />} />
              <Route path="vedio-master" element={<VedioList />} />

              <Route path="add-blog-category" element={<BLogCategoryAdd />} />
              <Route path="edit-blog-category/:id" element={<BLogCategoryAdd />} />
              <Route path="blog-category" element={<BlogCategoryList />} />

              <Route path="add-blog" element={<BLogAdd />} />
              <Route path="edit-blog/:id" element={<BLogAdd />} />
              <Route path="blog-list" element={<BlogList />} />

              <Route path="add-partner" element={<PartnerAdd />} />
              <Route path="edit-partner/:id" element={<PartnerAdd />} />
              <Route path="partner-list" element={<PartnerList />} />

              <Route path="about-us-master" element={<AboutUs />} />
              <Route path="contact-us-master" element={<ContactUs />} />
              <Route path="privacy-policy-master" element={<PrivacyAndPolicy />} />

              <Route path="return-policy-master" element={<ReturnPolicy />} />
              <Route path="terms-condition-master" element={<TermsCondition />} />

              <Route path="add-faq" element={<FAQAdd />} />
              <Route path="edit-faq/:id" element={<FAQAdd />} />
              <Route path="faq-master" element={<FaqList />} />


              <Route path="whatsaap-master" element={<WhatsaapMaster />} />

              <Route path="utility-master" element={<WhatsAppManager />}>
                <Route path="" element={<ListUtility />} />
                <Route path="add-wa-templates" element={<NewTemplateForm />} />
                <Route path="optin-management" element={<OptinManageMent />} />
                <Route path="whatsapp-blocklist" element={<WaBlockNumber />} />
              </Route>


              <Route path="wa-report-download" element={<WhatsAppReports />} />
              <Route path="add-template-type" element={<TemplateTypeAdd />} />
              <Route path="edit-template-type/:id" element={<TemplateTypeAdd />} />
              <Route path="template-type" element={<TableTemplate />} />

              <Route path="add-template-category" element={<TemplateCategoryAdd />} />
              <Route path="edit-template-category/:id" element={<TemplateCategoryAdd />} />
              <Route path="template-category" element={<TemplateCategoryList />} />

              <Route path="add-flow-builder" element={<FlowBuilderAdd />} />
              <Route path="edit-flow-builder/:id" element={<FlowBuilderAdd />} />
              <Route path="flow-builder" element={<FlowBuilder />} />

              <Route path="/admin/create-lead" element={<CreateLead />} />
              <Route path="Create-Call" element={<CreateCall />} />
              <Route path="List-Call" element={<CallList />} />
              <Route path="Create-Enquiry" element={<CreateEnquiry />} />
              <Route path="List-Enquiry" element={<EnquiryList />} />


              <Route path="add-lead_Type" element={<LeadTypeAdd />} />
              <Route path="edit-lead_Type/:id" element={<LeadTypeAdd />} />
              <Route path="lead_Type" element={<LeadTypeList />} />
              {/* -----------------junaid"s Route Start End--------- */}

              <Route path="flight-booking-txn-list" element={<FlightRequestPages />} />
              <Route path="flight-amendments-list" element={<FlightAmbd />} />
              <Route path="flight-refunds-list" element={<FlightRefunds />} />
              <Route path="flight-Cancellation-request" element={<FlightCancel />} />
              <Route path="flight-booking-calendar" element={<FlightBookingCalender />} />
              <Route path="hotel-amendments-list" element={<HoteltAmbd />} />
              <Route path="hotel-booking-list" element={<HotelBooking />} />
              <Route path="my-booking-hotel-calender" element={<HotelBCalender />} />
              <Route path="hotel-cancellations-request" element={<HotelCancel />} />
              <Route path="hotel-refunds-list" element={<HotelRefunds />} />
              <Route path="bus-markup" element={<BusMarkup />} />
              <Route path="bus-amendments" element={<BusAmendments />} />
              <Route path="bus-booking-list" element={<BusBooking />} />
              <Route path="bus-cancellation-request" element={<BusCancel />} />
              <Route path="bus-refund" element={<BusRefunds/>} />
              <Route path="bus-group-request" element={<BusGroupRequest/>} />
              <Route path="bus-discount" element={<BusDiscount/>} />
              <Route path="bus-upload" element={<BusUpload/>} />
              <Route path="visa-markup" element={<VisaMarkup/>} />
              <Route path="visa-discount" element={<VisaDiscount/>} />
              <Route path="Visa-refunds-list" element={<VisaList/>} />
              <Route path="visa-amendments-list" element={<VisaAmendmentsList/>} />
              <Route path="visa-booking-list" element={<VisaBooking/>} />
              <Route path="visa-setting-list" element={<VisaSetings/>} />



              {/* {/* -----------------Mustaf Goatx Route"s Route Start --------- */}
              {/* <Route path="/hotel/my-bookings" element={<ViaggioHotelBookingListPage />} />
              <Route path="/hotel/group-requests" element={<HotelGroupRequestListPage />} />
              <Route path="/hotel/my-booking-calender" element={<MyBookingCalenderListPage />} />
              <Route path="/hotel/my-amendments" element={<MyAmendmentsListPage />} />
              <Route path="/hotel/hotel-cancellations" element={<MyCancellationPage />} />
              <Route path="/hotel/hotel-refunds" element={<MyRefundsPage />} />
              <Route path="account_Ledger" element={<AccountLadgerPage />} />
              <Route path="recharge-history" element={<RechargeHistoryPagee />} />

              <Route path="details-recharge-history" element={<DetailsHistory />} />
              <Route path="deposit-history" element={<DepositHistoryPage />} />
              <Route path="details-deposit-history" element={<DepositHistoryDetails />} />
              <Route path="flight-credit-notes" element={<FlightCreditNotePage />} />  */}
              {/* -----------------Mustaf Goatx Route"s Route Start --------- */}

              {/* Junaid Route start */}

              <Route path="Deposit-Request" element={<AccountManagement />} />
              <Route path="distributor-deposite-request" element={<DistributorRequest />} />
              <Route path="/flight-booking-txn-list/payment-remark" element={<RemarkPayment />} />
              <Route path="/viewInvoice" element={<RemarkPayment />} />
              <Route path="/flight-booking-txn-list/payment-remark/viewInvoice" element={<ViewInvoice />} />

              <Route path="*" element={<PageNotFound />} />



            </Route>
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
