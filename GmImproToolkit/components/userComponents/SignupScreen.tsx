// SignupScreen.tsx

import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SignupScreen: React.FC = () => {
  const navigation = useNavigation();

  const handleSignup = () => {
    // Logique d'inscription avec l'email et le mot de passe
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Signup Screen</Text>
      {/* Champ de texte pour l'email et le mot de passe */}
      <Button title="Signup" onPress={handleSignup} />
      {/* Bouton pour revenir en arrière */}
      <Button title="Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default SignupScreen;
