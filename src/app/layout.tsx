import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.scss";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RCS",
  description: "Ru Crypto Squad DAO. Welcome to the Etherion world!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
