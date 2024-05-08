import React, { useState } from 'react';
import { Text, TouchableHighlight, View, StyleSheet, TextInput } from 'react-native';
import { Notifier, NotifierComponents } from 'react-native-notifier';
import AuthService from './AuthService'; // Make sure the path is correct
import { useNavigation } from '@react-navigation/native';

const LoginScreen: React.FC = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await AuthService.login(email, password);
      Notifier.showNotification({
        title: 'Login Successful',
        description: 'You have successfully logged in.',
        Component: NotifierComponents.Alert,
        componentProps: {
          alertType: 'success',
        },
      });
      
      navigation.navigate('Dashboard', { username: email });
    } catch (error) {
      console.error(error);
      Notifier.showNotification({
        title: 'Login Failed',
        description: 'Username or password is incorrect',
        Component: NotifierComponents.Alert,
        componentProps: {
          alertType: 'error',
        },
      });
    }
  };

  return (
    <View style={styles.centeredView}>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
        secureTextEntry
      />
      <TouchableHighlight
        style={styles.openButton}
        onPress={handleLogin}
      >
        <Text style={styles.textStyle}>Login</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.textStyle}>Don't have an account? Sign up</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default LoginScreen;
