import React from 'react';
import './UserProfile.css';

const UserProfile = ({ user }) => {
    if (!user) {
        return <p>Loading user data...</p>;
    }

    return (
        <div className="user-profile">
            <img src={user.picture} alt="Profile" className="profile-pic" />
            <h2>{user.name}</h2>
            <p>{user.email}</p>
        </div>
    );
};

export default UserProfile;
