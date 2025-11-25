import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { muiTheme } from "../components/elements/muiTheme";
import { ThemeProvider } from "@mui/material/styles";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SysRest",
  description: "Sistema de Restaurante",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-[#FFFCFD]`}
      >
        <ThemeProvider theme={muiTheme}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
