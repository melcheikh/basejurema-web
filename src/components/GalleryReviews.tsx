"use client";

import { REVIEWS_DATA } from "@/data/tours";
import { Star, Instagram, Sparkles, ExternalLink } from "lucide-react";

const GALLERY_IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    title: "Nascer do Sol na Curva da Jurema"
  },
  {
    url: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=80",
    title: "Golden Hour perto da Terceira Ponte"
  },
  {
    url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
    title: "Equipe em Sincronia de Remada"
  },
  {
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    title: "Parada para Mergulho na Ilha do Boi"
  }
];

export default function GalleryReviews() {
  return (
    <section className="py-20 px-4 relative z-10 max-w-7xl mx-auto space-y-20">
      {/* Section 1: Customer Reviews */}
      <div className="space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#CFF726] text-[#0D1309] text-xs font-black uppercase tracking-wider border-2 border-[#0D1309]">
            <Star className="w-4 h-4 fill-[#0D1309] text-[#0D1309]" />
            <span>Depoimentos & Experiências Reais</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0D1309]">
            O Que Nossos Remadores <span className="bg-[#CFF726] px-2 py-0.5 rounded-xl border-2 border-[#0D1309]">Falam</span>
          </h2>
          <p className="text-[#2E3827] text-sm sm:text-base font-semibold">
            Descubra a energia de quem já viveu a experiência da Canoa Havaiana com a Base Jurema.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS_DATA.map((rev) => (
            <div
              key={rev.id}
              className="glass-card-light rounded-3xl p-6 border-2 border-[#0D1309] glass-card-hover flex flex-col justify-between bg-white"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#0D1309]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#0D1309]" />
                    ))}
                  </div>
                  <span className="text-[10px] px-2.5 py-1 rounded-full bg-[#CFF726] text-[#0D1309] border border-[#0D1309] font-black">
                    {rev.tour}
                  </span>
                </div>

                <p className="text-[#2E3827] text-xs sm:text-sm italic font-semibold leading-relaxed">
                  "{rev.comment}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-6 border-t-2 border-[#0D1309]/10 mt-4">
                <img
                  src={rev.avatar}
                  alt={rev.author}
                  className="w-10 h-10 rounded-full object-cover border-2 border-[#0D1309]"
                />
                <div>
                  <h4 className="font-black text-sm text-[#0D1309]">{rev.author}</h4>
                  <span className="text-[11px] text-[#2E3827] font-bold block">{rev.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 2: Photo Gallery */}
      <div className="glass-card-light rounded-3xl p-6 sm:p-10 border-2 border-[#0D1309] shadow-2xl bg-white">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#CFF726] text-[#0D1309] text-xs font-black uppercase tracking-wider mb-2 border border-[#0D1309]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Galeria de Momentos</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-[#0D1309]">Siga a @basejurema no Instagram</h3>
          </div>

          <a
            href="https://www.instagram.com/basejurema/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl font-black text-xs lime-fluor-btn text-[#0D1309] shadow-lg flex items-center gap-2 border-2 border-[#0D1309] hover:scale-105 transition-all"
          >
            <Instagram className="w-4 h-4" />
            <span>Ver Fotos no Instagram</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {GALLERY_IMAGES.map((img, idx) => (
            <div
              key={idx}
              className="group relative h-56 rounded-2xl overflow-hidden border-2 border-[#0D1309] glass-card-hover cursor-pointer"
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1309] via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-3 left-3 right-3">
                <span className="text-xs font-black text-white block drop-shadow-md">{img.title}</span>
                <span className="text-[10px] text-[#CFF726] flex items-center gap-1 mt-0.5 font-bold">
                  <Instagram className="w-3 h-3" /> @basejurema
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
