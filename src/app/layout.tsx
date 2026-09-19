import type { Metadata } from "next";
import { Syne, Outfit, Space_Grotesk } from "next/font/google";
import "../../app/globals.css";
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
  metadataBase: new URL("https://atherlabs.vercel.app"),
  title: "Ather Labs — AI Apps & Web Development Studio",
  description:
    "Ather Labs builds AI-powered applications, world-class websites, and futuristic digital experiences for ambitious brands.",
  keywords: [
    "Ather Labs",
    "AI development",
    "web development",
    "Next.js studio",
    "AI apps",
    "3D websites",
    "freelance development studio",
  ],
  authors: [{ name: "Ather Labs" }],
  openGraph: {
    title: "Ather Labs — AI Apps & Web Development Studio",
    description:
      "Ather Labs builds AI-powered applications, world-class websites, and futuristic digital experiences for ambitious brands.",
    url: "https://atherlabs.vercel.app",
    siteName: "Ather Labs",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ather Labs",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ather Labs — AI Apps & Web Development Studio",
    description:
      "Ather Labs builds AI-powered applications, world-class websites, and futuristic digital experiences for ambitious brands.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
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
          <div className="relative min-h-screen flex flex-col">
            {children}
            <CursorGlow />
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
