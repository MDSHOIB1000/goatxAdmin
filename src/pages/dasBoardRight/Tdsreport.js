import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Form, DatePicker, Typography, Button, Empty, message } from 'antd';
import dayjs from 'dayjs';
import { tdsServiceByReport } from '../../api/login/Login';
import './Dashboard.css';

const { Title } = Typography;

const TdsReport = () => {
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
      const response = await tdsServiceByReport(
        start ? formatDate(start) : null,
        end ? formatDate(end) : null
      );
      setReportData(response.data);
    } catch (error) {
      console.error('Error fetching TDS report data:', error);
      setReportData(null);
      message.error('Failed to fetch TDS report data');
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (date) => {
    return date ? date.format('YYYY-MM-DD') : null;
  };

  const getGradientColor = () => {
    const gradients = [
      'linear-gradient(135deg, #43cea2 0%, #185a9d 100%)',
      'linear-gradient(135deg, #ff6e7f 0%, #bfe9ff 100%)',
      'linear-gradient(135deg, #c79081 0%, #dfa579 100%)',
      'linear-gradient(135deg, #7f7fd5 0%, #86a8e7 50%, #91eae4 100%)',
      'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
      'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    ];
    return gradients[Math.floor(Math.random() * gradients.length)];
  };

  const renderServiceCard = (serviceName, data) => (
    <Col xs={24} sm={12} md={8} lg={6} className="mb-4" key={serviceName}>
      <Card
        className="h-100 service-card"
        style={{ 
          background: getGradientColor(),
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
          ₹{(data?.total_tds || 0).toFixed(2)}
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

    return (
      <Row gutter={[16, 16]}>
        {renderServiceCard('DMT', reportData.dmt)}
        {renderServiceCard('AEPS', reportData.aeps)}
        {renderServiceCard('Aadhaar Pay', reportData.adhaarPay)}
        {renderServiceCard('CMS', reportData.cms)}
        {renderServiceCard('Quick Dhan', reportData.quickDhan)}
        {reportData.bbps && reportData.bbps.map((bbpsService) => 
          renderServiceCard(bbpsService.service_name, bbpsService)
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

export default TdsReport;