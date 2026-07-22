"use client";

import { useState, useEffect } from "react";
import { Waves, Calendar, Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [weatherText, setWeatherText] = useState("27°C | Marê Alta (0.5m)");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    fetch("/api/weather")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setWeatherText(`${data.temperature}°C | ${data.tideState}`);
        }
      })
      .catch(() => {});

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FFFFFF]/95 backdrop-blur-md border-b-2 border-[#CFF726] py-3 shadow-xl"
          : "bg-gradient-to-b from-[#FFFFFF] via-[#FFFFFF]/80 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-11 h-11 rounded-2xl bg-[#CFF726] p-1 shadow-lg shadow-[#CFF726]/50 group-hover:scale-105 transition-transform border-2 border-[#0D1309]">
            <div className="w-full h-full bg-[#0D1309] rounded-xl flex items-center justify-center">
              <span className="text-2xl">🛶</span>
            </div>
          </div>
          <div>
            <span className="text-2xl font-black tracking-tight text-[#0D1309] flex items-center gap-1.5">
              BASE <span className="px-2 py-0.5 rounded-lg bg-[#CFF726] text-[#0D1309] font-black border border-[#0D1309]/20">JUREMA</span>
            </span>
            <span className="block text-[11px] uppercase tracking-widest text-[#0D1309] font-extrabold">
              Escola de Canoa Havaiana • Vitória-ES
            </span>
          </div>
        </div>

        {/* Live Weather Pill */}
        <div className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-full bg-[#CFF726] text-[#0D1309] border-2 border-[#0D1309] text-xs font-black shadow-md animate-pulse-glow">
          <Waves className="w-4 h-4 text-[#0D1309]" />
          <span>Curva da Jurema:</span>
          <span className="font-extrabold">{weatherText}</span>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-bold text-[#0D1309]">
          <button
            onClick={() => scrollToSection("passeios")}
            className="hover:text-[#A8E000] hover:underline decoration-2 transition-colors"
          >
            Passeios & Experiências
          </button>
          <button
            onClick={() => scrollToSection("reserva")}
            className="hover:text-[#A8E000] hover:underline decoration-2 transition-colors"
          >
            Reservas & Preços
          </button>
          <button
            onClick={() => scrollToSection("clima")}
            className="hover:text-[#A8E000] hover:underline decoration-2 transition-colors"
          >
            Clima & Mareas
          </button>
          <button
            onClick={() => scrollToSection("escolinha")}
            className="hover:text-[#A8E000] hover:underline decoration-2 transition-colors"
          >
            Escolinha & Wellhub
          </button>
          <button
            onClick={() => scrollToSection("localizacao")}
            className="hover:text-[#A8E000] hover:underline decoration-2 transition-colors"
          >
            Como Chegar
          </button>
        </div>

        {/* Primary Button */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => scrollToSection("reserva")}
            className="px-6 py-3 rounded-2xl font-black text-sm lime-fluor-btn shadow-lg flex items-center gap-2 border-2 border-[#0D1309]"
          >
            <Calendar className="w-4 h-4 text-[#0D1309]" />
            <span>Agendar Passeio</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-[#CFF726] text-[#0D1309] border-2 border-[#0D1309] font-bold"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-card-light border-b-4 border-[#CFF726] px-4 py-6 mt-3 space-y-4 bg-[#FFFFFF]">
          <div className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-[#CFF726] border-2 border-[#0D1309] text-xs font-black text-[#0D1309]">
            <Waves className="w-4 h-4 shrink-0" />
            <span>Curva da Jurema: {weatherText}</span>
          </div>
          <div className="flex flex-col space-y-3 text-sm font-bold text-[#0D1309]">
            <button
              onClick={() => scrollToSection("passeios")}
              className="text-left py-2 px-3 rounded-lg hover:bg-[#CFF726]/30"
            >
              🚣‍♀️ Passeios & Experiências
            </button>
            <button
              onClick={() => scrollToSection("reserva")}
              className="text-left py-2 px-3 rounded-lg hover:bg-[#CFF726]/30"
            >
              🛒 Reservar Passeio
            </button>
            <button
              onClick={() => scrollToSection("clima")}
              className="text-left py-2 px-3 rounded-lg hover:bg-[#CFF726]/30"
            >
              🌊 Clima & Marea em Vivo
            </button>
            <button
              onClick={() => scrollToSection("escolinha")}
              className="text-left py-2 px-3 rounded-lg hover:bg-[#CFF726]/30"
            >
              🏋️ Escolinha & Wellhub (Gympass)
            </button>
            <button
              onClick={() => scrollToSection("localizacao")}
              className="text-left py-2 px-3 rounded-lg hover:bg-[#CFF726]/30"
            >
              📍 Ubicación & Mapa
            </button>
          </div>
          <button
            onClick={() => scrollToSection("reserva")}
            className="w-full py-3.5 rounded-2xl font-black text-sm lime-fluor-btn flex items-center justify-center gap-2 border-2 border-[#0D1309]"
          >
            <Calendar className="w-4 h-4 text-[#0D1309]" />
            <span>Agendar Agora pelo WhatsApp</span>
          </button>
        </div>
      )}
    </nav>
  );
}
