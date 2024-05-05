// LoginScreen.tsx

import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen: React.FC = () => {
  const navigation = useNavigation();

  const handleSignupModal = () => {
    navigation.navigate('Signup', { screen: 'Signup', params: { isModal: true } });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Login Screen</Text>
      {/* Bouton pour ouvrir Signup en tant que modal */}
      <Button title="Signup" onPress={handleSignupModal} />
    </View>
  );
};

export default LoginScreen;
