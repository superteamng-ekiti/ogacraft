import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PrivyAuthProvider } from "@/providers/privy-provider";
import { Toaster } from "@/components/ui/sonner";
import { QueryProvider } from "@/providers/query-provider";
import "react-day-picker/dist/style.css"
import { TooltipProvider } from "@radix-ui/react-tooltip";

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
          <QueryProvider>
            <TooltipProvider>
            {children}
            </TooltipProvider>
          </QueryProvider>
        </PrivyAuthProvider>
        <Toaster richColors />
      </body>
    </html>
  );
}
