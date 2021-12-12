import { Request, Response } from 'express';
import { User } from '../services/User';

export const getAll = async (req: Request, res: Response) => {
    const user = await User.findAll();
    res.json({ user });
}

export const login = async (req: Request, res: Response) => {
    if(req.body.email && req.body.password) {
        const email: string = req.body.email;
        const password: string = req.body.password;

        const user = await User.findOne({email, password});

        if(user) {
            console.log("user", user);
            res.json({ status: true });
            return;
        }
    }

    res.json({ status: false });
}

export const register = async (req: Request, res: Response) => {
    if(req.body.name && req.body.email && req.body.password) {
        const { name, email, password } = req.body;

        const hasUser = await User.findByEmail(email);
        if(!hasUser) {
            const newUser = await User.create({name, email, password});

            res.status(201).json({ status: true, user: newUser });
        }
    }

    res.json({ error: 'Dados não enviados.' });
}