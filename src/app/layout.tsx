import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SmoothScrolling from "@/provider/smooth-scroll";

const zodiak = localFont({
  src: [
    {
      path: "./fonts/zodiak/ZodiakBlack.woff",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/zodiak/ZodiakBold.woff",
      weight: "700",
      style: "normal",
    },
    // {
    //   path: "./fonts/zodiak/ZodiakExtraBold.woff",
    //   weight: "800",
    //   style: "normal",
    // },
    {
      path: "./fonts/zodiak/ZodiakRegular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/zodiak/ZodiakLight.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/zodiak/ZodiakThin.woff",
      weight: "200",
      style: "normal",
    },
  ],
  variable: "--font-zodiak",
});

const helvetica = localFont({
  src: [
    {
      path: "./fonts/helvetica/HelveticaNeueBlack.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/helvetica/HelveticaNeueBold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/helvetica/HelveticaNeueHeavy.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/helvetica/HelveticaNeueLight.otf",
      weight: "300", // Light is typically mapped to 300
      style: "normal",
    },
    {
      path: "./fonts/helvetica/HelveticaNeueMedium.otf",
      weight: "500", // Medium is typically mapped to 500
      style: "normal",
    },
    {
      path: "./fonts/helvetica/HelveticaNeueThin.otf",
      weight: "200", // Thin is correctly mapped to 200
      style: "normal",
    },
    {
      path: "./fonts/helvetica/HelveticaNeueUltraLight.otf",
      weight: "100", // UltraThin is typically mapped to 100
      style: "normal",
    },
  ],
  variable: "--font-helvetica",
});

export const metadata: Metadata = {
  title: "ACI Voyage",
  description: "Tailor-made since 1998",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${zodiak.variable} ${helvetica.variable} antialiased`}>
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  );
}
