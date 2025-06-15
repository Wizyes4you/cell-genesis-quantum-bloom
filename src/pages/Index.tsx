
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Stats from "@/components/landing/Stats";
import Manifesto from "@/components/landing/Manifesto";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="bg-background text-foreground font-sans">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Manifesto />
        {/* Roadmap component can be added here later */}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
