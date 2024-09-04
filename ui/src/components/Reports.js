// src/components/Reports.js
import React, { useState, useEffect } from 'react';
import api from '../api'; // Import the API configuration
import './styles/Reports.css';

function Reports() {
    const [reports, setReports] = useState([]);
    const [newReport, setNewReport] = useState('');

    useEffect(() => {
        // Fetch reports data from the backend
        const fetchReports = async () => {
            try {
                const response = await api.get('/reports');
                setReports(response.data);
            } catch (error) {
                console.error('Error fetching reports data:', error);
            }
        };
        fetchReports();
    }, []);

    const handleAddReport = async () => {
        if (newReport.trim()) {
            try {
                const response = await api.post('/reports', { name: newReport });
                setReports([...reports, response.data]);
                setNewReport('');
            } catch (error) {
                console.error('Error adding report:', error);
            }
        }
    };

    const handleRemoveReport = async (id) => {
        try {
            await api.delete(`/reports/${id}`);
            setReports(reports.filter(report => report.id !== id));
        } catch (error) {
            console.error('Error deleting report:', error);
        }
    };

    return (
        <div className="reports-container">
            <h2>Reports Page</h2>
            <div className="crud-section">
                <input
                    type="text"
                    value={newReport}
                    onChange={(e) => setNewReport(e.target.value)}
                    placeholder="Add new report"
                />
                <button onClick={handleAddReport}>Add Report</button>
            </div>
            <ul>
                {reports.map((report) => (
                    <li key={report.id}>
                        {report.name} <button onClick={() => handleRemoveReport(report.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Reports;
