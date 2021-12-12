import { Request, Response } from 'express';

export const mail = (req: Request, res: Response) => {
    res.json({ message: 'endpoint mail' });
}