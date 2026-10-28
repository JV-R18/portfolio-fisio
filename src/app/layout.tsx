import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dra. Ana Rosinete | Fisioterapia & Bem-Estar",
  description: "Atendimento especializado em Fisioterapia, Liberação Miofascial, Drenagem Linfática, Massagens Terapêuticas e Atendimento Domiciliar.",
  keywords: ["Fisioterapia", "Liberação Miofascial", "Drenagem Linfática", "Massagem Relaxante", "Atendimento Domiciliar", "Fisioterapeuta"],
  authors: [{ name: "Dra. Ana Rosinete Batista Cardoso" }],
  openGraph: {
    title: "Dra. Ana Rosinete | Fisioterapia & Bem-Estar",
    description: "Agende sua consulta de fisioterapia e tratamentos corporais com atendimento personalizado.",
    type: "website",
    locale: "pt_BR",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50 text-slate-900 selection:bg-purple-200 selection:text-purple-900`}
      >
        {children}
      </body>
    </html>
  );
}