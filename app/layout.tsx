import type { Metadata } from "next";
import { Geist, Geist_Mono, Crimson_Text } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";
import BodyWrapper from "@/components/BodyWrapper";
import MediaNavbar from "@/components/navbar/MediaNavbar";
import { CartContextProvider } from "@/lib/CartContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const crimsonText = Crimson_Text({
  variable: "--font-crimson",
  subsets: ["latin"],
  weight: "400",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ascend",
  description: "Something For Everyone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <CartContextProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} ${crimsonText.variable} antialiased bg-[var(--primary-color)]`}
        >
          <Navbar />
          <MediaNavbar />
          <BodyWrapper className="mt-16 md:mt-28">{children}</BodyWrapper>
          <Footer />
        </body>
      </CartContextProvider>
    </html>
  );
}
