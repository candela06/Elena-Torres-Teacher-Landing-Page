import Header from "./components/Header";
import Hero from "./components/Hero";
import Modalities from "./components/Modalities";
import Tutor from "./components/Tutor";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import MobileNav from "./components/MobileNav";

function App() {
  return (
    <div id="inicio" className="min-h-screen bg-surface pb-16">

      <Header />

      <main className="flex flex-col relative w-full pt-16 pb-24 bg-surface min-h-screen">
        <Hero />
        <Modalities />

        <div id="tutor">
          <Tutor />
        </div>

        <FAQ />

        <div id="contacto">
          <FinalCTA />
        </div>
      </main>

      <Footer />

      <WhatsAppButton />

      <MobileNav />

    </div>
  );
}

export default App;