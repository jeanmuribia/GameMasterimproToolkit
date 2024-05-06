import React, { useState } from 'react';
import { View, Text, Button, TextInput, Alert } from 'react-native';
import AuthService from './AuthService';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const SignupScreen: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSignup = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password.');
      return;
    }

    const success = await AuthService.signup(email, password);
    if (success) {
      Alert.alert('Success', 'Account created successfully.');
      // Peut-être rediriger l'utilisateur vers une autre page ou effectuer une autre action après l'inscription réussie
    } else {
      Alert.alert('Error', 'Failed to create account. Please try again.');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Signup Screen</Text>
      <TextInput
        style={{ height: 40, width: '40%', borderColor: 'gray', borderWidth: 1, marginVertical: 10 }}
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={{ height: 40, width: '80%', borderColor: 'gray', borderWidth: 1, marginVertical: 10 }}
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
        secureTextEntry
      />
      <Button title="Signup" onPress={handleSignup} />
    </View>
  );
};

export default SignupScreen;
