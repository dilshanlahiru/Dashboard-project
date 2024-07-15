// src/SystemLoadWidget.js
import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';

const SystemLoadWidget = () => {
  const cpuUtilization = 46.2; // Example CPU utilization value
  const gpuUtilization = 92.5; // Example GPU utilization value
  const cpuTemperature = 65; // Example CPU temperature value in Celsius
  const gpuTemperature = 48; // Example GPU temperature value in Celsius

  return (
    <Grid container spacing={2}>
      {/* CPU Utilization Gauge */}
      <Grid item xs={12} sm={6} md={3}>
        <Card sx={{ width: '100%', backgroundColor: '#cccccc', color: 'white' }}>
          <CardContent>
            <Typography variant="h6" gutterBottom style={{ color: 'black' }}>
              CPU Utilization
            </Typography>
            <div style={{ height: '150px' }}>
              <Gauge
                value={cpuUtilization}
                startAngle={-110}
                endAngle={110}
                min={0}
                max={100}
                thickness={22}
                sx={{
                  [`& .${gaugeClasses.valueText}`]: {
                    fontSize: 24,
                    transform: 'translate(0px, 0px)',
                    fill: '#4caf50',
                  },
                }}
                text={({ value, max }) => `${value}%`}
              />
            </div>
          </CardContent>
        </Card>
      </Grid>

      {/* GPU Utilization Gauge */}
      <Grid item xs={12} sm={6} md={3}>
        <Card sx={{ width: '100%', backgroundColor: '#cccccc', color: 'white' }}>
          <CardContent>
            <Typography variant="h6" gutterBottom style={{ color: 'black' }}>
              GPU Utilization
            </Typography>
            <div style={{ height: '150px' }}>
              <Gauge
                value={gpuUtilization}
                startAngle={-110}
                endAngle={110}
                min={0}
                max={100}
                thickness={22}
                sx={{
                  [`& .${gaugeClasses.valueText}`]: {
                    fontSize: 24,
                    transform: 'translate(0px, 0px)',
                    fill: '#4caf50',
                  },
                }}
                text={({ value, max }) => `${value}%`}
              />
            </div>
          </CardContent>
        </Card>
      </Grid>

      {/* CPU Temperature Gauge */}
      <Grid item xs={12} sm={6} md={3}>
        <Card sx={{ width: '100%', backgroundColor: '#cccccc', color: 'white' }}>
          <CardContent>
            <Typography variant="h6" gutterBottom style={{ color: 'black' }}>
              CPU Temperature
            </Typography>
            <div style={{ height: '150px' }}>
              <Gauge
                value={cpuTemperature}
                startAngle={-110}
                endAngle={110}
                min={0}
                max={100}
                thickness={22}
                sx={{
                  [`& .${gaugeClasses.valueText}`]: {
                    fontSize: 24,
                    transform: 'translate(0px, 0px)',
                    fill: '#4caf50',
                  },
                }}
              />
            </div>
          </CardContent>
        </Card>
      </Grid>

      {/* GPU Temperature Gauge */}
      <Grid item xs={12} sm={6} md={3}>
        <Card sx={{ width: '100%', backgroundColor: '#cccccc', color: 'white' }}>
          <CardContent>
            <Typography variant="h6" gutterBottom style={{ color: 'black' }}>
              GPU Temperature
            </Typography>
            <div style={{ height: '150px' }}>
              <Gauge
                value={gpuTemperature}
                startAngle={-110}
                endAngle={110}
                min={0}
                max={100}
                thickness={22}
                sx={{
                  [`& .${gaugeClasses.valueText}`]: {
                    fontSize: 24,
                    transform: 'translate(0px, 0px)',
                    fill: '#4caf50',
                  },
                }}
              />
            </div>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default SystemLoadWidget;
