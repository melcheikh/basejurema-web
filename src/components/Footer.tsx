"use client";

import { MapPin, Phone, Mail, Instagram, Facebook, Clock, Navigation, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer id="localizacao" className="relative z-10 bg-[#FFFFFF] border-t-4 border-[#0D1309] pt-16 pb-8 text-[#0D1309] text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Col 1 */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🛶</span>
              <span className="text-xl font-black text-[#0D1309] tracking-tight">
                BASE <span className="bg-[#CFF726] px-2 py-0.5 rounded-lg border border-[#0D1309]">JUREMA</span>
              </span>
            </div>
            <p className="text-xs text-[#2E3827] font-semibold leading-relaxed">
              Escola e Operadora de Canoa Havaiana (Va'a) na Curva da Jurema, Vitória - ES. Conectando você ao mar com saúde, sincronia e momentos inesquecíveis desde 2021.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/basejurema/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-[#CFF726] text-[#0D1309] hover:bg-[#DBFF3D] transition-all border-2 border-[#0D1309]"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/basejurema/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-[#CFF726] text-[#0D1309] hover:bg-[#DBFF3D] transition-all border-2 border-[#0D1309]"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2 */}
          <div className="space-y-3">
            <h4 className="text-[#0D1309] font-black text-sm uppercase tracking-wider">Horários de Remada</h4>
            <ul className="space-y-2 text-xs font-bold text-[#0D1309]">
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#0D1309]" />
                <span><strong>Nascer do Sol:</strong> 05:30h - 07:00h</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#0D1309]" />
                <span><strong>Aulas Manhã:</strong> 06:30h e 07:30h</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#0D1309]" />
                <span><strong>Pôr do Sol:</strong> 16:30h - 18:00h</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#0D1309]" />
                <span><strong>Finais de Semana:</strong> 06:00h às 18:00h</span>
              </li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="space-y-3">
            <h4 className="text-[#0D1309] font-black text-sm uppercase tracking-wider">Contato & Atendimento</h4>
            <ul className="space-y-2.5 text-xs font-bold text-[#0D1309]">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#0D1309] shrink-0" />
                <a href="https://api.whatsapp.com/send?phone=5527999310057" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  +55 (27) 99931-0057 (WhatsApp)
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#0D1309] shrink-0" />
                <span>contato@juremapasseios.com.br</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#0D1309] shrink-0" />
                <span>Curva da Jurema, Vitória - ES</span>
              </li>
            </ul>
          </div>

          {/* Col 4 */}
          <div className="space-y-3">
            <h4 className="text-[#0D1309] font-black text-sm uppercase tracking-wider">Onde Estamos</h4>
            <p className="text-xs text-[#2E3827] font-semibold">
              Praia do Canto / Curva da Jurema, atrás do Quiosque da Polícia Militar, próximo ao Clericot Cafe.
            </p>
            <a
              href="https://maps.app.goo.gl/XbJ44sejkHEqfept8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-[#CFF726] text-[#0D1309] border-2 border-[#0D1309] hover:bg-[#DBFF3D] text-xs font-black transition-all w-full justify-center shadow-md"
            >
              <Navigation className="w-4 h-4 text-[#0D1309]" />
              <span>Abrir no Google Maps</span>
            </a>
          </div>
        </div>

        {/* Embedded Interactive Google Map */}
        <div className="rounded-3xl overflow-hidden border-4 border-[#0D1309] shadow-2xl bg-white">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10299.661093149718!2d-40.29146552351167!3d-20.30903805022606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb817005d93d835%3A0xe920bba1c8ef3408!2sBase%20Jurema%20escola%20de%20Canoa%20Havaiana!5e1!3m2!1ses!2sar!4v1784691281947!5m2!1ses!2sar"
            width="100%"
            height="380"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            className="w-full h-80 sm:h-96 filter contrast-110"
            title="Google Maps Base Jurema Escola de Canoa Havaiana"
          />
        </div>

        {/* Bottom Copyright bar */}
        <div className="pt-8 border-t-2 border-[#0D1309]/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#2E3827] font-bold gap-4">
          <div>
            © {new Date().getFullYear()} Base Jurema Canoa Havaiana. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-1">
            <span>Desenvolvido com</span>
            <Heart className="w-4 h-4 text-[#0D1309] fill-[#CFF726] inline" />
            <span>para Vitória / Espírito Santo</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
