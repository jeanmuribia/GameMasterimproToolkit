import React, { useState } from 'react';
import { Text, TouchableHighlight, View, StyleSheet, TextInput } from 'react-native';
import AuthService from './AuthService'; // Make sure the path is correct
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigation } from '@react-navigation/native';

const LoginScreen: React.FC = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await AuthService.login(email, password);
      toast.success('Login Successful', { position: "bottom-left" });
      
      const params: { username: string } = { username: email }; // Create params object
      
      navigation.navigate('Dashboard', params); // Pass params to navigation.navigate
    } catch (error) {
      console.error(error);
      toast.error('Username or password is incorrect', { position: "bottom-left" });
    }
  };

  return (
    <View style={styles.centeredView}>
      <ToastContainer />
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
      <TouchableHighlight>
        <Text style={styles.textStyle} 
              onPress={() => navigation.navigate('Signup')}> Don't have an account? Sign up
        </Text>
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
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
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
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
  },
});

export default LoginScreen;