import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Form, DatePicker, Typography, Button, Empty, message } from 'antd';
import dayjs from 'dayjs';
import { chargeServiceByReport } from '../../api/login/Login';
import './Dashboard.css';

const { Title } = Typography;

const ChargeReport = () => {
  const [reportData, setReportData] = useState(null);
  const [startDate, setStartDate] = useState(dayjs().startOf('day'));
  const [endDate, setEndDate] = useState(dayjs().endOf('day'));
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchReportData(startDate, endDate);
  }, []);

  const fetchReportData = async (start = null, end = null) => {
    setIsLoading(true);
    try {
      const response = await chargeServiceByReport(
        start ? formatDate(start) : null,
        end ? formatDate(end) : null
      );
      setReportData(response.data);
    } catch (error) {
      console.error('Error fetching charge report data:', error);
      setReportData(null);
      message.error('Failed to fetch charge report data');
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (date) => {
    return date ? date.format('YYYY-MM-DD') : null;
  };

  const getCardColor = (index) => {
    const colors = [
      '#4CAF50', // Green
      '#2196F3', // Blue
      '#FFC107', // Amber
      '#FF5722', // Deep Orange
      '#9C27B0', // Purple
      '#00BCD4', // Cyan
      '#795548', // Brown
      '#607D8B', // Blue Grey
      '#E91E63', // Pink
      '#3F51B5', // Indigo
    ];
    return colors[index % colors.length];
  };

  const renderServiceCard = (serviceName, charge, index) => (
    <Col xs={24} sm={12} md={8} lg={6} className="mb-4" key={serviceName}>
      <Card
        className="h-100 service-card"
        style={{ 
          backgroundColor: getCardColor(index),
          borderRadius: '15px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          overflow: 'hidden',
        }}
        bodyStyle={{
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100%',
        }}
      >
        <Title level={4} style={{ color: 'white', marginBottom: '15px' }}>{serviceName}</Title>
        <Title level={3} style={{ color: 'white', marginTop: 'auto', marginBottom: 0 }}>
          ₹{(charge || 0).toFixed(2)}
        </Title>
      </Card>
    </Col>
  );

  const handleSearch = () => {
    fetchReportData(startDate, endDate);
  };

  const handleClearDates = () => {
    setStartDate(null);
    setEndDate(null);
    fetchReportData(null, null);
  };

  const disableFutureDate = (current) => {
    return current && current > dayjs().endOf('day');
  };

  const renderContent = () => {
    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (!reportData || Object.keys(reportData).length === 0) {
      return <Empty description="No data present" />;
    }

    let index = 0;
    return (
      <Row gutter={[16, 16]}>
        {renderServiceCard('DMT', reportData.dmt, index++)}
        {renderServiceCard('AEPS', reportData.aeps, index++)}
        {renderServiceCard('Aadhaar Pay', reportData.adhaarPay, index++)}
        {renderServiceCard('CMS', reportData.cms, index++)}
        {renderServiceCard('Quick Dhan', reportData.quickDhan, index++)}
        {reportData.bbps && reportData.bbps.map((bbpsService) => 
          renderServiceCard(bbpsService.service_name, bbpsService.charge, index++)
        )}
      </Row>
    );
  };

  return (
    <div className="container-fluid py-4">
      <Row className="mb-4">
        <Col span={24}>
          <Card className="shadow-sm" style={{ borderRadius: '10px' }}>
            <Form layout="inline">
              <Form.Item label="Start Date">
                <DatePicker
                  value={startDate}
                  onChange={(date) => setStartDate(date)}
                  disabledDate={disableFutureDate}
                />
              </Form.Item>
              <Form.Item label="End Date">
                <DatePicker
                  value={endDate}
                  onChange={(date) => setEndDate(date)}
                  disabledDate={disableFutureDate}
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
        </Col>
      </Row>

      {renderContent()}
    </div>
  );
};

export default ChargeReport;