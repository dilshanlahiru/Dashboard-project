// src/components/HardwareUsageWidget.js

import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import '../styles/HardwareUsageWidget.css';

const serversData = {
    'Server 1': {
        storage: { used: 32, free: 17 },
        vCPU: { used: 60, available: 90 },
        ip: { used: 4, available: 76 },
        ram: { used: 870, free: 154 }
    },
    'Server 2': {
        storage: { used: 25, free: 24 },
        vCPU: { used: 50, available: 100 },
        ip: { used: 6, available: 74 },
        ram: { used: 800, free: 200 }
    }
};

const chartOptions = {
    plugins: {
        legend: {
            display: false
        }
    }
};

const HardwareUsageWidget = () => {
    const [selectedServer, setSelectedServer] = useState('Server 1');
    const data = serversData[selectedServer];

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
        <div className="hardware-usage-widget">
            <div className="widget-header">
                <h2>Hardware Usage</h2>
                <select onChange={(e) => setSelectedServer(e.target.value)}>
                    {Object.keys(serversData).map(server => (
                        <option key={server} value={server}>{server}</option>
                    ))}
                </select>
            </div>
            <div className="charts-container">
                <div className="chart-item">
                    <div className="chart-canvas">
                        <Doughnut data={chartData(data.storage.used, data.storage.free)} options={chartOptions} />
                    </div>
                    <div className="chart-details">
                        <h3>Storage</h3>
                        <p>Used Space: {data.storage.used} TB</p>
                        <p>Free Space: {data.storage.free} TB</p>
                    </div>
                </div>
                <div className="chart-item">
                    <div className="chart-canvas">
                        <Doughnut data={chartData(data.vCPU.used, data.vCPU.available)} options={chartOptions} />
                    </div>
                    <div className="chart-details">
                        <h3>vCPU</h3>
                        <p>Utilized Core Count: {data.vCPU.used}</p>
                        <p>Available Core Count: {data.vCPU.available}</p>
                    </div>
                </div>
                <div className="chart-item">
                    <div className="chart-canvas">
                        <Doughnut data={chartData(data.ip.used, data.ip.available)} options={chartOptions} />
                    </div>
                    <div className="chart-details">
                        <h3>IP</h3>
                        <p>Used: {data.ip.used}</p>
                        <p>Available: {data.ip.available}</p>
                    </div>
                </div>
                <div className="chart-item">
                    <div className="chart-canvas">
                        <Doughnut data={chartData(data.ram.used, data.ram.free)} options={chartOptions} />
                    </div>
                    <div className="chart-details">
                        <h3>RAM</h3>
                        <p>Used: {data.ram.used} GB</p>
                        <p>Free: {data.ram.free} GB</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HardwareUsageWidget;