import { Roboto, Doto } from "next/font/google"; // Importa Doto
import type { Metadata } from "next";
import Sidebar from "./components/layout/Sidebar";
import Footer from "./components/layout/Footer";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto", // Para usar en Tailwind
  display: "swap",
});

const doto = Doto({
  subsets: ["latin"],
  weight: ["100", "400", "700"], // Ajusta según los pesos que necesites
  variable: "--font-doto", // Para usar en Tailwind
  display: "swap",
});

export const metadata: Metadata = {
  title: "DevMinds",
  description: "Landing page de DevMinds",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${roboto.variable} ${doto.variable}`}>
      <body className="bg-carbon text-whiteText min-h-screen flex flex-col font-roboto">
        {/* Sidebar */}
        <Sidebar />

        {/* Contenido principal con padding adaptado */}
        <div className="lg:flex lg:flex-1 lg:ml-20 lg:mt-0 mt-20">
          <main className="flex-1 p-4 sm:p-6 md:p-8 lg:p-10">{children}</main>
        </div>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
