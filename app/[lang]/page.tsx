import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MenuSection from "@/components/MenuSection";
import GallerySection from "@/components/GallerySection";
import OrderSection from "@/components/OrderSection";
import LocationSection from "@/components/LocationSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import { getDictionary } from "@/lib/dictionaries";
import { LanguageProvider } from "@/components/LanguageProvider";

export default async function Home({ params }: { params: Promise<{ lang: 'en' | 'fi' | 'sv' }> }) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return (
    <LanguageProvider dictionary={dictionary} lang={lang}>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <MenuSection />
        <GallerySection />
        <OrderSection />
        <LocationSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
