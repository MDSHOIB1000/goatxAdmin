import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Form, DatePicker, Typography, Button, Table, Tag, message, Empty, Modal, Space } from 'antd';
import { EyeOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import { ledgerReport, ledgerReportAll } from '../../api/login/Login';
import './Dashboard.css';
import * as XLSX from 'xlsx';

const { Title } = Typography;

const LedgerReport = () => {
  const [reportData, setReportData] = useState([]);
  const [startDate, setStartDate] = useState(dayjs().startOf('day'));
  const [endDate, setEndDate] = useState(dayjs().endOf('day'));
  const [isLoading, setIsLoading] = useState(true);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: 0,
  });
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedCommission, setSelectedCommission] = useState({});

  useEffect(() => {
    fetchReportData(pagination.current);
  }, []);

  const fetchReportData = async (page = 1) => {
    setIsLoading(true);
    try {
      const response = await ledgerReport(
        page - 1,
        pagination.pageSize,
        formatDate(startDate),
        formatDate(endDate)
      );
      if (response?.error === false && response?.statusCode === 200) {
        setReportData(response?.data);
        setPagination({
          ...pagination,
          current: page,
          total: response.totalCount, // Use totalCount from the API response
        });
      } else {
        throw new Error('Failed to fetch data');
      }
    } catch (error) {
      console.error('Error fetching ledger report data:', error);
      setReportData([]);
      message.error('Failed to fetch ledger report data');
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (date) => {
    return date ? date.format('YYYY-MM-DD') : null;
  };

  const handleTableChange = (pagination) => {
    fetchReportData(pagination.current);
  };

  const getStatusTag = (status) => {
    const statusMap = {
      1: { color: 'orange', text: 'Pending' },
      2: { color: 'green', text: 'Success' },
      3: { color: 'red', text: 'Failed' },
      4: { color: 'blue', text: 'Refunded' },
    };

    const statusInfo = statusMap[status] || { color: 'default', text: 'Unknown' };

    return <Tag color={statusInfo.color}>{statusInfo.text}</Tag>;
  };
  const showModal = (record) => {
    setSelectedCommission(record);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const columns = [
    {
      title: 'Date',
      dataIndex: 'txn_date',
      key: 'txn_date',
      render: (text) => dayjs(text).format('YYYY-MM-DD HH:mm:ss'),
    },
    {
      title: 'Transaction ID',
      dataIndex: 'txn_id',
      key: 'txn_id',
    },
    {
      title: 'Service',
      dataIndex: 'service',
      key: 'service',
    },
    {
      title: 'Vender',
      dataIndex: 'vender',
      key: 'vender',
    },
    {
      title: 'State',
      dataIndex: 'state',
      key: 'state',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      render: (text) => `₹${parseFloat(text).toFixed(2)}`,
    },
    {
      title: 'Charges',
      dataIndex: 'charges',
      key: 'charges',
      render: (text) => `₹${parseFloat(text).toFixed(2)}`,
    },
    {
      title: 'Commission',
      dataIndex: 'commission',
      key: 'commission',
      render: (text) => `₹${parseFloat(text).toFixed(2)}`,
    },
    {
      title: 'TDS',
      dataIndex: 'tds',
      key: 'tds',
      render: (text) => `₹${parseFloat(text).toFixed(2)}`,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => getStatusTag(status),
    },
    {
      title: 'Commission',
      key: 'commission',
      render: (_, record) => (
        <Button 
          icon={<EyeOutlined />} 
          onClick={() => showModal(record)}
        />
      ),
    },
  ];

  const handleSearch = () => {
    fetchReportData(1);
  };

  const handleClearDates = () => {
    setStartDate(dayjs().startOf('day'));
    setEndDate(dayjs().endOf('day'));
    fetchReportData(1);
  };

  const getStatusText = (status) => {
    const statusMap = {
      1: 'Pending',
      2: 'Success',
      3: 'Failed',
      4: 'Refunded',
    };
    return statusMap[status] || 'Unknown';
  };

  const handleExportExcel = async () => {
    try {
      const response = await ledgerReportAll(
        formatDate(startDate),
        formatDate(endDate)
      );

      if (response?.error === false && response?.statusCode === 200) {
        const data = response?.data;

        // Prepare data for Excel
        const excelData = data.map(item => ({
          Date: dayjs(item.txn_date).format('YYYY-MM-DD HH:mm:ss'),
          'Transaction ID': item.txn_id,
          Service: item.service,
          Vender: item.vender,
          State: item.state,
          Amount: parseFloat(item.amount).toFixed(2),
          Charges: parseFloat(item.charges).toFixed(2),
          'Super Distributor Commission': parseFloat(item.master_dist_commission || 0).toFixed(2),
          'Distributor Commission': parseFloat(item.distributor_commission || 0).toFixed(2),
          'Retailer Commission': parseFloat(item.commission || 0).toFixed(2),
          'Our Commission': parseFloat(item.commission || 0).toFixed(2),
          TDS: parseFloat(item.tds).toFixed(2),
          Status: getStatusText(item.status),
        }));

        // Create workbook and worksheet
        const wb = XLSX.utils.book_new();
        const ws = XLSX.utils.json_to_sheet(excelData);

        // Add worksheet to workbook
        XLSX.utils.book_append_sheet(wb, ws, "Ledger Report");

        // Generate Excel file
        XLSX.writeFile(wb, "LedgerReport.xlsx");

        message.success('Excel file downloaded successfully');
      } else {
        throw new Error('Failed to fetch data for Excel export');
      }
    } catch (error) {
      console.error('Error exporting Excel:', error);
      message.error('Failed to export Excel file');
    }
  };

  return (
    <div className="container-fluid py-4">
      <Card className="shadow-sm mb-4" style={{ borderRadius: '10px' }}>
        <Title level={3}>Ledger Report</Title>
        <Form layout="inline" className="mb-3">
          <Form.Item label="Start Date">
            <DatePicker
              value={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </Form.Item>
          <Form.Item label="End Date">
            <DatePicker
              value={endDate}
              onChange={(date) => setEndDate(date)}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" onClick={handleSearch}>
              Search
            </Button>
          </Form.Item>
          <Form.Item>
            <Button onClick={handleClearDates}>
              Clear Dates
            </Button>
          </Form.Item>
        </Form>
      </Card>

      <Card className="shadow-sm" style={{ borderRadius: '10px' }}>
        <Button onClick={handleExportExcel} type="primary">
          Export Excel
        </Button>
        <Table
          columns={columns}
          dataSource={reportData}
          rowKey="_id"
          pagination={pagination}
          loading={isLoading}
          onChange={handleTableChange}
          scroll={{ x: 'max-content' }}
          locale={{
            emptyText: (
              <Empty
                image={Empty.PRESENTED_IMAGE_SIMPLE}
                description="No data available"
              />
            ),
          }}
        />
      </Card>
      <Modal
        title="Commission Details"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        centered
        width={600}
        footer={[
          <Button key="close" onClick={handleCancel}>
            Close
          </Button>
        ]}
      >
        <Card>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Typography.Text strong>Super Distributor Commission:</Typography.Text>
              <Typography.Title level={4}>
                ₹{parseFloat(selectedCommission.master_dist_commission || 0).toFixed(2)}
              </Typography.Title>
            </Col>
            <Col xs={24} sm={12}>
              <Typography.Text strong>Distributor Commission:</Typography.Text>
              <Typography.Title level={4}>
                ₹{parseFloat(selectedCommission.distributor_commission || 0).toFixed(2)}
              </Typography.Title>
            </Col>
            <Col xs={24} sm={12}>
              <Typography.Text strong>Retailer Commission:</Typography.Text>
              <Typography.Title level={4}>
                ₹{parseFloat(selectedCommission.commission || 0).toFixed(2)}
              </Typography.Title>
            </Col>
            <Col xs={24} sm={12}>
              <Typography.Text strong>Our Commission:</Typography.Text>
              <Typography.Title level={4}>
                ₹{parseFloat(selectedCommission.commission || 0).toFixed(2)}
              </Typography.Title>
            </Col>
          </Row>
        </Card>
      </Modal>
    </div>
  );
};

export default LedgerReport;
