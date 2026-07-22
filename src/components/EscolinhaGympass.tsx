"use client";

import { Award, CheckCircle2, HeartPulse, ChevronRight, Anchor, UserCheck } from "lucide-react";

export default function EscolinhaGympass() {
  const scrollToBooking = () => {
    const el = document.getElementById("reserva");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="escolinha" className="py-20 px-4 relative z-10 max-w-7xl mx-auto space-y-12">
      {/* Top Banner: Modalities OC6 vs V1 */}
      <div className="glass-card-light rounded-3xl p-6 sm:p-8 border-2 border-[#0D1309] bg-white">
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-2">
          <span className="text-xs font-black uppercase tracking-wider bg-[#CFF726] px-3 py-1 rounded-full border border-[#0D1309]">
            Modalidades da Escolinha
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#0D1309]">
            Treino Coletivo (OC6) ou Técnica Individual (V1)
          </h2>
          <p className="text-[#2E3827] text-xs sm:text-sm font-semibold">
            Na Base Jurema você aprende desde os fundamentos do trabalho em equipe até o controle avançado em canoa individual.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#F4F8EC] p-6 rounded-2xl border-2 border-[#0D1309] space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black bg-[#0D1309] text-[#CFF726] px-2.5 py-1 rounded-md">
                OC6 • Canoa Coletiva (6 Pessoas)
              </span>
              <Anchor className="w-5 h-5 text-[#0D1309]" />
            </div>
            <h4 className="text-lg font-black text-[#0D1309]">Iniciação & Treino em Equipe</h4>
            <p className="text-xs text-[#2E3827] font-semibold leading-relaxed">
              Ideal para iniciantes e intermediários. Aprenda a ler as marés, sincronia de remada, postura correta, segurança marítima e espírito de equipe dentro da canoa tradicional de 6 lugares.
            </p>
          </div>

          <div className="bg-[#CFF726] p-6 rounded-2xl border-2 border-[#0D1309] space-y-3 shadow-md">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black bg-[#0D1309] text-white px-2.5 py-1 rounded-md">
                V1 • Canoa Individual
              </span>
              <UserCheck className="w-5 h-5 text-[#0D1309]" />
            </div>
            <h4 className="text-lg font-black text-[#0D1309]">Aperfeiçoamento Técnico & Autonomia</h4>
            <p className="text-xs text-[#0D1309] font-bold leading-relaxed">
              Para quem deseja evoluir a técnica no V1 sem leme. Foco em equilíbrio, controle de direção, potência de puxada e autonomia total no mar da Curva da Jurema.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Escolinha Plans */}
        <div className="lg:col-span-7 glass-card-light rounded-3xl p-6 sm:p-10 border-2 border-[#0D1309] flex flex-col justify-between relative overflow-hidden bg-white">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#CFF726] text-[#0D1309] text-xs font-black uppercase tracking-wider border-2 border-[#0D1309]">
              <HeartPulse className="w-4 h-4 text-[#0D1309]" />
              <span>Saúde, Fitness & Estilo de Vida</span>
            </div>

            <div>
              <h3 className="text-3xl font-black text-[#0D1309]">
                Escolinha de Canoa Havaiana <span className="bg-[#CFF726] px-2 py-0.5 rounded-xl border-2 border-[#0D1309]">Base Jurema</span>
              </h3>
              <p className="text-[#2E3827] text-sm sm:text-base mt-2 leading-relaxed font-semibold">
                Transforme sua rotina com a prática constante de um esporte completo que fortalece o corpo, reduz o estresse do dia a dia e promove amizades verdadeiras no mar de Vitória.
              </p>
            </div>

            {/* Plan Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-[#F4F8EC] rounded-2xl p-5 border-2 border-[#0D1309] hover:bg-[#CFF726]/30 transition-all">
                <span className="text-xs font-black text-[#0D1309] uppercase tracking-wider block">Plano Mensal 2x</span>
                <div className="text-3xl font-black text-[#0D1309] mt-1">
                  R$ 220 <span className="text-xs text-[#2E3827] font-bold">/mês</span>
                </div>
                <ul className="space-y-2 mt-4 text-xs font-bold text-[#0D1309]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0D1309] shrink-0" />
                    <span>2 treinos semanais fixos (OC6/V1)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0D1309] shrink-0" />
                    <span>Horários flexíveis (manhã / tarde)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0D1309] shrink-0" />
                    <span>Guarda de remos e coletes na base</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#CFF726] rounded-2xl p-5 border-2 border-[#0D1309] shadow-lg relative">
                <span className="absolute -top-3 right-4 px-2.5 py-0.5 rounded-full bg-[#0D1309] text-[#CFF726] font-black text-[10px]">
                  RECOMENDADO
                </span>
                <span className="text-xs font-black text-[#0D1309] uppercase tracking-wider block">Plano Mensal 3x</span>
                <div className="text-3xl font-black text-[#0D1309] mt-1">
                  R$ 280 <span className="text-xs text-[#0D1309] font-bold">/mês</span>
                </div>
                <ul className="space-y-2 mt-4 text-xs font-black text-[#0D1309]">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0D1309] shrink-0" />
                    <span>3 treinos semanais inclusos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0D1309] shrink-0" />
                    <span>Participação nos remadões da equipe</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#0D1309] shrink-0" />
                    <span>Desconto em eventos e fotos</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t-2 border-[#0D1309]/10 mt-6 flex items-center justify-between">
            <span className="text-xs text-[#2E3827] font-bold">Quer testar primeiro? Aula experimental R$ 80.</span>
            <button
              onClick={scrollToBooking}
              className="px-4 py-2 rounded-xl text-xs font-black lime-fluor-btn flex items-center gap-1 border-2 border-[#0D1309]"
            >
              <span>Matricular-se</span>
              <ChevronRight className="w-4 h-4 text-[#0D1309]" />
            </button>
          </div>
        </div>

        {/* Wellhub Card */}
        <div className="lg:col-span-5 glass-card-light rounded-3xl p-6 sm:p-8 border-4 border-[#0D1309] flex flex-col justify-between bg-[#CFF726]">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D1309] text-[#CFF726] text-xs font-black">
                <Award className="w-4 h-4 text-[#CFF726]" />
                <span>Parceiro Oficial Wellhub</span>
              </div>
              <span className="text-xl font-black text-[#0D1309] tracking-widest uppercase">Gympass</span>
            </div>

            <div>
              <h3 className="text-2xl font-black text-[#0D1309]">Treine na Base Jurema com seu Wellhub</h3>
              <p className="text-[#0D1309] text-xs sm:text-sm mt-2 font-bold leading-relaxed">
                Você pode utilizar o seu plano Wellhub para participar das nossas aulas de Canoa Havaiana na Curva da Jurema.
              </p>
            </div>

            <div className="space-y-3 bg-white p-4 rounded-2xl border-2 border-[#0D1309] text-xs font-bold text-[#0D1309]">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#CFF726] text-[#0D1309] font-black border border-[#0D1309] flex items-center justify-center text-xs shrink-0">
                  1
                </div>
                <div>
                  <strong className="text-[#0D1309] block">Agende o horário previamente</strong>
                  <span>Entre em contato pelo nosso WhatsApp para reservar sua vaga na canoa.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#CFF726] text-[#0D1309] font-black border border-[#0D1309] flex items-center justify-center text-xs shrink-0">
                  2
                </div>
                <div>
                  <strong className="text-[#0D1309] block">Faça o Check-in no aplicativo</strong>
                  <span>Ao chegar na base na Curva da Jurema, valide o check-in no App Wellhub.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#CFF726] text-[#0D1309] font-black border border-[#0D1309] flex items-center justify-center text-xs shrink-0">
                  3
                </div>
                <div>
                  <strong className="text-[#0D1309] block">Pronto! É só remar</strong>
                  <span>Pegue seu colete e remo e aproveite o treino com nossa equipe.</span>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={scrollToBooking}
            className="w-full mt-6 py-3.5 rounded-2xl font-black text-xs bg-[#0D1309] text-[#CFF726] hover:bg-[#1A2612] transition-all text-center block border-2 border-[#0D1309]"
          >
            Agendar Treino pelo Wellhub
          </button>
        </div>
      </div>
    </section>
  );
}
