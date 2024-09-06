import { Modal } from 'antd'
import React from 'react'
import KycConfm from "../../assets/images/kyc/kycConfirmatiom.png"
import { FaLess } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

function StaffKycModal({ show, setShow, kycState }) {
    const navigate = useNavigate()
    const forOkBtn = () => {
        setShow(false)
        if (kycState?.error) {
            navigate(`/staff-kyc_details`)
        } else {
            navigate(`/admin`)
        }
    }
    return (
        <>
            <Modal
                title="To access the page, complete your kyc "
                centered
                open={show}
                onOk={() => forOkBtn()}
                maskClosable={false}
                closable={false}
                cancelButtonProps={{ style: { display: 'none' } }}
                className='ant__popups'
            >
                <div className='row g-0 rounded-lg overflow-hidden align-items-center'>
                    <div className='col-lg-6  text-justify' style={{ backgroundColor: "#016cb4" }}>
                        <div className='p-3'><h5 className='text-white'>{kycState?.message}</h5></div>
                    </div>
                    <div className='col-lg-6'>
                        <img src={KycConfm} alt='*' width="100%" className='rounded-sm-right' />
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default StaffKycModal
