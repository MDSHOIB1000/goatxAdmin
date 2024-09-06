import React, { useState, useEffect } from 'react';
import { Select, Input, Spin, Button, Modal, message, Pagination, Table, Card } from 'antd';
import { bpbsOperatorList } from "../../../api/login/Login";
import './BPBSService.css';

const { Option } = Select;
const { Search } = Input;

const BPBSService = ({ bbpswiseserives, selectedPackageId }) => {
  const [selectedService, setSelectedService] = useState(null);
  const [operators, setOperators] = useState([]);
  const [operatorSearchTerm, setOperatorSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOperator, setSelectedOperator] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const pageSize = 4;
  const [servicesLoading, setServicesLoading] = useState(true);

  useEffect(() => {
    if (selectedService && selectedPackageId) {
      fetchOperators(selectedService, 1, selectedPackageId);
    }
  }, [selectedService, selectedPackageId]);

  useEffect(() => {
    if (bbpswiseserives && bbpswiseserives.length > 0) {
      setServicesLoading(false);
    }
  }, [bbpswiseserives]);

  const fetchOperators = async (serviceId, page, packageId, searchTerm = '') => {
    setLoading(true);
    try {
      const response = await bpbsOperatorList(serviceId, page - 1, pageSize, packageId, searchTerm);
      setOperators(response.data || []);
      setTotalItems(response.totalCount || 0);
      setCurrentPage(page);
    } catch (error) {
      console.error('Error fetching operators:', error);
      message.error('Failed to load operators');
      setOperators([]);
    }
    setLoading(false);
  };

  const handleServiceSelect = (value) => {
    setSelectedService(value);
    setOperatorSearchTerm('');
    setCurrentPage(1);
    fetchOperators(value, 1, selectedPackageId);
  };

  const handleOperatorSearch = (value) => {
    setOperatorSearchTerm(value);
    fetchOperators(selectedService, 1, selectedPackageId, value);
  };

  const handlePageChange = (page) => {
    fetchOperators(selectedService, page, selectedPackageId, operatorSearchTerm);
  };

  const handlePayNow = (operator) => {
    setSelectedOperator(operator);
    setIsModalVisible(true);
  };

  const handleModalOk = () => {
    message.success(`Payment processed for ${selectedOperator.name}`);
    setIsModalVisible(false);
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
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

  return (
    <div className="bpbs-container">
      <h1>BPBS Service</h1>
      <Select
        style={{ width: '100%', marginBottom: 16 }}
        value={selectedService}
        placeholder="Please select a service"
        onChange={handleServiceSelect}
        loading={servicesLoading}
      >
        {(bbpswiseserives || []).map(service => (
          <Option key={service._id} value={service._id}>{service.service}</Option>
        ))}
      </Select>

      {selectedService && (
        <>
          <Search
            placeholder="Search operators"
            onSearch={handleOperatorSearch}
            style={{ marginBottom: 16 }}
          />

          <Spin spinning={loading}>
            {operators.map(operator => (
              <Card
                key={operator._id}
                title={operator.name || 'Unnamed Operator'}
                // extra={<Button type="primary" onClick={() => handlePayNow(operator)}>Pay Now</Button>}
                style={{ marginBottom: 16 }}
              >
                <Table
                  dataSource={operator.slots}
                  columns={columns}
                  pagination={false}
                  rowKey="_id"
                />
              </Card>
            ))}
          </Spin>

          <Pagination
            current={currentPage}
            total={totalItems}
            pageSize={pageSize}
            onChange={handlePageChange}
            style={{ marginTop: 16, textAlign: 'right' }}
            showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} operators`}
          />
        </>
      )}

      <Modal
        title="Confirm Payment"
        visible={isModalVisible}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
      >
        <p>Are you sure you want to pay for {selectedOperator?.name || 'this operator'}?</p>
      </Modal>
    </div>
  );
};

export default BPBSService;