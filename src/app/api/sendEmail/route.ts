import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const EMAIL_RE = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/;

// shortcut: sin rate limit (en serverless la memoria no persiste); si llega spam, agregar Vercel Firewall o Upstash.
export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const email = typeof body?.email === "string" ? body.email.trim() : "";
  const message = typeof body?.message === "string" ? body.message.trim() : "";

  // Honeypot lleno: respondemos OK para no darle pistas al bot.
  if (body?.website) return NextResponse.json({ message: "ok" });

  if (!EMAIL_RE.test(email) || email.length > 254) {
    return NextResponse.json({ error: "Ingresa un correo válido." }, { status: 400 });
  }
  if (message.length < 10 || message.length > 5000) {
    return NextResponse.json({ error: "El mensaje debe tener entre 10 y 5000 caracteres." }, { status: 400 });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      replyTo: email,
      subject: `Portfolio: mensaje de ${email}`,
      text: `Correo: ${email}\n\n${message}`,
    });

    return NextResponse.json({ message: "Correo enviado correctamente" });
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    return NextResponse.json({ error: "No se pudo enviar el mensaje. Escríbeme directo por correo." }, { status: 500 });
  }
}
