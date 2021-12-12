import { Request, Response } from 'express';

export const login = (req: Request, res: Response) => {
    res.json({ message: 'endpoint login' });
}

export const register = (req: Request, res: Response) => {
    res.json({ message: 'endpoint register' });
}