import Header from "@/components/layout/Header";
import Hero from "@/components/section/Hero";
import SelectedWork from "@/components/section/SelectedWork";
import About from "@/components/section/About";
import Toolkit from "@/components/section/Toolkit";
import Games from "@/components/section/Games";
import Contact from "@/components/section/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080906] text-[#e4e4dd] pt-16">
      <Header />
      <Hero />
      <SelectedWork />
      <About />
      <Toolkit />
      <Games />
      <Contact />
    </main>
  );
}