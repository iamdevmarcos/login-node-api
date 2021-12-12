import { Request, Response } from 'express';
import nodemailer from 'nodemailer';
import * as EmailValidator from 'email-validator';
import dotenv from 'dotenv';

dotenv.config();

export const mail = async (req: Request, res: Response) => {
    const { from, subject, email } = req.body;

    if(from && subject && email) {
        const emailChecked = EmailValidator.validate(from);
        if(emailChecked) {
            const transport = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.SMTP_USER,
                    pass: process.env.SMPT_PASS
                }
            });
        
            const message = {
                from: 'nao-responda@imarcos.com',
                to: 'Marcos Andre <marcosdev.me@gmail.com>',
                replyTo: `${emailChecked}`,
                subject: req.body.subject,
                html: `<strong>${req.body.email}</strong>`,
                text: req.body.email
            }
        
            try {
                const mailSent = await transport.sendMail(message);
                console.log(mailSent);
            } catch(error) {
                console.log(error);
            }
        
            res.json({ success: true });
        } else {
            res.status(401).json({ error: "incorrect email" });
        }
    } else {
        res.status(401).json({ error: "unsent data" });
    }
}