import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";

const inter = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Smart Scripter",
  description: "AI-powered content generation platform designed to revolutionize the way you create written content",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
