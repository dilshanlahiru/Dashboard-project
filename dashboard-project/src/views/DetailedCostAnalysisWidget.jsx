import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Line, Doughnut } from 'react-chartjs-2';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement);

const DetailedCostAnalysisWidget = () => {
  // Data for Line Chart
  const lineData = {
    labels: ['3/19', '3/26', '4/2', '4/9'],
    datasets: [
      {
        label: 'Burn Rate',
        data: [150, 120, 80, 50],
        fill: true,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  const lineOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  // Data for Doughnut Chart
  const doughnutData = {
    labels: ['ASR', 'MNAZURUESRGROUP'],
    datasets: [
      {
        data: [12.9, 2.44],
        backgroundColor: ['#FF6384', '#36A2EB'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB'],
      },
    ],
  };

  // Data for Costs by Service
  const services = [
    { name: 'Shared App Service Hours - Azure App Service', cost: 21.41 },
    { name: 'VM replicated to Azure - Site Recovery', cost: 12.90 },
    { name: 'Protected Instances - Backup', cost: 2.58 },
    { name: 'Standard IO - Page Blob/Disk (GB) - Geo Redundant', cost: 2.10 },
    { name: 'IP Address Hours - Reserved IP', cost: 1.29 },
    { name: 'Compute Hours - US North Central', cost: 0.92 },
    { name: 'Standard IO - Page Blob/Disk (GB) - Locally Redundant', cost: 0.48 },
    { name: 'Premium Storage - Page Blob/P10 (Units) - US North Central', cost: 0.38 },
    { name: 'Standard IO - Page Blob Write Operation Units (IOPS)', cost: 0.48 },
    { name: 'Azure Endpoints - Traffic Manager', cost: 0.24 },
    { name: 'Standard IO - Block Blob (GB) - Geo Redundant', cost: 0.18 },
    { name: 'Standard IO - Table (GB) - Locally Redundant', cost: 0.15 },
  ];

  return (
    <Container>
      <Row>
        <Col md={8}>
          <Row>
            <Col md={12}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>Burn Rate</Card.Title>
                  <Line data={lineData} options={lineOptions} />
                  <p>Starting Credit: 150 USD</p>
                  <p>Credit Remaining: 106.48 USD</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>Costs by Resource</Card.Title>
                  <Doughnut data={doughnutData} />
                  <p>ASR: 12.90 USD</p>
                  <p>MNAZURUESRGROUP: 2.44 USD</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Costs by Service</Card.Title>
              <p>Total: 43.52 USD</p>
              <ul>
                {services.map((service, index) => (
                  <li key={index}>{service.name}: {service.cost.toFixed(2)} USD</li>
                ))}
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default DetailedCostAnalysisWidget;
