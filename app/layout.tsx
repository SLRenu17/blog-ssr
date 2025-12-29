import "./globals.css";
import "./header.css";
import "./footer.css";
import type { ReactNode } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "Abhi Drain Line Cleaning Services UAE",
  description:
    "Professional drain, sewage, and pipeline cleaning services across Dubai, Abu Dhabi, Sharjah, and Ajman.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Font Awesome CDN */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body>
        <Header />
        <main className="container main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
