"use client";

import { useState } from "react";
import { Navigation, ArrowRight } from "lucide-react";

interface RouteSpot {
  id: string;
  name: string;
  distance: string;
  time: string;
  description: string;
  image: string;
  tags: string[];
}

const ROUTE_SPOTS: RouteSpot[] = [
  {
    id: "curva-jurema",
    name: "Base Jurema (Curva da Jurema)",
    distance: "Ponto de Partida",
    time: "0 min",
    description: "Nossa base oficial na Praia do Canto / Curva da Jurema. Águas tranquilas e abrigadas, infraestrutura completa com banheiros, ducha fresca, guarda de pertences e instrutores.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    tags: ["Base Operacional", "Briefing de Segurança", "Ducha & Armários"]
  },
  {
    id: "ilha-do-frade",
    name: "Ilha do Frade & Costão Rochoso",
    distance: "1.8 km da base",
    time: "25 min remando",
    description: "Remada acompanhando o contorno verde da Ilha do Frade. Visual deslumbrante das mansões à beira-mar e vegetação de restinga preservada.",
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80",
    tags: ["Águas Cristalinas", "Paisagem Natural", "Fauna Marinha"]
  },
  {
    id: "ilha-do-boi",
    name: "Ilha do Boi & Enseada Secreta",
    distance: "3.2 km da base",
    time: "45 min remando",
    description: "Parada estratégica da Expedição Ilhas para mergulho contemplativo. Frequente aparição de tartarugas marinhas e peixes da costa capixaba.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    tags: ["Ponto de Mergulho", "Tartarugas Marinhas", "Enseada Calma"]
  },
  {
    id: "terceira-ponte",
    name: "Mirante Terceira Ponte & Convento",
    distance: "4.5 km da base",
    time: "1h 10min remando",
    description: "O melhor ângulo para fotos do pôr do sol. Vista majestosa da Terceira Ponte conectando Vitória a Vila Velha com o Convento da Penha iluminado no alto do morro.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
    tags: ["Golden Hour", "Fotos de Drone", "Vista Cartão Postal"]
  }
];

export default function RouteMap() {
  const [activeSpot, setActiveSpot] = useState<RouteSpot>(ROUTE_SPOTS[0]);

  return (
    <section className="py-20 px-4 relative z-10 max-w-7xl mx-auto">
      <div className="glass-card-light rounded-3xl p-6 sm:p-10 border-2 border-[#0D1309] shadow-2xl relative overflow-hidden bg-white">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#CFF726] text-[#0D1309] text-xs font-black uppercase tracking-wider border-2 border-[#0D1309]">
            <Navigation className="w-3.5 h-3.5 text-[#0D1309]" />
            <span>Navegação & Roteiro Marítimo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0D1309]">
            Explore os Pontos do Nosso Roteiro em <span className="bg-[#CFF726] px-2 py-0.5 rounded-xl border-2 border-[#0D1309]">Vitória</span>
          </h2>
          <p className="text-[#2E3827] text-sm sm:text-base font-semibold">
            Clique nos pontos abaixo para conhecer a trajetória e as atracções marinhas das nossas remadas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Selector */}
          <div className="lg:col-span-5 space-y-3">
            {ROUTE_SPOTS.map((spot, index) => {
              const isActive = activeSpot.id === spot.id;
              return (
                <div
                  key={spot.id}
                  onClick={() => setActiveSpot(spot)}
                  className={`cursor-pointer p-4 rounded-2xl border-2 transition-all flex items-center justify-between ${
                    isActive
                      ? "bg-[#CFF726] border-[#0D1309] text-[#0D1309] shadow-lg"
                      : "bg-[#F4F8EC] border-[#0D1309]/20 text-[#0D1309] hover:border-[#0D1309]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center font-black text-sm border-2 border-[#0D1309] ${
                        isActive
                          ? "bg-[#0D1309] text-[#CFF726]"
                          : "bg-white text-[#0D1309]"
                      }`}
                    >
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-extrabold text-sm text-[#0D1309]">{spot.name}</h4>
                      <span className="text-xs text-[#0D1309] font-bold">{spot.distance}</span>
                    </div>
                  </div>

                  <ArrowRight
                    className={`w-4 h-4 transition-transform text-[#0D1309] ${
                      isActive ? "translate-x-1" : ""
                    }`}
                  />
                </div>
              );
            })}
          </div>

          {/* Active Detail */}
          <div className="lg:col-span-7">
            <div className="glass-card-light rounded-2xl overflow-hidden border-2 border-[#0D1309] bg-white relative">
              <div className="relative h-64 sm:h-72 overflow-hidden border-b-2 border-[#0D1309]">
                <img
                  src={activeSpot.image}
                  alt={activeSpot.name}
                  className="w-full h-full object-cover filter contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1309]/70 via-transparent to-black/20" />
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#CFF726] border-2 border-[#0D1309] text-[#0D1309] text-xs font-black shadow-md">
                  ⏱️ {activeSpot.time}
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <span className="text-xs text-[#0D1309] font-black uppercase tracking-wider block bg-[#CFF726] w-max px-2 py-0.5 rounded border border-[#0D1309]">
                    {activeSpot.distance}
                  </span>
                  <h3 className="text-2xl font-black text-[#0D1309] mt-2">{activeSpot.name}</h3>
                </div>

                <p className="text-[#2E3827] text-sm font-semibold leading-relaxed">
                  {activeSpot.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {activeSpot.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg bg-[#CFF726] text-[#0D1309] border border-[#0D1309] text-xs font-black"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
