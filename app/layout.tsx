import "./globals.css";
import "./header.css";
import type { ReactNode } from "react";
import Header from "./components/Header";

export const metadata = {
  title: "Abhi Drain Line Cleaning Blogs",
  description: "Professional drain line cleaning insights and updates",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="container" style={{ marginTop: '90px' }}>{children}</main>
      </body>
    </html>
  );
}
