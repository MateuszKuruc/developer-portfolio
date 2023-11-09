import type { Metadata } from "next";
import "./globals.css";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import Providers from "./Providers";

export const metadata: Metadata = {
  title: "Mateusz Kuruc - portfolio",
  description: "Portfolio site by Mateusz Kuruc",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <NavBar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
