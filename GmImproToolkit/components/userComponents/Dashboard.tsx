import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

export interface DashboardProps {
    username: string;
}

const Dashboard: React.FC<DashboardProps> = ({ username }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Simulate auto login for demonstration
        setIsLoggedIn(true);
    }, []); // Run this effect only once when the component mounts

    if (!isLoggedIn) {
        return null; // Render nothing if not logged in
    }

    return (
        <View>
            <Text>Welcome, {username}!</Text>
            {/* Add your dashboard content here */}
        </View>
    );
};

export default Dashboard;
