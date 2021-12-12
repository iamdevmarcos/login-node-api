import { Request, Response } from 'express';
import { User } from '../services/User';

export const getAll = async (req: Request, res: Response) => {
    const user = await User.findAll();
    res.json({ user });
}

export const login = async (req: Request, res: Response) => {
    
}

export const register = (req: Request, res: Response) => {
    res.json({ message: 'endpoint register' });
}