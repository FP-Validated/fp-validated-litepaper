import type { Metadata, Viewport } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "FP Validated · Litepaper 2026",
  description:
    "FP Validated is a blockchain infrastructure service provider for validator and RPC infrastructure.",
  openGraph: {
    title: "FP Validated · Litepaper 2026",
    description:
      "Institutional staking infrastructure for builders and institutions.",
    type: "website"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#040404"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
