let reports = [];
let idCounter = 1;

const getReports = () => reports;

const addReport = (reportData) => {
    const newReport = { id: idCounter++, ...reportData };
    reports.push(newReport);
    return newReport;
};

const updateReport = (id, updatedData) => {
    const reportIndex = reports.findIndex(report => report.id === id);
    if (reportIndex === -1) return null;
    reports[reportIndex] = { ...reports[reportIndex], ...updatedData };
    return reports[reportIndex];
};

const deleteReport = (id) => {
    const reportIndex = reports.findIndex(report => report.id === id);
    if (reportIndex === -1) return null;
    return reports.splice(reportIndex, 1)[0];
};

module.exports = { getReports, addReport, updateReport, deleteReport };
