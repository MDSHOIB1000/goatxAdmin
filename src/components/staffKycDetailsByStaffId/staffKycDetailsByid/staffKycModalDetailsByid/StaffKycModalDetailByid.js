import { Modal } from 'antd';
import React, { useRef } from 'react';
import { baseUrVideos } from '../../../../baseUrl';

function StaffKycVModalDetailByid({ open, setOpen, kycVideo }) {
    const videoRef = useRef(null);
  
    const handleClose = () => {
      setOpen(false);
      if (videoRef.current) {
        videoRef.current.pause();
      }
    };
  
    const handleOk = () => {
      setOpen(false);
      if (videoRef.current) {
        videoRef.current.pause();
      }
    };
  
    const handleCancel = () => {
      setOpen(false);
      if (videoRef.current) {
        videoRef.current.pause();
      }
    };
  
    return (
      <>
        <Modal
          title="KYC VIDEO"
          centered
          visible={open}
          onOk={handleOk}
          onCancel={handleCancel}
          afterClose={handleClose}
          className="kyc-modal"
        >
          <div className="video-container">
            <video
              src={`${baseUrVideos}${kycVideo}`}
              controls
              autoPlay
              ref={videoRef}
              type="video/mp4"
            />
          </div>
        </Modal>
      </>
    );
}

export default StaffKycVModalDetailByid
