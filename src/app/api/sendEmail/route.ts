import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const INVALID_EMAIL = "Ingresa un correo válido.";
const INVALID_MESSAGE = "El mensaje debe tener entre 10 y 5000 caracteres.";

const ContactSchema = z.object(
  {
    email: z
      .string({ error: INVALID_EMAIL })
      .trim()
      .max(254, { error: INVALID_EMAIL })
      .pipe(z.email({ error: INVALID_EMAIL })),
    message: z
      .string({ error: INVALID_MESSAGE })
      .trim()
      .min(10, { error: INVALID_MESSAGE })
      .max(5000, { error: INVALID_MESSAGE }),
    website: z.string().optional(),
  },
  { error: "Datos inválidos." },
);

// shortcut: sin rate limit (en serverless la memoria no persiste); si llega spam, agregar Vercel Firewall o Upstash.
export async function POST(req: NextRequest) {
  const parsed = ContactSchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues[0].message }, { status: 400 });
  }
  const { email, message, website } = parsed.data;

  // Honeypot lleno: respondemos OK para no darle pistas al bot.
  if (website) return NextResponse.json({ message: "ok" });

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
