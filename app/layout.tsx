import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Direct Title Loans | Fast Cash Using Your Vehicle Title | CA & FL",
  description: "Direct Title Loans - Get fast cash using your vehicle title. Serving California and Florida with 10 loan types. Bad credit OK, same-day funding.",
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
