// src/app/[lang]/page.tsx
import Title from "@/app/components/ui/MainTitle/MainTitle";
import Hero from "@/app/components/sections/Hero";
import CallToAction from "@/app/components/sections/CallToAction";
import Sidebar from "@/app/components/layout/Sidebar/Sidebar";
import Footer from "@/app/components/layout/Footer/Footer";
import { DiagonalFlowBackground } from "@/app/components/backgrounds";

export default function Home() {
  return (
    <>
      <Sidebar />
      <div className="lg:flex lg:flex-1 lg:ml-20 lg:mt-0 mt-20">
        {/* Contenido principal con fondo animado */}
        <DiagonalFlowBackground className="flex-1">
          <div className="px-4 sm:px-6 md:px-8 lg:px-12">
            <div className="max-w-8xl mx-auto">
              <Title />
              <Hero />
              <CallToAction />
            </div>
          </div>
        </DiagonalFlowBackground>
      </div>
      <Footer />
    </>
  );
}