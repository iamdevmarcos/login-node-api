import { Request, Response } from 'express';
import nodemailer from 'nodemailer';

export const mail = async (req: Request, res: Response) => {
    const { from, subject, email } = req.body;

    if(from && subject && email) {
        const transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'themindsetispowerfull@gmail.com',
                pass: 'mindset6813fc!@$'
            }
        });
    
        const message = {
            from: 'nao-responda@imarcos.com',
            to: 'marcosdev.me@gmail.com',
            replyTo: req.body.from,
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
        res.status(401).json({ error: "unsent data" });
    }
}