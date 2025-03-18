import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';


const transporter = nodemailer.createTransport({
    host: 'smtp.zoho.com',
    port: 587,
    secure: false,
    auth: {
        user: process.env.user,
        pass: process.env.pass,
    },
});

// Function to handle preflight requests (CORS)
export function OPTIONS() {
    return new Response(null, {
        status: 204,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
        },
    });
}

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        if (!name || !email || !message) {
            return NextResponse.json({ error: 'Missing required fields' }, { 
                status: 400,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                }
            });
        }

        const mailOptions = {
            from: `Abdullah Qasim <${process.env.user}>`,
            to: process.env.user,
            subject: 'Contact Form Submission',
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
            replyTo: email,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: 'Email sent successfully' }, {
            status: 200,
            headers: {
                'Access-Control-Allow-Origin': '*', 
            }
        });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ error: 'Internal server error' }, {
            status: 500,
            headers: {
                'Access-Control-Allow-Origin': '*',
            }
        });
    }
}
