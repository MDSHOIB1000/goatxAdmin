import React from 'react';
import { BsFillExclamationTriangleFill } from 'react-icons/bs';
import { IoMdCloseCircle } from "react-icons/io";
import './AlertMessage.css';

const Alert = ({ variant, severity, children,closeBtn }) => {
  return (
    <div className={`alert d-flex justify-content space between ${variant} ${severity}`} >
      <div className="icon">
        <BsFillExclamationTriangleFill />
      </div>
      <div className="content">
        {children}
      </div>
      <div className='closBtn'>
        <span onClick={()=>closeBtn(false)} className='closeIcon' ><IoMdCloseCircle /></span>
      </div>
    </div>
  );
}

export default Alert;