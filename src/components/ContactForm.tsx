"use client";

import { useState } from "react";
import { PiCheckCircle, PiWarningCircle } from "react-icons/pi";

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "w-full rounded-[10px] border border-line bg-bg px-3.5 py-3 text-fg placeholder:text-muted/80 transition-colors duration-150 focus:border-accent focus:outline-none";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "No se pudo enviar el mensaje.");
      }
      form.reset();
      setStatus("sent");
    } catch (err) {
      setError(err instanceof Error ? err.message : "No se pudo enviar el mensaje.");
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-line bg-surface p-6 sm:p-8">
      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium">
          Tu correo
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          maxLength={254}
          autoComplete="email"
          placeholder="nombre@empresa.cl"
          className={field}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-medium">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          maxLength={5000}
          rows={5}
          placeholder="Cuéntame sobre la vacante o el proyecto"
          className={`${field} resize-y`}
        />
      </div>

      {/* Honeypot: los bots lo llenan, las personas no lo ven. */}
      <div aria-hidden className="absolute -left-[9999px]">
        <label htmlFor="website">No completar</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="neon w-full rounded-[10px] bg-accent px-5 py-3 font-medium text-accent-ink transition-[filter,transform] duration-150 ease-out hover:brightness-110 active:scale-[0.98] disabled:cursor-wait disabled:opacity-70"
      >
        {status === "sending" ? "Enviando..." : "Enviar mensaje"}
      </button>

      <p aria-live="polite" className="min-h-6 text-sm">
        {status === "sent" && (
          <span className="inline-flex items-center gap-2">
            <PiCheckCircle className="size-5 text-accent" />
            Mensaje enviado. Te respondo pronto.
          </span>
        )}
        {status === "error" && (
          <span className="inline-flex items-center gap-2 text-red-600 dark:text-red-400">
            <PiWarningCircle className="size-5" />
            {error}
          </span>
        )}
      </p>
    </form>
  );
}
