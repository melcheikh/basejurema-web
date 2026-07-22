"use client";

import { Calendar, ArrowRight, ShieldCheck, Sun, Star, MapPin, Award } from "lucide-react";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 px-4 overflow-hidden bg-gradient-to-b from-[#F4F8EC] via-[#EAF4D7] to-[#F4F8EC]">
      {/* Background Image with Luminous Tropical Sunlight Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=85"
          alt="Canoa Havaiana ao Nascer do Sol Vitória ES"
          className="w-full h-full object-cover object-center scale-105 filter brightness-90 contrast-105 transition-transform duration-10000 animate-float opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F4F8EC] via-[#F4F8EC]/70 to-transparent" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        {/* Floating Top Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#CFF726] border-2 border-[#0D1309] text-[#0D1309] text-xs sm:text-sm font-black shadow-xl animate-bounce">
          <Sun className="w-4 h-4 text-[#0D1309]" />
          <span>Vagas abertas para o </span>
          <span className="underline underline-offset-4 decoration-[#0D1309]">Nascer do Sol de amanhã!</span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-[#0D1309] leading-[1.1]">
          Sinta a energia do mar remando na{" "}
          <span className="inline-block bg-[#CFF726] text-[#0D1309] px-4 py-1 rounded-2xl border-2 border-[#0D1309] shadow-lg transform -rotate-1">
            Curva da Jurema
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-base sm:text-xl text-[#2E3827] font-semibold leading-relaxed">
          Viva a vivência inesquecível de uma <strong className="bg-[#CFF726] px-2 py-0.5 rounded text-[#0D1309]">Canoa Havaiana (Va'a)</strong> em Vitória/ES. Conexão profunda com a natureza, saúde física, trabalho em equipe e o pôr do sol mais bonito do Espírito Santo.
        </p>

        {/* Primary Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <button
            onClick={() => scrollToSection("reserva")}
            className="w-full sm:w-auto px-9 py-4.5 rounded-2xl font-black text-base lime-fluor-btn hover:scale-105 transition-all flex items-center justify-center gap-3 group shadow-2xl border-2 border-[#0D1309]"
          >
            <Calendar className="w-5 h-5 text-[#0D1309]" />
            <span>Reservar meu Passeio</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-[#0D1309]" />
          </button>

          <button
            onClick={() => scrollToSection("passeios")}
            className="w-full sm:w-auto px-9 py-4.5 rounded-2xl font-bold text-base bg-white text-[#0D1309] hover:bg-[#CFF726]/40 border-2 border-[#0D1309] shadow-md transition-all flex items-center justify-center gap-2"
          >
            <span>Ver Passeios & Valores</span>
          </button>
        </div>

        {/* Quick Badges Grid */}
        <div className="pt-8 border-t-2 border-[#0D1309]/10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
          <div className="glass-card-light p-4 rounded-2xl flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#CFF726] text-[#0D1309] border border-[#0D1309]">
              <Star className="w-5 h-5 fill-[#0D1309]" />
            </div>
            <div>
              <div className="text-lg font-black text-[#0D1309]">4.9 / 5.0</div>
              <div className="text-xs text-[#2E3827] font-semibold">Avaliações no Google</div>
            </div>
          </div>

          <div className="glass-card-light p-4 rounded-2xl flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#CFF726] text-[#0D1309] border border-[#0D1309]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-lg font-black text-[#0D1309]">100% Seguro</div>
              <div className="text-xs text-[#2E3827] font-semibold">Instrutores Certificados</div>
            </div>
          </div>

          <div className="glass-card-light p-4 rounded-2xl flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#CFF726] text-[#0D1309] border border-[#0D1309]">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-lg font-black text-[#0D1309]">Parceiro Wellhub</div>
              <div className="text-xs text-[#2E3827] font-semibold">Gympass Disponível</div>
            </div>
          </div>

          <div className="glass-card-light p-4 rounded-2xl flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#CFF726] text-[#0D1309] border border-[#0D1309]">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-lg font-black text-[#0D1309]">Praia do Canto</div>
              <div className="text-xs text-[#2E3827] font-semibold">Vitória - Espírito Santo</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
