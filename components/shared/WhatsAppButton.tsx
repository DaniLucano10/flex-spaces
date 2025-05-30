'use client';

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const phoneNumber = '+51954101100'; // Reemplaza con tu número real
  const message = 'Hola, me gustaría más información.';
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Enviar mensaje por WhatsApp"
      className="fixed bottom-4 right-4 z-50 bg-green-500 hover:bg-green-600 text-white p-2 rounded-full shadow-lg transition"
    >
      <FaWhatsapp size={40} />
    </a>
  );
};

export default WhatsAppButton;
