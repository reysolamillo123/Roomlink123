import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { AppCarousel } from "./components/AppCarousel";
import { ValuePropSection } from "./components/ValuePropSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { TrustSection } from "./components/TrustSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen w-full relative overflow-hidden" style={{ fontFamily: "Inter, sans-serif" }}>
      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <AppCarousel />
        <ValuePropSection />
        <FeaturesSection />
        <TrustSection />
        <TestimonialsSection />
        <Footer />
      </div>
    </div>
  );
}
