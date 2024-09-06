import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap';
import { FaStore, FaUserTie, FaUsers, FaMoneyBillWave, FaClipboardList, FaExchangeAlt, FaPercentage, FaFileAlt, FaCalculator, FaChartBar,FaIdCard , FaBook } from 'react-icons/fa';
import './Dashboard.css';
import { ledgerReport } from '../../api/login/Login';
import { useNavigate } from 'react-router-dom';

const DashboardCards = ({ count, dasboradData }) => {
  console.log("dasboradData",dasboradData)
  const [activeTab, setActiveTab] = useState('members');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await ledgerReport()
        console.log('ledgerreport report Service Report Data:', data);
      } catch (error) {
        console.error('Error fetching commission service report data:', error);
      }
    };

    fetchData();
  }, []);

  const memberCards = [
    { icon: <FaUsers />, color: '#FFA500', navigateTo: '/member-list' },
    { icon: <FaUsers />, color: '#32CD32', navigateTo: '/member-list' },
    { icon: <FaUserTie />, color: '#9370DB', navigateTo: '/member-list' },
  ];
  const transactionCards = [
    { icon: <FaMoneyBillWave />, color: '#3498db', title: 'Domestic Money Transfer', data: dasboradData?.dmt?.success|| 0,  },
    { icon: <FaClipboardList />, color: '#2ecc71', title: 'Total Fund Requests Received', data: dasboradData?.paymentRequest?.totalAmount || 0,  },
    { icon: <FaExchangeAlt />, color: '#1abc9c', title: 'Total Fund Transfer', data: dasboradData?.paymentTransfer || 0,  },
    { icon: <FaPercentage />, color: '#8e44ad', title: 'Total Commission', data: dasboradData?.totalCommission || 0,  },
    { icon: <FaIdCard />, color: '#e74c3c', title: 'KYC Pending', data: dasboradData?.userKycPending?.totalAmount || 0 }, 
  ];

  const reportCards = [
    { icon: <FaFileAlt />, color: '#f39c12', title: 'Commission Report', navigateTo: '/business-report' },
    { icon: <FaCalculator />, color: '#d35400', title: 'TDS Report', navigateTo: '/tds-report' },
    { icon: <FaChartBar />, color: '#16a085', title: 'Charge Report', navigateTo: '/charge-report' },
    { icon: <FaBook />, color: '#2980b9', title: 'Ledger Report', navigateTo: '/ledger-report' }, // New Ledger Report Card
  ];

  const renderCards = (cardData, items) => {
    return (
      <Row className="g-4">
        {items.map((item, index) => {
          const card = cardData[index % cardData.length];
  
          return (
            <Col key={index} xs={12} sm={6} md={4} lg={4} className="mb-4">
              <div 
                className="dashboard-card" 
                style={{ backgroundColor: card?.color }}
                onClick={() => {
                  if (card?.navigateTo === '/member-list') {
                    navigate(`${card?.navigateTo}/${item?._id}/${encodeURIComponent(item?.memeberType)}`);
                  } else {
                    navigate(card?.navigateTo);
                  }
                }}
              >
                <div className="icon-wrapper">
                  {React.cloneElement(card?.icon, { className: 'card-icon' })}
                </div>
                <div className="card-content">
                  <h2 className="card-count">{item?.count || card.data || 0}</h2>
                  <p className="card-title">{item?.memeberType || card.title || 'Unknown'}</p>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    );
  };

  return (
    <Container fluid className="mt-1">
      <Tabs
        activeKey={activeTab}
        onSelect={(k) => setActiveTab(k)}
        className="mb-3 dashboard-tabs"
      >
        <Tab eventKey="members" title="Member Statistics">
          {count && count.length > 0 ? renderCards(memberCards, count) : <p>No member data available</p>}
        </Tab>
        <Tab eventKey="transactions" title="Transaction Statistics">
          {renderCards(transactionCards, transactionCards)}
        </Tab>
        <Tab eventKey="reports" title="Report Statistics">
          {renderCards(reportCards, reportCards)}
        </Tab>
      </Tabs>
    </Container>
  );
};

export default DashboardCards;