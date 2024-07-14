import React from 'react';
import { Container, Row, Col, ProgressBar } from 'react-bootstrap';
import { Box, Typography } from '@mui/material';
import computinguniticon from '../images/computinguniticon.png';
import networkingicon from '../images/networkingicon.png';
import storageicon from '../images/storageicon.png';

const SystemStateWidget = () => {
  const computeUnits = { inUse: 8, available: 25, reserved: 0 };
  const networking = { inUse: 6, standby: 3, available: 1 };
  const storage = { inUsePercent: 40, availablePercent: 56, reservedPercent: 4 };

  return (
    <Container >
      <Row>
        <Col>
          <Box textAlign="center" >
            <Typography variant="h6">Compute Units</Typography>
            <img src={computinguniticon} alt="Compute" />
            <Typography>8 In Use</Typography>
            <Typography>25 Available</Typography>
            <ProgressBar>
              <ProgressBar variant="success" now={computeUnits.inUse} key={1} />
              <ProgressBar variant="warning" now={computeUnits.reserved} key={2} />
              <ProgressBar variant="info" now={computeUnits.available} key={3} />
            </ProgressBar>
          </Box>
        </Col>
        <Col>
          <Box textAlign="center">
            <Typography variant="h6">Networking</Typography>
            <img src={networkingicon} alt="Networking" />
            <Typography>6 In Use</Typography>
            <Typography>3 In Standby</Typography>
            <ProgressBar>
              <ProgressBar variant="success" now={networking.inUse} key={1} />
              <ProgressBar variant="warning" now={networking.standby} key={2} />
              <ProgressBar variant="info" now={networking.available} key={3} />
            </ProgressBar>
          </Box>
        </Col>
        <Col>
          <Box textAlign="center">
            <Typography variant="h6">Storage & Data</Typography>
            <img src={storageicon} alt="Storage" />
            <Typography>40% In Use</Typography>
            <Typography>56% Available</Typography>
            <ProgressBar>
              <ProgressBar variant="success" now={storage.inUsePercent} key={1} />
              <ProgressBar variant="warning" now={storage.reservedPercent} key={2} />
              <ProgressBar variant="info" now={storage.availablePercent} key={3} />
            </ProgressBar>
          </Box>
        </Col>
      </Row>
    </Container>
  );
};

export default SystemStateWidget;
