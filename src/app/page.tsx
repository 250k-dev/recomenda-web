import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { Crops } from "@/components/landing/crops";
import { Problem } from "@/components/landing/problem";
import { Features } from "@/components/landing/features";
import { Personas } from "@/components/landing/personas";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Spotlight } from "@/components/landing/spotlight";
import { Faq } from "@/components/landing/faq";
import { Cta } from "@/components/landing/cta";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-brand-700 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white focus:shadow-lift"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Crops />
        <Problem />
        <Features />
        <Personas />
        <HowItWorks />
        <Spotlight />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
