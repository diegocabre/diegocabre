import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

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
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      // Sin dominio verificado en Resend solo funciona onboarding@resend.dev, y solo hacia el correo de tu cuenta.
      from: process.env.EMAIL_FROM || "Portfolio <onboarding@resend.dev>",
      to: process.env.EMAIL_TO!,
      replyTo: email,
      subject: `Portfolio: mensaje de ${email}`,
      text: `Correo: ${email}\n\n${message}`,
    });
    if (error) throw error;

    return NextResponse.json({ message: "Correo enviado correctamente" });
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    return NextResponse.json({ error: "No se pudo enviar el mensaje. Escríbeme directo por correo." }, { status: 500 });
  }
}
