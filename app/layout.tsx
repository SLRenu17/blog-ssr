import "./globals.css";
import "./header.css";
import "./footer.css";
import type { ReactNode } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
        <Footer />
      </body>
    </html>
  );
}
