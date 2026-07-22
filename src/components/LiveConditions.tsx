"use client";

import { useEffect, useState } from "react";
import { Waves, Thermometer, Wind, Sunrise, Sunset, RefreshCw, CheckCircle2 } from "lucide-react";

interface WeatherData {
  temperature: number;
  waterTemp: number;
  windSpeed: string;
  waveHeight: string;
  tideHeight: string;
  tideState: string;
  sunrise: string;
  sunset: string;
  waterCondition: string;
  location: string;
  updatedAt: string;
}

export default function LiveConditions() {
  const [data, setData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchWeather = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/weather");
      const json = await res.json();
      if (json.success) {
        setData(json);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <section id="clima" className="py-16 px-4 relative z-10 max-w-7xl mx-auto">
      <div className="glass-card-light rounded-3xl p-6 sm:p-10 border-2 border-[#0D1309] shadow-2xl relative overflow-hidden bg-white">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#CFF726] text-[#0D1309] border border-[#0D1309] text-xs font-black uppercase tracking-wider mb-2">
              <Waves className="w-4 h-4" />
              <span>Condições do Mar em Tempo Real</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0D1309] flex items-center gap-3">
              Curva da Jurema • Vitória / ES
            </h2>
            <p className="text-[#2E3827] text-sm font-semibold mt-1">
              Monitore as marés, ventos e temperatura para planejar sua remada perfeita
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#CFF726] border-2 border-[#0D1309] text-[#0D1309] text-xs font-black">
              <CheckCircle2 className="w-4 h-4" />
              <span>Mar Seguro para Remada</span>
            </div>
            <button
              onClick={fetchWeather}
              disabled={loading}
              className="p-2.5 rounded-xl bg-[#F4F8EC] text-[#0D1309] hover:bg-[#CFF726] transition-all border-2 border-[#0D1309]"
              title="Atualizar dados"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
            </button>
          </div>
        </div>

        {/* Grid of Weather Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {/* Item 1: Maré */}
          <div className="p-4 rounded-2xl border-2 border-[#0D1309] bg-[#F4F8EC] hover:bg-[#CFF726]/40 transition-all">
            <div className="flex items-center justify-between text-[#0D1309] mb-2">
              <Waves className="w-5 h-5 text-[#0D1309]" />
              <span className="text-[10px] text-[#0D1309] uppercase tracking-wider font-extrabold">Maré</span>
            </div>
            <div className="text-xl sm:text-2xl font-black text-[#0D1309]">
              {data ? data.tideHeight : "1.2m"}
            </div>
            <div className="text-xs font-bold text-[#0D1309] truncate mt-1">
              {data ? data.tideState : "Maré Alta"}
            </div>
          </div>

          {/* Item 2: Temp Ar */}
          <div className="p-4 rounded-2xl border-2 border-[#0D1309] bg-[#F4F8EC] hover:bg-[#CFF726]/40 transition-all">
            <div className="flex items-center justify-between text-[#0D1309] mb-2">
              <Thermometer className="w-5 h-5" />
              <span className="text-[10px] text-[#0D1309] uppercase tracking-wider font-extrabold">Temp. Ar</span>
            </div>
            <div className="text-xl sm:text-2xl font-black text-[#0D1309]">
              {data ? `${data.temperature}°C` : "27°C"}
            </div>
            <div className="text-xs font-bold text-[#0D1309] truncate mt-1">
              Ensolarado
            </div>
          </div>

          {/* Item 3: Temp Água */}
          <div className="p-4 rounded-2xl border-2 border-[#0D1309] bg-[#F4F8EC] hover:bg-[#CFF726]/40 transition-all">
            <div className="flex items-center justify-between text-[#0D1309] mb-2">
              <Waves className="w-5 h-5" />
              <span className="text-[10px] text-[#0D1309] uppercase tracking-wider font-extrabold">Temp. Água</span>
            </div>
            <div className="text-xl sm:text-2xl font-black text-[#0D1309]">
              {data ? `${data.waterTemp}°C` : "24°C"}
            </div>
            <div className="text-xs font-bold text-[#0D1309] truncate mt-1">
              Águas Calmas
            </div>
          </div>

          {/* Item 4: Vento */}
          <div className="p-4 rounded-2xl border-2 border-[#0D1309] bg-[#F4F8EC] hover:bg-[#CFF726]/40 transition-all">
            <div className="flex items-center justify-between text-[#0D1309] mb-2">
              <Wind className="w-5 h-5" />
              <span className="text-[10px] text-[#0D1309] uppercase tracking-wider font-extrabold">Vento</span>
            </div>
            <div className="text-xl sm:text-2xl font-black text-[#0D1309]">
              {data ? data.windSpeed : "8 nó (SE)"}
            </div>
            <div className="text-xs font-bold text-[#0D1309] truncate mt-1">
              Brisa Suave
            </div>
          </div>

          {/* Item 5: Nascer do Sol */}
          <div className="p-4 rounded-2xl border-2 border-[#0D1309] bg-[#F4F8EC] hover:bg-[#CFF726]/40 transition-all">
            <div className="flex items-center justify-between text-[#0D1309] mb-2">
              <Sunrise className="w-5 h-5" />
              <span className="text-[10px] text-[#0D1309] uppercase tracking-wider font-extrabold">Amanhecer</span>
            </div>
            <div className="text-xl sm:text-2xl font-black text-[#0D1309]">
              {data ? data.sunrise : "05:42h"}
            </div>
            <div className="text-xs font-bold text-[#0D1309] truncate mt-1">
              05:30h Remada
            </div>
          </div>

          {/* Item 6: Pôr do Sol */}
          <div className="p-4 rounded-2xl border-2 border-[#0D1309] bg-[#F4F8EC] hover:bg-[#CFF726]/40 transition-all">
            <div className="flex items-center justify-between text-[#0D1309] mb-2">
              <Sunset className="w-5 h-5" />
              <span className="text-[10px] text-[#0D1309] uppercase tracking-wider font-extrabold">Entardecer</span>
            </div>
            <div className="text-xl sm:text-2xl font-black text-[#0D1309]">
              {data ? data.sunset : "17:48h"}
            </div>
            <div className="text-xs font-bold text-[#0D1309] truncate mt-1">
              16:30h Remada
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
