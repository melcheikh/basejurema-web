export interface Tour {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  unit: string;
  duration: string;
  schedule: string[];
  capacity: string;
  difficulty: "Fácil / Para Todos" | "Moderado" | "Aventura";
  popular?: boolean;
  badge?: string;
  image: string;
  description: string;
  highlights: string[];
  included: string[];
}

export const TOURS_DATA: Tour[] = [
  {
    id: "nascer-do-sol",
    title: "Remada Nascer do Sol",
    subtitle: "A experiência mais mágica das águas capixabas ao amanhecer",
    price: 90,
    unit: "por pessoa",
    duration: "1h 30min",
    schedule: ["05:30 (Amanhecer)", "06:00 (Primeiros Raios)"],
    capacity: "Até 6 remadores por canoa",
    difficulty: "Fácil / Para Todos",
    popular: true,
    badge: "O mais vendido 🌅",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    description: "Assista ao nascer do sol espetacular sobre o oceano enquanto rema em perfeita sincronia pelas águas calmas da Curva da Jurema. Um momento inesquecível de reflexão, energia renovada e conexão total com o mar.",
    highlights: [
      "Vista panorâmica do nascer do sol no mar de Vitória",
      "Café / Chá e frutas tropicais de boas-vindas após a remada",
      "Instrutor credenciado guiando todo o percurso",
      "Equipamentos de segurança completos (Colete homologado)"
    ],
    included: ["Canoa Havaiana tradicional", "Remo e Colete Salva-vidas", "Instrução antes de entrar na água", "Fotos cortesia do grupo"]
  },
  {
    id: "por-do-sol",
    title: "Remada Pôr do Sol & Golden Hour",
    subtitle: "Entardecer dourado contemplando a silhueta da Terceira Ponte",
    price: 90,
    unit: "por pessoa",
    duration: "1h 30min",
    schedule: ["16:30", "17:00 (Entardecer)"],
    capacity: "Até 6 remadores por canoa",
    difficulty: "Fácil / Para Todos",
    popular: true,
    badge: "Visual Incrível 🌆",
    image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80",
    description: "O fim de tarde em Vitória ganha cores alucinantes no oceano. Reme com tranquilidade ao entardecer, contemplando a Terceira Ponte, o Convento da Penha ao fundo e o espetáculo do céu em tons alaranjados e violeta.",
    highlights: [
      "Fotografias incríveis com a luz dourada do fim de tarde",
      "Clima relaxante para encerrar o dia de forma renovadora",
      "Percurso tranquilo em águas abrigadas",
      "Ideal para casais, grupos de amigos e famílias"
    ],
    included: ["Equipamento completo", "Guia capitão de canoa", "Instruções de navegação", "Fotos em alta resolução"]
  },
  {
    id: "remada-experimental",
    title: "Aula Experimental de Canoa Havaiana",
    subtitle: "Aprenda a técnica tradicional da Va'a e apaixone-se pelo esporte",
    price: 80,
    unit: "por aula",
    duration: "1h 15min",
    schedule: ["06:30", "07:30", "17:30"],
    capacity: "Até 6 alunos",
    difficulty: "Fácil / Para Todos",
    badge: "Ideal para iniciantes 🚣‍♀️",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
    description: "Nunca remou antes? Sem problemas! Nossa aula experimental ensina postura, pegada no remo, trabalho em equipe, ritmo e segurança na água. A introdução perfeita ao estilo de vida da Canoa Havaiana.",
    highlights: [
      "Briefing teórico de 15 minutos em terra firme",
      "Técnica de remada eficiente e ergonomia",
      "Exercício completo para corpo e mente ao ar livre",
      "Sem necessidade de experiência prévia"
    ],
    included: ["Acompanhamento de instrutor", "Remo adaptado", "Colete de segurança", "Desconto de primeira mensalidade"]
  },
  {
    id: "passeio-ilhas",
    title: "Expedição Ilhas de Vitória (Ilha do Boi & Frade)",
    subtitle: "Navegação estendida explorando costões rochosos e enseadas secretas",
    price: 150,
    unit: "por pessoa",
    duration: "2h 30min",
    schedule: ["07:00 (Manhã de Sábado/Domingo)"],
    capacity: "Até 12 pessoas (2 canoas)",
    difficulty: "Moderado",
    badge: "Eco-Aventura 🏝️",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    description: "Uma verdadeira expedição marítima pelas ilhas mais belas de Vitória. Remaremos contornando a Ilha do Boi e Ilha do Frade, com parada técnica para mergulho livre e contemplação das águas cristalinas.",
    highlights: [
      "Parada para mergulho em enseada paradisíaca",
      "Contemplação da fauna marinha (tartarugas e peixes)",
      "Lanche reforçado de frutas e hidratação na água",
      "Cobertura com Fotos & Vídeos de Drone profissionais"
    ],
    included: ["Equipamento e coletes", "Lanche e hidratação", "Guia capitão experiente", "Pack de fotos/drone digital"]
  },
  {
    id: "corporativo",
    title: "Remada Corporativa & Team Building",
    subtitle: "Sincronia, liderança e união para sua equipe no mar de Vitória",
    price: 600,
    unit: "pacote base (até 6 pess.)",
    duration: "2h 00min",
    schedule: ["Horário personalizado sob agendamento"],
    capacity: "Grupos de 6 a 30 colaboradores",
    difficulty: "Fácil / Para Todos",
    badge: "Empresas & Eventos 💼",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    description: "A Canoa Havaiana é o símbolo máximo de trabalho em equipe: se todos não remarem no mesmo ritmo, a canoa não avança com velocidade. Uma vivência transformadora para fortalecer laços corporativos, comunicação e bem-estar.",
    highlights: [
      "Dinâmica de integração de equipe e liderança guiada",
      "Desafio amigável de sincronia e regata de grupos",
      "Espaço físico da base reservado para a equipe",
      "Option de Coffee-Break completo à beira-mar"
    ],
    included: ["Múltiplas canoas com instrutores", "Briefing de segurança corporativo", "Fotos e Vídeos em alta resolução", "Certificado simbólico de participação"]
  }
];

