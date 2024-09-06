import React from "react";
import "../../assets/css/tcertificate.css"
import logo from "../../certificate_pic/logo.png"
import side from "../../certificate_pic/side.png"
import { MdCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";

export default function Tcertificate(){
    return(
        <div className="main" style={{backgroundColor:"white"}}>
            <div className="wrapper_logo">
                <div className="logo">
                    <img src={logo}/>
                </div>
                <div className="side">
                    <img src={side}/>
                </div>
                <div className="side2">
                    <img src={side}/>
                </div>
            </div>
            <div className="content">
                <div className="date">Date : 24-05-28</div>
                <h1>TO WHOMSOEVER IT MAY CONCERN</h1>
                <p>This is to confirm that <b> RNFI Services Limited (formerly known as RNFI Services Private Limited) a company incorporated under companies act 2013 having it’s registered address at UG-5, Relipay House, Plot No. 42 DLF Industrial Area Kirti Nagar New Delhi -110015 IN (“RNFI”) </b> is a duly approved Business Correspondent (BC) of Fino Payment Bank Limited.</p>
                <p>We at RNFI Services are committed to extending financial services to the underserved segments of our society, thereby promoting financial inclusion. Our Business Correspondent Agents (BCAs), also known as Retail Agents, are at the forefront of this mission, offering essential banking services such as cash deposits and withdrawals directly to the end customers' bank accounts.</p>
                <p>Our BCAs are empowered to deposit cash into RNFI Services' account, upon which a corresponding pre-determined limit is allocated to them. This limit enables the BCAs to facilitate cash deposit services for customers within the regulatory confines established by the Reserve Bank of India (RBI). Functioning akin to a mobile bank counter, our BCAs collect modest cash deposits from customers and initiate deposit transactions through our associated Bank. The associated Bank then diligently processes these transactions, adhering to the compliance with RBI guidelines, rules and regulations.</p>
                <p>To maintain operational fluidity, BCAs are required to pre-deposit funds into RNFI Services' account with the associated banks. This advance deposit secures a pre-funded limit. Following each customer deposit transaction, the BCA's limit is adjusted accordingly. The cash collected from customers is then redeposited by the BCAs into RNFI Services' account to restore their transactional capacity.</p>
                <p>This is to further confirm that <b> DIGITAL SEVA KENDRA </b> a proprietor having their office / shop at <b> S/O MAHENDRA,OKHLA VIHAR,A-35,NEAR IQBAL FAIZI HOSPITAL,SOUTH DELHI,JAMIA NAGAR,DELHI,INDIA,110025 , SOUTH DELHI , SOUTH DELHI , DELHI , DELHI , 226001</b> is an authorized business associate/Business Correspondent Agent (“BCA”) for Services with our company. Mr. <b>ARYAN KUMAR </b> having PAN No./Aadhaar number <b> EVAPA0310L </b> , has been associated with us and is allotted with the Agent code <b> R001116099 </b> which is valid as on date.</p>
                <p>Our personnel i.e. Agents will be carrying the essential documents proving the same as authenticate business funds. <b className="italic"> As per Notification No. 76/instructions/2015/EEPS/Vol.. X Dated: 22nd March, 2017 by Election Commission of India for Transportation of clean and genuine cash by Banks and Private Sector Financial Services etc is permitted, during election - Standard operating procedure (SOP) </b>.</p>
                <p><b>We kindly request your cooperation to permit them to deposit funds into RNFI Services' bank account for uninterrupted BCA operations.</b></p>
                <p>This Letter is being issued with the sole intent of validating the uninterrupted continuation of the Business Correspondent services facilitated by our company. We obligate you to promptly communicate with the undersigned authority at info@rnfiservices.com without delay, in case if you noticed that this letter is being used for any other purpose.</p>
                <div className="faith">Yours faithfully,</div>
                <div className="signature">For RNFI Services Limited</div>
            </div>
            <div className="wrapper_logo">
                    <div className="mark">
                        <div>
                            <ul className="text-start">
                                <li className="num flex"> <MdCall fontSize={16}/>  <span>011-4920-7777</span></li>
                                <li className="border-t num flex">
                                    <span><MdEmail /></span>
                                    <span>
                                        <span className="block">www.rnfiservices.com</span>
                                        <span className="block">info@rnfiservices.com</span>
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div>
                        <ul className="text-end">
                            <li className="flex adress">
                                    <span>
                                        <span className="block">www.rnfiservices.com</span>
                                        <span className="block">info@rnfiservices.com</span>
                                    </span>
                                    <span><MdEmail /></span>
                            </li>
                                <li className="border-t flex adress">
                                    <span>
                                        <span className="block">www.rnfiservices.com</span>
                                        <span className="block">info@rnfiservices.com</span>
                                    </span>
                                    <span><MdEmail /></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                <div className="side">
                    <img src={side}/>
                </div>
                <div className="side2">
                    <img src={side}/>
                </div>
            </div>
        </div>
    )
}