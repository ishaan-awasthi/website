import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ishaan awasthi",
  description: "who even reads these?",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
