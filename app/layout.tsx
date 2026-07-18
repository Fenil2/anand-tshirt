import type { Metadata } from "next";
import { Preloader } from "@/components/preloader";
import { ScrollReveal } from "@/components/scroll-reveal";
import "./globals.css";

export const metadata: Metadata = {
  title: "SpotDot",
  description: "Premium single-page website for t-shirt sales, essentials, and seasonal collections."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Preloader />
        <ScrollReveal />
        {children}
      </body>
    </html>
  );
}
