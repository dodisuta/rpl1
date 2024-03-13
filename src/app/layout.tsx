import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RPL 1",
  description: "Website kelas RPL 1 smkn situraja",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="no-visible-scrollbar dark">
      <head>
        <link rel="shortcut icon" href="/images/logo.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
