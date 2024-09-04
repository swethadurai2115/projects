import React, { useState, useEffect } from 'react';
import './Reports.css';
const Reports = () => {
    // Step 1: Define the state for reports
    const [reports, setReports] = useState([]);

    // Step 2: Use useEffect to simulate fetching data
    useEffect(() => {
        // Simulate fetching data from an API or define static data
        const fetchedReports = [
            { id: 1, title: 'Monthly Sales', date: '2024-08-31', summary: 'Summary of monthly sales performance' },
            { id: 2, title: 'Customer Feedback', date: '2024-08-25', summary: 'Analysis of customer feedback' },
            { id: 3, title: 'Inventory Status', date: '2024-08-20', summary: 'Current inventory levels and reorder needs' },
        ];
        setReports(fetchedReports);
    }, []); // Empty dependency array ensures this runs only once on mount

    // Step 3: Render the reports in a table
    return (
        <div>
            <h2>Reports</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Date</th>
                        <th>Summary</th>
                    </tr>
                </thead>
                <tbody>
                    {reports.map(report => (
                        <tr key={report.id}>
                            <td>{report.id}</td>
                            <td>{report.title}</td>
                            <td>{new Date(report.date).toLocaleDateString()}</td>
                            <td>{report.summary}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Reports;
