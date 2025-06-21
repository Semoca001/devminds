'use client';

import Title from "@/app/components/ui/MainTitle/MainTitle";
import Hero from "@/app/components/sections/Hero";
import CallToAction from "@/app/components/sections/CallToAction";
import AboutUs from "@/app/components/sections/AboutUs/AboutUs";
import Services from "@/app/components/sections/Services/Services";
import Projects from "@/app/components/sections/Projects/Projects";
import Contact from "@/app/components/sections/Contact/Contact";
import Sidebar from "@/app/components/layout/Sidebar/Sidebar";
import Footer from "@/app/components/layout/Footer/Footer";
import ScrollIndicator from "@/app/components/ui/ScrollIndicator/ScrollIndicator";
import ScrollRevealWrapper from "@/app/components/ui/ScrollReveal/ScrollRevealWrapper";
import { DiagonalFlowBackground } from "@/app/components/backgrounds";
import { useScrollReveal } from "@/app/hooks/useScrollReveal";

export default function Home() {
  const { hasScrolled } = useScrollReveal(200);

  return (
    <div className="bg-main text-main min-h-screen flex flex-col">
      <Sidebar />
      <div className="lg:flex lg:flex-1 lg:ml-20 lg:mt-0 mt-20">
        {/* Contenido principal con fondo animado y z-index bajo */}
        <DiagonalFlowBackground className="flex-1 relative z-10">
          <div className="px-4 sm:px-6 md:px-8 lg:px-12">
            <div className="max-w-8xl mx-auto">
              {/* Contenido siempre visible */}
              <Title />
              <Hero />
              
              {/* Contenido que se revela con scroll */}
              <ScrollRevealWrapper isVisible={hasScrolled} delay={0.2}>
                <CallToAction />
                <AboutUs />
                <Services />
                <Projects />
                <Contact />
              </ScrollRevealWrapper>
            </div>
          </div>
        </DiagonalFlowBackground>
      </div>
      
      {/* Indicador de scroll - solo se muestra si no has scrolleado */}
      <ScrollIndicator show={!hasScrolled} />
      
      <Footer />
    </div>
  );
}