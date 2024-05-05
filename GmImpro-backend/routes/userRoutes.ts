// routes/userRoutes.ts
import express, { Request, Response } from 'express';
import User, { IUser } from '../models/User';

const router = express.Router();

// Route pour créer un nouvel utilisateur
router.post('/register', async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;
    const newUser: IUser = new User({ username, email, password });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

export default router;
