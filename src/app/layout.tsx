import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { PROFILE } from "@/lib/data";
import { asset } from "@/lib/asset";
import "./globals.css";

const interTight = localFont({
  src: "../fonts/InterTight-Variable.woff2",
  variable: "--font-inter-tight",
  weight: "100 900",
  display: "swap",
});

const instrumentSerif = localFont({
  src: [
    { path: "../fonts/InstrumentSerif-Regular.woff2", weight: "400", style: "normal" },
    { path: "../fonts/InstrumentSerif-Italic.woff2", weight: "400", style: "italic" },
  ],
  variable: "--font-instrument-serif",
  display: "swap",
});

const jetbrainsMono = localFont({
  src: "../fonts/JetBrainsMono-Variable.woff2",
  variable: "--font-jetbrains-mono",
  weight: "100 800",
  display: "swap",
  preload: false,
});

const title = `${PROFILE.name} — ${PROFILE.role}`;
const description =
  "Estudiante de Ciencia de Datos en la Universidad del Norte. Python, R, Machine Learning y MLOps, con proyectos en riesgo crediticio y salud.";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title,
  description,
  authors: [{ name: PROFILE.name }],
  icons: { icon: asset("/favicon.svg") },
  openGraph: { type: "website", locale: "es_CO", title, description },
  twitter: { card: "summary", title, description },
};

export const viewport: Viewport = {
  themeColor: "#f4ecdf",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${interTight.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
