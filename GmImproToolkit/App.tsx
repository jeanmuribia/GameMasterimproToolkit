import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NotifierWrapper } from 'react-native-notifier';

import LoginScreen from './components/userComponents/LoginScreen';
import SignupScreen from './components/userComponents/SignupScreen';
import Dashboard from './components/userComponents/Dashboard';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
  <GestureHandlerRootView style={{flex: 1}}>
    <NotifierWrapper>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="Dashboard" component={DashboardScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NotifierWrapper>
  </GestureHandlerRootView>
  );
};

const DashboardScreen: React.FC = () => {
  // Simulate auto login for demonstration
  const username = "JohnDoe";
  return <Dashboard username={username} />;
};

export default App;