export const ADDONS_DATA = [
  {
    id: "drone-photos",
    name: "Pacote Foto & Drone Profissional (Fotto)",
    price: 45,
    description: "Fotos em altíssima resolução e tomada aérea de drone durante sua remada"
  },
  {
    id: "breakfast",
    name: "Café da Manhã Especial na Base",
    price: 35,
    description: "Tapioca / Sanduíche natural, suco fresco, café passado e salada de frutas após a remada"
  },
  {
    id: "sup-rental",
    name: "30min Extra de Stand Up Paddle (SUP)",
    price: 30,
    description: "Aproveite 30 minutos adicionais remando em prancha individual de SUP"
  }
];

export const REVIEWS_DATA = [
  {
    id: 1,
    author: "Renata Vasconcellos",
    role: "Remadora Frequente & Advogada",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    comment: "Experiência surreal! Ver o nascer do sol do meio do mar em Vitória muda o dia de qualquer um. A equipe da Base Jurema é acolhedora, atenciosa e passa muita segurança!",
    tour: "Remada Nascer do Sol"
  },
  {
    id: 2,
    author: "Felipe Drummond",
    role: "Empresário - Tech Vitória",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    comment: "Fizemos o evento de fim de ano da nossa empresa com a Base Jurema. Foi espetacular! Todos os colaboradores amaram a dinâmica de trabalho em equipe na canoa havaiana.",
    tour: "Remada Corporativa"
  },
  {
    id: 3,
    author: "Camila Ribeiro",
    role: "Designer & Praticante Wellhub",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    comment: "Uso meu Wellhub (Gympass) semanalmente na Base Jurema. As aulas são dinâmicas, os instrutores corrigem nossa postura e a vibe da galera na Curva da Jurema é imbatível!",
    tour: "Escolinha / Planos"
  }
];
