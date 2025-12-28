import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Pipeline Cleaning Services in UAE",
    template: "%s | Abhi Drain Line Cleaning",
  },
  description:
    "Professional pipeline and drain line cleaning services in UAE for residential, commercial, and industrial needs.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
