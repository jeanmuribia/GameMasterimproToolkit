import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../../firebaseConfig"; // Importez le fichier firebaseConfig.ts et utilisez-le pour récupérer l'objet app

// Récupérer l'objet authentification Firebase
const auth = getAuth(app);

class AuthService {
  signup = async (email: string, password: string) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      return true; // Succès de l'inscription
    } catch (error) {
      console.error('Error signing up:', error);
      return false; // Échec de l'inscription
    }
  };

  async login(email: string, password: string) {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return userCredential.user;
    } catch (error) {
      console.error('Error logging in:', error);
      throw new Error('Login failed');
    }
  };

  logout = async () => {
    try {
      await signOut(auth);
      return true; // Succès de la déconnexion
    } catch (error) {
      console.error('Error signing out:', error);
      return false; // Échec de la déconnexion
    }
  };
}

export default new AuthService();
