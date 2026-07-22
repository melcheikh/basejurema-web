import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Base Jurema | Passeios & Escolinha de Canoa Havaiana em Vitória/ES",
  description: "Descubra a beleza do nascer e pôr do sol remando em uma Canoa Havaiana (Va'a) na Curva da Jurema, Vitória - ES. Agendamento online instantâneo, aulas experimentais, passeios ecológicos e parceria Wellhub.",
  keywords: ["Canoa Havaiana Vitória", "Base Jurema", "Passeio de canoa Vitória ES", "Curva da Jurema remada", "Remada Nascer do Sol Vitória", "Gympass Canoa Havaiana", "Wellhub Vitória"],
  authors: [{ name: "Base Jurema" }],
  openGraph: {
    title: "Base Jurema | Canoa Havaiana na Curva da Jurema • Vitória/ES",
    description: "Viva a energia do mar de Vitória ao amanhecer e entardecer. Reservas diretas via WhatsApp.",
    url: "https://juremapasseios.com.br",
    siteName: "Base Jurema",
    images: [
      {
        url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Canoa Havaiana ao Nascer do Sol na Curva da Jurema"
      }
    ],
    locale: "pt_BR",
    type: "website"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Outfit:wght@400;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased selection:bg-cyan-500 selection:text-slate-950">
        {children}
      </body>
    </html>
  );
}
