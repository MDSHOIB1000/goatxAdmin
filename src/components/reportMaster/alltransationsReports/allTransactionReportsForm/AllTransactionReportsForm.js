import { Formik } from 'formik';
import React from 'react'
import CustomInputField from '../../../../common/CustomInputField';
import CustomDropdown from '../../../../common/CustomDropdown';
const initialValues = { from: "", to: "" }
function AllTransactionReportsForm() {
    const name = "dropdown";
    const placeholder = "Course Name";
    const type = "dropdown";
    const itemList = [
        {
            name: "Abc",
            value: "Abc",
        },
        {
            name: "Abcd",
            value: "Abcd",
        },
        {
            name: "Abce",
            value: "Abce",
        },
        {
            name: "Abcf",
            value: "Abcf",
        },
    ];
    const validate = (values) => {
        let errors = {};

        if (!values.from) {
            errors.from = "First Name is required";
        }

        if (!values.lastName) {
            errors.lastName = "Last Name is required";
        }
        return errors;
    };
    const submitForm = (values) => {
        console.log(values);
    };

    const changeHandle = (selectedData) => {
        // TODO
    };

    return (
        <>

            <div className="row m-4">
                <div className="col-xl-12">
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="table-responsive active-projects style-1">
                                <div className="tbl-caption tbl-caption-2">
                                    <h4 className="heading mb-0"><b>All Transaction Report - </b></h4>
                                </div>
                                <Formik
                                    initialValues={initialValues}
                                    validate={validate}
                                    onSubmit={submitForm}
                                    className="tbl-captionn"
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
                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="date"
                                                            placeholder="From *"
                                                            value={values.from}
                                                            hasError={errors.from && touched.from}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.from}
                                                            autoFocus={true}
                                                            id="from"
                                                        />
                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <CustomInputField
                                                            type="date"
                                                            placeholder="To *"
                                                            value={values.to}
                                                            hasError={errors.to && touched.to}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                            errorMsg={errors.to}
                                                            autoFocus={true}
                                                            id="to"
                                                        />

                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <div className="dropdownWrapper">
                                                            <CustomDropdown
                                                                itemList={itemList}
                                                                placeholder="Status *"
                                                                isSingleSelect={false}
                                                                icon={true}
                                                                onChange={changeHandle}
                                                            />
                                                        </div>

                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <div className="dropdownWrapper">
                                                            <CustomDropdown
                                                                itemList={itemList}
                                                                placeholder="Select User *"
                                                                isSingleSelect={false}
                                                                icon={true}
                                                                onChange={changeHandle}
                                                            />
                                                        </div>

                                                    </div>
                                                    <div className="col-xl-4 mb-3">
                                                        <div className="dropdownWrapper">
                                                            <CustomDropdown
                                                                itemList={itemList}
                                                                placeholder="Select Provider *"
                                                                isSingleSelect={false}
                                                                icon={true}
                                                                onChange={changeHandle}
                                                            />
                                                        </div>
                                                        {/* <label htmlFor="exampleFormControlInput2" className="form-label">Select Provider<span className="text-danger">*</span></label> */}
                                                        {/* <input type="text" className="form-control" id="exampleFormControlInput2" placeholder="IFSC Code" /> */}
                                                        {/*  <select id="disabledSelect" class="form-select">
                                                            <option value="0" selected="" data-select2-id="6"> All Provider</option>
                                                            <option value="1"> AIRTEL</option>
                                                            <option value="2"> VI</option>
                                                            <option value="4"> BSNL</option>
                                                            <option value="5"> BSNL STV</option>
                                                            <option value="6"> Jio</option>
                                                            <option value="7"> DISH TV</option>
                                                            <option value="8"> TATA SKY</option>
                                                            <option value="9"> SUN TV</option>
                                                            <option value="10"> VIDEOCON D2H TV</option>
                                                            <option value="11"> AIRTEL DIGITAL TV</option>
                                                            <option value="12"> AIRTEL POSTPAID</option>
                                                            <option value="14"> VI POSTPAID</option>
                                                            <option value="15"> TATA DOCOMO POSTPAID</option>
                                                            <option value="16"> BSNL POSTPAID</option>
                                                            <option value="17"> TATA PHOTON PLUS</option>
                                                            <option value="18"> Tata TeleServices PostPaid</option>
                                                            <option value="19"> JIO POSTPAID</option>
                                                            <option value="20"> TIKONA POSTPAID</option>
                                                            <option value="21"> BSES Yamuna DELHI</option>
                                                            <option value="22"> BSES Rajdhani DELHI</option>
                                                            <option value="23"> NORTH DELHI POWER LIMITED</option>
                                                            <option value="24"> Ajmer Vidyut Vitran Nigam Rajasthan</option>
                                                            <option value="25"> CSPDCL Chhattisgarh</option>
                                                            <option value="26"> TORRENT POWER BHIWANDI</option>
                                                            <option value="27"> UTTAR GUJARAT VIJ COMPANY</option>
                                                            <option value="28"> Adani Electricity MUMBAI</option>
                                                            <option value="29"> Uttar Haryana Bijli Vitran NIgam</option>
                                                            <option value="30"> West Bengal Electricity Distributed Nigam</option>
                                                            <option value="31"> Best Mumbai</option>
                                                            <option value="32"> KSEB Kerala State Electricity Board Limited</option>
                                                            <option value="33"> Tata Power Delhi Limited</option>
                                                            <option value="34"> PUNJAB STATE POWER CORPORATION</option>
                                                            <option value="35"> TNEB TAMIL NADU</option>
                                                            <option value="36"> DAKSHIN GUJARAT VIJ COMPANY</option>
                                                            <option value="37"> MADHYA GUJARAT VIJ COMPANY</option>
                                                            <option value="38"> PASCHIM GUJARAT VIJ COMPANY</option>
                                                            <option value="39"> CESC WEST BENGAL</option>
                                                            <option value="40"> Jaipur Vidyut Vitran Nigam RAJASTHAN</option>
                                                            <option value="41"> BESCOM BENGALURU</option>
                                                            <option value="42"> JODHPUR VIDYUT VITRAN NIGAM</option>
                                                            <option value="43"> South bihar power distribution company</option>
                                                            <option value="44"> North Bihar Power Distribution Company Ltd</option>
                                                            <option value="45"> Southern Power ANDHRA PRADESH</option>
                                                            <option value="46"> Southern Power TELANGANA</option>
                                                            <option value="47"> MP Poorva Kshetra Vidyut Vitaran Co. Ltd Jabalpur - NGB billing system</option>
                                                            <option value="49"> MSEDC MAHARASHTRA</option>
                                                            <option value="50"> INDIA POWER Corporation Limted West Bengal</option>
                                                            <option value="51"> Jamshedpur Utilities And Services JUSCO</option>
                                                            <option value="52"> Noida Power NOIDA</option>
                                                            <option value="53"> Brihan Mumbai Electric Supply and Transport Undertaking</option>
                                                            <option value="54"> M.P. Paschim Kshetra Vidyut Vitaran</option>
                                                            <option value="55"> UPPCL URBAN UTTAR PRADESH</option>
                                                            <option value="56"> Assam Power Distribution Company Ltd (APDCL)- RAPDR</option>
                                                            <option value="57"> TSECL TRIPURA</option>
                                                            <option value="58"> UPPCL RURAL UTTAR PRADESH</option>
                                                            <option value="59"> Uttarakhand Power Corporation Limited</option>
                                                            <option value="60"> Urban Improvement Trust UIT BHIWADI</option>
                                                            <option value="61"> Municipal Corporation of Gurugram</option>
                                                            <option value="62"> WESCO ODISHA</option>
                                                            <option value="63"> SNDL Nagpur</option>
                                                            <option value="64"> Kota Electricity Distribution RAJASTHAN</option>
                                                            <option value="65"> Paschim Kshetra Vitaran MADHYA PRADESH NONRAPDR</option>
                                                            <option value="66"> Muzaffarput Vidyut Vitran Limited</option>
                                                            <option value="67"> India Power Corporation Limited Bihar</option>
                                                            <option value="68"> Bharatpur Electricity Services Ltd</option>
                                                            <option value="69"> Bikaner Electricity Supply Limited BKESL</option>
                                                            <option value="70"> Daman and Diu Electricity Department</option>
                                                            <option value="71"> DNH Power Distribution Company Limted</option>
                                                            <option value="72"> Eastern Power Distribution company of Andhra Pradesh Limited</option>
                                                            <option value="73"> Meghalaya Power Distribution Corporation Limited</option>
                                                            <option value="74"> ODISHA DESCOMS (B2B)</option>
                                                            <option value="75"> TATA Power Mumbai</option>
                                                            <option value="76"> Assam Power Distribution Company Ltd (APDCL)-NON RAPDR</option>
                                                            <option value="77"> Chamundeshwari Electricity Supply Corp Ltd CESCOM</option>
                                                            <option value="78"> Dakshin Haryana Bijli Vitran Nigam</option>
                                                            <option value="79"> Hubli Electricity Supply Company Ltd (HESCOM)</option>
                                                            <option value="80"> Jharkhand Bijli Vitran Nigam Limited (JBVNL)</option>
                                                            <option value="81"> ODISHA DESCOMS (B2C)</option>
                                                            <option value="82"> Central Power Distribution Company of Andhra Pradesh Ltd</option>
                                                            <option value="83"> APEPDCL ANDHRA PRADESH</option>
                                                            <option value="84"> M.P. Poorv Kshetra Vidyut Vitaran - URBAN</option>
                                                            <option value="85"> M.P. Poorv Kshetra Vidyut Vitaran - RURAL</option>
                                                            <option value="86"> M.P. Madhya Kshetra Vidyut Vitaran - URBAN</option>
                                                            <option value="87"> M.P. Madhya Kshetra Vidyut Vitaran - RURAL</option>
                                                            <option value="88"> TORRENT POWER AHMEDABAD</option>
                                                            <option value="89"> TORRENT POWER SURAT</option>
                                                            <option value="90"> TORRENT POWER AGRA</option>
                                                            <option value="91"> Kanpur Electricity Supply Company</option>
                                                            <option value="92"> Goa Electricity Department GOA</option>
                                                            <option value="93"> Department of Power NAGALAND</option>
                                                            <option value="94"> Himachal Pradesh State Electricity Board</option>
                                                            <option value="95"> MESCOM MANGALORE (RAPDRP)</option>
                                                            <option value="96"> SOUTHCO ODISHA</option>
                                                            <option value="97"> NESCO ODISHA</option>
                                                            <option value="98"> CESU ODISHA</option>
                                                            <option value="99"> Sikkim Power URBAN</option>
                                                            <option value="100"> Sikkim Power RURAL</option>
                                                            <option value="101"> Power &amp; Electricity Department MIZORAM</option>
                                                            <option value="102"> TP Ajmer Distribution Ltd (TPADL)</option>
                                                            <option value="103"> Department of Power, Government of Arunachal Pradesh</option>
                                                            <option value="104"> TP Central Odisha Distribution Ltd</option>
                                                            <option value="105"> Government of Puducherry Electricity Department</option>
                                                            <option value="106"> New Delhi Municipal Council (NDMC) - Electricity</option>
                                                            <option value="107"> Electricity Department Chandigarh</option>
                                                            <option value="108"> MTNL LANDLINE DELHI</option>
                                                            <option value="109"> BSNL Landline - Individual</option>
                                                            <option value="110"> AIRTEL LANDLINE</option>
                                                            <option value="111"> MTNL LANDLINE MUMBAI</option>
                                                            <option value="112"> BSNL Landline - Corporate</option>
                                                            <option value="113"> Uttarakhand Jal Sansthan</option>
                                                            <option value="114"> Delhi Jal Board</option>
                                                            <option value="115"> Uttrakhand Jal Sansthan B2C</option>
                                                            <option value="116"> Gwalior Municipal Corporation</option>
                                                            <option value="117"> Municipal Corporation of Amritsar</option>
                                                            <option value="118"> Delhi Development Aunthority (DDA)</option>
                                                            <option value="119"> Haryana Urban Development Authority</option>
                                                            <option value="120"> New Delhi Municipal Council (NDMC)</option>
                                                            <option value="121"> Port Blair Municipal Council - Water</option>
                                                            <option value="122"> Hyderabad Metropolitan Water Supply and Sewerage Board</option>
                                                            <option value="123"> Silvassa Municipal Council</option>
                                                            <option value="124"> Greater Warangal Municipal Corporation - Water</option>
                                                            <option value="125"> Punjab Municipal Corporations/Councils</option>
                                                            <option value="126"> Kerala Water Authority (KWA)</option>
                                                            <option value="127"> Kalyan Dombivali Municipal Corporation</option>
                                                            <option value="128"> Bangalore Water Supply and Sewerage Board</option>
                                                            <option value="129"> Municipal Corporation Ludhiana - Water</option>
                                                            <option value="130"> Ranchi Municipal Corporation</option>
                                                            <option value="131"> Indore Municipal Corporation - Water</option>
                                                            <option value="132"> Madhya Pradesh Urban (e-Nagarpalika) - Water</option>
                                                            <option value="133"> Municipal Corporation Chandigarh</option>
                                                            <option value="134"> Mysuru City Corporation</option>
                                                            <option value="135"> Pune Municipal Corporation - Water</option>
                                                            <option value="136"> Ujjain Nagar Nigam - PHED</option>
                                                            <option value="137"> Urban Improvement Trust (UIT) - Bhiwadi</option>
                                                            <option value="138"> Bhopal Municipal Corporation - Water</option>
                                                            <option value="139"> Surat Municipal Corporation - Water</option>
                                                            <option value="140"> Municipal Corporation Jalandhar</option>
                                                            <option value="141"> Jabalpur Municipal Corporation - Water</option>
                                                            <option value="142"> Department of Public Health Engineering-Water, Mizoram</option>
                                                            <option value="143"> Vasai Virar Municipal Corporation - Water</option>
                                                            <option value="144"> PHED Rajasthan</option>
                                                            <option value="145"> GUJARAT GAS LIMITED</option>
                                                            <option value="146"> INDRAPRASHTA GAS LTD</option>
                                                            <option value="147"> Mahanagar Gas Limited</option>
                                                            <option value="148"> ADANI GAS</option>
                                                            <option value="149"> Haryana City Gas - Kapil Chopra Enterprise</option>
                                                            <option value="150"> SITI ENERGY</option>
                                                            <option value="151"> Tripura Natural Gas</option>
                                                            <option value="152"> SABARMATI GAS LIMITED</option>
                                                            <option value="153"> Unique Central Piped Gases Pvt Ltd (UCPGPL)</option>
                                                            <option value="154"> Vadodara Gas Limited</option>
                                                            <option value="155"> Gail India Limited</option>
                                                            <option value="156"> Naveriya Gas Pvt Ltd</option>
                                                            <option value="157"> Torrent Gas Moradabad Limited formerly Siti  Energy Limited</option>
                                                            <option value="158"> Green Gas Limited(GGL)</option>
                                                            <option value="159"> Charotar Gas Sahakari Mandali Ltd</option>
                                                            <option value="160"> Aavantika Gas Ltd.</option>
                                                            <option value="161"> Indian Oil-Adani Gas Private Limited</option>
                                                            <option value="162"> IRM Energy Private Limited</option>
                                                            <option value="163"> Maharashtra Natural Gas Limited (MNGL)</option>
                                                            <option value="164"> Sanwariya Gas Limited</option>
                                                            <option value="165"> Bhagyanagar Gas Limited</option>
                                                            <option value="166"> Megha Gas</option>
                                                            <option value="167"> Assam Gas Company Limited</option>
                                                            <option value="168"> Central U.P. Gas Limited</option>
                                                            <option value="169"> Indian Highways Management Company Ltd FASTag</option>
                                                            <option value="170"> IndusInd Bank FASTag</option>
                                                            <option value="171"> ICICI Bank Fastag</option>
                                                            <option value="172"> Axis Bank FASTag</option>
                                                            <option value="173"> Bank of Baroda - Fastag</option>
                                                            <option value="174"> Kotak Mahindra Bank - Fastag</option>
                                                            <option value="175"> IDFC FIRST Bank - FasTag</option>
                                                            <option value="176"> HDFC  Bank - Fastag</option>
                                                            <option value="177"> Equitas FASTag Recharge</option>
                                                            <option value="178"> Paytm Payments Bank FASTag</option>
                                                            <option value="179"> Federal Bank - FASTag</option>
                                                            <option value="180"> Reliance General Insurance Company LTD</option>
                                                            <option value="181"> Bajaj Allianz Life Insurance Company Limited</option>
                                                            <option value="182"> Max Bupa Health Insurance</option>
                                                            <option value="183"> Shriram General Insurance</option>
                                                            <option value="184"> Aviva Life Insurance</option>
                                                            <option value="185"> Bajaj Allianz General Insurance</option>
                                                            <option value="186"> Capri Global Housing Finance</option>
                                                            <option value="187"> Cars24 Financial Services Private Limited</option>
                                                            <option value="188"> Avanse Financial Services Ltd</option>
                                                            <option value="189"> Shriram City  Union Finance Ltd</option>
                                                            <option value="190"> Arohan Financial Services Ltd</option>
                                                            <option value="191"> OHMYLOAN</option>
                                                            <option value="192"> IDFC FIRST Bank Ltd</option>
                                                            <option value="193"> Annapurna Finance Private Limited-MSME</option>
                                                            <option value="194"> Hero FinCorp Limited</option>
                                                            <option value="195"> i2i Funding-Borrower EMI Repayment</option>
                                                            <option value="196"> Muthoot Microfin Limited</option>
                                                            <option value="197"> Shriram Housing Finance Limited</option>
                                                            <option value="198"> Jana Small Finance Bank</option>
                                                            <option value="199"> Fullerton India Housing Finance Limited</option>
                                                            <option value="200"> L&amp;T Financial Services</option>
                                                            <option value="201"> Manappuram Finance Limited-Vehicle Loan</option>
                                                            <option value="202"> Loksuvidha</option>
                                                            <option value="203"> Axis Finance Limited</option>
                                                            <option value="204"> India Shelter Finance Corporation Limited</option>
                                                            <option value="205"> L and T Housing Finance</option>
                                                            <option value="206"> AAVAS FINANCIERS LIMITED</option>
                                                            <option value="207"> Kinara Capital</option>
                                                            <option value="208"> DMI Finance Private Limited</option>
                                                            <option value="209"> Ess Kay Fincorp Limited</option>
                                                            <option value="210"> Kissht</option>
                                                            <option value="211"> Bajaj Auto Finance</option>
                                                            <option value="212"> Fincare Small Finance Bank</option>
                                                            <option value="213"> ZestMoney</option>
                                                            <option value="214"> OMLP2P.COM</option>
                                                            <option value="215"> Annapurna Finance Private Limited-MFI</option>
                                                            <option value="216"> Bajaj Finance</option>
                                                            <option value="217"> Muthoot Capital Services Ltd</option>
                                                            <option value="218"> Easy Home Finance Limited</option>
                                                            <option value="219"> Faircent-Borrower EMI Account</option>
                                                            <option value="220"> Tata Capital Financial Services Limited</option>
                                                            <option value="221"> Aditya Birla Housing Finance Limited</option>
                                                            <option value="222"> Varthana</option>
                                                            <option value="223"> LOANTAP CREDIT PRODUCTS PRIVATE LIMITED</option>
                                                            <option value="224"> Toyota Financial Services</option>
                                                            <option value="225"> Snapmint</option>
                                                            <option value="226"> Paisa Dukan-Borrower EMI</option>
                                                            <option value="227"> Kanakadurga Finance Limited</option>
                                                            <option value="228"> Mahindra Rural Housing Finance Ltd</option>
                                                            <option value="229"> Capri Global Capital Limited</option>
                                                            <option value="230"> ICICI Bank Ltd - Loans</option>
                                                            <option value="231"> AU Bank Loan Repayment</option>
                                                            <option value="232"> Shriram Transport Finance Company Limited</option>
                                                            <option value="233"> Vastu Housing Finance Corporation Limited</option>
                                                            <option value="234"> Avail</option>
                                                            <option value="235"> Flexsalary</option>
                                                            <option value="236"> Fullerton India credit company limited</option>
                                                            <option value="237"> Adani Capital Pvt Ltd</option>
                                                            <option value="238"> BERAR Finance Limited</option>
                                                            <option value="239"> G U Financial Services Pvt Ltd</option>
                                                            <option value="240"> Indiabulls Consumer Finance Limited</option>
                                                            <option value="241"> Indiabulls Housing Finance Limited</option>
                                                            <option value="242"> Jain Autofin</option>
                                                            <option value="243"> RupeeRedee</option>
                                                            <option value="244"> Clix</option>
                                                            <option value="245"> Baid Leasing and Finance</option>
                                                            <option value="246"> Motilal Oswal Home Finance</option>
                                                            <option value="247"> Oxyzo Financial Services Pvt Ltd</option>
                                                            <option value="248"> Home Credit India Finance Pvt. Ltd</option>
                                                            <option value="249"> Tikona Infinet Pvt Ltd</option>
                                                            <option value="250"> Timbl Broadband</option>
                                                            <option value="251"> Hathway Broadband</option>
                                                            <option value="252"> Vfibernet Broadband</option>
                                                            <option value="253"> Fusionnet Web Services Private Limited</option>
                                                            <option value="254"> Mnet Broadband</option>
                                                            <option value="255"> DEN Broadband</option>
                                                            <option value="256"> Excell Broadband</option>
                                                            <option value="257"> Connect Broadband</option>
                                                            <option value="258"> Instalinks</option>
                                                            <option value="259"> Nextra Broadband</option>
                                                            <option value="260"> Airtel Broadband</option>
                                                            <option value="261"> ACT Fibernet</option>
                                                            <option value="262"> Instanet Broadband</option>
                                                            <option value="263"> Netplus Broadband</option>
                                                            <option value="264"> Comway Broadband</option>
                                                            <option value="265"> TTN Broadband</option>
                                                            <option value="266"> Airtel Broadband (Fetch &amp; Pay)</option>
                                                            <option value="267"> ION</option>
                                                            <option value="268"> Spectra</option>
                                                            <option value="269"> Swifttele Enterprises Private Limited</option>
                                                            <option value="270"> Asianet Broadband</option>
                                                            <option value="271"> Flash Fibernet</option>
                                                            <option value="272"> Nupay - Entellus Business Solutions Pvt Ltd</option>
                                                            <option value="273"> FITPASS</option>
                                                            <option value="274"> Furlenco</option>
                                                            <option value="275"> HT Digital</option>
                                                            <option value="276"> Parentlane</option>
                                                            <option value="277"> Zee Entertainment Enterprises Limited</option>
                                                            <option value="278"> Ebony Greens Apartments Owners Association</option>
                                                            <option value="279"> Association of Apartment Owners Of Star Court Cluster</option>
                                                            <option value="280"> Amrut Ganga H1 Cooperative Hsg. Soc. Ltd.</option>
                                                            <option value="281"> D D Plaza Co-Op Premises Society Ltd</option>
                                                            <option value="282"> Avalon Residency Welfare Society</option>
                                                            <option value="283"> Darshan Ricco Co Operative Housing Society</option>
                                                            <option value="284"> Abhushan Residency C Wing</option>
                                                            <option value="285"> Goverdhan Villa Maintenance Society</option>
                                                            <option value="286"> Lodha Meridian Owners Welfare Society 4Th Phase</option>
                                                            <option value="287"> Parkwoods B1 Co Operative Housing Soc Ltd</option>
                                                            <option value="288"> Parkwoods B2 Co Operative Housing Soc Ltd</option>
                                                            <option value="289"> Fairfield Co Operative Housing Society Ltd</option>
                                                            <option value="290"> Viviana Co Operative Housing Society Limited</option>
                                                            <option value="291"> The Hans Bhawan Friends Cooperative Group Housing Society Limited</option>
                                                            <option value="292"> Viviana Co Op Hsg Soc Ltd Cultural Forum</option>
                                                            <option value="293"> Sterling Heights Co Operative Housing Service Society Ltd M - Building</option>
                                                            <option value="294"> Pristine City Phase I Co Opertive Housing</option>
                                                            <option value="295"> Parkwoods C Co Operative Housing Soc Ltd</option>
                                                            <option value="296"> Shree Ganesh Co Op Hsg Soc Ltd</option>
                                                            <option value="297"> Ganesh Residency Maintainance Co Op Soc</option>
                                                            <option value="298"> Kamala Ashish No 3 Co Operative Housing Society Limited</option>
                                                            <option value="299"> Pearl Regalia Welfare And Maintenance Society</option>
                                                            <option value="300"> Indradhanush Flats Service Society</option>
                                                            <option value="301"> JNC The Park Home Buyers Society</option>
                                                            <option value="302"> SAFAL PARISAR 1 ( PARISAR CO OPERATIVE HOUSING SERVICE SOCIETY LIMITED VIBHAG - 1)</option>
                                                            <option value="303"> Janapriya Nile Valley Block 2A Owners Welfare Association</option>
                                                            <option value="304"> Sushobha Apartment Condominium</option>
                                                            <option value="305"> Shree Apartment A And B Sahkari Gruhrachna Sanstha Maryadit</option>
                                                            <option value="306"> Someshwar Ashirwad Co Operative Housing Society</option>
                                                            <option value="307"> Asianet Digital</option>
                                                            <option value="308"> Intermedia Cable Communication Pvt Ltd</option>
                                                            <option value="309"> Hathway Digital Cable TV</option>
                                                            <option value="310"> Bharat Gas (BPCL)</option>
                                                            <option value="311"> Indane Gas (Indian Oil)</option>
                                                            <option value="312"> HP Gas (HPCL)</option>
                                                            <option value="313"> Account Verification</option>
                                                            <option value="314"> Money Transfer 1</option>
                                                            <option value="315"> Money Transfer 2</option>
                                                            <option value="316"> Balance Enquiry (AEPS 1)</option>
                                                            <option value="317"> Cash Withdrawal (AEPS 1)</option>
                                                            <option value="318"> Mirco ATM</option>
                                                            <option value="319"> Mini Statement (AEPS 1)</option>
                                                            <option value="320"> Aadhar Pay (AEPS 1)</option>
                                                            <option value="321"> Pancard Coupon</option>
                                                            <option value="322"> Move To Wallet</option>
                                                            <option value="323"> Move To Bank</option>
                                                            <option value="324"> Balance</option>
                                                            <option value="325"> Wallet Transfer</option>
                                                            <option value="327"> Service Activation</option>
                                                            <option value="329"> CREDIT CARD BILL PAYMENT</option>
                                                            <option value="331"> Upi Transfer</option>
                                                            <option value="332"> Upi Veirfy</option>
                                                            <option value="333"> Scan and Pay</option>
                                                            <option value="335"> Balance Enquiry (AEPS 2)</option>
                                                            <option value="336"> Cash Withdrawal (AEPS 2)</option>
                                                            <option value="337"> Mini Statement (AEPS 2)</option>
                                                            <option value="338"> Aadhar Pay (AEPS 2)</option>
                                                            <option value="339"> Balance Enquiry (AEPS 3)</option>
                                                            <option value="340"> Cash Withdrawal (AEPS 3)</option>
                                                            <option value="341"> Mini Statement (AEPS 3)</option>
                                                            <option value="342"> Aadhar Pay (AEPS 3)</option>
                                                            <option value="343"> Money Transfer 3</option>
                                                            <option value="344"> Account Verification 3</option>
                                                        </select> */}
                                                    </div>
                                                    <div className="col-lg-4 col-md-4 mg-t-10 mg-sm-t-25">
                                                        <button className="btn btn-primary pd-x-20 rounded-0 " type="submit"><i className="fas fa-search"></i> Search</button>
                                                        <button className="btn btn-danger pd-x-20 rounded-0" type="button" data-toggle="modal" data-target="#transaction_download_model"><i className="fas fa-download"></i> Download</button>
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
            </div>

        </>

    )
}

export default AllTransactionReportsForm
