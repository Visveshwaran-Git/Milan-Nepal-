import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MenuSection from "@/components/MenuSection";
import GallerySection from "@/components/GallerySection";
import ReservationSection from "@/components/ReservationSection";
import OrderSection from "@/components/OrderSection";
import LocationSection from "@/components/LocationSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <MenuSection />
        <GallerySection />
        <ReservationSection />
        <OrderSection />
        <LocationSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </>
  );
}
