import React, { useState, useEffect } from 'react';
import { TreeSelect, message, Table, Card, Typography, Divider, Empty, Button, Spin, Collapse } from 'antd';
import { Modal } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './PackageSelector.css';
import BPBSService from './BPBSService';
import './Package.css';
import { FaCheckCircle } from 'react-icons/fa';
import { fetchInitialPackages, fetchPackageDetails, assignPackage } from '../../../api/login/Login';
import { FaCheck } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
import { FaQuestionCircle } from 'react-icons/fa';

const { Title, Paragraph } = Typography;
const { Panel } = Collapse;

const Package = ({retailerInfo}) => {
  const [packages, setPackages] = useState([]);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [packageDetails, setPackageDetails] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedPackageId, setSelectedPackageId] = useState(null);
  const [initialPackage, setInitialPackage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isConfirmModalVisible, setIsConfirmModalVisible] = useState(false);

  const { id: userId } = useParams();

  const loadInitialPackages = async () => {
    try {
      const data = await fetchInitialPackages(userId);

      if (data.error === false && data.statusCode === 200) {
        const packageList = data.data.list;
        const defaultPackageId = data.data.default;

        setPackages(formatPackagesForTreeSelect(packageList));

        const defaultPackage = packageList.find(pkg => pkg._id === defaultPackageId);
        if (defaultPackage) {
          setSelectedPackage(defaultPackage._id);
          setSelectedPackageId(defaultPackage._id);
          loadPackageDetails(defaultPackage._id);
        } else if (packageList.length > 0) {
          setSelectedPackage(packageList[0]._id);
          setSelectedPackageId(packageList[0]._id);
          loadPackageDetails(packageList[0]._id);
        }
      } else {
        throw new Error('Invalid response format');
      }
    } catch (error) {
      console.error('Error fetching packages:', error);
      message.error('Failed to load initial packages');
    }
  };

  useEffect(() => {
    loadInitialPackages();
  }, [userId]);

  useEffect(() => {
    if (selectedPackage) {
      setSelectedPackageId(selectedPackage);
    }
  }, [selectedPackage]);

  const formatPackagesForTreeSelect = (packages) => {
    return packages.map(pkg => ({
      title: pkg.package_name,
      value: pkg._id,
    }));
  };

  const loadPackageDetails = async (packageId) => {
    try {
      const data = await fetchPackageDetails(packageId);
      setPackageDetails(data);
    } catch (error) {
      console.error('Error fetching package details:', error);
      message.error('Failed to load package details');
    }
  };

  const handlePackageChange = (value) => {
    setSelectedPackage(value);
    setSelectedPackageId(value);
    loadPackageDetails(value);
  };

  const handleAssignPackage = () => {
    if (!userId || !selectedPackage) {
      message.error('Missing required data for package assignment');
      return;
    }
    setIsConfirmModalVisible(true);
  };
  const confirmAssignPackage = async () => {
    setIsConfirmModalVisible(false);
    setLoading(true);
  
    try {
      const data = await assignPackage(userId, selectedPackage);
  
      if (data.error === false && data.statusCode === 200) {
        message.success('Package changed successfully');
        setIsModalVisible(true);
        setInitialPackage(selectedPackage);
      } else {
        throw new Error('Failed to change package');
      }
    } catch (error) {
      console.error('Error changing package:', error);
      message.error('Failed to change package');
    } finally {
      setLoading(false);
    }
  };

  const columns = [
    { title: 'Start Amount', dataIndex: 'start_amt', key: 'start_amt' },
    { title: 'End Amount', dataIndex: 'end_amt', key: 'end_amt' },
    { title: 'Charge', dataIndex: 'charge', key: 'charge' },
    { title: 'Charge Type', dataIndex: 'charge_type', key: 'charge_type' },
    { title: 'Commission', dataIndex: 'commision', key: 'commision' },
    { title: 'Commission Type', dataIndex: 'commision_type', key: 'commision_type' },
    { title: 'Distributor Commission', dataIndex: 'distributor_comm', key: 'distributor_comm' },
    { title: 'Distributor Commission Type', dataIndex: 'distributor_comm_type', key: 'distributor_comm_type' },
    { title: 'Master Distributor Commission', dataIndex: 'master_distributer_com', key: 'master_distributer_com' },
    { title: 'Master Distributor Commission Type', dataIndex: 'master_distributer_com_type', key: 'master_distributer_com_type' },
  ];

  const renderServiceTables = () => {
    if (!packageDetails || !packageDetails.data || !packageDetails.data.OtherComm) {
      return <Empty description="No commission data available" />;
    }

    return packageDetails.data.OtherComm.map((service, index) => (
      <div key={index}>
        <Title level={4}>{service.service}</Title>
        <Paragraph></Paragraph>
        <Table
          dataSource={service.commision}
          columns={columns}
          rowKey="_id"
          scroll={{ x: true }}
          pagination={{ pageSize: 10 }}
          locale={{
            emptyText: <Empty description="No records available" />
          }}
        />
        <Divider />
      </div>
    ));
  };

  return (
    <div className="package-selector-container" style={{ maxWidth: '100%' }}>
      <h1>Package Selector</h1>
      <div className="row" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className='col-3'>
          <Button type="primary" onClick={handleAssignPackage} className="assign-button" disabled={loading}>
            {loading ? <Spin /> : 'Assign Package'}
          </Button>
        </div>
      </div>

      <TreeSelect
        style={{ width: '100%' }}
        value={selectedPackage}
        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
        treeData={packages}
        placeholder="Please select a package"
        treeDefaultExpandAll
        onChange={handlePackageChange}
        className="package-tree-select"
      />

      {packageDetails && (
        <Card className="package-details">
          <h2>Package Details</h2>
          <Title level={3}>{packageDetails.package_name}</Title>
          <Paragraph>{packageDetails.description}</Paragraph>
          <Divider />
          {packageDetails?.data?.OtherComm?.length > 0 && (
            <Collapse accordion>
              <Panel header={<Title level={4}>Other Commissions</Title>} key="1">
                {renderServiceTables()}
              </Panel>
            </Collapse>
          )}
          {packageDetails?.data?.BBPSWiseServices?.length > 0 && (
            <>
              <Divider />
              <Collapse accordion>
                <Panel header={<Title level={4}>BPBS Services</Title>} key="2">
                  <BPBSService
                    bbpswiseserives={packageDetails.data.BBPSWiseServices}
                    selectedPackageId={selectedPackageId}
                  />
                </Panel>
              </Collapse>
            </>
          )}
        </Card>
      )}

      <div className="row" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className='col-3'>
          <Button type="primary" onClick={handleAssignPackage} className="assign-button" disabled={loading}>
            {loading ? <Spin /> : 'Assign Package'}
          </Button>
        </div>
      </div>

      <Modal show={isModalVisible} onHide={() => setIsModalVisible(false)} centered className="pkg-congrats-modal">
        <Modal.Body className="pkg-congrats-modal__body">
          <button className="pkg-congrats-modal__close" onClick={() => setIsModalVisible(false)}>×</button>
          <div className="pkg-congrats-modal__content">
            <div className="pkg-congrats-modal__icon-container">
              <FaStar style={{ color: 'gold' }} className="pkg-congrats-modal__icon" />
            </div>
            <h2 className="pkg-congrats-modal__title">Package Assigned!</h2>
            <p className="pkg-congrats-modal__message">The new package has been successfully assigned to the retailer. The retailer can now enjoy enhanced features and benefits!</p>
            <button className="pkg-congrats-modal__button" onClick={() => setIsModalVisible(false)}>CONTINUE</button>
          </div>
        </Modal.Body>
      </Modal>
  
{/* Confirmation modal */}
<Modal 
  show={isConfirmModalVisible} 
  onHide={() => setIsConfirmModalVisible(false)} 
  centered
  className="confirm-modal"
>
  <Modal.Body className="confirm-modal__body">
    <button 
      className="confirm-modal__close" 
      onClick={() => setIsConfirmModalVisible(false)}
    >
      ×
    </button>
    <div className="confirm-modal__content">
      <div className="confirm-modal__icon">
        <FaQuestionCircle size={50} color="#007bff" />
      </div>
      <h2 className="confirm-modal__title">Confirm Package Assignment</h2>
      <p className="confirm-modal__message">
        Are you sure you want to assign this package to the retailer?
      </p>
      <div className="confirm-modal__details">
        <p><strong>Retailer Name:</strong> {retailerInfo?.name}</p>
        <p><strong>Retailer ID:</strong> {retailerInfo?.refer_id}</p>
       
      </div>
      
      <div className="confirm-modal__buttons">
        <Button 
          variant="outline-secondary" 
          onClick={() => setIsConfirmModalVisible(false)}
          className="confirm-modal__button"
        >
          No, Cancel
        </Button>
        <Button 
          variant="primary" 
          onClick={confirmAssignPackage}
          className="confirm-modal__button"
        >
          Yes, Assign
        </Button>
      </div>
    </div>
  </Modal.Body>
</Modal>
    </div>
  );
};

export default Package;
