import React from 'react';
import './DashboardLayout.css';

const DashboardLayout = ({ children }) => {
    return (
        <div className="dashboard-layout">
            {children}
        </div>
    );
};

export default DashboardLayout;
