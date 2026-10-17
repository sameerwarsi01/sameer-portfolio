import Header from "@/components/layout/Header";
import Hero from "@/components/section/Hero";
import SelectedWork from "@/components/section/SelectedWork";
import Toolkit from "@/components/section/Toolkit";
import About from "@/components/section/About";
import Playground from "@/components/section/Playground";
import Contact from "@/components/section/Contact";
import CommandMenu from "@/components/ui/CommandMenu";

export default function Home() {
  return (
    <main className="relative min-h-screen selection:bg-emerald-500/20 selection:text-emerald-300">
      <Header />
      <Hero />
      <SelectedWork />
      <Toolkit />
      <About />
      <Playground />
      <Contact />
      <CommandMenu />
    </main>
  );
}