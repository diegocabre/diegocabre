import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const { email, message } = await req.json();

    if (!email || !message) {
      return NextResponse.json({ error: 'Por favor, completa todos los campos.' }, { status: 400 });
    }

    // Configuración de transporte para Nodemailer con autenticación de Gmail
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,  // Puerto de STARTTLS
      secure: false,  // Usar STARTTLS
      auth: {
        user: process.env.EMAIL_USER, // Asegúrate de que la variable esté correctamente configurada
        pass: process.env.EMAIL_PASS, // Usa la contraseña de la app si tienes 2FA activado
      },
    });

    const mailOptions = {
      from: email,
      to: 'dcabrempresa@gmail.com',  // Tu correo de destino
      subject: 'Nuevo mensaje desde el formulario de contacto',
      text: `Correo: ${email}\nMensaje: ${message}`,
    };

    // Enviar el correo
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Correo enviado correctamente' });
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    return NextResponse.json({ error: 'Hubo un error al enviar el correo.' }, { status: 500 });
  }
}
