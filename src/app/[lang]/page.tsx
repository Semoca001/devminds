// src/app/[lang]/page.tsx
import Title from "@/app/components/ui/MainTitle/MainTitle";
import Hero from "@/app/components/sections/Hero";
import CallToAction from "@/app/components/sections/CallToAction"; // Nuevo import
import Sidebar from "@/app/components/layout/Sidebar/Sidebar";
import Footer from "@/app/components/layout/Footer/Footer";

export default function Home() {
  return (
    <>
      <Sidebar />
      <div className="lg:flex lg:flex-1 lg:ml-20 lg:mt-0 mt-20">
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 flex-1">
          <div className="max-w-8xl mx-auto">
            <Title />
            <Hero />
            <CallToAction /> {/* Nuevo componente agregado */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}