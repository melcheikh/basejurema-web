"use client";

import { useState } from "react";
import { TOURS_DATA, ADDONS_DATA, Tour } from "@/data/tours";
import { Calendar, Users, Clock, Sparkles, Check, ArrowRight, ShieldCheck, MessageCircle, Building2 } from "lucide-react";
import confetti from "canvas-confetti";

export default function BookingWidget() {
  const [selectedTour, setSelectedTour] = useState<Tour>(TOURS_DATA[0]);
  const [date, setDate] = useState<string>(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split("T")[0];
  });
  const [timeSlot, setTimeSlot] = useState<string>(selectedTour.schedule[0]);
  const [passengers, setPassengers] = useState<number>(2);
  const [corporateTier, setCorporateTier] = useState<string>("Até 10 colaboradores");
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [customerName, setCustomerName] = useState<string>("");
  const [notes, setNotes] = useState<string>("");
  const [submitting, setSubmitting] = useState(false);

  const isCorporate = selectedTour.id === "corporativo";

  const toggleAddon = (addonId: string) => {
    if (selectedAddons.includes(addonId)) {
      setSelectedAddons(selectedAddons.filter((id) => id !== addonId));
    } else {
      setSelectedAddons([...selectedAddons, addonId]);
    }
  };

  const addonsTotal = selectedAddons.reduce((sum, addonId) => {
    const addon = ADDONS_DATA.find((a) => a.id === addonId);
    return sum + (addon ? addon.price : 0);
  }, 0);

  // Corporate Tiers calculation
  let basePrice = selectedTour.price * passengers;
  if (isCorporate) {
    if (corporateTier === "Até 10 colaboradores") basePrice = 600;
    else if (corporateTier === "10 a 20 colaboradores") basePrice = 1100;
    else if (corporateTier === "20 a 50 colaboradores") basePrice = 2400;
    else basePrice = 4500; // 50+
  }

  const totalPrice = isCorporate
    ? basePrice + addonsTotal * 10
    : basePrice + addonsTotal * passengers;

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });

      const addonNames = selectedAddons.map(
        (id) => ADDONS_DATA.find((a) => a.id === id)?.name || id
      );

      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tourTitle: selectedTour.title + (isCorporate ? ` (${corporateTier})` : ""),
          date,
          timeSlot,
          passengers: isCorporate ? corporateTier : passengers,
          selectedAddons: addonNames,
          totalPrice,
          customerName,
          notes
        })
      });

      const data = await response.json();
      if (data.success && data.whatsappUrl) {
        window.open(data.whatsappUrl, "_blank");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="reserva" className="py-20 px-4 relative z-10 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#CFF726] text-[#0D1309] text-xs font-black uppercase tracking-widest border-2 border-[#0D1309]">
          <Sparkles className="w-4 h-4 text-[#0D1309]" />
          <span>Venda & Agendamento Online</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-[#0D1309]">
          Monte e Reserve seu Passeio em{" "}
          <span className="bg-[#CFF726] text-[#0D1309] px-3 py-0.5 rounded-xl border-2 border-[#0D1309]">
            1 Minuto
          </span>
        </h2>
        <p className="text-[#2E3827] text-base sm:text-lg font-semibold">
          Escolha o passeio ou pacote corporativo, selecione a data e garanta a vaga do seu grupo direto no WhatsApp.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Form Column */}
        <div className="lg:col-span-7 space-y-6">
          {/* Step 1 */}
          <div className="glass-card-light rounded-2xl p-6 border-2 border-[#0D1309] bg-white">
            <label className="block text-sm font-black text-[#0D1309] uppercase tracking-wider mb-4 flex items-center justify-between">
              <span>1. Escolha a Experiência:</span>
              <span className="text-xs text-[#2E3827] font-semibold">Selecione uma opção</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {TOURS_DATA.map((tour) => {
                const isSelected = selectedTour.id === tour.id;
                return (
                  <div
                    key={tour.id}
                    onClick={() => {
                      setSelectedTour(tour);
                      setTimeSlot(tour.schedule[0]);
                    }}
                    className={`cursor-pointer p-4 rounded-2xl transition-all border-2 ${
                      isSelected
                        ? "bg-[#CFF726] border-[#0D1309] shadow-lg text-[#0D1309]"
                        : "bg-[#F4F8EC] border-[#0D1309]/20 text-[#0D1309] hover:border-[#0D1309]"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-extrabold text-sm text-[#0D1309]">{tour.title}</span>
                      {tour.badge && (
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#0D1309] text-[#CFF726] font-black">
                          {tour.badge}
                        </span>
                      )}
                    </div>
                    <div className="text-xs font-black text-[#0D1309]">
                      R$ {tour.price} <span className="text-[#2E3827] text-[10px] font-normal">{tour.unit}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Step 2: Date & Time */}
          <div className="glass-card-light rounded-2xl p-6 border-2 border-[#0D1309] bg-white grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-black text-[#0D1309] uppercase tracking-wider mb-2 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#0D1309]" />
                <span>2. Data do Passeio:</span>
              </label>
              <input
                type="date"
                value={date}
                min={new Date().toISOString().split("T")[0]}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-[#F4F8EC] border-2 border-[#0D1309] rounded-xl px-4 py-3 text-[#0D1309] text-sm font-bold focus:outline-none focus:bg-[#CFF726]/30"
              />
            </div>

            <div>
              <label className="block text-sm font-black text-[#0D1309] uppercase tracking-wider mb-2 flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#0D1309]" />
                <span>Horário Disponível:</span>
              </label>
              <select
                value={timeSlot}
                onChange={(e) => setTimeSlot(e.target.value)}
                className="w-full bg-[#F4F8EC] border-2 border-[#0D1309] rounded-xl px-4 py-3 text-[#0D1309] text-sm font-bold focus:outline-none focus:bg-[#CFF726]/30"
              >
                {selectedTour.schedule.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Step 3: Passengers OR Corporate Tier */}
          <div className="glass-card-light rounded-2xl p-6 border-2 border-[#0D1309] bg-white">
            {!isCorporate ? (
              <>
                <div className="flex items-center justify-between mb-4">
                  <label className="text-sm font-black text-[#0D1309] uppercase tracking-wider flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#0D1309]" />
                    <span>3. Quantidade de Pessoas:</span>
                  </label>
                  <span className="text-xs text-[#2E3827] font-bold">Máx. 6 por canoa OC6</span>
                </div>

                <div className="flex items-center gap-4">
                  <button
                    type="button"
                    disabled={passengers <= 1}
                    onClick={() => setPassengers(Math.max(1, passengers - 1))}
                    className="w-12 h-12 rounded-xl bg-[#F4F8EC] text-[#0D1309] font-black text-xl hover:bg-[#CFF726] disabled:opacity-30 border-2 border-[#0D1309] flex items-center justify-center"
                  >
                    -
                  </button>
                  <div className="flex-1 text-center py-3 bg-[#CFF726] rounded-xl border-2 border-[#0D1309]">
                    <span className="text-2xl font-black text-[#0D1309]">{passengers}</span>
                    <span className="text-xs text-[#0D1309] block font-bold">
                      {passengers === 1 ? "Remador" : "Remadores"}
                    </span>
                  </div>
                  <button
                    type="button"
                    disabled={passengers >= 12}
                    onClick={() => setPassengers(passengers + 1)}
                    className="w-12 h-12 rounded-xl bg-[#F4F8EC] text-[#0D1309] font-black text-xl hover:bg-[#CFF726] disabled:opacity-30 border-2 border-[#0D1309] flex items-center justify-center"
                  >
                    +
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-sm font-black text-[#0D1309] uppercase tracking-wider flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#0D1309]" />
                    <span>Tamanho do Grupo Corporativo:</span>
                  </label>
                  <span className="text-xs text-[#0D1309] font-black bg-[#CFF726] px-2 py-0.5 rounded border border-[#0D1309]">
                    Team Building
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Até 10 colaboradores",
                    "10 a 20 colaboradores",
                    "20 a 50 colaboradores",
                    "Mais de 50 colaboradores"
                  ].map((tier) => (
                    <div
                      key={tier}
                      onClick={() => setCorporateTier(tier)}
                      className={`cursor-pointer p-3 rounded-xl border-2 text-xs font-black transition-all text-center ${
                        corporateTier === tier
                          ? "bg-[#CFF726] border-[#0D1309] text-[#0D1309]"
                          : "bg-[#F4F8EC] border-[#0D1309]/20 text-[#0D1309] hover:border-[#0D1309]"
                      }`}
                    >
                      {tier}
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Step 4 */}
          <div className="glass-card-light rounded-2xl p-6 border-2 border-[#0D1309] bg-white">
            <label className="block text-sm font-black text-[#0D1309] uppercase tracking-wider mb-3">
              4. Adicionais Opcionais:
            </label>
            <div className="space-y-3">
              {ADDONS_DATA.map((addon) => {
                const isChecked = selectedAddons.includes(addon.id);
                return (
                  <div
                    key={addon.id}
                    onClick={() => toggleAddon(addon.id)}
                    className={`cursor-pointer p-4 rounded-2xl border-2 flex items-center justify-between transition-all ${
                      isChecked
                        ? "bg-[#CFF726] border-[#0D1309] text-[#0D1309]"
                        : "bg-[#F4F8EC] border-[#0D1309]/20 text-[#0D1309] hover:border-[#0D1309]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded-md flex items-center justify-center border-2 border-[#0D1309] ${
                          isChecked
                            ? "bg-[#0D1309] text-[#CFF726]"
                            : "bg-white"
                        }`}
                      >
                        {isChecked && <Check className="w-4 h-4 stroke-[3]" />}
                      </div>
                      <div>
                        <div className="text-sm font-extrabold text-[#0D1309]">{addon.name}</div>
                        <div className="text-xs text-[#2E3827] font-semibold">{addon.description}</div>
                      </div>
                    </div>
                    <div className="text-sm font-black text-[#0D1309] shrink-0 ml-2">
                      + R$ {addon.price}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Step 5 */}
          <div className="glass-card-light rounded-2xl p-6 border-2 border-[#0D1309] bg-white grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-[#0D1309] mb-1">Seu Nome / Empresa (Opcional):</label>
              <input
                type="text"
                placeholder="Ex: Empresa XYZ / Ana Silva"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="w-full bg-[#F4F8EC] border-2 border-[#0D1309] rounded-xl px-4 py-2.5 text-[#0D1309] text-sm font-bold focus:outline-none focus:bg-[#CFF726]/30"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#0D1309] mb-1">Observações (Opcional):</label>
              <input
                type="text"
                placeholder="Ex: Aniversário, evento de equipe..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full bg-[#F4F8EC] border-2 border-[#0D1309] rounded-xl px-4 py-2.5 text-[#0D1309] text-sm font-bold focus:outline-none focus:bg-[#CFF726]/30"
              />
            </div>
          </div>
        </div>

        {/* Live Summary Card */}
        <div className="lg:col-span-5 sticky top-28">
          <div className="glass-card-light rounded-3xl p-6 sm:p-8 border-4 border-[#0D1309] shadow-2xl space-y-6 relative overflow-hidden bg-[#CFF726]">
            <div className="border-b-2 border-[#0D1309] pb-4">
              <span className="text-xs uppercase tracking-wider text-[#0D1309] font-black bg-white px-2.5 py-1 rounded-md border border-[#0D1309]">
                Resumo da Reserva
              </span>
              <h3 className="text-2xl font-black text-[#0D1309] mt-2">{selectedTour.title}</h3>
              <p className="text-xs text-[#0D1309] font-bold mt-1">{selectedTour.subtitle}</p>
            </div>

            <div className="space-y-3 text-sm font-bold text-[#0D1309]">
              <div className="flex justify-between py-1 border-b border-[#0D1309]/20">
                <span>Data:</span>
                <span>{date}</span>
              </div>

              <div className="flex justify-between py-1 border-b border-[#0D1309]/20">
                <span>Horário:</span>
                <span>{timeSlot}</span>
              </div>

              <div className="flex justify-between py-1 border-b border-[#0D1309]/20">
                <span>Participantes / Grupo:</span>
                <span>{isCorporate ? corporateTier : `${passengers} remador(es)`}</span>
              </div>

              <div className="flex justify-between py-1 border-b border-[#0D1309]/20">
                <span>Valor Base:</span>
                <span>R$ {basePrice}</span>
              </div>

              {selectedAddons.length > 0 && (
                <div className="flex justify-between py-1 border-b border-[#0D1309]/20">
                  <span>Adicionais ({selectedAddons.length}):</span>
                  <span>+ R$ {addonsTotal * (isCorporate ? 10 : passengers)}</span>
                </div>
              )}
            </div>

            {/* Total Price Display */}
            <div className="bg-[#0D1309] rounded-2xl p-5 border-2 border-[#0D1309] text-center text-white">
              <span className="text-xs text-[#CFF726] uppercase tracking-widest block font-black">
                Valor Total Estimado
              </span>
              <div className="text-4xl font-black text-white mt-1">
                R$ <span className="text-[#CFF726]">{totalPrice}</span>
              </div>
              <span className="text-[11px] text-slate-300 block mt-1">
                Pagamento via PIX ou Cartão após confirmação
              </span>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleBookingSubmit}
              disabled={submitting}
              className="w-full py-4.5 rounded-2xl font-black text-base bg-[#0D1309] text-[#CFF726] hover:bg-[#1A2612] shadow-2xl hover:scale-[1.02] transition-all flex items-center justify-center gap-3 group border-2 border-[#0D1309]"
            >
              <MessageCircle className="w-5 h-5 fill-[#CFF726] text-[#0D1309]" />
              <span>{submitting ? "Gerando Reserva..." : "Finalizar Reserva no WhatsApp"}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-[#CFF726]" />
            </button>

            <div className="flex items-center justify-center gap-2 text-xs text-[#0D1309] font-extrabold pt-1">
              <ShieldCheck className="w-4 h-4 text-[#0D1309]" />
              <span>Sem cobrança imediata no site • Confirmação direta</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
