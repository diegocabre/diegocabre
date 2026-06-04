"use client";

import React, { useState } from 'react';

interface FormData {
    email: string;
    message: string;
}

export const FormContact = () => {
    const [formData, setFormData] = useState<FormData>({
        email: '',
        message: '',
    });

    const [status, setStatus] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('Enviando...');

        const response = await fetch('/api/sendEmail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });


        if (response.status === 200) {
            setStatus('Mensaje enviado con éxito');
            setFormData({ email: '', message: '' }); // Limpiar el formulario
            setTimeout(() => {
                setStatus('');
            }, 3000);
        } else {
            setStatus('Error al enviar el mensaje');
        }
    };

    return (
        <div className="w-full p-8 bg-slate-900/40 backdrop-blur-md border border-slate-800/80 rounded-2xl shadow-2xl space-y-6">
            <h2 className="text-2xl font-extrabold text-white text-center tracking-tight mb-6">
                Contáctame
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                    <label className="block text-sm font-semibold text-slate-300" htmlFor="email">
                        Correo Electrónico
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 bg-slate-950/60 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all font-sans"
                        placeholder="ejemplo@correo.com"
                        required
                    />
                </div>

                <div className="space-y-2">
                    <label className="block text-sm font-semibold text-slate-300" htmlFor="message">
                        Mensaje
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full p-3 bg-slate-950/60 border border-slate-800 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all font-sans"
                        placeholder="Escribe tu mensaje aquí..."
                        required
                    />
                </div>

                <div className="pt-2">
                    <button
                        type="submit"
                        disabled={status === 'Enviando...'}
                        className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white p-3.5 rounded-xl font-bold tracking-wide shadow-lg hover:from-indigo-500 hover:to-violet-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-indigo-500/20 active:scale-[0.98]"
                    >
                        {status === 'Enviando...' ? 'Enviando...' : 'Enviar Mensaje'}
                    </button>
                </div>
            </form>

            {status && (
                <p className={`mt-4 text-center text-sm font-medium ${
                    status.includes('éxito') 
                        ? 'text-green-400' 
                        : status.includes('Error') 
                        ? 'text-red-400' 
                        : 'text-indigo-400 animate-pulse'
                }`}>
                    {status}
                </p>
            )}
        </div>
    );
};



