import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import LoginScreen from './components/userComponents/LoginScreen';
import SignupScreen from './components/userComponents/SignupScreen';
import Dashboard from './components/userComponents/Dashboard';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="Dashboard" component={DashboardScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  )    
};

const DashboardScreen: React.FC = () => {
  // Simulate auto login for demonstration
  const username = "JohnDoe";
  return <Dashboard username={username} />;
};

export default App;
