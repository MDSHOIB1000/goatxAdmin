import { FaBookReader, FaCcMastercard, FaFileContract, FaFileMedical, FaIdCard, FaUserFriends, FaUsers } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io5";
import { MdDashboard, MdWeb, MdDiscFull, MdPayment } from "react-icons/md";
import { BiSolidReport } from "react-icons/bi";
import { GiTicket } from "react-icons/gi";
import { SiConvertio, SiQzone } from "react-icons/si";
import { IoIosPeople } from "react-icons/io";
import { FcCustomerSupport } from "react-icons/fc";
import { PiScrollFill } from "react-icons/pi";
import { FaAddressCard } from "react-icons/fa6";
import { useEffect } from "react";
import { getLength } from "../../../api/login/Login";
import { CgAttribution } from "react-icons/cg";


/* export const getN = (count)=>{
  count?.user.find((cItm)=>{
    ret_Data(cItm);
  })
} */

export const navigationData = (count) => {
  const membersTypes = [
  ]
  count?.user?.forEach(element => {
    membersTypes.push({
      uniqueId: element._id,
      id: element._id,
      title: element?.memeberType + `(${element?.count})`,
      path: `member-list/${element._id}/${element.memeberType}`,
    },)
  });
  membersTypes.push({
    uniqueId: "submenu_2_3",
    id: "3",
    title: "Suspended User",
    path: "suspended-users",
  },
  )
  /* membersTypes.push({
    uniqueId: "submenu_2_4",
    id: "4",
    title: "White List User",
    path: "suspended-users",
  },
  ) */
  /*  membersTypes.push({
     uniqueId: "submenu_2_4",
     id: "4",
     title: "Not Working User",
     path: "not-working-users",
   },
   ) */
  return [
    {
      uniqueId: "menu_2",
      id: "2",
      title: "Members",
      icon: <FaUserFriends />,
      subMenus: membersTypes,
    },
    /* {
      uniqueId: "menu_3",
      id: "3",
      title: "Reports",
      icon: <BiSolidReport />,
      subMenus: [
        {
          uniqueId: "submenu_3_1",
          id: "1",
          title: "All Transaction Report",
          path: "all-transactions-report",
        },
        {
          uniqueId: "submenu_3_2",
          id: "2",
          title: "Pancard Report",
          path: "pancard-report",
        },
        {
          uniqueId: "submenu_3_3",
          id: "3",
          title: "Upi Transfer Report",
          path: "pending-transaction-report",
        },
        {
          uniqueId: "submenu_3_4",
          id: "4",
          title: "Pending Transaction",
          path: "pending-transaction-report",
        },
        {
          uniqueId: "submenu_3_5",
          id: "5",
          title: "Operator Wise Sale",
          path: "operator-wise-sale",
        },
        {
          uniqueId: "subsubmenu_3_6",
          id: "1",
          title: "Debit Report",
          path: "debit-report",
        },
        {
          uniqueId: "subsubmenu_3_7",
          id: "2",
          title: "Credit Report",
          path: "credit-report",
        },
        // ------------------------comment start-----------------
        {
          uniqueId: "submenu_3_6",
          id: "6",
          title: "Ledger Report",
          path: "ledger-report",
          subSubmenus: [
            {
              uniqueId: "subsubmenu_3_6_1",
              id: "1",
              title: "Debit Report",
              path: "debit-report",
            },
            {
              uniqueId: "subsubmenu_3_6_2",
              id: "2",
              title: "Credit Report",
              path: "credit-report",
            },
          ],
        },
        // ------------------------comment end-----------------

      ],
    }, */
    /* {
      uniqueId: "menu_15",
      id: "3",
      title: "Sales Reports",
      icon: <FaFileContract />,
      subMenus: [
        {
          uniqueId: "submenu_15_1",
          id: "1",
          title: "Summary Report",
          path: "summary-report",
        },
        {
          uniqueId: "submenu_15_2",
          id: "2",
          title: "Performance Report",
          path: "performance-report",
        },
      ],
    }, */
    // {
    //   uniqueId: "menu_15",
    //   id: "15",
    //   title: "Commissions & Charges",
    //   icon: <SiConvertio />,
    //   subMenus: [
    //     // {
    //     //   uniqueId: "submenu_15_1",
    //     //   id: "1",
    //     //   title: "DMT Commision",
    //     //   path: "dmt-commision",
    //     // },
    //     {
    //       uniqueId: "submenu_15_2",
    //       id: "2",
    //       title: "DMT/ AEPS Commission",
    //       path: "dmt-commision-scheme",
    //     },
    //     {
    //       uniqueId: "submenu_15_22",
    //       id: "22",
    //       title: " Commision Scheme",
    //       path: "dmt-commision-new",
    //     },
    //     // {
    //     //   uniqueId: "submenu_15_2w22",
    //     //   id: "2232",
    //     //   title: "Commsion Scheme Structure List",
    //     //   path: "dmt-commision-structure",
    //     // },
    //     {
    //       uniqueId: "submenu_15_2w2",
    //       id: "223",
    //       title: "BBPS Commision Scheme",
    //       path: "dmt-commision",
    //     },

    //     /* {
    //       uniqueId: "submenu_15_3",
    //       id: "3",
    //       title: "All Beneficiaries List",
    //       path: "all-beneficiaries",
    //     }, */
    //     // {
    //     //   uniqueId: "submenu_15_4",
    //     //   id: "4",
    //     //   title: "Disputes Reasons",
    //     //   path: "reasons-data",
    //     // },
    //     // {
    //     //   uniqueId: "submenu_15_8",
    //     //   id: "8",
    //     //   title: "Type Reasons",
    //     //   path: "type-reason-data",
    //     // },

    //     // {
    //     //   uniqueId: "submenu_15_6",
    //     //   id: "6",
    //     //   title: "Disputes Status",
    //     //   path: "dmt-status/welcome",
    //     // },
    //     // {
    //     //   uniqueId: "submenu_15_5",
    //     //   id: "5",
    //     //   title: "Disputes",
    //     //   path: "disputes/welcome",
    //     // },
    //     // {
    //     //   uniqueId: "submenu_15_7",
    //     //   id: "7",
    //     //   title: "Priority Master",
    //     //   path: "priority-master/welcome",
    //     // },
    //   ],
    // },
    // {
    //   uniqueId: "menu_16",
    //   id: "15",
    //   title: "AEPS",
    //   icon: <FaIdCard />,
    //   subMenus: [
    //     {
    //       uniqueId: "submenu_16_1",
    //       id: "1",
    //       title: "AEPS [TXN]",
    //       path: "aeps-transactions",
    //     },
    //     {
    //       uniqueId: "submenu_16_2",
    //       id: "2",
    //       title: "Aadhar Pay [TXN]",
    //       path: "aadharpay-transactions",
    //     },
    //     {
    //       uniqueId: "submenu_16_3",
    //       id: "3",
    //       title: "Quick Dhan [TXN]",
    //       path: "quick-dhan-transactions",
    //     },
    //     // {
    //     //   uniqueId: "submenu_16_4",
    //     //   id: "4",
    //     //   title: "Quick Dhan[TXN]",
    //     //   path: "quick-dhan-transactions",
    //     // },
    //   ],
    // },

    // {
    //   uniqueId: "menu_4",
    //   id: "4",
    //   title: "Payment",
    //   icon: <MdPayment />,
    //   subMenus: [
    //     /* {
    //       uniqueId: "submenu_4_1",
    //       id: "1",
    //       title: "Balance Transfers ",
    //       path: "balance-trasnfer",
    //     },
    //     {
    //       uniqueId: "submenu_4_2",
    //       id: "2",
    //       title: "Balance Return Request   ",
    //       path: "balance-return-request",
    //     }, */
    //     {
    //       uniqueId: "submenu_4_3",
    //       id: "3",
    //       title: "Payment Request View ",
    //       path: "payment-request-view",
    //     },
    //     /* {
    //       uniqueId: "submenu_4_4",
    //       id: "4",
    //       title: "Payment Request ",
    //       path: "payment-request",
    //     }, */
    //     {
    //       uniqueId: "submenu_4_5",
    //       id: "5",
    //       title: "Virtual Wallet ",
    //       path: "wallet/virtual-wallet",
    //     },
    //   ],
    // },
    // {
    //   uniqueId: "menu_15_1_1",
    //   id: "3_1",
    //   title: "Reports",
    //   icon: <FaFileMedical />,
    //   subMenus: [

    //     {
    //       uniqueId: "submenu_15_2_8ss3",
    //       id: "63sas",
    //       title: "All Members  Report",
    //       path: "all-members-reports",
    //     },
    //     {
    //       uniqueId: "submenu_15_2_9ss4",
    //       id: "64sas",
    //       title: "Members Wallet Balance Report",
    //       path: "members-wallet-balance-reports",
    //     },
    //     {
    //       uniqueId: "submenu_15_2_10sas5",
    //       id: "65ssas",
    //       title: "AEPS Balance Enquiry Report",
    //       path: "aeps-balance-enquiry-reports",
    //     },
    //     {
    //       uniqueId: "submenu_15_2_10svs5",
    //       id: "65svas",
    //       title: "AEPS Cash Deposit  Report",
    //       path: "aeps-cash-deposit-reports",
    //     },
    //     {
    //       uniqueId: "submenu_15_2_10afss5",
    //       id: "65sasas",
    //       title: "AEPS Bank Withdraw  Report",
    //       path: "aeps-bank-withdraw-reports",
    //     },
    //     {
    //       uniqueId: "submenu_15_2_11fes6",
    //       id: "66saews",
    //       title: "AEPS Mini Statement",
    //       path: "aeps-mini-statement",
    //     },
    //     {
    //       uniqueId: "submenu_15_2_11sas6",
    //       id: "66sass",
    //       title: "Aadhar Pay Report",
    //       path: "aadhar-pay-report",
    //     },

    //     {
    //       uniqueId: "submenu_15_2_11sas7",
    //       id: "67sasb",
    //       title: "Flight Booking Report",
    //       path: "flight-booking-report",
    //     },
    //     {
    //       uniqueId: "submenu_15_2_11sas8",
    //       id: "68sasc",
    //       title: "Bus Booking Report",
    //       path: "bus-booking-report",
    //     },
    //     {
    //       uniqueId: "submenu_15_2_11sas9",
    //       id: "69sasd",
    //       title: "Hotel Booking Report",
    //       path: "hotel-booking-report",
    //     },



    //     /* {
    //       uniqueId: "submenu_15_1_2",
    //       id: "1",
    //       title: "Recharge Report",
    //       path: "additional-reports/recharge-reports",
    //     },
    //     {
    //       uniqueId: "submenu_15_2_3",
    //       id: "2",
    //       title: "Search Recharge Transactions",
    //       path: "additional-reports/search-trans-reports",
    //     },
    //     {
    //       uniqueId: "submenu_15_2_4",
    //       id: "3",
    //       title: "Indo Nepal Money Transfer",
    //       path: "additional-reports/indo-nepal-money-transfer",
    //     },
    //     {
    //       uniqueId: "submenu_15_2_5",
    //       id: "4",
    //       title: "Fast Tag Reports",
    //       path: "additional-reports/fast-tag-reports",
    //     },
    //     {
    //       uniqueId: "submenu_15_2_6",
    //       id: "5",
    //       title: "DMT Report",
    //       path: "additional-reports/dmt-reports",
    //     }, */

    //     {
    //       uniqueId: "submenu_15_2_7ss2",
    //       id: "62sas",
    //       title: "Payout Report",
    //       path: "payout-reports",
    //     },
    //     {
    //       uniqueId: "submenu_15_2_7ass2",
    //       id: "62sass",
    //       title: "Credit Card Bill payment report",
    //       path: "credit-card-bill-payment-report/6655db77d0ff3e6928e2c280",
    //     },

    //     {
    //       uniqueId: "submenu_15_2_72",
    //       id: "62",
    //       title: "AEPS  Cash Report",
    //       path: "aeps-cash-reports",
    //     },
    //     {
    //       uniqueId: "submenu_15_2_7s2",
    //       id: "62s",
    //       title: "AEPS  Payout Report",
    //       path: "aeps-payout-reports",
    //     },
    //     {
    //       uniqueId: "submenu_15_2_7",
    //       id: "6",
    //       title: "DMT Reports Search",
    //       path: "additional-reports/dmt-reports-search",
    //     },




    //     // New Reports


    //     {
    //       uniqueId: "submenu_15_2_72_tr",
    //       id: "622_tr",
    //       title: "Piped gas Transaction Report",
    //       path: "piped-gas/6655db77d0ff3e6928e2c277",
    //     },
    //     {
    //       uniqueId: "submenu_15_2_7221_tr",
    //       id: "6221_tr",
    //       title: "Water Supplier Transaction Report",
    //       path: "water/6655db77d0ff3e6928e2c285",
    //     },
    //     {
    //       uniqueId: "submenu_15_2_s72_tr",
    //       id: "62as2_tr",
    //       title: "Electricity Transaction Report",
    //       path: "electricity/6655db77d0ff3e6928e2c27d",
    //     },
    //     {
    //       uniqueId: "submenu_15_2_s73",
    //       id: "62as3",
    //       title: "Broadband Transaction Report",
    //       path: "broadband/6655db77d0ff3e6928e2c276",
    //     },
    //     {
    //       uniqueId: "submenu_15_2_s74",
    //       id: "62as4",
    //       title: "Cable TV Transaction Report",
    //       path: "cable-tv/6655db77d0ff3e6928e2c27c",
    //     },
    //     {
    //       uniqueId: "submenu_15_2_s75",
    //       id: "62as5",
    //       title: "Digital Voucher Transaction Report",
    //       path: "digital-voucher/6655db77d0ff3e6928e2c276",
    //     },
    //     {
    //       uniqueId: "submenu_15_2_s76",
    //       id: "62as6",
    //       title: "Fastag Transaction Report",
    //       path: "fastag/6655db77d0ff3e6928e2c27b",
    //     },
    //     {
    //       uniqueId: "submenu_15_2_s77",
    //       id: "62as7",
    //       title: "Insurance Transaction Report",
    //       path: "insurance/6655db77d0ff3e6928e2c278",
    //     },
    //     {
    //       uniqueId: "submenu_15_2_s78",
    //       id: "62as8",
    //       title: "Loan Repayment Transaction Report",
    //       path: "loan-repayment/6655db77d0ff3e6928e2c271",
    //     },
    //     {
    //       uniqueId: "submenu_15_2_s79",
    //       id: "62as9",
    //       title: "Municipal Taxes Transaction Report",
    //       path: "municipal-taxes/6655db77d0ff3e6928e2c274",
    //     },
    //     {
    //       uniqueId: "submenu_15_2_s80",
    //       id: "62as10",
    //       title: "Mobile Prepaid Transaction Report",
    //       path: "molbile-prepaid/6655db77d0ff3e6928e2c284",
    //     },
    //     {
    //       uniqueId: "submenu_15_2_s87",
    //       id: "62as17",
    //       title: "LPG Booking Transaction Report",
    //       path: "lpg-booking/6655db77d0ff3e6928e2c281",
    //     },
    //     // {
    //     //   uniqueId: "submenu_15_2_s81",
    //     //   id: "62as11",
    //     //   title: "BBPS Transaction Transaction Report",
    //     //   path: "bbps-transaction",
    //     // },
    //     {
    //       uniqueId: "submenu_15_2_s82",
    //       id: "62as12",
    //       title: "Mobile Postpaid Report",
    //       path: "mobile-postpaid/6655db77d0ff3e6928e2c27f",
    //     },
    //     // {
    //     //   uniqueId: "submenu_15_2_s83",
    //     //   id: "62as13",
    //     //   title: "Datacard Prepaid Transaction Report",
    //     //   path: "datacard-prepaid",
    //     // },
    //     {
    //       uniqueId: "submenu_15_2_s84",
    //       id: "62as14",
    //       title: "DTH Transaction Report",
    //       path: "dth/6655db77d0ff3e6928e2c279",
    //     },
    //     // {
    //     //   uniqueId: "submenu_15_2_s85",
    //     //   id: "62as15",
    //     //   title: "EMI Transaction Report",
    //     //   path: "emi",
    //     // },
    //     {
    //       uniqueId: "submenu_15_2_s86",
    //       id: "62as16",
    //       title: "Landline Transaction Report",
    //       path: "landline/6655db77d0ff3e6928e2c27e",
    //     },

    //     // {
    //     //   uniqueId: "submenu_15_2_s88",
    //     //   id: "62as18",
    //     //   title: "Postpaid Transaction Report",
    //     //   path: "postpaid",
    //     // },
    //     // {
    //     //   uniqueId: "submenu_15_2_s89",
    //     //   id: "62as19",
    //     //   title: "Traffic Challan Transaction Report",
    //     //   path: "traffic-challan",
    //     // },
    //     // {
    //     //   uniqueId: "submenu_15_2_s90",
    //     //   id: "62as20",
    //     //   title: "Recharge Transaction Transaction Report",
    //     //   path: "recharge-transaction",
    //     // },
    //     // {
    //     //   uniqueId: "submenu_15_2_s91",
    //     //   id: "62as21",
    //     //   title: "JIO Recharge Transaction Report",
    //     //   path: "jio-recharge-transaction",
    //     // }
    //     /* {
    //       uniqueId: "submenu_15_2_8",
    //       id: "7",
    //       title: "DMT KYC Report ",
    //       path: "additional-reports/dmt-kyc-reports",
    //     },
    //     {
    //       uniqueId: "submenu_15_2_9",
    //       id: "8",
    //       title: "C C Bill Payment Report ",
    //       path: "additional-reports/credit-card-bill-payment-report",
    //     },
    //     {
    //       uniqueId: "submenu_15_2_10",
    //       id: "9",
    //       title: "AEPS (Xpress) Reports ",
    //       path: "additional-reports/aeps-Xpress-report",
    //     },
    //     {
    //       uniqueId: "submenu_15_2_11",
    //       id: "10",
    //       title: "AEPS (TEZ) Report ",
    //       path: "additional-reports/aeps-tez-report",
    //     },
    //     {
    //       uniqueId: "submenu_15_2_12",
    //       id: "11",
    //       title: "AEPS (ICICI) Report ",
    //       path: "additional-reports/aeps-icici-report",
    //     },
    //     {
    //       uniqueId: "submenu_15_2_13",
    //       id: "12",
    //       title: "Aadhar Pay Reports ",
    //       path: "additional-reports/aadhaarpay_pay_report",
    //     },
    //     {
    //       uniqueId: "submenu_15_2_14",
    //       id: "13",
    //       title: "Insurence Dekho Report ",
    //       path: "additional-reports/insurancedekho_report",
    //     },
    //     {
    //       uniqueId: "submenu_15_2_15",
    //       id: "14",
    //       title: "Bill Payment History ",
    //       path: "additional-reports/bill_report_history",
    //     },
    //     {
    //       uniqueId: "submenu_15_2_16",
    //       id: "15",
    //       title: "Account Reports ",
    //       path: "additional-reports/accountreport",
    //     },
    //     {
    //       uniqueId: "submenu_15_2_17",
    //       id: "16",
    //       title: "Balance Topup History",
    //       path: "additional-reports/topuphistory",
    //     },
    //     {
    //       uniqueId: "submenu_15_2_18",
    //       id: "17",
    //       title: "Bank List",
    //       path: "additional-reports/list_bank",
    //     },
    //     {
    //       uniqueId: "submenu_15_2_19",
    //       id: "18",
    //       title: "Aeps & Epos Payout Report",
    //       path: "additional-reports/aeps_payout_report",
    //     },
    //     {
    //       uniqueId: "submenu_15_2_20",
    //       id: "19",
    //       title: "CMS Bill Report",
    //       path: "additional-reports/cms_bill_report",
    //     },
    //     {
    //       uniqueId: "submenu_15_2_21",
    //       id: "20",
    //       title: "Postpaid Bill",
    //       path: "additional-reports/postpaid_bill_transaction",
    //     },
    //     {
    //       uniqueId: "submenu_15_2_22",
    //       id: "21",
    //       title: "Turbo E-loan Request",
    //       path: "additional-reports/Turbo_payment_request",
    //     },
    //     {
    //       uniqueId: "submenu_15_2_23",
    //       id: "23",
    //       title: "Payment Gateway Report          ",
    //       path: "additional-reports/Pg_report_rz",
    //     },
    //     {
    //       uniqueId: "submenu_15_2_24",
    //       id: "23",
    //       title: "Rupay Card Report ",
    //       path: "additional-reports/ruapay_gift_cards_report",
    //     }, */
    //   ],
    // },
    /* {
     uniqueId: "menu_5",
     id: "5",
     title: "Dispute",
     icon: <MdDiscFull />,
     subMenus: [
       {
         uniqueId: "submenu_5_1",
         id: "1",
         title: "Pending Dispute",
         path: "pending-dispute",
       },
       {
         uniqueId: "submenu_5_2",
         id: "2",
         title: "Solve Dispute",
         path: "solve-dispute",
       },
     ],
   },
   {
     uniqueId: "menu_11",
     id: "11",
     title: "User Income",
     icon: <FaUsers />,
     subMenus: [
       {
         uniqueId: "submenu_11_1",
         id: "1",
         title: "Distributor Income",
         path: "user-income/distributor",
       },
       {
         uniqueId: "submenu_11_2",
         id: "2",
         title: "Retailer Income",
         path: "user-income/retailer",
       },
       {
         uniqueId: "submenu_11_3",
         id: "2",
         title: "My Income",
         path: "income/my-income",
       },
     ],
   },*/
    {
      uniqueId: "menu_6",
      id: "6",
      title: "Masters",
      icon: <FaCcMastercard />,
      subMenus: [
        {
          uniqueId: "submenu_6_1",
          id: "1",
          title: "Bank Master",
          path: "bank-master",
        },
        {
          uniqueId: "submenu_6_2",
          id: "2",
          title: "Role Master",
          path: "role-master",
        },
        {
          uniqueId: "submenu_6_s4",
          id: "4s",
          title: "Course Master",
          path: "course-master",
        },
        {
          uniqueId: "submenu_6_5",
          id: "5",
          title: "Stream Master",
          path: "stream-master",
        },
        {
          uniqueId: "submenu_6_6",
          id: "6",
          title: "Package Master",
          path: "package-master",
        },
        {
          uniqueId: "submenu_6_7",
          id: "7",
          title: "College Types",
          path: "college_types",
        },
        {
          uniqueId: "submenu_6_8",
          id: "8",
          title: "Affiliated",
          path: "affilated-by",
        },
        {
          uniqueId: "submenu_6_12",
          id: "12",
          title: "Credit Cards",
          path: "credit-cards",
        },
        {
          uniqueId: "submenu_6_13",
          id: "13",
          title: "Approval",
          path: "approval",
        },
        {
          uniqueId: "submenu_6_9",
          id: "9",
          title: "Lead Status",
          path: "lead-status",
        },
        {
          uniqueId: "submenu_6_10",
          id: "10",
          title: "Lead Sub Status",
          path: "lead-sub-status",
        },
        {
          uniqueId: "submenu_6_11",
          id: "11",
          title: "Lead Source",
          path: "lead-source",
        },
        // {
        //   uniqueId: "submenu_6_22",
        //   id: "223",
        //   title: "Department  Master",
        //   path: "department-master",
        // },


        {
          uniqueId: "submenu_15_52ds",
          id: "99sw",
          title: "Package Sales Report ",
          path: "Package-Sales-Report",
        },
        /* {
          uniqueId: "submenu_6_3",
          id: "3",
          title: "Status Master",
          path: "status-master",
        },
        {
          uniqueId: "submenu_6_4",
          id: "4",
          title: "Services Master",
          path: "service-master",
        },
        {
          uniqueId: "submenu_6_5",
          id: "5",
          title: "Services Category Master",
          path: "service-category",
        },
        {
          uniqueId: "submenu_6_6",
          id: "6",
          title: "Payment methods",
          path: "payment-method",
        },
        {
          uniqueId: "submenu_6_7",
          id: "7",
          title: "Payout Beneficiary ",
          path: "payout-beneficiary-master",
        },
        {
          uniqueId: "submenu_6_8",
          id: "8",
          title: "Agent Onboarding",
          path: "agent-onboarding-list",
        },
        {
          uniqueId: "submenu_6_9",
          id: "9",
          title: "Agent Onboarding List (EKO)",
          path: "agent-onboarding-list",
        },
        {
          uniqueId: "submenu_6_10",
          id: "10",
          title: "Contact Enquiry",
          path: "contact-enquiry",
        },
        {
          uniqueId: "submenu_6_11",
          id: "11",
          title: "Company Staff Permissions",
          path: "company-staff/welcome",
        },  */

        // --------------------------------
        /* {
          uniqueId: "submenu_6_12",
          id: "12",
          title: "Contact Enquiry",
          path: "page-not-found",
        }, */
        // ---------------------------------------
        /*  {
           uniqueId: "submenu_6_13",
           id: "13",
           title: "Cashfree Gateway master",
           path: "cashfree-gateway-master",
         },
         {
           uniqueId: "submenu_6_14",
           id: "14",
           title: "Broadcast",
           path: "boardcast",
         },,*/
      ]
    },
    {
      uniqueId: "menu_6a",
      id: "6a",
      title: "Colleges",
      icon: <FaCcMastercard />,
      subMenus: [
        {
          uniqueId: "submenu_6_1a",
          id: "1",
          title: "Add Colleges",
          path: "list-colleges",
        },
        
      ]
    },
    /*  {
       uniqueId: "menu_16",
       id: "16",
       title: "Zone Module",
       icon: <SiQzone />,
       subMenus: [
         {
           uniqueId: "submenu_16_22",
           id: "6",
           title: "Zoon & Ares",
           path: "zoon_area",
         },
         {
           uniqueId: "submenu_16_1",
           id: "1",
           title: "Area",
           path: "area",
         },
         {
           uniqueId: "submenu_16_2",
           id: "2",
           title: "Country",
           path: "country-zone",
         },
         {
           uniqueId: "submenu_16_3",
           id: "3",
           title: "State",
           path: "page-not-found",
         },
         {
           uniqueId: "submenu_16_4",
           id: "4",
           title: "District",
           path: "page-not-found",
         },
 
       ],
     },*/
    
    /*{
      uniqueId: "menu_7",
      id: "7",
      title: "APIs Masters",
      icon: <FaBookReader />,
      subMenus: [
        {
          uniqueId: "submenu_7_1",
          id: "1",
          title: "Provider  Master",
          path: "provider",
        },
        {
          uniqueId: "submenu_7_2",
          id: "2",
          title: "API  Master",
          path: "api-master",
        },
        {
          uniqueId: "submenu_7_2",
          id: "3",
          title: "Api Transaction Master",
          path: "api-transaction-master",
        },
        {
          uniqueId: "submenu_7_3",
          id: "4",
          title: "Denomination Wise APIs Master",
          path: "denomination-wise-api",
        },
        {
          uniqueId: "submenu_7_4",
          id: "5",
          title: "State Wise APIs Master     ",
          path: "state-wise-api",
        },
        {
          uniqueId: "submenu_7_5",
          id: "6",
          title: "Backup API Master",
          path: "backup-api-master",
        },
        {
          uniqueId: "submenu_7_6",
          id: "7",
          title: "API Switching ",
          path: "api-switching",
        },
        {
          uniqueId: "submenu_7_7",
          id: "8",
          title: "User Operator Limit",
          path: "user-operator-limit",
        },
        {
          uniqueId: "submenu_7_8",
          id: "9",
          title: "API Vendor Payment",
          path: "vandor/payment/welcome",
        },
        {
          uniqueId: "submenu_7_9",
          id: "10",
          title: "Number Series Master",
          path: "number-series-master",
        },
      ],
    },*/
    /* {
      uniqueId: "menu_12",
      id: "12",
      title: "Customer",
      icon: <FcCustomerSupport />,
      subMenus: [
        {
          uniqueId: "submenu_12_1",
          id: "1",
          title: "User",
          path: "user",
        },
        {
          uniqueId: "submenu_12_2",
          id: "2",
          title: "User Type",
          path: "user-type",
        },
      ],
    }, */


    /* {
       uniqueId: "menu_9",
       id: "9",
       title: "Website Masters",
       icon: <MdWeb />,
       subMenus: [
         {
           uniqueId: "submenu_9_1",
           id: "1",
           title: "Dynamic Page ",
           path: "dynemic-page",
         },
         {
           uniqueId: "submenu_9_2",
           id: "2",
           title: "Front Banners   ",
           path: "front-banner",
         },
         {
           uniqueId: "submenu_9_3",
           id: "3",
           title: "User Panel Slider ",
           path: "user-pannel-slider",
         },
       ],
     },
     {
       uniqueId: "menu_10",
       id: "10",
       title: "WhatsApp",
       icon: <IoLogoWhatsapp />,
       subMenus: [
         {
           uniqueId: "submenu_10_1",
           id: "1",
           title: "Send Role Wise ",
           path: "whatapp/send-role-wise",
         },
       ],
     },
     {
       uniqueId: "menu_13",
       id: "13",
       title: "Staff Module",
       icon: <IoIosPeople />,
       subMenus: [
         {
           uniqueId: "submenu_13_1",
           id: "1",
           title: "Staff",
           path: "satff",
         },
         {
           uniqueId: "submenu_13_2",
           id: "2",
           title: "Staff Type",
           path: "staff-type",
         },
       ],
     },
     {
       uniqueId: "menu_14",
       id: "14",
       title: "Service Permission",
       icon: <IoIosPeople />,
       subMenus: [
         {
           uniqueId: "submenu_14_1",
           id: "1",
           title: "Service Area Permision",
           path: "service-area-permision",
         },
         {
           uniqueId: "submenu_13_2",
           id: "2",
           title: "Service User Permission",
           path: "service-user-permission",
         },
       ],
     },*/
    {
      uniqueId: "menu_14",
      id: "14",
      title: "Help & support",
      icon: <IoIosPeople />,
      subMenus: [
        // {
        //   uniqueId: "submenu_15_52",
        //   id: "99",
        //   title: "Create Ticket",
        //   path: "disputes/create",
        // },
        {
          uniqueId: "submenu_15_5",
          id: "5",
          title: " Ticket List",
          path: "disputes/welcome",
        },
        {
          uniqueId: "submenu_15_6",
          id: "6",
          title: "Status Master",
          path: "dmt-status/welcome",
        },
        {
          uniqueId: "submenu_15_7",
          id: "7",
          title: "Priority Master",
          path: "priority-master/welcome",
        },
        {
          uniqueId: "submenu_6_22",
          id: "223",
          title: "Department  Master",
          path: "department-master",
        },
        {
          uniqueId: "submenu_12s_2",
          id: "2s",
          title: "User Type",
          path: "user-type",
        },
        {
          uniqueId: "submenu_13s_3",
          id: "2s",
          title: "Complainant Dashboard",
          path: "employees-complaints-dashboard",
        },

        {
          uniqueId: "submenu_14s_3",
          id: "2s",
          title: "Create Complainant",
          path: "Create-Complaint",
        },
        {
          uniqueId: "submenu_15s_3",
          id: "2s",
          title: "List Complainant",
          path: "list-Complaint",
        },
        // {
        //   uniqueId: "submenu_15_52ds",
        //   id: "99sw",
        //   title: "Package Sales Report ",
        //   path: "Package-Sales-Report",
        // },
        // {
        //   uniqueId: "submenu_15_4",
        //   id: "4",
        //   title: " Reasons Master",
        //   path: "reasons-data",
        // },




      ],
    },
    /*  {
       uniqueId: "menu_16",
       id: "16",
       title: "Zone Module",
       icon: <SiQzone />,
       subMenus: [
         {
           uniqueId: "submenu_16_22",
           id: "6",
           title: "Zoon & Ares",
           path: "zoon_area",
         },
         {
           uniqueId: "submenu_16_1",
           id: "1",
           title: "Area",
           path: "area",
         },
         {
           uniqueId: "submenu_16_2",
           id: "2",
           title: "Country",
           path: "country-zone",
         },
         {
           uniqueId: "submenu_16_3",
           id: "3",
           title: "State",
           path: "page-not-found",
         },
         {
           uniqueId: "submenu_16_4",
           id: "4",
           title: "District",
           path: "page-not-found",
         },
 
       ],
     },
     {
       uniqueId: "menu_17",
       id: "17",
       title: "Setup & Configurations",
       icon: <SiQzone />,
       subMenus: [
         {
           uniqueId: "submenu_17_1",
           id: "1",
           title: "Country",
           path: "country",
         },
         {
           uniqueId: "submenu_17_2",
           id: "2",
           title: "Language",
           path: "language",
         },
         {
           uniqueId: "submenu_18_3",
           id: "3",
           title: "Currency",
           path: "currency",
         },
         {
           uniqueId: "submenu_19_4",
           id: "4",
           title: "State Master",
           path: "state-master",
         },
       ],
     },
     {
       uniqueId: "menu_7",
       id: "7",
       title: "APIs Masters",
       icon: <FaBookReader />,
       subMenus: [
         {
           uniqueId: "submenu_7_1",
           id: "1",
           title: "Provider  Master",
           path: "provider",
         },
         {
           uniqueId: "submenu_7_2",
           id: "2",
           title: "API  Master",
           path: "api-master",
         },
         {
           uniqueId: "submenu_7_2",
           id: "3",
           title: "Api Transaction Master",
           path: "api-transaction-master",
         },
         {
           uniqueId: "submenu_7_3",
           id: "4",
           title: "Denomination Wise APIs Master",
           path: "denomination-wise-api",
         },
         {
           uniqueId: "submenu_7_4",
           id: "5",
           title: "State Wise APIs Master     ",
           path: "state-wise-api",
         },
         {
           uniqueId: "submenu_7_5",
           id: "6",
           title: "Backup API Master",
           path: "backup-api-master",
         },
         {
           uniqueId: "submenu_7_6",
           id: "7",
           title: "API Switching ",
           path: "api-switching",
         },
         {
           uniqueId: "submenu_7_7",
           id: "8",
           title: "User Operator Limit",
           path: "user-operator-limit",
         },
         {
           uniqueId: "submenu_7_8",
           id: "9",
           title: "API Vendor Payment",
           path: "vandor/payment/welcome",
         },
         {
           uniqueId: "submenu_7_9",
           id: "10",
           title: "Number Series Master",
           path: "number-series-master",
         },
       ],
     },
     {
       uniqueId: "menu_12",
       id: "12",
       title: "Customer",
       icon: <FcCustomerSupport />,
       subMenus: [
         {
           uniqueId: "submenu_12_1",
           id: "1",
           title: "User",
           path: "user",
         },
         {
           uniqueId: "submenu_12_2",
           id: "2",
           title: "User Type",
           path: "user-type",
         },
       ],
     },*/


    /* {
       uniqueId: "menu_9",
       id: "9",
       title: "Website Masters",
       icon: <MdWeb />,
       subMenus: [
         {
           uniqueId: "submenu_9_1",
           id: "1",
           title: "Dynamic Page ",
           path: "dynemic-page",
         },
         {
           uniqueId: "submenu_9_2",
           id: "2",
           title: "Front Banners   ",
           path: "front-banner",
         },
         {
           uniqueId: "submenu_9_3",
           id: "3",
           title: "User Panel Slider ",
           path: "user-pannel-slider",
         },
       ],
     },
     {
       uniqueId: "menu_10",
       id: "10",
       title: "WhatsApp",
       icon: <IoLogoWhatsapp />,
       subMenus: [
         {
           uniqueId: "submenu_10_1",
           id: "1",
           title: "Send Role Wise ",
           path: "whatapp/send-role-wise",
         },
       ],
     },
     {
       uniqueId: "menu_13",
       id: "13",
       title: "Staff Module",
       icon: <IoIosPeople />,
       subMenus: [
         {
           uniqueId: "submenu_13_1",
           id: "1",
           title: "Staff",
           path: "satff",
         },
         {
           uniqueId: "submenu_13_2",
           id: "2",
           title: "Staff Type",
           path: "staff-type",
         },
       ],
     },
     {
       uniqueId: "menu_14",
       id: "14",
       title: "Service Permission",
       icon: <IoIosPeople />,
       subMenus: [
         {
           uniqueId: "submenu_14_1",
           id: "1",
           title: "Service Area Permision",
           path: "service-area-permision",
         },
         {
           uniqueId: "submenu_13_2",
           id: "2",
           title: "Service User Permission",
           path: "service-user-permission",
         },
       ],
     },*/
    {
      uniqueId: "menu_18",
      id: "18",
      title: "Staff Module",
      icon: <PiScrollFill />,
      subMenus: [

        {
          uniqueId: "submenu_18_5",
          id: "5",
          title: " Add  Staff",
          path: "add-staff",
        },
        {
          uniqueId: "submenu_18_6",
          id: "6",
          title: "List  Staff",
          path: "staff-list",
        },
        // {
        //   uniqueId: "submenu_18_7",
        //   id: "7",
        //   title: "Priority Master",
        //   path: "priority-master/welcome",
        // },
      ],
    },
    {
      uniqueId: "menu_19",
      id: "19",
      title: "Staff Address",
      icon: <FaAddressCard />,
      subMenus: [
        {
          uniqueId: "submenu_19_5",
          id: "5",
          title: "Building Master",
          path: "building-master",
        },
        {
          uniqueId: "submenu_19_7",
          id: "5",
          title: "Floor Master",
          path: "floor-master",
        },
        {
          uniqueId: "submenu_19_1",
          id: "5",
          title: "Area Master",
          path: "area-master",
        },
        {
          uniqueId: "submenu_21_1",
          id: "7",
          title: "Ward Master",
          path: "ward-master",
        },
        {
          uniqueId: "submenu_19_6",
          id: "5",
          title: "Block Master",
          path: "block-master",
        },
        {
          uniqueId: "submenu_20_6",
          id: "6",
          title: "Office Master",
          path: "office-master",
        },
        {
          uniqueId: "submenu_20_7",
          id: "7",
          title: "Departments Master",
          path: "departments-master",
        },
        {
          uniqueId: "submenu_20_8",
          id: "8",
          title: "Designation Master",
          path: "designation-master",
        },

      ],
    },
    {
      uniqueId: "menu_20",
      id: "21",
      title: "Role Permission",
      icon: <FaAddressCard />,
      subMenus: [
        {
          uniqueId: "submenu_20_1",
          id: "1",
          title: "Main Module",
          path: "add-main-module",
        },
        {
          uniqueId: "submenu_20_2",
          id: "2",
          title: "List Main Module",
          path: "listMainModule",
        },
        {
          uniqueId: "submenu_21_3",
          id: "3",
          title: "Add Sub Module",
          path: "add-sub-module",
        },
        {
          uniqueId: "submenu_22_4",
          id: "4",
          title: "List Sub Module",
          path: "list-sub-module",
        },
        {
          uniqueId: "submenu_23_5",
          id: "5",
          title: "Add Role",
          path: "add-role",
        },
        {
          uniqueId: "submenu_24_6",
          id: "6",
          title: "List Role",
          path: "list-role",
        },
      ],
    },
    {
      uniqueId: "menu_25",
      id: "24",
      title: "Atrributes",
      icon: <CgAttribution />,
      subMenus: [
        {
          uniqueId: "submenu_25_1",
          id: "1",
          title: "Set Attributes",
          path: "list-set-Attributes",
        },

      ],
    },
    {
      uniqueId: "menu_8",
      id: "8",
      title: "Settings",
      icon: <AiFillSetting />,
      subMenus: [
        /* {
          uniqueId: "submenu_8_1",
          id: "1",
          title: "Company Settings",
          path: "company-setting",
        },
        {
          uniqueId: "submenu_8_2",
          id: "2",
          title: "Site Settings",
          path: "site-setting/welcome",
        }, */
        {
          uniqueId: "submenu_8_21",
          id: "21",
          title: "Charges Settings",
          path: "charges-settings/welcome",
        },
        /* {
          uniqueId: "submenu_8_3",
          id: "3",
          title: "SMS Settings",
          path: "sms-templete/welcome",
        },
        {
          uniqueId: "submenu_8_4",
          id: "4",
          title: "Package  Settings",
          path: "package-settings",
        },
        {
          uniqueId: "submenu_8_5",
          id: "5",
          title: "Bank  Settings",
          path: "bank-settings",
        }, */
        /*  {
           uniqueId: "submenu_8_6",
           id: "6",
           title: "Logo Settings ",
           path: "logo-upload",
         },
         {
           uniqueId: "submenu_8_7",
           id: "7",
           title: "Signature ",
           path: "signature-upload",
         },
         {
           uniqueId: "submenu_8_8",
           id: "8",
           title: "Service Banner Settings",
           path: "service-banner",
         },
         {
           uniqueId: "submenu_8_9",
           id: "9",
           title: "Notifications Settings",
           path: "notification/welcome",
         }, */
        {
          uniqueId: "submenu_8_10",
          id: "10",
          title: "Change Password",
          path: "change-password",
        },
        {
          uniqueId: "submenu_8_11",
          id: "11",
          title: "Change Pin",
          path: "change-pin",
        },
        {
          uniqueId: "submenu_8s_11",
          id: "11d",
          title: "Move Member",
          path: "move-member",
        },
        {
          uniqueId: "submenu_8ss_11",
          id: "11dd",
          title: "Upgrade Member",
          path: "upgrade-member",
        },
      ],
    },


    // {
    //   uniqueId: "menu_17",
    //   id: "16",
    //   title: "Ticket Master",
    //   icon: <GiTicket />,
    //   subMenus: [
    //     {
    //       uniqueId: "submenu_17_1",
    //       id: "1",
    //       title: "Tickets",
    //       path: "tickets/welcome",
    //     },
    //     {
    //       uniqueId: "submenu_17_2",
    //       id: "2",
    //       title: "",
    //       path: "aadharpay-transactions",
    //     },
    //   ],
    // }, 
    
    {
      uniqueId: "menu_17",
      id: "17",
      title: "Setup & Configurations",
      icon: <SiQzone />,
      subMenus: [
        {
          uniqueId: "submenu_17_1",
          id: "1",
          title: "Country",
          path: "country",
        },
        {
          uniqueId: "submenu_17_3",
          id: "3",
          title: "Cities",
          path: "cities-master",
        },
        {
          uniqueId: "submenu_17_2",
          id: "2",
          title: "Language",
          path: "language",
        },
        {
          uniqueId: "submenu_18_3",
          id: "3",
          title: "Currency",
          path: "currency",
        },
        {
          uniqueId: "submenu_19_4",
          id: "4",
          title: "State",
          path: "state-master",
        },
      ],
    },
  ]
}

