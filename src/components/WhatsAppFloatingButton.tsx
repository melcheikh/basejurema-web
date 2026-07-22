"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppFloatingButton() {
  const whatsappUrl = "https://api.whatsapp.com/send?phone=5527999310057&text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20os%20passeios%20de%20Canoa%20Havaiana%20na%20Base%20Jurema!";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-5 py-3.5 rounded-full bg-[#CFF726] hover:bg-[#DBFF3D] text-[#0D1309] font-black text-xs sm:text-sm shadow-2xl hover:scale-105 transition-all group border-2 border-[#0D1309]"
      title="Falar diretamente no WhatsApp da Base Jurema"
    >
      <span className="relative flex h-3.5 w-3.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0D1309] opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#0D1309]"></span>
      </span>
      <MessageCircle className="w-5 h-5 fill-[#0D1309] text-[#CFF726]" />
      <span className="hidden sm:inline">Dúvidas? Fale Conosco</span>
    </a>
  );
}
