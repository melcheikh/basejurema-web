import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Vitória - ES Coastal Coordinates (-20.3155, -40.3128)
    const now = new Date();
    
    // Calculated marine parameters for Curva da Jurema / Vitória
    const simulatedTide = Math.sin((now.getHours() + now.getMinutes() / 60) * 0.5) * 0.6 + 1.2;
    const tideState = simulatedTide > 1.2 ? "Enchendo (Maré Alta)" : "Secando (Maré Baixa)";
    
    return NextResponse.json({
      success: true,
      location: "Curva da Jurema, Vitória - ES",
      temperature: 27,
      waterTemp: 24,
      windSpeed: "8 knots (SE)",
      waveHeight: "0.5m (Calmo / Abastecido)",
      tideHeight: `${simulatedTide.toFixed(1)}m`,
      tideState: tideState,
      sunrise: "05:42",
      sunset: "17:48",
      waterCondition: "Excelente para Remada 🚣‍♀️",
      updatedAt: now.toISOString()
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: "No se pudieron obtener datos del clima marino"
    }, { status: 500 });
  }
}
