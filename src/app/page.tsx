import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LiveConditions from "@/components/LiveConditions";
import BookingWidget from "@/components/BookingWidget";
import ToursShowcase from "@/components/ToursShowcase";
import RouteMap from "@/components/RouteMap";
import EscolinhaGympass from "@/components/EscolinhaGympass";
import GalleryReviews from "@/components/GalleryReviews";
import Footer from "@/components/Footer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#071325] text-slate-100 overflow-x-hidden selection:bg-cyan-500 selection:text-slate-950">
      <Navbar />
      <Hero />
      <LiveConditions />
      <BookingWidget />
      <ToursShowcase />
      <RouteMap />
      <EscolinhaGympass />
      <GalleryReviews />
      <Footer />
      <WhatsAppFloatingButton />
    </main>
  );
}
