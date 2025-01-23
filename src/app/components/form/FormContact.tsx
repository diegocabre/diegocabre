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
        <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">Contáctame</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-lg font-medium mb-2" htmlFor="email">
                        Correo Electrónico
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Tu correo electrónico"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-lg font-medium mb-2" htmlFor="message">
                        Mensaje
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Escribe tu mensaje"
                        required
                    />
                </div>

                <div className="text-center">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                        Enviar
                    </button>
                </div>
            </form>

            {status && <p className="mt-4 text-center">{status}</p>}
        </div>
    );
};



