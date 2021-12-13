import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

type Props = {
    name: string;
    email: string;
}

export const mail = async (data: Props) => {
    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMPT_PASS
        }
    });

    const message = {
        from: 'nao-responda@imarcos.com',
        to: `${data.email}`,
        subject: 'Activate your account',
        html: `<strong>Hey ${data.name}</strong>, activate your account right now by clicking here`,
        text: `Hey ${data.name}, activate your account right now by clicking here`
    }

    try {
        const mailSent = await transport.sendMail(message);
        console.log(mailSent);
    } catch(error) {
        console.log(error);
    }
}