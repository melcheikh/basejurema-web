import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { tourTitle, date, timeSlot, passengers, selectedAddons, totalPrice, customerName, notes } = body;

    const BASE_WHATSAPP = "5527999310057";

    let message = `*Olá, equipe Base Jurema!* 🛶🌊\n\nGostaria de solicitar o agendamento da minha experiência de Canoa Havaiana na Curva da Jurema:\n\n`;
    message += `📌 *Passeio:* ${tourTitle}\n`;
    message += `📅 *Data:* ${date}\n`;
    message += `⏰ *Horário:* ${timeSlot}\n`;
    message += `👥 *Pessoas:* ${passengers} remador(es)\n`;
    
    if (selectedAddons && selectedAddons.length > 0) {
      message += `✨ *Adicionais:* ${selectedAddons.join(", ")}\n`;
    }
    
    if (customerName) {
      message += `👤 *Nome:* ${customerName}\n`;
    }

    if (notes) {
      message += `📝 *Observações:* ${notes}\n`;
    }

    message += `\n💰 *Valor Total Estimado:* R$ ${totalPrice}\n\n`;
    message += `Poderiam confirmar a disponibilidade para esta data e envio do PIX/reserva? Obrigado!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${BASE_WHATSAPP}&text=${encodedMessage}`;

    return NextResponse.json({
      success: true,
      whatsappUrl,
      formattedMessage: message
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: "Error formateando la reserva"
    }, { status: 400 });
  }
}
