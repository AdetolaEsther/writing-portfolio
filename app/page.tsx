import Hero from "@/components/Hero";
import SelectedWriting from "@/components/SelectedWriting";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Masthead from "@/components/Masthead";
import SectionNav from "@/components/Sectionnav";

export default function Home() {
  return (
    <>
      <Masthead />
      <SectionNav />

      <main className="min-h-screen">
        <Hero />
        <SelectedWriting />
        <About />
        <Footer />
      </main>
    </>
  );
}