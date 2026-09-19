import type { Metadata } from "next";
import { Syne, Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";
import CursorGlow from "@/components/shared/CursorGlow";
import SmoothScroll from "@/components/providers/SmoothScroll";
import ScrollProgress from "@/components/ui/ScrollProgress";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-outfit",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ather Labs — AI Apps & Web Development Studio",
  description: "We build AI-powered apps and world-class websites for ambitious brands.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${outfit.variable} ${spaceGrotesk.variable}`}
    >
      <body className="bg-ather-black text-ather-white antialiased overflow-x-hidden font-body">
        <ScrollProgress />
        <SmoothScroll>
          <CursorGlow />
          <div className="relative min-h-screen flex flex-col">
            {children}
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}

