"use client";

import { useState } from "react";
import { TOURS_DATA } from "@/data/tours";
import { Clock, Users, Check, Calendar, Sparkles } from "lucide-react";

export default function ToursShowcase() {
  const [filter, setFilter] = useState<"todos" | "populares" | "iniciantes" | "grupos">("todos");

  const filteredTours = TOURS_DATA.filter((tour) => {
    if (filter === "populares") return tour.popular;
    if (filter === "iniciantes") return tour.difficulty === "Fácil / Para Todos";
    if (filter === "grupos") return tour.id === "corporativo" || tour.id === "passeio-ilhas";
    return true;
  });

  const scrollToBooking = () => {
    const el = document.getElementById("reserva");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="passeios" className="py-20 px-4 relative z-10 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#CFF726] text-[#0D1309] text-xs font-black uppercase tracking-widest border-2 border-[#0D1309]">
          <Sparkles className="w-4 h-4 text-[#0D1309]" />
          <span>Nossos Passeios & Experiências</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-[#0D1309]">
          Experiências Únicas nas Águas de{" "}
          <span className="bg-[#CFF726] text-[#0D1309] px-3 py-0.5 rounded-xl border-2 border-[#0D1309]">
            Vitória
          </span>
        </h2>
        <p className="text-[#2E3827] text-base sm:text-lg font-semibold">
          Escolha a modalidade perfeita para o seu momento — desde remadas relaxantes ao amanhecer até expedições ecológicas e eventos corporativos.
        </p>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
          {[
            { id: "todos", label: "Todos os Passeios" },
            { id: "populares", label: "🔥 Mais Populares" },
            { id: "iniciantes", label: "🔰 Para Iniciantes" },
            { id: "grupos", label: "👥 Grupos & Empresas" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all border-2 border-[#0D1309] ${
                filter === tab.id
                  ? "bg-[#CFF726] text-[#0D1309] shadow-lg"
                  : "bg-white text-[#0D1309] hover:bg-[#CFF726]/40"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Tour Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredTours.map((tour) => (
          <div
            key={tour.id}
            className="glass-card-light rounded-3xl overflow-hidden border-2 border-[#0D1309] glass-card-hover flex flex-col justify-between bg-white"
          >
            <div>
              {/* Tour Image Header */}
              <div className="relative h-56 overflow-hidden border-b-2 border-[#0D1309]">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1309]/80 via-transparent to-black/20" />

                {tour.badge && (
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#CFF726] text-[#0D1309] border-2 border-[#0D1309] font-black text-xs shadow-md">
                    {tour.badge}
                  </span>
                )}

                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                  <div>
                    <span className="text-xs text-[#CFF726] font-black uppercase tracking-wider block drop-shadow">
                      {tour.difficulty}
                    </span>
                    <h3 className="text-xl font-black drop-shadow-md">{tour.title}</h3>
                  </div>
                </div>
              </div>

              {/* Body Content */}
              <div className="p-6 space-y-4">
                <p className="text-[#2E3827] text-xs sm:text-sm leading-relaxed font-semibold">
                  {tour.description}
                </p>

                {/* Features & Duration */}
                <div className="grid grid-cols-2 gap-2 text-xs font-bold text-[#0D1309] py-2 border-y-2 border-[#0D1309]/10">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-[#0D1309]" />
                    <span>Duração: <strong>{tour.duration}</strong></span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-[#0D1309]" />
                    <span>{tour.capacity}</span>
                  </div>
                </div>

                {/* Highlights List */}
                <div className="space-y-1.5 pt-1">
                  <span className="text-[11px] font-black text-[#0D1309] uppercase tracking-wider block">
                    Destaques da Experiência:
                  </span>
                  {tour.highlights.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs font-semibold text-[#2E3827]">
                      <Check className="w-4 h-4 text-[#0D1309] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Price & CTA */}
            <div className="p-6 pt-0 border-t-2 border-[#0D1309]/10 flex items-center justify-between mt-4">
              <div>
                <span className="text-[10px] text-[#2E3827] uppercase block font-bold">A partir de</span>
                <div className="text-2xl font-black text-[#0D1309]">
                  R$ <span className="bg-[#CFF726] px-1 rounded">{tour.price}</span>
                  <span className="text-xs text-[#2E3827] font-bold"> /{tour.unit.split(" ")[1] || "pess."}</span>
                </div>
              </div>

              <button
                onClick={scrollToBooking}
                className="px-4 py-2.5 rounded-xl text-xs font-black lime-fluor-btn hover:scale-105 transition-all flex items-center gap-1.5 shadow-md border-2 border-[#0D1309]"
              >
                <Calendar className="w-3.5 h-3.5 text-[#0D1309]" />
                <span>Reservar</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
