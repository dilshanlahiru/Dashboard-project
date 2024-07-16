import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import { Box, MenuItem, Select, Typography, Grid, Card, CardContent } from '@mui/material';

const serversData = {
    'Server 1': {
        metadata: {
            id: 'server1',
            name: 'Server 1',
            location: 'US-East',
            ip: '192.168.1.1',
            status: 'active'
        },
        resources: {
            storage: { total: 50, used: 32, free: 18 },
            vCPU: { total: 150, used: 60, available: 90 },
            ip: { total: 80, used: 4, available: 76 },
            ram: { total: 1024, used: 870, free: 154 }
        },
        performance: {
            cpuUsage: '75%',
            memoryUsage: '85%',
            diskIO: '120 MB/s',
            networkIO: '1 Gbps'
        }
    },
    'Server 2': {
        metadata: {
            id: 'server2',
            name: 'Server 2',
            location: 'US-West',
            ip: '192.168.1.2',
            status: 'active'
        },
        resources: {
            storage: { total: 50, used: 25, free: 25 },
            vCPU: { total: 150, used: 50, available: 100 },
            ip: { total: 80, used: 6, available: 74 },
            ram: { total: 1000, used: 800, free: 200 }
        },
        performance: {
            cpuUsage: '65%',
            memoryUsage: '80%',
            diskIO: '100 MB/s',
            networkIO: '900 Mbps'
        }
    }
};

const chartOptions = (handleClick) => ({
    plugins: {
        legend: {
            display: false
        }
    },
    onClick: handleClick
});

const HardwareUsageWidget = () => {
    const [selectedServer, setSelectedServer] = useState('Server 1');
    const data = serversData[selectedServer].resources;

    const handleChartClick = (event, elements) => {
        if (elements.length > 0) {
            const chartElement = elements[0];
            const label = chartElement.element.$context.raw;
            console.log(`Clicked on: ${label}`);
            alert(`Clicked on: ${label}`);
        }
    };

    const chartData = (used, free) => ({
        datasets: [
            {
                data: [used, free],
                backgroundColor: ['#FF6384', '#36A2EB'],
                hoverOffset: 4
            }
        ],
        labels: ['Used', 'Free']
    });

    return (
        <Box sx={{ padding: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant="h4">Hardware Usage</Typography>
                <Select value={selectedServer} onChange={(e) => setSelectedServer(e.target.value)}>
                    {Object.keys(serversData).map(server => (
                        <MenuItem key={server} value={server}>{server}</MenuItem>
                    ))}
                </Select>
            </Box>
            <Grid container spacing={2} alignItems="stretch">
                <Grid item xs={12} sm={6} md={3}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                                <Doughnut data={chartData(data.storage.used, data.storage.free)} options={chartOptions(handleChartClick)} />
                            </Box>
                            <Typography variant="h6" align="center">Storage</Typography>
                            <Typography align="center">Used Space: {data.storage.used} TB</Typography>
                            <Typography align="center">Free Space: {data.storage.free} TB</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                                <Doughnut data={chartData(data.vCPU.used, data.vCPU.available)} options={chartOptions(handleChartClick)} />
                            </Box>
                            <Typography variant="h6" align="center">vCPU</Typography>
                            <Typography align="center">Utilized Core Count: {data.vCPU.used}</Typography>
                            <Typography align="center">Available Core Count: {data.vCPU.available}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                                <Doughnut data={chartData(data.ip.used, data.ip.available)} options={chartOptions(handleChartClick)} />
                            </Box>
                            <Typography variant="h6" align="center">IP</Typography>
                            <Typography align="center">Used: {data.ip.used}</Typography>
                            <Typography align="center">Available: {data.ip.available}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Card sx={{ height: '100%' }}>
                        <CardContent>
                            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                                <Doughnut data={chartData(data.ram.used, data.ram.free)} options={chartOptions(handleChartClick)} />
                            </Box>
                            <Typography variant="h6" align="center">RAM</Typography>
                            <Typography align="center">Used: {data.ram.used} GB</Typography>
                            <Typography align="center">Free: {data.ram.free} GB</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default HardwareUsageWidget;
