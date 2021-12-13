import { Request, Response } from 'express';
import { User } from '../services/User';
import * as EmailValidator from 'email-validator';
import * as EmailController from './email.controller';
import { generateToken } from '../config/passport';

export const getAll = async (req: Request, res: Response) => {
    const user = await User.findAll();
    res.json({ user });
}

export const login = async (req: Request, res: Response) => {
    if(req.body.email && req.body.password) {
        const email: string = req.body.email;
        const password: string = req.body.password;

        const emailChecked = EmailValidator.validate(email);
        
        if(emailChecked) {
            const user = await User.findOne({email, password});

            if(user) {
                const token = generateToken({ id: user.id });
                res.json({ status: true, token });
                return;
            }
        } else {
            res.json({ error: "incorrect email" });
        }
    }

    res.json({ status: false });
}

export const register = async (req: Request, res: Response) => {
    if(req.body.name && req.body.email && req.body.password) {
        const { name, email, password } = req.body;

        const emailChecked = EmailValidator.validate(email);
        
        if(emailChecked) {
            const hasUser = await User.findByEmail(email);

            if(!hasUser) {
                const newUser = await User.create({name, email, password});
                const token = generateToken({ id: newUser.id });
                await EmailController.mail({name, email});

                res.status(201).json({ status: true, user: newUser.id, token });
            } else {
                res.json({ error: "email is already being used" });
            }
        } else {
            res.json({ error: "incorrect email" });
        }
    }

    res.json({ error: 'unset data' });
}