import React from 'react';
import { MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '5561985890417';
const DEFAULT_MESSAGE = encodeURIComponent('Olá! Vim pelo site do MechOS e gostaria de tirar algumas dúvidas sobre o sistema de gestão.');

export const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${DEFAULT_MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 group flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl hover:shadow-[0_0_25px_rgba(37,211,102,0.6)] transition-all duration-300 transform hover:scale-105 active:scale-95"
    >
      <div className="relative">
        <MessageCircle className="w-6 h-6 fill-current stroke-none" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full flex items-center justify-center">
          <span className="w-2 h-2 bg-[#25D366] rounded-full animate-ping" />
        </span>
      </div>
      <span className="hidden sm:inline font-bold text-xs sm:text-sm tracking-wide">
        Falar no WhatsApp
      </span>
    </a>
  );
};
