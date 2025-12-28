import "./globals.css";
import type { ReactNode } from "react";

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
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
