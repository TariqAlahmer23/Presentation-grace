import type { Metadata } from "next";
import localFont from "next/font/local";
import { StarfieldBackground } from "@/components/StarfieldBackground";
import "../styles/globals.css";

const inter = localFont({
  src: "./fonts/grace-sans.ttf",
  variable: "--font-inter",
  display: "swap"
});

const arabic = localFont({
  src: "./fonts/grace-arabic.ttf",
  variable: "--font-arabic",
  display: "swap"
});

export const metadata: Metadata = {
  title: "GRACE Presentation",
  description: "Premium presentation website for the GRACE mental health platform."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${arabic.variable} relative isolate overflow-x-hidden font-sans antialiased`}
      >
        <StarfieldBackground />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
