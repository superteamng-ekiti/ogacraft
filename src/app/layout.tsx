import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PrivyAuthProvider } from "@/providers/privy-provider";
import { Toaster } from "@/components/ui/sonner";

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ogacraft",
  description: "Empowering Artisans. Serving Communities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interSans.variable} antialiased`}
      >
        <PrivyAuthProvider>
          {children}
        </PrivyAuthProvider>
        <Toaster richColors />
      </body>
    </html>
  );
}
