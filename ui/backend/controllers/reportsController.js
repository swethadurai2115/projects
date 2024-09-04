// controllers/reportsController.js
let reports = [
    { id: 1, title: 'Report 1' },
    { id: 2, title: 'Report 2' },
];

// Get all reports
exports.getAllReports = (req, res) => {
    res.json(reports);
};

// Get a report by ID
exports.getReportById = (req, res) => {
    const report = reports.find(r => r.id === parseInt(req.params.id));
    if (!report) return res.status(404).json({ message: 'Report not found' });
    res.json(report);
};

// Create a new report
exports.createReport = (req, res) => {
    const newReport = {
        id: reports.length + 1,
        title: req.body.title,
    };
    reports.push(newReport);
    res.status(201).json(newReport);
};

// Update a report
exports.updateReport = (req, res) => {
    const report = reports.find(r => r.id === parseInt(req.params.id));
    if (!report) return res.status(404).json({ message: 'Report not found' });
    
    report.title = req.body.title || report.title;
    res.json(report);
};

// Delete a report
exports.deleteReport = (req, res) => {
    reports = reports.filter(r => r.id !== parseInt(req.params.id));
    res.status(204).end();
};
