import type { Metadata } from "next";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import "./globals.css";

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
    <html lang="es">
      <body className="bg-[#191919] text-white min-h-screen flex flex-col">
        {/* Sidebar */}
        <Sidebar />

        {/* Contenido principal */}
        <div className="lg:flex lg:flex-1 lg:ml-20 lg:mt-0 mt-20">
          <main className="flex-1 p-10">{children}</main>
        </div>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
