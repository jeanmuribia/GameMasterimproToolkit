// models/User.ts
import mongoose, { Document, Schema } from 'mongoose';

// Interface pour représenter un utilisateur dans la base de données
export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
}

// Schéma Mongoose pour le modèle d'utilisateur
const userSchema = new Schema<IUser>({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

// Exporter le modèle d'utilisateur
export default mongoose.model<IUser>('User', userSchema);
