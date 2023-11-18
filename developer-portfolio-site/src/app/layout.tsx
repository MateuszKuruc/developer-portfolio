import type { Metadata } from "next";
import "./globals.css";

import NavBar from "./components/landing-page-components/NavBar";
import Footer from "./components/landing-page-components/Footer";

import Providers from "./Providers";

export const metadata: Metadata = {
  title: "Mateusz Kuruc - JavaScript Developer",
  description: "Mateusz Kuruc - JavaScript Developer",
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/apple-touch-icon.png"],
  },
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
