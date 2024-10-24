import React from 'react';
import UserProfile from '../components/UserProfile';
import NavigationMenu from '../components/NavigationMenu';
import Statistics from '../components/Statistics';
import DashboardLayout from '../components/DashboardLayout';
import { useLocation } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
    const location = useLocation();
    const { user } = location.state || {};

    return (
        <DashboardLayout>
            <NavigationMenu />
            <div className="dashboard-content">
                <UserProfile user={user} />
                <Statistics />
            </div>
        </DashboardLayout>
    );
};

export default Dashboard;
