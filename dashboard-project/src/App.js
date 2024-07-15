
// import logo from './logo.svg';
import './App.css';
// eslint-disable-next-line
import HardwareUsageWidget from './views/HardwareUsageWidget';
// eslint-disable-next-line
import TestingViewComponet from './views/TestingViewCompnent';
// eslint-disable-next-line
import ResponseTimeWidget from './views/ResponseTimeWidget';
// eslint-disable-next-line
import CpuUtilizationWidget from './views/CpuUtilizationWidget';
// eslint-disable-next-line
import CostAnalysisWidget from './views/CostAnalysisWidget';
// eslint-disable-next-line
import SystemStateWidget from './views/SystemStateWidget';
// eslint-disable-next-line
import RealTimeUtilizationWidget from './views/RealTimeUtilizationWidget';
// eslint-disable-next-line
import SystemLoadWidget from './views/SystemLoadWidget';
// eslint-disable-next-line
import DetailedCostAnalysisWidget from './views/DetailedCostAnalysisWidget';

import { Container, Grid, Box, Typography } from '@mui/material';

function App() {
  return (
    <Container>
    {/* Header */}
    <Box sx={{ bgcolor: 'primary.main', color: 'white', p: 2, mb: 2 }}>
      <Typography variant="h4">DashBoard Sample 1</Typography>
    </Box>

    {/* System Usage */}
    <Box sx={{ mb: 2 }}>
      <Typography variant="h6" gutterBottom>
        System Usage
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <HardwareUsageWidget />
        </Grid>
        <Grid item xs={12} md={6} sx={{ mt: 10 }}>
          <SystemLoadWidget />
        </Grid>
      </Grid>
    </Box>

    {/* Real Time Utilization Widget */}
    <Box sx={{ mb: 2 }}>
      <Typography variant="h6" gutterBottom>
        Real TimeUtilization 
      </Typography>
      <Box sx={{ border: '1px solid black', p: 2 }}>
        <RealTimeUtilizationWidget />
      </Box>
    </Box>

    {/* Detailed Cost Analysis Widget */}
    <Box sx={{ mb: 2 }}>
      <Typography variant="h6" gutterBottom>
        Detailed Cost Analysis
      </Typography>
      <Box sx={{ border: '1px solid black', p: 2 }}>
        <DetailedCostAnalysisWidget />
      </Box>
    </Box>
  </Container>
  );
}

export default App;
